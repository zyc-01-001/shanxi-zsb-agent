/**
 * 山西专升本计算机大类 - 沉浸式游戏化学习引擎 v3.0
 * 全新RPG元素：角色系统、血条能量、连击 combo、关卡地图、倒计时、成就
 * 霓虹冒险风格 · 所有题目100%贴合山西专升本考纲
 */

// ==================== 游戏触发词 ====================
const GAME_TRIGGERS = ["开始闯关","来玩游戏","答题小游戏","不想学习","有点累","玩一会","闯关模式","开始游戏","玩游戏"];
const GAME_EXIT_CMDS = ["退出游戏","结束游戏","退出闯关","不玩了"];

// ==================== 游戏数据 ====================
const GAME_DATA = {
  adventure: [
    {level:1,subject:"计算机基础",icon:"🖥️",color:"#00bcd4",gradient:"linear-gradient(135deg,#00bcd4,#0288d1)",
     intro:"从最基本的计算机知识开始热身！",questions:[
      {difficulty:"基础题",type:"选择题",question:"计算机中表示数据的最小单位是？",options:["A. 字节(Byte)","B. 位(bit)","C. 字(Word)","D. KB"],answer:"B",analysis:"**位(bit)** 是计算机中表示数据的最小单位，只有0和1两个状态。\n\n字节(Byte)是基本存储单位，$1\\text{Byte} = 8\\text{bit}$。\n\n$1\\text{KB} = 1024\\text{B}$，$1\\text{MB} = 1024\\text{KB}$。",point:"计算机基本单位"},
      {difficulty:"基础题",type:"选择题",question:"冯·诺依曼体系结构的核心思想是？",options:["A. 虚拟存储","B. 存储程序","C. 并行处理","D. 分布式计算"],answer:"B",analysis:"**存储程序** 是冯·诺依曼体系结构的核心思想。\n\n程序和数据预先存入存储器，计算机按存储器中的指令自动执行。\n\n世界第一台电子计算机：**ENIAC**（1946年），但不是存储程序的。首台存储程序计算机：**EDVAC**。",point:"计算机发展史"},
      {difficulty:"易错题",type:"选择题",question:"二进制数 $1011$ 转换为十进制数是？",options:["A. $9$","B. $10$","C. $11$","D. $13$"],answer:"C",analysis:"二进制转十进制：按权展开求和\n\n$$1011 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 8 + 0 + 2 + 1 = 11$$\n\n**易错点：** 权值从右到左依次是 $2^0, 2^1, 2^2, 2^3$，不要搞反。",point:"进制转换"},
      {difficulty:"易错题",type:"选择题",question:"以下哪个IP地址属于C类地址？",options:["A. 10.0.0.1","B. 172.16.5.1","C. 192.168.1.1","D. 127.0.0.1"],answer:"C",analysis:"IP地址分类：\n- **A类**：$1.0.0.0 \\sim 126.255.255.255$\n- **B类**：$128.0.0.0 \\sim 191.255.255.255$\n- **C类**：$192.0.0.0 \\sim 223.255.255.255$\n\n**192.168.1.1** 在C类范围内。\n\n**易错点：** $127.x.x.x$ 是回环地址，不属于A/B/C任何一类。",point:"IP地址分类"},
      {difficulty:"真题改编题",type:"选择题",question:"在OSI七层模型中，TCP协议工作在哪一层？",options:["A. 网络层","B. 传输层","C. 应用层","D. 数据链路层"],answer:"B",analysis:"**TCP** 是传输层协议，提供可靠的端到端传输。\n\n**易混淆：**\n- IP 是**网络层**协议\n- HTTP 是**应用层**协议\n- TCP/UDP 是**传输层**协议\n\n口诀：**\"传输层有TCP，网络层有IP\"**",point:"OSI七层模型"}
    ]},
    {level:2,subject:"C语言程序设计",icon:"💻",color:"#a855f7",gradient:"linear-gradient(135deg,#a855f7,#7c3aed)",
     intro:"进入编程世界！注意易错点哦！",questions:[
      {difficulty:"基础题",type:"选择题",question:"在C语言中，`char`类型占用的字节数是？",options:["A. 1字节","B. 2字节","C. 4字节","D. 8字节"],answer:"A",analysis:"`char`（字符型）占 **1字节**。\n\n常见数据类型字节数：\n- `char`：1字节\n- `short`：2字节\n- `int`：4字节\n- `float`：4字节\n- `double`：8字节\n\n**易错点：** `char`是1字节不是2字节！",point:"数据类型字节数"},
      {difficulty:"基础题",type:"选择题",question:"以下哪个运算符用于判断两个值是否相等？",options:["A. =","B. ==","C. ===","D. !="],answer:"B",analysis:"**`==`** 是关系运算符，用于判断相等。\n\n**`=`** 是赋值运算符，不是比较！\n\n**易错点：** C语言中没有 `===`（那是JavaScript的语法）。`!=` 是不等于。",point:"运算符"},
      {difficulty:"易错题",type:"选择题",question:"以下程序的输出结果是？\n\n```c\nint a = 2;\nswitch(a) {\n    case 1: printf(\"A\"); break;\n    case 2: printf(\"B\");\n    case 3: printf(\"C\"); break;\n    default: printf(\"D\");\n}\n```",options:["A. B","B. BC","C. BCD","D. ABC"],answer:"B",analysis:"1. `a = 2`，匹配 `case 2`\n2. 输出 `B`\n3. **没有 `break`**，继续执行 `case 3`，输出 `C`\n4. `case 3` 后有 `break`，跳出 switch\n5. 最终输出：**BC**\n\n这就是 **switch穿透**！忘加 `break` 是最常见的错误。",point:"switch穿透"},
      {difficulty:"易错题",type:"选择题",question:"以下程序的输出结果是？\n\n```c\nint a = 5, b;\nb = a++;\nprintf(\"%d %d\", a, b);\n```",options:["A. 6 6","B. 6 5","C. 5 5","D. 5 6"],answer:"B",analysis:"`b = a++` 是**后置自增**：先用后变。\n\n1. 先使用 `a` 的当前值5赋给 `b`，所以 `b = 5`\n2. 然后 `a` 加1，`a = 6`\n3. 输出：**6 5**\n\n对比：`b = ++a`（前置自增）则是先变后用，`a = 6, b = 6`。",point:"自增自减运算符"},
      {difficulty:"真题改编题",type:"选择题",question:"以下程序的输出结果是？\n\n```c\nchar s[] = \"world\";\nprintf(\"%d %d\", strlen(s), sizeof(s));\n```",options:["A. 5 5","B. 5 6","C. 6 6","D. 6 5"],answer:"B",analysis:"1. `strlen(s)` 求字符串长度，**不含 `\\0`**，所以是 **5**\n2. `sizeof(s)` 求数组占用的字节数，**包含 `\\0`**，所以是 **6**\n3. `\"world\"` 有5个字符 + 自动添加的 `\\0` = 6字节\n\n**核心区别：** `strlen` 不算 `\\0`，`sizeof` 算 `\\0`。",point:"strlen与sizeof"}
    ]},
    {level:3,subject:"高等数学",icon:"📐",color:"#ff9800",gradient:"linear-gradient(135deg,#ff9800,#f57c00)",
     intro:"数学大挑战来了！公式别记错哦！",questions:[
      {difficulty:"基础题",type:"选择题",question:"$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = $ ？",options:["A. $0$","B. $1$","C. $\\infty$","D. 不存在"],answer:"B",analysis:"这是**第一重要极限**：\n$$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$$\n\n推论：$\\lim_{x \\to 0} \\dfrac{\\sin kx}{x} = k$",point:"重要极限"},
      {difficulty:"基础题",type:"选择题",question:"$(\\sin x)' = $ ？",options:["A. $\\cos x$","B. $-\\cos x$","C. $-\\sin x$","D. $\\sec^2 x$"],answer:"A",analysis:"基本求导公式：\n- $(\\sin x)' = \\cos x$\n- $(\\cos x)' = -\\sin x$（注意负号！）\n- $(\\tan x)' = \\sec^2 x$\n\n**易错点：** $(\\cos x)'$ 有负号，$(\\sin x)'$ 没有负号。",point:"基本求导公式"},
      {difficulty:"易错题",type:"选择题",question:"等价无穷小替换可以用于以下哪种运算？",options:["A. 加减乘除都可以","B. 只能用于乘除","C. 只能用于加减","D. 只能用于乘法"],answer:"B",analysis:"**等价无穷小替换只能用于乘除运算，不能用于加减运算！**\n\n例如：$\\lim_{x \\to 0} \\dfrac{\\tan x - \\sin x}{x^3}$ 不能直接替换成 $\\dfrac{x - x}{x^3} = 0$，这是**错误的**。\n\n正确做法是用泰勒展开或洛必达法则。",point:"等价无穷小"},
      {difficulty:"易错题",type:"选择题",question:"设 $F(x) = \\int_0^x f(t) \\, dt$，则 $F'(x) = $ ？",options:["A. $f(t)$","B. $f(x)$","C. $f(t) \\cdot t$","D. $f(x) \\cdot x$"],answer:"B",analysis:"**变上限积分求导公式：**\n$$F(x) = \\int_a^x f(t) \\, dt \\quad \\Rightarrow \\quad F'(x) = f(x)$$\n\n如果上限是 $g(x)$，则：$F'(x) = f(g(x)) \\cdot g'(x)$（链式法则）。",point:"变上限积分求导"},
      {difficulty:"真题改编题",type:"选择题",question:"函数 $f(x) = x^3 - 3x$ 的极大值是？",options:["A. $f(1) = -2$","B. $f(-1) = 2$","C. $f(0) = 0$","D. 无极大值"],answer:"B",analysis:"1. 求导：$f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$\n2. 令 $f'(x) = 0$ 得驻点：$x = 1$, $x = -1$\n3. 判别：\n   - $x < -1$：$f'(x) > 0$（增）\n   - $-1 < x < 1$：$f'(x) < 0$（减）\n   - $x > 1$：$f'(x) > 0$（增）\n4. $x = -1$ 处由增变减 $\\Rightarrow$ **极大值**，$f(-1) = -1 + 3 = 2$\n5. $x = 1$ 处由减变增 $\\Rightarrow$ 极小值，$f(1) = 1 - 3 = -2$",point:"函数极值"}
    ]},
    {level:4,subject:"公共英语",icon:"📖",color:"#e91e63",gradient:"linear-gradient(135deg,#e91e63,#c2185b)",
     intro:"最后一关！语法词汇大考验！",questions:[
      {difficulty:"基础题",type:"选择题",question:"选择正确的时态：She ____ to school every day.",options:["A. go","B. goes","C. going","D. went"],answer:"B",analysis:"主语 She 是第三人称单数，且 every day 表示习惯性动作，用**一般现在时**。\n\n第三人称单数变化规则：\n- 一般情况加 -s：work → works\n- 以 s, x, ch, sh, o 结尾加 -es：go → goes, watch → watches\n- 辅音字母+y 变 y 为 i 加 -es：study → studies",point:"一般现在时"},
      {difficulty:"基础题",type:"选择题",question:"选择正确的形式：I enjoy ____ music in my free time.",options:["A. to listen","B. listening","C. listen","D. listened"],answer:"B",analysis:"**enjoy** 后面接动名词(doing)，不接不定式(to do)。\n\n常见接 doing 的动词：enjoy, finish, mind, avoid, practice, consider\n\n常见接 to do 的动词：want, decide, hope, refuse, promise",point:"非谓语动词"},
      {difficulty:"易错题",type:"选择题",question:"If I ____ you, I would accept the offer.",options:["A. am","B. was","C. were","D. be"],answer:"C",analysis:"考查**虚拟语气**（与现在相反）：\nIf + 主语 + **过去式**（be动词统一用 **were**），主句用 would + 动词原形。\n\n**易错点：** 虚拟语气中 be 动词统一用 were，不用 was！\n\n句意：如果我是你，我会接受这个提议。",point:"虚拟语气"},
      {difficulty:"易错题",type:"选择题",question:"____ had he arrived when the phone rang.",options:["A. No sooner","B. Hardly","C. Scarcely","D. B和C都可以"],answer:"D",analysis:"**Hardly...when...** 和 **Scarcely...when...** 都是固定搭配，表示\"一...就...\"。\n\n否定词放句首，引起**部分倒装**：\nHardly had he arrived when the phone rang.\n\n类似结构：**No sooner...than...**（注意配 than 不是 when）\n\n**易错点：** Hardly/Scarcely 配 when，No sooner 配 than！",point:"倒装句"},
      {difficulty:"真题改编题",type:"选择题",question:"This is the book ____ I bought yesterday.",options:["A. who","B. which","C. what","D. where"],answer:"B",analysis:"考查**定语从句**：\n- 先行词是 book（物），用 **which** 或 **that**\n- **who** 用于人，**where** 是关系副词（在从句中作状语）\n- **what** 不能引导定语从句\n\n在本句中，which 在从句中作 bought 的宾语，所以可以用 which 或 that，也可以省略。",point:"定语从句"}
    ]}
  ],
  findError: [
    {type:"C语言",title:"switch穿透",icon:"🔧",code:"```c\nint x = 2;\nswitch(x) {\n    case 1: printf(\"Monday\"); break;\n    case 2: printf(\"Tuesday\");\n    case 3: printf(\"Wednesday\"); break;\n    default: printf(\"Error\");\n}\n```",hint:"注意看每个 case 后面有没有 break",errors:"`case 2` 后面缺少 `break`，会导致穿透到 `case 3`",correctCode:"```c\ncase 2: printf(\"Tuesday\"); break;  // 加上break\n```",explanation:"当 `x = 2` 时，输出 `Tuesday` 后没有 `break`，会继续执行 `case 3` 输出 `Wednesday`，最终输出 **TuesdayWednesday**。\n\n**考点：** switch 语句忘加 `break` 是C语言最高频的坑点之一！"},
    {type:"C语言",title:"数组越界",icon:"🔧",code:"```c\nint a[5] = {1, 2, 3, 4, 5};\nint i;\nfor (i = 0; i <= 5; i++) {\n    printf(\"%d \", a[i]);\n}\n```",hint:"数组下标的范围是什么？",errors:"循环条件 `i <= 5` 导致访问 `a[5]`，**数组越界**！数组 `a[5]` 的有效下标是 0~4",correctCode:"```c\nfor (i = 0; i < 5; i++) {  // 改为 i < 5\n    printf(\"%d \", a[i]);\n}\n```",explanation:"数组 `a[5]` 的有效下标是 `0` 到 `4`（共5个元素）。`a[5]` 超出范围，访问的是未分配的内存，行为未定义。\n\n**考点：** C语言数组下标从 **0** 开始，最大下标是 **n-1**！"},
    {type:"高等数学",title:"等价无穷小误用",icon:"📐",code:"求极限：\n$$\\lim_{x \\to 0} \\dfrac{\\tan x - \\sin x}{x^3}$$\n\n某同学的解法：\n$$\\tan x \\sim x, \\quad \\sin x \\sim x$$\n$$\\lim_{x \\to 0} \\dfrac{x - x}{x^3} = 0$$\n\n答案：$0$",hint:"等价无穷小替换有什么限制条件？",errors:"等价无穷小替换**不能用于加减运算**！$\\tan x - \\sin x$ 不能分别替换",correctCode:"正确解法（用泰勒展开）：\n$$\\tan x \\approx x + \\dfrac{x^3}{3}, \\quad \\sin x \\approx x - \\dfrac{x^3}{6}$$\n$$\\tan x - \\sin x \\approx \\dfrac{x^3}{3} + \\dfrac{x^3}{6} = \\dfrac{x^3}{2}$$\n$$\\lim_{x \\to 0} \\dfrac{\\dfrac{x^3}{2}}{x^3} = \\dfrac{1}{2}$$",explanation:"等价无穷小替换**只能用于乘除运算**，不能用于加减运算！\n\n**正确答案：** $\\dfrac{1}{2}$，不是 $0$。\n\n**考点：** 这是高数最经典的易错点之一！"},
    {type:"C语言",title:"指针未初始化",icon:"🔧",code:"```c\nint *p;\n*p = 10;\nprintf(\"%d\", *p);\n```",hint:"指针定义后能直接使用吗？",errors:"指针 `p` 未赋值就使用，是**野指针**，行为未定义",correctCode:"```c\nint a;\nint *p = &a;  // 先让p指向有效地址\n*p = 10;\nprintf(\"%d\", *p);\n```",explanation:"指针必须**先赋值（指向有效地址）再使用**。未赋值的指针指向随机地址，写入数据可能导致程序崩溃。\n\n**考点：** 野指针是C语言常见错误，指针定义后必须先初始化！"},
    {type:"公共英语",title:"虚拟语气错误",icon:"📖",code:"错误句子：\nIf I **was** you, I **will** go to the party.\n\n意思：如果我是你，我会去参加派对。",hint:"虚拟语气与现在相反，be动词和主句时态怎么用？",errors:"1. `was` 应改为 `were`（虚拟语气be动词统一用were）\n2. `will` 应改为 `would`（主句用would+动词原形）",correctCode:"正确句子：\nIf I **were** you, I **would** go to the party.",explanation:"与现在相反的虚拟条件句：\n- 条件句：If + 主语 + 过去式（be动词用 **were**）\n- 主句：would/should/could/might + 动词原形\n\n**考点：** 虚拟语气中 be 动词统一用 were，不用 was！"},
    {type:"C语言",title:"自增运算符误用",icon:"🔧",code:"```c\nint a = 3;\nint b = ++a + a++;\nprintf(\"%d %d\", a, b);\n// 期望输出：5 7\n```",hint:"前置++和后置++同时用在一个变量上会怎样？",errors:"`++a + a++` 对同一个变量多次自增，行为是**未定义(Undefined Behavior)**的",correctCode:"```c\nint a = 3;\nint b = a + a;  // 先算好\na++;  // 再自增\nprintf(\"%d %d\", a, b);\n```",explanation:"在同一个表达式中对同一个变量多次使用自增/自减运算符，C语言标准规定行为**未定义**，不同编译器结果可能不同。\n\n**考点：** 不要在同一个表达式中对同一个变量多次自增！"}
  ],
  quickAnswer: [
    {question:"C语言中注释里的拼写错误，编译器能够检查出来。",answer:"错",explanation:"注释会被编译器完全忽略，不会检查注释内的任何内容。"},
    {question:"`sizeof` 运算符在编译时就能确定结果，不需要运行程序。",answer:"对",explanation:"`sizeof` 是编译时运算符，计算类型或变量占用的字节数，在编译阶段就确定了结果。"},
    {question:"等价无穷小替换可以用于加减运算。",answer:"错",explanation:"等价无穷小替换**只能用于乘除运算**，不能用于加减运算！这是高数经典易错点。"},
    {question:"C语言中 `==` 是赋值运算符，`=` 是比较运算符。",answer:"错",explanation:"正好相反！`=` 是赋值运算符，`==` 是比较（判断相等）运算符。"},
    {question:"IPv4地址由32位二进制数组成。",answer:"对",explanation:"IPv4地址是32位，通常表示为4个十进制数（每段0-255）。IPv6是128位。"},
    {question:"虚拟语气中，与现在相反的条件句，be动词统一用 were。",answer:"对",explanation:"虚拟语气中，无论主语是第几人称，be动词都统一用 were。如：If I were you..."},
    {question:"`static` 局部变量每次函数调用都会重新初始化。",answer:"错",explanation:"`static` 变量**只在第一次调用时初始化**，之后保留上次的值。这是static的核心特性。"},
    {question:"洛必达法则可以用于任何极限计算。",answer:"错",explanation:"洛必达法则只适用于 $\\dfrac{0}{0}$ 型或 $\\dfrac{\\infty}{\\infty}$ 型未定式，不是未定式不能用！"},
    {question:"TCP是网络层协议。",answer:"错",explanation:"TCP是**传输层**协议。IP才是网络层协议。HTTP是应用层协议。"},
    {question:"C语言数组下标从1开始。",answer:"错",explanation:"C语言数组下标从 **0** 开始，最大下标是 n-1。如 `a[5]` 的下标范围是 0~4。"}
  ],
  fillBlank: [
    {question:"`short int` 占用 ___ 字节。",answer:"2",explanation:"`short`（短整型）：2字节。记忆口诀：short短所以少，只占2字节。"},
    {question:"`double` 占用 ___ 字节。",answer:"8",explanation:"`double`（双精度）：8字节，约15-16位有效数字。`float`是4字节。"},
    {question:"第一重要极限：$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = $ ___",answer:"1",explanation:"第一重要极限：$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$\n\n推论：$\\lim_{x \\to 0} \\dfrac{\\sin kx}{x} = k$"},
    {question:"第二重要极限：$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = $ ___",answer:"e",explanation:"第二重要极限：$\\lim_{x \\to \\infty} \\left(1 + \\dfrac{1}{x}\\right)^x = e$\n\n变形：$\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$"},
    {question:"$(\\cos x)' = $ ___",answer:"-sinx",explanation:"$(\\cos x)' = -\\sin x$\n\n注意有**负号**！对比：$(\\sin x)' = \\cos x$（无负号）。"},
    {question:"分部积分选择u的口诀是\"___幂指三\"。",answer:"反对",explanation:"口诀：**反对幂指三**（优先级从高到低）\n- **反**三角函数 → **对**数函数 → **幂**函数 → **指**数函数 → **三**角函数\n排在前面的选作u。"},
    {question:"C语言中，`int`类型占用 ___ 字节。",answer:"4",explanation:"`int`（整型）：4字节。\n\n常见类型字节数：char=1, short=2, int=4, float=4, double=8"},
    {question:"OSI模型共有 ___ 层。",answer:"7",explanation:"OSI七层模型（从下到上）：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。\n\n口诀：物数网传会表应"},
    {question:"虚拟语气中，与现在相反的条件句，be动词统一用 ___ 。",answer:"were",explanation:"虚拟语气中，be动词统一用 **were**，不用 was。\n\n例：If I **were** you, I would go."},
    {question:"IPv4地址由 ___ 位二进制数组成。",answer:"32",explanation:"IPv4地址由 **32位** 二进制数组成，通常表示为4个十进制数（每段0-255）。\n\nIPv6地址由 128位 组成。"}
  ]
};

