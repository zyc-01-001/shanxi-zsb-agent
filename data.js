/**
 * 山西专升本计算机大类 - 数据文件 v2.0
 * 数学公式统一使用 LaTeX 格式（$...$ 行内，$$...$$ 块级）
 * 所有分式使用 \dfrac{}{}，极限使用 \lim_{}
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
    "keywords": ["极限", "重要极限", "sinx/x", "重要极限公式", "第二重要极限"],
    "tags": ["高频考点", "必背公式"],
    "content": "**第一重要极限：**\n$$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$$\n\n**推论：**\n$$\\lim_{x \\to 0} \\dfrac{\\tan x}{x} = 1, \\quad \\lim_{x \\to 0} \\dfrac{\\arcsin x}{x} = 1, \\quad \\lim_{x \\to 0} \\dfrac{\\arctan x}{x} = 1$$\n\n**第二重要极限：**\n$$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = e$$\n\n**变形：**\n$$\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$$",
    "easy_mistakes": "1. 第二重要极限必须是 $1+$无穷小 的无穷大次方形式\n2. 注意变量要一致，如果 $x \\to 0$ 则用 $(1+x)^{\\frac{1}{x}}$，如果 $x \\to \\infty$ 则用 $\\left(1+\\dfrac{1}{x}\\right)^x$"
  },
  {
    "id": "math_002",
    "subject": "高等数学",
    "title": "等价无穷小替换",
    "keywords": ["等价无穷小", "无穷小", "替换", "求极限"],
    "tags": ["高频考点", "必背公式", "易错"],
    "content": "$x \\to 0$ 时常用的等价无穷小：\n- $\\sin x \\sim x$\n- $\\tan x \\sim x$\n- $\\arcsin x \\sim x$\n- $\\arctan x \\sim x$\n- $1 - \\cos x \\sim \\dfrac{x^2}{2}$\n- $\\ln(1+x) \\sim x$\n- $e^x - 1 \\sim x$\n- $a^x - 1 \\sim x \\cdot \\ln a$\n- $(1+x)^a - 1 \\sim ax$\n- $x - \\sin x \\sim \\dfrac{x^3}{6}$",
    "easy_mistakes": "等价无穷小替换**只能用于乘除运算**，不能用于加减运算！\n\n例如：$\\lim_{x \\to 0} \\dfrac{\\tan x - \\sin x}{x^3}$ 不能直接替换成 $\\dfrac{x - x}{x^3} = 0$，这是**错误的**。"
  },
  {
    "id": "math_003",
    "subject": "高等数学",
    "title": "基本求导公式",
    "keywords": ["求导", "导数", "导数公式", "基本公式"],
    "tags": ["高频考点", "必背公式"],
    "content": "基本求导公式：\n- $(c)' = 0$\n- $(x^a)' = a \\cdot x^{a-1}$\n- $(a^x)' = a^x \\cdot \\ln a$，特别地 $(e^x)' = e^x$\n- $(\\log_a x)' = \\dfrac{1}{x \\cdot \\ln a}$，特别地 $(\\ln x)' = \\dfrac{1}{x}$\n- $(\\sin x)' = \\cos x$\n- $(\\cos x)' = -\\sin x$\n- $(\\tan x)' = \\sec^2 x$\n- $(\\cot x)' = -\\csc^2 x$\n- $(\\sec x)' = \\sec x \\cdot \\tan x$\n- $(\\csc x)' = -\\csc x \\cdot \\cot x$\n- $(\\arcsin x)' = \\dfrac{1}{\\sqrt{1-x^2}}$\n- $(\\arccos x)' = -\\dfrac{1}{\\sqrt{1-x^2}}$\n- $(\\arctan x)' = \\dfrac{1}{1+x^2}$\n- $(\\text{arccot}\\, x)' = -\\dfrac{1}{1+x^2}$",
    "easy_mistakes": "1. $(\\sin x)' = \\cos x$，但 $(\\cos x)' = -\\sin x$，注意负号\n2. $(\\arcsin x)'$ 和 $(\\arccos x)'$ 差一个负号\n3. 复合函数求导要用链式法则，不要漏层"
  },
  {
    "id": "math_004",
    "subject": "高等数学",
    "title": "复合函数求导（链式法则）",
    "keywords": ["复合函数", "链式法则", "求导", "嵌套"],
    "tags": ["高频考点", "解题技巧"],
    "content": "**链式法则：** 如果 $y = f(u)$，$u = g(x)$，则：\n$$\\dfrac{dy}{dx} = f'(u) \\cdot g'(x)$$\n\n**步骤：**\n1. 分清复合层次，从外到内逐层求导\n2. 每层求导后乘以内层的导数\n3. 最后化简\n\n**例：** $y = \\sin(x^2)$\n- 外层：$\\sin(u)$，导数 $\\cos(u)$\n- 内层：$u = x^2$，导数 $2x$\n- 结果：$y' = \\cos(x^2) \\cdot 2x$",
    "easy_mistakes": "最常见的错误是**漏层**！比如 $\\sin(x^2)$ 只写成 $\\cos(x^2)$ 而忘了乘 $2x$。"
  },
  {
    "id": "math_005",
    "subject": "高等数学",
    "title": "洛必达法则",
    "keywords": ["洛必达", "洛必达法则", "未定式", "0/0", "无穷比无穷"],
    "tags": ["高频考点", "解题技巧"],
    "content": "洛必达法则用于求未定式极限：\n\n$\\dfrac{0}{0}$ 型或 $\\dfrac{\\infty}{\\infty}$ 型：\n$$\\lim \\dfrac{f(x)}{g(x)} = \\lim \\dfrac{f'(x)}{g'(x)}$$\n\n**使用条件：**\n1. 必须是 $\\dfrac{0}{0}$ 型或 $\\dfrac{\\infty}{\\infty}$ 型\n2. 分子分母分别求导后的极限存在或为 $\\infty$\n3. 可以连续使用，直到不是未定式为止",
    "easy_mistakes": "1. 不是 $\\dfrac{0}{0}$ 或 $\\dfrac{\\infty}{\\infty}$ 型不能用洛必达！\n2. 每次用完洛必达后要检查是否还是未定式\n3. 分子分母**分别**求导，不是对整个分数求导"
  },
  {
    "id": "math_006",
    "subject": "高等数学",
    "title": "基本积分公式",
    "keywords": ["积分", "不定积分", "积分公式", "基本公式"],
    "tags": ["高频考点", "必背公式"],
    "content": "基本积分公式：\n- $\\int 0 \\, dx = C$\n- $\\int x^a \\, dx = \\dfrac{x^{a+1}}{a+1} + C$（$a \\neq -1$）\n- $\\int \\dfrac{1}{x} \\, dx = \\ln|x| + C$\n- $\\int a^x \\, dx = \\dfrac{a^x}{\\ln a} + C$\n- $\\int e^x \\, dx = e^x + C$\n- $\\int \\sin x \\, dx = -\\cos x + C$\n- $\\int \\cos x \\, dx = \\sin x + C$\n- $\\int \\sec^2 x \\, dx = \\tan x + C$\n- $\\int \\csc^2 x \\, dx = -\\cot x + C$\n- $\\int \\dfrac{1}{1+x^2} \\, dx = \\arctan x + C$\n- $\\int \\dfrac{1}{\\sqrt{1-x^2}} \\, dx = \\arcsin x + C$",
    "easy_mistakes": "1. 积分是求导的逆运算，注意符号变化\n2. $\\int \\sin x \\, dx = -\\cos x + C$，别忘了负号和常数 $C$\n3. $\\int \\dfrac{1}{x} \\, dx = \\ln|x| + C$，注意加绝对值"
  },
  {
    "id": "math_007",
    "subject": "高等数学",
    "title": "分部积分法",
    "keywords": ["分部积分", "积分方法", "∫u dv"],
    "tags": ["高频考点", "解题技巧"],
    "content": "**分部积分公式：**\n$$\\int u \\, dv = uv - \\int v \\, du$$\n\n**选择 $u$ 的口诀：反对幂指三**（优先级从高到低）\n- **反**三角函数\n- **对**数函数\n- **幂**函数\n- **指**数函数\n- **三**角函数\n\n**例：** $\\int x \\cdot e^x \\, dx$\n- 选 $u = x$，$dv = e^x \\, dx$\n- 则 $du = dx$，$v = e^x$\n- $$= x \\cdot e^x - \\int e^x \\, dx = x \\cdot e^x - e^x + C$$",
    "easy_mistakes": "选错 $u$ 会导致越积越复杂。记住：反对幂指三，排在前面的选作 $u$。"
  },
  {
    "id": "math_008",
    "subject": "高等数学",
    "title": "变上限积分求导",
    "keywords": ["变上限积分", "求导", "牛顿莱布尼兹"],
    "tags": ["高频考点"],
    "content": "**变上限积分：**\n$$F(x) = \\int_a^x f(t) \\, dt \\quad \\Rightarrow \\quad F'(x) = f(x)$$\n\n**推广：** 如果上限是 $g(x)$，则\n$$F(x) = \\int_a^{g(x)} f(t) \\, dt \\quad \\Rightarrow \\quad F'(x) = f(g(x)) \\cdot g'(x)$$\n\n**牛顿-莱布尼兹公式：**\n$$\\int_a^b f(x) \\, dx = F(b) - F(a)$$\n其中 $F(x)$ 是 $f(x)$ 的一个原函数。",
    "easy_mistakes": "变上限积分求导时，如果上限不是 $x$ 而是 $x$ 的函数，要乘以上限函数的导数（链式法则）。"
  },
  {
    "id": "math_009",
    "subject": "高等数学",
    "title": "中值定理",
    "keywords": ["中值定理", "罗尔定理", "拉格朗日", "证明"],
    "tags": ["高频考点", "证明题"],
    "content": "**罗尔定理：** $f(x)$ 在 $[a,b]$ 连续，$(a,b)$ 可导，$f(a)=f(b)$，则存在 $\\xi \\in (a,b)$ 使 $f'(\\xi) = 0$\n\n**拉格朗日中值定理：** $f(x)$ 在 $[a,b]$ 连续，$(a,b)$ 可导，则存在 $\\xi \\in (a,b)$ 使\n$$f'(\\xi) = \\dfrac{f(b) - f(a)}{b - a}$$\n\n**柯西中值定理：** $f(x), g(x)$ 在 $[a,b]$ 连续，$(a,b)$ 可导，$g'(x) \\neq 0$，则存在 $\\xi$ 使\n$$\\dfrac{f(b) - f(a)}{g(b) - g(a)} = \\dfrac{f'(\\xi)}{g'(\\xi)}$$",
    "easy_mistakes": "1. 三个条件缺一不可：闭区间连续、开区间可导、端点值相等（罗尔）\n2. 证明题关键是构造合适的辅助函数"
  },
  {
    "id": "math_010",
    "subject": "高等数学",
    "title": "一阶线性微分方程",
    "keywords": ["微分方程", "一阶线性", "通解公式"],
    "tags": ["高频考点"],
    "content": "**标准形式：**\n$$y' + P(x)y = Q(x)$$\n\n**通解公式：**\n$$y = e^{-\\int P \\, dx} \\cdot \\left[\\int Q \\cdot e^{\\int P \\, dx} \\, dx + C\\right]$$\n\n**步骤：**\n1. 化为标准形式 $y' + P(x)y = Q(x)$\n2. 找出 $P(x)$ 和 $Q(x)$\n3. 套公式\n4. 化简",
    "easy_mistakes": "套公式时 $P$ 和 $Q$ 不要搞混。标准形式是 $y' + P(x)y = Q(x)$，如果方程是 $y' - 2y = 3$，则 $P = -2$，$Q = 3$。"
  },
  {
    "id": "math_011",
    "subject": "高等数学",
    "title": "泰勒公式（麦克劳林展开）",
    "keywords": ["泰勒", "麦克劳林", "级数展开", "幂级数"],
    "tags": ["高频考点", "必背公式"],
    "content": "常见麦克劳林展开（$x = 0$ 处）：\n\n$$e^x = 1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\cdots = \\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}, \\quad x \\in \\mathbb{R}$$\n\n$$\\sin x = x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots, \\quad x \\in \\mathbb{R}$$\n\n$$\\cos x = 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\cdots, \\quad x \\in \\mathbb{R}$$\n\n$$\\ln(1+x) = x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\cdots, \\quad x \\in (-1, 1]$$\n\n$$\\dfrac{1}{1-x} = 1 + x + x^2 + \\cdots, \\quad x \\in (-1, 1)$$\n\n$$(1+x)^a = 1 + ax + \\dfrac{a(a-1)}{2!} x^2 + \\cdots, \\quad x \\in (-1, 1)$$",
    "easy_mistakes": "注意收敛区间！$e^x$、$\\sin x$、$\\cos x$ 在 $\\mathbb{R}$ 上收敛，$\\ln(1+x)$ 在 $(-1, 1]$ 收敛，$\\dfrac{1}{1-x}$ 在 $(-1, 1)$ 收敛。"
  },
  {
    "id": "math_012",
    "subject": "高等数学",
    "title": "函数单调性与极值",
    "keywords": ["单调性", "极值", "极大值", "极小值"],
    "tags": ["高频考点"],
    "content": "**单调性判别：**\n- $f'(x) > 0 \\Rightarrow$ 单调递增\n- $f'(x) < 0 \\Rightarrow$ 单调递减\n\n**极值的必要条件：** $f'(x_0) = 0$ 或 $f'(x_0)$ 不存在\n\n**极值第一充分条件：**\n- $x$ 过 $x_0$ 时 $f'$ 由正变负 $\\Rightarrow$ 极大值\n- $x$ 过 $x_0$ 时 $f'$ 由负变正 $\\Rightarrow$ 极小值\n- $f'$ 不变号 $\\Rightarrow$ 不是极值\n\n**极值第二充分条件：**\n- $f'(x_0) = 0$ 且 $f''(x_0) < 0 \\Rightarrow$ 极大值\n- $f'(x_0) = 0$ 且 $f''(x_0) > 0 \\Rightarrow$ 极小值",
    "easy_mistakes": "1. 不要忘记检查 $f'(x)$ 不存在的点\n2. 第一充分条件要看导数在 $x_0$ 左右两侧的符号变化\n3. $f'(x_0) = 0$ 不一定就是极值点"
  },
  {
    "id": "c_001",
    "subject": "C语言程序设计",
    "title": "数据类型与字节数",
    "keywords": ["数据类型", "int", "char", "float", "double", "字节"],
    "tags": ["高频考点", "基础"],
    "content": "C语言基本数据类型及字节数：\n- `int`（整型）：4字节\n- `short`（短整型）：2字节\n- `long`（长整型）：4字节\n- `float`（单精度）：4字节，约6-7位有效数字\n- `double`（双精度）：8字节，约15-16位有效数字\n- `char`（字符型）：1字节\n\n常量后缀：`L`（长整型）、`U`（无符号）、`F`（float）\n进制前缀：`0`（八进制）、`0x`（十六进制）",
    "easy_mistakes": "1. `char` 是1字节，不是2字节\n2. `float` 和 `double` 的有效数字位数不同\n3. 八进制前缀是 `0`（数字零），不是字母O"
  },
  {
    "id": "c_002",
    "subject": "C语言程序设计",
    "title": "运算符优先级",
    "keywords": ["运算符", "优先级", "表达式", "求值"],
    "tags": ["高频考点", "易错"],
    "content": "运算符优先级（从高到低）：\n1. `()` `[]` `->` `.`\n2. `!` `~` `++` `--` `-`(负号) `*` `&` `sizeof`\n3. `*` `/` `%`\n4. `+` `-`\n5. `<<` `>>`\n6. `<` `<=` `>` `>=`\n7. `==` `!=`\n8. `&` `^` `|`\n9. `&&`\n10. `||`\n11. `?:`\n12. `=` `+=` `-=` 等\n13. `,`",
    "easy_mistakes": "1. `=` 是赋值，`==` 是判断相等\n2. `&&`（逻辑与）优先级高于 `||`（逻辑或）\n3. 后置 `++` 优先级高于前置 `++`\n4. 逗号运算符优先级最低"
  },
  {
    "id": "c_003",
    "subject": "C语言程序设计",
    "title": "自增自减运算符",
    "keywords": ["自增", "自减", "++", "--", "前置", "后置"],
    "tags": ["高频考点", "易错"],
    "content": "**前置 `++`/`--`：先变后用**\n- `++a`：先加1，再使用a的新值\n- `--a`：先减1，再使用a的新值\n\n**后置 `++`/`--`：先用后变**\n- `a++`：先使用a的当前值，再加1\n- `a--`：先使用a的当前值，再减1\n\n**例：** `int a = 5;`\n- `b = ++a;` → $a = 6,\\ b = 6$\n- `b = a++;` → $a = 6,\\ b = 5$",
    "easy_mistakes": "1. 前置和后置的区别在表达式中体现\n2. 不要在同一个表达式中对同一个变量多次自增，行为未定义\n3. `*p++` 和 `(*p)++` 含义不同"
  },
  {
    "id": "c_004",
    "subject": "C语言程序设计",
    "title": "逻辑运算短路特性",
    "keywords": ["逻辑运算", "短路", "&&", "||", "条件"],
    "tags": ["高频考点", "易错"],
    "content": "**短路特性：**\n- `&&`（逻辑与）：左边为假(0)时，右边**不执行**\n- `||`（逻辑或）：左边为真(非0)时，右边**不执行**\n\n**例1：** `int a = 0, b = 5;`\n  `(a > 0) && (b++)` → $a > 0$ 为假，`b++` 不执行，$b$ 仍为5\n\n**例2：** `int a = 1, b = 5;`\n  `(a > 0) || (b++)` → $a > 0$ 为真，`b++` 不执行，$b$ 仍为5\n\n这个特性常在程序阅读题中考查。",
    "easy_mistakes": "短路特性影响右侧表达式的执行，如果有自增自减运算，要注意变量值是否改变。"
  },
  {
    "id": "c_005",
    "subject": "C语言程序设计",
    "title": "switch语句与break",
    "keywords": ["switch", "case", "break", "穿透"],
    "tags": ["高频考点", "易错"],
    "content": "**switch语句格式：**\n```c\nswitch(表达式) {\n  case 常量1: 语句; break;\n  case 常量2: 语句; break;\n  default: 语句;\n}\n```\n\n`break` 的作用：跳出 switch 结构。\n如果不加 `break`，会继续执行下一个 case 的语句，这叫**case穿透**。",
    "easy_mistakes": "1. `case` 后必须是常量表达式，不能是变量\n2. 忘加 `break` 导致穿透是常见考点\n3. `default` 可以省略，但建议加上\n4. `switch` 表达式必须是整型或字符型"
  },
  {
    "id": "c_006",
    "subject": "C语言程序设计",
    "title": "一维数组",
    "keywords": ["数组", "一维数组", "下标", "初始化"],
    "tags": ["高频考点", "基础"],
    "content": "**定义：** `int a[10];`\n\n**初始化：**\n- `int a[5] = {1,2,3,4,5};`\n- `int a[] = {1,2,3};`（自动确定大小为3）\n- `int a[5] = {1,2};`（其余自动初始化为0）\n\n**引用：** 下标从0开始，`a[0]` 到 `a[n-1]`\n\n数组名代表首地址，`a` 等价于 `&a[0]`",
    "easy_mistakes": "1. 下标从0开始，最大下标是 $n-1$\n2. 数组大小必须是常量或常量表达式\n3. 数组名是地址常量，不能赋值"
  },
  {
    "id": "c_007",
    "subject": "C语言程序设计",
    "title": "字符数组与字符串",
    "keywords": ["字符数组", "字符串", "\\0", "strlen", "strcpy"],
    "tags": ["高频考点"],
    "content": "字符串以 `\\0` 结尾。\n\n**字符数组 vs 字符串：**\n- `char s[5] = {'a','b','c'};` — 不是字符串（没有 `\\0`）\n- `char s[] = \"abc\";` — 是字符串（自动加 `\\0`，大小为4）\n\n**常用字符串函数**（需 `#include <string.h>`）：\n- `strlen(s)`：求长度（不含 `\\0`）\n- `strcpy(s1, s2)`：s2复制到s1\n- `strcat(s1, s2)`：s2接到s1后\n- `strcmp(s1, s2)`：比较（0相等，>0前大，<0前小）",
    "easy_mistakes": "1. 字符数组大小要比字符串长度多1（存 `\\0`）\n2. `scanf(\"%s\")` 遇空格结束，读不了含空格的字符串\n3. `strlen` 和 `sizeof` 不同：`strlen` 不算 `\\0`，`sizeof` 算 `\\0`"
  },
  {
    "id": "c_008",
    "subject": "C语言程序设计",
    "title": "函数参数传递：值传递vs地址传递",
    "keywords": ["函数", "参数传递", "值传递", "地址传递", "指针参数"],
    "tags": ["高频考点", "易错"],
    "content": "**值传递：** 实参的值复制给形参，形参改变不影响实参。\n**地址传递：** 传递变量的地址，形参改变会影响实参。\n**数组传递：** 数组名作为参数，传递的是首地址。\n\n**例：**\n```c\nvoid swap1(int a, int b) { int t=a; a=b; b=t; }  // 值传递，不改变实参\nvoid swap2(int *a, int *b) { int t=*a; *a=*b; *b=t; }  // 地址传递，改变实参\n```",
    "easy_mistakes": "1. 值传递不会修改实参，这是程序阅读题最常考的点\n2. 数组名传参本质是地址传递，函数内修改数组元素会影响原数组\n3. `scanf` 中变量要加 `&` 取地址，但数组名不需要"
  },
  {
    "id": "c_009",
    "subject": "C语言程序设计",
    "title": "指针基础",
    "keywords": ["指针", "地址", "&", "*", "指针变量"],
    "tags": ["高频考点", "重点难点"],
    "content": "**指针变量：** 存放地址的变量。\n\n**定义：** `int *p;`\n**赋值：** `p = &a;`（取地址）\n**引用：** `*p` 表示 p 指向的变量的值（间接访问）\n\n**两个运算符：**\n- `&`：取地址\n- `*`：取内容（间接访问）\n\n**指针与数组：**\n```c\nint a[10], *p;\np = a;\n// 则 p+i 指向 a[i]，*(p+i) 等价于 a[i]\n```",
    "easy_mistakes": "1. 指针必须先赋值再使用，未赋值的指针是野指针\n2. 指针加减以数据类型大小为单位，`p+1` 不是地址+1而是 `+sizeof(int)`\n3. `*p++` 和 `(*p)++` 不同：前者先取值后 `p++`，后者先取值再给值加1"
  },
  {
    "id": "c_010",
    "subject": "C语言程序设计",
    "title": "指针与二维数组",
    "keywords": ["二维数组", "指针", "数组指针", "*(*(a+i)+j)"],
    "tags": ["高频考点", "难点"],
    "content": "二维数组 `a[m][n]` 的地址表示：\n- `a[i][j]` 的地址：`*(a+i)+j` 或 `a[i]+j`\n- `a[i][j]` 的值：`*(*(a+i)+j)`\n\n**理解：**\n- `a` 是行指针，`a+1` 指向下一行\n- `a[i]` 是列指针，`a[i]+1` 指向下一列\n- `*(a+i)` 把行指针转为列指针",
    "easy_mistakes": "1. `a+i` 和 `a[i]` 虽然值相同但类型不同\n2. 指针数组 `int *p[10]` 和数组指针 `int (*p)[10]` 不同\n3. 二维数组名是行指针，不是简单的列指针"
  },
  {
    "id": "c_011",
    "subject": "C语言程序设计",
    "title": "static静态变量",
    "keywords": ["static", "静态变量", "局部变量", "作用域"],
    "tags": ["高频考点"],
    "content": "`static` 修饰局部变量：\n- 函数调用结束后不释放内存\n- 下次调用时保留上次的值\n- 只在第一次调用时初始化\n\n**例：**\n```c\nint count() {\n  static int n = 0;\n  n++;\n  return n;\n}\n// 第一次调用返回1，第二次返回2，第三次返回3...\n```",
    "easy_mistakes": "1. `static` 变量只初始化一次，不是每次调用都初始化\n2. `static` 全局变量限制在本文件内使用\n3. `static` 局部变量存在静态存储区，不是栈"
  },
  {
    "id": "c_012",
    "subject": "C语言程序设计",
    "title": "宏定义",
    "keywords": ["宏定义", "#define", "预处理", "宏替换"],
    "tags": ["高频考点", "易错"],
    "content": "**不带参数：** `#define PI 3.14159`\n\n**带参数：** `#define SQR(x) ((x)*(x))`\n\n宏只是简单文本替换，在编译前处理。\n\n**例：**\n```c\n#define SQR(x) x*x\nSQR(3+2)  // → 3+2*3+2 = 11（错误！）\n\n#define SQR(x) ((x)*(x))\nSQR(3+2)  // → ((3+2)*(3+2)) = 25（正确）\n```",
    "easy_mistakes": "1. 宏定义不加分号\n2. 带参宏的参数一定要加括号\n3. 宏替换是纯文本替换，不考虑运算优先级\n4. 宏和函数不同：宏没有类型检查，不做计算"
  },
  {
    "id": "c_013",
    "subject": "C语言程序设计",
    "title": "结构体",
    "keywords": ["结构体", "struct", "成员", "结构体指针"],
    "tags": ["高频考点"],
    "content": "**定义：**\n```c\nstruct Student {\n  int id;\n  char name[20];\n  float score;\n};\n```\n\n**变量定义：** `struct Student s1;`\n**初始化：** `struct Student s1 = {1, '张三', 90.5};`\n**成员引用：** `s1.id`, `s1.name`\n\n**结构体指针：**\n```c\nstruct Student *p = &s1;\n// 通过指针引用成员：p->id 或 (*p).id\n```",
    "easy_mistakes": "1. `struct` 和 `union` 不同：struct 各成员独立内存，union 共用内存\n2. 结构体指针用 `->`，结构体变量用 `.`\n3. `typedef` 可以简化结构体类型名"
  },
  {
    "id": "c_014",
    "subject": "C语言程序设计",
    "title": "文件操作",
    "keywords": ["文件", "fopen", "fclose", "fread", "fwrite", "FILE"],
    "tags": ["高频考点"],
    "content": "**文件操作步骤：** 打开 → 读写 → 关闭\n\n**打开：**\n```c\nFILE *fp = fopen('文件名', '打开方式');\n```\n打开方式：\n- `\"r\"`：只读（文件须存在）\n- `\"w\"`：只写（覆盖，不存在则创建）\n- `\"a\"`：追加\n- 加 `\"b\"` 表示二进制\n\n**关闭：** `fclose(fp);`\n\n**读写函数：**\n- `fgetc`/`fputc`：读/写一个字符\n- `fgets`/`fputs`：读/写字符串\n- `fscanf`/`fprintf`：格式化读/写\n- `fread`/`fwrite`：读/写数据块",
    "easy_mistakes": "1. 打开文件后要检查是否成功：`if (fp == NULL)`\n2. 使用完要关闭文件\n3. `\"r\"` 和 `\"w\"` 不要搞混，`\"r\"` 要求文件必须存在"
  },
  {
    "id": "eng_001",
    "subject": "公共英语",
    "title": "时态总结",
    "keywords": ["时态", "现在时", "过去时", "完成时", "进行时"],
    "tags": ["高频考点"],
    "content": "常考时态：\n- **一般现在时：** do/does（习惯、事实）\n- **一般过去时：** did（过去发生的动作）\n- **一般将来时：** will do / be going to do\n- **现在进行时：** am/is/are doing（正在发生）\n- **过去进行时：** was/were doing（过去某时正在发生）\n- **现在完成时：** have/has done（过去发生对现在有影响）\n- **过去完成时：** had done（过去某时之前已完成）\n\n**被动语态：** be + done",
    "easy_mistakes": "1. 现在完成时 vs 一般过去时：现在完成时强调对现在的影响\n2. 过去完成时必须有过去的参照时间\n3. 现在进行时不能用于表示状态（如 know, love 等状态动词）"
  },
  {
    "id": "eng_002",
    "subject": "公共英语",
    "title": "非谓语动词",
    "keywords": ["非谓语", "不定式", "动名词", "分词", "to do", "doing"],
    "tags": ["高频考点", "易错"],
    "content": "**不定式（to do）：**\n常见搭配：want to do, decide to do, hope to do, refuse to do\n\n**动名词（doing）：**\n常见搭配：enjoy doing, finish doing, mind doing, avoid doing\n\n**分词：**\n- 现在分词（doing）：表主动、进行\n- 过去分词（done）：表被动、完成\n\n**常见考点：**\n- It is no use **doing** sth（固定句型，用doing）\n- stop **to do**（停下来去做）/ stop **doing**（停止做）",
    "easy_mistakes": "1. to do 和 doing 的搭配不同，需要记忆\n2. stop to do 和 stop doing 意思完全相反\n3. 分词作定语：现在分词表主动，过去分词表被动"
  },
  {
    "id": "eng_003",
    "subject": "公共英语",
    "title": "定语从句",
    "keywords": ["定语从句", "关系代词", "that", "which", "who", "关系副词"],
    "tags": ["高频考点"],
    "content": "**关系代词：**\n- who（人，作主语）\n- whom（人，作宾语）\n- whose（表所属）\n- which（物）\n- that（人或物）\n\n**关系副词：**\n- when（时间）\n- where（地点）\n- why（原因）\n\n**只能用 that 的情况：**\n1. 先行词是 all, everything, anything, nothing 等不定代词\n2. 先行词被最高级修饰\n3. 先行词被 the only, the very 等修饰",
    "easy_mistakes": "1. that 和 which 在限制性定语从句中常可互换，但有些情况只能用 that\n2. 介词+关系代词时只能用 which/whom，不能用 that\n3. 非限制性定语从句（有逗号）不能用 that"
  },
  {
    "id": "eng_004",
    "subject": "公共英语",
    "title": "虚拟语气",
    "keywords": ["虚拟语气", "if", "would", "wish", "假设"],
    "tags": ["高频考点", "易错"],
    "content": "**if 虚拟条件句：**\n\n与现在相反：If + 过去式, would/should/could/might + do\n  例：If I **were** you, I **would** go.\n\n与过去相反：If + had done, would/should/could/might + have done\n  例：If I **had known**, I **would have helped** you.\n\n与将来相反：If + were to do / should do, would + do\n\n**wish 后虚拟：**\n- wish + 过去式（与现在相反）\n- wish + had done（与过去相反）\n- wish + would do（与将来相反）\n\n**It is (high) time that** + 过去式\n**would rather** + 过去式",
    "easy_mistakes": "1. 与现在相反，be动词统一用 were\n2. 注意时态对应：条件句和主句的时态要匹配\n3. would rather 后面的从句用过去式"
  },
  {
    "id": "eng_005",
    "subject": "公共英语",
    "title": "倒装句",
    "keywords": ["倒装", "never", "hardly", "not only", "部分倒装"],
    "tags": ["高频考点"],
    "content": "**部分倒装**（助动词/情态动词提到主语前）：\n\n否定词放句首时倒装：\n- **Never** have I seen such a beautiful place.\n- **Hardly** had he arrived when it started to rain.\n- **Not only** does he study hard, but he also helps others.\n- **Seldom** do I go shopping.\n\nOnly 放句首时倒装：\n- **Only then** did I realize my mistake.\n- **Only in this way** can we solve the problem.",
    "easy_mistakes": "1. 否定词不在句首时不倒装\n2. 部分倒装只把助动词/情态动词提前，不是全部谓语\n3. Not only...but also 结构中，not only 后倒装，but also 后不倒装"
  },
  {
    "id": "cs_001",
    "subject": "计算机基础",
    "title": "计算机发展史",
    "keywords": ["计算机发展", "ENIAC", "冯诺依曼", "电子管", "晶体管"],
    "tags": ["高频考点", "基础"],
    "content": "**四代计算机：**\n- 第一代：电子管（1946-1958）\n- 第二代：晶体管（1958-1964）\n- 第三代：集成电路（1964-1971）\n- 第四代：大规模/超大规模集成电路（1971-至今）\n\n世界第一台电子计算机：**ENIAC**（1946年）\n冯·诺依曼体系结构核心：**存储程序**概念\n首台存储程序计算机：**EDVAC**",
    "easy_mistakes": "1. ENIAC 是第一台，但不是存储程序的；EDVAC 才是首台存储程序计算机\n2. 冯·诺依曼的核心贡献是存储程序概念"
  },
  {
    "id": "cs_002",
    "subject": "计算机基础",
    "title": "进制转换",
    "keywords": ["进制", "二进制", "八进制", "十六进制", "十进制", "转换"],
    "tags": ["高频考点", "必会"],
    "content": "**二进制→十进制：** 按权展开求和\n  例：$1011 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 11$\n\n**十进制→二进制：** 除2取余倒序排列\n  例：13 → 1101\n\n**二进制↔八进制：** 3位一组\n  例：$101\\ 011 \\to 53$（八进制）\n\n**二进制↔十六进制：** 4位一组\n  例：$1010\\ 0011 \\to A3$（十六进制）\n\n十六进制后缀H，八进制前缀0",
    "easy_mistakes": "1. 十进制转二进制余数要倒序排列\n2. 二进制转八/十六进制时位数不够要在高位补0\n3. 十六进制的 A-F 对应 10-15"
  },
  {
    "id": "cs_003",
    "subject": "计算机基础",
    "title": "OSI七层模型",
    "keywords": ["OSI", "七层模型", "网络协议", "TCP", "IP", "HTTP"],
    "tags": ["高频考点"],
    "content": "**OSI七层模型**（从下到上）：\n1. 物理层：传输原始比特流\n2. 数据链路层：帧传输\n3. 网络层：IP协议，路由选择\n4. 传输层：TCP/UDP，端到端传输\n5. 会话层\n6. 表示层\n7. 应用层：HTTP、FTP、SMTP等\n\n**TCP/IP协议族：**\n- 应用层：HTTP、FTP、SMTP、POP3、DNS\n- 传输层：TCP（可靠）、UDP（快但不可靠）\n- 网络层：IP、ICMP、ARP",
    "easy_mistakes": "1. TCP 是传输层协议，不是网络层\n2. HTTP 是应用层协议\n3. IP 是网络层协议"
  },
  {
    "id": "cs_004",
    "subject": "计算机基础",
    "title": "IP地址",
    "keywords": ["IP地址", "IPv4", "A类", "B类", "C类", "子网掩码"],
    "tags": ["高频考点"],
    "content": "**IPv4：** 32位，分4段，每段0-255\n\n**IP地址分类：**\n- A类：$1.0.0.0 \\sim 126.255.255.255$（大型网络）\n- B类：$128.0.0.0 \\sim 191.255.255.255$（中型网络）\n- C类：$192.0.0.0 \\sim 223.255.255.255$（小型网络）\n- D类：组播\n- E类：保留\n\n**IPv6：** 128位",
    "easy_mistakes": "1. $127.x.x.x$ 是回环地址，不属于A类\n2. A类地址范围是1-126，不是0-127\n3. IPv4是32位，IPv6是128位"
  },
  {
    "id": "cs_005",
    "subject": "计算机基础",
    "title": "信息安全三要素",
    "keywords": ["信息安全", "保密性", "完整性", "可用性", "CIA"],
    "tags": ["高频考点"],
    "content": "**信息安全三要素（CIA）：**\n1. **保密性**（Confidentiality）：信息不被未授权访问\n2. **完整性**（Integrity）：信息不被篡改\n3. **可用性**（Availability）：信息可被授权用户访问\n\n**常见安全技术：**\n- 加密（对称加密、非对称加密）\n- 数字证书\n- 防火墙\n- 杀毒软件",
    "easy_mistakes": "数据复制性不属于信息安全三要素。三要素是保密性、完整性、可用性。"
  },
  {
    "id": "math_013",
    "subject": "高等数学",
    "title": "换元积分法",
    "keywords": ["换元积分", "第一类换元", "第二类换元", "凑微分", "三角换元"],
    "tags": ["高频考点", "必会"],
    "content": "**第一类换元（凑微分法）：**\n$$\\int f[\\varphi(x)] \\varphi'(x) dx = \\int f(u) du \\quad (u=\\varphi(x))$$\n\n常见凑微分：\n- $\\int f(ax+b)dx = \\dfrac{1}{a}f(ax+b) + C$\n- $\\int x \\cdot f(x^2)dx = \\dfrac{1}{2}f(x^2) + C$\n- $\\int \\dfrac{f'(x)}{f(x)}dx = \\ln|f(x)| + C$\n\n**第二类换元（三角换元）：**\n- 含 $\\sqrt{a^2-x^2}$：令 $x=a\\sin t$\n- 含 $\\sqrt{a^2+x^2}$：令 $x=a\\tan t$\n- 含 $\\sqrt{x^2-a^2}$：令 $x=a\\sec t$",
    "easy_mistakes": "1. 换元后必须回代原变量\n2. 三角换元时注意变量的取值范围\n3. 凑微分法要注意系数的调整"
  },
  {
    "id": "math_014",
    "subject": "高等数学",
    "title": "定积分的几何应用",
    "keywords": ["定积分", "面积", "体积", "旋转体", "几何应用"],
    "tags": ["高频考点", "计算题"],
    "content": "**平面图形面积：**\n$$S = \\int_a^b [f(x) - g(x)] dx \\quad (f(x) \\geq g(x))$$\n\n**旋转体体积：**\n- 绕 x 轴：$$V = \\pi \\int_a^b [f(x)]^2 dx$$\n- 绕 y 轴（柱壳法）：$$V = 2\\pi \\int_a^b x \\cdot f(x) dx$$\n\n**弧长：**\n$$L = \\int_a^b \\sqrt{1 + [f'(x)]^2} dx$$",
    "easy_mistakes": "1. 求面积时上函数减下函数，不要弄反\n2. 旋转体体积公式中是 $[f(x)]^2$ 不是 $f(x^2)$\n3. 注意积分上下限的确定"
  },
  {
    "id": "math_015",
    "subject": "高等数学",
    "title": "多元函数偏导数",
    "keywords": ["偏导数", "多元函数", "全微分", "偏导"],
    "tags": ["高频考点"],
    "content": "**偏导数定义：**\n$$\\dfrac{\\partial z}{\\partial x} = \\lim_{\\Delta x \\to 0} \\dfrac{f(x+\\Delta x, y) - f(x,y)}{\\Delta x}$$\n\n**求法：** 对 $x$ 求偏导时，将 $y$ 视为常数。\n\n**二阶偏导数：**\n$$\\dfrac{\\partial^2 z}{\\partial x \\partial y} = \\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\partial z}{\\partial x}\\right)$$\n\n**全微分：**\n$$dz = \\dfrac{\\partial z}{\\partial x}dx + \\dfrac{\\partial z}{\\partial y}dy$$\n\n**混合偏导数连续时相等：** $\\dfrac{\\partial^2 z}{\\partial x \\partial y} = \\dfrac{\\partial^2 z}{\\partial y \\partial x}$",
    "easy_mistakes": "1. 偏导数只对一个变量求导，其他变量视为常数\n2. 混合偏导数相等的条件是连续\n3. 全微分公式不要遗漏 dx 或 dy"
  },
  {
    "id": "math_016",
    "subject": "高等数学",
    "title": "二重积分计算",
    "keywords": ["二重积分", "重积分", "累次积分", "极坐标"],
    "tags": ["高频考点", "计算题"],
    "content": "**直角坐标：**\n$$\\iint_D f(x,y) dxdy = \\int_a^b dx \\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x,y) dy$$\n\n**极坐标：**\n$$\\iint_D f(x,y) dxdy = \\iint_D f(r\\cos\\theta, r\\sin\\theta) r \\, dr \\, d\\theta$$\n\n**交换积分次序：** 先画出积分区域 D，再重新确定上下限。\n\n**注意：** 极坐标下面积元素为 $r \\, dr \\, d\\theta$，不要遗漏 $r$。",
    "easy_mistakes": "1. 极坐标下不要忘记乘 $r$\n2. 交换积分次序时必须重新画区域确定上下限\n3. 直角坐标下 X 型和 Y 型区域的积分顺序不同"
  },
  {
    "id": "math_017",
    "subject": "高等数学",
    "title": "常数项级数审敛法",
    "keywords": ["级数", "收敛", "发散", "审敛法", "比值法", "比较法"],
    "tags": ["高频考点"],
    "content": "**级数收敛的必要条件：** 若 $\\sum a_n$ 收敛，则 $\\lim_{n \\to \\infty} a_n = 0$（逆命题不成立）\n\n**正项级数审敛法：**\n1. **比较审敛法：** 若 $a_n \\leq b_n$，$\\sum b_n$ 收敛则 $\\sum a_n$ 收敛\n2. **比值审敛法（达朗贝尔）：** $\\lim_{n \\to \\infty} \\dfrac{a_{n+1}}{a_n} = \\rho$\n   - $\\rho < 1$：收敛\n   - $\\rho > 1$：发散\n   - $\\rho = 1$：不确定\n3. **p 级数：** $\\sum \\dfrac{1}{n^p}$，$p>1$ 收敛，$p \\leq 1$ 发散\n\n**几何级数：** $\\sum q^n$，$|q|<1$ 收敛，$|q| \\geq 1$ 发散",
    "easy_mistakes": "1. $\\lim a_n = 0$ 不能推出级数收敛（如调和级数 $\\sum 1/n$ 发散）\n2. 比值法 $\\rho=1$ 时需要用其他方法判断\n3. 比较审敛法的方向：大的收敛则小的收敛"
  },
  {
    "id": "math_018",
    "subject": "高等数学",
    "title": "牛顿-莱布尼茨公式",
    "keywords": ["牛顿莱布尼茨", "定积分", "微积分基本定理"],
    "tags": ["必背公式", "基础"],
    "content": "**牛顿-莱布尼茨公式（微积分基本定理）：**\n$$\\int_a^b f(x) dx = F(b) - F(a)$$\n其中 $F(x)$ 是 $f(x)$ 的一个原函数。\n\n**变上限积分求导：**\n$$\\dfrac{d}{dx} \\int_a^x f(t) dt = f(x)$$\n\n**推广形式：**\n$$\\dfrac{d}{dx} \\int_{\\varphi(x)}^{\\psi(x)} f(t) dt = f(\\psi(x))\\psi'(x) - f(\\varphi(x))\\varphi'(x)$$",
    "easy_mistakes": "1. 牛顿-莱布尼茨公式要求 $f(x)$ 在 $[a,b]$ 上连续\n2. 变上限积分求导时积分变量用 $t$ 不用 $x$\n3. 注意变下限积分的符号：$\\int_x^a f(t)dt = -\\int_a^x f(t)dt$"
  },
  {
    "id": "c_015",
    "subject": "C语言程序设计",
    "title": "循环结构（for/while/do-while）",
    "keywords": ["循环", "for", "while", "do-while", "break", "continue"],
    "tags": ["高频考点", "基础"],
    "content": "**for 循环：**\n```c\nfor(初始化; 条件; 更新) { 循环体; }\n```\n\n**while 循环：** 先判断后执行\n```c\nwhile(条件) { 循环体; }\n```\n\n**do-while 循环：** 先执行后判断（至少执行一次）\n```c\ndo { 循环体; } while(条件);\n```\n\n**break：** 跳出当前循环\n**continue：** 跳过本次循环体剩余部分，进入下一次循环判断",
    "easy_mistakes": "1. do-while 至少执行一次，while 可能一次都不执行\n2. for(;;) 是死循环\n3. continue 不跳出循环，只跳过本次\n4. for 循环结束后，循环变量的值是最后一次条件不满足时的值"
  },
  {
    "id": "c_016",
    "subject": "C语言程序设计",
    "title": "递归",
    "keywords": ["递归", "递归函数", "阶乘", "斐波那契", "递归终止"],
    "tags": ["高频考点", "难点"],
    "content": "**递归三要素：**\n1. 递归终止条件（边界条件）\n2. 递归公式（大问题分解为小问题）\n3. 向终止条件靠近\n\n**经典例子 - 阶乘：**\n```c\nint factorial(int n) {\n    if(n <= 1) return 1;    // 终止条件\n    return n * factorial(n-1);  // 递归调用\n}\n```\n\n**斐波那契数列：**\n```c\nint fib(int n) {\n    if(n <= 2) return 1;\n    return fib(n-1) + fib(n-2);\n}\n```\n\n**递归过程：** 函数调用自身 → 参数变小 → 到达终止条件 → 逐层返回",
    "easy_mistakes": "1. 忘记写终止条件会导致栈溢出\n2. 递归参数没有向终止条件靠近\n3. 递归效率低（如斐波那契有大量重复计算），可用数组缓存优化"
  },
  {
    "id": "c_017",
    "subject": "C语言程序设计",
    "title": "位运算",
    "keywords": ["位运算", "与", "或", "异或", "取反", "移位", "按位"],
    "tags": ["高频考点"],
    "content": "**六种位运算符：**\n- `&` 按位与：两位都1则为1\n- `|` 按位或：有一位1则为1\n- `^` 按位异或：两位不同为1\n- `~` 按位取反：0变1，1变0\n- `<<` 左移：高位丢弃，低位补0（相当于乘2）\n- `>>` 右移：低位丢弃，高位补符号位（相当于除2）\n\n**常见应用：**\n- 清零特定位：`a & ~mask`\n- 设置特定位为1：`a | mask`\n- 翻转特定位：`a ^ mask`\n- 判断奇偶：`a & 1`（结果为0是偶数）\n- 交换两数：`a ^= b; b ^= a; a ^= b;`",
    "easy_mistakes": "1. 位运算符和逻辑运算符不同（& vs &&，| vs ||）\n2. 异或运算满足交换律和结合律\n3. 一个数异或自己结果为0：`a ^ a = 0`"
  },
  {
    "id": "c_018",
    "subject": "C语言程序设计",
    "title": "动态内存分配（malloc/free）",
    "keywords": ["malloc", "free", "动态内存", "堆", "calloc", "realloc"],
    "tags": ["高频考点", "难点"],
    "content": "**malloc：** 分配指定字节数的内存\n```c\nint *p = (int*)malloc(n * sizeof(int));\nif(p == NULL) { /* 分配失败处理 */ }\n```\n\n**calloc：** 分配并初始化为0\n```c\nint *p = (int*)calloc(n, sizeof(int));\n```\n\n**realloc：** 重新分配内存大小\n```c\np = (int*)realloc(p, new_n * sizeof(int));\n```\n\n**free：** 释放内存\n```c\nfree(p);\np = NULL;  // 避免野指针\n```\n\n内存分配在**堆区**，函数结束后不会自动释放，必须手动 free。",
    "easy_mistakes": "1. malloc 返回的内存未初始化，内容不确定\n2. free 后要将指针置 NULL，避免野指针\n3. 不能重复 free 同一块内存\n4. 内存泄漏：分配了不 free"
  },
  {
    "id": "c_019",
    "subject": "C语言程序设计",
    "title": "排序算法（冒泡与选择）",
    "keywords": ["排序", "冒泡排序", "选择排序", "算法"],
    "tags": ["高频考点", "编程题"],
    "content": "**冒泡排序：** 相邻元素两两比较，每轮把最大值冒到最后\n```c\nfor(i = 0; i < n-1; i++)\n    for(j = 0; j < n-1-i; j++)\n        if(a[j] > a[j+1]) {\n            int t = a[j];\n            a[j] = a[j+1];\n            a[j+1] = t;\n        }\n```\n时间复杂度：$O(n^2)$\n\n**选择排序：** 每轮选出最小值放到前面\n```c\nfor(i = 0; i < n-1; i++) {\n    int min = i;\n    for(j = i+1; j < n; j++)\n        if(a[j] < a[min]) min = j;\n    if(min != i) { int t=a[i]; a[i]=a[min]; a[min]=t; }\n}\n```\n时间复杂度：$O(n^2)$",
    "easy_mistakes": "1. 冒泡排序内层循环边界是 n-1-i 不是 n-1\n2. 选择排序是找最小值的下标再交换，不是每次都交换\n3. 两层循环都是从0开始，注意边界"
  },
  {
    "id": "c_020",
    "subject": "C语言程序设计",
    "title": "共用体（union）与枚举（enum）",
    "keywords": ["union", "共用体", "enum", "枚举", "typedef"],
    "tags": ["中频考点"],
    "content": "**共用体 union：** 所有成员共享同一段内存\n```c\nunion Data {\n    int i;\n    float f;\n    char str[20];\n};\n```\n- 共用体大小 = 最大成员的大小\n- 同一时刻只能存储一个成员的值\n- 修改一个成员会影响其他成员\n\n**枚举 enum：**\n```c\nenum Color { RED, GREEN, BLUE };\n// RED=0, GREEN=1, BLUE=2（默认从0开始）\nenum Week { MON=1, TUE, WED, THU, FRI, SAT, SUN };\n// MON=1, TUE=2, ...（可指定起始值）\n```\n\n**typedef：** 给类型起别名\n```c\ntypedef unsigned int uint;\ntypedef struct { int x; int y; } Point;\n```",
    "easy_mistakes": "1. union 是共享内存，不是各自独立\n2. enum 的值是整数，默认从0开始递增\n3. typedef 末尾有分号"
  },
  {
    "id": "c_021",
    "subject": "C语言程序设计",
    "title": "条件编译",
    "keywords": ["条件编译", "#ifdef", "#ifndef", "#endif", "#define", "宏"],
    "tags": ["中频考点"],
    "content": "**条件编译指令：**\n```c\n#ifdef DEBUG\n    printf(\"调试信息\");\n#endif\n\n#ifndef HEADER_H\n#define HEADER_H\n// 头文件内容\n#endif\n\n#if VERSION >= 2\n    // 新版本代码\n#else\n    // 旧版本代码\n#endif\n```\n\n**用途：**\n1. 防止头文件重复包含（#ifndef 头文件保护）\n2. 跨平台编译\n3. 调试开关\n4. 版本控制",
    "easy_mistakes": "1. #ifdef 判断的是宏是否被定义，不是值是否为真\n2. 头文件保护用的宏名通常用文件名大写加下划线\n3. #endif 后面不需要加条件"
  },
  {
    "id": "eng_006",
    "subject": "公共英语",
    "title": "名词性从句",
    "keywords": ["名词性从句", "主语从句", "宾语从句", "表语从句", "同位语从句", "that", "whether"],
    "tags": ["高频考点"],
    "content": "**名词性从句类型：**\n1. **主语从句：** *That he passed the exam* is true.\n2. **宾语从句：** I know *that he is honest*.\n3. **表语从句：** The truth is *that we need more time*.\n4. **同位语从句：** The fact *that he lied* shocked us.\n\n**引导词：**\n- **that：** 在宾语从句中可省略，其他从句不省略\n- **whether/if：** 是否（whether 可用于所有从句，if 不能用于主语从句）\n- **连接代词：** what, who, whom, whose, which\n- **连接副词：** when, where, why, how\n\n**语序：** 名词性从句用**陈述语序**，不是疑问语序。",
    "easy_mistakes": "1. 名词性从句必须用陈述语序\n2. if 不能引导主语从句和表语从句\n3. that 在非宾语从句中不可省略\n4. whether 后可接 or not，if 通常不行"
  },
  {
    "id": "eng_007",
    "subject": "公共英语",
    "title": "状语从句",
    "keywords": ["状语从句", "时间状语", "原因状语", "条件状语", "让步状语", "目的状语"],
    "tags": ["高频考点"],
    "content": "**常见状语从句引导词：**\n\n| 类型 | 引导词 |\n|------|--------|\n| 时间 | when, while, as, before, after, since, until, once |\n| 原因 | because, since, as, for, now that |\n| 条件 | if, unless (=if not), as long as, in case |\n| 让步 | though, although, even though, even if, no matter |\n| 目的 | so that, in order that |\n| 结果 | so...that, such...that |\n| 比较 | than, as...as |\n\n**重点：**\n- **主将从现：** 时间/条件状语从句中，主句用将来时，从句用现在时表将来\n  - *If it rains tomorrow, I will stay home.*\n- **though/although 不与 but 连用**，但可与 yet 连用",
    "easy_mistakes": "1. 时间和条件状语从句用一般现在时表将来（主将从现）\n2. although/though 后面不能加 but\n3. until 用于肯定句表示\"直到...为止\"，用于否定句表示\"直到...才\""
  },
  {
    "id": "eng_008",
    "subject": "公共英语",
    "title": "主谓一致",
    "keywords": ["主谓一致", "主语", "谓语", "单复数", "就近原则", "就远原则"],
    "tags": ["高频考点", "易错"],
    "content": "**三大原则：**\n\n1. **语法一致：** 主语单数→谓语单数，主语复数→谓语复数\n2. **意义一致：** 集合名词看作整体用单数，看作个体用复数\n   - *The family is big.* / *The family are having dinner.*\n3. **就近原则：** 由 or, either...or, neither...nor, not only...but also 连接时\n   - *Neither he nor I am wrong.*\n\n**特殊用法：**\n- **each/every + 单数名词** → 谓语用单数\n- **both + 复数名词** → 谓语用复数\n- **The number of + 复数名词** → 谓语用单数\n- **A number of + 复数名词** → 谓语用复数\n- **Mathematics/Physics/News** → 谓语用单数（形复意单）",
    "easy_mistakes": "1. The number of（单数）vs A number of（复数）\n2. 就近原则只适用于 or/neither...nor/either...or 等\n3. 学科名词（-ics 结尾）通常用单数"
  },
  {
    "id": "eng_009",
    "subject": "公共英语",
    "title": "情态动词",
    "keywords": ["情态动词", "can", "must", "should", "may", "表推测", "完成时"],
    "tags": ["高频考点"],
    "content": "**情态动词表推测：**\n\n| 程度 | 肯定 | 否定 | 疑问 |\n|------|------|------|------|\n| 强推测 | must（一定） | can't（不可能） | can/could |\n| 弱推测 | may/might（可能） | may not（可能不） | — |\n\n**情态动词 + have done：**\n- **must have done：** 过去一定做了（肯定推测）\n  - *He must have left already.*\n- **should have done：** 本应该做（但没做，表责备）\n  - *You should have told me.*\n- **could have done：** 本可以做（但没做）\n  - *I could have helped you.*\n- **needn't have done：** 本不必做（但做了）\n  - *You needn't have worried.*",
    "easy_mistakes": "1. must 表推测的否定形式是 can't 不是 mustn't\n2. should have done 含责备意味，表示本该做但没做\n3. must have done 用于对过去事情的肯定推测"
  },
  {
    "id": "eng_010",
    "subject": "公共英语",
    "title": "强调句与反义疑问句",
    "keywords": ["强调句", "It is...that", "反义疑问句", "附加疑问句"],
    "tags": ["中频考点"],
    "content": "**强调句结构：**\n$$\\text{It is/was} + \\text{被强调部分} + \\text{that/who} + \\text{其余部分}$$\n- 强调人：用 who 或 that\n- 强调物/时间/地点等：用 that\n\n例：*It was **tomorrow** that he would leave.*\n\n**判断方法：** 去掉 It is/was...that 后，句子仍然完整则 是强调句。\n\n**反义疑问句：**\n- 前肯后否：*He is a student, isn't he?*\n- 前否后肯：*You don't like tea, do you?*\n\n**特殊情况：**\n- Let's... → *shall we?*\n- Let us... → *will you?*\n- I am... → *aren't I?*\n- 含 rarely/seldom/hardly 等否定词 → 用肯定\n- 含 think/believe + 宾语从句 → 反问部分跟主句的主语和动词",
    "easy_mistakes": "1. 强调句去掉 It is...that 后句子仍完整\n2. 反义疑问句遵循\"前肯后否，前否后肯\"\n3. I am 的反义疑问是 aren't I 不是 am not I"
  },
  {
    "id": "cs_006",
    "subject": "计算机基础",
    "title": "数据结构基础（栈、队列、链表）",
    "keywords": ["数据结构", "栈", "队列", "链表", "后进先出", "先进先出"],
    "tags": ["高频考点", "必会"],
    "content": "**栈（Stack）：** 后进先出（LIFO）\n- 入栈 push，出栈 pop\n- 应用：函数调用、括号匹配、表达式求值\n\n**队列（Queue）：** 先进先出（FIFO）\n- 入队 enqueue，出队 dequeue\n- 应用：任务调度、广度优先搜索\n\n**链表（Linked List）：**\n- 单链表：每个节点包含数据和指向下一个节点的指针\n- 双链表：每个节点有前驱和后继指针\n- 与数组对比：插入删除快（$O(1)$），随机访问慢（$O(n)$）\n\n**树（Tree）：**\n- 二叉树：每个节点最多两个子节点\n- 满二叉树：所有分支节点都有两个子节点\n- 完全二叉树：除最后一层外全满，最后一层从左到右连续",
    "easy_mistakes": "1. 栈是 LIFO 不是 FIFO\n2. 队列是 FIFO 不是 LIFO\n3. 链表不支持随机访问，访问第i个元素需要从头遍历"
  },
  {
    "id": "cs_007",
    "subject": "计算机基础",
    "title": "原码、反码与补码",
    "keywords": ["原码", "反码", "补码", "有符号数", "负数表示"],
    "tags": ["高频考点", "必会"],
    "content": "**以8位为例，表示 -5：**\n\n**原码：** 最高位为符号位（0正1负）\n- $-5$ 的原码：$10000101$\n\n**反码：** 正数同原码；负数符号位不变，其余取反\n- $-5$ 的反码：$11111010$\n\n**补码：** 反码 + 1\n- $-5$ 的补码：$11111011$\n\n**关键规则：**\n- 正数：原码 = 反码 = 补码\n- 负数：反码 = 原码取反（符号位不变），补码 = 反码 + 1\n- 计算机中**用补码存储和运算**整数\n- 补码的好处：将减法转化为加法，0的表示唯一\n\n**范围（8位）：**\n- 原码：$-127 \\sim +127$\n- 补码：$-128 \\sim +127$（多表示一个 -128）",
    "easy_mistakes": "1. 正数的原码反码补码相同\n2. 负数求补码：取反后要 +1\n3. 补码的补码等于原码\n4. 8位补码范围是 -128~127，不是 -127~127"
  },
  {
    "id": "cs_008",
    "subject": "计算机基础",
    "title": "操作系统基础概念",
    "keywords": ["操作系统", "进程", "线程", "调度", "死锁", "内存管理"],
    "tags": ["高频考点"],
    "content": "**操作系统功能：**\n1. 进程管理（CPU调度）\n2. 内存管理（分配与回收）\n3. 文件管理\n4. 设备管理\n5. 提供用户接口\n\n**进程 vs 线程：**\n| | 进程 | 线程 |\n|--|------|------|\n| 资源 | 独立地址空间 | 共享进程资源 |\n| 开销 | 大 | 小 |\n| 通信 | 需要IPC机制 | 直接共享内存 |\n\n**进程三态：** 就绪 → 运行 → 阻塞\n\n**死锁四条件：** 互斥、占有等待、不可剥夺、循环等待\n\n**常见调度算法：**\n- FCFS（先来先服务）\n- SJF（短作业优先）\n- 时间片轮转\n- 优先级调度",
    "easy_mistakes": "1. 线程是进程内的执行单位，不是独立地址空间\n2. 死锁需要四个条件同时满足\n3. 进程的基本状态是就绪、运行、阻塞，不是创建和终止"
  },
  {
    "id": "cs_009",
    "subject": "计算机基础",
    "title": "数据库与SQL基础",
    "keywords": ["数据库", "SQL", "SELECT", "关系模型", "主键", "外键"],
    "tags": ["高频考点"],
    "content": "**关系数据库术语：**\n- **主键（Primary Key）：** 唯一标识一条记录，不能为NULL\n- **外键（Foreign Key）：** 引用另一个表的主键\n- **索引（Index）：** 提高查询速度\n\n**SQL 四类语句：**\n1. **DDL（数据定义）：** CREATE, ALTER, DROP\n2. **DML（数据操作）：** INSERT, UPDATE, DELETE\n3. **DQL（数据查询）：** SELECT\n4. **DCL（数据控制）：** GRANT, REVOKE\n\n**基本查询：**\n```sql\nSELECT 列名 FROM 表名\nWHERE 条件\nGROUP BY 列名\nHAVING 分组条件\nORDER BY 列名 ASC|DESC;\n```\n\n**WHERE vs HAVING：** WHERE 过滤行（分组前），HAVING 过滤分组（分组后）",
    "easy_mistakes": "1. WHERE 在分组前过滤，HAVING 在分组后过滤\n2. 主键不能为 NULL，外键可以为 NULL\n3. DELETE 删除数据但保留表结构，DROP 删除整个表"
  },
  {
    "id": "cs_010",
    "subject": "计算机基础",
    "title": "软件工程基础",
    "keywords": ["软件工程", "软件生命周期", "需求分析", "测试", "瀑布模型"],
    "tags": ["中频考点"],
    "content": "**软件生命周期：**\n1. 可行性研究 → 2. 需求分析 → 3. 概要设计 → 4. 详细设计 → 5. 编码 → 6. 测试 → 7. 维护\n\n**软件测试：**\n- **黑盒测试：** 不关心内部实现，只测输入输出（功能测试）\n- **白盒测试：** 关注内部逻辑结构（路径测试）\n- **单元测试 → 集成测试 → 系统测试 → 验收测试**\n\n**开发模型：**\n- **瀑布模型：** 线性顺序，文档驱动，需求明确时使用\n- **快速原型：** 先建原型再迭代\n- **螺旋模型：** 结合瀑布和原型，强调风险分析\n- **敏捷开发：** 迭代增量，快速响应变化\n\n**软件质量特性：** 功能性、可靠性、易用性、效率、可维护性、可移植性",
    "easy_mistakes": "1. 黑盒测试关注功能，白盒测试关注内部结构\n2. 瀑布模型的特点是线性顺序、文档驱动\n3. 测试的顺序是单元→集成→系统→验收"
  }
];

