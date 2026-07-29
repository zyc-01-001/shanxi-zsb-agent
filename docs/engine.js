/**
 * 山西专升本计算机大类 - JavaScript问答引擎
 * 功能：意图识别、知识检索、答案生成、刷题出题
 *
 * 依赖：需要先加载 data.js（EXAM_INFO, KNOWLEDGE_BASE, QUESTION_BANK）
 */

// ==================== 科目映射 ====================
const SUBJECT_MAP = {
  '高数': '高等数学',
  '数学': '高等数学',
  '微积分': '高等数学',
  '极限': '高等数学',
  '导数': '高等数学',
  '积分': '高等数学',
  'c语言': 'C语言程序设计',
  'c程序': 'C语言程序设计',
  '编程': 'C语言程序设计',
  '指针': 'C语言程序设计',
  '数组': 'C语言程序设计',
  '函数': 'C语言程序设计',
  '英语': '公共英语',
  '词汇': '公共英语',
  '语法': '公共英语',
  '计算机基础': '计算机基础',
  '网络': '计算机基础',
  '操作系统': '计算机基础',
};

// ==================== 意图关键词 ====================
const INTENT_PATTERNS = {
  '刷题': ['刷题', '出题', '练习', '做几道', '考考我', '出几道'],
  '考试信息': ['考试时间', '分值', '科目', '大纲', '考纲', '题型', '总分'],
  '知识点': ['什么是', '解释', '讲解', '知识点', '概念', '公式', '怎么算', '怎么求'],
  '做题': ['求值', '计算', '求极限', '求导', '求积分', '解方程', '运行结果', '输出什么'],
};

// ==================== 当前题目状态 ====================
let _currentQuestions = [];

