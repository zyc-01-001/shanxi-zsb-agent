/**
 * 山西专升本计算机大类 - 游戏化学习模块 v1.0
 * 四种玩法：闯关大冒险、考点消消乐、知识抢答、记忆背诵
 * 所有题目100%贴合山西专升本考纲
 */

// ==================== 游戏触发与退出 ====================
const GAME_TRIGGERS = ["开始闯关", "来玩游戏", "答题小游戏", "不想学习", "有点累", "玩一会", "闯关模式", "开始游戏", "玩游戏"];
const GAME_EXIT_CMDS = ["退出游戏", "结束游戏", "退出闯关", "不玩了"];

// ==================== 游戏数据 ====================
const GAME_DATA = {
  // ========== 玩法1: 专升本闯关大冒险 ==========
  adventure: [
    {
      level: 1,
      subject: "计算机基础",
      intro: "🖥️ **第一关：计算机基础**\n\n从最基本的计算机知识开始热身！\n共5道题，答对得⭐，加油！",
      questions: [
        {
          difficulty: "基础题",
          type: "选择题",
          question: "计算机中表示数据的最小单位是？",
          options: ["A. 字节(Byte)", "B. 位(bit)", "C. 字(Word)", "D. KB"],
          answer: "B",
          analysis: "**位(bit)** 是计算机中表示数据的最小单位，只有0和1两个状态。\n\n字节(Byte)是基本存储单位，$1\\text{Byte} = 8\\text{bit}$。\n\n$1\\text{KB} = 1024\\text{B}$，$1\\text{MB} = 1024\\text{KB}$。",
          point: "计算机基本单位"
        },
        {
          difficulty: "基础题",
          type: "选择题",
          question: "冯·诺依曼体系结构的核心思想是？",
          options: ["A. 虚拟存储", "B. 存储程序", "C. 并行处理", "D. 分布式计算"],
          answer: "B",
          analysis: "**存储程序** 是冯·诺依曼体系结构的核心思想。\n\n程序和数据预先存入存储器，计算机按存储器中的指令自动执行。\n\n世界第一台电子计算机：**ENIAC**（1946年），但不是存储程序的。首台存储程序计算机：**EDVAC**。",
          point: "计算机发展史"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "二进制数 $1011$ 转换为十进制数是？",
          options: ["A. $9$", "B. $10$", "C. $11$", "D. $13$"],
          answer: "C",
          analysis: "二进制转十进制：按权展开求和\n\n$$1011 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 8 + 0 + 2 + 1 = 11$$\n\n**易错点：** 权值从右到左依次是 $2^0, 2^1, 2^2, 2^3$，不要搞反。",
          point: "进制转换"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "以下哪个IP地址属于C类地址？",
          options: ["A. 10.0.0.1", "B. 172.16.5.1", "C. 192.168.1.1", "D. 127.0.0.1"],
          answer: "C",
          analysis: "IP地址分类：\n- **A类**：$1.0.0.0 \\sim 126.255.255.255$\n- **B类**：$128.0.0.0 \\sim 191.255.255.255$\n- **C类**：$192.0.0.0 \\sim 223.255.255.255$\n\n**192.168.1.1** 在C类范围内。\n\n**易错点：** $127.x.x.x$ 是回环地址，不属于A/B/C任何一类。",
          point: "IP地址分类"
        },
        {
          difficulty: "真题改编题",
          type: "选择题",
          question: "在OSI七层模型中，TCP协议工作在哪一层？",
          options: ["A. 网络层", "B. 传输层", "C. 应用层", "D. 数据链路层"],
          answer: "B",
          analysis: "**TCP** 是传输层协议，提供可靠的端到端传输。\n\n**易混淆：**\n- IP 是**网络层**协议\n- HTTP 是**应用层**协议\n- TCP/UDP 是**传输层**协议\n\n口诀：**\"传输层有TCP，网络层有IP\"**",
          point: "OSI七层模型"
        }
      ]
    },
    {
      level: 2,
      subject: "C语言程序设计",
      intro: "💻 **第二关：C语言程序设计**\n\n进入编程世界！注意易错点哦！\n共5道题，答对得⭐，加油！",
      questions: [
        {
          difficulty: "基础题",
          type: "选择题",
          question: "在C语言中，`char`类型占用的字节数是？",
          options: ["A. 1字节", "B. 2字节", "C. 4字节", "D. 8字节"],
          answer: "A",
          analysis: "`char`（字符型）占 **1字节**。\n\n常见数据类型字节数：\n- `char`：1字节\n- `short`：2字节\n- `int`：4字节\n- `float`：4字节\n- `double`：8字节\n\n**易错点：** `char`是1字节不是2字节！",
          point: "数据类型字节数"
        },
        {
          difficulty: "基础题",
          type: "选择题",
          question: "以下哪个运算符用于判断两个值是否相等？",
          options: ["A. =", "B. ==", "C. ===", "D. !="],
          answer: "B",
          analysis: "**`==`** 是关系运算符，用于判断相等。\n\n**`=`** 是赋值运算符，不是比较！\n\n**易错点：** C语言中没有 `===`（那是JavaScript的语法）。`!=` 是不等于。",
          point: "运算符"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "以下程序的输出结果是？\n\n```c\nint a = 2;\nswitch(a) {\n    case 1: printf(\"A\"); break;\n    case 2: printf(\"B\");\n    case 3: printf(\"C\"); break;\n    default: printf(\"D\");\n}\n```",
          options: ["A. B", "B. BC", "C. BCD", "D. ABC"],
          answer: "B",
          analysis: "1. `a = 2`，匹配 `case 2`\n2. 输出 `B`\n3. **没有 `break`**，继续执行 `case 3`，输出 `C`\n4. `case 3` 后有 `break`，跳出 switch\n5. 最终输出：**BC**\n\n这就是 **switch穿透**！忘加 `break` 是最常见的错误。",
          point: "switch穿透"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "以下程序的输出结果是？\n\n```c\nint a = 5, b;\nb = a++;\nprintf(\"%d %d\", a, b);\n```",
          options: ["A. 6 6", "B. 6 5", "C. 5 5", "D. 5 6"],
          answer: "B",
          analysis: "`b = a++` 是**后置自增**：先用后变。\n\n1. 先使用 `a` 的当前值5赋给 `b`，所以 `b = 5`\n2. 然后 `a` 加1，`a = 6`\n3. 输出：**6 5**\n\n对比：`b = ++a`（前置自增）则是先变后用，`a = 6, b = 6`。",
          point: "自增自减运算符"
        },
        {
          difficulty: "真题改编题",
          type: "选择题",
          question: "以下程序的输出结果是？\n\n```c\nchar s[] = \"world\";\nprintf(\"%d %d\", strlen(s), sizeof(s));\n```",
          options: ["A. 5 5", "B. 5 6", "C. 6 6", "D. 6 5"],
          answer: "B",
          analysis: "1. `strlen(s)` 求字符串长度，**不含 `\\0`**，所以是 **5**\n2. `sizeof(s)` 求数组占用的字节数，**包含 `\\0`**，所以是 **6**\n3. `\"world\"` 有5个字符 + 自动添加的 `\\0` = 6字节\n\n**核心区别：** `strlen` 不算 `\\0`，`sizeof` 算 `\\0`。",
          point: "strlen与sizeof"
        }
      ]
    },
    {
      level: 3,
      subject: "高等数学",
      intro: "📐 **第三关：高等数学**\n\n数学大挑战来了！公式别记错哦！\n共5道题，答对得⭐，加油！",
      questions: [
        {
          difficulty: "基础题",
          type: "选择题",
          question: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = $ ？",
          options: ["A. $0$", "B. $1$", "C. $\\infty$", "D. 不存在"],
          answer: "B",
          analysis: "这是**第一重要极限**：\n$$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$$\n\n推论：$\\lim_{x \\to 0} \\dfrac{\\sin kx}{x} = k$",
          point: "重要极限"
        },
        {
          difficulty: "基础题",
          type: "选择题",
          question: "$(\\sin x)' = $ ？",
          options: ["A. $\\cos x$", "B. $-\\cos x$", "C. $-\\sin x$", "D. $\\sec^2 x$"],
          answer: "A",
          analysis: "基本求导公式：\n- $(\\sin x)' = \\cos x$\n- $(\\cos x)' = -\\sin x$（注意负号！）\n- $(\\tan x)' = \\sec^2 x$\n\n**易错点：** $(\\cos x)'$ 有负号，$(\\sin x)'$ 没有负号。",
          point: "基本求导公式"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "等价无穷小替换可以用于以下哪种运算？",
          options: ["A. 加减乘除都可以", "B. 只能用于乘除", "C. 只能用于加减", "D. 只能用于乘法"],
          answer: "B",
          analysis: "**等价无穷小替换只能用于乘除运算，不能用于加减运算！**\n\n例如：$\\lim_{x \\to 0} \\dfrac{\\tan x - \\sin x}{x^3}$ 不能直接替换成 $\\dfrac{x - x}{x^3} = 0$，这是**错误的**。\n\n正确做法是用泰勒展开或洛必达法则。",
          point: "等价无穷小"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "设 $F(x) = \\int_0^x f(t) \\, dt$，则 $F'(x) = $ ？",
          options: ["A. $f(t)$", "B. $f(x)$", "C. $f(t) \\cdot t$", "D. $f(x) \\cdot x$"],
          answer: "B",
          analysis: "**变上限积分求导公式：**\n$$F(x) = \\int_a^x f(t) \\, dt \\quad \\Rightarrow \\quad F'(x) = f(x)$$\n\n如果上限是 $g(x)$，则：$F'(x) = f(g(x)) \\cdot g'(x)$（链式法则）。",
          point: "变上限积分求导"
        },
        {
          difficulty: "真题改编题",
          type: "选择题",
          question: "函数 $f(x) = x^3 - 3x$ 的极大值是？",
          options: ["A. $f(1) = -2$", "B. $f(-1) = 2$", "C. $f(0) = 0$", "D. 无极大值"],
          answer: "B",
          analysis: "1. 求导：$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$\n2. 令 $f'(x) = 0$ 得驻点：$x = 1$, $x = -1$\n3. 判别：\n   - $x < -1$：$f'(x) > 0$（增）\n   - $-1 < x < 1$：$f'(x) < 0$（减）\n   - $x > 1$：$f'(x) > 0$（增）\n4. $x = -1$ 处由增变减 $\\Rightarrow$ **极大值**，$f(-1) = -1 + 3 = 2$\n5. $x = 1$ 处由减变增 $\\Rightarrow$ 极小值，$f(1) = 1 - 3 = -2$",
          point: "函数极值"
        }
      ]
    },
    {
      level: 4,
      subject: "公共英语",
      intro: "📖 **第四关：公共英语**\n\n最后一关！语法词汇大考验！\n共5道题，答对得⭐，冲刺！",
      questions: [
        {
          difficulty: "基础题",
          type: "选择题",
          question: "选择正确的时态：She ____ to school every day.",
          options: ["A. go", "B. goes", "C. going", "D. went"],
          answer: "B",
          analysis: "主语 She 是第三人称单数，且 every day 表示习惯性动作，用**一般现在时**。\n\n第三人称单数变化规则：\n- 一般情况加 -s：work → works\n- 以 s, x, ch, sh, o 结尾加 -es：go → goes, watch → watches\n- 辅音字母+y 变 y 为 i 加 -es：study → studies",
          point: "一般现在时"
        },
        {
          difficulty: "基础题",
          type: "选择题",
          question: "选择正确的形式：I enjoy ____ music in my free time.",
          options: ["A. to listen", "B. listening", "C. listen", "D. listened"],
          answer: "B",
          analysis: "**enjoy** 后面接动名词(doing)，不接不定式(to do)。\n\n常见接 doing 的动词：enjoy, finish, mind, avoid, practice, consider\n\n常见接 to do 的动词：want, decide, hope, refuse, promise",
          point: "非谓语动词"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "If I ____ you, I would accept the offer.",
          options: ["A. am", "B. was", "C. were", "D. be"],
          answer: "C",
          analysis: "考查**虚拟语气**（与现在相反）：\nIf + 主语 + **过去式**（be动词统一用 **were**），主句用 would + 动词原形。\n\n**易错点：** 虚拟语气中 be 动词统一用 were，不用 was！\n\n句意：如果我是你，我会接受这个提议。",
          point: "虚拟语气"
        },
        {
          difficulty: "易错题",
          type: "选择题",
          question: "____ had he arrived when the phone rang.",
          options: ["A. No sooner", "B. Hardly", "C. Scarcely", "D. B和C都可以"],
          answer: "D",
          analysis: "**Hardly...when...** 和 **Scarcely...when...** 都是固定搭配，表示\"一...就...\"。\n\n否定词放句首，引起**部分倒装**：\nHardly had he arrived when the phone rang.\n\n类似结构：**No sooner...than...**（注意配 than 不是 when）\n\n**易错点：** Hardly/Scarcely 配 when，No sooner 配 than！",
          point: "倒装句"
        },
        {
          difficulty: "真题改编题",
          type: "选择题",
          question: "This is the book ____ I bought yesterday.",
          options: ["A. who", "B. which", "C. what", "D. where"],
          answer: "B",
          analysis: "考查**定语从句**：\n- 先行词是 book（物），用 **which** 或 **that**\n- **who** 用于人，**where** 是关系副词（在从句中作状语）\n- **what** 不能引导定语从句\n\n在本句中，which 在从句中作 bought 的宾语，所以可以用 which 或 that，也可以省略。",
          point: "定语从句"
        }
      ]
    }
  ],

  // ========== 玩法2: 考点消消乐 ==========
  findError: [
    {
      type: "C语言",
      title: "找bug挑战 #1：switch穿透",
      code: "```c\nint x = 2;\nswitch(x) {\n    case 1: printf(\"Monday\"); break;\n    case 2: printf(\"Tuesday\");\n    case 3: printf(\"Wednesday\"); break;\n    default: printf(\"Error\");\n}\n```",
      hint: "注意看每个 case 后面有没有 break",
      errors: "`case 2` 后面缺少 `break`，会导致穿透到 `case 3`",
      correctCode: "```c\ncase 2: printf(\"Tuesday\"); break;  // 加上break\n```",
      explanation: "当 `x = 2` 时，输出 `Tuesday` 后没有 `break`，会继续执行 `case 3` 输出 `Wednesday`，最终输出 **TuesdayWednesday**。\n\n**考点：** switch 语句忘加 `break` 是C语言最高频的坑点之一！"
    },
    {
      type: "C语言",
      title: "找bug挑战 #2：数组越界",
      code: "```c\nint a[5] = {1, 2, 3, 4, 5};\nint i;\nfor (i = 0; i <= 5; i++) {\n    printf(\"%d \", a[i]);\n}\n```",
      hint: "数组下标的范围是什么？",
      errors: "循环条件 `i <= 5` 导致访问 `a[5]`，**数组越界**！数组 `a[5]` 的有效下标是 0~4",
      correctCode: "```c\nfor (i = 0; i < 5; i++) {  // 改为 i < 5\n    printf(\"%d \", a[i]);\n}\n```",
      explanation: "数组 `a[5]` 的有效下标是 `0` 到 `4`（共5个元素）。`a[5]` 超出范围，访问的是未分配的内存，行为未定义。\n\n**考点：** C语言数组下标从 **0** 开始，最大下标是 **n-1**！"
    },
    {
      type: "高等数学",
      title: "找bug挑战 #3：等价无穷小误用",
      code: "求极限：\n$$\\lim_{x \\to 0} \\dfrac{\\tan x - \\sin x}{x^3}$$\n\n某同学的解法：\n$$\\tan x \\sim x, \\quad \\sin x \\sim x$$\n$$\\lim_{x \\to 0} \\dfrac{x - x}{x^3} = 0$$\n\n答案：$0$",
      hint: "等价无穷小替换有什么限制条件？",
      errors: "等价无穷小替换**不能用于加减运算**！$\\tan x - \\sin x$ 不能分别替换",
      correctCode: "正确解法（用泰勒展开）：\n$$\\tan x \\approx x + \\dfrac{x^3}{3}, \\quad \\sin x \\approx x - \\dfrac{x^3}{6}$$\n$$\\tan x - \\sin x \\approx \\dfrac{x^3}{3} + \\dfrac{x^3}{6} = \\dfrac{x^3}{2}$$\n$$\\lim_{x \\to 0} \\dfrac{\\dfrac{x^3}{2}}{x^3} = \\dfrac{1}{2}$$",
      explanation: "等价无穷小替换**只能用于乘除运算**，不能用于加减运算！\n\n**正确答案：** $\\dfrac{1}{2}$，不是 $0$。\n\n**考点：** 这是高数最经典的易错点之一！"
    },
    {
      type: "C语言",
      title: "找bug挑战 #4：指针未初始化",
      code: "```c\nint *p;\n*p = 10;\nprintf(\"%d\", *p);\n```",
      hint: "指针定义后能直接使用吗？",
      errors: "指针 `p` 未赋值就使用，是**野指针**，行为未定义",
      correctCode: "```c\nint a;\nint *p = &a;  // 先让p指向有效地址\n*p = 10;\nprintf(\"%d\", *p);\n```",
      explanation: "指针必须**先赋值（指向有效地址）再使用**。未赋值的指针指向随机地址，写入数据可能导致程序崩溃。\n\n**考点：** 野指针是C语言常见错误，指针定义后必须先初始化！"
    },
    {
      type: "公共英语",
      title: "找bug挑战 #5：虚拟语气错误",
      code: "错误句子：\nIf I **was** you, I **will** go to the party.\n\n意思：如果我是你，我会去参加派对。",
      hint: "虚拟语气与现在相反，be动词和主句时态怎么用？",
      errors: "1. `was` 应改为 `were`（虚拟语气be动词统一用were）\n2. `will` 应改为 `would`（主句用would+动词原形）",
      correctCode: "正确句子：\nIf I **were** you, I **would** go to the party.",
      explanation: "与现在相反的虚拟条件句：\n- 条件句：If + 主语 + 过去式（be动词用 **were**）\n- 主句：would/should/could/might + 动词原形\n\n**考点：** 虚拟语气中 be 动词统一用 were，不用 was！"
    },
    {
      type: "C语言",
      title: "找bug挑战 #6：自增运算符误用",
      code: "```c\nint a = 3;\nint b = ++a + a++;\nprintf(\"%d %d\", a, b);\n// 期望输出：5 7\n```",
      hint: "前置++和后置++同时用在一个变量上会怎样？",
      errors: "`++a + a++` 对同一个变量多次自增，行为是**未定义(Undefined Behavior)**的",
      correctCode: "```c\nint a = 3;\nint b = a + a;  // 先算好\na++;  // 再自增\nprintf(\"%d %d\", a, b);\n```",
      explanation: "在同一个表达式中对同一个变量多次使用自增/自减运算符，C语言标准规定行为**未定义**，不同编译器结果可能不同。\n\n**考点：** 不要在同一个表达式中对同一个变量多次自增！"
    }
  ],

  // ========== 玩法3: 知识抢答 ==========
  quickAnswer: [
    {
      question: "判断：C语言中注释里的拼写错误，编译器能够检查出来。",
      answer: "错",
      explanation: "注释会被编译器完全忽略，不会检查注释内的任何内容。"
    },
    {
      question: "判断：`sizeof` 运算符在编译时就能确定结果，不需要运行程序。",
      answer: "对",
      explanation: "`sizeof` 是编译时运算符，计算类型或变量占用的字节数，在编译阶段就确定了结果。"
    },
    {
      question: "判断：等价无穷小替换可以用于加减运算。",
      answer: "错",
      explanation: "等价无穷小替换**只能用于乘除运算**，不能用于加减运算！这是高数经典易错点。"
    },
    {
      question: "判断：C语言中 `==` 是赋值运算符，`=` 是比较运算符。",
      answer: "错",
      explanation: "正好相反！`=` 是赋值运算符，`==` 是比较（判断相等）运算符。"
    },
    {
      question: "判断：IPv4地址由32位二进制数组成。",
      answer: "对",
      explanation: "IPv4地址是32位，通常表示为4个十进制数（每段0-255）。IPv6是128位。"
    },
    {
      question: "判断：虚拟语气中，与现在相反的条件句，be动词统一用 were。",
      answer: "对",
      explanation: "虚拟语气中，无论主语是第几人称，be动词都统一用 were。如：If I were you..."
    },
    {
      question: "判断：`static` 局部变量每次函数调用都会重新初始化。",
      answer: "错",
      explanation: "`static` 变量**只在第一次调用时初始化**，之后保留上次的值。这是static的核心特性。"
    },
    {
      question: "判断：洛必达法则可以用于任何极限计算。",
      answer: "错",
      explanation: "洛必达法则只适用于 $\\dfrac{0}{0}$ 型或 $\\dfrac{\\infty}{\\infty}$ 型未定式，不是未定式不能用！"
    },
    {
      question: "判断：TCP是网络层协议。",
      answer: "错",
      explanation: "TCP是**传输层**协议。IP才是网络层协议。HTTP是应用层协议。"
    },
    {
      question: "判断：C语言数组下标从1开始。",
      answer: "错",
      explanation: "C语言数组下标从 **0** 开始，最大下标是 n-1。如 `a[5]` 的下标范围是 0~4。"
    }
  ],

  // ========== 玩法4: 记忆背诵闯关 ==========
  fillBlank: [
    {
      question: "`short int` 占用 ___ 字节。",
      answer: "2",
      explanation: "`short`（短整型）：2字节。记忆口诀：short短所以少，只占2字节。"
    },
    {
      question: "`double` 占用 ___ 字节。",
      answer: "8",
      explanation: "`double`（双精度）：8字节，约15-16位有效数字。`float`是4字节。"
    },
    {
      question: "第一重要极限：$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = $ ___",
      answer: "1",
      explanation: "第一重要极限：$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$\n\n推论：$\\lim_{x \\to 0} \\dfrac{\\sin kx}{x} = k$"
    },
    {
      question: "第二重要极限：$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = $ ___",
      answer: "e",
      explanation: "第二重要极限：$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = e$\n\n变形：$\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$"
    },
    {
      question: "$(\\cos x)' = $ ___",
      answer: "-sinx",
      explanation: "$(\\cos x)' = -\\sin x$\n\n注意有**负号**！对比：$(\\sin x)' = \\cos x$（无负号）。"
    },
    {
      question: "分部积分选择u的口诀是\"___幂指三\"。",
      answer: "反对",
      explanation: "口诀：**反对幂指三**（优先级从高到低）\n- **反**三角函数 → **对**数函数 → **幂**函数 → **指**数函数 → **三**角函数\n排在前面的选作u。"
    },
    {
      question: "C语言中，`int`类型占用 ___ 字节。",
      answer: "4",
      explanation: "`int`（整型）：4字节。\n\n常见类型字节数：char=1, short=2, int=4, float=4, double=8"
    },
    {
      question: "OSI模型共有 ___ 层。",
      answer: "7",
      explanation: "OSI七层模型（从下到上）：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。\n\n口诀：物数网传会表应"
    },
    {
      question: "虚拟语气中，与现在相反的条件句，be动词统一用 ___ 。",
      answer: "were",
      explanation: "虚拟语气中，be动词统一用 **were**，不用 was。\n\n例：If I **were** you, I would go."
    },
    {
      question: "IPv4地址由 ___ 位二进制数组成。",
      answer: "32",
      explanation: "IPv4地址由 **32位** 二进制数组成，通常表示为4个十进制数（每段0-255）。\n\nIPv6地址由 128位 组成。"
    }
  ]
};

