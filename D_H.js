const circuitsDsaData = {
  // === 1. دوائر كهربائية (Circuits) - قريباً ===

  // === 2. هياكل البيانات وخوارزميات الشبكات (DSA) ===
  "dsa_theory_midterm_mcq": [
    {
      q: "i) If each node has a data field and a reference field to another node called next or successor, the sequence of nodes is referred to as a ________",
      qAr: "إذا كانت كل عقدة تحتوي على حقل بيانات وحقل مرجعي لعقدة أخرى يُسمى \"التالي\" (next) أو \"اللاحق\" (successor)، فإن تسلسل هذه العقد يُسمى ________.",
      options: [
        {txt: "(a) Queue", ar: "طابور"},
        {txt: "(b) Recursion", ar: "استدعاء ذاتي"},
        {txt: "(c) Singly Linked List", ar: "قائمة مترابطة أحادية"},
        {txt: "(d) Stack", ar: "مكدس"}
      ],
      ans: 2
    },
    {
      q: "ii) The ________ data structure is called a First In First Out (FIFO) data structure.",
      qAr: "هيكل البيانات الذي يُطلق عليه هيكل \"أول من يدخل، أول من يخرج\" (FIFO) هو ________.",
      options: [
        {txt: "(a) List", ar: "قائمة"},
        {txt: "(b) Queue", ar: "طابور"},
        {txt: "(c) Stack", ar: "مكدس"},
        {txt: "(d) LinkedList", ar: "قائمة مترابطة"}
      ],
      ans: 1
    },
    {
      q: "iii) Nodes in a tree with the same parent are called ________",
      qAr: "العقد في الشجرة التي تمتلك نفس الأب تُسمى ________.",
      options: [
        {txt: "(a) Siblings", ar: "أشقاء / إخوة"},
        {txt: "(b) Depth", ar: "عمق"},
        {txt: "(c) Height", ar: "ارتفاع"},
        {txt: "(d) Position", ar: "موقع"}
      ],
      ans: 0
    },
    {
      q: "iv) The complexity of following structure code is ________",
      qAr: "التعقيد الزمني للكود التالي هو ________.",
      code: "for (int i = 0; i < n; i++)\n    sum = sum - 1;",
      options: [
        {txt: "(a) O(n)", ar: "O(n)"},
        {txt: "(b) O(n²)", ar: "O(n²)"},
        {txt: "(c) O(n³)", ar: "O(n³)"},
        {txt: "(d) O(log n)", ar: "O(log n)"}
      ],
      ans: 0
    },
    {
      q: "v) Which one of the following is not a Queue operation?",
      qAr: "أي مما يلي لا يُعد من عمليات الطابور (Queue)؟",
      options: [
        {txt: "(a) Enqueue", ar: "إضافة للطابور"},
        {txt: "(b) Dequeue", ar: "حذف من الطابور"},
        {txt: "(c) GetHead", ar: "جلب العنصر الأول"},
        {txt: "(d) PutHead", ar: "وضع في الرأس (ليست ضمن الطابور)"}
      ],
      ans: 3
    },
    {
      q: "vi) The last element that is pushed into the ________, is the first element to be popped out of it.",
      qAr: "العنصر الأخير الذي يتم إدخاله (pushed) في ________، هو أول عنصر يتم إخراجه (popped) منه.",
      options: [
        {txt: "(a) List", ar: "قائمة"},
        {txt: "(b) Stack", ar: "مكدس"},
        {txt: "(c) Queue", ar: "طابور"},
        {txt: "(d) Circular Queue", ar: "طابور دائري"}
      ],
      ans: 1
    },
    {
      q: "1) Which of the following represents the tight upper bound of an algorithm's running time?",
      qAr: "أي مما يلي يمثل الحد الأعلى الدقيق (Upper Bound) لوقت تشغيل الخوارزمية؟",
      options: [
        {txt: "(a) Big-Omega (Ω)", ar: "أوميغا الكبرى"},
        {txt: "(b) Big-O (O)", ar: "O الكبرى"},
        {txt: "(c) Big-Theta (Θ)", ar: "ثيتا الكبرى"},
        {txt: "(d) Little-o (o)", ar: "o الصغرى"}
      ],
      ans: 1
    },
    {
      q: "2) What is the time complexity of accessing an element by index in an Array?",
      qAr: "ما هو التعقيد الزمني للوصول إلى عنصر عن طريق الفهرس (Index) في المصفوفة؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 0
    },
    {
      q: "3) In a Singly Linked List, inserting a node at the head takes ________ time.",
      qAr: "في القائمة المترابطة الأحادية، إدراج عقدة في الرأس (Head) يستغرق وقتاً بقيمة ________.",
      options: [
        {txt: "(a) O(n)", ar: "O(n)"},
        {txt: "(b) O(1)", ar: "O(1)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 1
    },
    {
      q: "4) Deleting the last node in a Singly Linked List with only a head reference takes ________ time.",
      qAr: "حذف العقدة الأخيرة في قائمة مترابطة أحادية بوجود مرجع للرأس فقط يستغرق وقتاً بقيمة ________.",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 1
    },
    {
      q: "5) What happens if a recursive function does not have a Base Case?",
      qAr: "ماذا يحدث إذا كانت الدالة التكرارية (Recursion) لا تحتوي على حالة أساس (Base Case)؟",
      options: [
        {txt: "(a) It runs faster", ar: "تعمل بشكل أسرع"},
        {txt: "(b) It causes Stack Overflow", ar: "تسبب تجاوز سعة المكدس"},
        {txt: "(c) It returns null", ar: "تُرجع قيمة فارغة"},
        {txt: "(d) It terminates successfully", ar: "تنتهي بنجاح"}
      ],
      ans: 1
    },
    {
      q: "6) Which linked list structure has its tail node pointing back to the head node?",
      qAr: "أي بنية قائمة مترابطة يشير فيها عنصر الذيل (Tail) إلى عنصر الرأس (Head)؟",
      options: [
        {txt: "(a) Singly Linked List", ar: "قائمة مترابطة أحادية"},
        {txt: "(b) Doubly Linked List", ar: "قائمة مترابطة مزدوجة"},
        {txt: "(c) Circularly Linked List", ar: "قائمة مترابطة دائرية"},
        {txt: "(d) Stack", ar: "مكدس"}
      ],
      ans: 2
    },
    {
      q: "7) Doubly Linked List uses two dummy nodes called Header and Trailer to avoid ________",
      qAr: "تستخدم القائمة المترابطة المزدوجة عقدتين وهميتين تُسمى Header و Trailer لتجنب ________.",
      options: [
        {txt: "(a) O(n) complexity", ar: "تعقيد O(n)"},
        {txt: "(b) Edge Cases / Boundary conditions", ar: "الحالات الحدية"},
        {txt: "(c) Memory allocation", ar: "تخصيص الذاكرة"},
        {txt: "(d) Recursion", ar: "الاستدعاء الذاتي"}
      ],
      ans: 1
    },
    {
      q: "8) What is the Big-O time complexity of Binary Search?",
      qAr: "ما هو التعقيد الزمني بترميز Big-O للبحث الثنائي (Binary Search)؟",
      options: [
        {txt: "(a) O(n)", ar: "O(n)"},
        {txt: "(b) O(1)", ar: "O(1)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n log n)", ar: "O(n log n)"}
      ],
      ans: 2
    },
    {
      q: "9) In a Doubly Linked List, each node contains ________ pointers.",
      qAr: "في القائمة المترابطة المزدوجة، تحتوي كل عقدة على ________ مؤشر/مؤشرات.",
      options: [
        {txt: "(a) One", ar: "واحد"},
        {txt: "(b) Two", ar: "اثنان"},
        {txt: "(c) Three", ar: "ثلاثة"},
        {txt: "(d) Zero", ar: "صفر"}
      ],
      ans: 1
    },
    {
      q: "10) What is the time complexity of the following code snippet?",
      qAr: "ما هو التعقيد الزمني لقطع الكود البرمجي التالية؟",
      code: "for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        count++;\n    }\n}",
      options: [
        {txt: "(a) O(n)", ar: "O(n)"},
        {txt: "(b) O(n²)", ar: "O(n²)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(1)", ar: "O(1)"}
      ],
      ans: 1
    },
    {
      q: "11) Which case represents the maximum amount of time an algorithm can take?",
      qAr: "أي حالة تمثل الحد الأقصى من الوقت الذي يمكن أن تستغرقه الخوارزمية؟",
      options: [
        {txt: "(a) Best Case", ar: "أفضل حالة"},
        {txt: "(b) Average Case", ar: "الحالة المتوسطة"},
        {txt: "(c) Worst Case", ar: "أسوأ حالة"},
        {txt: "(d) Expected Case", ar: "الحالة المتوقعة"}
      ],
      ans: 2
    },
    {
      q: "12) In a Circular Linked List with a tail pointer, inserting at the head takes ________ time.",
      qAr: "في القائمة المترابطة الدائرية مع وجود مؤشر للذيل (tail)، فإن الإدراج في الرأس يستغرق وقتاً بقيمة ________.",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(n²)", ar: "O(n²)"},
        {txt: "(d) O(log n)", ar: "O(log n)"}
      ],
      ans: 0
    },
    {
      q: "13) Which data structure has fixed size allocation upon declaration?",
      qAr: "أي هيكل بيانات يمتلك حجماً ثابتاً ومُحدد عند الإعلان عنه؟",
      options: [
        {txt: "(a) Singly Linked List", ar: "قائمة مترابطة أحادية"},
        {txt: "(b) Array", ar: "مصفوفة"},
        {txt: "(c) Doubly Linked List", ar: "قائمة مترابطة مزدوجة"},
        {txt: "(d) Binary Tree", ar: "شجرة ثنائية"}
      ],
      ans: 1
    },
    {
      q: "14) What is the worst-case complexity of Linear Search?",
      qAr: "ما هو تعقيد أسوأ حالة للبحث الخطي (Linear Search)؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(log n)", ar: "O(log n)"},
        {txt: "(c) O(n)", ar: "O(n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 2
    },
    {
      q: "15) Modern CPUs use ________ linked lists for Round-Robin process scheduling.",
      qAr: "تستخدم المعالجات الحديثة القوائم المترابطة ________ وجدولة العمليات بنظام Round-Robin.",
      options: [
        {txt: "(a) Singly", ar: "أحادية"},
        {txt: "(b) Doubly", ar: "مزدوجة"},
        {txt: "(c) Circularly", ar: "دائرية"},
        {txt: "(d) Static", ar: "ثابتة"}
      ],
      ans: 2
    },
    {
      q: "16) In recursion, the problem is broken down into ________ instances of itself.",
      qAr: "في الاستدعاء الذاتي (Recursion)، يتم تقسيم المشكلة إلى حالات ________ من نفسها.",
      options: [
        {txt: "(a) Larger", ar: "أكبر"},
        {txt: "(b) Equal", ar: "مساوية"},
        {txt: "(c) Smaller", ar: "أصغر"},
        {txt: "(d) Independent", ar: "مستقلة"}
      ],
      ans: 2
    },
    {
      q: "17) What is the space complexity of an Array storing n elements?",
      qAr: "ما هو التعقيد المكاني (Space Complexity) لمصفوفة تخزن n من العناصر؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(n²)", ar: "O(n²)"},
        {txt: "(d) O(log n)", ar: "O(log n)"}
      ],
      ans: 1
    },
    {
      q: "18) What is the time complexity of updating an existing element at index k in an Array?",
      qAr: "ما هو التعقيد الزمني لتحديث عنصر موجود في الفهرس k داخل مصفوفة؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(k)", ar: "O(k)"},
        {txt: "(c) O(n)", ar: "O(n)"},
        {txt: "(d) O(log n)", ar: "O(log n)"}
      ],
      ans: 0
    },
    {
      q: "19) Which principle does a Stack follow?",
      qAr: "ما هو المبدأ الذي يتبعه المكدس (Stack)؟",
      options: [
        {txt: "(a) FIFO (First In First Out)", ar: "أول من يدخل أول من يخرج"},
        {txt: "(b) LIFO (Last In First Out)", ar: "آخر من يدخل أول من يخرج"},
        {txt: "(c) LILO (Last In Last Out)", ar: "آخر من يدخل آخر من يخرج"},
        {txt: "(d) Random Access", ar: "الوصول العشوائي"}
      ],
      ans: 1
    },
    {
      q: "20) Adding an element to a Stack is called ________",
      qAr: "إضافة عنصر إلى المكدس تُسمى ________.",
      options: [
        {txt: "(a) Pop", ar: "سحب"},
        {txt: "(b) Enqueue", ar: "إضافة للطابور"},
        {txt: "(c) Push", ar: "دفع"},
        {txt: "(d) Dequeue", ar: "حذف من الطابور"}
      ],
      ans: 2
    },
    {
      q: "21) Removing an element from a Queue is called ________",
      qAr: "إزالة عنصر من الطابور (Queue) تُسمى ________.",
      options: [
        {txt: "(a) Push", ar: "دفع"},
        {txt: "(b) Pop", ar: "سحب"},
        {txt: "(c) Dequeue", ar: "حذف من الطابور"},
        {txt: "(d) GetTop", ar: "جلب القمة"}
      ],
      ans: 2
    },
    {
      q: "22) Evaluating a Postfix Expression is a common application of ________",
      qAr: "تقييم التعبير المكتوب بالصيغة اللاحقة (Postfix) يُعد تطبيقاً شائعاً لـ ________.",
      options: [
        {txt: "(a) Queue", ar: "طابور"},
        {txt: "(b) Stack", ar: "مكدس"},
        {txt: "(c) BST", ar: "شجرة بحث ثنائية"},
        {txt: "(d) Array", ar: "مصفوفة"}
      ],
      ans: 1
    },
    {
      q: "23) What is the time complexity of the Push operation in a Stack?",
      qAr: "ما هو التعقيد الزمني لعملية الإدخال (Push) في المكدس؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 0
    },
    {
      q: "24) In an array-based Queue implementation, using a Circular Array prevents ________",
      qAr: "عند تمثيل الطابور باستخدام مصفوفة، فإن استخدام المصفوفة الدائرية يمنع ________.",
      options: [
        {txt: "(a) O(1) performance", ar: "أداء O(1)"},
        {txt: "(b) Unnecessary element shifting (O(n) Dequeue)", ar: "إزاحة العناصر غير الضرورية"},
        {txt: "(c) Memory allocation", ar: "تخصيص الذاكرة"},
        {txt: "(d) Stack overflow", ar: "تجاوز سعة المكدس"}
      ],
      ans: 1
    },
    {
      q: "25) Which function inspects the top element of a Stack without removing it?",
      qAr: "ما الدالة التي تعاين العنصر العلوي للمكدس دون إزالته؟",
      options: [
        {txt: "(a) Pop()", ar: "سحب"},
        {txt: "(b) Push()", ar: "دفع"},
        {txt: "(c) GetTop() / Peek()", ar: "جلب القمة / معاينة"},
        {txt: "(d) Dequeue()", ar: "حذف من الطابور"}
      ],
      ans: 2
    },
    {
      q: "26) Web browser \"Back\" button history is implemented using ________",
      qAr: "يتم تطبيق زر العودة للوراء \"Back\" في متصفح الويب باستخدام ________.",
      options: [
        {txt: "(a) Queue", ar: "طابور"},
        {txt: "(b) Stack", ar: "مكدس"},
        {txt: "(c) Binary Tree", ar: "شجرة ثنائية"},
        {txt: "(d) Priority Queue", ar: "طابور أولويات"}
      ],
      ans: 1
    },
    {
      q: "27) In a Priority Queue, elements are dequeued based on ________",
      qAr: "في طابور الأولويات (Priority Queue)، يتم إخراج العناصر بناءً على ________.",
      options: [
        {txt: "(a) Arrival order", ar: "ترتيب الوصول"},
        {txt: "(b) Priority value", ar: "قيمة الأولوية"},
        {txt: "(c) Size", ar: "الحجم"},
        {txt: "(d) Index", ar: "الفهرس"}
      ],
      ans: 1
    },
    {
      q: "28) Attempting to pop an element from an empty Stack results in ________",
      qAr: "محاولة إخراج (Pop) عنصر من مكدس فارغ تؤدي إلى حالة ________.",
      options: [
        {txt: "(a) Stack Overflow", ar: "تجاوز سعة المكدس"},
        {txt: "(b) Stack Underflow", ar: "نقص سعة المكدس"},
        {txt: "(c) Null Pointer Exception", ar: "استثناء مؤشر فارغ"},
        {txt: "(d) Infinite loop", ar: "حلقة لا نهائية"}
      ],
      ans: 1
    },
    {
      q: "29) What is the time complexity of Enqueue in an optimized Circular Array Queue?",
      qAr: "ما هو التعقيد الزمني لعملية الإضافة (Enqueue) في طابور دائري فعّال؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 0
    },
    {
      q: "30) Which of the following data structures is non-linear?",
      qAr: "أي من هياكل البيانات التالية يُعد هيكلاً غير خطي (Non-linear)؟",
      options: [
        {txt: "(a) Stack", ar: "مكدس"},
        {txt: "(b) Queue", ar: "طابور"},
        {txt: "(c) Tree", ar: "شجرة"},
        {txt: "(d) Linked List", ar: "قائمة مترابطة"}
      ],
      ans: 2
    },
    {
      q: "31) Print spooling (Printer jobs management) typically uses ________",
      qAr: "إدارة مهام الطباعة (Print spooling) تُنفذ عادة باستخدام ________.",
      options: [
        {txt: "(a) Stack", ar: "مكدس"},
        {txt: "(b) Queue", ar: "طابور"},
        {txt: "(c) Binary Search Tree", ar: "شجرة بحث ثنائية"},
        {txt: "(d) Doubly Linked List", ar: "قائمة مترابطة مزدوجة"}
      ],
      ans: 1
    },
    {
      q: "32) What is the result of evaluating the Postfix expression 5 3 + 2 *?",
      qAr: "ما هي نتيجة تقييم التعبير اللاحق (Postfix) التالي: 5 3 + 2 *؟",
      options: [
        {txt: "(a) 11", ar: "11"},
        {txt: "(b) 16", ar: "16 (الحساب: (5+3) × 2 = 16)"},
        {txt: "(c) 13", ar: "13"},
        {txt: "(d) 10", ar: "10"}
      ],
      ans: 1
    },
    {
      q: "33) The operation to check if a Queue contains no elements is ________",
      qAr: "العملية المسؤولة عن الفحص ما إذا كان الطابور لا يحتوي على عناصر هي ________.",
      options: [
        {txt: "(a) Clear()", ar: "تفريغ"},
        {txt: "(b) IsEmpty()", ar: "هل هو فارغ"},
        {txt: "(c) IsFull()", ar: "هل هو ممتلئ"},
        {txt: "(d) GetHead()", ar: "جلب الرأس"}
      ],
      ans: 1
    },
    {
      q: "34) In an array implementation of Stack, top = -1 indicates that ________",
      qAr: "في تمثيل المكدس بالمصفوفة، فإن القيمة top = -1 تشير إلى أن ________.",
      options: [
        {txt: "(a) The stack is full", ar: "المكدس ممتلئ"},
        {txt: "(b) The stack is empty", ar: "المكدس فارغ"},
        {txt: "(c) Top points to the first element", ar: "القمة تشير للعنصر الأول"},
        {txt: "(d) An error occurred", ar: "حدث خطأ"}
      ],
      ans: 1
    },
    {
      q: "35) Depth-First Search (DFS) uses which data structure implicitly or explicitly?",
      qAr: "تستخدم خوارزمية البحث بالعمق (DFS) أي هيكل بيانات بشكل ضمني أو صريح؟",
      options: [
        {txt: "(a) Queue", ar: "طابور"},
        {txt: "(b) Stack", ar: "مكدس"},
        {txt: "(c) Array", ar: "مصفوفة"},
        {txt: "(d) Priority Queue", ar: "طابور أولويات"}
      ],
      ans: 1
    },
    {
      q: "36) A node in a tree with no children is called a ________",
      qAr: "العقدة التي لا تتصل بأي أبناء في الشجرة تُسمى ________.",
      options: [
        {txt: "(a) Root", ar: "جذر"},
        {txt: "(b) Internal Node", ar: "عقدة داخلية"},
        {txt: "(c) Leaf Node", ar: "عقدة ورقة"},
        {txt: "(d) Sibling", ar: "شقيق"}
      ],
      ans: 2
    },
    {
      q: "37) The maximum number of children a node can have in a Binary Tree is ________",
      qAr: "الحد الأقصى لعدد الأبناء الذي يمكن أن تمتلكه عقدة في الشجرة الثنائية هو ________.",
      options: [
        {txt: "(a) 1", ar: "1"},
        {txt: "(b) 2", ar: "2"},
        {txt: "(c) 3", ar: "3"},
        {txt: "(d) Unlimited", ar: "غير محدود"}
      ],
      ans: 1
    },
    {
      q: "38) In a BST, for any node X, all values in its left subtree are ________ than X.",
      qAr: "في شجرة BST، لأي عقدة X، جميع القيم الموجودة في الشجرة الفرعية اليسرى تكون ________ من X.",
      options: [
        {txt: "(a) Greater", ar: "أكبر"},
        {txt: "(b) Smaller", ar: "أصغر"},
        {txt: "(c) Equal", ar: "مساوية"},
        {txt: "(d) Unrelated", ar: "غير مرتبطة"}
      ],
      ans: 1
    },
    {
      q: "39) What is the height of a tree consisting of only a single Root node?",
      qAr: "ما هو ارتفاع شجرة تتكون من عقدة جذرية (Root) واحدة فقط؟",
      options: [
        {txt: "(a) 0", ar: "0"},
        {txt: "(b) 1", ar: "1"},
        {txt: "(c) 2", ar: "2"},
        {txt: "(d) -1", ar: "-1"}
      ],
      ans: 0
    },
    {
      q: "40) In a BST, searching for an element takes ________ time on average.",
      qAr: "في شجرة BST، يستغرق البحث عن عنصر وقتاً متوسطاً بمقدار ________.",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 2
    },
    {
      q: "41) The top-most node of a tree is called the ________",
      qAr: "العقدة العلوية الأولى في أعلى الشجرة تُسمى ________.",
      options: [
        {txt: "(a) Leaf", ar: "ورقة"},
        {txt: "(b) Root", ar: "جذر"},
        {txt: "(c) Parent", ar: "أب"},
        {txt: "(d) Ancestor", ar: "سلف"}
      ],
      ans: 1
    },
    {
      q: "42) A Binary Tree where every level is completely filled except possibly the last is called ________",
      qAr: "الشجرة الثنائية التي تكون كل مستوياتها ممتلئة تماماً باستثناء المستوى الأخير المكتمل من اليسار تُسمى ________.",
      options: [
        {txt: "(a) Full Binary Tree", ar: "شجرة ثنائية ممتلئة"},
        {txt: "(b) Complete Binary Tree", ar: "شجرة ثنائية كاملة"},
        {txt: "(c) Balanced Tree", ar: "شجرة متوازنة"},
        {txt: "(d) Degenerate Tree", ar: "شجرة منحطة"}
      ],
      ans: 1
    },
    {
      q: "43) The length of the longest path from a node to a leaf is the node's ________",
      qAr: "طول أطول مسار من عقدة معينة وصولاً لأبعد ورقة يُسمى ________ العقدة.",
      options: [
        {txt: "(a) Depth", ar: "عمق"},
        {txt: "(b) Height", ar: "ارتفاع"},
        {txt: "(c) Degree", ar: "درجة"},
        {txt: "(d) Level", ar: "مستوى"}
      ],
      ans: 1
    },
    {
      q: "44) What is the worst-case search complexity in a skewed/unbalanced BST?",
      qAr: "ما هو تعقيد وقت البحث في أسوأ حالة لشجرة BST غير متوازنة (Skewed Tree)؟",
      options: [
        {txt: "(a) O(log n)", ar: "O(log n)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(1)", ar: "O(1)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 1
    },
    {
      q: "45) When deleting a node with two children in a BST, we can replace it with its ________",
      qAr: "عند حذف عقدة تمتلك طفلين في شجرة BST، يمكن استبدال قيمتها بـ ________.",
      options: [
        {txt: "(a) Leftmost child", ar: "الطفل الأيسر الأقصى"},
        {txt: "(b) In-order Successor (Minimum in right subtree)", ar: "الخلف بالترتيب (أصغر قيمة في الشجرة الفرعية اليمنى)"},
        {txt: "(c) Parent node", ar: "العقدة الأب"},
        {txt: "(d) Root node", ar: "العقدة الجذر"}
      ],
      ans: 1
    },
    {
      q: "46) Number of edges on the path from the root to a node X is defined as X's ________",
      qAr: "عدد الحواف (Edges) في المسار من الجذر إلى عقدة X يُمثل ________ العقدة X.",
      options: [
        {txt: "(a) Height", ar: "ارتفاع"},
        {txt: "(b) Depth", ar: "عمق"},
        {txt: "(c) Degree", ar: "درجة"},
        {txt: "(d) Width", ar: "عرض"}
      ],
      ans: 1
    },
    {
      q: "47) In a Full Binary Tree with height h, the total number of nodes is ________",
      qAr: "في شجرة ثنائية ممتلئة بالكامل (Full Binary Tree) ارتفاعها h، يُحسب عدد العقد الكلي بالقانون ________.",
      options: [
        {txt: "(a) 2^h - 1", ar: "2^h - 1"},
        {txt: "(b) 2^(h+1) - 1", ar: "2^(h+1) - 1"},
        {txt: "(c) 2^h", ar: "2^h"},
        {txt: "(d) h²", ar: "h²"}
      ],
      ans: 1
    },
    {
      q: "48) In a Binary Search Tree, where is the minimum value located?",
      qAr: "في شجرة البحث الثنائية (BST)، أين تقع أصغر قيمة دائماً؟",
      options: [
        {txt: "(a) Root node", ar: "العقدة الجذر"},
        {txt: "(b) Leftmost node", ar: "العقدة الأقصى يساراً"},
        {txt: "(c) Rightmost node", ar: "العقدة الأقصى يميناً"},
        {txt: "(d) Any leaf node", ar: "أي عقدة ورقة"}
      ],
      ans: 1
    },
    {
      q: "49) In a Binary Search Tree, where is the maximum value located?",
      qAr: "في شجرة البحث الثنائية (BST)، أين تقع أكبر قيمة دائماً؟",
      options: [
        {txt: "(a) Leftmost node", ar: "العقدة الأقصى يساراً"},
        {txt: "(b) Rightmost node", ar: "العقدة الأقصى يميناً"},
        {txt: "(c) Root node", ar: "العقدة الجذر"},
        {txt: "(d) Lowest depth node", ar: "العقدة الأقل عمقاً"}
      ],
      ans: 1
    },
    {
      q: "50) What is the maximum number of nodes at level k of a Binary Tree (assuming root is level 0)?",
      qAr: "ما هو الحد الأقصى لعدد العقد التي يمكن أن تتواجد في المستوى k للشجرة الثنائية (بافتراض الجذر عند مستوى 0)؟",
      options: [
        {txt: "(a) k²", ar: "k²"},
        {txt: "(b) 2^k", ar: "2^k"},
        {txt: "(c) 2^(k-1)", ar: "2^(k-1)"},
        {txt: "(d) 2k", ar: "2k"}
      ],
      ans: 1
    }
  ],

  "dsa_theory_midterm_short": [
    {
      titleEn: "Q1. What is Stack? Explain with the help of diagram.",
      titleAr: "س1. ما هو المكدس (Stack)؟ اشرح ذلك بمساعدة الرسم التوضيحي.",
      imageSrc: "images/H1.png",
      ansEn: "A Stack is a linear data structure that follows the LIFO (Last-In, First-Out) principle.",
      ansAr: "الإجابة بالعربي: المكدس (Stack) هو هيكل بيانات خطي يتبع مبدأ (آخر من يدخل، أول من يخرج - LIFO).",
      expEn: "Operations: push() -> (insert), pop() -> (remove), peek() -> (top element).",
      expAr: "التوضيح والعمليات:<br>• push(): لإضافة عنصر في قمة المكدس.<br>• pop(): لحذف العنصر من قمة المكدس.<br>• peek(): لاستعراض العنصر العلوي دون حذفه."
    },
    {
      titleEn: "Q2. Write the complexity for the following piece of code and overall code.",
      titleAr: "س2. اكتب التعقيد الزمني لجزئيات الكود التالية وللكود كاملاً.",
      imageSrc: "images/H2.png",
      ansEn: "case 'a': O(n)<br>case 'b': O(n²)<br>Overall Complexity: O(n²)",
      ansAr: "الإجابة بالعربي:<br>• الفقرة 'a': التعقيد الزمني هو O(n)<br>• الفقرة 'b': التعقيد الزمني هو O(n²)<br>• التعقيد الكلي للكود (Overall Complexity): هو O(n²)"
    },
    {
      titleEn: "Q3. Consider the following tree and answer the questions:",
      titleAr: "س3. بالنظر إلى الشجرة التالية، أجب عن الأسئلة التالية:",
      imageSrc: "images/H3.png",
      ansEn: `
        (a) How many edges are in this tree? -> 8 edges<br>
        (b) What do we call node "w"? -> Leaf node<br>
        (c) Which node(s) is(are) the leaves of this tree? -> A, K, W, C, X<br>
        (d) Which node(s) is(are) the ancestors of this tree? -> Q, B, M, R<br>
        (e) Is it a binary tree? -> No, because node Q has 3 children.<br>
        (f) What is the height of a tree with only one node (the root)? -> 0
      `,
      ansAr: `
        الإجابة والترجمة بالعربي:<br>
        (a) كم عدد الحواف في هذه الشجرة؟ ➔ الإجابة: 8 حواف (Edges).<br>
        (b) ماذا نسمي العقدة "w"؟ ➔ الإجابة: عقدة ورقة (Leaf node).<br>
        (c) ما هي العقد التي تعتبر أوراقاً في هذه الشجرة؟ ➔ الإجابة: العقد A, K, W, C, X.<br>
        (d) ما هي العقد التي تعتبر أسلافاً (Ancestors) في هذه الشجرة؟ ➔ الإجابة: العقد Q, B, M, R.<br>
        (e) هل هذه شجرة ثنائية؟ ➔ الإجابة: لا، لأن العقدة Q تحتوي على 3 أبناء.<br>
        (f) ما هو ارتفاع شجرة تحتوي على عقدة واحدة فقط (الجذر)؟ ➔ الإجابة: 0.
      `
    },
    {
      titleEn: "Q4. Compare the complexity of any three sorting algorithms.",
      titleAr: "س4. قارن بين تعقيد أي ثلاث خوارزميات ترتيب مع الشرح.",
      ansEn: `
        Bubble Sort: Best = O(n) | Worst = O(n²)<br>
        Merge Sort: Best = O(n log n) | Worst = O(n log n)<br>
        Quick Sort: Best = O(n log n) | Worst = O(n²)
      `,
      ansAr: `
        الإجابة بالعربي:<br>
        • خوارزمية الترتيب الفقاعي (Bubble Sort): أفضل حالة = O(n) | أسوأ حالة = O(n²)<br>
        • خوارزمية الترتيب بالدمج (Merge Sort): أفضل حالة = O(n log n) | أسوأ حالة = O(n log n)<br>
        • خوارزمية الترتيب السريع (Quick Sort): أفضل حالة = O(n log n) | أسوأ حالة = O(n²)
      `,
      expEn: `
        Simplified explanation for complexity:<br>
        1. Bubble Sort: Compares adjacent elements. Worst O(n²) when reversed; Best O(n) when already sorted.<br>
        2. Merge Sort: Uses Divide and Conquer. Constant performance O(n log n) in all cases.<br>
        3. Quick Sort: Uses a Pivot element. Best O(n log n) when split evenly; Worst O(n²) with bad pivot choice.
      `,
      expAr: `
        شرح مبسط وواضح لسبب هذا التعقيد بالعربي:<br><br>
        1. <strong>خوارزمية الفقاعة (Bubble Sort):</strong><br>
        • <em>الفكرة:</em> تقارن كل عنصرين متجاورين وتدفع العنصر الأكبر للجهة اليمنى.<br>
        • <em>السبب:</em> أسوأ حالة O(n²) في حال كانت المصفوفة معكوسة، وأفضل حالة O(n) إذا كانت مرتبة جاهزة.<br><br>
        2. <strong>خوارزمية الدمج (Merge Sort):</strong><br>
        • <em>الفكرة:</em> تقسم المصفوفة لنصفين، وترتب كل نصف، ثم تدمجهما (Divide and Conquer).<br>
        • <em>السبب:</em> أداؤها ثابت O(n log n) دائماً لأن التقسيم يستغرق log n والدمج يستغرق n.<br><br>
        3. <strong>خوارزمية الترتيب السريع (Quick Sort):</strong><br>
        • <em>الفكرة:</em> تختار عنصر محور (Pivot) وتضع الأصغر على يساره والأكبر على يمينه.<br>
        • <em>السبب:</em> أفضل حالة O(n log n) عند الانقسام المتوازن، وأسوأ حالة O(n²) عند اختيار محور غير مناسب.
      `
    },
    {
      titleEn: "Q5. Write a short note on Big-O Notation.",
      titleAr: "س5. اكتب نبذة قصيرة عن ترميز Big-O.",
      ansEn: "Big-O Notation represents the upper bound (worst-case scenario) of an algorithm's execution time or space complexity (e.g., O(1), O(n), O(n²)).",
      ansAr: "الإجابة بالعربي: يمثل ترميز Big-O الحد الأعلى (أسوأ حالة متوقعة - Worst-case) لوقت تنفيذ الخوارزمية أو التعقيد المكاني في الذاكرة.",
      expEn: `
        Basic Concept: Mathematical way to measure algorithm efficiency as input size (n) grows.<br>
        • O(1) -> Constant time.<br>
        • O(n) -> Linear time.<br>
        • O(n²) -> Quadratic time (Nested Loops).
      `,
      expAr: `
        شرح بسيط ومباشر جداً لـ Big-O Notation بالعربي:<br>
        • <strong>الفكرة الأساسية:</strong> هي طريقة رياضية تُستخدم لقياس كفاءة الخوارزمية وسرعتها مع زيادة حجم البيانات (n).<br>
        • <strong>أسوأ حالة (Worst-case):</strong> تعبر عن أقصى وقت أو مساحة قد تستغرقها الخوارزمية.<br><br>
        <strong>أمثلة بسيطة للتوضيح:</strong><br>
        • O(1) ➔ ثابت: الوقت لا يتغير مهما زادت البيانات.<br>
        • O(n) ➔ خطي: الوقت يزداد بنفس نسبة زيادة البيانات.<br>
        • O(n²) ➔ تربيعي: الوقت يضاعف بشكل كبير مع زيادة البيانات.
      `
    }
  ],

  "dsa_theory_midterm_long": [
    {
      titleEn: "Q6. Write the program for stack to demonstrate its operations.",
      titleAr: "س6. اكتب برنامجاً للمكدس (Stack) لتوضيح عملياته.",
      imageSrc: "images/H4.png",
      expEn: `
        Code Breakdown:<br>
        • 'public interface Stack extends Container': Defines a Stack interface inheriting from Container.<br>
        • 'public abstract Object getTop();': Method to inspect the top element without removing it.<br>
        • 'public abstract void push(Object obj);': Method to insert a new element at the top.<br>
        • 'public abstract Object pop();': Method to remove and return the top element.
      `,
      expAr: `
        شرح بسيط للكود بالعربي:<br>
        • <code>public interface Stack extends Container</code>: يعرّف واجهة (Interface) للمكدس ترث من واجهة Container.<br>
        • <code>public abstract Object getTop();</code>: دالة لاستعراض العنصر الموجود في أعلى المكدس دون حذفه.<br>
        • <code>public abstract void push(Object obj);</code>: دالة لإضافة عنصر جديد (obj) إلى أعلى المكدس.<br>
        • <code>public abstract Object pop();</code>: دالة لحذف وإرجاع العنصر الموجود في أعلى المكدس.
      `
    },
    {
      titleEn: "Q7. What is Queue? Explain with the help of diagram.",
      titleAr: "س7. ما هو الطابور (Queue)؟ اشرح ذلك مع الرسم التوضيحي.",
      imageSrc: "images/H5.png",
      ansEn: "A Queue is a linear data structure that follows the FIFO (First-In, First-Out) principle.",
      ansAr: "الإجابة بالعربي: الطابور (Queue) هو هيكل بيانات خطي يتبع مبدأ (أول من يدخل، أول من يخرج - FIFO).",
      expEn: "Operations: enqueue() (add at Rear), dequeue() (remove from Front).",
      expAr: "التوضيح والعمليات بالعربي:<br>• enqueue(): إضافة عنصر جديد في نهاية الطابور (Rear).<br>• dequeue(): حذف عنصر من بداية الطابور (Front)."
    }
  ]
};