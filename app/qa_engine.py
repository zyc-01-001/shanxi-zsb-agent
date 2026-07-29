# -*- coding: utf-8 -*-
"""
问答引擎 - 智能体核心
功能：意图识别、知识检索、答案生成、刷题出题
"""

import json
import os
import random
from .knowledge_engine import KnowledgeBase


class QAAgent:
    """山西专升本答疑智能体"""

    # 科目映射
    SUBJECT_MAP = {
        '高数': '高等数学', '数学': '高等数学', '微积分': '高等数学',
        '极限': '高等数学', '导数': '高等数学', '积分': '高等数学',
        'c语言': 'C语言程序设计', 'c程序': 'C语言程序设计', '编程': 'C语言程序设计',
        '指针': 'C语言程序设计', '数组': 'C语言程序设计', '函数': 'C语言程序设计',
        '英语': '公共英语', '词汇': '公共英语', '语法': '公共英语',
        '计算机基础': '计算机基础', '网络': '计算机基础', '操作系统': '计算机基础',
    }

    # 意图关键词
    INTENT_PATTERNS = {
        '刷题': ['刷题', '出题', '练习', '做几道', '考考我', '出几道'],
        '考试信息': ['考试时间', '分值', '科目', '大纲', '考纲', '题型', '总分'],
        '知识点': ['什么是', '解释', '讲解', '知识点', '概念', '公式', '怎么算', '怎么求'],
        '做题': ['求值', '计算', '求极限', '求导', '求积分', '解方程', '运行结果', '输出什么'],
    }

    def __init__(self, data_dir):
        self.data_dir = data_dir
        self.kb = KnowledgeBase(data_dir)
        self.question_bank = self._load_questions()
        self.exam_info = self._load_exam_info()

    def _load_questions(self):
        """加载题库"""
        path = os.path.join(self.data_dir, 'question_bank.json')
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return []

    def _load_exam_info(self):
        """加载考试信息"""
        path = os.path.join(self.data_dir, 'exam_info.json')
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {}

    def _detect_subject(self, query):
        """识别用户查询的科目"""
        query_lower = query.lower()
        for keyword, subject in self.SUBJECT_MAP.items():
            if keyword in query_lower:
                return subject
        return None

    def _detect_intent(self, query):
        """识别用户意图"""
        for intent, patterns in self.INTENT_PATTERNS.items():
            for p in patterns:
                if p in query.lower():
                    return intent
        return '知识点'  # 默认意图

    def answer(self, query):
        """
        主入口：处理用户问题
        :param query: 用户输入
        :return: 回答文本
        """
        query = query.strip()
        if not query:
            return "请输入您的问题。"

        intent = self._detect_intent(query)
        subject = self._detect_subject(query)

        # 意图路由
        if intent == '刷题':
            return self._handle_practice(subject)
        elif intent == '考试信息':
            return self._handle_exam_info(query)
        elif intent == '做题':
            return self._handle_problem(query, subject)
        else:
            return self._handle_knowledge(query, subject)

    def _handle_knowledge(self, query, subject):
        """处理知识点查询"""
        results = self.kb.search(query, subject=subject, limit=3)
        if results:
            return self.kb.format_result(results)
        # 如果没找到，尝试全局搜索
        results = self.kb.search(query, limit=3)
        if results:
            return self.kb.format_result(results)
        return ("未找到直接匹配的知识点。\n\n"
                "建议：\n"
                "1. 换个关键词试试\n"
                "2. 指定科目，如\"高数 极限\"\"C语言 指针\"\n"
                "3. 该问题暂无权威明确信息，请查阅山西省教育招生考试院官方文件")

    def _handle_exam_info(self, query):
        """处理考试信息查询"""
        if not self.exam_info:
            return "考试信息暂未加载，请检查数据文件。"

        # 根据查询返回相关信息
        if '总分' in query or '分值' in query:
            return self._format_score_info()
        elif '题型' in query:
            return self._format_question_types()
        elif '时间' in query:
            return self._format_time_info()
        else:
            return self._format_all_exam_info()

    def _format_all_exam_info(self):
        return f"""**山西专升本计算机大类考试信息**

**总分**：{self.exam_info.get('total_score', 300)}分

**科目一：专业基础课**
- 科目：{self.exam_info.get('subject1_name', 'C程序设计')}
- 分值：{self.exam_info.get('subject1_score', 150)}分
- 时长：{self.exam_info.get('subject1_duration', 120)}分钟

**科目二：公共基础课**
- 英语：{self.exam_info.get('english_score', 50)}分
- 高等数学：{self.exam_info.get('math_score', 100)}分
- 合计：{self.exam_info.get('subject2_score', 150)}分
- 英语+高数同一张试卷

**参考来源**：山西省教育招生考试院官方公告"""

    def _format_score_info(self):
        return f"""**分值分布**

| 科目 | 分值 |
|------|------|
| C程序设计 | {self.exam_info.get('subject1_score', 150)}分 |
| 高等数学 | {self.exam_info.get('math_score', 100)}分 |
| 公共英语 | {self.exam_info.get('english_score', 50)}分 |
| **总分** | **{self.exam_info.get('total_score', 300)}分** |"""

    def _format_question_types(self):
        return f"""**题型分布**

**C程序设计（150分）：**
- 客观题约45%：单选题、判断题、程序阅读题
- 主观题约55%：程序填空题、程序改错题、编程题

**高等数学（100分）：**
- 客观题约40%：单项选择题、填空题
- 主观题约60%：计算题、证明题、应用题

**英语（50分）：**
- 词汇语法选择题、阅读理解、完形填空、翻译、写作"""

    def _format_time_info(self):
        return f"""**考试时长**

| 科目 | 时长 |
|------|------|
| C程序设计 | {self.exam_info.get('subject1_duration', 120)}分钟 |
| 英语+高数 | 同一张试卷，英语约40分钟完成 |"""

    def _handle_practice(self, subject):
        """处理刷题请求"""
        if not self.question_bank:
            return "题库暂未加载，请检查数据文件。"

        # 筛选题目
        pool = self.question_bank
        if subject:
            pool = [q for q in pool if q.get('subject') == subject]

        if not pool:
            return f"暂无{subject or '该科目'}的题目，试试其他科目：高数、C语言、英语、计算机基础"

        # 随机选3道
        selected = random.sample(pool, min(3, len(pool)))
        output = ["**练习题（每次最多3道）**\n"]
        for i, q in enumerate(selected, 1):
            output.append(f"### 第{i}题（{q.get('subject', '')}）")
            output.append(f"**题目**：{q.get('question', '')}")
            if q.get('options'):
                for opt in q['options']:
                    output.append(f"  {opt}")
            output.append(f"\n*答案和解析请回复：查看答案 {i}*\n")
        # 保存当前题目供查看答案
        self._current_questions = selected
        return '\n'.join(output)

    def show_answer(self, index):
        """显示题目答案"""
        if not hasattr(self, '_current_questions') or not self._current_questions:
            return "暂无当前题目，请先刷题。"
        if index < 1 or index > len(self._current_questions):
            return f"题号错误，请输入1-{len(self._current_questions)}之间的数字。"
        q = self._current_questions[index - 1]
        output = [f"### 第{index}题答案\n"]
        output.append(f"**答案**：{q.get('answer', '无')}")
        if q.get('analysis'):
            output.append(f"\n**解析**：\n{q['analysis']}")
        if q.get('code'):
            output.append(f"\n**代码**：\n```c\n{q['code']}\n```")
        return '\n'.join(output)

    def _handle_problem(self, query, subject):
        """处理具体题目"""
        # 尝试从知识库中找相关解题方法
        results = self.kb.search(query, subject=subject, limit=2)
        if results:
            output = ["**相关解题方法**\n"]
            output.append(self.kb.format_result(results))
            output.append("\n如需详细解题步骤，请把完整题目发给我。")
            return '\n'.join(output)
        return ("请把完整的题目发给我，我会给出答案和分步解析。\n"
                "支持：高数计算题、C语言程序阅读/编程题、英语语法题等。")

    def get_subjects(self):
        """获取支持的科目列表"""
        return ['高等数学', 'C语言程序设计', '公共英语', '计算机基础']