// ==================== 游戏状态 ====================
let _gameState = {
  active: false,
  mode: null,
  subMode: null,
  advLevel: 0,
  advQuestion: 0,
  advTotalStars: 0,
  advLevelStars: [0, 0, 0, 0],
  advWrongPoints: [],
  advRetry: false,
  feIndex: 0,
  feScore: 0,
  feTotal: 0,
  qaIndex: 0,
  qaScore: 0,
  qaTotal: 0,
  qaAsked: false,
  fbIndex: 0,
  fbScore: 0,
  fbTotal: 0
};

// ==================== 辅助函数 ====================
function _gnorm(text) {
  return (text || "").trim().toLowerCase().replace(/\s+/g, "");
}

function _gcheck(userAnswer, correctAnswer, type) {
  var u = _gnorm(userAnswer);
  var c = _gnorm(correctAnswer);
  if (type === "选择题") {
    return u === c;
  }
  if (type === "判断题") {
    var trueSet = ["对", "正确", "true", "t", "yes", "y", "是"];
    var falseSet = ["错", "错误", "false", "f", "no", "n", "否"];
    return (trueSet.indexOf(u) >= 0 && trueSet.indexOf(c) >= 0) ||
           (falseSet.indexOf(u) >= 0 && falseSet.indexOf(c) >= 0);
  }
  if (u === c) return true;
  var uClean = u.replace(/\$|\\/g, "").replace(/[{},]/g, "");
  var cClean = c.replace(/\$|\\/g, "").replace(/[{},]/g, "");
  if (uClean === cClean) return true;
  if (c === "-sinx" && (u === "-sinx" || u === "-sin" || u === "负sinx")) return true;
  return false;
}