// ==================== 游戏状态 ====================
let _gameState = {
  active:false, mode:null, screen:null,
  // 闯关大冒险
  advLevel:0, advQuestion:0, advTotalStars:0, advLevelStars:[0,0,0,0],
  advWrongPoints:[], advRetry:false, advUnlocked:1, advBestStars:[0,0,0,0],
  // 考点消消乐
  feIndex:0, feScore:0, feTotal:0, feShowResult:false,
  // 知识抢答
  qaIndex:0, qaScore:0, qaTotal:0, qaAnswered:false, qaTimer:null, qaTimeLeft:10,
  // 记忆背诵
  fbIndex:0, fbScore:0, fbTotal:0,
  // RPG系统
  hp:100, maxHp:100, combo:0, maxCombo:0, totalCorrect:0, totalAnswered:0,
  exp:0, level:1, achievements:[],
  // 道具系统
  items:{hint:0,revive:0,freeze:0},
  // 宝箱系统
  chestReward:null,
  // 音效开关
  soundOn:true
};

// ==================== 工具函数 ====================
function _gnorm(t){return(t||"").trim().toLowerCase().replace(/\s+/g,"");}
function _gcheck(u,c,type){
  u=_gnorm(u);c=_gnorm(c);
  if(type==="选择题")return u===c;
  if(type==="判断题"){var T=["对","正确","true","t","yes","y","是"],F=["错","错误","false","f","no","n","否"];return(T.indexOf(u)>=0&&T.indexOf(c)>=0)||(F.indexOf(u)>=0&&F.indexOf(c)>=0);}
  if(u===c)return true;
  var uc=u.replace(/\$|\\/g,"").replace(/[{},]/g,""),cc=c.replace(/\$|\\/g,"").replace(/[{},]/g,"");if(uc===cc)return true;
  if(c==="-sinx"&&(u==="-sinx"||u==="-sin"||u==="负sinx"))return true;return false;
}
function _rand(a){return a[Math.floor(Math.random()*a.length)];}
function _isGameTrigger(q){q=q.trim();for(var i=0;i<GAME_TRIGGERS.length;i++){if(q.indexOf(GAME_TRIGGERS[i])>=0)return true;}return false;}
function _isGameExit(q){q=q.trim();for(var i=0;i<GAME_EXIT_CMDS.length;i++){if(q.indexOf(GAME_EXIT_CMDS[i])>=0)return true;}return false;}
function _md(text){try{return marked.parse(text||"");}catch(e){return text||"";}}

