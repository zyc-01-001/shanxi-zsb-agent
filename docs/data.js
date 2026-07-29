/**
 * 山西专升本计算机大类 - 数据文件
 * 包含：考试信息、知识库、题库
 */

// ==================== 考试信息 ====================
const EXAM_INFO = {
  "total_score": 300,
  "subject1_name": "C程序设计",
  "subject1_score": 150,
  "subject1_duration": 120,
  "subject2_name": "公共基础课",
  "subject2_score": 150,
  "english_score": 50,
  "math_score": 100,
  "math_duration": "80分钟",
  "english_duration": "约40分钟",
  "note": "高等数学和英语组成同一张试卷",
  "source": "山西省教育招生考试院",
  "applicable_majors": [
    "计算机科学与技术", "软件工程", "网络工程", "信息安全",
    "数字媒体技术", "物联网工程", "数据科学与大数据技术",
    "物联网工程技术", "软件工程技术", "计算机应用工程", "网络工程技术"
  ],
  "question_types": {
    "C程序设计": {
      "客观题": "约45%：单选题、判断题、程序阅读题",
      "主观题": "约55%：程序填空题、程序改错题、编程题"
    },
    "高等数学": {
      "客观题": "约40%：单项选择题、填空题",
      "主观题": "约60%：计算题、证明题、应用题、讨论题"
    },
    "英语": {
      "题型": "词汇语法选择题、阅读理解、完形填空、翻译、写作"
    }
  }
};