function _isGameTrigger(query) {
  var q = query.trim();
  for (var i = 0; i < GAME_TRIGGERS.length; i++) {
    if (q.indexOf(GAME_TRIGGERS[i]) >= 0) return true;
  }
  return false;
}

function _isGameExit(query) {
  var q = query.trim();
  for (var i = 0; i < GAME_EXIT_CMDS.length; i++) {
    if (q === GAME_EXIT_CMDS[i] || q.indexOf(GAME_EXIT_CMDS[i]) >= 0) return true;
  }
  return false;
}

function _exitGame() {
  var wasActive = _gameState.active;
  _gameState.active = false;
  _gameState.mode = null;
  _gameState.subMode = null;
  if (wasActive) {
    return "👋 已退出游戏模式。\n\n回到正常答疑模式，有什么学习问题尽管问我！\n\n> 输入\"开始闯关\"可以再次进入游戏模式。";
  }
  return null;
}

function _randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ==================== 游戏菜单 ====================
function _showGameMenu() {
  _gameState.active = true;
  _gameState.mode = "menu";
  return (
    "🎮 **欢迎进入游戏化学习模式！**\n\n" +
    "所有题目100%贴合山西专升本考纲，边玩边学！\n\n" +
    "**请选择玩法：**\n" +
    "1️⃣ **专升本闯关大冒险** — 4关×5题，闯关得⭐\n" +
    "2️⃣ **考点消消乐** — 找bug挑战，揪出高频坑点\n" +
    "3️⃣ **知识抢答** — 判断对错，节奏轻快\n" +
    "4️⃣ **记忆背诵闯关** — 填空题，巩固公式和概念\n\n" +
    "> 输入数字（1-4）选择玩法\n" +
    "> 输入\"退出游戏\"随时退出"
  );
}