// ==================== 音效系统 (Web Audio API) ====================
var _audioCtx=null;
function _initAudio(){
  if(!_audioCtx){
    try{_audioCtx=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}
  }
  if(_audioCtx&&_audioCtx.state==="suspended"){_audioCtx.resume();}
}
function _tone(freq,duration,type,volume){
  if(!_audioCtx||!_gameState.soundOn)return;
  var osc=_audioCtx.createOscillator();
  var gain=_audioCtx.createGain();
  osc.type=type||"square";
  osc.frequency.value=freq;
  gain.gain.setValueAtTime(volume||0.12,_audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001,_audioCtx.currentTime+duration);
  osc.connect(gain);
  gain.connect(_audioCtx.destination);
  osc.start();
  osc.stop(_audioCtx.currentTime+duration);
}
function _sfxCorrect(){
  _tone(523,0.08,"square");setTimeout(function(){_tone(659,0.08,"square");},60);
  setTimeout(function(){_tone(784,0.12,"square");},120);
}
function _sfxWrong(){
  _tone(200,0.12,"sawtooth",0.1);setTimeout(function(){_tone(150,0.18,"sawtooth",0.1);},80);
}
function _sfxLevelUp(){
  var notes=[523,659,784,1047];
  for(var i=0;i<notes.length;i++){(function(f,d){setTimeout(function(){_tone(f,0.1,"square");},d);})(notes[i],i*70);}
}
function _sfxCombo(){_tone(880,0.04,"square");setTimeout(function(){_tone(1100,0.08,"square");},40);}
function _sfxTick(){_tone(1000,0.02,"sine",0.06);}
function _sfxClick(){_tone(400,0.03,"sine",0.05);}
function _sfxChest(){
  _tone(600,0.05,"square");setTimeout(function(){_tone(800,0.05,"square");},50);
  setTimeout(function(){_tone(1000,0.08,"square");},100);setTimeout(function(){_tone(1200,0.12,"square");},160);
}
function _sfxAchievement(){
  _tone(659,0.06,"sine");setTimeout(function(){_tone(880,0.06,"sine");},50);
  setTimeout(function(){_tone(1047,0.15,"sine");},100);
}

// ==================== 成就系统 ====================
var ACHIEVEMENTS=[
  {id:"first_correct",icon:"🎯",name:"初出茅庐",desc:"答对第一道题"},
  {id:"combo_3",icon:"🔥",name:"小试牛刀",desc:"达成3连击"},
  {id:"combo_5",icon:"⚡",name:"连击大师",desc:"达成5连击"},
  {id:"combo_10",icon:"💫",name:"连击之王",desc:"达成10连击"},
  {id:"perfect_level",icon:"🌟",name:"满分通关",desc:"单关5题全对"},
  {id:"level_5",icon:"⭐",name:"升级达人",desc:"角色达到5级"},
  {id:"no_hp_loss",icon:"🛡️",name:"毫发无伤",desc:"满血完成5题以上"},
  {id:"score_30",icon:"🏆",name:"学霸之路",desc:"累计答对30题"}
];
function _checkAchievements(){
  for(var i=0;i<ACHIEVEMENTS.length;i++){
    var a=ACHIEVEMENTS[i];
    if(_gameState.achievements.indexOf(a.id)<0){
      var unlocked=false;
      if(a.id==="first_correct"&&_gameState.totalCorrect>=1)unlocked=true;
      else if(a.id==="combo_3"&&_gameState.maxCombo>=3)unlocked=true;
      else if(a.id==="combo_5"&&_gameState.maxCombo>=5)unlocked=true;
      else if(a.id==="combo_10"&&_gameState.maxCombo>=10)unlocked=true;
      else if(a.id==="perfect_level"&&_gameState.advLevelStars[_gameState.advLevel]===5)unlocked=true;
      else if(a.id==="level_5"&&_gameState.level>=5)unlocked=true;
      else if(a.id==="no_hp_loss"&&_gameState.hp===_gameState.maxHp&&_gameState.totalAnswered>=5)unlocked=true;
      else if(a.id==="score_30"&&_gameState.totalCorrect>=30)unlocked=true;
      if(unlocked){
        _gameState.achievements.push(a.id);
        _showAchievement(a);
      }
    }
  }
}
function _showAchievement(a){
  _sfxAchievement();
  var notif=document.createElement("div");
  notif.className="g-ach-notif";
  notif.innerHTML='<div class="g-ach-notif-icon">'+a.icon+'</div>'+
    '<div class="g-ach-notif-info">'+
      '<div class="g-ach-notif-label">🏆 成就解锁！</div>'+
      '<div class="g-ach-notif-name">'+a.name+'</div>'+
      '<div class="g-ach-notif-desc">'+a.desc+'</div>'+
    '</div>';
  document.body.appendChild(notif);
  setTimeout(function(){notif.classList.add("g-ach-show");},10);
  setTimeout(function(){
    notif.classList.remove("g-ach-show");
    setTimeout(function(){if(notif.parentNode)notif.parentNode.removeChild(notif);},500);
  },3500);
}

