/**
 * 山西专升本计算机大类 - JavaScript问答引擎 v2.0
 * 改进：更智能的意图识别、更精准的知识检索、更自然的回答
 */

// ==================== 科目映射 ====================
const SUBJECT_MAP = {
  '高数': '高等数学', '数学': '高等数学', '微积分': '高等数学',
  '极限': '高等数学', '导数': '高等数学', '积分': '高等数学',
  '微分': '高等数学', '泰勒': '高等数学', '级数': '高等数学',
  '洛必达': '高等数学', '中值定理': '高等数学',
  'c语言': 'C语言程序设计', 'c程序': 'C语言程序设计', '编程': 'C语言程序设计',
  '指针': 'C语言程序设计', '数组': 'C语言程序设计',
  '函数': 'C语言程序设计', 'switch': 'C语言程序设计',
  '循环': 'C语言程序设计', '结构体': 'C语言程序设计',
  '变量': 'C语言程序设计', '运算符': 'C语言程序设计',
  '英语': '公共英语', '词汇': '公共英语', '语法': '公共英语',
  '时态': '公共英语', '虚拟语气': '公共英语',
  '计算机基础': '计算机基础', '网络': '计算机基础',
  '操作系统': '计算机基础', '进制': '计算机基础',
  'ip': '计算机基础', 'osi': '计算机基础',
};

// ==================== 意图关键词 ====================
const INTENT_PATTERNS = {
  '刷题': ['刷题', '出题', '练习', '做几道', '考考我', '出几道', '来几道题'],
  '考试信息': ['考试时间', '分值', '科目', '大纲', '考纲', '题型', '总分', '考试信息', '考多少分', '多长时间'],
  '做题': ['求值', '计算', '求极限', '求导', '求积分', '解方程', '运行结果', '输出什么', '输出结果', '结果是'],
  '知识点': ['什么是', '解释', '讲解', '知识点', '概念', '公式', '怎么算', '怎么求', '怎么用', '是什么', '原理', '方法', '规则', '区别'],
};

let _currentQuestions = [];