function _handleMenuChoice(query) {
  var q = _gnorm(query);
  if (q === "1" || query.indexOf("闯关") >= 0 || query.indexOf("冒险") >= 0) return _startAdventure();
  if (q === "2" || query.indexOf("消消乐") >= 0 || query.indexOf("找bug") >= 0 || query.indexOf("找错误") >= 0) return _startFindError();
  if (q === "3" || query.indexOf("抢答") >= 0) return _startQuickAnswer();
  if (q === "4" || query.indexOf("背诵") >= 0 || query.indexOf("填空") >= 0) return _startFillBlank();
  return "请输入数字 1-4 选择玩法，或输入\"退出游戏\"退出。";
}

// ==================== 玩法1: 闯关大冒险 ====================
function _startAdventure() {
  _gameState.active = true;
  _gameState.mode = "adventure";
  _gameState.subMode = "question";
  _gameState.advLevel = 0;
  _gameState.advQuestion = 0;
  _gameState.advTotalStars = 0;
  _gameState.advLevelStars = [0, 0, 0, 0];
  _gameState.advWrongPoints = [];
  _gameState.advRetry = false;
  return _showAdventureQuestion();
}

function _showAdventureQuestion() {
  var levelData = GAME_DATA.adventure[_gameState.advLevel];
  var q = levelData.questions[_gameState.advQuestion];
  var output = "";
  if (_gameState.advQuestion === 0 && !_gameState.advRetry) {
    output += levelData.intro + "\n\n---\n\n";
  }
  output += "⭐ 当前得分：" + _gameState.advTotalStars + " / 20 | 第" + (_gameState.advLevel + 1) + "关 第" + (_gameState.advQuestion + 1) + "/5题\n\n";
  output += "**【" + q.difficulty + "】**\n\n";
  output += q.question + "\n";
  if (q.options) {
    output += "\n";
    for (var i = 0; i < q.options.length; i++) output += q.options[i] + "\n";
  }
  if (_gameState.advRetry) {
    output += '\n> 💡 这是你的重做机会，再想想看！直接输入答案即可。';
  } else {
    output += '\n> 💡 直接输入答案（如 A/B/C/D），输入"不会"可以查看解析';
  }
  return output;
}