// ==================== 道具系统 ====================
var ITEMS=[
  {id:"hint",icon:"🔮",name:"提示卡",desc:"查看考点提示"},
  {id:"revive",icon:"❤️",name:"复活药",desc:"恢复50点HP"},
  {id:"freeze",icon:"⏰",name:"时间冻结",desc:"抢答模式+5秒"}
];
function _itemDrop(){
  if(Math.random()<0.3){
    var item=_rand(ITEMS);
    _gameState.items[item.id]++;
    _sfxChest();
    _scorePopup("🎁 获得 "+item.icon+item.name+"！","#a855f7");
  }
}
function _itemsBar(){
  var html='<div class="g-items-bar">';
  for(var i=0;i<ITEMS.length;i++){
    var item=ITEMS[i];
    var count=_gameState.items[item.id]||0;
    html+='<div class="g-item '+(count>0?"":"g-item-empty")+'" '+(count>0?'onclick="_useItem(\''+item.id+'\')"':'')+' title="'+item.desc+'">'+
      '<span class="g-item-icon">'+item.icon+'</span>'+
      '<span class="g-item-count">×'+count+'</span>'+
    '</div>';
  }
  html+='<div class="g-item g-item-sound" onclick="_toggleSound()" title="音效开关">'+
    '<span class="g-item-icon">'+(_gameState.soundOn?"🔊":"🔇")+'</span>'+
  '</div>';
  return html+'</div>';
}
function _useItem(itemId){
  _sfxClick();
  if(itemId==="hint"){
    if(_gameState.items.hint<=0)return;
    var q=null;
    if(_gameState.mode==="adventure"&&GAME_DATA.adventure[_gameState.advLevel]){
      q=GAME_DATA.adventure[_gameState.advLevel].questions[_gameState.advQuestion];
    }
    if(q&&q.point){
      _gameState.items.hint--;
      var hintModal=document.createElement("div");
      hintModal.className="g-item-modal";
      hintModal.innerHTML='<div class="g-item-modal-content">'+
        '<div class="g-item-modal-icon">🔮</div>'+
        '<div class="g-item-modal-title">考点提示</div>'+
        '<div class="g-item-modal-text">'+q.point+'</div>'+
        '<button class="g-btn g-btn-primary" onclick="this.parentNode.parentNode.remove()">知道了</button>'+
      '</div>';
      document.body.appendChild(hintModal);
    }
  }else if(itemId==="revive"){
    if(_gameState.items.revive<=0)return;
    if(_gameState.hp>=_gameState.maxHp)return;
    _gameState.items.revive--;
    _gameState.hp=Math.min(_gameState.maxHp,_gameState.hp+50);
    _flashScreen("rgba(255,82,82,0.15)");
    _scorePopup("+50 HP","#ff5252");
    _refreshHUD();
  }else if(itemId==="freeze"){
    if(_gameState.items.freeze<=0)return;
    if(_gameState.mode!=="quickAnswer")return;
    _gameState.items.freeze--;
    _gameState.qaTimeLeft+=5;
    var bar=document.getElementById("qaTimer");
    if(bar){
      bar.style.transition="none";
      var curPct=Math.max(0,_gameState.qaTimeLeft/15*100);
      bar.style.width=curPct+"%";
      void bar.offsetWidth;
      bar.style.transition="width "+_gameState.qaTimeLeft+"s linear";
      bar.style.width="0%";
    }
    _scorePopup("+5秒","#00f0ff");
  }
}
function _toggleSound(){
  _gameState.soundOn=!_gameState.soundOn;
  if(_gameState.soundOn){_initAudio();_sfxClick();}
  _refreshHUD();
}
function _refreshHUD(){
  if(_gameState.screen==="advQuestion")_advRenderQuestion();
  else if(_gameState.screen==="findError")_feRender();
  else if(_gameState.screen==="quickAnswer")_qaRender();
  else if(_gameState.screen==="fillBlank")_fbRender();
}

// ==================== RPG角色系统 ====================
function _getChar(mood){
  var chars={
    idle:'<div class="g-char g-char-idle"><span class="g-char-face">🤖</span></div>',
    happy:'<div class="g-char g-char-happy"><span class="g-char-face">🤖</span><span class="g-char-emote">😄</span></div>',
    sad:'<div class="g-char g-char-sad"><span class="g-char-face">🤖</span><span class="g-char-emote">😢</span></div>',
    excited:'<div class="g-char g-char-excited"><span class="g-char-face">🤖</span><span class="g-char-emote">🤩</span></div>',
    thinking:'<div class="g-char g-char-thinking"><span class="g-char-face">🤖</span><span class="g-char-emote">🤔</span></div>',
    cool:'<div class="g-char g-char-cool"><span class="g-char-face">🤖</span><span class="g-char-emote">😎</span></div>'
  };
  return chars[mood]||chars.idle;
}

function _getCharSpeech(text){
  return '<div class="g-char-speech"><span class="g-char-name">小芯</span><span class="g-char-text">'+text+'</span></div>';
}

// ==================== HP/能量条 ====================
function _hpBar(){
  var pct=Math.max(0,Math.round(_gameState.hp/_gameState.maxHp*100));
  var color=pct>60?"#00e676":pct>30?"#ff9800":"#ff5252";
  return '<div class="g-hp-wrap">'+
    '<span class="g-hp-icon">❤️</span>'+
    '<div class="g-hp-bar">'+
      '<div class="g-hp-fill" style="width:'+pct+'%;background:'+color+';box-shadow:0 0 8px '+color+'"></div>'+
      '<span class="g-hp-text">'+_gameState.hp+'/'+_gameState.maxHp+'</span>'+
    '</div>'+
  '</div>';
}

// ==================== 连击系统 ====================
function _comboDisplay(){
  if(_gameState.combo<2)return"";
  var fire=_gameState.combo>=5?"🔥🔥🔥":_gameState.combo>=3?"🔥🔥":"🔥";
  return '<div class="g-combo '+(_gameState.combo>=3?"g-combo-hot":"")+'">'+
    '<span class="g-combo-num">'+_gameState.combo+'</span>'+
    '<span class="g-combo-label">连击</span>'+
    '<span class="g-combo-fire">'+fire+'</span>'+
  '</div>';
}

// ==================== 分数飘字 ====================
function _scorePopup(text,color){
  var c=document.getElementById("gameContent");if(!c)return;
  var p=document.createElement("div");
  p.className="g-score-popup";
  p.textContent=text;
  p.style.color=color||"#ffd700";
  p.style.left=(30+Math.random()*40)+"%";
  p.style.top="40%";
  c.appendChild(p);
  setTimeout(function(){if(p.parentNode)p.parentNode.removeChild(p);},1500);
}

// ==================== 屏幕闪烁 ====================
function _flashScreen(color){
  var c=document.getElementById("gameContent");if(!c)return;
  var f=document.createElement("div");
  f.className="g-flash";
  f.style.background=color||"rgba(0,230,118,0.2)";
  c.appendChild(f);
  setTimeout(function(){if(f.parentNode)f.parentNode.removeChild(f);},400);
}

// ==================== 屏幕震动 ====================
function _shakeScreen(){
  var c=document.getElementById("gameOverlay");
  if(c){c.classList.add("g-screen-shake");setTimeout(function(){c.classList.remove("g-screen-shake");},400);}
}

// ==================== RPG统计更新 ====================
function _rpgCorrect(){
  _gameState.combo++;
  if(_gameState.combo>_gameState.maxCombo)_gameState.maxCombo=_gameState.combo;
  _gameState.totalCorrect++;
  _gameState.totalAnswered++;
  _gameState.exp+=10+_gameState.combo*2;
  // 音效
  if(_gameState.combo>=3)_sfxCombo();else _sfxCorrect();
  // 升级检测
  var need=_gameState.level*100;
  if(_gameState.exp>=need){
    _gameState.exp-=need;
    _gameState.level++;
    _gameState.maxHp+=20;
    _gameState.hp=_gameState.maxHp;
    setTimeout(function(){_flashScreen("rgba(255,215,0,0.3)");_confetti();_sfxLevelUp();_scorePopup("⬆️ 升级！Lv."+_gameState.level,"#ffd700");},300);
  }
  _scorePopup("+"+(10+_gameState.combo*2)+" EXP","#00f0ff");
  // 道具掉落
  _itemDrop();
  // 成就检查
  _checkAchievements();
}

function _rpgWrong(){
  _gameState.combo=0;
  _gameState.totalAnswered++;
  _gameState.hp=Math.max(0,_gameState.hp-20);
  _shakeScreen();
  _flashScreen("rgba(255,82,82,0.2)");
  _scorePopup("-20 HP","#ff5252");
  _sfxWrong();
  _checkAchievements();
}