// ==================== 题库（19道） ====================
const QUESTION_BANK = [
  {
    "id": "q_math_001",
    "subject": "高等数学",
    "type": "选择题",
    "question": "$\\lim_{x \\to 0} \\dfrac{\\sin 3x}{x}$ 的值为？",
    "options": ["A. $0$", "B. $1$", "C. $3$", "D. $\\infty$"],
    "answer": "C",
    "analysis": "利用第一重要极限：$\\lim_{x \\to 0} \\dfrac{\\sin kx}{x} = k$\n\n$$\\text{原式} = \\lim_{x \\to 0} \\dfrac{\\sin 3x}{3x} \\times 3 = 1 \\times 3 = 3$$"
  },
  {
    "id": "q_math_002",
    "subject": "高等数学",
    "type": "选择题",
    "question": "$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{2}{x}\\right)^x$ 的值为？",
    "options": ["A. $e$", "B. $e^2$", "C. $1$", "D. $\\infty$"],
    "answer": "B",
    "analysis": "利用第二重要极限：$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = e$\n\n令 $t = \\dfrac{x}{2}$，则 $x = 2t$，$x \\to \\infty$ 时 $t \\to \\infty$：\n\n$$\\text{原式} = \\lim_{t \\to \\infty} \\left(1 + \\dfrac{1}{t}\\right)^{2t} = \\left[\\lim_{t \\to \\infty} \\left(1 + \\dfrac{1}{t}\\right)^t\\right]^2 = e^2$$"
  },
  {
    "id": "q_math_003",
    "subject": "高等数学",
    "type": "计算题",
    "question": "求函数 $f(x) = x^3 - 6x^2 + 9x + 1$ 的极值。",
    "answer": "极大值 $f(1) = 5$，极小值 $f(3) = 1$",
    "analysis": "**1. 求导：**\n$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$\n\n**2. 令 $f'(x) = 0$ 得驻点：** $x = 1$, $x = 3$\n\n**3. 列表判别：**\n- $x < 1$ 时 $f'(x) > 0$（增）\n- $1 < x < 3$ 时 $f'(x) < 0$（减）\n- $x > 3$ 时 $f'(x) > 0$（增）\n\n**4. 结论：**\n- $x = 1$ 处由增变减 $\\Rightarrow$ 极大值，$f(1) = 1 - 6 + 9 + 1 = 5$\n- $x = 3$ 处由减变增 $\\Rightarrow$ 极小值，$f(3) = 27 - 54 + 27 + 1 = 1$"
  },
  {
    "id": "q_math_004",
    "subject": "高等数学",
    "type": "计算题",
    "question": "求不定积分 $\\int x \\cdot \\cos x \\, dx$",
    "answer": "$x \\cdot \\sin x + \\cos x + C$",
    "analysis": "用分部积分法：$\\int u \\, dv = uv - \\int v \\, du$\n\n选 $u = x$（幂函数），$dv = \\cos x \\, dx$\n\n则 $du = dx$，$v = \\sin x$\n\n$$\\text{原式} = x \\cdot \\sin x - \\int \\sin x \\, dx = x \\cdot \\sin x - (-\\cos x) + C = x \\cdot \\sin x + \\cos x + C$$\n\n口诀：反对幂指三，$x$ 是幂函数选作 $u$。"
  },
  {
    "id": "q_math_005",
    "subject": "高等数学",
    "type": "选择题",
    "question": "函数 $f(x) = |x|$ 在 $x = 0$ 处",
    "options": ["A. 不连续", "B. 连续且可导", "C. 连续但不可导", "D. 可导但不连续"],
    "answer": "C",
    "analysis": "**1. 连续性：**\n$$\\lim_{x \\to 0} |x| = 0 = f(0)$$\n所以连续。\n\n**2. 可导性：**\n- 左导数：$\\lim_{x \\to 0^-} \\dfrac{|x| - 0}{x} = \\lim_{x \\to 0^-} \\dfrac{-x}{x} = -1$\n- 右导数：$\\lim_{x \\to 0^+} \\dfrac{|x| - 0}{x} = \\lim_{x \\to 0^+} \\dfrac{x}{x} = 1$\n\n左右导数不相等，所以不可导。\n\n**3. 结论：** 连续但不可导（经典例子）"
  },
  {
    "id": "q_c_001",
    "subject": "C语言程序设计",
    "type": "程序阅读题",
    "question": "以下程序的输出结果是？\n\n```c\nint x = 5, y = 10;\nif (x > 0 && y++ > 5) {\n    printf(\"%d %d\", x, y);\n} else {\n    printf(\"%d %d\", x, y);\n}\n```",
    "answer": "5 11",
    "analysis": "1. `x = 5`, `y = 10`\n2. 判断 `x > 0 && y++ > 5`：\n   - `x > 0` 为真（$5 > 0$），继续判断右侧\n   - `y++ > 5`：先使用 $y = 10$ 判断 $10 > 5$ 为真，然后 $y$ 变为 $11$\n   - 整个条件为真，执行 if 分支\n3. 输出 `x = 5, y = 11`\n\n注意：`&&` 不会短路（因为左边为真），所以 `y++` 会执行。"
  },
  {
    "id": "q_c_002",
    "subject": "C语言程序设计",
    "type": "程序阅读题",
    "question": "以下程序的输出结果是？\n\n```c\nint a = 1;\nswitch(a) {\n    case 1: printf(\"A\");\n    case 2: printf(\"B\");\n    case 3: printf(\"C\"); break;\n    default: printf(\"D\");\n}\n```",
    "answer": "ABC",
    "analysis": "1. `a = 1`，匹配 `case 1`\n2. 执行 `printf(\"A\")` 输出 A\n3. 没有 `break`，继续执行 `case 2`，输出 B\n4. 仍然没有 `break`，继续执行 `case 3`，输出 C\n5. `case 3` 后有 `break`，跳出 switch\n6. 最终输出：ABC\n\n这是 switch 语句 case 穿透的经典例子。"
  },
  {
    "id": "q_c_003",
    "subject": "C语言程序设计",
    "type": "程序阅读题",
    "question": "以下程序的输出结果是？\n\n```c\nint fun(int x) {\n    static int s = 0;\n    s += x;\n    return s;\n}\nint main() {\n    printf(\"%d \", fun(3));\n    printf(\"%d \", fun(5));\n    printf(\"%d\", fun(2));\n}\n```",
    "answer": "3 8 10",
    "analysis": "`static` 变量只初始化一次，后续调用保留上次值：\n1. 第一次调用 `fun(3)`：$s = 0 + 3 = 3$，返回3\n2. 第二次调用 `fun(5)`：$s = 3 + 5 = 8$，返回8\n3. 第三次调用 `fun(2)`：$s = 8 + 2 = 10$，返回10\n\n注意：`static` 变量 `s` 只在第一次调用时初始化为0，之后保留上次的值。"
  },
  {
    "id": "q_c_004",
    "subject": "C语言程序设计",
    "type": "编程题",
    "question": "编写程序：输入10个整数，用冒泡排序按从小到大排序后输出。",
    "answer": "冒泡排序",
    "analysis": "冒泡排序核心思想：相邻元素比较交换，每轮把最大值冒到最后。",
    "code": "#include <stdio.h>\nint main() {\n    int a[10], i, j, temp;\n    // 输入10个整数\n    for (i = 0; i < 10; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    // 冒泡排序\n    for (i = 0; i < 9; i++) {         // 外层控制轮数\n        for (j = 0; j < 9 - i; j++) { // 内层控制比较\n            if (a[j] > a[j+1]) {      // 相邻比较\n                temp = a[j];          // 交换\n                a[j] = a[j+1];\n                a[j+1] = temp;\n            }\n        }\n    }\n    // 输出结果\n    for (i = 0; i < 10; i++) {\n        printf(\"%d \", a[i]);\n    }\n    return 0;\n}"
  },
  {
    "id": "q_c_005",
    "subject": "C语言程序设计",
    "type": "编程题",
    "question": "编写程序：用函数实现两个变量值的交换（用指针）。",
    "answer": "使用指针参数实现交换",
    "analysis": "值传递无法改变实参，必须用地址传递（指针）。",
    "code": "#include <stdio.h>\n// 交换函数（地址传递）\nvoid swap(int *a, int *b) {\n    int temp;\n    temp = *a;\n    *a = *b;\n    *b = temp;\n}\nint main() {\n    int x = 3, y = 5;\n    printf(\"交换前：x=%d, y=%d\\n\", x, y);\n    swap(&x, &y);  // 传地址\n    printf(\"交换后：x=%d, y=%d\\n\", x, y);\n    return 0;\n}"
  },
  {
    "id": "q_c_006",
    "subject": "C语言程序设计",
    "type": "选择题",
    "question": "以下程序的输出结果是？\n\n```c\nchar s[] = \"hello\";\nprintf(\"%d %d\", strlen(s), sizeof(s));\n```",
    "options": ["A. 5 5", "B. 5 6", "C. 6 6", "D. 6 5"],
    "answer": "B",
    "analysis": "1. `strlen(s)` 求字符串长度，不含 `\\0`，所以是5\n2. `sizeof(s)` 求数组占用的字节数，包含 `\\0`，所以是6\n3. `\"hello\"` 有5个字符，加上自动添加的 `\\0` 共占6字节\n\n`strlen` 和 `sizeof` 的区别：`strlen` 不算 `\\0`，`sizeof` 算 `\\0`。"
  },
  {
    "id": "q_eng_001",
    "subject": "公共英语",
    "type": "选择题",
    "question": "It is no use ______ about it. You'd better accept the fact.",
    "options": ["A. to complain", "B. complaining", "C. complain", "D. complained"],
    "answer": "B",
    "analysis": "考查固定句型：**It is no use doing sth**（做某事是没用的）。\n\n这个句型要求用动名词（doing）形式。\n\n句意：抱怨这件事是没用的，你最好接受这个事实。"
  },
  {
    "id": "q_eng_002",
    "subject": "公共英语",
    "type": "选择题",
    "question": "______ he had enough money, he refused to buy that expensive car.",
    "options": ["A. Although", "B. Because", "C. Since", "D. If"],
    "answer": "A",
    "analysis": "考查连词辨析：\n- **Although**：虽然（引导让步状语从句）\n- **Because**：因为（引导原因状语从句）\n- **Since**：既然\n- **If**：如果\n\n句意：虽然他有足够的钱，但他拒绝买那辆昂贵的车。前后是让步关系，用 Although。"
  },
  {
    "id": "q_eng_003",
    "subject": "公共英语",
    "type": "选择题",
    "question": "If I ______ you, I would not do that.",
    "options": ["A. am", "B. was", "C. were", "D. be"],
    "answer": "C",
    "analysis": "考查虚拟语气。\n\n与现在相反的虚拟条件句：If + 主语 + 过去式（be动词统一用 were），主句用 would + 动词原形。\n\n句意：如果我是你，我不会那样做。\n\n注意：虚拟语气中 be 动词统一用 were，不用 was。"
  },
  {
    "id": "q_eng_004",
    "subject": "公共英语",
    "type": "选择题",
    "question": "Never ______ such a beautiful sunset before.",
    "options": ["A. I have seen", "B. have I seen", "C. I saw", "D. did I see"],
    "answer": "B",
    "analysis": "考查倒装句。\n\n否定词 **Never** 放句首，引起部分倒装（助动词 have 提到主语 I 前面）。\n\n- 正常语序：I have never seen...\n- 倒装语序：Never have I seen...\n\n注意：用现在完成时 have seen，因为 before 暗示到现在为止的经验。"
  },
  {
    "id": "q_cs_001",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "计算机系统中，用于表示数据的最小单位是？",
    "options": ["A. 字节", "B. 位", "C. 字", "D. 兆字节"],
    "answer": "B",
    "analysis": "位（bit）是计算机中表示数据的最小单位，由0和1组成。\n\n字节（Byte）是基本存储单位，$1\\text{Byte} = 8\\text{bit}$。\n\n$1\\text{KB} = 1024\\text{B}$，$1\\text{MB} = 1024\\text{KB}$。"
  },
  {
    "id": "q_cs_002",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "十六进制数 1A 等于十进制数？",
    "options": ["A. 10", "B. 24", "C. 26", "D. 30"],
    "answer": "C",
    "analysis": "十六进制转十进制：按权展开求和\n\n$$1A = 1 \\times 16^1 + A \\times 16^0 = 1 \\times 16 + 10 \\times 1 = 16 + 10 = 26$$\n\n注意：A 在十六进制中表示10。"
  },
  {
    "id": "q_cs_003",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "OSI参考模型中，哪一层负责数据的物理传输？",
    "options": ["A. 应用层", "B. 传输层", "C. 网络层", "D. 物理层"],
    "answer": "D",
    "analysis": "OSI七层模型从下到上：\n1. 物理层 — 传输原始比特流\n2. 数据链路层 — 帧传输\n3. 网络层 — IP协议，路由\n4. 传输层 — TCP/UDP\n5. 会话层\n6. 表示层\n7. 应用层\n\n物理层是最低层，负责在物理介质上传输原始比特流。"
  },
  {
    "id": "q_cs_004",
    "subject": "计算机基础",
    "type": "选择题",
    "question": "IPv4地址由多少位二进制数组成？",
    "options": ["A. 16位", "B. 32位", "C. 64位", "D. 128位"],
    "answer": "B",
    "analysis": "IPv4地址由32位二进制数组成，通常表示为4个十进制数（每段0-255），如 192.168.1.1。\n\nIPv6地址由128位组成。\n\n注意区分 IPv4 和 IPv6 的位数。"
  }
];