function _handleAdventureAnswer(query) {
  var levelData = GAME_DATA.adventure[_gameState.advLevel];
  var q = levelData.questions[_gameState.advQuestion];
  var qNorm = query.trim();
  if (qNorm === "不会" || qNorm === "放弃" || qNorm === "查看答案" || qNorm === "跳过") {
    _gameState.advWrongPoints.push(q.point);
    _gameState.advRetry = false;
    var out = "📖 没关系，来看看这道题的解析：\n\n**答案：" + q.answer + "**\n\n" + q.analysis + "\n\n";
    return _advNext(out);
  }
  var isCorrect = _gcheck(query, q.answer, q.type);
  if (isCorrect) {
    if (!_gameState.advRetry) {
      _gameState.advTotalStars++;
      _gameState.advLevelStars[_gameState.advLevel]++;
    }
    _gameState.advRetry = false;
    var enc = _randItem(["太棒了！🎉", "答对了！继续加油！💪", "厉害！这个知识点掌握得不错！⭐", "完美！✨", "Nice！答对了！", "真棒！🏆"]);
    return _advNext(enc + "\n\n**✅ 正确！**\n\n" + q.analysis + "\n\n");
  } else {
    if (!_gameState.advRetry) {
      _gameState.advRetry = true;
      var hint = _randItem(["差一点点！再想想~", "不太对哦，看看哪里搞混了？", "没关系，再试一次！", "接近了但还不对，再想想！"]);
      var out2 = hint + "\n\n**❌ 答案不对**\n\n";
      if (q.point) out2 += "> 💡 考点提示：" + q.point + "\n";
      out2 += '\n再给一次机会，重新回答吧！输入"不会"可以查看解析。';
      return out2;
    } else {
      _gameState.advWrongPoints.push(q.point);
      _gameState.advRetry = false;
      return _advNext("没关系，记住了下次就会了！💪\n\n**📖 正确答案：" + q.answer + "**\n\n" + q.analysis + "\n\n");
    }
  }
}