// ==================== 覆盖层管理 ====================
function _openGame(){
  _initAudio();
  _gameState.active=true;
  // 重置RPG状态
  _gameState.hp=100;_gameState.maxHp=100;_gameState.combo=0;_gameState.maxCombo=0;
  _gameState.totalCorrect=0;_gameState.totalAnswered=0;_gameState.exp=0;_gameState.level=1;
  _gameState.items={hint:0,revive:0,freeze:0};
  var ov=document.getElementById("gameOverlay");
  if(ov){ov.style.display="flex";ov.classList.add("game-fade-in");}
  _renderLobby();
}
function _closeGame(){
  _gameState.active=false;_gameState.mode=null;_gameState.screen=null;
  if(_gameState.qaTimer){clearInterval(_gameState.qaTimer);_gameState.qaTimer=null;}
  var ov=document.getElementById("gameOverlay");
  if(ov){ov.style.display="none";ov.classList.remove("game-fade-in");}
}
function _setScreen(html){
  var c=document.getElementById("gameContent");
  if(!c)return;
  c.innerHTML=html;
  c.classList.remove("screen-enter");
  void c.offsetWidth;
  c.classList.add("screen-enter");
  _renderGameMath();
}
function _renderGameMath(){
  var c=document.getElementById("gameContent");
  if(!c)return;
  if(typeof renderMathInElement==="function"){
    try{renderMathInElement(c,{delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false}],throwOnError:false,errorColor:"#cc0000"});}catch(e){}
  }
  if(typeof hljs!=="undefined"){
    c.querySelectorAll("pre code").forEach(function(b){try{hljs.highlightElement(b);}catch(e){}});
  }
}
function _stars(n,filled){var s="";for(var i=0;i<n;i++){s+=i<filled?'<span class="g-star g-star-fill">★</span>':'<span class="g-star">★</span>';}return s;}

// ==================== 通用HUD ====================
function _gameHUD(modeLabel,gradient,progText,scoreIcon,scoreVal){
  return '<div class="g-hud">'+
    '<div class="g-hud-left">'+
      '<span class="g-hud-level" style="background:'+gradient+'">'+modeLabel+'</span>'+
      '<span class="g-hud-prog">'+progText+'</span>'+
    '</div>'+
    '<div class="g-hud-right">'+
      _hpBar()+
      '<span class="g-hud-stars">'+scoreIcon+' '+scoreVal+'</span>'+
      _comboDisplay()+
      '<button class="g-btn-exit" onclick="_closeGame()">✕</button>'+
    '</div>'+
  '</div>'+_itemsBar();
}

// ==================== 粒子背景 ====================
function _createParticles(){
  var c=document.getElementById("gameParticles");
  if(!c)return;
  if(c.children.length>0)return;
  for(var i=0;i<30;i++){
    var p=document.createElement("div");
    p.className="g-particle";
    p.style.left=Math.random()*100+"%";
    p.style.top=Math.random()*100+"%";
    p.style.width=(2+Math.random()*4)+"px";
    p.style.height=p.style.width;
    p.style.animationDelay=(Math.random()*5)+"s";
    p.style.animationDuration=(3+Math.random()*4)+"s";
    c.appendChild(p);
  }
}

// ==================== 彩纸效果 ====================
function _confetti(){
  var c=document.getElementById("gameContent");if(!c)return;
  var colors=["#00f0ff","#ffd700","#a855f7","#00e676","#ff5252","#ff9800"];
  for(var i=0;i<40;i++){
    (function(){
      var p=document.createElement("div");
      p.className="g-confetti";
      p.style.left=Math.random()*100+"%";
      p.style.background=_rand(colors);
      p.style.animationDelay=(Math.random()*0.5)+"s";
      p.style.animationDuration=(1+Math.random())+"s";
      c.appendChild(p);
      setTimeout(function(){if(p.parentNode)p.parentNode.removeChild(p);},2500);
    })();
  }
}

// ==================== 大厅界面 ====================
function _renderLobby(){
  _gameState.mode="lobby";_gameState.screen="lobby";
  if(_gameState.qaTimer){clearInterval(_gameState.qaTimer);_gameState.qaTimer=null;}
  _createParticles();
  var modes=[
    {id:"adventure",icon:"🗺️",name:"专升本闯关大冒险",desc:"4关 × 5题 · 闯关得⭐",color:"linear-gradient(135deg,#00bcd4,#0288d1)",tag:"推荐"},
    {id:"findError",icon:"🔍",name:"考点消消乐",desc:"找Bug挑战 · 揪出高频坑点",color:"linear-gradient(135deg,#a855f7,#7c3aed)",tag:""},
    {id:"quickAnswer",icon:"⚡",name:"知识抢答",desc:"10秒限时 · 判断对错",color:"linear-gradient(135deg,#ff9800,#f57c00)",tag:"限时"},
    {id:"fillBlank",icon:"📝",name:"记忆背诵闯关",desc:"填空游戏 · 巩固公式概念",color:"linear-gradient(135deg,#e91e63,#c2185b)",tag:""}
  ];
  var cards="";
  for(var i=0;i<modes.length;i++){
    var m=modes[i];
    cards+='<div class="g-mode-card" style="--mc:'+m.color+'" onclick="_selectMode(\''+m.id+'\')">'+
      (m.tag?'<div class="g-mode-tag">'+m.tag+'</div>':'')+
      '<div class="g-mode-icon">'+m.icon+'</div>'+
      '<div class="g-mode-name">'+m.name+'</div>'+
      '<div class="g-mode-desc">'+m.desc+'</div>'+
      '<div class="g-mode-play">▶ 开始</div>'+
      '</div>';
  }
  // RPG状态栏
  var rpgBar='<div class="g-rpg-bar">'+
    '<div class="g-rpg-item"><span class="g-rpg-icon">⚡</span> Lv.'+_gameState.level+'</div>'+
    '<div class="g-rpg-item"><span class="g-rpg-icon">⭐</span> '+_gameState.totalCorrect+'题</div>'+
    '<div class="g-rpg-item"><span class="g-rpg-icon">🔥</span> 最高'+_gameState.maxCombo+'连击</div>'+
    '<div class="g-rpg-item g-rpg-ach" onclick="_showAchievementsList()"><span class="g-rpg-icon">🏆</span> '+_gameState.achievements.length+'/'+ACHIEVEMENTS.length+'</div>'+
  '</div>';
  _setScreen(
    '<div class="g-lobby">'+
      '<div class="g-lobby-header">'+
        '<div class="g-lobby-char">'+_getChar("cool")+_getCharSpeech("欢迎回来！选一个玩法开始吧～")+'</div>'+
        '<div class="g-lobby-badge">🎮 游戏化学习</div>'+
        '<h1 class="g-lobby-title">专升本·学习大冒险</h1>'+
        '<p class="g-lobby-sub">所有题目100%贴合山西专升本考纲 · 边玩边学</p>'+
        rpgBar+
      '</div>'+
      '<div class="g-mode-grid">'+cards+'</div>'+
      '<div class="g-lobby-footer">'+
        '<button class="g-btn g-btn-ghost" onclick="_closeGame()">← 返回答疑模式</button>'+
      '</div>'+
    '</div>'
  );
}

// ==================== 闯关大冒险 ====================
function _selectMode(mode){
  if(mode==="adventure")_advStart();
  else if(mode==="findError")_feStart();
  else if(mode==="quickAnswer")_qaStart();
  else if(mode==="fillBlank")_fbStart();
}

function _advStart(){
  _gameState.mode="adventure";_gameState.advLevel=0;_gameState.advQuestion=0;
  _gameState.advTotalStars=0;_gameState.advLevelStars=[0,0,0,0];
  _gameState.advWrongPoints=[];_gameState.advRetry=false;
  // 重置HP
  _gameState.hp=_gameState.maxHp;_gameState.combo=0;
  _advShowMap();
}

// 关卡地图
function _advShowMap(){
  _gameState.screen="advMap";
  var nodes="";
  for(var i=0;i<4;i++){
    var lv=GAME_DATA.adventure[i];
    var locked=i>_gameState.advLevel;
    var current=i===_gameState.advLevel;
    var status=current?"current":locked?"locked":"done";
    var stars=_gameState.advBestStars[i]||0;
    nodes+='<div class="g-map-node g-map-'+status+'" style="--nc:'+lv.gradient+'" onclick="'+(locked?'':'_advRenderQuestion()')+'">'+
      '<div class="g-map-icon">'+(locked?'🔒':lv.icon)+'</div>'+
      '<div class="g-map-label">'+lv.subject+'</div>'+
      '<div class="g-map-stars">'+(stars>0?_stars(5,stars):'')+'</div>'+
      (current?'<div class="g-map-here">📍 你在这里</div>':'')+
    '</div>';
    if(i<3)nodes+='<div class="g-map-path '+(i<_gameState.advLevel?"g-map-path-done":"")+'"></div>';
  }
  _setScreen(
    '<div class="g-game-wrap">'+
      _gameHUD("🗺️ 闯关大冒险","linear-gradient(135deg,#00bcd4,#0288d1)","关卡地图","⭐",_gameState.advTotalStars)+
      '<div class="g-map">'+
        '<div class="g-map-title">'+_getChar("excited")+_getCharSpeech("选择关卡开始冒险！")+'</div>'+
        '<div class="g-map-nodes">'+nodes+'</div>'+
      '</div>'+
      '<button class="g-btn g-btn-back" onclick="_renderLobby()">← 返回菜单</button>'+
    '</div>'
  );
}

