# -*- coding: utf-8 -*-
"""
知识库引擎 - 基于关键词匹配的本地检索
支持：知识点检索、考点定位、模糊匹配
"""

import json
import os
import re
from difflib import SequenceMatcher


class KnowledgeBase:
    """山西专升本知识库检索引擎"""

    def __init__(self, data_dir):
        self.data_dir = data_dir
        self.knowledge = []
        self.subjects = {}
        self._load()

    def _load(self):
        """加载知识库JSON"""
        kb_path = os.path.join(self.data_dir, 'knowledge_base.json')
        if os.path.exists(kb_path):
            with open(kb_path, 'r', encoding='utf-8') as f:
                self.knowledge = json.load(f)
        # 按科目分组
        for item in self.knowledge:
            subj = item.get('subject', '其他')
            if subj not in self.subjects:
                self.subjects[subj] = []
            self.subjects[subj].append(item)

    def _tokenize(self, text):
        """简单中文分词：按字切分 + 关键词提取"""
        # 移除标点符号
        text = re.sub(r'[，。、；：？！\s,.;:?!()\[\]{}""''\'\"]+', ' ', text)
        tokens = [t.strip() for t in text.split() if t.strip()]
        return tokens

    def _score(self, query_tokens, item):
        """计算查询与知识条目的匹配得分"""
        title = item.get('title', '')
        keywords = item.get('keywords', [])
        content = item.get('content', '')
        tags = item.get('tags', [])

        score = 0
        all_text = (title + ' ' + ' '.join(keywords) + ' ' + content + ' ' + ' '.join(tags)).lower()

        # 精确关键词匹配（权重最高）
        for kw in keywords:
            if kw.lower() in all_text:
                for qt in query_tokens:
                    if qt.lower() in kw.lower() or kw.lower() in qt.lower():
                        score += 10

        # 标题匹配
        for qt in query_tokens:
            if qt.lower() in title.lower():
                score += 8

        # 内容匹配
        for qt in query_tokens:
            if qt.lower() in content.lower():
                score += 2

        # 标签匹配
        for qt in query_tokens:
            for tag in tags:
                if qt.lower() in tag.lower():
                    score += 5

        # 模糊匹配加分
        for qt in query_tokens:
            ratio = SequenceMatcher(None, qt, title).ratio()
            if ratio > 0.5:
                score += int(ratio * 5)

        return score

    def search(self, query, subject=None, limit=5):
        """
        搜索知识库
        :param query: 用户查询
        :param subject: 限定科目（高数/C语言/英语/计算机基础）
        :param limit: 返回条数
        :return: 匹配的知识列表
        """
        query_tokens = self._tokenize(query)
        if not query_tokens:
            return []

        results = []
        search_pool = self.knowledge
        if subject and subject in self.subjects:
            search_pool = self.subjects[subject]

        for item in search_pool:
            score = self._score(query_tokens, item)
            if score > 0:
                results.append((score, item))

        # 按得分排序
        results.sort(key=lambda x: x[0], reverse=True)
        return [item for _, item in results[:limit]]

    def get_by_subject(self, subject):
        """获取某科目所有知识点"""
        return self.subjects.get(subject, [])

    def get_subjects(self):
        """获取所有科目"""
        return list(self.subjects.keys())

    def format_result(self, items):
        """格式化输出结果"""
        if not items:
            return "未找到相关知识点，建议换个关键词搜索，或查阅山西省教育招生考试院官方文件。"
        output = []
        for i, item in enumerate(items, 1):
            output.append(f"### {i}. {item.get('title', '未知')}")
            output.append(f"**科目**：{item.get('subject', '')}")
            if item.get('keywords'):
                output.append(f"**关键词**：{', '.join(item['keywords'])}")
            output.append(f"\n{item.get('content', '')}")
            if item.get('easy_mistakes'):
                output.append(f"\n**易错点**：\n{item['easy_mistakes']}")
            output.append("")
        return '\n'.join(output)