function _advNext(prefix) {
  _gameState.advQuestion++;
  if (_gameState.advQuestion >= 5) {
    var levelData = GAME_DATA.adventure[_gameState.advLevel];
    var stars = _gameState.advLevelStars[_gameState.advLevel];
    prefix += "---\n\n";
    prefix += "🎉 **第" + (_gameState.advLevel + 1) + "关【" + levelData.subject + "】通关！**\n\n";
    prefix += "⭐ 本关得分：" + stars + " / 5\n\n";
    if (stars === 5) prefix += "满分通关！太强了！🌟\n\n";
    else if (stars >= 3) prefix += "不错的表现，继续加油！💪\n\n";
    else prefix += "这个科目还需要多练习哦，加油！📚\n\n";
    _gameState.advLevel++;
    _gameState.advQuestion = 0;
    if (_gameState.advLevel >= 4) return _advFinal(prefix);
    prefix += '> 输入"继续"进入下一关，输入"退出游戏"结束';
    _gameState.subMode = "levelComplete";
    return prefix;
  }
  prefix += "---\n\n";
  prefix += _showAdventureQuestion();
  return prefix;
}

function _advFinal(prefix) {
  var total = _gameState.advTotalStars;
  _gameState.active = false;
  _gameState.mode = null;
  _gameState.subMode = null;
  prefix += "═══════════════════\n\n";
  prefix += "🏆 **闯关大冒险·全部通关！**\n\n";
  prefix += "**总得分：" + total + " / 20 ⭐**\n\n";
  for (var i = 0; i < 4; i++) {
    prefix += "- " + GAME_DATA.adventure[i].subject + "：" + _gameState.advLevelStars[i] + " / 5 ⭐\n";
  }
  prefix += "\n";
  if (_gameState.advWrongPoints.length > 0) {
    var seen = {};
    var unique = [];
    for (var j = 0; j < _gameState.advWrongPoints.length; j++) {
      if (!seen[_gameState.advWrongPoints[j]]) {
        seen[_gameState.advWrongPoints[j]] = true;
        unique.push(_gameState.advWrongPoints[j]);
      }
    }
    prefix += "**📋 薄弱知识点总结：**\n";
    for (var k = 0; k < unique.length; k++) prefix += "- " + unique[k] + "\n";
    prefix += '\n**💡 建议重点复习以上知识点，可以在答疑模式中输入关键词深入学习。**\n';
  } else {
    prefix += "🎉 **全部答对！没有薄弱点，你太棒了！**\n";
  }
  prefix += '\n> 输入"开始闯关"可以再次挑战，或直接提问进入答疑模式。';
  return prefix;
}

