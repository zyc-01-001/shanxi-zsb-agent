# -*- coding: utf-8 -*-
"""
山西统招专升本计算机大类专属答疑智能助手 - 配置文件
"""

import os

# 项目根目录
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Flask配置
SECRET_KEY = 'shanxi-zsb-agent-2026-secret'

# 数据文件路径
DATA_DIR = os.path.join(BASE_DIR, 'data')
KNOWLEDGE_BASE_FILE = os.path.join(DATA_DIR, 'knowledge_base.json')
QUESTION_BANK_FILE = os.path.join(DATA_DIR, 'question_bank.json')
EXAM_INFO_FILE = os.path.join(DATA_DIR, 'exam_info.json')

# 大模型API配置（预留，暂不使用）
LLM_API_URL = os.environ.get('LLM_API_URL', '')
LLM_API_KEY = os.environ.get('LLM_API_KEY', '')
LLM_ENABLED = False  # 默认关闭大模型，使用本地知识库

# 智能体角色设定
SYSTEM_PROMPT = """你是【山西统招专升本·计算机大类】备考答疑智能助手。

核心规则：
1. 只回答山西专升本计算机大类相关问题（公共英语、高等数学、C语言程序设计、计算机基础）
2. 回答优先依据本地知识库和官方考纲
3. 遇到不确定的问题，回复：该问题暂无权威明确信息，请查阅山西省教育招生考试院官方文件
4. 严禁编造知识点、真题、考纲
5. 严格区分省份，只使用山西专升本考情

输出风格：
1. 简洁明了，分点输出，大白话讲解
2. 重点内容简单标记，一眼看清核心要点
3. 不要华丽修饰，不要长篇大段堆砌
4. 做题：先给答案，再分步解析
5. C语言代码完整可复制运行
6. 刷题每次最多3道同类型变式题
"""
