const circuitsDsaData = {
  // ==========================================
  // === 1. دوائر كهربائية (Electric Circuits) ===
  // ==========================================

  // --- أ) خيارات الدوائر الكهربائية (MCQs - 25 Question) ---
  "circuits_theory_midterm_mcq": [
    {
      q: "1) A 10H inductor has current changing at a rate of 3 A/sec. Calculate the induced voltage across the inductor.",
      qAr: "1) ملف حثه الذاتي 10H ويتغير التيار فيه بمعدل 3 A/sec. احسب الجهد المستحث عبر الملف.",
      options: [
        {txt: "(a) 10 V", ar: "10 V"},
        {txt: "(b) 30 V", ar: "30 V"},
        {txt: "(c) 20 V", ar: "20 V"},
        {txt: "(d) 40 V", ar: "40 V"}
      ],
      ans: 1
    },
    {
      q: "2) A 20µF capacitor is connected across a 25 V source. Calculate the charge stored in the capacitor.",
      qAr: "2) مكثف سعته 20µF متصل بمصدر جهد 25 V. احسب الشحنة المخزنة في المكثف.",
      options: [
        {txt: "(a) 5 × 10⁻⁴ C", ar: "5 × 10⁻⁴ C"},
        {txt: "(b) 20 × 10⁻⁴ C", ar: "20 × 10⁻⁴ C"},
        {txt: "(c) 10 × 10⁻⁴ C", ar: "10 × 10⁻⁴ C"},
        {txt: "(d) 30 × 10⁻⁴ C", ar: "30 × 10⁻⁴ C"}
      ],
      ans: 0
    },
    {
      q: "3) Motors operate on the principle of electromagnetism, where a _____ carrying conductor placed in a magnetic field experiences a force.",
      qAr: "3) تعمل المحركات على مبدأ الكهرومغناطيسية، حيث يتأثر الموصل الذي يمر به _____ بوجوده في مجال مغناطيسي بقوة.",
      options: [
        {txt: "(a) Voltage", ar: "جهد"},
        {txt: "(b) Capacitor", ar: "مكثف"},
        {txt: "(c) Current", ar: "تيار"},
        {txt: "(d) Resistor", ar: "مقاومة"}
      ],
      ans: 2
    },
    {
      q: "4) Which of the following correctly describes Alternating Current (AC)?",
      qAr: "4) أي مما يلي يصف التيار المتردد (AC) بشكل صحيح؟",
      options: [
        {txt: "(a) Flows in one direction only", ar: "يدفق في اتجاه واحد فقط"},
        {txt: "(b) Does not require voltage", ar: "لا يتطلب جهداً"},
        {txt: "(c) Has no frequency", ar: "ليس له تردد"},
        {txt: "(d) Periodically changes direction", ar: "يغير اتجاهه بشكل دوري"}
      ],
      ans: 3
    },
    {
      q: "5) Generators are used to convert _____",
      qAr: "5) تُستخدم المولدات لتحويل _____",
      options: [
        {txt: "(a) Electrical energy to mechanical energy", ar: "الطاقة الكهربائية إلى طاقة ميكانيكية"},
        {txt: "(b) Mechanical energy to electrical energy", ar: "الطاقة الميكانيكية إلى طاقة كهربائية"},
        {txt: "(c) Electrical energy to heat", ar: "الطاقة الكهربائية إلى حرارة"},
        {txt: "(d) Magnetic energy to heat", ar: "الطاقة المغناطيسية إلى حرارة"}
      ],
      ans: 1
    },
    {
      q: "6) In Parallel circuit, the value of current is _____ and voltage is _____ in all components.",
      qAr: "6) في دائرة التوازي، تكون قيمة التيار _____ والجهد _____ عبر جميع المكونات.",
      options: [
        {txt: "(a) Same, Different", ar: "متساوٍ، مختلف"},
        {txt: "(b) Different, Same", ar: "مختلف، متساوٍ"},
        {txt: "(c) Same, Same", ar: "متساوٍ، متساوٍ"},
        {txt: "(d) Different, Different", ar: "مختلف، مختلف"}
      ],
      ans: 1
    },
    {
      q: "7) _____ is a passive two-terminal electronic component that stores energy in an electric field.",
      qAr: "7) _____ هو عنصر إلكتروني سلبي ثنائي الطرف يخزن الطاقة في مجال كهربائي.",
      options: [
        {txt: "(a) Resistor", ar: "مقاومة"},
        {txt: "(b) Capacitor", ar: "مكثف"},
        {txt: "(c) Inductor", ar: "ملف / محث"},
        {txt: "(d) Diode", ar: "دايود"}
      ],
      ans: 1
    },
    {
      q: "8) How many types of flow does a conductor material have?",
      qAr: "8) كم عدد أنواع التدفق/حاملات الشحنة الأساسية في المادة الموصلة؟",
      options: [
        {txt: "(a) 1", ar: "1 (الإلكترونات فقط)"},
        {txt: "(b) 3", ar: "3"},
        {txt: "(c) 2", ar: "2"},
        {txt: "(d) 4", ar: "4"}
      ],
      ans: 0
    },
    {
      q: "9) The number of free electrons and holes in an intrinsic semiconductor decreases when the temperature _____",
      qAr: "9) ينخفض عدد الإلكترونات الحرة والفجوات في شبه الموصل النقي عندما _____ درجة الحرارة.",
      options: [
        {txt: "(a) Increases", ar: "ترتفع"},
        {txt: "(b) Decreases", ar: "تنخفض"},
        {txt: "(c) Stays the same", ar: "تبقى كما هي"},
        {txt: "(d) None of the above", ar: "لا شيء مما سبق"}
      ],
      ans: 1
    },
    {
      q: "10) Inductance unit is _____",
      qAr: "10) وحدة قياس المحاثة (الحث الذاتي) هي _____",
      options: [
        {txt: "(a) Farad", ar: "فاراد"},
        {txt: "(b) Henry", ar: "هنري"},
        {txt: "(c) Ampere", ar: "أمبير"},
        {txt: "(d) Tesla", ar: "تيسلا"}
      ],
      ans: 1
    },
    {
      q: "11) A reverse voltage of 10 V is across a diode. What is the voltage across the depletion layer?",
      qAr: "11) تم تطبيق جهد عكسي قدره 10 V عبر دايود. كم يبلغ الجهد عبر طبقة الاستنزاف؟",
      options: [
        {txt: "(a) 0V", ar: "0V"},
        {txt: "(b) 0.7V", ar: "0.7V"},
        {txt: "(c) 9.3V", ar: "9.3V"},
        {txt: "(d) 10V", ar: "10V"}
      ],
      ans: 3
    },
    {
      q: "12) Which of the following symbols denote inductor?",
      qAr: "12) أي من الرموز التالية يمثل المحث (Inductor)؟",
      options: [
        {txt: "(a) Resistor symbol", ar: "رمز المقاومة"},
        {txt: "(b) Coiled wire symbol (Inductor)", ar: "رمز الملف اللولبي (Inductor)"},
        {txt: "(c) Diode symbol", ar: "رمز الدايود"},
        {txt: "(d) Capacitor symbol", ar: "رمز المكثف"}
      ],
      ans: 1
    },
    {
      q: "13) An external voltage source is applied to a p-type semiconductor. If the left end of the crystal is positive, which way do the majority carriers flow?",
      qAr: "13) تم تطبيق مصدر جهد خارجي على شبه موصل من نوع P. إذا كان الطرف الأيسر موجباً، فأي اتجاه تتحرك فيه حاملات الشحنة الأغلبية (الفجوات)؟",
      options: [
        {txt: "(a) Right", ar: "إلى اليمين"},
        {txt: "(b) Left", ar: "إلى اليسار"},
        {txt: "(c) Center", ar: "في المنتصف"},
        {txt: "(d) Impossible to say", ar: "من المستحيل التحديد"}
      ],
      ans: 0
    },
    {
      q: "14) How much forward diode voltage is there with the ideal diode approximation?",
      qAr: "14) كم يبلغ هبوط الجهد الأمامي للدايود عند استخدام تقريب الدايود المثالي (Ideal Diode)؟",
      options: [
        {txt: "(a) 0.7 V", ar: "0.7 V"},
        {txt: "(b) 0 V", ar: "0 V"},
        {txt: "(c) More than 0.7 V", ar: "أكثر من 0.7 V"},
        {txt: "(d) 1 V", ar: "1 V"}
      ],
      ans: 1
    },
    {
      q: "15) An acceptor atom has _____ valence electrons.",
      qAr: "15) تحتوي ذرة الشائبة المستقبلة (Acceptor) على _____ إلكترونات تكافؤ.",
      options: [
        {txt: "(a) 4", ar: "4"},
        {txt: "(b) 8", ar: "8"},
        {txt: "(c) 3", ar: "3"},
        {txt: "(d) 1", ar: "1"}
      ],
      ans: 2
    },
    {
      q: "16) What is the unit of measurement for electric current?",
      qAr: "16) ما هي وحدة قياس التيار الكهربائي؟",
      options: [
        {txt: "(a) Volts", ar: "فولت"},
        {txt: "(b) Ohms", ar: "أوم"},
        {txt: "(c) Amperes", ar: "أمبير"},
        {txt: "(d) Farads", ar: "فاراد"}
      ],
      ans: 2
    },
    {
      q: "17) According to Ohm's Law, what is the formula for calculating Voltage?",
      qAr: "17) وفقاً لقانون أوم، ما هي صيغة حساب الجهد (Voltage)؟",
      options: [
        {txt: "(a) V = I / R", ar: "V = I / R"},
        {txt: "(b) V = I × R", ar: "V = I × R"},
        {txt: "(c) V = P / I", ar: "V = P / I"},
        {txt: "(d) V = R / I", ar: "V = R / I"}
      ],
      ans: 1
    },
    {
      q: "18) Kirchhoff's Current Law (KCL) states that:",
      qAr: "18) ينص قانون كيرشوف للتيار (KCL) على أن:",
      options: [
        {txt: "(a) Sum of voltages is zero", ar: "مجموع الجهود يساوي صفر"},
        {txt: "(b) Total resistance in series is sum", ar: "المقاومة الكلية في التوالي هي المجموع"},
        {txt: "(c) Current entering a node equals current leaving it", ar: "التيار الداخل إلى العقدة يساوي التيار الخارج منها"},
        {txt: "(d) Voltage proportional to current", ar: "الجهد يتناسب طردياً مع التيار"}
      ],
      ans: 2
    },
    {
      q: "19) In a P-type semiconductor, majority charge carriers are:",
      qAr: "19) في شبه الموصل من النوع P، تكون حاملات الشحنة الأغلبية هي:",
      options: [
        {txt: "(a) Electrons", ar: "الإلكترونات"},
        {txt: "(b) Holes", ar: "الفجوات"},
        {txt: "(c) Protons", ar: "البروتونات"},
        {txt: "(d) Neutrons", ar: "النيوترونات"}
      ],
      ans: 1
    },
    {
      q: "20) Thevenin's theorem allows us to replace a complex circuit with:",
      qAr: "20) تسمح لنا نظرية ثيفنين باستبدال الدائرة المعقدة بـ:",
      options: [
        {txt: "(a) Current source in parallel with resistor", ar: "مصدر تيار على التوازي مع مقاومة"},
        {txt: "(b) Single voltage source in series with a resistor", ar: "مصدر جهد واحد على التوالي مع مقاومة"},
        {txt: "(c) Capacitor and inductor", ar: "مكثف ومحث"},
        {txt: "(d) Voltage source only", ar: "مصدر جهد فقط"}
      ],
      ans: 1
    },
    {
      q: "21) Two resistors R1 and R2 are connected in Series, total resistance Rtotal =",
      qAr: "21) عند توصيل المقاومتين R1 و R2 على التوالي، فإن المقاومة الكلية Rtotal تساوي:",
      options: [
        {txt: "(a) R1 + R2", ar: "R1 + R2"},
        {txt: "(b) 1 / [ (1/R1) + (1/R2) ]", ar: "1 / [ (1/R1) + (1/R2) ]"},
        {txt: "(c) R1 / R2", ar: "R1 / R2"},
        {txt: "(d) (1/R1) + (1/R2)", ar: "(1/R1) + (1/R2)"}
      ],
      ans: 0
    },
    {
      q: "22) The electrons have _____ charge.",
      qAr: "22) تحمل الإلكترونات شحنة _____.",
      options: [
        {txt: "(a) Positive", ar: "موجبة"},
        {txt: "(b) Inverting", ar: "عكسية"},
        {txt: "(c) No charge", ar: "بدون شحنة"},
        {txt: "(d) Negative", ar: "سالبة"}
      ],
      ans: 3
    },
    {
      q: "23) Silicon is an example for _____ material.",
      qAr: "23) يُعتبر السيليكون مثالاً على المادة _____.",
      options: [
        {txt: "(a) Conductor", ar: "الموصلة"},
        {txt: "(b) Insulator", ar: "العازلة"},
        {txt: "(c) Semi-solid", ar: "شبه الصلبة"},
        {txt: "(d) Semiconductor", ar: "شبه الموصلة"}
      ],
      ans: 3
    },
    {
      q: "24) The _____ is a passive two-terminal electrical component that resists changes in electric current passing through it.",
      qAr: "24) _____ هو عنصر كهربائي سلبي ثنائي الطرف يقاوم التغيرات في التيار الكهربائي المار فيه.",
      options: [
        {txt: "(a) Capacitor", ar: "المكثف"},
        {txt: "(b) Inductor", ar: "المحث / الملف"},
        {txt: "(c) Resistor", ar: "المقاومة"},
        {txt: "(d) Insulator", ar: "العازل"}
      ],
      ans: 1
    },
    {
      q: "25) Which of the following is an acceptor impurity?",
      qAr: "25) أي مما يلي يُعتبر شائبة مستقبلة (Acceptor Impurity)؟",
      options: [
        {txt: "(a) Phosphorus", ar: "الفوسفور"},
        {txt: "(b) Aluminum", ar: "الألومنيوم"},
        {txt: "(c) Arsenic", ar: "الزرنيخ"},
        {txt: "(d) Antimony", ar: "الأنتيمون"}
      ],
      ans: 1
    }
  ],

  // --- ب) أسئلة الدوائر الكهربائية القصيرة (Short Questions - 18 Question) ---
  "circuits_theory_midterm_short": [
    {
      titleEn: "Q1. What is Resistance? Give its Unit and Symbol.",
      titleAr: "س1. ما هي المقاومة؟ اذكر وحدتها ورمزها.",
      ansEn: "Resistance is the opposition to the flow of electric current.<br>• Symbol: R<br>• Unit: Ohm (Ω)",
      ansAr: "المقاومة هي ممانعة مرور التيار الكهربائي.<br>• الرمز: R<br>• الوحدة: الأوم (Ω)",
      expEn: "It restricts electric current flow in circuits. Key recall: Opposition - Current - Ohm.",
      expAr: "تُعيق وتحد من تدفق التيار الكهربائي في الدوائر. كلمات الحفظ الأساسية: ممانعة - تيار - أوم."
    },
    {
      titleEn: "Q2. Define Ohm’s Law with its equations.",
      titleAr: "س2. عرّف قانون أوم مع ذكر معادلاته.",
      imageSrc: "images/D1.png",
      ansEn: "Ohm’s Law states that the current through a conductor is directly proportional to the voltage across it, provided the resistance remains constant.<br>Equations: V = I × R | I = V / R | R = V / I",
      ansAr: "ينص قانون أوم على أن التيار المار في موصل يتناسب طردياً مع الجهد المطبق عليه، بشرط ثبات المقاومة.<br>المعادلات: V = I × R | I = V / R | R = V / I",
      expEn: "Voltage equals current multiplied by resistance. To find current, divide voltage by resistance.",
      expAr: "الجهد يساوي حاصل ضرب التيار في المقاومة. لحساب التيار اقسم الجهد على المقاومة."
    },
    {
      titleEn: "Q3. Define Ohm’s Law with V-I Characteristics and Find the Resistor Values.",
      titleAr: "س3. عرّف قانون أوم مع منحنى الجهد والتيار، ثم احسب قيمة المقاومتين من ألوانهما.",
      imageSrc: "images/D2.png",
      ansEn: "Ohm’s Law: V = I × R. For an ohmic resistor, the V-I graph is a straight line passing through the origin.<br><br>(i) Brown – Black – Red – Gold:<br>R = 10 × 10² = 1000 Ω = 1 kΩ ±5%<br><br>(ii) Red – Red – Black – Gold:<br>R = 22 × 10⁰ = 22 Ω ±5%",
      ansAr: "قانون أوم: V = I × R. منحنى (V-I) للمقاومة الأومية هو خط مستقيم يمر بنقطة الأصل.<br><br>(i) بني - أسود - أحمر - ذهبي:<br>R = 10 × 100 = 1000 أوم = 1 kΩ ±5%<br><br>(ii) أحمر - أحمر - أسود - ذهبي:<br>R = 22 × 1 = 22 أوم ±5%",
      expEn: "First two bands represent digits, the third is multiplier, and the fourth is tolerance percentage.",
      expAr: "أول نطاقين يمثلان الرقم، النطاق الثالث هو المعامل المضاعف، والنطاق الرابع نسبة السماحية."
    },
    {
      titleEn: "Q4. Explain Series and Parallel Circuits with Diagrams.",
      titleAr: "س4. اشرح دوائر التوالي والتوازي مع الرسم.",
      imageSrc: "images/D3.png",
      ansEn: "• Series Circuit: Resistors are connected end-to-end in a single path. Current is identical, voltage is divided: RT = R1 + R2 + R3<br>• Parallel Circuit: Resistors share common nodes. Voltage is identical across branches, current is divided: 1/RT = 1/R1 + 1/R2 + 1/R3",
      ansAr: "• دائرة التوالي: تتصل المقاومات في مسار واحد متسلسل. التيار متساوٍ، والجهد يتوزع: RT = R1 + R2 + R3<br>• دائرة التوازي: تتصل المقاومات بين نفس العقدتين. الجهد متساوٍ، والتيار يتوزع: 1/RT = 1/R1 + 1/R2 + 1/R3",
      expEn: "Series = Same Current. Parallel = Same Voltage.",
      expAr: "التوالي = نفس التيار في كل المكونات. التوازي = نفس الجهد على كل الفروع."
    },
    {
      titleEn: "Q5. Explain KCL and KVL with Circuit Diagrams.",
      titleAr: "س5. اشرح قانون كيرشوف للتيار (KCL) وقانون كيرشوف للجهد (KVL) مع الرسم.",
      imageSrc: "images/D4.png",
      ansEn: "• Kirchhoff’s Current Law (KCL): The algebraic sum of currents entering a node equals those leaving it: ∑ I_in = ∑ I_out<br>• Kirchhoff’s Voltage Law (KVL): The algebraic sum of voltages around any closed loop equals zero: ∑ V = 0",
      ansAr: "• قانون كيرشوف للتيار (KCL): مجموع التيارات الداخلة إلى العقدة يساوي مجموع التيارات الخارجة منها: ∑ I_in = ∑ I_out<br>• قانون كيرشوف للجهد (KVL): المجموع الجبري للجهود الكهربائية حول أي مسار مغلق يساوي صفراً: ∑ V = 0",
      expEn: "KCL applies to currents at junction nodes; KVL applies to voltages in closed loop paths.",
      expAr: "قانون KCL يُطبق عند نقاط التقاء الأسلاك (العقد)، وقانون KVL يُطبق على الجهود داخل الحلقة المغلقة."
    },
    {
      titleEn: "Q6. Explain Thevenin’s and Norton’s Theorems with Diagrams.",
      titleAr: "س6. اشرح نظرية ثيفنين ونظرية نورتون مع الرسم.",
      imageSrc: "images/D5.png",
      ansEn: "• Thevenin’s Theorem: Replaces a linear circuit with an equivalent single voltage source (Vth) in series with a resistor (Rth).<br>• Norton’s Theorem: Replaces a linear circuit with an equivalent single current source (In) in parallel with a resistor (Rn).",
      ansAr: "• نظرية ثيفنين: تستبدل الدائرة الخطية بمصدر جهد مكافئ (Vth) على التوالي مع مقاومة مكافئة (Rth).<br>• نظرية نورتون: تستبدل الدائرة الخطية بمصدر تيار مكافئ (In) على التوازي مع مقاومة مكافئة (Rn).",
      expEn: "Thevenin = Voltage Source + Series Resistor. Norton = Current Source + Parallel Resistor.",
      expAr: "ثيفنين = مصدر جهد + مقاومة توالي. نورتون = مصدر تيار + مقاومة توازي."
    },
    {
      titleEn: "Q7. Differentiate between Conductors, Insulators, and Semiconductors with Examples.",
      titleAr: "س7. قارن بين الموصلات والعوازل وأشباه الموصلات مع الأمثلة.",
      ansEn: "• Conductors: Allow electric current to flow easily. (Examples: Copper, Silver)<br>• Insulators: Strongly oppose electric current flow. (Examples: Rubber, Plastic)<br>• Semiconductors: Conductivity lies between conductors and insulators. (Examples: Silicon, Germanium)",
      ansAr: "• الموصلات: تسمح بمرور التيار الكهربائي بسهولة. (أمثلة: النحاس، الفضة)<br>• العوازل: تعيق مرور التيار الكهربائي بشدة. (أمثلة: المطاط، البلاستيك)<br>• أشباه الموصلات: توصيليتها تقع بين الموصلات والعوازل. (أمثلة: السيليكون، الجرمانيوم)",
      expEn: "Copper = Conductor, Rubber = Insulator, Silicon = Semiconductor.",
      expAr: "النحاس موصل ممتاز، المطاط عازل قاطع، والسيليكون شبه موصل نستخدمه في الإلكترونيات."
    },
    {
      titleEn: "Q8. Draw the Energy Band Diagram of Materials.",
      titleAr: "س8. ارسم مخطط حزم الطاقة (Energy Band Diagram) للمواد المختلفة.",
      imageSrc: "images/D6.png",
      ansEn: "• Conductor: Valence and conduction bands overlap (no forbidden energy gap).<br>• Semiconductor: Small forbidden energy gap (~1.1 eV for Si).<br>• Insulator: Very large forbidden energy gap (> 5 eV).",
      ansAr: "• الموصل: تتداخل حزمة التكافؤ وحزمة التوصيل (لا توجد فجوة طاقة محظورة).<br>• شبه الموصل: فجوة طاقة محظورة صغيرة جدًا (~1.1 eV للسيليكون).<br>• العازل: فجوة طاقة محظورة كبيرة جدًا (> 5 eV).",
      expEn: "Primary visual difference is the size of the gap between valence and conduction bands.",
      expAr: "الفرق البصري الأساسي في الرسم هو اتساع وحجم فجوة الطاقة بين نطاق التكافؤ ونطاق التوصيل."
    },
    {
      titleEn: "Q9. Differentiate between Majority and Minority Carriers with Examples.",
      titleAr: "س9. قارن بين حاملات الشحنة الأغلبية والأقلية مع الأمثلة.",
      ansEn: "• Majority Carriers: Charge carriers present in large quantities, carrying most current.<br>• Minority Carriers: Charge carriers present in small quantities.<br><br>• N-Type: Majority = Electrons | Minority = Holes<br>• P-Type: Majority = Holes | Minority = Electrons",
      ansAr: "• حاملات الأغلبية: متوفرة بكثرة وتتولى نقل معظم التيار الكهربائي.<br>• حاملات الأقلية: متوفرة بكميات قليلة جداً.<br><br>• النوع N: الأغلبية = الإلكترونات | الأقلية = الفجوات<br>• النوع P: الأغلبية = الفجوات | الأقلية = الإلكترونات",
      expEn: "Focuses on which charge carriers dominate in N-Type versus P-Type materials.",
      expAr: "يركز السؤال على تحديد أي نوع من الشحنات يسيطر في المادة N وفي المادة P."
    },
    {
      titleEn: "Q10. Describe P-Type and N-Type Semiconductors Formation.",
      titleAr: "س10. اشرح كيفية تكوين أشباه الموصلات من النوع P والنوع N.",
      ansEn: "• N-Type Formation: Formed by doping intrinsic semiconductor with pentavalent donor impurities (e.g., Phosphorus, Arsenic).<br>• P-Type Formation: Formed by doping intrinsic semiconductor with trivalent acceptor impurities (e.g., Boron, Aluminum).",
      ansAr: "• تكوين النوع N: يتم بتطعيم شبه الموصل النقي بشوائب خماسية التكافؤ (مانحة) مثل الفوسفور والزرنيخ.<br>• تكوين النوع P: يتم بتطعيم شبه الموصل النقي بشوائب ثلاثية التكافؤ (مستقبلة) مثل البورون والألومنيوم.",
      expEn: "N-type uses 5-valence donor elements; P-type uses 3-valence acceptor elements.",
      expAr: "النوع N يتكون بشوائب خماسية التكافؤ، والنوع P يتكون بشوائب ثلاثية التكافؤ."
    },
    {
      titleEn: "Q11. Write the Difference between Ideal and Practical Diode.",
      titleAr: "س11. اكتب الفرق بين الدايود المثالي والدايود العملي.",
      ansEn: "• Ideal Diode: Zero forward voltage drop (0V), zero forward resistance, infinite reverse resistance, no reverse leakage current.<br>• Practical Diode: Has forward voltage drop (~0.7V for Si), small forward resistance, high reverse resistance, small reverse leakage current.",
      ansAr: "• الدايود المثالي: هبوط جهد أمامي معدوم (0V)، مقاومة أمامية صفرية، مقاومة عكسية أفقية لا نهائية، لا يوجد تيار تسريب عكسي.<br>• الدايود العملي: يمتلك هبوط جهد أمامي (~0.7V للسيليكون)، مقاومة أمامية صغيرة، مقاومة عكسية عالية جداً، ويوجد تيار تسريب عكسي بسيط.",
      expEn: "Ideal assumes zero losses; Practical accounts for real physical losses and potential drops.",
      expAr: "المثالي يمارس عمله بدون أي مفقودات، بينما العملي يراعي هبوط الجهد والتسريب الواقعي."
    },
    {
      titleEn: "Q12. Explain How You Can Build a Diode Physically. Provide a Diagram.",
      titleAr: "س12. اشرح كيف يتكون الدايود فيزيائياً مع رسم توضيحي.",
      imageSrc: "images/D7.png",
      ansEn: "A PN junction diode is constructed by joining P-type and N-type semiconductor regions in a single crystal. Free electrons from N-side combine with holes from P-side, creating a Depletion Region with a barrier potential at the junction. P-region connects to Anode, N-region to Cathode.",
      ansAr: "يتكون دايود وصلة PN بدمج منطقتين من شبه موصل P و N داخل بلورة واحدة. تتحد الإلكترونات الحرة في N مع الفجوات في P لتشكل منطقة استنزاف (Depletion Region) وحاجز جهد عند الوصلة. تتصل منطقة P بالأنود ومنطقة N بالكاثود.",
      expEn: "Draw two adjacent P and N blocks showing the middle depletion layer and barrier potential.",
      expAr: "ارسم كتلتين مجاورتين P و N وتظهر بينهما منطقة الاستنزاف والجهد الحاجز."
    },
    {
      titleEn: "Q13. Briefly Describe the Operation of an Inductor.",
      titleAr: "س13. اشرح باختصار طريقة عمل المحث (الملف).",
      imageSrc: "images/D8.png",
      ansEn: "An inductor is a passive electronic component that stores energy in a magnetic field when electric current flows through it. It resists sudden changes in current according to the induced voltage formula: VL = L × (di/dt). Inductance is measured in Henry (H).",
      ansAr: "المحث عنصر إلكتروني سلبي يخزن الطاقة في مجال مغناطيسي عند مرور التيار فيه. يقاوم التغيرات المفاجئة في التيار وفقاً لمعادلة الجهد المستحث: VL = L × (di/dt). وتُقاس المحاثة بالهنري (H).",
      expEn: "Inductors store magnetic energy and resist instantaneous current changes.",
      expAr: "المحث يخزن طاقة مغناطيسية ويقاوم التغير اللحظي في التيار."
    },
    {
      titleEn: "Q14. Describe the Working of a Transformer and Its Key Components.",
      titleAr: "س14. اشرح مبدأ عمل المحول الكهربائي ومكوناته الأساسية.",
      ansEn: "A transformer transfers AC electrical energy between circuits via mutual electromagnetic induction based on Faraday's Law.<br>Key Components:<br>1. Primary Winding: Receives input energy.<br>2. Secondary Winding: Delivers transformed output energy.<br>3. Magnetic Core: Guides magnetic flux between windings.",
      ansAr: "ينقل المحول الطاقة الكهربائية ذات التيار المتردد بين الدوائر عن طريق الحث الكهرومغناطيسي المتبادل وفقاً لقانون فاراداي.<br>المكونات الأساسية:<br>1. الملف الابتدائي: يستقبل دخل الطاقة.<br>2. الملف الثانوي: يخرج الطاقة المحولة.<br>3. القلب المغناطيسي: ينقل التدفق المغناطيسي بين الملفين.",
      expEn: "Uses alternating magnetic fields to step-up or step-down voltage levels.",
      expAr: "يعتمد على المجال المغناطيسي المتردد لرفع الجهد أو خفضه."
    },
    {
      titleEn: "Q15. A Resistor of 8 Ω Is Connected to a 16 V Battery. Find the Current.",
      titleAr: "س15. مقاومة 8 أوم متصلة ببطارية 16 فولت. أوجد التيار.",
      imageSrc: "images/D9.png",
      ansEn: "Given: R = 8 Ω, V = 16 V<br>Using Ohm’s Law:<br>I = V / R = 16 / 8 = 2 A",
      ansAr: "المعطيات: R = 8 Ω, V = 16 V<br>باستخدام قانون أوم:<br>I = V / R = 16 / 8 = 2 A",
      expEn: "Direct calculation: Divide Voltage by Resistance to get Current.",
      expAr: "تطبيق مباشر: اقسم الجهد على المقاومة للحصول على التيار."
    },
    {
      titleEn: "Q16. Find the Total Resistance Where R1 = R2 = R3 = R4 = 200 Ω.",
      titleAr: "س16. أوجد المقاومة الكلية لدائرة تحتوي على 4 مقاومات قيمة كل منها 200 أوم.",
      imageSrc: "images/D10.png",
         },
    {
      titleEn: "Q17. Find the Current and Voltage across All Resistors (20 V).",
      titleAr: "س17. أوجد التيار والجهد على كل مقاومة في دائرة مصدرها 20 فولت ومقاوماتها 2kΩ و 3kΩ و 5kΩ.",
      imageSrc: "images/D11.png",
      ansEn: "Assuming Series Connection:<br>• RT = 2k + 3k + 5k = 10 kΩ<br>• IT = V / RT = 20 V / 10 kΩ = 2 mA<br>• V across 2kΩ = 2mA × 2kΩ = 4 V<br>• V across 3kΩ = 2mA × 3kΩ = 6 V<br>• V across 5kΩ = 2mA × 5kΩ = 10 V",
      ansAr: "بافتراض توصيل التوالي:<br>• المقاومة الكلية RT = 2k + 3k + 5k = 10 kΩ<br>• التيار الكلي IT = 20 V / 10 kΩ = 2 mA<br>• الجهد على 2kΩ = 2mA × 2kΩ = 4 V<br>• الجهد على 3kΩ = 2mA × 3kΩ = 6 V<br>• الجهد على 5kΩ = 2mA × 5kΩ = 10 V",
      expEn: "Series circuit has constant current (2mA); voltages divide proportionally.",
      expAr: "في دائرة التوالي يكون التيار ثابتاً (2mA)، وتتوزع الجهود بنسبة المقاومات."
    },
    {
      titleEn: "Q18. Find the Current and Voltage across All Resistors (18 V).",
      titleAr: "س18. أوجد التيار والجهد على جميع المقاومات في دائرة مصدرها 18 فولت ومقاوماتها 2kΩ و 3kΩ و 4kΩ.",
      imageSrc: "images/D12.png",
      ansEn: "Assuming Series Connection:<br>• RT = 2k + 3k + 4k = 9 kΩ<br>• IT = V / RT = 18 V / 9 kΩ = 2 mA<br>• V across 2kΩ = 2mA × 2kΩ = 4 V<br>• V across 3kΩ = 2mA × 3kΩ = 6 V<br>• V across 4kΩ = 2mA × 4kΩ = 8 V",
      ansAr: "بافتراض توصيل التوالي:<br>• المقاومة الكلية RT = 2k + 3k + 4k = 9 kΩ<br>• التيار الكلي IT = 18 V / 9 kΩ = 2 mA<br>• الجهد على 2kΩ = 2mA × 2kΩ = 4 V<br>• الجهد على 3kΩ = 2mA × 3kΩ = 6 V<br>• الجهد على 4kΩ = 2mA × 4kΩ = 8 V",
      expEn: "Total resistance is 9kΩ yielding 2mA current across all series resistors.",
      expAr: "المقاومة الكلية 9kΩ وتنتج تياراً قدره 2mA يمر بجميع المقاومات المتسلسلة."
    }
  ],

  // --- ج) أسئلة الدوائر الكهربائية الطويلة (Long Questions - 9 Question) ---
  "circuits_theory_midterm_long": [
    {
      id: "LQ1_circuits",
      titleEn: "Q1. Explain Resistor (R), Inductor (L), and Capacitor (C).",
      titleAr: "س1. اشرح المقاومة (R) والمحث (L) والمكثف (C) موضحاً معادلة كل منها.",
      imageSrc: "images/D13.png",
      ansEn: "• Resistor (R): Opposes current flow, dissipates energy as heat. Unit: Ohm (Ω). Equation: V = I × R<br>• Inductor (L): Stores energy in magnetic field, opposes current changes. Unit: Henry (H). Equation: V = L × (di/dt)<br>• Capacitor (C): Stores energy in electric field, opposes voltage changes. Unit: Farad (F). Equation: I = C × (dV/dt)",
      ansAr: "• المقاومة (R): تقاوم تدفق التيار وتبدد الطاقة كحرارة. الوحدة: أوم (Ω). المعادلة: V = I × R<br>• المحث (L): يخزن الطاقة في مجال مغناطيسي ويقاوم تغير التيار. الوحدة: هنري (H). المعادلة: V = L × (di/dt)<br>• المكثف (C): يخزن الطاقة في مجال كهربائي ويقاوم تغير الجهد. الوحدة: فاراد (F). المعادلة: I = C × (dV/dt)",
      expEn: "Core comparison of passive elements: R resists current, L stores magnetic field, C stores electric field.",
      expAr: "مقارنة العناصر السلبية: المقاومة تُعيق التيار، المحث يخزن مجالاً مغناطيسياً، والمكثف يخزن مجالاً كهربائياً."
    },
    {
      id: "LQ2_circuits",
      titleEn: "Q2. Explain PN Junction Diode in Forward and Reverse Bias with V-I Characteristics.",
      titleAr: "س2. اشرح عمل دايود PN في الانحياز الأمامي والعكسي مع منحنى خصائص الجهد والتيار.",
      imageSrc: "images/D14.png",
      ansEn: "• Forward Bias: Positive terminal to P-side, Negative to N-side. Depletion layer narrows, current flows rapidly above barrier potential (~0.7V for Si).<br>• Reverse Bias: Positive terminal to N-side, Negative to P-side. Depletion layer widens, blocking main current except tiny leakage current until breakdown.<br>• V-I Curve: Shows exponential current growth in forward bias after knee voltage, and zero current in reverse bias until breakdown.",
      ansAr: "• الانحياز الأمامي: الطرف الموجب مع P والسالب مع N. تضيق منطقة الاستنزاف ويمر التيار بزيادة فوق الجهد الحاجز (~0.7V للسيليكون).<br>• الانحياز العكسي: الطرف الموجب مع N والسالب مع P. تتسع منطقة الاستنزاف وينقطع التيار باستثناء تسريب ضئيل جداً حتى جهد الانهيار.<br>• منحنى V-I: يوضح نمواً أسياً للتيار في الأمامي بعد جهد الركبة، وتياراً شبه معدوم في العكسي.",
      expEn: "Forward conducts main current; Reverse blocks current flow completely until breakdown.",
      expAr: "التوصيل الأمامي يمرر التيار الرئيسي، بينما التوصيل العكسي يحجب التيار تماماً حتى الوصول للانهيار."
    },
    {
      id: "LQ3_circuits",
      titleEn: "Q3. Explain Light-Emitting Diode (LED) and Its Characteristics.",
      titleAr: "س3. اشرح الدايود الباعث للضوء (LED) وخصائصه.",
      imageSrc: "images/D15.png",
      ansEn: "A Light-Emitting Diode (LED) is a specialized PN junction diode that converts electrical energy directly into light via electroluminescence when forward-biased.<br>Characteristics:<br>1. Emits visible or infrared light upon electron-hole recombination.<br>2. Operates exclusively in forward bias.<br>3. Requires typical forward voltage from 1.8V to 3.3V depending on light color.<br>4. Light intensity is proportional to forward current.",
      ansAr: "الدايود الباعث للضوء (LED) هو دايود PN متخصص يحول الطاقة الكهربائية مباشرة إلى ضوء عبر ظاهرة التوهج الكهربائي عند الانحياز الأمامي.<br>الخصائص:<br>1. يبعث ضوءاً مرئياً أو تحت أحمر عند اتحاد الإلكترونات بالفجوات.<br>2. يعمل حصرياً في الانحياز الأمامي.<br>3. يتطلب جهداً أمامياً تشغيلياً بين 1.8V إلى 3.3V حسب لون الضوء.<br>4. تتناسب شدة الإضاءة طردياً مع قيمة التيار الأمامي.",
      expEn: "Key principle: Recombination of electron-hole pairs in forward bias releases photons (light).",
      expAr: "المبدأ الأساسي: إعادة اتحاد أزواج الإلكترون والفجوة في الانحياز الأمامي تطلق فوتونات ضوئية."
    },
    {
      id: "LQ4_circuits",
      titleEn: "Q4. Explain the Two Types of Extrinsic Semiconductors with Examples.",
      titleAr: "س4. اشرح نوعي أشباه الموصلات غير النقية (Extrinsic) مع الأمثلة.",
      ansEn: "Extrinsic semiconductors are created by adding impurities (Doping) to intrinsic materials.<br><br>1. N-Type Semiconductor: Doped with Pentavalent impurities (Donors) such as Phosphorus or Arsenic. Electrons become majority carriers, holes are minority.<br><br>2. P-Type Semiconductor: Doped with Trivalent impurities (Acceptors) such as Boron, Aluminum, or Gallium. Holes become majority carriers, electrons are minority.",
      ansAr: "أشباه الموصلات غير النقية تتكون بإضافة شوائب (عملية التطعيم Doping) إلى المواد النقية.<br><br>1. شبه الموصل من النوع N: يتم تطعيمه بشوائب خماسية التكافؤ (مانحة) مثل الفوسفور أو الزرنيخ. تصبح الإلكترونات حاملات الأغلبية والفجوات الأقلية.<br><br>2. شبه الموصل من النوع P: يتم تطعيمه بشوائب ثلاثية التكافؤ (مستقبلة) مثل البورون أو الألومنيوم. تصبح الفجوات حاملات الأغلبية والإلكترونات الأقلية.",
      expEn: "Doping with 5-valence elements gives N-type; Doping with 3-valence elements gives P-type.",
      expAr: "التطعيم بافتراض 5 إلكترونات ينتج N-type، والتطعيم بـ 3 إلكترونات ينتج P-type."
    },
    {
      id: "LQ5_circuits",
      titleEn: "Q5. Explain the Electrical Device Generator and How It Works.",
      titleAr: "س5. اشرح المولد الكهربائي (Generator) وكيف يعمل.",
      imageSrc: "images/D16.png",
      ansEn: "A generator is an electromechanical device that converts mechanical energy into electrical energy.<br>Working Principle: Operates on Faraday's Law of Electromagnetic Induction. When a conductor rotates within a magnetic field, the changing magnetic flux induces an electromotive force (EMF) / voltage.<br>Main Components: Rotor (rotating part), Stator (stationary part), Armature windings, and Field magnets.",
      ansAr: "المولد هو جهاز كهروميكانيكي يحول الطاقة الميكانيكية إلى طاقة كهربائية.<br>مبدأ العمل: يعتمد على قانون فاراداي للحث الكهرومغناطيسي. عند دوران موصل داخل مجال مغناطيسي، فإن تغير التدفق المغناطيسي يستحث قوة دافعة كهربائية (EMF) / جهداً.<br>المكونات الرئيسية: العضو الدوار (Rotor)، العضو الثابت (Stator)، ملفات المنتج (Armature)، والمغناطيسات.",
      expEn: "Generator conversion rule: Mechanical Input Power -> Electrical Output Power.",
      expAr: "قاعدة تحويل المولد: قدرة ميكانيكية مدخلة -> قدرة كهربائية مخرجة."
    },
    {
      id: "LQ6_circuits",
      titleEn: "Q6. Explain Kirchhoff’s Voltage Law and Current Law with Diagrams.",
      titleAr: "س6. اشرح قانون كيرشوف للجهد (KVL) وقانون كيرشوف للتيار (KCL) مع الرسومات التوضيحية.",
      imageSrc: "images/D17.png",
      ansEn: "• Kirchhoff’s Current Law (KCL): Based on charge conservation. The sum of currents entering a node equals the sum of currents exiting that node: ∑ I_in = ∑ I_out.<br><br>• Kirchhoff’s Voltage Law (KVL): Based on energy conservation. The algebraic sum of all potential differences (voltages) in any closed loop equals zero: ∑ V = 0.",
      ansAr: "• قانون كيرشوف للتيار (KCL): مبني على حفظ الشحنة. مجموع التيارات الداخلة إلى عقدة يساوي مجموع التيارات الخارجة منها: ∑ I_in = ∑ I_out.<br><br>• قانون كيرشوف للجهد (KVL): مبني على حفظ الطاقة. المجموع الجبري لجميع فروق الجهد (الجهود) في أي مسار مغلق يساوي صفراً: ∑ V = 0.",
      expEn: "KCL applies to nodes (Charge conservation); KVL applies to loops (Energy conservation).",
      expAr: "قانون KCL يطبق عند العقد (حفظ الشحنة)، وقانون KVL يطبق داخل الحلقات (حفظ الطاقة)."
    },
    {
      id: "LQ7_circuits",
      titleEn: "Q7. Find the source voltage Vs and the source current Is in a circuit where a branch containing 3kΩ has a current of 2mA.",
      titleAr: "س7. أوجد جهد المصدر Vs وتيار المصدر Is بدائرة يحتوي فرع 3kΩ فيها على تيار 2mA.",
      imageSrc: "images/D18.png",
      ansEn: "Given: Current through 3 kΩ resistor (I3) = 2 mA.<br>1. Voltage across 3 kΩ branch: V3 = I3 × R3 = 2 mA × 3 kΩ = 6 V.<br>2. Assuming 4 kΩ resistor is parallel with 3 kΩ resistor: I4 = V3 / R4 = 6 V / 4 kΩ = 1.5 mA.<br>3. Total Source Current: Is = I3 + I4 = 2 mA + 1.5 mA = 3.5 mA.<br>4. Assuming 2 kΩ resistor is in series with source: V_series = Is × 2 kΩ = 3.5 mA × 2 kΩ = 7 V.<br>5. Source Voltage: Vs = V_series + V3 = 7 V + 6 V = 13 V.",
      ansAr: "المعطيات: التيار في مقاومة 3kΩ يساوي 2mA.<br>1. الجهد عبر فرع 3kΩ: V3 = 2 mA × 3 kΩ = 6 V.<br>2. بافتراض مقاومة 4kΩ متوازية معها: I4 = 6 V / 4 kΩ = 1.5 mA.<br>3. تيار المصدر الكلي: Is = 2 mA + 1.5 mA = 3.5 mA.<br>4. بافتراض مقاومة 2kΩ متوالية مع المصدر: V_series = 3.5 mA × 2 kΩ = 7 V.<br>5. جهد المصدر الكلي: Vs = 7 V + 6 V = 13 V.",
      expEn: "Step-by-step circuit solution using Ohm's Law and Kirchhoff's Laws.",
      expAr: "تحليل خطوة بخطوة للجمع بين قانون أوم وقوانين كيرشوف."
    },
    {
      id: "LQ8_circuits",
      titleEn: "Q8. Find the current and voltage for each resistor, where R1 = 10kΩ, R2 = 2kΩ, R3 = 4kΩ, and the source voltage is 20V.",
      titleAr: "س8. أوجد قيمة التيار والجهد لكل مقاومة حيث R1=10kΩ, R2=2kΩ, R3=4kΩ وجُهد المصدر 20V.",
      imageSrc: "images/D19.png",
      ansEn: "Assuming Series Connection:<br>1. Total Resistance: RT = R1 + R2 + R3 = 10k + 2k + 4k = 16 kΩ.<br>2. Total Current: IT = Vs / RT = 20 V / 16 kΩ = 1.25 mA.<br>3. Voltage across R1 (10 kΩ): V1 = 1.25 mA × 10 kΩ = 12.5 V.<br>4. Voltage across R2 (2 kΩ): V2 = 1.25 mA × 2 kΩ = 2.5 V.<br>5. Voltage across R3 (4 kΩ): V3 = 1.25 mA × 4 kΩ = 5.0 V.",
      ansAr: "بافتراض توصيل التوالي:<br>1. المقاومة الكلية: RT = 10k + 2k + 4k = 16 kΩ.<br>2. التيار الكلي: IT = 20 V / 16 kΩ = 1.25 mA.<br>3. الجهد على المقاومة R1 (10 kΩ): V1 = 1.25 mA × 10 kΩ = 12.5 V.<br>4. الجهد على المقاومة R2 (2 kΩ): V2 = 1.25 mA × 2 kΩ = 2.5 V.<br>5. الجهد على المقاومة R3 (4 kΩ): V3 = 1.25 mA × 4 kΩ = 5.0 V.",
      expEn: "Calculate total equivalent resistance first, then compute individual voltage drops.",
      expAr: "احسب المقاومة الكلية المكافئة أولاً، ثم احسب هبوط الجهد على كل مقاومة."
    },
    {
      id: "LQ9_circuits",
      titleEn: "Q9. Calculate the power dissipated in the diode and clarify whether it will be damaged or not. (The allowable power is 3W, and the voltage is 2V and the current is 1.75A.)?",
      titleAr: "س9. احسب القدرة المتبددة في الدايود مع توضيح هل سيتلف أم لا؟ (القدرة المسموحة 3W والجهد 2V والتيار 1.75A).",
      imageSrc: "images/D20.png",
      ansEn: "Given: Rated Power (Prated) = 3 W, Diode Voltage (VD) = 2 V, Diode Current (ID) = 1.75 A.<br><br>1. Calculate Power Dissipation:<br>PD = VD × ID = 2 V × 1.75 A = 3.5 W<br><br>2. Evaluation:<br>Since actual power dissipation (3.5 W) exceeds the rated maximum power capacity (3 W), the diode will overheat and be destroyed.",
      ansAr: "المعطيات: القدرة المسموحة (Prated) = 3 W, جهد الدايود (VD) = 2 V, تيار الدايود (ID) = 1.75 A.<br><br>1. حساب القدرة المتبددة:<br>PD = VD × ID = 2 V × 1.75 A = 3.5 W<br><br>2. التقييم والمبرر:<br>بما أن القدرة المتبددة الفعلية (3.5 W) أكبر من القدرة القصوى المسموحة (3 W)، فإن الدايود سيعاني من سخونة مفرطة وسيتلف.",
      expEn: "Compare calculated power (3.5W) against maximum rating (3W) to prove destruction.",
      expAr: "مقارنة القدرة المحسوبة (3.5W) مع الحد المسموح (3W) لإثبات احتمالية التلف."
    }
  ],

  // ==========================================
  // === 2. هياكل البيانات وخوارزميات الشبكات (DSA) ===
  // ==========================================
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