// ==================== 简单中文分词 ====================
function _tokenize(text) {
  // 移除标点符号，按空白切分
  const cleaned = text.replace(/[，。、；：？！\s,.;:?!()\[\]{}""''\']+/g, ' ');
  return cleaned.split(' ').filter(t => t.trim().length > 0);
}

// ==================== 模糊匹配（类似Python的SequenceMatcher.ratio） ====================
function _stringRatio(a, b) {
  if (a.length === 0 && b.length === 0) return 1;
  if (a.length === 0 || b.length === 0) return 0;

  // 使用最长公共子序列比例作为简易相似度
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  const lcs = dp[m][n];
  return lcs / Math.max(m, n);
}

// ==================== 搜索打分 ====================
function _score(queryTokens, item) {
  const title = item.title || '';
  const keywords = item.keywords || [];
  const content = item.content || '';
  const tags = item.tags || [];

  let score = 0;
  const allText = (title + ' ' + keywords.join(' ') + ' ' + content + ' ' + tags.join(' ')).toLowerCase();

  // 关键词精确匹配：+10分
  for (const kw of keywords) {
    const kwLower = kw.toLowerCase();
    for (const qt of queryTokens) {
      const qtLower = qt.toLowerCase();
      if (qtLower.includes(kwLower) || kwLower.includes(qtLower)) {
        score += 10;
      }
    }
  }

  // 标题匹配：+8分
  for (const qt of queryTokens) {
    if (title.toLowerCase().includes(qt.toLowerCase())) {
      score += 8;
    }
  }

  // 内容匹配：+2分
  for (const qt of queryTokens) {
    if (content.toLowerCase().includes(qt.toLowerCase())) {
      score += 2;
    }
  }

  // 标签匹配：+5分
  for (const qt of queryTokens) {
    for (const tag of tags) {
      if (tag.toLowerCase().includes(qt.toLowerCase())) {
        score += 5;
      }
    }
  }

  // 模糊匹配（ratio>0.5）：+int(ratio*5)
  for (const qt of queryTokens) {
    const ratio = _stringRatio(qt, title);
    if (ratio > 0.5) {
      score += Math.floor(ratio * 5);
    }
  }

  return score;
}

// ==================== 知识库搜索 ====================
function _searchKnowledge(query, subject, limit) {
  limit = limit || 5;
  const queryTokens = _tokenize(query);
  if (queryTokens.length === 0) return [];

  // 按科目筛选
  let searchPool = KNOWLEDGE_BASE;
  if (subject) {
    searchPool = searchPool.filter(item => item.subject === subject);
  }

  // 打分
  const results = [];
  for (const item of searchPool) {
    const s = _score(queryTokens, item);
    if (s > 0) {
      results.push({ score: s, item: item });
    }
  }

  // 按得分降序排序
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map(r => r.item);
}

// ==================== 格式化知识库结果 ====================
function _formatKnowledgeResults(items) {
  if (!items || items.length === 0) {
    return '未找到相关知识点，建议换个关键词搜索，或查阅山西省教育招生考试院官方文件。';
  }

  const output = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    output.push(`### ${i + 1}. ${item.title}`);
    output.push(`**科目**：${item.subject}`);
    if (item.keywords && item.keywords.length > 0) {
      output.push(`**关键词**：${item.keywords.join(', ')}`);
    }
    output.push('');
    output.push(item.content);
    if (item.easy_mistakes) {
      output.push('');
      output.push(`**易错点**：`);
      output.push(item.easy_mistakes);
    }
    output.push('');
  }
  return output.join('\n');
}

// ==================== 科目识别 ====================
function _detectSubject(query) {
  const queryLower = query.toLowerCase();
  for (const [keyword, subject] of Object.entries(SUBJECT_MAP)) {
    if (queryLower.includes(keyword.toLowerCase())) {
      return subject;
    }
  }
  return null;
}

// ==================== 意图识别 ====================
function _detectIntent(query) {
  const queryLower = query.toLowerCase();
  for (const [intent, patterns] of Object.entries(INTENT_PATTERNS)) {
    for (const p of patterns) {
      if (queryLower.includes(p.toLowerCase())) {
        return intent;
      }
    }
  }
  return '知识点'; // 默认意图
}

// ==================== 处理知识点查询 ====================
function _handleKnowledge(query, subject) {
  let results = _searchKnowledge(query, subject, 3);
  if (results.length > 0) {
    return _formatKnowledgeResults(results);
  }
  // 如果指定了科目没找到，尝试全局搜索
  if (subject) {
    results = _searchKnowledge(query, null, 3);
    if (results.length > 0) {
      return _formatKnowledgeResults(results);
    }
  }
  return (
    '未找到直接匹配的知识点。\n\n' +
    '建议：\n' +
    '1. 换个关键词试试\n' +
    '2. 指定科目，如"高数 极限""C语言 指针"\n' +
    '3. 该问题暂无权威明确信息，请查阅山西省教育招生考试院官方文件'
  );
}

// ==================== 格式化考试信息 ====================
function _formatAllExamInfo() {
  return (
    '**山西专升本计算机大类考试信息**\n\n' +
    `**总分**：${EXAM_INFO.total_score}分\n\n` +
    '**科目一：专业基础课**\n' +
    `- 科目：${EXAM_INFO.subject1_name}\n` +
    `- 分值：${EXAM_INFO.subject1_score}分\n` +
    `- 时长：${EXAM_INFO.subject1_duration}分钟\n\n` +
    '**科目二：公共基础课**\n' +
    `- 英语：${EXAM_INFO.english_score}分\n` +
    `- 高等数学：${EXAM_INFO.math_score}分\n` +
    `- 合计：${EXAM_INFO.subject2_score}分\n` +
    `- 英语+高数同一张试卷\n\n` +
    '**参考来源**：山西省教育招生考试院官方公告'
  );
}

function _formatScoreInfo() {
  return (
    '**分值分布**\n\n' +
    '| 科目 | 分值 |\n' +
    '|------|------|\n' +
    `| C程序设计 | ${EXAM_INFO.subject1_score}分 |\n` +
    `| 高等数学 | ${EXAM_INFO.math_score}分 |\n` +
    `| 公共英语 | ${EXAM_INFO.english_score}分 |\n` +
    `| **总分** | **${EXAM_INFO.total_score}分** |`
  );
}

function _formatQuestionTypes() {
  const qt = EXAM_INFO.question_types;
  return (
    '**题型分布**\n\n' +
    '**C程序设计（150分）：**\n' +
    '- 客观题约45%：单选题、判断题、程序阅读题\n' +
    '- 主观题约55%：程序填空题、程序改错题、编程题\n\n' +
    '**高等数学（100分）：**\n' +
    '- 客观题约40%：单项选择题、填空题\n' +
    '- 主观题约60%：计算题、证明题、应用题\n\n' +
    '**英语（50分）：**\n' +
    '- 词汇语法选择题、阅读理解、完形填空、翻译、写作'
  );
}

function _formatTimeInfo() {
  return (
    '**考试时长**\n\n' +
    '| 科目 | 时长 |\n' +
    '|------|------|\n' +
    `| C程序设计 | ${EXAM_INFO.subject1_duration}分钟 |\n` +
    '| 英语+高数 | 同一张试卷，英语约40分钟完成 |'
  );
}

// ==================== 处理考试信息查询 ====================
function _handleExamInfo(query) {
  if (!EXAM_INFO || !EXAM_INFO.total_score) {
    return '考试信息暂未加载，请检查数据文件。';
  }

  if (query.includes('总分') || query.includes('分值')) {
    return _formatScoreInfo();
  } else if (query.includes('题型')) {
    return _formatQuestionTypes();
  } else if (query.includes('时间')) {
    return _formatTimeInfo();
  } else {
    return _formatAllExamInfo();
  }
}

// ==================== 处理刷题请求 ====================
function _handlePractice(subject) {
  if (!QUESTION_BANK || QUESTION_BANK.length === 0) {
    return '题库暂未加载，请检查数据文件。';
  }

  // 筛选题目
  let pool = QUESTION_BANK;
  if (subject) {
    pool = pool.filter(q => q.subject === subject);
  }

  if (pool.length === 0) {
    return `暂无${subject || '该科目'}的题目，试试其他科目：高数、C语言、英语、计算机基础`;
  }

  // 随机选min(3, pool.length)道题
  const count = Math.min(3, pool.length);
  const selected = _shuffle(pool).slice(0, count);

  // 保存当前题目供查看答案
  _currentQuestions = selected;

  const output = ['**练习题（每次最多3道）**\n'];
  for (let i = 0; i < selected.length; i++) {
    const q = selected[i];
    output.push(`### 第${i + 1}题（${q.subject}）`);
    output.push(`**题目**：${q.question}`);
    if (q.options) {
      for (const opt of q.options) {
        output.push(`  ${opt}`);
      }
    }
    output.push(`\n*答案和解析请回复：查看答案 ${i + 1}*\n`);
  }
  return output.join('\n');
}

// ==================== 查看答案 ====================
function showAnswer(index) {
  if (!_currentQuestions || _currentQuestions.length === 0) {
    return '暂无当前题目，请先刷题。';
  }
  if (index < 1 || index > _currentQuestions.length) {
    return `题号错误，请输入1-${_currentQuestions.length}之间的数字。`;
  }
  const q = _currentQuestions[index - 1];
  const output = [`### 第${index}题答案\n`];
  output.push(`**答案**：${q.answer || '无'}`);
  if (q.analysis) {
    output.push('');
    output.push(`**解析**：`);
    output.push(q.analysis);
  }
  if (q.code) {
    output.push('');
    output.push(`**代码**：`);
    output.push('```c');
    output.push(q.code);
    output.push('```');
  }
  return output.join('\n');
}

// ==================== 处理具体做题请求 ====================
function _handleProblem(query, subject) {
  const results = _searchKnowledge(query, subject, 2);
  if (results.length > 0) {
    const output = ['**相关解题方法**\n'];
    output.push(_formatKnowledgeResults(results));
    output.push('\n如需详细解题步骤，请把完整题目发给我。');
    return output.join('\n');
  }
  return (
    '请把完整的题目发给我，我会给出答案和分步解析。\n' +
    '支持：高数计算题、C语言程序阅读/编程题、英语语法题等。'
  );
}

// ==================== Fisher-Yates洗牌算法 ====================
function _shuffle(arr) {
  const a = [...arr]; // 不修改原数组
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ==================== 主入口：处理用户问题 ====================
function answer(query) {
  query = (query || '').trim();
  if (!query) {
    return '请输入您的问题。';
  }

  const intent = _detectIntent(query);
  const subject = _detectSubject(query);

  // 意图路由
  switch (intent) {
    case '刷题':
      return _handlePractice(subject);
    case '考试信息':
      return _handleExamInfo(query);
    case '做题':
      return _handleProblem(query, subject);
    case '知识点':
    default:
      return _handleKnowledge(query, subject);
  }
}

// ==================== 导出 ====================
// Node.js 环境导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    answer,
    showAnswer,
    _detectSubject,
    _detectIntent,
    _searchKnowledge,
    _formatKnowledgeResults,
    _handleKnowledge,
    _handleExamInfo,
    _handlePractice,
    _handleProblem,
  };
}
