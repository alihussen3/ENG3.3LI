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
  // === هياكل البيانات وخوارزميات (DSA) ===
  // ==========================================

  // --- أ) الاختيارات (MCQ - 13 Questions) ---
  "dsa_theory_midterm_mcq": [
    {
      q: "1) If each node has a data field and a reference field to another node called next or successor, the sequence of nodes is referred to as a ________",
      qAr: "1) إذا كانت كل عقدة تحتوي على حقل بيانات وحقل مرجعي لعقدة أخرى يُسمى \"التالي\" (next) أو \"اللاحق\" (successor)، فإن تسلسل هذه العقد يُسمى ________.",
      options: [
        {txt: "(a) Queue", ar: "طابور"},
        {txt: "(b) Recursion", ar: "استدعاء ذاتي"},
        {txt: "(c) Singly Linked List", ar: "قائمة مترابطة أحادية"},
        {txt: "(d) Stack", ar: "مكدس"}
      ],
      ans: 2
    },
    {
      q: "2) The ________ data structure is called a First In First Out (FIFO) data structure.",
      qAr: "2) هيكل البيانات الذي يُطلق عليه هيكل \"أول من يدخل، أول من يخرج\" (FIFO) هو ________.",
      options: [
        {txt: "(a) List", ar: "قائمة"},
        {txt: "(b) Queue", ar: "طابور"},
        {txt: "(c) Stack", ar: "مكدس"},
        {txt: "(d) LinkedList", ar: "قائمة مترابطة"}
      ],
      ans: 1
    },
    {
      q: "3) Nodes in a tree with the same parent are called ________",
      qAr: "3) العقد في الشجرة التي تمتلك نفس الأب تُسمى ________.",
      options: [
        {txt: "(a) Siblings", ar: "أشقاء / إخوة"},
        {txt: "(b) Depth", ar: "عمق"},
        {txt: "(c) Height", ar: "ارتفاع"},
        {txt: "(d) Position", ar: "موقع"}
      ],
      ans: 0
    },
    {
      q: "4) The complexity of following structure code is ________",
      qAr: "4) التعقيد الزمني للكود التالي هو ________.",
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
      q: "5) Which one of the following is not a Queue operation?",
      qAr: "5) أي مما يلي لا يُعد من عمليات الطابور (Queue)؟",
      options: [
        {txt: "(a) Enqueue", ar: "إضافة للطابور"},
        {txt: "(b) Dequeue", ar: "حذف من الطابور"},
        {txt: "(c) GetHead", ar: "جلب العنصر الأول"},
        {txt: "(d) PutHead", ar: "وضع في الرأس (ليست ضمن الطابور)"}
      ],
      ans: 3
    },
    {
      q: "6) The last element that is pushed into the ________, is the first element to be popped out of it.",
      qAr: "6) العنصر الأخير الذي يتم إدخاله (pushed) في ________، هو أول عنصر يتم إخراجه (popped) منه.",
      options: [
        {txt: "(a) List", ar: "قائمة"},
        {txt: "(b) Stack", ar: "مكدس"},
        {txt: "(c) Queue", ar: "طابور"},
        {txt: "(d) Circular Queue", ar: "طابور دائري"}
      ],
      ans: 1
    },
    {
      q: "7) Which of the following represents the tight upper bound of an algorithm's running time?",
      qAr: "7) أي مما يلي يمثل الحد الأعلى الدقيق (Upper Bound) لوقت تشغيل الخوارزمية؟",
      options: [
        {txt: "(a) Big-Omega (Ω)", ar: "أوميغا الكبرى"},
        {txt: "(b) Big-O (O)", ar: "O الكبرى"},
        {txt: "(c) Big-Theta (Θ)", ar: "ثيتا الكبرى"},
        {txt: "(d) Little-o (o)", ar: "o الصغرى"}
      ],
      ans: 1
    },
    {
      q: "8) What is the time complexity of accessing an element by index in an Array?",
      qAr: "8) ما هو التعقيد الزمني للوصول إلى عنصر عن طريق الفهرس (Index) في المصفوفة؟",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 0
    },
    {
      q: "9) In a Singly Linked List, inserting a node at the head takes ________ time.",
      qAr: "9) في القائمة المترابطة الأحادية، إدراج عقدة في الرأس (Head) يستغرق وقتاً بقيمة ________.",
      options: [
        {txt: "(a) O(n)", ar: "O(n)"},
        {txt: "(b) O(1)", ar: "O(1)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 1
    },
    {
      q: "10) Deleting the last node in a Singly Linked List with only a head reference takes ________ time.",
      qAr: "10) حذف العقدة الأخيرة في قائمة مترابطة أحادية بوجود مرجع للرأس فقط يستغرق وقتاً بقيمة ________.",
      options: [
        {txt: "(a) O(1)", ar: "O(1)"},
        {txt: "(b) O(n)", ar: "O(n)"},
        {txt: "(c) O(log n)", ar: "O(log n)"},
        {txt: "(d) O(n²)", ar: "O(n²)"}
      ],
      ans: 1
    },
    {
      q: "11) What happens if a recursive function does not have a Base Case?",
      qAr: "11) ماذا يحدث إذا كانت الدالة التكرارية (Recursion) لا تحتوي على حالة أساس (Base Case)؟",
      options: [
        {txt: "(a) It runs faster", ar: "تعمل بشكل أسرع"},
        {txt: "(b) It causes Stack Overflow", ar: "تسبب تجاوز سعة المكدس"},
        {txt: "(c) It returns null", ar: "تُرجع قيمة فارغة"},
        {txt: "(d) It terminates successfully", ar: "تنتهي بنجاح"}
      ],
      ans: 1
    },
    {
      q: "12) Which linked list structure has its tail node pointing back to the head node?",
      qAr: "12) أي بنية قائمة مترابطة يشير فيها عنصر الذيل (Tail) إلى عنصر الرأس (Head)؟",
      options: [
        {txt: "(a) Singly Linked List", ar: "قائمة مترابطة أحادية"},
        {txt: "(b) Doubly Linked List", ar: "قائمة مترابطة مزدوجة"},
        {txt: "(c) Circularly Linked List", ar: "قائمة مترابطة دائرية"},
        {txt: "(d) Stack", ar: "مكدس"}
      ],
      ans: 2
    },
    {
      q: "13) ______ is a technique that allows us to break down a problem into one or more simpler sub-problems that are similar in form to the original problem.",
      qAr: "13) ما التقنية التي تقسم المشكلة إلى مشكلات أصغر تشبه المشكلة الأصلية؟",
      options: [
        {txt: "(a) Bit Rate", ar: "معدل البتات"},
        {txt: "(b) Analog Signal", ar: "إشارة تناظرية"},
        {txt: "(c) Recursion", ar: "الاستدعاء الذاتي"},
        {txt: "(d) Position", ar: "الموقع"}
      ],
      ans: 2
    }
  ],

  // --- ب) الأسئلة القصيرة (Short Questions - 10 Questions) ---
  "dsa_theory_midterm_short": [
    {
      titleEn: "Q1. What is Stack? Explain with the help of a diagram.",
      titleAr: "س1. ما هو المكدس؟ اشرحه باستخدام رسم.",
      imageSrc: "images/H1.png",
      ansEn: "A Stack is a linear data structure that follows LIFO (Last In, First Out). Elements are added and removed from the top.<br>- Push: Adds an element.<br>- Pop: Removes the top element.",
      ansAr: "المكدس هيكل بيانات خطي يعمل بمبدأ آخر داخل أول خارج. نضيف ونحذف العناصر من الأعلى.<br>- Push: لإضافة عنصر.<br>- Pop: لحذف العنصر العلوي.",
      expEn: "Elements are processed in LIFO order.",
      expAr: "تخيل ثلاثة صحون فوق بعض، آخر صحن تحطه هو أول واحد تشيله."
    },
    {
      titleEn: "Q2. Explain any three applications of Stack.",
      titleAr: "س2. اشرح ثلاثة استخدامات للمكدس.",
      imageSrc: "images/H2.png",
      ansEn: "- Undo: Reverses the last action.<br>- Browser History: Stores visited pages.<br>- Postfix Evaluation: Evaluates mathematical expressions.",
      ansAr: "- التراجع عن آخر عملية (Undo).<br>- حفظ سجل الصفحات التي تمت زيارتها (Browser History).<br>- حساب التعابير الرياضية بصيغة Postfix.",
      expEn: "Stack applications rely on reversing order.",
      expAr: "كلها تعتمد على الرجوع إلى آخر شيء تم تخزينه."
    },
    {
      titleEn: "Q3. Explain complexity of linear search in best, average, and worst cases.",
      titleAr: "س3. اشرح تعقيد البحث الخطي في أفضل ومتوسط وأسوأ الحالات.",
      imageSrc: "images/H3.png",
      ansEn: "- Best Case: O(1) - Element found first.<br>- Average Case: O(n) - About (n+1)/2 comparisons.<br>- Worst Case: O(n) - Element found last or not found.",
      ansAr: "- أفضل حالة: O(1)، العنصر في البداية.<br>- متوسط حالة: O(n)، نحتاج تقريبًا نصف عدد المقارنات.<br>- أسوأ حالة: O(n)، العنصر في النهاية أو غير موجود.",
      expEn: "Linear search checks elements sequentially.",
      expAr: "كلما كان العنصر أبعد، احتجنا مقارنات أكثر."
    },
    {
      titleEn: "Q4. Explain StackAsArray purge() Method with example.",
      titleAr: "س4. اشرح دالة purge في StackAsArray مع مثال.",
      imageSrc: "images/H4.png",
      ansEn: "The purge() method removes all elements from the stack by setting their array positions to null.<br><br>public void purge() {<br>    while (count > 0)<br>        array[--count] = null;<br>}<br><br>Time Complexity: O(n).",
      ansAr: "تحذف جميع عناصر المكدس بوضع null مكانها، وتعقيدها O(n).",
      expEn: "Clears internal array storage.",
      expAr: "إذا عندك 3 عناصر، تحتاج تمر على الثلاثة وتحذفها."
    },
    {
      titleEn: "Q5. Define Asymptotic Complexity.",
      titleAr: "س5. عرّف التعقيد التقاربي.",
      imageSrc: "images/H5.png",
      ansEn: "Asymptotic complexity describes how an algorithm’s time or operations grow as the input size increases.",
      ansAr: "يوضح كيف يزداد وقت تنفيذ الخوارزمية أو عدد عملياتها عندما يكبر حجم المدخلات.",
      expEn: "Focuses on growth rate rather than exact execution seconds.",
      expAr: "نهتم بمعدل النمو، مو بالوقت الدقيق بالثواني."
    },
    {
      titleEn: "Q6. What is Singly Linked List? List out the different types of Linked List along with diagram.",
      titleAr: "س6. ما هي القائمة المترابطة الأحادية؟ اذكر أنواع القوائم المترابطة مع رسم.",
      imageSrc: "images/H6.png",
      ansEn: "A Singly Linked List is a sequence of nodes. Each node contains data and a pointer to the next node.<br><br>Types:<br>- Singly Linked List<br>- Circularly Linked List<br>- Doubly Linked List",
      ansAr: "القائمة المترابطة الأحادية سلسلة عقد، كل عقدة تحتوي على بيانات ومؤشر للعقدة التالية.<br><br>الأنواع:<br>- أحادية (Singly)<br>- دائرية (Circularly)<br>- مزدوجة (Doubly)",
      expEn: "Linked lists connect nodes dynamically via pointers.",
      expAr: "الفرق الرئيسي بينها هو طريقة ارتباط العقد ببعضها عبر المؤشرات."
    },
    {
      titleEn: "Q7. Define Tree and write the applications of Tree.",
      titleAr: "س7. عرّف الشجرة واذكر استخداماتها.",
      imageSrc: "images/H7.png",
      ansEn: "A Tree is a non-linear data structure consisting of nodes connected by parent-child relationships.<br><br>Applications:<br>- File directories.<br>- Organization charts.<br>- Expression trees.<br>- Search trees.",
      ansAr: "الشجرة هيكل بيانات غير خطي، تتصل عقده بعلاقات الأب والابن.<br><br>التطبيقات:<br>- المجلدات والملفات.<br>- الهياكل التنظيمية.<br>- تعابير العمليات الرياضية.<br>- شجيرات البحث.",
      expEn: "Hierarchical data representation.",
      expAr: "الشجرة تنظم البيانات على شكل مستويات وتفرعات."
    },
    {
      titleEn: "Q8. Write the complexity of the marked part of code and the overall program complexity.",
      titleAr: "س8. اكتب تعقيد الأجزاء المحددة من الكود والتعقيد الكلي للبرنامج.",
      imageSrc: "images/H8.png",
      ansEn: "- Case ‘a’: O(n)<br>- Case ‘b’: O(n²)<br>- Overall worst-case complexity: O(n²)<br><br>Here, X has n elements and Y is an n × n array.",
      ansAr: "- الحالة الأولى (a): O(n).<br>- الحالة الثانية (b): O(n²).<br>- التعقيد الكلي في أسوأ حالة: O(n²).",
      expEn: "Switch statement takes the maximum branch complexity.",
      expAr: "لأن الـ Switch ينفذ حالة واحدة، نأخذ تعقيد الحالة الأكبر ولا نجمع الحالتين."
    },
    {
      titleEn: "Q9. Compare the complexity of any three sorting algorithms.",
      titleAr: "س9. قارن تعقيد أي ثلاث خوارزميات ترتيب.",
      imageSrc: "images/H9.png",
      ansEn: "Algorithm | Average | Worst<br>Selection Sort | O(n²) | O(n²)<br>Merge Sort | O(n log n) | O(n log n)<br>Quick Sort | O(n log n) | O(n²)",
      ansAr: "• Selection: متوسط O(n²) وأسوأ O(n²).<br>• Merge: متوسط O(n log n) وأسوأ O(n log n).<br>• Quick: متوسط O(n log n) وأسوأ O(n²).",
      expEn: "Comparison of sorting time complexities.",
      expAr: "أهم فرق أن Quick Sort قد تصل إلى أسوأ حالة O(n²)."
    },
    {
      titleEn: "Q10. Consider the following tree and answer the questions based on it.",
      titleAr: "س10. انظر إلى الشجرة التالية وأجب عن الأسئلة.",
      imageSrc: "images/H10.png",
      ansEn: "(a) How many edges are in this tree? -> 8 edges.<br>(b) What do we call node W? -> Leaf node.<br>(c) Which nodes are leaves? -> W, A, K, C, X.<br>(d) Is it a binary tree? -> No, because Q has three children.<br>(e) What is the height of a tree with only one node? -> 0.",
      ansAr: "(a) عدد الحواف: 8 حواف.<br>(b) ماذا نسمي العقدة W؟ ورقة (Leaf node).<br>(c) ما هي الأوراق؟ W, A, K, C, X.<br>(d) هل هي شجرة ثنائية؟ لا، لأن Q لها 3 أبناء.<br>(e) ارتفاع شجرة بعقدة واحدة؟ 0.",
      expEn: "Tree properties analysis.",
      expAr: "تحليل خصائص ومكونات الشجرة من حيث الحواف والأوراق والارتفاع."
    }
  ],

  // --- ج) الأسئلة الطويلة (Long Questions - 5 Questions) ---
  "dsa_theory_midterm_long": [
    {
      id: "LQ1_stack",
      titleEn: "Q1. Write the program for stack to demonstrate its operations.",
      titleAr: "س1. اكتب برنامجًا يوضح عمليات الـ Stack.",
      imageSrc: "images/H11.png",
      ansEn: "class Stack {<br>    int top = -1;<br>    int[] stack = new int[5];<br>    void push(int x) {<br>        if (top == 4) System.out.println(\"Full\");<br>        else stack[++top] = x;<br>    }<br>    void pop() {<br>        if (top == -1) System.out.println(\"Empty\");<br>        else top--;<br>    }<br>}",
      ansAr: "برنامج مبسط للمكدس يوضح دالة push للإضافة ودالة pop للحذف مع تتبع مؤشر القمة top.",
      expEn: "Demonstrates basic array-based stack operations.",
      expAr: "توضيح عملي لعمليات المكدس باستخدام المصفوفات."
    },
    {
      id: "LQ2_queue",
      titleEn: "Q2. What is Queue? Explain with the help of a diagram.",
      titleAr: "س2. ما هو الطابور؟ اشرحه مع الرسم.",
      imageSrc: "images/H12.png",
      ansEn: "A Queue is a linear data structure that follows FIFO (First In, First Out).<br>- Enqueue: Adds an element at the rear.<br>- Dequeue: Removes an element from the front.<br>- GetHead: Returns the front element without removing it.",
      ansAr: "الـ Queue هيكل بيانات خطي يعمل بمبدأ أول داخل أول خارج (FIFO).<br>- Enqueue: إضافة من الخلف.<br>- Dequeue: حذف من الأمام.<br>- GetHead: قراءة العنصر الأول بدون حذفه.",
      expEn: "FIFO data structure explanation.",
      expAr: "طابور الانتظار، أول شخص يدخل هو أول شخص يطلع."
    },
    {
      id: "LQ3_recursion",
      titleEn: "Q3. What is a Recursive Method? Explain the recursive method for computing Factorial of a number, N.",
      titleAr: "س3. ما هي الدالة العودية؟ اشرح استخدامها لحساب مضروب العدد N.",
      imageSrc: "images/H13.png",
      ansEn: "A recursive method is a method that calls itself to solve smaller subproblems.<br><br>int factorial(int n) {<br>    if (n == 0) return 1;<br>    return n * factorial(n - 1);<br>}",
      ansAr: "الدالة العودية تستدعي نفسها لحل مشكلة أصغر.<br>مثال المضروب: إذا كان n=0 نرجع 1، وإلا نضرب n في مضروب (n-1).",
      expEn: "Recursion base case and recursive step.",
      expAr: "كل مرة نقلل العدد واحدًا، وعندما نصل للصفر نتوقف."
    },
    {
      id: "LQ4_bigo",
      titleEn: "Q4. Explain Big-O Notation. How to determine complexities of Loops, Nested Loops, and Switch case.",
      titleAr: "س4. اشرح Big-O وكيف نحدد تعقيد الحلقات والحلقات المتداخلة وSwitch.",
      imageSrc: "images/H14.png",
      ansEn: "Big-O notation describes an asymptotic upper bound on algorithm complexity.<br>1. Loops: O(n)<br>2. Nested Loops: O(n²)<br>3. Switch case: Maximum complexity among its cases.",
      ansAr: "Big-O تصف الحد الأعلى لنمو تعقيد الخوارزمية.<br>1. Loops: حلقة مفردة = O(n).<br>2. Nested Loops: حلقتان متداخلتان = O(n²).<br>3. Switch case: نأخذ تعقيد الحالة الأكبر.",
      expEn: "Analyzing time complexity using Big-O.",
      expAr: "طريقة حساب الوقت والتعقيد باختلاف بنية الكود البرمجي."
    },
    {
      id: "LQ5_circularlist",
      titleEn: "Q5. What is Linked List? Write algorithm for adding and removing elements in Circularly Linked List.",
      titleAr: "س5. ما هي القائمة المترابطة؟ اكتب خوارزمية إضافة وحذف عنصر في القائمة المترابطة الدائرية.",
         imageSrc: "images/H15.png",
      ansEn: "A Linked List is a linear data structure made of nodes. In a Circularly Linked List, the last node points back to the first node.<br>- Insertion: Updates tail and head pointers.<br>- Deletion: Bypasses the removed node and updates circular links.",
      ansAr: "القائمة المترابطة تتكون من عقد، وفي الدائرية آخر عقدة تشير للأولى.<br>- الإضافة: تعديل روابط المؤشرات (tail و head).<br>- الحذف: تجاوز العقدة المحذوفة وإعادة ربط الدائرة.",
      expEn: "Circular linked list manipulation algorithms.",
      expAr: "كيفية الحفاظ على اتصال الدائرة عند إضافة أو حذف عقدة."
    }
  ]
};