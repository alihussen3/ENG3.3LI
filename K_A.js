const networksSignalsData = {
  // === 1. شبكات الحاسب (Networks) - قريباً ===

  // === 2. الإشارات والنظم (Signals & Systems) ===
  "signals_theory_midterm_mcq": [
    {
      q: "Q0. Which of the following is the value of e^∞?",
      qAr: "ما هي قيمة التعبير e^∞؟",
      options: [
        {txt: "(a) 0", ar: "0"},
        {txt: "(b) ∞", ar: "ما لا نهاية"},
        {txt: "(c) 1", ar: "1"},
        {txt: "(d) -1", ar: "-1"}
      ],
      ans: 1
    },
    {
      q: "Q1. Which of the following is the value of e^0?",
      qAr: "ما هي قيمة التعبير e^0؟",
      options: [
        {txt: "(a) 0", ar: "0"},
        {txt: "(b) ∞", ar: "ما لا نهاية"},
        {txt: "(c) 1", ar: "1"},
        {txt: "(d) -1", ar: "-1"}
      ],
      ans: 2
    },
    {
      q: "Q2. Which of the following expressions represents a Right-Shift of 2 · x[n]?",
      qAr: "أي من التعابير التالية يمثل إزاحة لليمين بمقدار 2 للإشارة 2 · x[n]؟",
      options: [
        {txt: "(a) 2 · x[n-2]", ar: "2 · x[n-2]"},
        {txt: "(b) 2 · x[n/2]", ar: "2 · x[n/2]"},
        {txt: "(c) 2 · x[n+2]", ar: "2 · x[n+2]"},
        {txt: "(d) 2 · x[-n]", ar: "2 · x[-n]"}
      ],
      ans: 0
    },
    {
      q: "Q3. Time-reversal of 3 · x(t) is given as:",
      qAr: "يعكس الزمن (Time-reversal) للإشارة 3 · x(t) بالصيغة:",
      options: [
        {txt: "(a) 3 · x(t/3)", ar: "3 · x(t/3)"},
        {txt: "(b) 3 · x(-t)", ar: "3 · x(-t)"},
        {txt: "(c) x(t/3)", ar: "x(t/3)"},
        {txt: "(d) 3 · x(3t)", ar: "3 · x(3t)"}
      ],
      ans: 1
    },
    {
      q: "Q4. Which of the following conditions defines an EVEN signal?",
      qAr: "أي من الشروط التالية يعرّف الإشارة الزوجية (EVEN signal)؟",
      options: [
        {txt: "(a) x(t) = x(-t)", ar: "x(t) = x(-t)"},
        {txt: "(b) x(t) = -x(t)", ar: "x(t) = -x(t)"},
        {txt: "(c) x(-t) = -x(t)", ar: "x(-t) = -x(t)"},
        {txt: "(d) x(-t) = -x(-t)", ar: "x(-t) = -x(-t)"}
      ],
      ans: 0
    },
    {
      q: "Q5. Integration of t^-4 with respect to \"t\" is given as:",
      qAr: "تكامل t^-4 بالنسبة للزمن t يساوي:",
      options: [
        {txt: "(a) -(t^-3) / 3", ar: "-(t^-3) / 3"},
        {txt: "(b) -(t^-4) / 4", ar: "-(t^-4) / 4"},
        {txt: "(c) (t^-2) / 2", ar: "(t^-2) / 2"},
        {txt: "(d) (t^-1) / 1", ar: "(t^-1) / 1"}
      ],
      ans: 0
    },
    {
      q: "Q6. The value of the Continuous-Time Unit Impulse signal δ(t) for t > 0 is:",
      qAr: "قيمة إشارة النبضة المستمرة δ(t) عندما t > 0 تساوي:",
      options: [
        {txt: "(a) 1", ar: "1"},
        {txt: "(b) -1", ar: "-1"},
        {txt: "(c) 0", ar: "0"},
        {txt: "(d) ∞", ar: "ما لا نهاية"}
      ],
      ans: 2
    },
    {
      q: "Q7. A continuous-time signal x(t) is said to be an ODD signal if it satisfies:",
      qAr: "تكون الإشارة المستمرة x(t) فردية (ODD) إذا تحققت المعادلة:",
      options: [
        {txt: "(a) x(-t) = x(t)", ar: "x(-t) = x(t)"},
        {txt: "(b) x(-t) = -x(t)", ar: "x(-t) = -x(t)"},
        {txt: "(c) x(t) = -x(t)", ar: "x(t) = -x(t)"},
        {txt: "(d) x(-t) = -x(-t)", ar: "x(-t) = -x(-t)"}
      ],
      ans: 1
    },
    {
      q: "Q8. Time-advancing operation x(t + 4) represents a:",
      qAr: "عملية التقديم الزمني x(t + 4) تمثل:",
      options: [
        {txt: "(a) Shift to the right by 4 units", ar: "إزاحة لليمين بمقدار 4 وحدات"},
        {txt: "(b) Shift to the left by 4 units", ar: "إزاحة لليسار بمقدار 4 وحدات"},
        {txt: "(c) Time compression by factor 4", ar: "ضغط زمني بمقدار 4"},
        {txt: "(d) Amplitude scaling by 4", ar: "تعديل السعة بمقدار 4"}
      ],
      ans: 1
    },
    {
      q: "Q9. The fundamental period T of a periodic continuous-time signal with fundamental frequency F is given by:",
      qAr: "الزمن الدوري الأساسي T لإشارة مستمرة دورية ترددها F يعطى بالعلاقة:",
      options: [
        {txt: "(a) T = F", ar: "T = F"},
        {txt: "(b) T = 1 / F", ar: "T = 1 / F"},
        {txt: "(c) T = 2π F", ar: "T = 2π F"},
        {txt: "(d) T = F / 2π", ar: "T = F / 2π"}
      ],
      ans: 1
    },
    {
      q: "Q10. The derivative of a Continuous-Time Unit Step signal u(t) with respect to time (d/dt u(t)) is:",
      qAr: "مشتقة إشارة الخطوة المستمرة u(t) بالنسبة للزمن هي:",
      options: [
        {txt: "(a) Unit Ramp signal r(t)", ar: "إشارة المائل r(t)"},
        {txt: "(b) Unit Impulse signal δ(t)", ar: "إشارة النبضة δ(t)"},
        {txt: "(c) Exponential signal e^(at)", ar: "إشارة أسية e^(at)"},
        {txt: "(d) Zero", ar: "صفر"}
      ],
      ans: 1
    },
    {
      q: "Q11. An Energy signal has an average power P equal to:",
      qAr: "إشارة الطاقة (Energy signal) يكون متوسط قدرتها P مساوياً لـ:",
      options: [
        {txt: "(a) ∞", ar: "ما لا نهاية"},
        {txt: "(b) 1", ar: "1"},
        {txt: "(c) 0", ar: "0"},
        {txt: "(d) -1", ar: "-1"}
      ],
      ans: 2
    },
    {
      q: "Q12. A Power signal has total energy E equal to:",
      qAr: "إشارة القدرة (Power signal) تكون طاقتها الكلية E مساوية لـ:",
      options: [
        {txt: "(a) 0", ar: "0"},
        {txt: "(b) ∞", ar: "ما لا نهاية"},
        {txt: "(c) Finite constant value", ar: "قيمة ثابتة محدودة"},
        {txt: "(d) 1", ar: "1"}
      ],
      ans: 1
    },
    {
      q: "Q13. A continuous-time signal x(t) = A cos(ω0 t + ϕ) is an example of a:",
      qAr: "الإشارة المستمرة x(t) = A cos(ω0 t + ϕ) تعد مثالاً على:",
      options: [
        {txt: "(a) Random signal", ar: "إشارة عشوائية"},
        {txt: "(b) Deterministic and Periodic signal", ar: "إشارة محددة ودورية"},
        {txt: "(c) Non-periodic signal", ar: "إشارة غير دورية"},
        {txt: "(d) Discrete-time signal", ar: "إشارة متقطعة"}
      ],
      ans: 1
    },
    {
      q: "Q14. Which of the following operations compresses the signal x(t) along the time axis?",
      qAr: "أي من العمليات التالية تضغط الإشارة x(t) على المحور الزمني؟",
      options: [
        {txt: "(a) x(t/2)", ar: "x(t/2)"},
        {txt: "(b) x(2t)", ar: "x(2t)"},
        {txt: "(c) x(t - 2)", ar: "x(t - 2)"},
        {txt: "(d) x(t + 2)", ar: "x(t + 2)"}
      ],
      ans: 1
    },
    {
      q: "Q15. The signal x(t) = e^(at) for a > 0 is a:",
      qAr: "الإشارة x(t) = e^(at) عندما تكون a > 0 هي إشارة:",
      options: [
        {txt: "(a) Decaying exponential", ar: "أسية متناقصة"},
        {txt: "(b) Growing exponential", ar: "أسية متزايدة"},
        {txt: "(c) Constant signal", ar: "إشارة ثابتة"},
        {txt: "(d) Sinusoidal signal", ar: "إشارة جيبية"}
      ],
      ans: 1
    },
    {
      q: "Q16. The Unit Ramp signal r(t) is defined as:",
      qAr: "تُعرّف إشارة المائل r(t) بالمعادلة:",
      options: [
        {txt: "(a) r(t) = t · u(t)", ar: "r(t) = t · u(t)"},
        {txt: "(b) r(t) = u(t) / t", ar: "r(t) = u(t) / t"},
        {txt: "(c) r(t) = δ(t)", ar: "r(t) = δ(t)"},
        {txt: "(d) r(t) = 1 for all t", ar: "r(t) = 1 لجميع قيم t"}
      ],
      ans: 0
    },
    {
      q: "Q17. A discrete-time signal x[n] is defined:",
      qAr: "تكون الإشارة المتقطعة x[n] معرفة عند:",
      options: [
        {txt: "(a) At all continuous values of time t", ar: "جميع قيم الزمن المستمر t"},
        {txt: "(b) Only at discrete integer values of n", ar: "قيم n الصحيحة المتقطعة فقط"},
        {txt: "(c) Only for positive time t > 0", ar: "الزمن الموجب t > 0 فقط"},
        {txt: "(d) Only at n = 0", ar: "عند n = 0 فقط"}
      ],
      ans: 1
    },
    {
      q: "Q18. Thermal noise in electronic circuits is classified as a:",
      qAr: "يُصنف الضجيج الحراري في الدوائر الإلكترونية على أنه:",
      options: [
        {txt: "(a) Deterministic signal", ar: "إشارة محددة"},
        {txt: "(b) Random signal", ar: "إشارة عشوائية"},
        {txt: "(c) Periodic signal", ar: "إشارة دورية"},
        {txt: "(d) Even signal", ar: "إشارة زوجية"}
      ],
      ans: 1
    },
    {
      q: "Q19. The value of the Discrete-Time Unit Impulse δ[n] at n = 0 is:",
      qAr: "قيمة النبضة المتقطعة δ[n] عند n = 0 تساوي:",
      options: [
        {txt: "(a) 0", ar: "0"},
        {txt: "(b) 1", ar: "1"},
        {txt: "(c) ∞", ar: "ما لا نهاية"},
        {txt: "(d) -1", ar:-1}
      ],
      ans: 1
    },
    {
      q: "Q20. A system whose output depends only on the current input value x(t0) is called:",
      qAr: "النظام الذي يعتمد خرجه على قيمة الدخل الحالية x(t0) فقط يُسمى:",
      options: [
        {txt: "(a) System with memory (Dynamic)", ar: "نظام بذاكرة (ديناميكي)"},
        {txt: "(b) Memoryless system (Static)", ar: "نظام عديم الذاكرة (استاتيكي)"},
        {txt: "(c) Non-causal system", ar: "نظام غير سببي"},
        {txt: "(d) Unstable system", ar: "نظام غير مستقر"}
      ],
      ans: 1
    },
    {
      q: "Q21. The system y(t) = x(t - 5) is:",
      qAr: "النظام y(t) = x(t - 5) يُصنف كـ:",
      options: [
        {txt: "(a) Memoryless and non-causal", ar: "عديم الذاكرة وغير سببي"},
        {txt: "(b) With memory and causal", ar: "يمتلك ذاكرة وسببي"},
        {txt: "(c) Unstable and non-linear", ar: "غير مستقر وغير خطي"},
        {txt: "(d) Time-varying", ar: "متغير مع الزمن"}
      ],
      ans: 1
    },
    {
      q: "Q22. A system is defined as Causal if its output depends on:",
      qAr: "يكون النظام سبباً (Causal) إذا كان الخرج يعتمد على:",
      options: [
        {txt: "(a) Future values of input only", ar: "القيم المستقبلية للدخل فقط"},
        {txt: "(b) Present and/or past values of input", ar: "القيم الحالية و/أو السابقة للدخل"},
        {txt: "(c) Future and present values of input", ar: "القيم المستقبلية والحالية للدخل"},
        {txt: "(d) Future values of output", ar: "القيم المستقبلية للخرج"}
      ],
      ans: 1
    },
    {
      q: "Q23. The system y(t) = x(t + 2) is classified as:",
      qAr: "النظام y(t) = x(t + 2) يُصنف على أنه:",
      options: [
        {txt: "(a) Causal", ar: "سببي"},
        {txt: "(b) Non-causal", ar: "غير سببي"},
        {txt: "(c) Linear Time-Invariant only", ar: "خطي غير متغير مع الزمن فقط"},
        {txt: "(d) Memoryless", ar: "عديم الذاكرة"}
      ],
      ans: 1
    },
    {
      q: "Q24. A system is BIBO Stable if every bounded input produces a:",
      qAr: "يكون النظام مستقراً (BIBO Stable) إذا كان كل دخل محدود ينتج عنه:",
      options: [
        {txt: "(a) Zero output", ar: "خرج صفري"},
        {txt: "(b) Bounded output", ar: "خرج محدود"},
        {txt: "(c) Infinite output", ar: "خرج لا نهائي"},
        {txt: "(d) Constant output", ar: "خرج ثابت"}
      ],
      ans: 1
    },
    {
      q: "Q25. The system y(t) = t · x(t) is:",
      qAr: "النظام y(t) = t · x(t) يُعتبر:",
      options: [
        {txt: "(a) Time-Invariant", ar: "غير متغير مع الزمن"},
        {txt: "(b) Time-Varying", ar: "متغير مع الزمن"},
        {txt: "(c) Non-linear", ar: "غير خطي"},
        {txt: "(d) Unstable for all inputs", ar: "غير مستقر لجميع المدخلات"}
      ],
      ans: 1
    },
    {
      q: "Q26. A system is Linear if it satisfies the principles of:",
      qAr: "يكون النظام خطياً إذا كان يحقق مبدأ:",
      options: [
        {txt: "(a) Superposition (Additivity and Homogeneity/Scaling)", ar: "التركيب الفائق (الجمع والمجانسة/المقياس)"},
        {txt: "(b) Time-Invariance and Causality", ar: "عدم التغير مع الزمن والسببية"},
        {txt: "(c) Invertibility and Stability", ar: "القابلية للانعكاس والاستقرار"},
        {txt: "(d) Compression and Expansion", ar: "الضغط والتمدد"}
      ],
      ans: 0
    },
    {
      q: "Q27. The interconnection where the output of one system is connected directly as the input to another system is called:",
      qAr: "الربط الذي يتم فيه توصيل خرج نظام كدخل لنظام آخر يُسمى:",
      options: [
        {txt: "(a) Parallel interconnection", ar: "التوصيل على التوازي"},
        {txt: "(b) Cascade (Series) interconnection", ar: "التوصيل بالتسلسل (التوالي)"},
        {txt: "(c) Feedback interconnection", ar: "توصيل التغذية الراجعة"},
        {txt: "(d) Star interconnection", ar: "التوصيل النجمي"}
      ],
      ans: 1
    },
    {
      q: "Q28. In a Parallel interconnection of two systems with outputs y1(t) and y2(t), the total output y(t) is:",
      qAr: "عند توصيل نظامين على التوازي بمخرجات y1(t) و y2(t)، فإن الخرج الكلي y(t) يساوي:",
      options: [
        {txt: "(a) y1(t) · y2(t)", ar: "y1(t) · y2(t)"},
        {txt: "(b) y1(t) + y2(t)", ar: "y1(t) + y2(t)"},
        {txt: "(c) y1(t) / y2(t)", ar: "y1(t) / y2(t)"},
        {txt: "(d) y1(y2(t))", ar: "y1(y2(t))"}
      ],
      ans: 1
    },
    {
      q: "Q29. Feedback interconnection involves:",
      qAr: "يتضمن توصيل التغذية الراجعة (Feedback):",
      options: [
        {txt: "(a) Connecting inputs of two systems in series", ar: "ربط مدخلات نظامين على التوالي"},
        {txt: "(b) Feeding a fraction of the output signal back to the input", ar: "إعادة جزء من إشارة الخرج إلى الدخل"},
        {txt: "(c) Multiplying inputs of two systems", ar: "ضرب مدخلات نظامين"},
        {txt: "(d) Ignoring the system output", ar: "تجاهل خرج النظام"}
      ],
      ans: 1
    },
    {
      q: "Q30. For any continuous-time signal x(t), its Even part xe(t) is calculated using:",
      qAr: "لأي إشارة مستمرة x(t)، يتم حساب الجزء الزوجي xe(t) بالعلاقة:",
      options: [
        {txt: "(a) (x(t) - x(-t)) / 2", ar: "(x(t) - x(-t)) / 2"},
        {txt: "(b) (x(t) + x(-t)) / 2", ar: "(x(t) + x(-t)) / 2"},
        {txt: "(c) x(t) · x(-t)", ar: "x(t) · x(-t)"},
        {txt: "(d) x(t) + x(-t)", ar: "x(t) + x(-t)"}
      ],
      ans: 1
    },
    {
      q: "Q31. For any continuous-time signal x(t), its Odd part xo(t) is calculated using:",
      qAr: "لأي إشارة مستمرة x(t)، يتم حساب الجزء الفردي xo(t) بالعلاقة:",
      options: [
        {txt: "(a) (x(t) - x(-t)) / 2", ar: "(x(t) - x(-t)) / 2"},
        {txt: "(b) (x(t) + x(-t)) / 2", ar: "(x(t) + x(-t)) / 2"},
        {txt: "(c) x(t) - x(-t)", ar: "x(t) - x(-t)"},
        {txt: "(d) x(-t) - x(t)", ar: "x(-t) - x(t)"}
      ],
      ans: 0
    },
    {
      q: "Q32. The integral of the Unit Impulse function ∫[-∞ to ∞] δ(t) dt is equal to:",
      qAr: "تكامل دالة النبضة ∫[-∞ إلى ∞] δ(t) dt يساوي:",
      options: [
        {txt: "(a) 0", ar: "0"},
        {txt: "(b) 1", ar: "1"},
        {txt: "(c) ∞", ar: "ما لا نهاية"},
        {txt: "(d) t", ar: "t"}
      ],
      ans: 1
    },
    {
      q: "Q33. The system y[n] = x^2[n] is:",
      qAr: "النظام المتقطع y[n] = x^2[n] يُعتبر:",
      options: [
        {txt: "(a) Linear", ar: "خطي"},
        {txt: "(b) Non-Linear", ar: "غير خطي"},
        {txt: "(c) Dynamic with memory", ar: "ديناميكي بذاكرة"},
        {txt: "(d) Non-causal", ar: "غير سببي"}
      ],
      ans: 1
    },
    {
      q: "Q34. An Analog signal is characterized by:",
      qAr: "تتميز الإشارة التناظرية (Analog signal) بـ:",
      options: [
        {txt: "(a) Discrete values in both time and amplitude", ar: "قيم متقطعة في الزمن والسعة"},
        {txt: "(b) Continuous values in both time and amplitude", ar: "قيم مستمرة في كل من الزمن والسعة"},
        {txt: "(c) Continuous time but quantized amplitude", ar: "زمن مستمر وسعة مكممة"},
        {txt: "(d) Discrete time but continuous amplitude", ar: "زمن متقطع وسعة مستمرة"}
      ],
      ans: 1
    },
    {
      q: "Q35. The operation x(-t + 3) involves:",
      qAr: "العملية x(-t + 3) تتضمن:",
      options: [
        {txt: "(a) Time scaling followed by expansion", ar: "تعديل المقياس الزمني متبوعاً بالتمدد"},
        {txt: "(b) Time shifting (advancing by 3) followed by time reversal", ar: "إزاحة زمنية (تقديم بـ 3) متبوعة بعكس الزمن"},
        {txt: "(c) Amplitude shifting by 3", ar: "إزاحة السعة بمقدار 3"},
        {txt: "(d) Downsampling by 3", ar: "تقليل العينات بمقدار 3"}
      ],
      ans: 1
    },
    {
      q: "Q36. The angular frequency ω0 (in rad/s) is related to fundamental frequency F (in Hz) by:",
      qAr: "التردد الزاوي ω0 يتناسب مع التردد الأساسي F بالعلاقة:",
      options: [
        {txt: "(a) ω0 = F / 2π", ar: "ω0 = F / 2π"},
        {txt: "(b) ω0 = 2π F", ar: "ω0 = 2π F"},
        {txt: "(c) ω0 = 1 / F", ar: "ω0 = 1 / F"},
        {txt: "(d) ω0 = π F", ar: "ω0 = π F"}
      ],
      ans: 1
    }
  ],

  "signals_theory_midterm_short": [
    {
      titleEn: "Q1. Write any two uses of Integration.",
      titleAr: "س1. أكتب أي استخدامين للتكامل؟",
      ansEn: "1. Calculating Signal Energy: Integration is used to determine the total energy of a continuous-time signal x(t) using the formula E = ∫[-∞ to ∞] |x(t)|^2 dt.<br>2. Deriving Fundamental Signals: Integrating the Unit Impulse signal δ(t) yields the Unit Step signal u(t) = ∫[-∞ to t] δ(τ) dτ, and integrating u(t) yields the Unit Ramp signal r(t).",
      ansAr: "الحل بالكامل بالعربي:<br>1. <strong>حساب طاقة الإشارة:</strong> يُستخدم التكامل لحساب الطاقة الكلية للإشارة المستمرة x(t) بالقانون E = ∫ |x(t)|^2 dt.<br>2. <strong>اشتقاق الإشارات الأساسية:</strong> تكامل إشارة النبضة δ(t) يعطي إشارة الخطوة u(t)، وتكامل إشارة الخطوة u(t) يعطي إشارة المائل r(t)."
    },
    {
      titleEn: "Q2. Explain the Amplitude, Frequency, and Wavelength of a Continuous-Time Sinusoidal signal.",
      titleAr: "س2. اشرح السعة والتردد والطول الموجي لإشارة الجيب مستمرة الزمن؟",
      ansEn: "For a sinusoidal signal x(t) = A sin(ωt + ϕ):<br>• Amplitude (A): The maximum magnitude or peak value attained by the wave from its zero baseline.<br>• Frequency (F): The number of complete cycles per second, expressed in Hertz (Hz), where F = 1/T.<br>• Wavelength (λ): The physical length/distance occupied by one full wave cycle in space.",
      ansAr: "الحل بالكامل بالعربي للإشارة x(t) = A sin(ωt + ϕ):<br>• <strong>السعة (A):</strong> أقصى قيمة أو ارتفاع تصل إليه الموجة من خط الصفر.<br>• <strong>التردد (F):</strong> عدد الدورات الكاملة في الثانية الواحدة بالهرتز (Hz)، حيث F = 1/T.<br>• <strong>الطول الموجي (λ):</strong> المسافة الفيزيائية أو الطول الذي تشغله دورة موجية واحدة كاملة في الفضاء."
    },
    {
      titleEn: "Q3. Describe Continuous-Time and Discrete-Time System.",
      titleAr: "س3. صف النظام مستمر الزمن والنظام منفصل الزمن؟",
      imageSrc: "images/A1.png",
      ansEn: "• Continuous-Time System: A system that transforms continuous-time input signals x(t) into continuous-time output signals y(t), where signals are defined for all continuous values of time t.<br>• Discrete-Time System: A system that transforms discrete-time input signals x[n] into discrete-time output signals y[n], where signals are defined only at discrete integer time instants n.",
      ansAr: "الحل بالكامل بالعربي:<br>• <strong>النظام مستمر الزمن (Continuous-Time System):</strong> نظام يحول إشارات الدخل المستمرة x(t) إلى إشارات خرج مستمرة y(t)، وتكون الإشارات معرفة لجميع قيم الزمن المستمر t.<br>• <strong>النظام منفصل الزمن (Discrete-Time System):</strong> نظام يحول إشارات الدخل المنفصلة x[n] إلى إشارات خرج منفصلة y[n]، وتكون الإشارات معرفة فقط عند نقاط زمنية صحيحة منفصلة n."
    },
    {
      titleEn: "Q4. Find whether the given signal X1(t) & X2(t) as shown in Figure 1 & 2 is Even or not?",
      titleAr: "س4. حدد ما إذا كانت الإشارة X1(t) في الشكل 1 زوجية أم لا؟",
      imageSrc: "images/A2.png"
    }
  ],

  "signals_theory_midterm_long": [
    {
      titleEn: "Q1. Explain the interconnection of systems and write the example of each interconnection.",
      titleAr: "س1. اشرح أنواع التوصيلات بين الأنظمة واذكر مثالاً على كل نوع؟",
      ansEn: "• Series (Cascade) Interconnection: The output of the first system is fed as the direct input to the second system.<br>  Example: Television receiver (a radio frequency amplifier followed by a noise filter).<br><br>• Parallel Interconnection: The same input signal is applied simultaneously to two or more separate systems, and their outputs are added.<br>  Example: Two-way loudspeaker system (separating high and low frequencies).<br><br>• Feedback Interconnection: A portion of the system's output is fed back and combined with the primary input signal.<br>  Example: Automobile cruise control system or air conditioner thermostat system.",
      ansAr: "الحل بالكامل بالعربي:<br>• <strong>التوصيل على التسلسل (Series/Cascade):</strong> يُغذى خرج النظام الأول كدخل مباشر للنظام الثاني.<br>  <em>مثال:</em> مستقبل التلفزيون (مكبر ترددات الراديو يليه مرشح الضوضاء).<br><br>• <strong>التوصيل على التوازي (Parallel):</strong> تُطبق إشارة الدخل نفسها بالتوازي على نظامين أو أكثر، وتُجمع مخرجاتهما.<br>  <em>مثال:</em> نظام مكبرات الصوت ثنائي الاتجاه (فصل الترددات العالية عن المنخفضة).<br><br>• <strong>توصيل التغذية الراجعة (Feedback):</strong> يُعاد جزء من خرج النظام ليدمج مع إشارة الدخل الرئيسية.<br>  <em>مثال:</em> نظام مثبت السرعة في السيارات أو نظام الثرموستات في المكيفات."
    },
    {
      id: "Q2",
      titleEn: "Q2. Perform the following operations on X1(t) and X2(t):",
      titleAr: "س2. نفذ العمليات التالية على الإشارات X1(t) و X2(t) المعطاة في الشكل؟",
      twoImages: ["images/A3.png", "images/A4.png"],
      solImage: "images/A5.png"
    },
    {
      id: "Q3",
      titleEn: "Q3. Draw Continuous-Time Exponential and Sinusoidal signals and define each parameter of both the signals' equations.",
      titleAr: "س3. ارسم الإشارة الأسية وإشارة الجيب مستمرة الزمن، وعرّف جميع المعاملات/المتغيرات الموجودة في معادلة كل منهما؟",
      imageSrc: "images/A6.png"
    }
  ]
};