// ==================== 知识库（36条） ====================
const KNOWLEDGE_BASE = [
  {
    "id": "math_001",
    "subject": "高等数学",
    "title": "两个重要极限",
    "keywords": ["极限", "重要极限", "sinx/x", "重要极限公式"],
    "tags": ["高频考点", "必背公式"],
    "content": "第一重要极限：lim(x\u21920) sinx/x = 1\n推论：lim(x\u21920) tanx/x = 1，lim(x\u21920) arcsinx/x = 1，lim(x\u21920) arctanx/x = 1\n\n第二重要极限：lim(x\u2192\u221e) (1+1/x)^x = e\n变形：lim(x\u21920) (1+x)^(1/x) = e",
    "easy_mistakes": "1. 第二重要极限必须是1+无穷小的无穷大次方形式\n2. 注意变量要一致，如果x\u21920则用(1+x)^(1/x)，如果x\u2192\u221e则用(1+1/x)^x"
  },
  {
    "id": "math_002",
    "subject": "高等数学",
    "title": "等价无穷小替换",
    "keywords": ["等价无穷小", "无穷小", "替换", "求极限"],
    "tags": ["高频考点", "必背公式", "易错"],
    "content": "x\u21920时常用的等价无穷小：\n- sinx ~ x\n- tanx ~ x\n- arcsinx ~ x\n- arctanx ~ x\n- 1-cosx ~ x\u00b2/2\n- ln(1+x) ~ x\n- e^x - 1 ~ x\n- a^x - 1 ~ x\u00b7lna\n- (1+x)^a - 1 ~ ax\n- x - sinx ~ x\u00b3/6",
    "easy_mistakes": "等价无穷小替换只能用于乘除运算，不能用于加减运算！\n例如：lim(x\u21920) (tanx - sinx)/x\u00b3 不能直接替换成 (x-x)/x\u00b3=0，这是错误的。"
  },
  {
    "id": "math_003",
    "subject": "高等数学",
    "title": "基本求导公式",
    "keywords": ["求导", "导数", "导数公式", "基本公式"],
    "tags": ["高频考点", "必背公式"],
    "content": "基本求导公式：\n- (c)' = 0\n- (x^a)' = a\u00b7x^(a-1)\n- (a^x)' = a^x\u00b7lna，特别地 (e^x)' = e^x\n- (loga x)' = 1/(x\u00b7lna)，特别地 (lnx)' = 1/x\n- (sinx)' = cosx\n- (cosx)' = -sinx\n- (tanx)' = sec\u00b2x\n- (cotx)' = -csc\u00b2x\n- (secx)' = secx\u00b7tanx\n- (cscx)' = -cscx\u00b7cotx\n- (arcsinx)' = 1/\u221a(1-x\u00b2)\n- (arccosx)' = -1/\u221a(1-x\u00b2)\n- (arctanx)' = 1/(1+x\u00b2)\n- (arccotx)' = -1/(1+x\u00b2)",
    "easy_mistakes": "1. (sinx)' = cosx，但(cosx)' = -sinx，注意负号\n2. (arcsinx)'和(arccosx)'差一个负号\n3. 复合函数求导要用链式法则，不要漏层"
  },
  {
    "id": "math_004",
    "subject": "高等数学",
    "title": "复合函数求导（链式法则）",
    "keywords": ["复合函数", "链式法则", "求导", "嵌套"],
    "tags": ["高频考点", "解题技巧"],
    "content": "链式法则：如果 y = f(u)，u = g(x)，则 dy/dx = f'(u)\u00b7g'(x)\n\n步骤：\n1. 分清复合层次，从外到内逐层求导\n2. 每层求导后乘以内层的导数\n3. 最后化简\n\n例：y = sin(x\u00b2)\n- 外层：sin(u)，导数cos(u)\n- 内层：u = x\u00b2，导数2x\n- 结果：y' = cos(x\u00b2)\u00b72x",
    "easy_mistakes": "最常见的错误是漏层！比如 sin(x\u00b2) 只写成 cos(x\u00b2) 而忘了乘2x。"
  },
  {
    "id": "math_005",
    "subject": "高等数学",
    "title": "洛必达法则",
    "keywords": ["洛必达", "洛必达法则", "未定式", "0/0", "\u221e/\u221e"],
    "tags": ["高频考点", "解题技巧"],
    "content": "洛必达法则用于求未定式极限：\n\n0/0型或\u221e/\u221e型：\nlim f(x)/g(x) = lim f'(x)/g'(x)\n\n使用条件：\n1. 必须是0/0型或\u221e/\u221e型\n2. 分子分母分别求导后的极限存在或为\u221e\n3. 可以连续使用，直到不是未定式为止",
    "easy_mistakes": "1. 不是0/0或\u221e/\u221e型不能用洛必达！\n2. 每次用完洛必达后要检查是否还是未定式\n3. 分子分母分别求导，不是对整个分数求导"
  },
  {
    "id": "math_006",
    "subject": "高等数学",
    "title": "基本积分公式",
    "keywords": ["积分", "不定积分", "积分公式", "基本公式"],
    "tags": ["高频考点", "必背公式"],
    "content": "基本积分公式：\n- \u222b0 dx = C\n- \u222bx^a dx = x^(a+1)/(a+1) + C\uff08a\u2260-1\uff09\n- \u222b1/x dx = lnx + C\n- \u222ba^x dx = a^x/lna + C\n- \u222be^x dx = e^x + C\n- \u222bsinx dx = -cosx + C\n- \u222bcosx dx = sinx + C\n- \u222bsec\u00b2x dx = tanx + C\n- \u222bcsc\u00b2x dx = -cotx + C\n- \u222b1/(1+x\u00b2) dx = arctanx + C\n- \u222b1/\u221a(1-x\u00b2) dx = arcsinx + C",
    "easy_mistakes": "1. 积分是求导的逆运算，注意符号变化\n2. \u222bsinx dx = -cosx + C，别忘了负号和常数C\n3. \u222b1/x dx = lnx + C，注意加绝对值"
  },
  {
    "id": "math_007",
    "subject": "高等数学",
    "title": "分部积分法",
    "keywords": ["分部积分", "积分方法", "\u222bu dv"],
    "tags": ["高频考点", "解题技巧"],
    "content": "分部积分公式：\u222bu dv = uv - \u222bv du\n\n选择u的口诀：反对幂指三（优先级从高到低）\n- 反三角函数\n- 对数函数\n- 幂函数\n- 指数函数\n- 三角函数\n\n例：\u222bx\u00b7e^x dx\n- 选u=x，dv=e^x dx\n- du=dx，v=e^x\n- = x\u00b7e^x - \u222be^x dx = x\u00b7e^x - e^x + C",
    "easy_mistakes": "选错u会导致越积越复杂。记住：反对幂指三，排在前面的选作u。"
  },
  {
    "id": "math_008",
    "subject": "高等数学",
    "title": "变上限积分求导",
    "keywords": ["变上限积分", "求导", "牛顿莱布尼兹"],
    "tags": ["高频考点"],
    "content": "变上限积分：F(x) = \u222b(a\u5230x) f(t) dt\n则 F'(x) = f(x)\n\n推广：如果上限是g(x)，则\nF(x) = \u222b(a\u5230g(x)) f(t) dt\nF'(x) = f(g(x))\u00b7g'(x)\n\n牛顿-莱布尼兹公式：\n\u222b(a\u5230b) f(x) dx = F(b) - F(a)\n其中F(x)是f(x)的一个原函数",
    "easy_mistakes": "变上限积分求导时，如果上限不是x而是x的函数，要乘以上限函数的导数（链式法则）。"
  },
  {
    "id": "math_009",
    "subject": "高等数学",
    "title": "中值定理",
    "keywords": ["中值定理", "罗尔定理", "拉格朗日", "证明"],
    "tags": ["高频考点", "证明题"],
    "content": "罗尔定理：f(x)在[a,b]连续，(a,b)可导，f(a)=f(b)，则存在\u03be\u2208(a,b)使f'(\u03be)=0\n\n拉格朗日中值定理：f(x)在[a,b]连续，(a,b)可导，则存在\u03be\u2208(a,b)使f'(\u03be)=(f(b)-f(a))/(b-a)\n\n柯西中值定理：f(x),g(x)在[a,b]连续，(a,b)可导，g'(x)\u22600，则存在\u03be使(f(b)-f(a))/(g(b)-g(a))=f'(\u03be)/g'(\u03be)",
    "easy_mistakes": "1. 三个条件缺一不可：闭区间连续、开区间可导、端点值相等（罗尔）\n2. 证明题关键是构造合适的辅助函数"
  },
  {
    "id": "math_010",
    "subject": "高等数学",
    "title": "一阶线性微分方程",
    "keywords": ["微分方程", "一阶线性", "通解公式"],
    "tags": ["高频考点"],
    "content": "一阶线性微分方程标准形式：y' + P(x)y = Q(x)\n\n通解公式：\ny = e^(-\u222bP dx) \u00b7 [\u222bQ\u00b7e^(\u222bP dx)dx + C]\n\n步骤：\n1. 化为标准形式y' + P(x)y = Q(x)\n2. 找出P(x)和Q(x)\n3. 套公式\n4. 化简",
    "easy_mistakes": "套公式时P和Q不要搞混。标准形式是y'+P(x)y=Q(x)，如果方程是y'-2y=3，则P=-2, Q=3。"
  },
  {
    "id": "math_011",
    "subject": "高等数学",
    "title": "泰勒公式（麦克劳林展开）",
    "keywords": ["泰勒", "麦克劳林", "级数展开", "幂级数"],
    "tags": ["高频考点", "必背公式"],
    "content": "常见麦克劳林展开（x=0处）：\n- e^x = 1 + x + x\u00b2/2! + x\u00b3/3! + ... = \u03a3(x^n/n!)，x\u2208R\n- sinx = x - x\u00b3/3! + x\u2075/5! - ...，x\u2208R\n- cosx = 1 - x\u00b2/2! + x\u2074/4! - ...，x\u2208R\n- ln(1+x) = x - x\u00b2/2 + x\u00b3/3 - ...，x\u2208(-1,1]\n- 1/(1-x) = 1 + x + x\u00b2 + ...，x\u2208(-1,1)\n- (1+x)^a = 1 + ax + a(a-1)x\u00b2/2! + ...，x\u2208(-1,1)",
    "easy_mistakes": "注意收敛区间！e^x、sinx、cosx在R上收敛，ln(1+x)在(-1,1]收敛，1/(1-x)在(-1,1)收敛。"
  },
  {
    "id": "math_012",
    "subject": "高等数学",
    "title": "函数单调性与极值",
    "keywords": ["单调性", "极值", "极大值", "极小值"],
    "tags": ["高频考点"],
    "content": "单调性判别：\n- f'(x) > 0 \u2192 单调递增\n- f'(x) < 0 \u2192 单调递减\n\n极值的必要条件：f'(x\u2080)=0 或 f'(x\u2080)不存在\n\n极值第一充分条件：\n- x过x\u2080时f'由正变负 \u2192 极大值\n- x过x\u2080时f'由负变正 \u2192 极小值\n- f'不变号 \u2192 不是极值\n\n极值第二充分条件：\n- f'(x\u2080)=0且f''(x\u2080)<0 \u2192 极大值\n- f'(x\u2080)=0且f''(x\u2080)>0 \u2192 极小值",
    "easy_mistakes": "1. 不要忘记检查f'(x)不存在的点\n2. 第一充分条件要看导数在x\u2080左右两侧的符号变化\n3. f'(x\u2080)=0不一定就是极值点"
  },
  {
    "id": "c_001",
    "subject": "C语言程序设计",
    "title": "数据类型与字节数",
    "keywords": ["数据类型", "int", "char", "float", "double", "字节"],
    "tags": ["高频考点", "基础"],
    "content": "C语言基本数据类型及字节数：\n- int\uff08整型\uff09\uff1a4字节\n- short\uff08短整型\uff09\uff1a2字节\n- long\uff08长整型\uff09\uff1a4字节\n- float\uff08单精度\uff09\uff1a4字节\uff0c约6-7位有效数字\n- double\uff08双精度\uff09\uff1a8字节\uff0c约15-16位有效数字\n- char\uff08字符型\uff09\uff1a1字节\n\n常量后缀\uff1aL\uff08长整型\uff09\u3001U\uff08无符号\uff09\u3001F\uff08float\uff09\n进制前缀\uff1a0\uff08八进制\uff09\u30010x\uff08十六进制\uff09",
    "easy_mistakes": "1. char是1字节\uff0c不是2字节\n2. float和double的有效数字位数不同\n3. 八进制前缀是0\uff08数字零\uff09\uff0c不是字母O"
  },
  {
    "id": "c_002",
    "subject": "C语言程序设计",
    "title": "运算符优先级",
    "keywords": ["运算符", "优先级", "表达式", "求值"],
    "tags": ["高频考点", "易错"],
    "content": "运算符优先级（从高到低）：\n1. () [] -> .\n2. ! ~ ++ -- -(负号) * & sizeof\n3. * / %\n4. + -\n5. << >>\n6. < <= > >=\n7. == !=\n8. & ^ |\n9. &&\n10. ||\n11. ?:\n12. = += -= 等\n13. ,",
    "easy_mistakes": "1. = 是赋值\uff0c== 是判断相等\n2. &&\uff08逻辑与\uff09优先级高于||\uff08逻辑或\uff09\n3. 后置++优先级高于前置++\n4. 逗号运算符优先级最低"
  },
  {
    "id": "c_003",
    "subject": "C语言程序设计",
    "title": "自增自减运算符",
    "keywords": ["自增", "自减", "++", "--", "前置", "后置"],
    "tags": ["高频考点", "易错"],
    "content": "前置++/--：先变后用\n- ++a：先加1\uff0c再使用a的新值\n- --a：先减1\uff0c再使用a的新值\n\n后置++/--：先用后变\n- a++：先使用a的当前值\uff0c再加1\n- a--：先使用a的当前值\uff0c再减1\n\n例\uff1aint a=5;\n- b = ++a; \u2192 a=6, b=6\n- b = a++; \u2192 a=6, b=5",
    "easy_mistakes": "1. 前置和后置的区别在表达式中体现\n2. 不要在同一个表达式中对同一个变量多次自增\uff0c行为未定义\n3. *p++ 和 (*p)++ 含义不同"
  },
  {
    "id": "c_004",
    "subject": "C语言程序设计",
    "title": "逻辑运算短路特性",
    "keywords": ["逻辑运算", "短路", "&&", "||", "条件"],
    "tags": ["高频考点", "易错"],
    "content": "短路特性：\n- &&\uff08逻辑与\uff09\uff1a左边为假(0)时\uff0c右边不执行\n- ||\uff08逻辑或\uff09\uff1a左边为真(非0)时\uff0c右边不执行\n\n例1\uff1aint a=0, b=5;\n  (a>0) && (b++) \u2192 a>0为假\uff0cb++不执行\uff0cb仍为5\n\n例2\uff1aint a=1, b=5;\n  (a>0) || (b++) \u2192 a>0为真\uff0cb++不执行\uff0cb仍为5\n\n这个特性常在程序阅读题中考查。",
    "easy_mistakes": "短路特性影响右侧表达式的执行\uff0c如果有自增自减运算\uff0c要注意变量值是否改变。"
  },
  {
    "id": "c_005",
    "subject": "C语言程序设计",
    "title": "switch语句与break",
    "keywords": ["switch", "case", "break", "穿透"],
    "tags": ["高频考点", "易错"],
    "content": "switch语句格式\uff1a\nswitch(表达式) {\n  case \u5e38\u91cf1: \u8bed\u53e5; break;\n  case \u5e38\u91cf2: \u8bed\u53e5; break;\n  default: \u8bed\u53e5;\n}\n\nbreak的作用\uff1a\u8df3\u51faswitch\u7ed3\u6784\u3002\n\u5982\u679c\u4e0d\u52a0break\uff0c\u4f1a\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2acase\u7684\u8bed\u53e5\uff0c\u8fd9\u53ebcase\u7a7f\u900f\u3002",
    "easy_mistakes": "1. case\u540e\u5fc5\u987b\u662f\u5e38\u91cf\u8868\u8fbe\u5f0f\uff0c\u4e0d\u80fd\u662f\u53d8\u91cf\n2. \u5fd8\u52a0break\u5bfc\u81f4\u7a7f\u900f\u662f\u5e38\u89c1\u8003\u70b9\n3. default\u53ef\u4ee5\u7701\u7565\uff0c\u4f46\u5efa\u8bae\u52a0\u4e0a\n4. switch\u8868\u8fbe\u5f0f\u5fc5\u987b\u662f\u6574\u578b\u6216\u5b57\u7b26\u578b"
  },
  {
    "id": "c_006",
    "subject": "C语言程序设计",
    "title": "一维数组",
    "keywords": ["数组", "一维数组", "下标", "初始化"],
    "tags": ["高频考点", "基础"],
    "content": "定义\uff1aint a[10];\n初始化\uff1a\n- int a[5] = {1,2,3,4,5};\n- int a[] = {1,2,3}; \uff08\u81ea\u52a8\u786e\u5b9a\u5927\u5c0f\u4e3a3\uff09\n- int a[5] = {1,2}; \uff08\u5176\u4f59\u81ea\u52a8\u521d\u59cb\u5316\u4e3a0\uff09\n\n\u5f15\u7528\uff1a\u4e0b\u6807\u4ece0\u5f00\u59cb\uff0ca[0]\u5230a[n-1]\n\n\u6570\u7ec4\u540d\u4ee3\u8868\u9996\u5730\u5740\uff0ca\u7b49\u4ef7\u4e8e&a[0]",
    "easy_mistakes": "1. \u4e0b\u6807\u4ece0\u5f00\u59cb\uff0c\u6700\u5927\u4e0b\u6807\u662fn-1\n2. \u6570\u7ec4\u5927\u5c0f\u5fc5\u987b\u662f\u5e38\u91cf\u6216\u5e38\u91cf\u8868\u8fbe\u5f0f\n3. \u6570\u7ec4\u540d\u662f\u5730\u5740\u5e38\u91cf\uff0c\u4e0d\u80fd\u8d4b\u503c"
  },
  {
    "id": "c_007",
    "subject": "C语言程序设计",
    "title": "字符数组与字符串",
    "keywords": ["字符数组", "字符串", "\\0", "strlen", "strcpy"],
    "tags": ["高频考点"],
    "content": "\u5b57\u7b26\u4e32\u4ee5'\\0'\u7ed3\u5c3e\u3002\n\n\u5b57\u7b26\u6570\u7ec4vs\u5b57\u7b26\u4e32\uff1a\n- char s[5] = {'a','b','c'}; \u4e0d\u662f\u5b57\u7b26\u4e32\uff08\u6ca1\u6709\\0\uff09\n- char s[] = \"abc\"; \u662f\u5b57\u7b26\u4e32\uff08\u81ea\u52a8\u52a0\\0\uff0c\u5927\u5c0f\u4e3a4\uff09\n\n\u5e38\u7528\u5b57\u7b26\u4e32\u51fd\u6570\uff08\u9700#include <string.h>\uff09\uff1a\n- strlen(s)\uff1a\u6c42\u957f\u5ea6\uff08\u4e0d\u542b\\0\uff09\n- strcpy(s1,s2)\uff1as2\u590d\u5236\u5230s1\n- strcat(s1,s2)\uff1as2\u63a5\u5230s1\u540e\n- strcmp(s1,s2)\uff1a\u6bd4\u8f83\uff080\u76f8\u7b49\uff0c>0\u524d\u5927\uff0c<0\u524d\u5c0f\uff09",
    "easy_mistakes": "1. \u5b57\u7b26\u6570\u7ec4\u5927\u5c0f\u8981\u6bd4\u5b57\u7b26\u4e32\u957f\u5ea6\u591a1\uff08\u5b58\\0\uff09\n2. scanf(\"%s\")\u9047\u7a7a\u683c\u7ed3\u675f\uff0c\u8bfb\u4e0d\u4e86\u542b\u7a7a\u683c\u7684\u5b57\u7b26\u4e32\n3. strlen\u548csizeof\u4e0d\u540c\uff1astrlen\u4e0d\u7b97\\0\uff0csizeof\u7b97\\0"
  },
  {
    "id": "c_008",
    "subject": "C语言程序设计",
    "title": "函数参数传递：值传递vs地址传递",
    "keywords": ["函数", "参数传递", "值传递", "地址传递", "指针参数"],
    "tags": ["高频考点", "易错"],
    "content": "\u503c\u4f20\u9012\uff1a\u5b9e\u53c2\u7684\u503c\u590d\u5236\u7ed9\u5f62\u53c2\uff0c\u5f62\u53c2\u6539\u53d8\u4e0d\u5f71\u54cd\u5b9e\u53c2\u3002\n\u5730\u5740\u4f20\u9012\uff1a\u4f20\u9012\u53d8\u91cf\u7684\u5730\u5740\uff0c\u5f62\u53c2\u6539\u53d8\u4f1a\u5f71\u54cd\u5b9e\u53c2\u3002\n\u6570\u7ec4\u4f20\u9012\uff1a\u6570\u7ec4\u540d\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f20\u9012\u7684\u662f\u9996\u5730\u5740\u3002\n\n\u4f8b\uff1a\nvoid swap1(int a, int b) { int t=a; a=b; b=t; }  // \u503c\u4f20\u9012\uff0c\u4e0d\u6539\u53d8\u5b9e\u53c2\nvoid swap2(int *a, int *b) { int t=*a; *a=*b; *b=t; }  // \u5730\u5740\u4f20\u9012\uff0c\u6539\u53d8\u5b9e\u53c2",
    "easy_mistakes": "1. \u503c\u4f20\u9012\u4e0d\u4f1a\u4fee\u6539\u5b9e\u53c2\uff0c\u8fd9\u662f\u7a0b\u5e8f\u9605\u8bfb\u9898\u6700\u5e38\u8003\u7684\u70b9\n2. \u6570\u7ec4\u540d\u4f20\u53c2\u672c\u8d28\u662f\u5730\u5740\u4f20\u9012\uff0c\u51fd\u6570\u5185\u4fee\u6539\u6570\u7ec4\u5143\u7d20\u4f1a\u5f71\u54cd\u539f\u6570\u7ec4\n3. scanf\u4e2d\u53d8\u91cf\u8981\u52a0&\u53d6\u5730\u5740\uff0c\u4f46\u6570\u7ec4\u540d\u4e0d\u9700\u8981"
  },
  {
    "id": "c_009",
    "subject": "C语言程序设计",
    "title": "指针基础",
    "keywords": ["指针", "地址", "&", "*", "指针变量"],
    "tags": ["高频考点", "重点难点"],
    "content": "\u6307\u9488\u53d8\u91cf\uff1a\u5b58\u653e\u5730\u5740\u7684\u53d8\u91cf\u3002\n\u5b9a\u4e49\uff1aint *p;\n\u8d4b\u503c\uff1ap = &a; \uff08\u53d6\u5730\u5740\uff09\n\u5f15\u7528\uff1a*p \u8868\u793ap\u6307\u5411\u7684\u53d8\u91cf\u7684\u503c\uff08\u95f4\u63a5\u8bbf\u95ee\uff09\n\n\u4e24\u4e2a\u8fd0\u7b97\u7b26\uff1a\n- &\uff1a\u53d6\u5730\u5740\n- *\uff1a\u53d6\u5185\u5bb9\uff08\u95f4\u63a5\u8bbf\u95ee\uff09\n\n\u6307\u9488\u4e0e\u6570\u7ec4\uff1a\nint a[10], *p; p = a;\n\u5219 p+i \u6307\u5411 a[i]\uff0c*(p+i) \u7b49\u4ef7\u4e8e a[i]",
    "easy_mistakes": "1. \u6307\u9488\u5fc5\u987b\u5148\u8d4b\u503c\u518d\u4f7f\u7528\uff0c\u672a\u8d4b\u503c\u7684\u6307\u9488\u662f\u91ce\u6307\u9488\n2. \u6307\u9488\u52a0\u51cf\u4ee5\u6570\u636e\u7c7b\u578b\u5927\u5c0f\u4e3a\u5355\u4f4d\uff0cp+1\u4e0d\u662f\u5730\u5740+1\u800c\u662f+sizeof(int)\n3. *p++ \u548c (*p)++ \u4e0d\u540c\uff1a\u524d\u8005\u5148\u53d6\u503c\u540ep++\uff0c\u540e\u8005\u5148\u53d6\u503c\u518d\u7ed9\u503c\u52a01"
  },
  {
    "id": "c_010",
    "subject": "C语言程序设计",
    "title": "指针与二维数组",
    "keywords": ["二维数组", "指针", "数组指针", "*(*(a+i)+j)"],
    "tags": ["高频考点", "难点"],
    "content": "\u4e8c\u7ef4\u6570\u7ec4a[m][n]\u7684\u5730\u5740\u8868\u793a\uff1a\n- a[i][j]\u7684\u5730\u5740\uff1a*(a+i)+j \u6216 a[i]+j\n- a[i][j]\u7684\u503c\uff1a*(*(a+i)+j)\n\n\u7406\u89e3\uff1a\n- a\u662f\u884c\u6307\u9488\uff0ca+1\u6307\u5411\u4e0b\u4e00\u884c\n- a[i]\u662f\u5217\u6307\u9488\uff0ca[i]+1\u6307\u5411\u4e0b\u4e00\u5217\n- *(a+i)\u628a\u884c\u6307\u9488\u8f6c\u4e3a\u5217\u6307\u9488",
    "easy_mistakes": "1. a+i\u548ca[i]\u867d\u7136\u503c\u76f8\u540c\u4f46\u7c7b\u578b\u4e0d\u540c\n2. \u6307\u9488\u6570\u7ec4int *p[10]\u548c\u6570\u7ec4\u6307\u9488int (*p)[10]\u4e0d\u540c\n3. \u4e8c\u7ef4\u6570\u7ec4\u540d\u662f\u884c\u6307\u9488\uff0c\u4e0d\u662f\u7b80\u5355\u7684\u5217\u6307\u9488"
  },
  {
    "id": "c_011",
    "subject": "C语言程序设计",
    "title": "static静态变量",
    "keywords": ["static", "静态变量", "局部变量", "作用域"],
    "tags": ["高频考点"],
    "content": "static\u4fee\u9970\u5c40\u90e8\u53d8\u91cf\uff1a\n- \u51fd\u6570\u8c03\u7528\u7ed3\u675f\u540e\u4e0d\u91ca\u653e\u5185\u5b58\n- \u4e0b\u6b21\u8c03\u7528\u65f6\u4fdd\u7559\u4e0a\u6b21\u7684\u503c\n- \u53ea\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u521d\u59cb\u5316\n\n\u4f8b\uff1a\nint count() {\n  static int n = 0;\n  n++;\n  return n;\n}\n\u7b2c\u4e00\u6b21\u8c03\u7528\u8fd4\u56de1\uff0c\u7b2c\u4e8c\u6b21\u8fd4\u56de2\uff0c\u7b2c\u4e09\u6b21\u8fd4\u56de3...",
    "easy_mistakes": "1. static\u53d8\u91cf\u53ea\u521d\u59cb\u5316\u4e00\u6b21\uff0c\u4e0d\u662f\u6bcf\u6b21\u8c03\u7528\u90fd\u521d\u59cb\u5316\n2. static\u5168\u5c40\u53d8\u91cf\u9650\u5236\u5728\u672c\u6587\u4ef6\u5185\u4f7f\u7528\n3. static\u5c40\u90e8\u53d8\u91cf\u5b58\u5728\u9759\u6001\u5b58\u50a8\u533a\uff0c\u4e0d\u662f\u6808"
  },
  {
    "id": "c_012",
    "subject": "C语言程序设计",
    "title": "宏定义",
    "keywords": ["宏定义", "#define", "预处理", "宏替换"],
    "tags": ["高频考点", "易错"],
    "content": "\u4e0d\u5e26\u53c2\u6570\uff1a#define PI 3.14159\n\u5e26\u53c2\u6570\uff1a#define SQR(x) ((x)*(x))\n\n\u5b8f\u53ea\u662f\u7b80\u5355\u6587\u672c\u66ff\u6362\uff0c\u5728\u7f16\u8bd1\u524d\u5904\u7406\u3002\n\n\u4f8b\uff1a\n#define SQR(x) x*x\nSQR(3+2) \u2192 3+2*3+2 = 11\uff08\u9519\u8bef\uff01\uff09\n\n\u6b63\u786e\u5199\u6cd5\uff1a\n#define SQR(x) ((x)*(x))\nSQR(3+2) \u2192 ((3+2)*(3+2)) = 25",
    "easy_mistakes": "1. \u5b8f\u5b9a\u4e49\u4e0d\u52a0\u5206\u53f7\n2. \u5e26\u53c2\u5b8f\u7684\u53c2\u6570\u4e00\u5b9a\u8981\u52a0\u62ec\u53f7\n3. \u5b8f\u66ff\u6362\u662f\u7eaf\u6587\u672c\u66ff\u6362\uff0c\u4e0d\u8003\u8651\u8fd0\u7b97\u4f18\u5148\u7ea7\n4. \u5b8f\u548c\u51fd\u6570\u4e0d\u540c\uff1a\u5b8f\u6ca1\u6709\u7c7b\u578b\u68c0\u67e5\uff0c\u4e0d\u505a\u8ba1\u7b97"
  },
  {
    "id": "c_013",
    "subject": "C语言程序设计",
    "title": "结构体",
    "keywords": ["结构体", "struct", "成员", "结构体指针"],
    "tags": ["高频考点"],
    "content": "\u5b9a\u4e49\uff1a\nstruct Student {\n  int id;\n  char name[20];\n  float score;\n};\n\n\u53d8\u91cf\u5b9a\u4e49\uff1astruct Student s1;\n\u521d\u59cb\u5316\uff1astruct Student s1 = {1, \u201c\u5f20\u4e09\u201d, 90.5};\n\u6210\u5458\u5f15\u7528\uff1as1.id, s1.name\n\n\u7ed3\u6784\u4f53\u6307\u9488\uff1a\nstruct Student *p = &s1;\n\u901a\u8fc7\u6307\u9488\u5f15\u7528\u6210\u5458\uff1ap->id \u6216 (*p).id",
    "easy_mistakes": "1. struct\u548cunion\u4e0d\u540c\uff1astruct\u5404\u6210\u5458\u72ec\u7acb\u5185\u5b58\uff0cunion\u5171\u7528\u5185\u5b58\n2. \u7ed3\u6784\u4f53\u6307\u9488\u7528->\uff0c\u7ed3\u6784\u4f53\u53d8\u91cf\u7528.\n3. typedef\u53ef\u4ee5\u7b80\u5316\u7ed3\u6784\u4f53\u7c7b\u578b\u540d"
  },
  {
    "id": "c_014",
    "subject": "C语言程序设计",
    "title": "文件操作",
    "keywords": ["文件", "fopen", "fclose", "fread", "fwrite", "FILE"],
    "tags": ["高频考点"],
    "content": "\u6587\u4ef6\u64cd\u4f5c\u6b65\u9aa4\uff1a\u6253\u5f00\u2192\u8bfb\u5199\u2192\u5173\u95ed\n\n\u6253\u5f00\uff1aFILE *fp = fopen(\u201c\u6587\u4ef6\u540d\u201d, \u201c\u6253\u5f00\u65b9\u5f0f\u201d);\n\u6253\u5f00\u65b9\u5f0f\uff1a\n- \u201cr\u201d\uff1a\u53ea\u8bfb\uff08\u6587\u4ef6\u987b\u5b58\u5728\uff09\n- \u201cw\u201d\uff1a\u53ea\u5199\uff08\u8986\u76d6\uff0c\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff09\n- \u201ca\u201d\uff1a\u8ffd\u52a0\n- \u52a0\u201cb\u201d\u8868\u793a\u4e8c\u8fdb\u5236\n\n\u5173\u95ed\uff1afclose(fp);\n\n\u8bfb\u5199\u51fd\u6570\uff1a\n- fgetc/fputc\uff1a\u8bfb/\u5199\u4e00\u4e2a\u5b57\u7b26\n- fgets/fputs\uff1a\u8bfb/\u5199\u5b57\u7b26\u4e32\n- fscanf/fprintf\uff1a\u683c\u5f0f\u5316\u8bfb/\u5199\n- fread/fwrite\uff1a\u8bfb/\u5199\u6570\u636e\u5757",
    "easy_mistakes": "1. \u6253\u5f00\u6587\u4ef6\u540e\u8981\u68c0\u67e5\u662f\u5426\u6210\u529f\uff1aif(fp==NULL)\n2. \u4f7f\u7528\u5b8c\u8981\u5173\u95ed\u6587\u4ef6\n3. \u201cr\u201d\u548c\u201cw\u201d\u4e0d\u8981\u641e\u6df7\uff0c\u201cr\u201d\u8981\u6c42\u6587\u4ef6\u5fc5\u987b\u5b58\u5728"
  },
  {
    "id": "eng_001",
    "subject": "公共英语",
    "title": "时态总结",
    "keywords": ["时态", "现在时", "过去时", "完成时", "进行时"],
    "tags": ["高频考点"],
    "content": "\u5e38\u8003\u65f6\u6001\uff1a\n- \u4e00\u822c\u73b0\u5728\u65f6\uff1ado/does\uff08\u4e60\u60ef\u3001\u4e8b\u5b9e\uff09\n- \u4e00\u822c\u8fc7\u53bb\u65f6\uff1adid\uff08\u8fc7\u53bb\u53d1\u751f\u7684\u52a8\u4f5c\uff09\n- \u4e00\u822c\u5c06\u6765\u65f6\uff1awill do / be going to do\n- \u73b0\u5728\u8fdb\u884c\u65f6\uff1aam/is/are doing\uff08\u6b63\u5728\u53d1\u751f\uff09\n- \u8fc7\u53bb\u8fdb\u884c\u65f6\uff1awas/were doing\uff08\u8fc7\u53bb\u67d0\u65f6\u6b63\u5728\u53d1\u751f\uff09\n- \u73b0\u5728\u5b8c\u6210\u65f6\uff1ahave/has done\uff08\u8fc7\u53bb\u53d1\u751f\u5bf9\u73b0\u5728\u6709\u5f71\u54cd\uff09\n- \u8fc7\u53bb\u5b8c\u6210\u65f6\uff1ahad done\uff08\u8fc7\u53bb\u67d0\u65f6\u4e4b\u524d\u5df2\u5b8c\u6210\uff09\n\n\u88ab\u52a8\u8bed\u6001\uff1abe + done",
    "easy_mistakes": "1. \u73b0\u5728\u5b8c\u6210\u65f6vs\u4e00\u822c\u8fc7\u53bb\u65f6\uff1a\u73b0\u5728\u5b8c\u6210\u65f6\u5f3a\u8c03\u5bf9\u73b0\u5728\u7684\u5f71\u54cd\n2. \u8fc7\u53bb\u5b8c\u6210\u65f6\u5fc5\u987b\u6709\u8fc7\u53bb\u7684\u53c2\u7167\u65f6\u95f4\n3. \u73b0\u5728\u8fdb\u884c\u65f6\u4e0d\u80fd\u7528\u4e8e\u8868\u793a\u72b6\u6001\uff08\u5982know, love\u7b49\u72b6\u6001\u52a8\u8bcd\uff09"
  },
  {
    "id": "eng_002",
    "subject": "公共英语",
    "title": "非谓语动词",
    "keywords": ["非谓语", "不定式", "动名词", "分词", "to do", "doing"],
    "tags": ["高频考点", "易错"],
    "content": "\u4e0d\u5b9a\u5f0f\uff08to do\uff09\uff1a\n\u5e38\u89c1\u642d\u914d\uff1awant to do, decide to do, hope to do, refuse to do\n\n\u52a8\u540d\u8bcd\uff08doing\uff09\uff1a\n\u5e38\u89c1\u642d\u914d\uff1aenjoy doing, finish doing, mind doing, avoid doing\n\n\u5206\u8bcd\uff1a\n- \u73b0\u5728\u5206\u8bcd\uff08doing\uff09\uff1a\u8868\u4e3b\u52a8\u3001\u8fdb\u884c\n- \u8fc7\u53bb\u5206\u8bcd\uff08done\uff09\uff1a\u8868\u88ab\u52a8\u3001\u5b8c\u6210\n\n\u5e38\u89c1\u8003\u70b9\uff1a\n- It is no use doing sth\uff08\u56fa\u5b9a\u53e5\u578b\uff0c\u7528doing\uff09\n- stop to do\uff08\u505c\u4e0b\u6765\u53bb\u505a\uff09/ stop doing\uff08\u505c\u6b62\u505a\uff09",
    "easy_mistakes": "1. to do\u548cdoing\u7684\u642d\u914d\u4e0d\u540c\uff0c\u9700\u8981\u8bb0\u5fc6\n2. stop to do\u548cstop doing\u610f\u601d\u5b8c\u5168\u76f8\u53cd\n3. \u5206\u8bcd\u4f5c\u5b9a\u8bed\uff1a\u73b0\u5728\u5206\u8bcd\u8868\u4e3b\u52a8\uff0c\u8fc7\u53bb\u5206\u8bcd\u8868\u88ab\u52a8"
  },
  {
    "id": "eng_003",
    "subject": "公共英语",
    "title": "定语从句",
    "keywords": ["定语从句", "关系代词", "that", "which", "who", "关系副词"],
    "tags": ["高频考点"],
    "content": "\u5173\u7cfb\u4ee3\u8bcd\uff1a\n- who\uff08\u4eba\uff0c\u4f5c\u4e3b\u8bed\uff09\n- whom\uff08\u4eba\uff0c\u4f5c\u5bbe\u8bed\uff09\n- whose\uff08\u8868\u6240\u5c5e\uff09\n- which\uff08\u7269\uff09\n- that\uff08\u4eba\u6216\u7269\uff09\n\n\u5173\u7cfb\u526f\u8bcd\uff1a\n- when\uff08\u65f6\u95f4\uff09\n- where\uff08\u5730\u70b9\uff09\n- why\uff08\u539f\u56e0\uff09\n\n\u53ea\u80fd\u7528that\u7684\u60c5\u51b5\uff1a\n1. \u5148\u884c\u8bcd\u662fall, everything, anything, nothing\u7b49\u4e0d\u5b9a\u4ee3\u8bcd\n2. \u5148\u884c\u8bcd\u88ab\u6700\u9ad8\u7ea7\u4fee\u9970\n3. \u5148\u884c\u8bcd\u88abthe only, the very\u7b49\u4fee\u9970",
    "easy_mistakes": "1. that\u548cwhich\u5728\u9650\u5236\u6027\u5b9a\u8bed\u4ece\u53e5\u4e2d\u5e38\u53ef\u4e92\u6362\uff0c\u4f46\u6709\u4e9b\u60c5\u51b5\u53ea\u80fd\u7528that\n2. \u4ecb\u8bcd+\u5173\u7cfb\u4ee3\u8bcd\u65f6\u53ea\u80fd\u7528which/whom\uff0c\u4e0d\u80fd\u7528that\n3. \u975e\u9650\u5236\u6027\u5b9a\u8bed\u4ece\u53e5\uff08\u6709\u9017\u53f7\uff09\u4e0d\u80fd\u7528that"
  },
  {
    "id": "eng_004",
    "subject": "公共英语",
    "title": "虚拟语气",
    "keywords": ["虚拟语气", "if", "would", "wish", "假设"],
    "tags": ["高频考点", "易错"],
    "content": "if\u865a\u62df\u6761\u4ef6\u53e5\uff1a\n\u4e0e\u73b0\u5728\u76f8\u53cd\uff1aIf + \u8fc7\u53bb\u5f0f, would/should/could/might + do\n  \u4f8b\uff1aIf I were you, I would go.\n\u4e0e\u8fc7\u53bb\u76f8\u53cd\uff1aIf + had done, would/should/could/might + have done\n  \u4f8b\uff1aIf I had known, I would have helped you.\n\u4e0e\u5c06\u6765\u76f8\u53cd\uff1aIf + were to do / should do, would + do\n\nwish\u540e\u865a\u62df\uff1a\n- wish + \u8fc7\u53bb\u5f0f\uff08\u4e0e\u73b0\u5728\u76f8\u53cd\uff09\n- wish + had done\uff08\u4e0e\u8fc7\u53bb\u76f8\u53cd\uff09\n- wish + would do\uff08\u4e0e\u5c06\u6765\u76f8\u53cd\uff09\n\nIt is (high) time that + \u8fc7\u53bb\u5f0f\nwould rather + \u8fc7\u53bb\u5f0f",
    "easy_mistakes": "1. \u4e0e\u73b0\u5728\u76f8\u53cd\uff0cbe\u52a8\u8bcd\u7edf\u4e00\u7528were\n2. \u6ce8\u610f\u65f6\u6001\u5bf9\u5e94\uff1a\u6761\u4ef6\u53e5\u548c\u4e3b\u53e5\u7684\u65f6\u6001\u8981\u5339\u914d\n3. would rather\u540e\u9762\u7684\u4ece\u53e5\u7528\u8fc7\u53bb\u5f0f"
  },
  {
    "id": "eng_005",
    "subject": "公共英语",
    "title": "倒装句",
    "keywords": ["倒装", "never", "hardly", "not only", "部分倒装"],
    "tags": ["高频考点"],
    "content": "\u90e8\u5206\u5012\u88c5\uff08\u52a9\u52a8\u8bcd/\u60c5\u6001\u52a8\u8bcd\u63d0\u5230\u4e3b\u8bed\u524d\uff09\uff1a\n\u5426\u5b9a\u8bcd\u653e\u53e5\u9996\u65f6\u5012\u88c5\uff1a\n- Never have I seen such a beautiful place.\n- Hardly had he arrived when it started to rain.\n- Not only does he study hard, but he also helps others.\n- Seldom do I go shopping.\n\nOnly\u653e\u53e5\u9996\u65f6\u5012\u88c5\uff1a\n- Only then did I realize my mistake.\n- Only in this way can we solve the problem.",
    "easy_mistakes": "1. \u5426\u5b9a\u8bcd\u4e0d\u5728\u53e5\u9996\u65f6\u4e0d\u5012\u88c5\n2. \u90e8\u5206\u5012\u88c5\u53ea\u628a\u52a9\u52a8\u8bcd/\u60c5\u6001\u52a8\u8bcd\u63d0\u524d\uff0c\u4e0d\u662f\u5168\u90e8\u8c13\u8bed\n3. Not only...but also\u7ed3\u6784\u4e2d\uff0cnot only\u540e\u5012\u88c5\uff0cbut also\u540e\u4e0d\u5012\u88c5"
  },
  {
    "id": "cs_001",
    "subject": "计算机基础",
    "title": "计算机发展史",
    "keywords": ["计算机发展", "ENIAC", "冯诺依曼", "电子管", "晶体管"],
    "tags": ["高频考点", "基础"],
    "content": "\u56db\u4ee3\u8ba1\u7b97\u673a\uff1a\n- \u7b2c\u4e00\u4ee3\uff1a\u7535\u5b50\u7ba1\uff081946-1958\uff09\n- \u7b2c\u4e8c\u4ee3\uff1a\u6676\u4f53\u7ba1\uff081958-1964\uff09\n- \u7b2c\u4e09\u4ee3\uff1a\u96c6\u6210\u7535\u8def\uff081964-1971\uff09\n- \u7b2c\u56db\u4ee3\uff1a\u5927\u89c4\u6a21/\u8d85\u5927\u89c4\u6a21\u96c6\u6210\u7535\u8def\uff081971-\u81f3\u4eca\uff09\n\n\u4e16\u754c\u7b2c\u4e00\u53f0\u7535\u5b50\u8ba1\u7b97\u673a\uff1aENIAC\uff081946\u5e74\uff09\n\u51af\u00b7\u8bfa\u4f9d\u66fc\u4f53\u7cfb\u7ed3\u6784\u6838\u5fc3\uff1a\u5b58\u50a8\u7a0b\u5e8f\u6982\u5ff5\n\u9996\u53f0\u5b58\u50a8\u7a0b\u5e8f\u8ba1\u7b97\u673a\uff1aEDVAC",
    "easy_mistakes": "1. ENIAC\u662f\u7b2c\u4e00\u53f0\uff0c\u4f46\u4e0d\u662f\u5b58\u50a8\u7a0b\u5e8f\u7684\uff1bEDVAC\u624d\u662f\u9996\u53f0\u5b58\u50a8\u7a0b\u5e8f\u8ba1\u7b97\u673a\n2. \u51af\u00b7\u8bfa\u4f9d\u66fc\u7684\u6838\u5fc3\u8d21\u732e\u662f\u5b58\u50a8\u7a0b\u5e8f\u6982\u5ff5"
  },
  {
    "id": "cs_002",
    "subject": "计算机基础",
    "title": "进制转换",
    "keywords": ["进制", "二进制", "八进制", "十六进制", "十进制", "转换"],
    "tags": ["高频考点", "必会"],
    "content": "\u4e8c\u8fdb\u5236\u2192\u5341\u8fdb\u5236\uff1a\u6309\u6743\u5c55\u5f00\u6c42\u548c\n  \u4f8b\uff1a1011 = 1\u00d72\u00b3+0\u00d72\u00b2+1\u00d72\u00b9+1\u00d72\u2070 = 11\n\n\u5341\u8fdb\u5236\u2192\u4e8c\u8fdb\u5236\uff1a\u96642\u53d6\u4f59\u5012\u5e8f\u6392\u5217\n  \u4f8b\uff1a13 \u2192 1101\n\n\u4e8c\u8fdb\u5236\u2194\u516b\u8fdb\u5236\uff1a3\u4f4d\u4e00\u7ec4\n  \u4f8b\uff1a101 011 \u2192 53\uff08\u516b\u8fdb\u5236\uff09\n\n\u4e8c\u8fdb\u5236\u2194\u5341\u516d\u8fdb\u5236\uff1a4\u4f4d\u4e00\u7ec4\n  \u4f8b\uff1a1010 0011 \u2192 A3\uff08\u5341\u516d\u8fdb\u5236\uff09\n\n\u5341\u516d\u8fdb\u5236\u540e\u7f00H\uff0c\u516b\u8fdb\u5236\u524d\u7f000",
    "easy_mistakes": "1. \u5341\u8fdb\u5236\u8f6c\u4e8c\u8fdb\u5236\u4f59\u6570\u8981\u5012\u5e8f\u6392\u5217\n2. \u4e8c\u8fdb\u5236\u8f6c\u516b/\u5341\u516d\u8fdb\u5236\u65f6\u4f4d\u6570\u4e0d\u591f\u8981\u5728\u9ad8\u4f4d\u88650\n3. \u5341\u516d\u8fdb\u5236\u7684A-F\u5bf9\u5e9410-15"
  },
  {
    "id": "cs_003",
    "subject": "计算机基础",
    "title": "OSI七层模型",
    "keywords": ["OSI", "七层模型", "网络协议", "TCP", "IP", "HTTP"],
    "tags": ["高频考点"],
    "content": "OSI\u4e03\u5c42\u6a21\u578b\uff08\u4ece\u4e0b\u5230\u4e0a\uff09\uff1a\n1. \u7269\u7406\u5c42\uff1a\u4f20\u8f93\u539f\u59cb\u6bd4\u7279\u6d41\n2. \u6570\u636e\u94fe\u8def\u5c42\uff1a\u5e27\u4f20\u8f93\n3. \u7f51\u7edc\u5c42\uff1aIP\u534f\u8bae\uff0c\u8def\u7531\u9009\u62e9\n4. \u4f20\u8f93\u5c42\uff1aTCP/UDP\uff0c\u7aef\u5230\u7aef\u4f20\u8f93\n5. \u4f1a\u8bdd\u5c42\n6. \u8868\u793a\u5c42\n7. \u5e94\u7528\u5c42\uff1aHTTP\u3001FTP\u3001SMTP\u7b49\n\nTCP/IP\u534f\u8bae\u65cf\uff1a\n- \u5e94\u7528\u5c42\uff1aHTTP\u3001FTP\u3001SMTP\u3001POP3\u3001DNS\n- \u4f20\u8f93\u5c42\uff1aTCP\uff08\u53ef\u9760\uff09\u3001UDP\uff08\u5feb\u4f46\u4e0d\u53ef\u9760\uff09\n- \u7f51\u7edc\u5c42\uff1aIP\u3001ICMP\u3001ARP",
    "easy_mistakes": "1. TCP\u662f\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u4e0d\u662f\u7f51\u7edc\u5c42\n2. HTTP\u662f\u5e94\u7528\u5c42\u534f\u8bae\n3. IP\u662f\u7f51\u7edc\u5c42\u534f\u8bae"
  },
  {
    "id": "cs_004",
    "subject": "计算机基础",
    "title": "IP地址",
    "keywords": ["IP地址", "IPv4", "A类", "B类", "C类", "子网掩码"],
    "tags": ["高频考点"],
    "content": "IPv4\uff1a32\u4f4d\uff0c\u52064\u6bb5\uff0c\u6bcf\u6bb50-255\n\nIP\u5730\u5740\u5206\u7c7b\uff1a\n- A\u7c7b\uff1a1.0.0.0 ~ 126.255.255.255\uff08\u5927\u578b\u7f51\u7edc\uff09\n- B\u7c7b\uff1a128.0.0.0 ~ 191.255.255.255\uff08\u4e2d\u578b\u7f51\u7edc\uff09\n- C\u7c7b\uff1a192.0.0.0 ~ 223.255.255.255\uff08\u5c0f\u578b\u7f51\u7edc\uff09\n- D\u7c7b\uff1a\u7ec4\u64ad\n- E\u7c7b\uff1a\u4fdd\u7559\n\nIPv6\uff1a128\u4f4d",
    "easy_mistakes": "1. 127.x.x.x\u662f\u56de\u73af\u5730\u5740\uff0c\u4e0d\u5c5e\u4e8eA\u7c7b\n2. A\u7c7b\u5730\u5740\u8303\u56f4\u662f1-126\uff0c\u4e0d\u662f0-127\n3. IPv4\u662f32\u4f4d\uff0cIPv6\u662f128\u4f4d"
  },
  {
    "id": "cs_005",
    "subject": "计算机基础",
    "title": "信息安全三要素",
    "keywords": ["信息安全", "保密性", "完整性", "可用性", "CIA"],
    "tags": ["高频考点"],
    "content": "\u4fe1\u606f\u5b89\u5168\u4e09\u8981\u7d20\uff08CIA\uff09\uff1a\n1. \u4fdd\u5bc6\u6027\uff08Confidentiality\uff09\uff1a\u4fe1\u606f\u4e0d\u88ab\u672a\u6388\u6743\u8bbf\u95ee\n2. \u5b8c\u6574\u6027\uff08Integrity\uff09\uff1a\u4fe1\u606f\u4e0d\u88ab\u7be1\u6539\n3. \u53ef\u7528\u6027\uff08Availability\uff09\uff1a\u4fe1\u606f\u53ef\u88ab\u6388\u6743\u7528\u6237\u8bbf\u95ee\n\n\u5e38\u89c1\u5b89\u5168\u6280\u672f\uff1a\n- \u52a0\u5bc6\uff08\u5bf9\u79f0\u52a0\u5bc6\u3001\u975e\u5bf9\u79f0\u52a0\u5bc6\uff09\n- \u6570\u5b57\u8bc1\u4e66\n- \u9632\u706b\u5899\n- \u6740\u6bd2\u8f6f\u4ef6",
    "easy_mistakes": "\u6570\u636e\u590d\u5236\u6027\u4e0d\u5c5e\u4e8e\u4fe1\u606f\u5b89\u5168\u4e09\u8981\u7d20\u3002\u4e09\u8981\u7d20\u662f\u4fdd\u5bc6\u6027\u3001\u5b8c\u6574\u6027\u3001\u53ef\u7528\u6027\u3002"
  }
];