// ==================== 分词 ====================
function _tokenize(text) {
  if (!text) return [];
  // 移除标点，保留中文、英文、数字、常见符号
  const cleaned = text.replace(/[，。、；：？！\s,.;:?!()\[\]{}""''']/g, ' ');
  const tokens = cleaned.split(' ').filter(t => t.trim().length > 0);
  // 额外提取2字组合用于中文匹配
  const extraTokens = [];
  for (const t of tokens) {
    if (/[\u4e00-\u9fa5]/.test(t) && t.length > 2) {
      // 提取2-3字的子串
      for (let i = 0; i < t.length - 1; i++) {
        extraTokens.push(t.substring(i, i + 2));
      }
    }
  }
  return [...tokens, ...extraTokens];
}

// ==================== 搜索打分 ====================
function _score(queryTokens, item) {
  const title = (item.title || '').toLowerCase();
  const keywords = (item.keywords || []).map(k => k.toLowerCase());
  const content = (item.content || '').toLowerCase();
  const tags = (item.tags || []).map(t => t.toLowerCase());

  let score = 0;
  const queryTokensLower = queryTokens.map(t => t.toLowerCase());

  // 关键词精确匹配（权重最高）
  for (const kw of keywords) {
    for (const qt of queryTokensLower) {
      if (qt === kw || qt.includes(kw) || kw.includes(qt)) {
        score += 15;
      }
    }
  }

  // 标题匹配
  for (const qt of queryTokensLower) {
    if (title.includes(qt)) {
      score += 10;
    }
    if (qt === title) {
      score += 10;
    }
  }

  // 标签匹配
  for (const qt of queryTokensLower) {
    for (const tag of tags) {
      if (tag.includes(qt) || qt.includes(tag)) {
        score += 6;
      }
    }
  }

  // 内容匹配
  for (const qt of queryTokensLower) {
    if (content.includes(qt)) {
      score += 2;
    }
  }

  return score;
}

// ==================== 知识库搜索 ====================
function _searchKnowledge(query, subject, limit) {
  limit = limit || 5;
  const queryTokens = _tokenize(query);
  if (queryTokens.length === 0) return [];

  let searchPool = KNOWLEDGE_BASE;
  if (subject) {
    searchPool = searchPool.filter(item => item.subject === subject);
  }

  const results = [];
  for (const item of searchPool) {
    const s = _score(queryTokens, item);
    if (s > 0) {
      results.push({ score: s, item: item });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit).map(r => r.item);
}

// ==================== 格式化知识库结果 ====================
function _formatKnowledgeResults(items) {
  if (!items || items.length === 0) {
    return null;
  }
  const output = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (i > 0) output.push('---');
    output.push(`### ${item.title}`);
    output.push(`> 📚 科目：${item.subject}`);
    output.push('');
    output.push(item.content);
    if (item.easy_mistakes) {
      output.push('');
      output.push(`> ⚠️ **易错点**：${item.easy_mistakes}`);
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
  return '知识点';
}

// ==================== 知识点查询 ====================
function _handleKnowledge(query, subject) {
  let results = _searchKnowledge(query, subject, 3);
  if (results.length > 0) {
    return _formatKnowledgeResults(results);
  }
  // 指定科目没找到 → 全局搜索
  if (subject) {
    results = _searchKnowledge(query, null, 3);
    if (results.length > 0) {
      return _formatKnowledgeResults(results);
    }
  }
  // 兜底：列出该科目所有知识点供选择
  let suggestion = '未找到直接匹配的知识点。\n\n';
  suggestion += '**你可以尝试以下方式：**\n';
  suggestion += '1. 换个关键词，如"高数 极限""C语言 指针"\n';
  suggestion += '2. 点击上方快捷按钮直接选择科目\n';
  suggestion += '3. 输入"刷题"开始练习\n\n';

  if (subject) {
    const subjectItems = KNOWLEDGE_BASE.filter(k => k.subject === subject);
    if (subjectItems.length > 0) {
      suggestion += `**${subject} 可查知识点：**\n`;
      for (const item of subjectItems.slice(0, 8)) {
        suggestion += `- ${item.title}\n`;
      }
      if (subjectItems.length > 8) {
        suggestion += `- ……等共${subjectItems.length}个知识点\n`;
      }
    }
  } else {
    suggestion += '**可查科目：** 高等数学、C语言程序设计、公共英语、计算机基础\n';
  }
  suggestion += '\n> 💡 该问题暂无权威明确信息，请查阅山西省教育招生考试院官方文件';
  return suggestion;
}

// ==================== 考试信息 ====================
function _formatAllExamInfo() {
  return (
    '**山西专升本计算机大类考试信息**\n\n' +
    `| 科目 | 分值 | 时长 |\n|------|------|------|\n` +
    `| ${EXAM_INFO.subject1_name} | ${EXAM_INFO.subject1_score}分 | ${EXAM_INFO.subject1_duration}分钟 |\n` +
    `| 高等数学+英语 | ${EXAM_INFO.subject2_score}分 | 同卷 |\n` +
    `| **总分** | **${EXAM_INFO.total_score}分** | - |\n\n` +
    `> 📌 英语${EXAM_INFO.english_score}分 + 高数${EXAM_INFO.math_score}分 = 公共基础课${EXAM_INFO.subject2_score}分（同一张试卷）\n\n` +
    '**参考来源**：山西省教育招生考试院'
  );
}

function _formatScoreInfo() {
  return (
    '**分值分布**\n\n' +
    '| 科目 | 分值 |\n|------|------|\n' +
    `| C程序设计 | ${EXAM_INFO.subject1_score}分 |\n` +
    `| 高等数学 | ${EXAM_INFO.math_score}分 |\n` +
    `| 公共英语 | ${EXAM_INFO.english_score}分 |\n` +
    `| **总分** | **${EXAM_INFO.total_score}分** |`
  );
}

function _formatQuestionTypes() {
  const qt = EXAM_INFO.question_types;
  let result = '**题型分布**\n\n';
  result += '**C程序设计（150分）：**\n';
  result += `- 客观题约45%：${qt['C程序设计'].客观题.split('：')[1]}\n`;
  result += `- 主观题约55%：${qt['C程序设计'].主观题.split('：')[1]}\n\n`;
  result += '**高等数学（100分）：**\n';
  result += `- 客观题约40%：${qt['高等数学'].客观题.split('：')[1]}\n`;
  result += `- 主观题约60%：${qt['高等数学'].主观题.split('：')[1]}\n\n`;
  result += '**英语（50分）：**\n';
  result += `- ${qt['英语'].题型}`;
  return result;
}

function _formatTimeInfo() {
  return (
    '**考试时长**\n\n' +
    '| 科目 | 时长 |\n|------|------|\n' +
    `| C程序设计 | ${EXAM_INFO.subject1_duration}分钟 |\n` +
    '| 英语+高数 | 同一张试卷，英语约40分钟 |\n\n' +
    '> 📌 两科分两天考试，C程序设计单独考，英语和高数合卷考'
  );
}

function _handleExamInfo(query) {
  if (!EXAM_INFO || !EXAM_INFO.total_score) {
    return '考试信息暂未加载，请检查数据文件。';
  }
  if (query.includes('总分') || query.includes('分值') || query.includes('多少分')) {
    if (query.includes('题型')) return _formatQuestionTypes();
    return _formatScoreInfo();
  }
  if (query.includes('题型')) return _formatQuestionTypes();
  if (query.includes('时间') || query.includes('多长') || query.includes('时长')) return _formatTimeInfo();
  return _formatAllExamInfo();
}

// ==================== 刷题 ====================
function _handlePractice(subject) {
  if (!QUESTION_BANK || QUESTION_BANK.length === 0) {
    return '题库暂未加载，请检查数据文件。';
  }
  let pool = QUESTION_BANK;
  if (subject) {
    pool = pool.filter(q => q.subject === subject);
  }
  if (pool.length === 0) {
    return `暂无${subject || '该科目'}的题目，试试其他科目：高数、C语言、英语、计算机基础`;
  }

  const count = Math.min(3, pool.length);
  const selected = _shuffle(pool).slice(0, count);
  _currentQuestions = selected;

  const output = ['**📝 练习题**（共' + selected.length + '道）\n'];
  for (let i = 0; i < selected.length; i++) {
    const q = selected[i];
    output.push(`### 第${i + 1}题（${q.subject}·${q.type}）`);
    output.push(q.question);
    if (q.options) {
      for (const opt of q.options) {
        output.push(`  ${opt}`);
      }
    }
    output.push('');
    output.push(`> 💡 回复 \`查看答案 ${i + 1}\` 查看答案和解析\n`);
  }
  return output.join('\n');
}

// ==================== 查看答案 ====================
function showAnswer(index) {
  if (!_currentQuestions || _currentQuestions.length === 0) {
    return '暂无当前题目，请先刷题。输入"刷题"开始练习。';
  }
  if (index < 1 || index > _currentQuestions.length) {
    return `题号错误，请输入 1 到 ${_currentQuestions.length} 之间的数字。`;
  }
  const q = _currentQuestions[index - 1];
  const output = [`### 第${index}题答案\n`];
  output.push(`**✅ 答案：${q.answer || '无'}**\n`);
  if (q.analysis) {
    output.push('**📖 解析：**\n');
    output.push(q.analysis);
  }
  if (q.code) {
    output.push('\n**💻 参考代码：**\n');
    output.push('```c');
    output.push(q.code);
    output.push('```');
  }
  return output.join('\n');
}

// ==================== 做题 ====================
function _handleProblem(query, subject) {
  const results = _searchKnowledge(query, subject, 2);
  if (results.length > 0) {
    let output = '**相关解题方法：**\n\n';
    output += _formatKnowledgeResults(results);
    output += '\n\n---\n如需详细解题步骤，请把完整题目发给我。';
    return output;
  }
  return '请把完整的题目发给我，我会给出**答案+分步解析**。\n\n支持：\n- 高数计算题（求极限、求导、积分等）\n- C语言程序阅读/编程题\n- 英语语法题';
}

// ==================== 工具函数 ====================
function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ==================== 主入口 ====================
function answer(query) {
  query = (query || '').trim();
  if (!query) {
    return '请输入您的问题。';
  }

  const intent = _detectIntent(query);
  const subject = _detectSubject(query);

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

// ==================== 智能搜索 ====================
// 全局搜索：在 KNOWLEDGE_BASE 中按关键词匹配，返回按匹配度排序的结果数组
function searchKnowledge(keyword) {
  if (!keyword || !keyword.trim()) return [];
  keyword = keyword.trim().toLowerCase();
  var results = [];
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
    var kb = KNOWLEDGE_BASE[i];
    var score = 0;
    // 标题匹配（权重最高）
    if (kb.title.toLowerCase().includes(keyword)) score += 10;
    // 关键词匹配
    if (kb.keywords) {
      for (var j = 0; j < kb.keywords.length; j++) {
        if (kb.keywords[j].toLowerCase().includes(keyword) || keyword.includes(kb.keywords[j].toLowerCase())) {
          score += 8;
        }
      }
    }
    // 标签匹配
    if (kb.tags) {
      for (var j = 0; j < kb.tags.length; j++) {
        if (kb.tags[j].toLowerCase().includes(keyword)) score += 5;
      }
    }
    // 内容匹配
    if (kb.content && kb.content.toLowerCase().includes(keyword)) score += 3;
    // 分词匹配（对中文关键词）
    var tokens = keyword.split(/[\s,，。、]+/).filter(function(t){return t.length > 1;});
    for (var t = 0; t < tokens.length; t++) {
      if (kb.title.includes(tokens[t])) score += 4;
      if (kb.content && kb.content.includes(tokens[t])) score += 2;
    }
    if (score > 0) {
      var summary = (kb.content || '').replace(/\*\*/g, '').replace(/\$\$/g, '').replace(/\n/g, ' ').substring(0, 100) + '...';
      results.push({ id: kb.id, subject: kb.subject, title: kb.title, summary: summary, score: score });
    }
  }
  results.sort(function(a, b) { return b.score - a.score; });
  return results;
}

// 渲染搜索结果为 HTML（供聊天界面展示）
function showSearchResults(keyword) {
  var results = searchKnowledge(keyword);
  var html = '';
  if (results.length === 0) {
    html = '<div style="padding:16px;background:rgba(0,240,255,0.05);border-radius:12px;border:1px solid rgba(0,240,255,0.2);color:rgba(255,255,255,0.6)">未找到与「' + keyword + '」相关的知识点，试试其他关键词？</div>';
  } else {
    html = '<div style="margin-bottom:8px;color:rgba(255,255,255,0.6);font-size:13px">🔍 找到 ' + results.length + ' 个相关知识点：</div>';
    for (var i = 0; i < results.length; i++) {
      var r = results[i];
      var color = r.subject === '高等数学' ? '#ff9800' : r.subject === 'C语言程序设计' ? '#a855f7' : r.subject === '公共英语' ? '#e91e63' : '#00bcd4';
      html += '<div style="margin-bottom:10px;padding:14px;background:rgba(255,255,255,0.05);border-radius:12px;border-left:3px solid ' + color + ';cursor:pointer" onclick="searchClickResult(\'' + r.id + '\')">' +
        '<div style="font-size:12px;color:' + color + ';margin-bottom:4px">' + r.subject + '</div>' +
        '<div style="font-size:15px;font-weight:600;color:#fff;margin-bottom:4px">' + r.title + '</div>' +
        '<div style="font-size:13px;color:rgba(255,255,255,0.5)">' + r.summary + '</div>' +
        '</div>';
    }
  }
  return html;
}

// 点击某条搜索结果后，展示该知识点的完整内容
function searchClickResult(kbId) {
  for (var i = 0; i < KNOWLEDGE_BASE.length; i++) {
    if (KNOWLEDGE_BASE[i].id === kbId) {
      var kb = KNOWLEDGE_BASE[i];
      var html = formatKnowledge(kb);
      addMessage(html, false);
      return;
    }
  }
}

// 格式化单条知识点为 Markdown 字符串（供 searchClickResult 调用，复用现有渲染管线）
function formatKnowledge(kb) {
  if (!kb) return '';
  var output = [];
  output.push('### ' + kb.title);
  output.push('> 📚 科目：' + kb.subject);
  output.push('');
  output.push(kb.content || '');
  if (kb.easy_mistakes) {
    output.push('');
    output.push('> ⚠️ **易错点**：' + kb.easy_mistakes);
  }
  output.push('');
  return output.join('\n');
}

// ==================== 导出 ====================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { answer, showAnswer, searchKnowledge, showSearchResults, searchClickResult, formatKnowledge, _detectSubject, _detectIntent, _searchKnowledge, _handleKnowledge, _handleExamInfo, _handlePractice, _handleProblem };
}
