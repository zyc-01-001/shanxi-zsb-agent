# 山西统招专升本·计算机大类答疑智能助手

## 项目简介
专为山西专升本计算机大类考生打造的答疑智能助手，覆盖C程序设计、高等数学、公共英语、计算机基础四大科目。

## 功能
- 知识点讲解：基于本地知识库检索
- 考试信息查询：分值、题型、时长
- 刷题练习：随机出题，每次3道
- 解题答疑：支持各科目题目解析

## 目录结构
```
D:\shanxi_zsb_agent\
├── app.py                 # Flask主程序
├── requirements.txt       # 依赖
├── config/
│   └── config.py          # 配置文件
├── app/
│   ├── __init__.py        # 包初始化
│   ├── knowledge_engine.py # 知识库引擎
│   ├── qa_engine.py       # 问答引擎
│   └── templates/
│       └── index.html     # 前端页面
└── data/
    ├── exam_info.json     # 考试信息
    ├── knowledge_base.json # 知识库(34条)
    └── question_bank.json  # 题库(18题)
```

## 安装运行
【执行目录：D:\shanxi_zsb_agent】

1. 安装依赖：
   pip install -r requirements.txt

2. 启动服务：
   python app.py

3. 浏览器访问：
   http://127.0.0.1:5000

## 技术栈
- 后端：Python + Flask
- 前端：HTML/CSS/JS（原生，无框架）
- 数据：JSON本地知识库
- 预留：大模型API接口