function _advRenderQuestion(){
  _gameState.screen="advQuestion";
  var lv=GAME_DATA.adventure[_gameState.advLevel];
  var q=lv.questions[_gameState.advQuestion];
  var diffColor=q.difficulty==="基础题"?"#00e676":q.difficulty==="易错题"?"#ff9800":"#ff5252";
  var diffIcon=q.difficulty==="基础题"?"🌱":q.difficulty==="易错题"?"⚠️":"🔥";
  var opts="";
  for(var i=0;i<q.options.length;i++){
    var letter=q.options[i].charAt(0);
    opts+='<button class="g-opt-btn" onclick="_advAnswer(\''+letter+'\')">'+
      '<span class="g-opt-letter">'+letter+'</span>'+
      '<span class="g-opt-text">'+_md(q.options[i].substring(3))+'</span>'+
      '<span class="g-opt-arrow">→</span>'+
      '</button>';
  }
  var progress="";
  for(var j=0;j<5;j++){
    progress+='<div class="g-dot '+(j<_gameState.advQuestion?"g-dot-done":j===_gameState.advQuestion?"g-dot-current":"")+'"></div>';
  }
  _setScreen(
    '<div class="g-game-wrap">'+
      _gameHUD(lv.icon+" "+lv.subject,lv.gradient,"第"+(_gameState.advQuestion+1)+"/5题","⭐",_gameState.advTotalStars)+
      '<div class="g-progress-dots">'+progress+'</div>'+
      '<div class="g-q-card">'+
        '<div class="g-q-diff" style="color:'+diffColor+';border-color:'+diffColor+'">'+diffIcon+' '+q.difficulty+'</div>'+
        '<div class="g-q-text">'+_md(q.question)+'</div>'+
      '</div>'+
      '<div class="g-opts">'+opts+'</div>'+
      (_gameState.advRetry?'<div class="g-retry-hint">💡 再给一次机会，重新选择吧！</div>':'')+
      '<button class="g-btn g-btn-skip" onclick="_advAnswer(\'不会\')">不会，看解析</button>'+
      '<button class="g-btn g-btn-back" onclick="_renderLobby()">← 返回菜单</button>'+
    '</div>'
  );
}

function _advAnswer(answer){
  var lv=GAME_DATA.adventure[_gameState.advLevel];
  var q=lv.questions[_gameState.advQuestion];
  if(answer==="不会"){
    _gameState.advWrongPoints.push(q.point);_gameState.advRetry=false;
    _rpgWrong();
    _advShowFeedback(false,q,"没关系，来看看解析！");
    return;
  }
  var correct=_gcheck(answer,q.answer,q.type);
  if(correct){
    if(!_gameState.advRetry){_gameState.advTotalStars++;_gameState.advLevelStars[_gameState.advLevel]++;}
    _gameState.advRetry=false;
    _rpgCorrect();
    var encouragements=["太棒了！🎉","答对了！💪","厉害！⭐","完美！✨","Nice！","连击中！🔥"];
    var enc=_gameState.combo>=3?"🔥 "+_gameState.combo+"连击！太强了！":_rand(encouragements);
    _advShowFeedback(true,q,enc);
  }else{
    if(!_gameState.advRetry){
      _gameState.advRetry=true;
      _advShowRetry(q);
    }else{
      _gameState.advWrongPoints.push(q.point);_gameState.advRetry=false;
      _rpgWrong();
      _advShowFeedback(false,q,"没关系，记住了下次就会！💪");
    }
  }
}

function _advShowRetry(q){
  _flashScreen("rgba(255,152,0,0.15)");
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-feedback g-feedback-wrong">'+
        '<div class="g-feedback-char">'+_getChar("thinking")+'</div>'+
        '<div class="g-feedback-icon g-shake">❌</div>'+
        '<div class="g-feedback-title">答错了，再试一次！</div>'+
        '<div class="g-feedback-sub">💡 考点提示：'+(q.point||"")+'</div>'+
        '<button class="g-btn g-btn-primary" onclick="_advRenderQuestion()">再试一次</button>'+
        '<button class="g-btn g-btn-skip" onclick="_advAnswer(\'不会\')">不会，看解析</button>'+
      '</div>'+
    '</div>'
  );
}

function _advShowFeedback(correct,q,encouragement){
  _gameState.screen="advFeedback";
  if(correct){_confetti();_flashScreen("rgba(0,230,118,0.15)");}
  var charMood=correct?(_gameState.combo>=3?"excited":"happy"):"sad";
  var charSpeech=correct?"答对啦！继续加油！":"别灰心，记住这个考点！";
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-feedback '+(correct?"g-feedback-correct":"g-feedback-wrong")+'">'+
        '<div class="g-feedback-char">'+_getChar(charMood)+_getCharSpeech(charSpeech)+'</div>'+
        '<div class="g-feedback-icon '+(correct?"g-pop":"g-shake")+'">'+(correct?"✅":"📖")+'</div>'+
        '<div class="g-feedback-title">'+encouragement+'</div>'+
        '<div class="g-feedback-answer">正确答案：'+q.answer+'</div>'+
        '<div class="g-feedback-analysis">'+_md(q.analysis)+'</div>'+
        '<button class="g-btn g-btn-primary" onclick="_advNext()">下一题 →</button>'+
      '</div>'+
    '</div>'
  );
}

function _advNext(){
  _gameState.advQuestion++;
  if(_gameState.advQuestion>=5){
    _advLevelComplete();
  }else{
    _advRenderQuestion();
  }
}

function _advLevelComplete(){
  _gameState.screen="advLevelComplete";
  var lv=GAME_DATA.adventure[_gameState.advLevel];
  var stars=_gameState.advLevelStars[_gameState.advLevel];
  if(stars>_gameState.advBestStars[_gameState.advLevel])_gameState.advBestStars[_gameState.advLevel]=stars;
  _gameState.advUnlocked=Math.max(_gameState.advUnlocked,_gameState.advLevel+2);
  var msg=stars===5?"满分通关！太强了！🌟":stars>=3?"不错的表现，继续加油！💪":"这个科目还需要多练习哦！📚";
  if(stars>=3){_confetti();_flashScreen("rgba(255,215,0,0.2)");}
  var isLast=_gameState.advLevel>=3;
  // 3星以上可获得宝箱奖励
  var canGetChest=stars>=3;
  var nextCallback=isLast?"_advFinal()":"_advNextLevel()";
  var nextBtn=canGetChest?
    '<button class="g-btn g-btn-primary" onclick="_showChests(\''+nextCallback+'\')">🎁 开宝箱奖励</button>':
    '<button class="g-btn g-btn-primary" onclick="'+nextCallback+'">'+(isLast?'查看总成绩 🏆':'下一关 →')+'</button>';
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-level-complete">'+
        '<div class="g-feedback-char">'+_getChar("excited")+_getCharSpeech(stars>=3?"通关啦！你太厉害了！":"通关了，继续努力！")+'</div>'+
        '<div class="g-lc-icon" style="background:'+lv.gradient+'">'+lv.icon+'</div>'+
        '<div class="g-lc-title">第'+(_gameState.advLevel+1)+'关通关！</div>'+
        '<div class="g-lc-subject">'+lv.subject+'</div>'+
        '<div class="g-lc-stars">'+_stars(5,stars)+'</div>'+
        '<div class="g-lc-score">'+stars+' / 5</div>'+
        '<div class="g-lc-msg">'+msg+'</div>'+
        (canGetChest?'<div class="g-chest-hint">⭐ 3星以上通关 · 获得宝箱奖励！</div>':'')+
        nextBtn+
        '<button class="g-btn g-btn-back" onclick="_renderLobby()">返回菜单</button>'+
      '</div>'+
    '</div>'
  );
  _checkAchievements();
}

function _advNextLevel(){
  _gameState.advLevel++;_gameState.advQuestion=0;_gameState.advRetry=false;
  _advShowMap();
}

function _advFinal(){
  _gameState.screen="advFinal";
  var total=_gameState.advTotalStars;
  _confetti();setTimeout(_confetti,500);setTimeout(_confetti,1000);
  var breakdown="";
  for(var i=0;i<4;i++){
    var lv=GAME_DATA.adventure[i];
    breakdown+='<div class="g-final-row">'+
      '<span class="g-final-icon">'+lv.icon+'</span>'+
      '<span class="g-final-subject">'+lv.subject+'</span>'+
      '<span class="g-final-stars">'+_stars(5,_gameState.advLevelStars[i])+'</span>'+
      '<span class="g-final-score">'+_gameState.advLevelStars[i]+'/5</span>'+
      '</div>';
  }
  var weak="";
  if(_gameState.advWrongPoints.length>0){
    var seen={};var unique=[];
    for(var j=0;j<_gameState.advWrongPoints.length;j++){if(!seen[_gameState.advWrongPoints[j]]){seen[_gameState.advWrongPoints[j]]=true;unique.push(_gameState.advWrongPoints[j]);}}
    weak='<div class="g-final-weak"><div class="g-weak-title">📋 薄弱知识点</div>';
    for(var k=0;k<unique.length;k++)weak+='<div class="g-weak-item">• '+unique[k]+'</div>';
    weak+='<div class="g-weak-tip">💡 建议在答疑模式中输入关键词深入学习</div></div>';
  }
  // RPG统计
  var rpgStats='<div class="g-rpg-stats">'+
    '<div class="g-rpg-stat">⚡ 最高连击：'+_gameState.maxCombo+'</div>'+
    '<div class="g-rpg-stat">📊 正确率：'+(_gameState.totalAnswered>0?Math.round(_gameState.totalCorrect/_gameState.totalAnswered*100):0)+'%</div>'+
    '<div class="g-rpg-stat">🏆 等级：Lv.'+_gameState.level+'</div>'+
  '</div>';
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-final">'+
        '<div class="g-feedback-char">'+_getChar("cool")+_getCharSpeech("全部通关！你是真正的学霸！")+'</div>'+
        '<div class="g-final-trophy">🏆</div>'+
        '<div class="g-final-title">全部通关！</div>'+
        '<div class="g-final-total">'+total+' / 20 ⭐</div>'+
        rpgStats+
        '<div class="g-final-breakdown">'+breakdown+'</div>'+
        weak+
        '<div class="g-final-btns">'+
          '<button class="g-btn g-btn-primary" onclick="_advStart()">再玩一次</button>'+
          '<button class="g-btn g-btn-ghost" onclick="_closeGame()">返回答疑</button>'+
        '</div>'+
      '</div>'+
    '</div>'
  );
  _checkAchievements();
  _gameState.active=false;_gameState.mode=null;
}