// ==================== 题库（19道） ====================
const QUESTION_BANK = [
  {
    "id": "q_math_001",
    "subject": "高等数学",
    "type": "选择题",
    "question": "lim(x\u21920) sin(3x)/x 的值为？",
    "options": ["A. 0", "B. 1", "C. 3", "D. \u221e"],
    "answer": "C",
    "analysis": "利用第一重要极限：lim(x\u21920) sin(kx)/x = k\n原式 = lim(x\u21920) sin(3x)/(3x) \u00d7 3 = 1 \u00d7 3 = 3"
  },
  {
    "id": "q_math_002",
    "subject": "高等数学",
    "type": "选择题",
    "question": "lim(x\u2192\u221e) (1+2/x)^x 的值为？",
    "options": ["A. e", "B. e\u00b2", "C. 1", "D. \u221e"],
    "answer": "B",
    "analysis": "利用第二重要极限：lim(x\u2192\u221e) (1+1/x)^x = e\n令t=x/2\uff0c则x=2t\uff0cx\u2192\u221e时t\u2192\u221e\n原式 = lim(t\u2192\u221e) (1+1/t)^(2t) = [lim(t\u2192\u221e) (1+1/t)^t]\u00b2 = e\u00b2"
  },
  {
    "id": "q_math_003",
    "subject": "高等数学",
    "type": "计算题",
    "question": "求函数 f(x) = x\u00b3 - 6x\u00b2 + 9x + 1 的极值。",
    "answer": "极大值f(1)=5\uff0c极小值f(3)=1",
    "analysis": "1. 求导\uff1af'(x) = 3x\u00b2 - 12x + 9 = 3(x\u00b2-4x+3) = 3(x-1)(x-3)\n2. 令f'(x)=0\u5f97\u9a7b\u70b9\uff1ax=1, x=3\n3. \u5217\u8868\u5224\u522b\uff1a\n   x<1\u65f6f'(x)>0\uff08\u589e\uff09\uff0c1<x<3\u65f6f'(x)<0\uff08\u51cf\uff09\uff0cx>3\u65f6f'(x)>0\uff08\u589e\uff09\n4. x=1\u5904\u7531\u589e\u53d8\u51cf \u2192 \u6781\u5927\u503c\uff0cf(1)=1-6+9+1=5\n   x=3\u5904\u7531\u51cf\u53d8\u589e \u2192 \u6781\u5c0f\u503c\uff0cf(3)=27-54+27+1=1"
  },
  {
    "id": "q_math_004",
    "subject": "高等数学",
    "type": "计算题",
    "question": "求不定积分 \u222b x\u00b7cosx dx",
    "answer": "x\u00b7sinx + cosx + C",
    "analysis": "用分部积分法\uff1a\u222bu dv = uv - \u222bv du\n选u=x\uff08幂函数\uff09\uff0cdv=cosx dx\n则du=dx\uff0cv=sinx\n\n原式 = x\u00b7sinx - \u222bsinx dx\n     = x\u00b7sinx - (-cosx) + C\n     = x\u00b7sinx + cosx + C\n\n口诀\uff1a反对幂指三\uff0cx是幂函数选作u。"
  },
  {
    "id": "q_math_005",
    "subject": "高等数学",
    "type": "选择题",
    "question": "函数 f(x) = |x| 在 x=0 处",
    "options": ["A. 不连续", "B. 连续且可导", "C. 连续但不可导", "D. 可导但不连续"],
    "answer": "C",
    "analysis": "1. 连续性\uff1alim(x\u21920) |x| = 0 = f(0)\uff0c所以连续\n2. 可导性\uff1a\n   左导数\uff1alim(x\u21920-) (|x|-0)/x = lim(x\u21920-) (-x)/x = -1\n   右导数\uff1alim(x\u21920+) (|x|-0)/x = lim(x\u21920+) x/x = 1\n   左右导数不相等\uff0c所以不可导\n3. 结论\uff1a连续但不可导\uff08经典例子\uff09"
  },
  {
    "id": "q_c_001",
    "subject": "C语言程序设计",
    "type": "程序阅读题",
    "question": "以下程序的输出结果是？\n\nint x = 5, y = 10;\nif (x > 0 && y++ > 5) {\n    printf(\"%d %d\", x, y);\n} else {\n    printf(\"%d %d\", x, y);\n}",
    "answer": "5 11",
    "analysis": "1. x=5, y=10\n2. 判断 x>0 && y++>5\uff1a\n   - x>0为真(5>0)\uff0c继续判断右侧\n   - y++>5\uff1a先使用y=10判断10>5为真\uff0c然后y变为11\n   - 整个条件为真\uff0c执行if分支\n3. 输出 x=5, y=11\n\n注意\uff1a&&不会短路（因为左边为真）\uff0c所以y++会执行。"
  },
  {
    "id": "q_c_002",
    "subject": "C语言程序设计",
    "type": "程序阅读题",
    "question": "以下程序的输出结果是？\n\nint a = 1;\nswitch(a) {\n    case 1: printf(\"A\");\n    case 2: printf(\"B\");\n    case 3: printf(\"C\"); break;\n    default: printf(\"D\");\n}",
    "answer": "ABC",
    "analysis": "1. a=1\uff0c匹配case 1\n2. 执行printf(\"A\")输出A\n3. 没有break\uff0c继续执行case 2\uff0c输出B\n4. 仍然没有break\uff0c继续执行case 3\uff0c输出C\n5. case 3后有break\uff0c跳出switch\n6. 最终输出\uff1aABC\n\n这是switch语句case穿透的经典例子。"
  },
  {
    "id": "q_c_003",
    "subject": "C语言程序设计",
    "type": "程序阅读题",
    "question": "以下程序的输出结果是？\n\nint fun(int x) {\n    static int s = 0;\n    s += x;\n    return s;\n}\nint main() {\n    printf(\"%d \", fun(3));\n    printf(\"%d \", fun(5));\n    printf(\"%d\", fun(2));\n}",
    "answer": "3 8 10",
    "analysis": "static变量只初始化一次\uff0c后续调用保留上次值\uff1a\n1. 第一次调用fun(3)\uff1as=0+3=3\uff0c返回3\n2. 第二次调用fun(5)\uff1as=3+5=8\uff0c返回8\n3. 第三次调用fun(2)\uff1as=8+2=10\uff0c返回10\n\n注意\uff1astatic变量s只在第一次调用时初始化为0\uff0c之后保留上次的值。"
  },
  {
    "id": "q_c_004",
    "subject": "C语言程序设计",
    "type": "编程题",
    "question": "编写程序\uff1a输入10个整数\uff0c用冒泡排序按从小到大排序后输出。",
    "answer": "冒泡排序",
    "analysis": "冒泡排序核心思想\uff1a相邻元素比较交换\uff0c每轮把最大值冒到最后。",
    "code": "#include <stdio.h>\nint main() {\n    int a[10], i, j, temp;\n    // 输入10个整数\n    for (i = 0; i < 10; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    // 冒泡排序\n    for (i = 0; i < 9; i++) {         // 外层控制轮数\n        for (j = 0; j < 9 - i; j++) { // 内层控制比较\n            if (a[j] > a[j+1]) {      // 相邻比较\n                temp = a[j];          // 交换\n                a[j] = a[j+1];\n                a[j+1] = temp;\n            }\n        }\n    }\n    // 输出结果\n    for (i = 0; i < 10; i++) {\n        printf(\"%d \", a[i]);\n    }\n    return 0;\n}"
  },
  {
    "id": "q_c_005",
    "subject": "C语言程序设计",
    "type": "编程题",
    "question": "编写程序\uff1a用函数实现两个变量值的交换（用指针）。",
    "answer": "使用指针参数实现交换",
    "analysis": "值传递无法改变实参\uff0c必须用地址传递（指针）。",
    "code": "#include <stdio.h>\n// 交换函数（地址传递）\nvoid swap(int *a, int *b) {\n    int temp;\n    temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 3, y = 5;\n    printf(\"交换前：x=%d, y=%d\\n\", x, y);\n    swap(&x, &y);  // 传地址\n    printf(\"交换后：x=%d, y=%d\\n\", x, y);\n    return 0;\n}"
  },
  {
    "id": "q_c_006",
    "subject": "C语言程序设计",
    "type": "选择题",
    "question": "以下程序的输出结果是？\n\nchar s[] = \"hello\";\nprintf(\"%d %d\", strlen(s), sizeof(s));",
    "options": ["A. 5 5", "B. 5 6", "C. 6 6", "D. 6 5"],
    "answer": "B",
    "analysis": "1. strlen(s)求字符串长度\uff0c不含'\\0'\uff0c所以是5\n2. sizeof(s)求数组占用的字节数\uff0c包含'\\0'\uff0c所以是6\n3. \"hello\"有5个字符\uff0c加上自动添加的'\\0'共占6字节\n\nstrlen和sizeof的区别\uff1astrlen不算\\0\uff0csizeof算\\0。"
  },
  {
    "id": "q_eng_001",
    "subject": "公共英语",
    "type": "选择题",
    "question": "It is no use ______ about it. You'd better accept the fact.",
    "options": ["A. to complain", "B. complaining", "C. complain", "D. complained"],
    "answer": "B",
    "analysis": "考查固定句型\uff1aIt is no use doing sth\uff08做某事是没用的\uff09。\n这个句型要求用动名词（doing）形式。\n句意\uff1a抱怨这件事是没用的\uff0c你最好接受这个事实。"
  },
  {
    "id": "q_eng_002",
    "subject": "公共英语",
    "type": "选择题",
    "question": "______ he had enough money, he refused to buy that expensive car.",
    "options": ["A. Although", "B. Because", "C. Since", "D. If"],
    "answer": "A",
    "analysis": "考查连词辨析。\n- Although\uff1a虽然\uff08引导让步状语从句\uff09\n- Because\uff1a因为\uff08引导原因状语从句\uff09\n- Since\uff1a既然\n- If\uff1a如果\n\n句意\uff1a虽然他有足够的钱\uff0c但他拒绝买那辆昂贵的车。\n前后是让步关系\uff0c用Although。"
  },
  {
    "id": "q_eng_003",
    "subject": "公共英语",
    "type": "选择题",
    "question": "If I ______ you, I would not do that.",
    "options": ["A. am", "B. was", "C. were", "D. be"],
    "answer": "C",
    "analysis": "考查虚拟语气。\n与现在相反的虚拟条件句\uff1aIf + 主语 + 过去式\uff08be动词统一用were\uff09\uff0c主句用would+动词原形。\n句意\uff1a如果我是你\uff0c我不会那样做。\n注意\uff1a虚拟语气中be动词统一用were\uff0c不用was。"
  },
  {
    "id": "q_eng_004",
    "subject": "公共英语",
    "type": "选择题",
    "question": "Never ______ such a beautiful sunset before.",
    "options": ["A. I have seen", "B. have I seen", "C. I saw", "D. did I see"],
    "answer": "B",
    "analysis": "考查倒装句。\n否定词Never放句首\uff0c引起部分倒装（助动词have提到主语I前面）。\n正常语序\uff1aI have never seen...\n倒装语序\uff1aNever have I seen...\n注意\uff1a用现在完成时have seen\uff0c因为before暗示到现在为止的经验。"
  },
  {
    "id": "q_cs_001",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "计算机系统中\uff0c用于表示数据的最小单位是？",
    "options": ["A. 字节", "B. 位", "C. 字", "D. 兆字节"],
    "answer": "B",
    "analysis": "位（bit）是计算机中表示数据的最小单位\uff0c由0和1组成。\n字节（Byte）是基本存储单位\uff0c1Byte = 8bit。\n1KB = 1024B\uff0c1MB = 1024KB。"
  },
  {
    "id": "q_cs_002",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "十六进制数 1A 等于十进制数？",
    "options": ["A. 10", "B. 24", "C. 26", "D. 30"],
    "answer": "C",
    "analysis": "十六进制转十进制\uff1a按权展开求和\n1A = 1\u00d716\u00b9 + A\u00d716\u2070 = 1\u00d716 + 10\u00d71 = 16+10 = 26\n注意\uff1aA在十六进制中表示10。"
  },
  {
    "id": "q_cs_003",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "OSI参考模型中\uff0c哪一层负责数据的物理传输？",
    "options": ["A. 应用层", "B. 传输层", "C. 网络层", "D. 物理层"],
    "answer": "D",
    "analysis": "OSI七层模型从下到上\uff1a\n1.物理层-传输原始比特流\n2.数据链路层-帧传输\n3.网络层-IP协议\uff0c路由\n4.传输层-TCP/UDP\n5.会话层\n6.表示层\n7.应用层\n物理层是最低层\uff0c负责在物理介质上传输原始比特流。"
  },
  {
    "id": "q_cs_004",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "IPv4地址由多少位二进制数组成？",
    "options": ["A. 16位", "B. 32位", "C. 64位", "D. 128位"],
    "answer": "B",
    "analysis": "IPv4地址由32位二进制数组成\uff0c通常表示为4个十进制数\uff08每段0-255\uff09\uff0c如192.168.1.1。\nIPv6地址由128位组成。\n注意区分IPv4和IPv6的位数。"
  }
];
