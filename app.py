# -*- coding: utf-8 -*-
"""
Flask主应用 - 山西专升本答疑智能助手
"""

import os
import sys
from flask import Flask, render_template, request, jsonify

# 项目根目录（app.py所在目录）
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

from app.qa_engine import QAAgent
from config.config import SECRET_KEY

# 显式指定模板和静态文件目录（app子目录下）
TEMPLATE_DIR = os.path.join(BASE_DIR, 'app', 'templates')
STATIC_DIR = os.path.join(BASE_DIR, 'app', 'static')
app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)
app.config['SECRET_KEY'] = SECRET_KEY

# 数据目录
DATA_DIR = os.path.join(BASE_DIR, 'data')

# 初始化智能体
agent = QAAgent(DATA_DIR)


@app.route('/')
def index():
    """主页"""
    return render_template('index.html', subjects=agent.get_subjects())


@app.route('/api/chat', methods=['POST'])
def chat():
    """聊天API"""
    data = request.get_json()
    query = data.get('message', '').strip()

    if not query:
        return jsonify({'reply': '请输入您的问题。'})

    # 检查是否是查看答案命令
    if query.startswith('查看答案'):
        parts = query.split()
        if len(parts) >= 2:
            try:
                idx = int(parts[1])
                reply = agent.show_answer(idx)
                return jsonify({'reply': reply})
            except ValueError:
                pass
        return jsonify({'reply': '格式：查看答案 题号，例如：查看答案 1'})

    # 正常问答
    reply = agent.answer(query)
    return jsonify({'reply': reply})


@app.route('/api/practice', methods=['POST'])
def practice():
    """刷题API"""
    data = request.get_json()
    subject = data.get('subject', '')
    reply = agent._handle_practice(subject if subject else None)
    return jsonify({'reply': reply})


@app.route('/api/exam-info', methods=['GET'])
def exam_info():
    """考试信息API"""
    return jsonify(agent.exam_info)


@app.route('/api/subjects', methods=['GET'])
def subjects():
    """科目列表API"""
    return jsonify({'subjects': agent.get_subjects()})


@app.route('/api/knowledge/search', methods=['POST'])
def knowledge_search():
    """知识库搜索API"""
    data = request.get_json()
    query = data.get('query', '')
    subject = data.get('subject', None)
    results = agent.kb.search(query, subject=subject, limit=5)
    return jsonify({
        'count': len(results),
        'results': results
    })


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print("=" * 50)
    print("山西统招专升本·计算机大类答疑智能助手")
    print("=" * 50)
    print(f"数据目录：{DATA_DIR}")
    print(f"知识库条目：{len(agent.kb.knowledge)}")
    print(f"题库题目：{len(agent.question_bank)}")
    print("=" * 50)
    print(f"启动服务：http://0.0.0.0:{port}")
    print("=" * 50)
    app.run(host='0.0.0.0', port=port, debug=False)