// ==================== 玩法2: 考点消消乐 ====================
function _startFindError() {
  _gameState.active = true;
  _gameState.mode = "findError";
  _gameState.feIndex = 0;
  _gameState.feScore = 0;
  _gameState.feTotal = GAME_DATA.findError.length;
  return _showFindError();
}

function _showFindError() {
  var ch = GAME_DATA.findError[_gameState.feIndex];
  var output = "🔍 **考点消消乐** | 第" + (_gameState.feIndex + 1) + "/" + _gameState.feTotal + "题 | 得分：" + _gameState.feScore + "\n\n";
  output += ch.title + "\n\n";
  output += ch.code + "\n\n";
  output += "> 💡 " + ch.hint + "\n\n";
  output += '请找出其中的错误，输入你的答案。\n输入"查看答案"直接看解析。';
  return output;
}

function _handleFindErrorInput(query) {
  var ch = GAME_DATA.findError[_gameState.feIndex];
  var qNorm = query.trim();
  if (qNorm === "查看答案" || qNorm === "不会" || qNorm === "放弃" || qNorm === "跳过") {
    return _feResult(false);
  }
  var userAns = query.toLowerCase();
  var errorText = ch.errors.toLowerCase();
  var keyTerms = errorText.match(/[\u4e00-\u9fa5a-z]{2,}/g) || [];
  var matchCount = 0;
  for (var i = 0; i < keyTerms.length; i++) {
    if (keyTerms[i].length >= 2 && userAns.indexOf(keyTerms[i]) >= 0) matchCount++;
  }
  return _feResult(matchCount >= 1);
}

function _feResult(isCorrect) {
  var ch = GAME_DATA.findError[_gameState.feIndex];
  var output = "";
  if (isCorrect) {
    _gameState.feScore++;
    output = "✅ **找对了！太厉害了！**\n\n";
  } else {
    output = "📖 来看看正确答案吧：\n\n";
  }
  output += "**错误所在：**\n" + ch.errors + "\n\n";
  output += "**正确写法：**\n" + ch.correctCode + "\n\n";
  output += "**考点解析：**\n" + ch.explanation + "\n\n";
  _gameState.feIndex++;
  if (_gameState.feIndex >= _gameState.feTotal) {
    output += "═══════════════════\n\n";
    output += "🎉 **考点消消乐全部完成！**\n\n";
    output += "**得分：" + _gameState.feScore + " / " + _gameState.feTotal + "**\n\n";
    if (_gameState.feScore === _gameState.feTotal) output += "全部找对！你对易错点掌握得很扎实！🌟\n";
    else output += "继续巩固这些高频坑点，考试就不会踩坑了！💪\n";
    output += '\n> 输入"开始闯关"再玩一次，或直接提问进入答疑模式。';
    _gameState.active = false;
    _gameState.mode = null;
  } else {
    output += "---\n\n";
    output += _showFindError();
  }
  return output;
}

// ==================== 玩法3: 知识抢答 ====================
function _startQuickAnswer() {
  _gameState.active = true;
  _gameState.mode = "quickAnswer";
  _gameState.qaIndex = 0;
  _gameState.qaScore = 0;
  _gameState.qaTotal = GAME_DATA.quickAnswer.length;
  _gameState.qaAsked = false;
  return _showQuickAnswer();
}

function _showQuickAnswer() {
  var q = GAME_DATA.quickAnswer[_gameState.qaIndex];
  _gameState.qaAsked = true;
  var output = "⚡ **知识抢答** | 第" + (_gameState.qaIndex + 1) + "/" + _gameState.qaTotal + "题 | 得分：" + _gameState.qaScore + "\n\n";
  output += q.question + "\n\n";
  output += "> 快速回答：**对** 或 **错**";
  return output;
}