// ==================== 考点消消乐 ====================
function _feStart(){
  _gameState.mode="findError";_gameState.feIndex=0;_gameState.feScore=0;
  _gameState.feTotal=GAME_DATA.findError.length;_gameState.feShowResult=false;
  _gameState.hp=_gameState.maxHp;_gameState.combo=0;
  _feRender();
}

function _feRender(){
  _gameState.screen="findError";
  var ch=GAME_DATA.findError[_gameState.feIndex];
  _setScreen(
    '<div class="g-game-wrap">'+
      _gameHUD("🔍 考点消消乐","linear-gradient(135deg,#a855f7,#7c3aed)","第"+(_gameState.feIndex+1)+"/"+_gameState.feTotal+"题","✅",_gameState.feScore)+
      '<div class="g-q-card">'+
        '<div class="g-q-diff" style="color:#a855f7;border-color:#a855f7">'+ch.type+' · '+ch.title+'</div>'+
        '<div class="g-fe-code">'+_md(ch.code)+'</div>'+
        '<div class="g-fe-hint">💡 '+ch.hint+'</div>'+
      '</div>'+
      '<div class="g-fe-input-wrap">'+
        '<input type="text" id="feInput" class="g-text-input" placeholder="输入你找到的错误..." />'+
        '<button class="g-btn g-btn-primary" onclick="_feSubmit()">提交</button>'+
      '</div>'+
      '<button class="g-btn g-btn-skip" onclick="_feShowResult(false)">查看答案</button>'+
      '<button class="g-btn g-btn-back" onclick="_renderLobby()">← 返回菜单</button>'+
    '</div>'
  );
  var inp=document.getElementById("feInput");
  if(inp){inp.focus();inp.addEventListener("keypress",function(e){if(e.key==="Enter")_feSubmit();});}
}

function _feSubmit(){
  var inp=document.getElementById("feInput");
  if(!inp)return;
  var ans=inp.value.trim();
  if(!ans){inp.style.borderColor="#ff5252";return;}
  var ch=GAME_DATA.findError[_gameState.feIndex];
  var userAns=ans.toLowerCase();var errorText=ch.errors.toLowerCase();
  var keyTerms=errorText.match(/[\u4e00-\u9fa5a-z]{2,}/g)||[];
  var match=false;
  for(var i=0;i<keyTerms.length;i++){if(keyTerms[i].length>=2&&userAns.indexOf(keyTerms[i])>=0){match=true;break;}}
  _feShowResult(match);
}

function _feShowResult(correct){
  var ch=GAME_DATA.findError[_gameState.feIndex];
  if(correct){_gameState.feScore++;_rpgCorrect();_confetti();_flashScreen("rgba(0,230,118,0.15)");}
  else{_rpgWrong();}
  var charMood=correct?"excited":"sad";
  var charSpeech=correct?"找对了！你有一双火眼金睛！":"没关系，看看正确答案！";
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-feedback '+(correct?"g-feedback-correct":"g-feedback-wrong")+'">'+
        '<div class="g-feedback-char">'+_getChar(charMood)+_getCharSpeech(charSpeech)+'</div>'+
        '<div class="g-feedback-icon '+(correct?"g-pop":"g-shake")+'">'+(correct?"✅":"📖")+'</div>'+
        '<div class="g-feedback-title">'+(correct?"找对了！太厉害了！":"来看看正确答案")+'</div>'+
        '<div class="g-feedback-section"><strong>错误所在：</strong></div>'+
        '<div class="g-feedback-content">'+_md(ch.errors)+'</div>'+
        '<div class="g-feedback-section"><strong>正确写法：</strong></div>'+
        '<div class="g-feedback-content">'+_md(ch.correctCode)+'</div>'+
        '<div class="g-feedback-section"><strong>考点解析：</strong></div>'+
        '<div class="g-feedback-content">'+_md(ch.explanation)+'</div>'+
        '<button class="g-btn g-btn-primary" onclick="_feNext()">下一题 →</button>'+
      '</div>'+
    '</div>'
  );
}

function _feNext(){
  _gameState.feIndex++;
  if(_gameState.feIndex>=_gameState.feTotal){
    _gameComplete("考点消消乐",_gameState.feScore,_gameState.feTotal,"🔍");
  }else{
    _feRender();
  }
}

// ==================== 知识抢答（带倒计时） ====================
function _qaStart(){
  _gameState.mode="quickAnswer";_gameState.qaIndex=0;_gameState.qaScore=0;
  _gameState.qaTotal=GAME_DATA.quickAnswer.length;_gameState.qaAnswered=false;
  _gameState.hp=_gameState.maxHp;_gameState.combo=0;
  _qaRender();
}

function _qaRender(){
  _gameState.screen="quickAnswer";_gameState.qaAnswered=false;
  _gameState.qaTimeLeft=10;
  var q=GAME_DATA.quickAnswer[_gameState.qaIndex];
  _setScreen(
    '<div class="g-game-wrap">'+
      _gameHUD("⚡ 知识抢答","linear-gradient(135deg,#ff9800,#f57c00)","第"+(_gameState.qaIndex+1)+"/"+_gameState.qaTotal+"题","✅",_gameState.qaScore)+
      '<div class="g-timer-bar"><div class="g-timer-fill" id="qaTimer"></div><span class="g-timer-text" id="qaTimerText">10s</span></div>'+
      '<div class="g-qa-card">'+
        '<div class="g-qa-label">⚡ 快速判断（10秒内作答！）</div>'+
        '<div class="g-qa-question">'+_md(q.question)+'</div>'+
      '</div>'+
      '<div class="g-qa-btns">'+
        '<button class="g-qa-btn g-qa-true" onclick="_qaAnswer(\'对\')">✓ 对</button>'+
        '<button class="g-qa-btn g-qa-false" onclick="_qaAnswer(\'错\')">✗ 错</button>'+
      '</div>'+
      '<button class="g-btn g-btn-back" onclick="_renderLobby()">← 返回菜单</button>'+
    '</div>'
  );
  _qaStartTimer();
}

function _qaStartTimer(){
  if(_gameState.qaTimer)clearInterval(_gameState.qaTimer);
  var bar=document.getElementById("qaTimer");
  var text=document.getElementById("qaTimerText");
  _gameState.qaTimeLeft=10;
  if(bar){bar.style.transition="none";bar.style.width="100%";void bar.offsetWidth;bar.style.transition="width 10s linear";bar.style.width="0%";}
  _gameState.qaTimer=setInterval(function(){
    _gameState.qaTimeLeft--;
    if(text)text.textContent=_gameState.qaTimeLeft+"s";
    if(_gameState.qaTimeLeft<=3&&text){text.style.color="#ff5252";text.classList.add("g-timer-urgent");_sfxTick();}
    if(_gameState.qaTimeLeft<=0){
      clearInterval(_gameState.qaTimer);_gameState.qaTimer=null;
      if(!_gameState.qaAnswered)_qaAnswer("超时");
    }
  },1000);
}

function _qaAnswer(answer){
  if(_gameState.qaAnswered)return;
  _gameState.qaAnswered=true;
  if(_gameState.qaTimer){clearInterval(_gameState.qaTimer);_gameState.qaTimer=null;}
  var q=GAME_DATA.quickAnswer[_gameState.qaIndex];
  var correct;
  if(answer==="超时"){
    correct=false;
    _rpgWrong();
  }else{
    correct=_gcheck(answer,q.answer,"判断题");
    if(correct){_gameState.qaScore++;_rpgCorrect();_confetti();_flashScreen("rgba(0,230,118,0.15)");}
    else{_rpgWrong();}
  }
  var charMood=correct?(_gameState.combo>=3?"excited":"happy"):"sad";
  var title=answer==="超时"?"时间到！⏰":correct?"反应真快！⚡":"再想想~";
  var charSpeech=correct?"答对啦！手速真快！":answer==="超时"?"超时了，下次快点！":"别灰心，记住这个知识点！";
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-feedback '+(correct?"g-feedback-correct":"g-feedback-wrong")+'">'+
        '<div class="g-feedback-char">'+_getChar(charMood)+_getCharSpeech(charSpeech)+'</div>'+
        '<div class="g-feedback-icon '+(correct?"g-pop":"g-shake")+'">'+(correct?"✅":"❌")+'</div>'+
        '<div class="g-feedback-title">'+title+'</div>'+
        '<div class="g-feedback-answer">正确答案：'+q.answer+'</div>'+
        '<div class="g-feedback-analysis">'+_md(q.explanation)+'</div>'+
        '<button class="g-btn g-btn-primary" onclick="_qaNext()">下一题 →</button>'+
      '</div>'+
    '</div>'
  );
}

function _qaNext(){
  _gameState.qaIndex++;
  if(_gameState.qaIndex>=_gameState.qaTotal){
    _gameComplete("知识抢答",_gameState.qaScore,_gameState.qaTotal,"⚡");
  }else{
    _qaRender();
  }
}

// ==================== 记忆背诵闯关 ====================
function _fbStart(){
  _gameState.mode="fillBlank";_gameState.fbIndex=0;_gameState.fbScore=0;
  _gameState.fbTotal=GAME_DATA.fillBlank.length;
  _gameState.hp=_gameState.maxHp;_gameState.combo=0;
  _fbRender();
}

function _fbRender(){
  _gameState.screen="fillBlank";
  var q=GAME_DATA.fillBlank[_gameState.fbIndex];
  _setScreen(
    '<div class="g-game-wrap">'+
      _gameHUD("📝 记忆背诵","linear-gradient(135deg,#e91e63,#c2185b)","第"+(_gameState.fbIndex+1)+"/"+_gameState.fbTotal+"题","✅",_gameState.fbScore)+
      '<div class="g-q-card">'+
        '<div class="g-q-diff" style="color:#e91e63;border-color:#e91e63">📝 填空题</div>'+
        '<div class="g-q-text">'+_md(q.question)+'</div>'+
      '</div>'+
      '<div class="g-fe-input-wrap">'+
        '<input type="text" id="fbInput" class="g-text-input" placeholder="输入你的答案..." />'+
        '<button class="g-btn g-btn-primary" onclick="_fbSubmit()">提交</button>'+
      '</div>'+
      '<button class="g-btn g-btn-skip" onclick="_fbShowResult(false)">查看答案</button>'+
      '<button class="g-btn g-btn-back" onclick="_renderLobby()">← 返回菜单</button>'+
    '</div>'
  );
  var inp=document.getElementById("fbInput");
  if(inp){inp.focus();inp.addEventListener("keypress",function(e){if(e.key==="Enter")_fbSubmit();});}
}