function _handleQuickAnswerInput(query) {
  if (!_gameState.qaAsked) return _showQuickAnswer();
  var q = GAME_DATA.quickAnswer[_gameState.qaIndex];
  var isCorrect = _gcheck(query, q.answer, "判断题");
  _gameState.qaAsked = false;
  var output = "";
  if (isCorrect) {
    _gameState.qaScore++;
    output = _randItem(["对！反应真快！⚡", "正确！🎉", "答对了！👍", "没错！继续！💪"]) + "\n\n";
  } else {
    output = "再想想~ 正确答案是 **" + q.answer + "**。\n\n";
  }
  output += "**解析：** " + q.explanation + "\n\n";
  _gameState.qaIndex++;
  if (_gameState.qaIndex >= _gameState.qaTotal) {
    output += "═══════════════════\n\n";
    output += "🎉 **知识抢答全部完成！**\n\n";
    output += "**得分：" + _gameState.qaScore + " / " + _gameState.qaTotal + "**\n\n";
    if (_gameState.qaScore === _gameState.qaTotal) output += "全对！你的基础知识很扎实！🌟\n";
    else if (_gameState.qaScore >= _gameState.qaTotal * 0.7) output += "不错！大部分都答对了！💪\n";
    else output += "继续加油，多复习基础概念！📚\n";
    output += '\n> 输入"开始闯关"再玩一次，或直接提问进入答疑模式。';
    _gameState.active = false;
    _gameState.mode = null;
  } else {
    output += "---\n\n";
    output += _showQuickAnswer();
  }
  return output;
}

// ==================== 玩法4: 记忆背诵闯关 ====================
function _startFillBlank() {
  _gameState.active = true;
  _gameState.mode = "fillBlank";
  _gameState.fbIndex = 0;
  _gameState.fbScore = 0;
  _gameState.fbTotal = GAME_DATA.fillBlank.length;
  return _showFillBlank();
}

function _showFillBlank() {
  var q = GAME_DATA.fillBlank[_gameState.fbIndex];
  var output = "📝 **记忆背诵闯关** | 第" + (_gameState.fbIndex + 1) + "/" + _gameState.fbTotal + "题 | 得分：" + _gameState.fbScore + "\n\n";
  output += q.question + "\n\n";
  output += '输入你的答案，输入"不会"可以查看答案';
  return output;
}

function _handleFillBlankInput(query) {
  var q = GAME_DATA.fillBlank[_gameState.fbIndex];
  var qNorm = query.trim();
  if (qNorm === "不会" || qNorm === "放弃" || qNorm === "查看答案" || qNorm === "跳过") {
    return _fbResult(false);
  }
  return _fbResult(_gcheck(query, q.answer, "填空题"));
}

function _fbResult(isCorrect) {
  var q = GAME_DATA.fillBlank[_gameState.fbIndex];
  var output = "";
  if (isCorrect) {
    _gameState.fbScore++;
    output = _randItem(["背对了！记忆力真好！🧠", "正确！🎉", "答对了！👍", "记住了！继续！💪"]) + "\n\n";
  } else {
    output = "再想想~ 正确答案是 **" + q.answer + "**。\n\n";
  }
  output += "**解析：** " + q.explanation + "\n\n";
  _gameState.fbIndex++;
  if (_gameState.fbIndex >= _gameState.fbTotal) {
    output += "═══════════════════\n\n";
    output += "🎉 **记忆背诵闯关全部完成！**\n\n";
    output += "**得分：" + _gameState.fbScore + " / " + _gameState.fbTotal + "**\n\n";
    if (_gameState.fbScore === _gameState.fbTotal) output += "全对！公式和概念都记住了！🌟\n";
    else if (_gameState.fbScore >= _gameState.fbTotal * 0.7) output += "不错！大部分都记住了，再巩固一下！💪\n";
    else output += "继续背诵，熟能生巧！📚\n";
    output += '\n> 输入"开始闯关"再玩一次，或直接提问进入答疑模式。';
    _gameState.active = false;
    _gameState.mode = null;
  } else {
    output += "---\n\n";
    output += _showFillBlank();
  }
  return output;
}

// ==================== 主入口 ====================
function handleGameInput(query) {
  query = (query || "").trim();
  if (!query) return null;

  // Adventure level complete: wait for "继续"
  if (_gameState.active && _gameState.mode === "adventure" && _gameState.subMode === "levelComplete") {
    if (query.indexOf("继续") >= 0 || query.indexOf("下一关") >= 0 || query === "1") {
      _gameState.subMode = "question";
      return _showAdventureQuestion();
    }
    if (_isGameExit(query)) return _exitGame();
    return '输入"继续"进入下一关，或输入"退出游戏"结束。';
  }

  // Exit game
  if (_isGameExit(query) && _gameState.active) return _exitGame();

  // Not in game: check trigger
  if (!_gameState.active) {
    if (_isGameTrigger(query)) {
      if (query.indexOf("开始闯关") >= 0 || query.indexOf("闯关模式") >= 0) return _startAdventure();
      return _showGameMenu();
    }
    return null;
  }

  // In game: route to handler
  switch (_gameState.mode) {
    case "menu": return _handleMenuChoice(query);
    case "adventure": return _handleAdventureAnswer(query);
    case "findError": return _handleFindErrorInput(query);
    case "quickAnswer": return _handleQuickAnswerInput(query);
    case "fillBlank": return _handleFillBlankInput(query);
    default:
      _gameState.active = false;
      return null;
  }
}