function _fbSubmit(){
  var inp=document.getElementById("fbInput");
  if(!inp)return;
  var ans=inp.value.trim();
  if(!ans){inp.style.borderColor="#ff5252";return;}
  var q=GAME_DATA.fillBlank[_gameState.fbIndex];
  _fbShowResult(_gcheck(ans,q.answer,"填空题"));
}

function _fbShowResult(correct){
  var q=GAME_DATA.fillBlank[_gameState.fbIndex];
  if(correct){_gameState.fbScore++;_rpgCorrect();_confetti();_flashScreen("rgba(0,230,118,0.15)");}
  else{_rpgWrong();}
  var charMood=correct?"happy":"sad";
  var charSpeech=correct?"背对了！记忆力真好！":"没关系，多背几遍就记住了！";
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-feedback '+(correct?"g-feedback-correct":"g-feedback-wrong")+'">'+
        '<div class="g-feedback-char">'+_getChar(charMood)+_getCharSpeech(charSpeech)+'</div>'+
        '<div class="g-feedback-icon '+(correct?"g-pop":"g-shake")+'">'+(correct?"✅":"📖")+'</div>'+
        '<div class="g-feedback-title">'+(correct?"背对了！🧠":"再想想~")+'</div>'+
        '<div class="g-feedback-answer">正确答案：'+q.answer+'</div>'+
        '<div class="g-feedback-analysis">'+_md(q.explanation)+'</div>'+
        '<button class="g-btn g-btn-primary" onclick="_fbNext()">下一题 →</button>'+
      '</div>'+
    '</div>'
  );
}

function _fbNext(){
  _gameState.fbIndex++;
  if(_gameState.fbIndex>=_gameState.fbTotal){
    _gameComplete("记忆背诵闯关",_gameState.fbScore,_gameState.fbTotal,"📝");
  }else{
    _fbRender();
  }
}

// ==================== 成就列表弹窗 ====================
function _showAchievementsList(){
  _sfxClick();
  var items="";
  for(var i=0;i<ACHIEVEMENTS.length;i++){
    var a=ACHIEVEMENTS[i];
    var unlocked=_gameState.achievements.indexOf(a.id)>=0;
    items+='<div class="g-ach-list-item '+(unlocked?"":"g-ach-locked")+'">'+
      '<div class="g-ach-list-icon">'+(unlocked?a.icon:"🔒")+'</div>'+
      '<div class="g-ach-list-info">'+
        '<div class="g-ach-list-name">'+a.name+'</div>'+
        '<div class="g-ach-list-desc">'+a.desc+'</div>'+
      '</div>'+
      (unlocked?'<div class="g-ach-list-check">✓</div>':'')+
    '</div>';
  }
  var modal=document.createElement("div");
  modal.className="g-item-modal";
  modal.innerHTML='<div class="g-item-modal-content g-ach-modal">'+
    '<div class="g-ach-modal-title">🏆 成就列表 <span class="g-ach-modal-count">'+_gameState.achievements.length+'/'+ACHIEVEMENTS.length+'</span></div>'+
    '<div class="g-ach-list">'+items+'</div>'+
    '<button class="g-btn g-btn-primary" onclick="this.parentNode.parentNode.remove()">关闭</button>'+
  '</div>';
  document.body.appendChild(modal);
}

// ==================== 宝箱系统 ====================
var _chestData={chests:[],callback:""};
function _showChests(callback){
  var chests=[
    {reward:"exp",icon:"💎",name:"经验宝石",desc:"+30 EXP",color:"#00f0ff"},
    {reward:"hp",icon:"❤️",name:"生命药水",desc:"满血恢复",color:"#ff5252"},
    {reward:"item",icon:"🎁",name:"神秘道具",desc:"随机道具×1",color:"#a855f7"}
  ];
  // 随机打乱
  chests.sort(function(){return Math.random()-0.5;});
  _chestData.chests=chests;
  _chestData.callback=callback;
  var cards="";
  for(var i=0;i<chests.length;i++){
    cards+='<div class="g-chest" onclick="_openChest('+i+')">'+
      '<div class="g-chest-box" style="--cc:'+chests[i].color+'">📦</div>'+
      '<div class="g-chest-label">宝箱 '+(i+1)+'</div>'+
    '</div>';
  }
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-chest-screen">'+
        '<div class="g-feedback-char">'+_getChar("excited")+_getCharSpeech("选一个宝箱打开！")+'</div>'+
        '<div class="g-chest-title">🎁 选择一个宝箱！</div>'+
        '<div class="g-chest-sub">通关奖励 · 只能选一个</div>'+
        '<div class="g-chests">'+cards+'</div>'+
      '</div>'+
    '</div>'
  );
}

function _openChest(index){
  _sfxChest();
  var c=_chestData.chests[index];
  var rewardHtml="";
  if(c.reward==="exp"){
    _gameState.exp+=30;
    rewardHtml='<div class="g-chest-reward-icon">💎</div><div class="g-chest-reward-name">经验宝石</div><div class="g-chest-reward-desc">+30 EXP</div>';
    _scorePopup("+30 EXP","#00f0ff");
  }else if(c.reward==="hp"){
    _gameState.hp=_gameState.maxHp;
    rewardHtml='<div class="g-chest-reward-icon">❤️</div><div class="g-chest-reward-name">生命药水</div><div class="g-chest-reward-desc">HP满血恢复！</div>';
    _flashScreen("rgba(255,82,82,0.15)");
  }else if(c.reward==="item"){
    var item=_rand(ITEMS);
    _gameState.items[item.id]++;
    rewardHtml='<div class="g-chest-reward-icon">'+item.icon+'</div><div class="g-chest-reward-name">'+item.name+'</div><div class="g-chest-reward-desc">道具×1</div>';
    _scorePopup("🎁 "+item.icon+item.name+"！","#a855f7");
  }
  _confetti();
  setTimeout(function(){
    _setScreen(
      '<div class="g-game-wrap">'+
        '<div class="g-chest-result">'+
          '<div class="g-feedback-char">'+_getChar("happy")+_getCharSpeech("收获满满！")+'</div>'+
          '<div class="g-chest-opened" style="--cc:'+c.color+'">📦</div>'+
          rewardHtml+
          '<button class="g-btn g-btn-primary" onclick="'+_chestData.callback+'">继续 →</button>'+
        '</div>'+
      '</div>'
    );
    _checkAchievements();
  },600);
}

// ==================== 通用完成界面 ====================
function _gameComplete(name,score,total,icon){
  _gameState.screen="complete";
  var pct=Math.round(score/total*100);
  var msg=pct===100?"全对！太强了！🌟":pct>=70?"不错！大部分都掌握了！💪":"继续加油，多练习！📚";
  if(pct>=70){_confetti();_flashScreen("rgba(255,215,0,0.2)");}
  var canGetChest=pct>=70;
  var rpgStats='<div class="g-rpg-stats">'+
    '<div class="g-rpg-stat">⚡ 最高连击：'+_gameState.maxCombo+'</div>'+
    '<div class="g-rpg-stat">📊 正确率：'+(_gameState.totalAnswered>0?Math.round(_gameState.totalCorrect/_gameState.totalAnswered*100):0)+'%</div>'+
    '<div class="g-rpg-stat">🏆 等级：Lv.'+_gameState.level+'</div>'+
  '</div>';
  var playAgainBtn=canGetChest?
    '<button class="g-btn g-btn-primary" onclick="_showChests(\'_renderLobby()\')">🎁 开宝箱奖励</button>':
    '<button class="g-btn g-btn-primary" onclick="_renderLobby()">再玩一次</button>';
  _setScreen(
    '<div class="g-game-wrap">'+
      '<div class="g-complete">'+
        '<div class="g-feedback-char">'+_getChar(pct>=70?"excited":"thinking")+_getCharSpeech(pct>=70?"太棒了！你完成了挑战！":"继续努力，下次会更好！")+'</div>'+
        '<div class="g-complete-icon">'+icon+'</div>'+
        '<div class="g-complete-title">'+name+' 完成！</div>'+
        '<div class="g-complete-score">'+score+' / '+total+'</div>'+
        '<div class="g-complete-stars">'+_stars(total,score)+'</div>'+
        rpgStats+
        '<div class="g-complete-msg">'+msg+'</div>'+
        (canGetChest?'<div class="g-chest-hint">⭐ 70%以上正确率 · 获得宝箱奖励！</div>':'')+
        '<div class="g-complete-btns">'+
          playAgainBtn+
          '<button class="g-btn g-btn-ghost" onclick="_closeGame()">返回答疑</button>'+
        '</div>'+
      '</div>'+
    '</div>'
  );
  _checkAchievements();
  _gameState.active=false;_gameState.mode=null;
}

// ==================== 聊天集成 ====================
function handleGameInput(query){
  query=(query||"").trim();
  if(!query)return null;
  if(_isGameExit(query)&&_gameState.active){_closeGame();return"👋 已退出游戏模式。有什么学习问题尽管问我！";}
  if(!_gameState.active){
    if(_isGameTrigger(query)){
      _openGame();
      return "🎮 已进入游戏化学习模式！选择一个玩法开始边玩边学吧～";
    }
    return null;
  }
  return null;
}
