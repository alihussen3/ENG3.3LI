const networksSignalsData = {
  // ==========================================
  // === 1. شبكات الحاسب (Computer Networks) ===
  // ==========================================

  // --- أ) خيارات شبكات الحاسب (MCQs - 50 Questions) ---
  "networks_theory_midterm_mcq": [
    {
      q: "Q1. [⭐ مهم جدًا - من تحديد الدكتور] ______ define the format, order of messages sent and received among network entities, and actions taken on message transmission.",
      qAr: "س1. [⭐ مهم جدًا - من تحديد الدكتور] ما الذي يحدد شكل الرسائل وترتيب إرسالها واستقبالها والإجراءات المتخذة عند الإرسال؟",
      options: [
        {txt: "A. Infrastructures", ar: "البنية التحتية"},
        {txt: "B. Protocols", ar: "البروتوكولات"},
        {txt: "C. Data", ar: "البيانات"},
        {txt: "D. Formats", ar: "التنسيقات"}
      ],
      ans: 1
    },
    {
      q: "Q2. [📘 إضافي - من النماذج] ______ is the rate (bits/time unit) at which bits are being sent from sender to receiver.",
      qAr: "س2. [📘 إضافي - من النماذج] ما معدل إرسال البتات من المرسل إلى المستقبل خلال وحدة زمنية؟",
      options: [
        {txt: "A. Routing", ar: "تحديد المسار"},
        {txt: "B. Queueing", ar: "الانتظار في الطابور"},
        {txt: "C. Forwarding", ar: "تمرير الحزم"},
        {txt: "D. Throughput", ar: "معدل نقل البيانات"}
      ],
      ans: 3
    },
    {
      q: "Q3. [⭐ مهم جدًا - من تحديد الدكتور] SMTP stands for:",
      qAr: "س3. [⭐ مهم جدًا - من تحديد الدكتور] ماذا يعني اختصار SMTP؟",
      options: [
        {txt: "A. Simple Mail Transfer Protocol", ar: "بروتوكول نقل البريد البسيط"},
        {txt: "B. Secure Mail Transfer Protocol", ar: "بروتوكول نقل البريد الآمن"},
        {txt: "C. System Mail Transfer Protocol", ar: "بروتوكول نقل بريد النظام"},
        {txt: "D. Simplified Message Transfer Protocol", ar: "بروتوكول نقل الرسائل المبسط"}
      ],
      ans: 0
    },
    {
      q: "Q4. [⭐ مهم جدًا - من تحديد الدكتور] In the case of Go-Back-N, what does the receiver do when received packets are unacknowledged?",
      qAr: "س4. [⭐ مهم جدًا - من تحديد الدكتور] في Go-Back-N، ماذا يفعل المستقبل عندما تصل الحزم خارج الترتيب؟",
      options: [
        {txt: "A. Discards all out-of-order packets", ar: "يتجاهل الحزم خارج الترتيب"},
        {txt: "B. Buffers packets for in-order delivery", ar: "يخزن الحزم لتسليمها بالترتيب"},
        {txt: "C. Sends all packets directly to the upper layer without buffering", ar: "يرسل الحزم مباشرة للطبقة العليا"},
        {txt: "D. None of them", ar: "لا شيء مما سبق"}
      ],
      ans: 0
    },
    {
      q: "Q5. [📘 إضافي - من النماذج] UDP checksum detects ______ in transmitted segment.",
      qAr: "س5. [📘 إضافي - من النماذج] ماذا يكتشف UDP Checksum في الجزء المرسل؟",
      options: [
        {txt: "A. Error", ar: "خطأ"},
        {txt: "B. Security", ar: "أمان"},
        {txt: "C. Speed", ar: "سرعة"},
        {txt: "D. None", ar: "لا شيء"}
      ],
      ans: 0
    },
    {
      q: "Q6. [⭐ مهم جدًا - من تحديد الدكتور] In ______, sender retransmits individually for all unacknowledged packets.",
      qAr: "س6. [⭐ مهم جدًا - من تحديد الدكتور] في أي بروتوكول يعيد المرسل إرسال الحزم غير المؤكدة بشكل منفصل؟",
      options: [
        {txt: "A. Go-Back-N", ar: "العودة N"},
        {txt: "B. Selective Repeat", ar: "الإعادة الانتقائية"},
        {txt: "C. Broadcasting", ar: "البث"},
        {txt: "D. None", ar: "لا شيء"}
      ],
      ans: 1
    },
    {
      q: "Q7. [📘 إضافي - من النماذج] Cookies can’t be used for which among the following?",
      qAr: "س7. [📘 إضافي - من النماذج] أي مما يلي لا تُستخدم Cookies من أجله؟",
      options: [
        {txt: "A. Authorization", ar: "التفويض"},
        {txt: "B. Shopping carts", ar: "سلة التسوق"},
        {txt: "C. Recommendations", ar: "التوصيات"},
        {txt: "D. Routing", ar: "تحديد المسار"}
      ],
      ans: 3
    },
    {
      q: "Q8. [⭐ مهم جدًا - من تحديد الدكتور] ______ determine source-destination paths taken by packets.",
      qAr: "س8. [⭐ مهم جدًا - من تحديد الدكتور] ما الذي يحدد المسارات التي تسلكها الحزم من المصدر إلى الوجهة؟",
      options: [
        {txt: "A. Throughput", ar: "معدل النقل"},
        {txt: "B. Queueing", ar: "الانتظار"},
        {txt: "C. Forwarding", ar: "تمرير الحزم"},
        {txt: "D. Routing", ar: "تحديد المسار"}
      ],
      ans: 3
    },
    {
      q: "Q9. [⭐ مهم جدًا - من تحديد الدكتور] Logical communication between processes is in ______.",
      qAr: "س9. [⭐ مهم جدًا - من تحديد الدكتور] الاتصال المنطقي بين العمليات يكون في أي طبقة؟",
      options: [
        {txt: "A. Application Layer", ar: "طبقة التطبيقات"},
        {txt: "B. Transport Layer", ar: "طبقة النقل"},
        {txt: "C. Network Layer", ar: "طبقة الشبكة"},
        {txt: "D. None of them", ar: "لا شيء مما سبق"}
      ],
      ans: 1
    },
    {
      q: "Q10. [📘 إضافي - من النماذج] ______ is too many sources sending too much data too fast for network to handle.",
      qAr: "س10. [📘 إضافي - من النماذج] ماذا نسمي إرسال مصادر كثيرة بيانات أكثر مما تستطيع الشبكة تحمله؟",
      options: [
        {txt: "A. Congestion", ar: "الازدحام"},
        {txt: "B. Flow Control", ar: "التحكم بالتدفق"},
        {txt: "C. Processes", ar: "العمليات"},
        {txt: "D. Unlimited", ar: "غير محدود"}
      ],
      ans: 0
    },
    {
      q: "Q11. [⭐ مهم جدًا - من تحديد الدكتور] In ______, each object is encapsulated in its own response message.",
      qAr: "س11. [⭐ مهم جدًا - من تحديد الدكتور] في أي بروتوكول يتم وضع كل كائن في رسالة استجابة مستقلة؟",
      options: [
        {txt: "A. TCP", ar: "بروتوكول التحكم بالنقل"},
        {txt: "B. DNS", ar: "نظام أسماء النطاقات"},
        {txt: "C. HTTP", ar: "بروتوكول نقل النص التشعبي"},
        {txt: "D. SMTP", ar: "بروتوكول نقل البريد"}
      ],
      ans: 2
    },
    {
      q: "Q12. [📘 إضافي - من النماذج] Additional Model Question",
      qAr: "س12. [📘 إضافي - من النماذج] سؤال إضافي من النماذج",
      options: [
        {txt: "A. Option A", ar: "خيار أ"},
        {txt: "B. Option B", ar: "خيار ب"},
        {txt: "C. Option C", ar: "خيار ج"},
        {txt: "D. Option D", ar: "خيار د"}
      ],
      ans: 0
    },
    {
      q: "Q13. [⭐ مهم جدًا - من تحديد الدكتور] A ______ is a network that connects personal devices within a short range.",
      qAr: "س13. [⭐ مهم جدًا - من تحديد الدكتور] شبكة تربط الأجهزة الشخصية ضمن مسافة قصيرة.",
      options: [
        {txt: "A. PAN", ar: "شبكة شخصية"},
        {txt: "B. WAN", ar: "شبكة واسعة"},
        {txt: "C. MAN", ar: "شبكة مدينة"},
        {txt: "D. LAN", ar: "شبكة محلية"}
      ],
      ans: 0
    },
    {
      q: "Q14. [⭐ مهم جدًا - من تحديد الدكتور] ______ connects computers within a small geographical area.",
      qAr: "س14. [⭐ مهم جدًا - من تحديد الدكتور] تربط أجهزة الكمبيوتر داخل منطقة جغرافية صغيرة.",
      options: [
        {txt: "A. WAN", ar: "شبكة واسعة"},
        {txt: "B. LAN", ar: "شبكة محلية"},
        {txt: "C. MAN", ar: "شبكة مدينة"},
        {txt: "D. PAN", ar: "شبكة شخصية"}
      ],
      ans: 1
    },
    {
      q: "Q15. [⭐ مهم جدًا - من تحديد الدكتور] A network that covers a metropolitan area is called ______.",
      qAr: "س15. [⭐ مهم جدًا - من تحديد الدكتور] الشبكة التي تغطي منطقة حضرية أو مدينة تسمى.",
      options: [
        {txt: "A. PAN", ar: "شبكة شخصية"},
        {txt: "B. LAN", ar: "شبكة محلية"},
        {txt: "C. MAN", ar: "شبكة مدينة"},
        {txt: "D. WAN", ar: "شبكة واسعة"}
      ],
      ans: 2
    },
    {
      q: "Q16. [⭐ مهم جدًا - من تحديد الدكتور] ______ covers a large geographical area.",
      qAr: "س16. [⭐ مهم جدًا - من تحديد الدكتور] تغطي منطقة جغرافية كبيرة.",
      options: [
        {txt: "A. LAN", ar: "شبكة محلية"},
        {txt: "B. PAN", ar: "شبكة شخصية"},
        {txt: "C. MAN", ar: "شبكة مدينة"},
        {txt: "D. WAN", ar: "شبكة واسعة"}
      ],
      ans: 3
    },
    {
      q: "Q17. [⭐ مهم جدًا - من تحديد الدكتور] In a network protocol, ______ defines the order of exchanged messages.",
      qAr: "س17. [⭐ مهم جدًا - من تحديد الدكتور] في بروتوكول الشبكة، يحدد ترتيب الرسائل المتبادلة.",
      options: [
        {txt: "A. Message sequence", ar: "تسلسل الرسائل"},
        {txt: "B. Bandwidth", ar: "عرض النطاق"},
        {txt: "C. Distance", ar: "المسافة"},
        {txt: "D. Cable length", ar: "طول الكابل"}
      ],
      ans: 0
    },
    {
      q: "Q18. [⭐ مهم جدًا - من تحديد الدكتور] ______ is a network of interconnected networks.",
      qAr: "س18. [⭐ مهم جدًا - من تحديد الدكتور] هي شبكة تتكون من شبكات مترابطة.",
      options: [
        {txt: "A. A switch", ar: "المبدّل"},
        {txt: "B. The Internet", ar: "الإنترنت"},
        {txt: "C. A socket", ar: "المقبس"},
        {txt: "D. A frame", ar: "الإطار"}
      ],
      ans: 1
    },
    {
      q: "Q19. [⭐ مهم جدًا - من تحديد الدكتور] The devices at the network edge are called ______.",
      qAr: "س19. [⭐ مهم جدًا - من تحديد الدكتور] الأجهزة الموجودة عند أطراف الشبكة تسمى.",
      options: [
        {txt: "A. Links", ar: "روابط"},
        {txt: "B. Switches", ar: "مبدّلات"},
        {txt: "C. Hosts", ar: "أجهزة مضيفة"},
        {txt: "D. Packets", ar: "حزم"}
      ],
      ans: 2
    },
    {
      q: "Q20. [⭐ مهم جدًا - من تحديد الدكتور] DSL uses existing ______ lines to provide Internet access.",
      qAr: "س20. [⭐ مهم جدًا - من تحديد الدكتور] تستخدم تقنية DSL خطوط الهاتف الموجودة لتوفير الإنترنت.",
      options: [
        {txt: "A. Power", ar: "الكهرباء"},
        {txt: "B. Fiber", ar: "الألياف"},
        {txt: "C. Satellite", ar: "الأقمار الصناعية"},
        {txt: "D. Telephone", ar: "الهاتف"}
      ],
      ans: 3
    },
    {
      q: "Q21. [⭐ مهم جدًا - من تحديد الدكتور] In DSL, voice and data use different ______.",
      qAr: "س21. [⭐ مهم جدًا - من تحديد الدكتور] في DSL يستخدم الصوت والبيانات ترددات مختلفة.",
      options: [
        {txt: "A. Frequencies", ar: "ترددات"},
        {txt: "B. Routers", ar: "موجهات"},
        {txt: "C. Browsers", ar: "متصفحات"},
        {txt: "D. Servers", ar: "خادم"}
      ],
      ans: 0
    },
    {
      q: "Q22. [⭐ مهم جدًا - من تحديد الدكتور] In packet switching, a message is divided into smaller ______.",
      qAr: "س22. [⭐ مهم جدًا - من تحديد الدكتور] في تبديل الحزم تُقسم الرسالة إلى حزم صغيرة.",
      options: [
        {txt: "A. Circuits", ar: "دوائر"},
        {txt: "B. Packets", ar: "حزم"},
        {txt: "C. Servers", ar: "خوادم"},
        {txt: "D. Sockets", ar: "مقابس"}
      ],
      ans: 1
    },
    {
      q: "Q23. [⭐ مهم جدًا - من تحديد الدكتور] ______ reserves resources for the entire communication session.",
      qAr: "س23. [⭐ مهم جدًا - من تحديد الدكتور] يحجز الموارد طوال جلسة الاتصال.",
      options: [
        {txt: "A. Packet switching", ar: "تبديل الحزم"},
        {txt: "B. DNS", ar: "نظام أسماء النطاقات"},
        {txt: "C. Circuit switching", ar: "تبديل الدوائر"},
        {txt: "D. HTTP", ar: "بروتوكول الويب"}
      ],
      ans: 2
    },
    {
      q: "Q24. [⭐ مهم جدًا - من تحديد الدكتور] In packet switching, network resources are ______ among users.",
      qAr: "س24. [⭐ مهم جدًا - من تحديد الدكتور] في تبديل الحزم تكون موارد الشبكة مشتركة بين المستخدمين.",
      options: [
        {txt: "A. Reserved", ar: "محجوزة"},
        {txt: "B. Disconnected", ar: "مقطوعة"},
        {txt: "C. Destroyed", ar: "مدمرة"},
        {txt: "D. Shared", ar: "مشتركة"}
      ],
      ans: 3
    },
    {
      q: "Q25. [⭐ مهم جدًا - من تحديد الدكتور] Store-and-forward means a router receives a complete packet before ______ it.",
      qAr: "س25. [⭐ مهم جدًا - من تحديد الدكتور] تعني Store-and-forward أن الموجه يستقبل الحزمة كاملة قبل تمريرها.",
      options: [
        {txt: "A. Forwarding", ar: "تمريرها"},
        {txt: "B. Deleting", ar: "حذفها"},
        {txt: "C. Encrypting", ar: "تشفيرها"},
        {txt: "D. Naming", ar: "تسميتها"}
      ],
      ans: 0
    },
    {
      q: "Q26. [⭐ مهم جدًا - من تحديد الدكتور] ______ is the rate of successful data transfer from sender to receiver.",
      qAr: "س26. [⭐ مهم جدًا - من تحديد الدكتور] هو معدل نقل البيانات الناجح من المرسل إلى المستقبل.",
      options: [
        {txt: "A. Routing", ar: "تحديد المسار"},
        {txt: "B. Throughput", ar: "معدل النقل"},
        {txt: "C. Queueing", ar: "الانتظار"},
        {txt: "D. Encapsulation", ar: "التغليف"}
      ],
      ans: 1
    },
    {
      q: "Q27. [⭐ مهم جدًا - من تحديد الدكتور] The ______ layer supports network applications.",
      qAr: "س27. [⭐ مهم جدًا - من تحديد الدكتور] طبقة تدعم تطبيقات الشبكة.",
      options: [
        {txt: "A. Physical", ar: "الفيزيائية"},
        {txt: "B. Link", ar: "الربط"},
        {txt: "C. Application", ar: "التطبيقات"},
        {txt: "D. Network", ar: "الشبكة"}
      ],
      ans: 2
    },
    {
      q: "Q28. [⭐ مهم جدًا - من تحديد الدكتور] The ______ layer is responsible for transmitting bits.",
      qAr: "س28. [⭐ مهم جدًا - من تحديد الدكتور] طبقة مسؤولة عن إرسال البتات.",
      options: [
        {txt: "A. Transport", ar: "النقل"},
        {txt: "B. Application", ar: "التطبيقات"},
        {txt: "C. Network", ar: "الشبكة"},
        {txt: "D. Physical", ar: "الفيزيائية"}
      ],
      ans: 3
    },
    {
      q: "Q29. [⭐ مهم جدًا - من تحديد الدكتور] ______ means adding headers as data moves down the protocol stack.",
      qAr: "س29. [⭐ مهم جدًا - من تحديد الدكتور] تعني إضافة ترويسات أثناء نزول البيانات عبر الطبقات.",
      options: [
        {txt: "A. Encapsulation", ar: "التغليف"},
        {txt: "B. Routing", ar: "تحديد المسار"},
        {txt: "C. Throughput", ar: "معدل النقل"},
        {txt: "D. Queueing", ar: "الانتظار"}
      ],
      ans: 0
    },
    {
      q: "Q30. [⭐ مهم جدًا - من تحديد الدكتور] The transport-layer data unit is commonly called a ______.",
      qAr: "س30. [⭐ مهم جدًا - من تحديد الدكتور] وحدة البيانات في طبقة النقل تسمى عادة.",
      options: [
        {txt: "A. Frame", ar: "إطار"},
        {txt: "B. Segment", ar: "مقطع"},
        {txt: "C. Bit", ar: "بت"},
        {txt: "D. Signal", ar: "إشارة"}
      ],
      ans: 1
    },
    {
      q: "Q31. [⭐ مهم جدًا - من تحديد الدكتور] The link-layer data unit is called a ______.",
      qAr: "س31. [⭐ مهم جدًا - من تحديد الدكتور] وحدة البيانات في طبقة ربط البيانات تسمى.",
      options: [
        {txt: "A. Segment", ar: "مقطع"},
        {txt: "B. Message", ar: "رسالة"},
        {txt: "C. Frame", ar: "إطار"},
        {txt: "D. Process", ar: "عملية"}
      ],
      ans: 2
    },
    {
      q: "Q32. [⭐ مهم جدًا - من تحديد الدكتور] In client-server architecture, the server is usually ______.",
      qAr: "س32. [⭐ مهم جدًا - من تحديد الدكتور] في بنية العميل والخادم يكون الخادم عادة يعمل باستمرار.",
      options: [
        {txt: "A. Temporary", ar: "مؤقتًا"},
        {txt: "B. Offline", ar: "غير متصل"},
        {txt: "C. A peer only", ar: "ندًا فقط"},
        {txt: "D. Always-on", ar: "يعمل باستمرار"}
      ],
      ans: 3
    },
    {
      q: "Q33. [⭐ مهم جدًا - من تحديد الدكتور] In P2P architecture, peers communicate ______.",
      qAr: "س33. [⭐ مهم جدًا - من تحديد الدكتور] في بنية P2P تتواصل الأجهزة مباشرة.",
      options: [
        {txt: "A. Directly", ar: "مباشرة"},
        {txt: "B. Only through one central server", ar: "فقط عبر خادم مركزي"},
        {txt: "C. Only by email", ar: "فقط بالبريد"},
        {txt: "D. Without a network", ar: "دون شبكة"}
      ],
      ans: 0
    },
    {
      q: "Q34. [⭐ مهم جدًا - من تحديد الدكتور] P2P architecture does not require an ______ server.",
      qAr: "س34. [⭐ مهم جدًا - من تحديد الدكتور] بنية P2P لا تتطلب خادمًا يعمل باستمرار.",
      options: [
        {txt: "A. Email", ar: "للبريد"},
        {txt: "B. Always-on", ar: "يعمل باستمرار"},
        {txt: "C. Application", ar: "للتطبيقات"},
        {txt: "D. HTTP", ar: "لـ HTTP"}
      ],
      ans: 1
    },
    {
      q: "Q35. [⭐ مهم جدًا - من تحديد الدكتور] A process sends and receives messages through a ______.",
      qAr: "س35. [⭐ مهم جدًا - من تحديد الدكتور] ترسل العملية وتستقبل الرسائل من خلال المقبس.",
      options: [
        {txt: "A. Monitor", ar: "شاشة"},
        {txt: "B. Keyboard", ar: "لوحة مفاتيح"},
        {txt: "C. Socket", ar: "مقبس"},
        {txt: "D. Printer", ar: "طابعة"}
      ],
      ans: 2
    },
    {
      q: "Q36. [⭐ مهم جدًا - من تحديد الدكتور] An application-layer protocol defines message types, syntax, and ______.",
      qAr: "س36. [⭐ مهم جدًا - من تحديد الدكتور] يحدد بروتوكول طبقة التطبيقات أنواع الرسائل وصيغتها ومعاني الرسائل.",
      options: [
        {txt: "A. Screen size", ar: "حجم الشاشة"},
        {txt: "B. Cable color", ar: "لون الكابل"},
        {txt: "C. Memory capacity", ar: "سعة الذاكرة"},
        {txt: "D. Message semantics", ar: "معاني الرسائل"}
      ],
      ans: 3
    },
    {
      q: "Q37. [⭐ مهم جدًا - من تحديد الدكتور] File transfer applications typically require ______ data transfer.",
      qAr: "س37. [⭐ مهم جدًا - من تحديد الدكتور] تحتاج تطبيقات نقل الملفات عادة إلى نقل بيانات موثوق.",
      options: [
        {txt: "A. Reliable", ar: "موثوق"},
        {txt: "B. Unordered", ar: "غير مرتب"},
        {txt: "C. Random", ar: "عشوائي"},
        {txt: "D. Incomplete", ar: "غير مكتمل"}
      ],
      ans: 0
    },
    {
      q: "Q38. [⭐ مهم جدًا - من تحديد الدكتور] Real-time applications are especially sensitive to ______.",
      qAr: "س38. [⭐ مهم جدًا - من تحديد الدكتور] التطبيقات الفورية حساسة بشكل خاص للتوقيت.",
      options: [
        {txt: "A. File names", ar: "أسماء الملفات"},
        {txt: "B. Timing", ar: "التوقيت"},
        {txt: "C. Screen resolution", ar: "دقة الشاشة"},
        {txt: "D. Passwords", ar: "كلمات المرور"}
      ],
      ans: 1
    },
    {
      q: "Q39. [⭐ مهم جدًا - من تحديد الدكتور] HTTP stands for ______.",
      qAr: "س39. [⭐ مهم جدًا - من تحديد الدكتور] اختصار HTTP يعني بروتوكول نقل النص التشعبي.",
      options: [
        {txt: "A. Host Transfer Text Protocol", ar: "بروتوكول نص نقل المضيف"},
        {txt: "B. High Text Transport Protocol", ar: "بروتوكول نقل النص العالي"},
        {txt: "C. Hypertext Transfer Protocol", ar: "بروتوكول نقل النص التشعبي"},
        {txt: "D. Hyperlink Transmission Program", ar: "برنامج إرسال الروابط"}
      ],
      ans: 2
    },
    {
      q: "Q40. [⭐ مهم جدًا - من تحديد الدكتور] HTTP is an ______ layer protocol.",
      qAr: "س40. [⭐ مهم جدًا - من تحديد الدكتور] HTTP بروتوكول في طبقة التطبيقات.",
      options: [
        {txt: "A. Physical", ar: "الفيزيائية"},
        {txt: "B. Link", ar: "الربط"},
        {txt: "C. Network", ar: "الشبكة"},
        {txt: "D. Application", ar: "التطبيقات"}
      ],
      ans: 3
    },
    {
      q: "Q41. [⭐ مهم جدًا - من تحديد الدكتور] The HTTP client usually sends a ______ to the server.",
      qAr: "س41. [⭐ مهم جدًا - من تحديد الدكتور] يرسل عميل HTTP عادة طلبًا إلى الخادم.",
      options: [
        {txt: "A. Request", ar: "طلبًا"},
        {txt: "B. Router", ar: "موجهًا"},
        {txt: "C. Circuit", ar: "دائرة"},
        {txt: "D. Cable", ar: "كابلًا"}
      ],
      ans: 0
    },
    {
      q: "Q42. [⭐ مهم جدًا - من تحديد الدكتور] The HTTP server sends a ______ to the client.",
      qAr: "س42. [⭐ مهم جدًا - من تحديد الدكتور] يرسل خادم HTTP إلى العميل استجابة.",
      options: [
        {txt: "A. Socket", ar: "مقبسًا"},
        {txt: "B. Response", ar: "استجابة"},
        {txt: "C. Router", ar: "موجهًا"},
        {txt: "D. Protocol layer", ar: "طبقة بروتوكول"}
      ],
      ans: 1
    },
    {
      q: "Q43. [⭐ مهم جدًا - من تحديد الدكتور] HTTP commonly uses TCP port ______.",
      qAr: "س43. [⭐ مهم جدًا - من تحديد الدكتور] يستخدم HTTP عادة منفذ TCP رقم 80.",
      options: [
        {txt: "A. 25", ar: "المنفذ 25"},
        {txt: "B. 53", ar: "المنفذ 53"},
        {txt: "C. 80", ar: "المنفذ 80"},
        {txt: "D. 110", ar: "المنفذ 110"}
      ],
      ans: 2
    },
    {
      q: "Q44. [⭐ مهم جدًا - من تحديد الدكتور] HTTP is a ______ protocol because the server does not maintain information about previous client requests.",
      qAr: "س44. [⭐ مهم جدًا - من تحديد الدكتور] HTTP بروتوكول عديم الحالة لأن الخادم لا يحتفظ بحالة الطلبات.",
      options: [
        {txt: "A. Connectionless", ar: "دون اتصال"},
        {txt: "B. Wireless", ar: "لاسلكي"},
        {txt: "C. Encrypted", ar: "مشفر"},
        {txt: "D. Stateless", ar: "عديم الحالة"}
      ],
      ans: 3
    },
    {
      q: "Q45. [⭐ مهم جدًا - من تحديد الدكتور] The three major components of email include user agents, mail servers, and ______.",
      qAr: "س45. [⭐ مهم جدًا - من تحديد الدكتور] تشمل المكونات الرئيسية للبريد الإلكتروني برامج المستخدم وخوادم البريد و SMTP.",
      options: [
        {txt: "A. SMTP", ar: "بروتوكول نقل البريد البسيط"},
        {txt: "B. DNS", ar: "نظام أسماء النطاقات"},
        {txt: "C. DSL", ar: "خط المشترك الرقمي"},
        {txt: "D. LAN", ar: "الشبكة المحلية"}
      ],
      ans: 0
    },
    {
      q: "Q46. [⭐ مهم جدًا - من تحديد الدكتور] SMTP uses ______ to reliably transfer email messages.",
      qAr: "س46. [⭐ مهم جدًا - من تحديد الدكتور] يستخدم SMTP بروتوكول TCP لنقل رسائل البريد بموثوقية.",
      options: [
        {txt: "A. UDP", ar: "بروتوكول بيانات المستخدم"},
        {txt: "B. TCP", ar: "بروتوكول التحكم بالنقل"},
        {txt: "C. IP only", ar: "IP فقط"},
        {txt: "D. DNS", ar: "نظام أسماء النطاقات"}
      ],
      ans: 1
    },
    {
      q: "Q47. [⭐ مهم جدًا - من تحديد الدكتور] The SMTP command ______ specifies the recipient’s email address.",
      qAr: "س47. [⭐ مهم جدًا - من تحديد الدكتور] أمر SMTP الذي يحدد عنوان بريد المستلم هو RCPT TO.",
      options: [
        {txt: "A. HELO", ar: "أمر التحية"},
        {txt: "B. DATA", ar: "أمر محتوى الرسالة"},
        {txt: "C. RCPT TO", ar: "تحديد المستلم"},
        {txt: "D. QUIT", ar: "إنهاء الاتصال"}
      ],
      ans: 2
    },
    {
      q: "Q48. [⭐ مهم جدًا - من تحديد الدكتور] DNS stands for ______.",
      qAr: "س48. [⭐ مهم جدًا - من تحديد الدكتور] اختصار DNS يعني نظام أسماء النطاقات.",
      options: [
        {txt: "A. Data Network Service", ar: "خدمة شبكة البيانات"},
        {txt: "B. Digital Name Server", ar: "خادم الاسم الرقمي"},
        {txt: "C. Domain Network Service", ar: "خدمة شبكة النطاق"},
        {txt: "D. Domain Name System", ar: "نظام أسماء النطاقات"}
      ],
      ans: 3
    },
    {
      q: "Q49. [⭐ مهم جدًا - من تحديد الدكتور] DNS translates domain names into ______.",
      qAr: "س49. [⭐ مهم جدًا - من تحديد الدكتور] يحوّل DNS أسماء النطاقات إلى عناوين IP.",
      options: [
        {txt: "A. IP addresses", ar: "عناوين IP"},
        {txt: "B. Email messages", ar: "رسائل بريد"},
        {txt: "C. Frames", ar: "إطارات"},
        {txt: "D. Physical cables", ar: "كابلات"}
      ],
      ans: 0
    },
    {
      q: "Q50. [⭐ مهم جدًا - من تحديد الدكتور] DNS is implemented as a distributed ______ database.",
      qAr: "س50. [⭐ مهم جدًا - من تحديد الدكتور] يُنفذ DNS على هيئة قاعدة بيانات موزعة هرمية.",
      options: [
        {txt: "A. Random", ar: "عشوائية"},
        {txt: "B. Hierarchical", ar: "هرمية"},
        {txt: "C. Temporary", ar: "مؤقتة"},
        {txt: "D. Local-only", ar: "محلية فقط"}
      ],
      ans: 1
    }
  ],

  // --- ب) أسئلة شبكات الحاسب القصيرة (Short Questions - 12 Questions) ---
  "networks_theory_midterm_short": [
    {
      titleEn: "Q1. [⭐ مهم جدًا - من تحديد الدكتور] What’s a protocol?",
      titleAr: "س1. [⭐ مهم جدًا - من تحديد الدكتور] ما هو البروتوكول؟",
      imageSrc: "images/K1.png",
      ansEn: "A protocol defines the format, order of messages, and actions taken when messages are sent or received.",
      ansAr: "البروتوكول يحدد شكل الرسائل وترتيبها والإجراءات عند إرسالها أو استقبالها.",
      expEn: "Rules governing communication between network devices.",
      expAr: "قواعد تنظم وتتحكم في عملية التواصل بين الأجهزة على الشبكة."
    },
    {
      titleEn: "Q2. [📘 إضافي - من النماذج] Describe in brief different types of Networks.",
      titleAr: "س2. [📘 إضافي - من النماذج] اذكر باختصار أنواع الشبكات.",
      imageSrc: "images/K2.png",
      ansEn: "• PAN: Connects nearby personal devices.<br>• LAN: Connects devices in a small area.<br>• MAN: Covers a city.<br>• WAN: Covers a large geographical area.",
      ansAr: "• PAN: تربط الأجهزة الشخصية القريبة.<br>• LAN: تربط الأجهزة في منطقة صغيرة.<br>• MAN: تغطي مدينة كاملة.<br>• WAN: تغطي منطقة جغرافية واسعة.",
      expEn: "Categorized mainly by geographical coverage area.",
      expAr: "تُصنف الشبكات أساساً بناءً على مساحة التغطية الجغرافية."
    },
    {
      titleEn: "Q3. [⭐ مهم جدًا - من تحديد الدكتور] What transport service does an app need?",
      titleAr: "س3. [⭐ مهم جدًا - من تحديد الدكتور] ما خدمات النقل التي يحتاجها التطبيق؟",
      imageSrc: "images/K3.png",
      ansEn: "• Data integrity.<br>• Throughput.<br>• Timing.<br>• Security.",
      ansAr: "• سلامة البيانات.<br>• معدل نقل البيانات.<br>• التوقيت.<br>• الأمان.",
      expEn: "Applications require reliable or timely data transfer based on their nature.",
      expAr: "تتطلب التطبيقات نقلاً آمناً أو في الوقت الفعلي حسب طبيعة عملها."
    },
    {
      titleEn: "Q4. [📘 إضافي - من النماذج] What is the difference between client-server models and Peer-to-Peer models?",
      titleAr: "س4. [📘 إضافي - من النماذج] ما الفرق بين نموذج العميل والخادم ونموذج الند للند؟",
      imageSrc: "images/K4.png",
      ansEn: "• Client-server: Clients communicate with an always-on server.<br>• Peer-to-Peer: Devices communicate directly without an always-on server.",
      ansAr: "• Client-server: العملاء يتواصلون مع خادم يعمل باستمرار.<br>• Peer-to-Peer: الأجهزة تتواصل مباشرة بدون خادم دائم التشغيل.",
      expEn: "Client-server relies on a central server, while P2P decentralizes communication.",
      expAr: "العميل-خادم يعتمد على سيرفر مركزي، بينما الند للند يعتمد على اللامركزية وتواصل الأجهزة مباشرة."
    },
    {
      titleEn: "Q5. [⭐ مهم جدًا - من تحديد الدكتور] Explain the Peer-to-Peer architecture.",
      titleAr: "س5. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بنية الند للند (Peer-to-Peer).",
      imageSrc: "images/K5.png",
      ansEn: "• No always-on server.<br>• Peers communicate directly.<br>• Peers share services and resources.<br>• Example: P2P file sharing.",
      ansAr: "• لا يوجد خادم دائم التشغيل.<br>• الأجهزة تتواصل مباشرة مع بعضها.<br>• تتشارك الأجهزة الخدمات والموارد.<br>• مثال: مشاركة الملفات.",
      expEn: "Every peer acts as both a client and a server simultaneously.",
      expAr: "كل جهاز (عقدة) يعمل كعميل وخادم في نفس الوقت."
    },
    {
      titleEn: "Q6. [📘 إضافي - من النماذج] Write note about Digital Subscriber Line (DSL).",
      titleAr: "س6. [📘 إضافي - من النماذج] اكتب ملاحظة عن خط المشترك الرقمي (DSL).",
      imageSrc: "images/K6.png",
      ansEn: "• DSL uses existing telephone lines.<br>• It carries voice and data at different frequencies.<br>• Data goes to the Internet.<br>• Voice goes to the telephone network.",
      ansAr: "• يستخدم خطوط الهاتف النحاسية الحالية.<br>• ينقل الصوت والبيانات بترددات مختلفة.<br>• البيانات تتوجه إلى شبكة الإنترنت.<br>• الصوت يتوجه إلى شبكة الهاتف.",
      expEn: "Provides high-speed internet access over standard telephone lines.",
      expAr: "يوفر اتصال إنترنت عالي السرعة عبر خطوط الهاتف العادية."
    },
    {
      titleEn: "Q7. [⭐ مهم جدًا - من تحديد الدكتور] Define multiplexing and de-multiplexing.",
      titleAr: "س7. [⭐ مهم جدًا - من تحديد الدكتور] عرّف التجميع (Multiplexing) والفصل (Demultiplexing).",
      imageSrc: "images/K7.png",
      ansEn: "• Multiplexing: Combines data from multiple sockets for transmission.<br>• Demultiplexing: Delivers received data to the correct socket.",
      ansAr: "• Multiplexing: يجمع البيانات من عدة مقابس (Sockets) لإرسالها عبر الشبكة.<br>• Demultiplexing: يوجه البيانات المستقبلة إلى المقبس الصحيح.",
      expEn: "Handled at the transport layer to manage multiple application processes.",
      expAr: "تتم إدارتها في طبقة النقل للتعامل مع عمليات التطبيقات المتعددة."
    },
    {
      titleEn: "Q8. [📘 إضافي - من النماذج] How does Web Cache work?",
      titleAr: "س8. [📘 إضافي - من النماذج] كيف تعمل ذاكرة التخزين المؤقت للويب (Web Cache)؟",
      imageSrc: "images/K8.png",
      ansEn: "• The browser requests a web object.<br>• The cache checks if the object is stored.<br>• If found, it sends the object to the browser.<br>• If not found, it requests it from the original server.",
      ansAr: "• يطلب المتصفح محتوى ويب معيناً.<br>• يتحقق الكاش (Cache) من وجود المحتوى مخزناً لديه.<br>• إذا وجده، يرسله مباشرة للمتصفح.<br>• إذا لم يجده، يطلبه من الخادم الأصلي.",
      expEn: "Reduces response time and network traffic by storing frequent objects.",
      expAr: "يقلل زمن الاستجابة وحركة المرور في الشبكة بتخزين العناصر المتكررة."
    },
    {
      titleEn: "Q9. [⭐ مهم جدًا - من تحديد الدكتور] Mention different HTTP response status codes.",
      titleAr: "س9. [⭐ مهم جدًا - من تحديد الدكتور] اذكر رموز حالة استجابة HTTP.",
      imageSrc: "images/K9.png",
      ansEn: "• 200 OK: Request succeeded.<br>• 301 Moved Permanently: Resource moved.<br>• 400 Bad Request: Invalid request.<br>• 404 Not Found: Resource not found.<br>• 505 HTTP Version Not Supported: Unsupported HTTP version.",
      ansAr: "• 200 OK: الطلب تم بنجاح.<br>• 301 Moved Permanently: تم نقل المورد بشكل دائم.<br>• 400 Bad Request: طلب غير صالح.<br>• 404 Not Found: المورد غير موجود.<br>• 505 HTTP Version Not Supported: إصدار البروتوكول غير مدعوم.",
      expEn: "Standard codes sent by servers to indicate request outcomes.",
      expAr: "رموز قياسية يرسلها الخادم لتوضيح نتيجة معالجة الطلب."
    },
    {
      titleEn: "Q10. [⭐ مهم جدًا - من تحديد الدكتور] Write about Go-Back-N Protocol.",
      titleAr: "س10. [⭐ مهم جدًا - من تحديد الدكتور] اكتب عن بروتوكول Go-Back-N.",
      imageSrc: "images/K10.png",
      ansEn: "• It is a reliable data transfer protocol.<br>• The sender sends multiple packets.<br>• The receiver accepts packets in order.<br>• Lost packets and subsequent unacknowledged packets are retransmitted.",
      ansAr: "• بروتوكول لنقل البيانات بموثوقية عالية.<br>• يرسل المرسل عدة حزم متتالية.<br>• يستقبل المستقبل الحزم بالترتيب الصحيح.<br>• عند فقد حزمة، يعاد إرسالها مع كافة الحزم اللاحقة غير المؤكدة.",
      expEn: "Uses a sliding window protocol with cumulative acknowledgments.",
      expAr: "يستخدم بروتوكول النافذة المنزلقة مع تأكيدات تراكمية."
    },
    {
      titleEn: "Q11. [⭐ مهم جدًا - من تحديد الدكتور] What is the main difference between Transport Layer and Network Layer?",
      titleAr: "س11. [⭐ مهم جدًا - من تحديد الدكتور] ما الفرق بين طبقة النقل وطبقة الشبكة؟",
      imageSrc: "images/K11.png",
      ansEn: "• Transport Layer: Provides logical communication between processes.<br>• Network Layer: Provides logical communication between hosts.",
      ansAr: "• طبقة النقل: توفر اتصالاً منطقياً بين العمليات (Processes).<br>• طبقة الشبكة: توفر اتصالاً منطقياً بين الأجهزة (Hosts).",
      expEn: "Transport focuses on application processes, Network focuses on physical/logical end systems.",
      expAr: "طبقة النقل تركز على برامج التطبيقات، بينما طبقة الشبكة تركز على الأجهزة والمضيفين."
    },
    {
      titleEn: "Q12. [⭐ مهم جدًا - من تحديد الدكتور] What is the main difference between Routing and Forwarding?",
      titleAr: "س12. [⭐ مهم جدًا - من تحديد الدكتور] ما الفرق بين تحديد المسار (Routing) وتمرير الحزم (Forwarding)؟",
      imageSrc: "images/K12.png",
      ansEn: "• Routing: Determines the global path packets take from source to destination.<br>• Forwarding: Moves packets locally from a router's input to the appropriate output port.",
      ansAr: "• Routing: يحدد المسار العام الذي تسلكه الحزم من المصدر للوجهة.<br>• Forwarding: ينقل الحزم محلياً من مدخل الموجه إلى منفذ الخروج المناسب.",
      expEn: "Routing is path calculation; Forwarding is packet relocation across router ports.",
      expAr: "التوجيه هو حساب المسار، والتمرير هو نقل الحزمة عبر منافذ الموجه."
    }
  ],

  // --- ج) أسئلة شبكات الحاسب الطويلة (Long Questions - 6 Questions) ---
  "networks_theory_midterm_long": [
    {
      titleEn: "Q1. [⭐ مهم جدًا - من تحديد الدكتور] Explain SMTP in detail with the help of a diagram.",
      titleAr: "س1. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بروتوكول SMTP بالتفصيل مع رسم.",
      imageSrc: "images/K13.png",
      ansEn: "SMTP stands for Simple Mail Transfer Protocol.<br>• It is used to send email messages.<br>• It uses TCP for reliable transfer.<br>• The sender sends an email to a mail server.<br>• The mail server transfers it to the receiver’s mail server.<br>• SMTP uses command/response interaction.",
      ansAr: "بروتوكول نقل البريد البسيط (SMTP):<br>• يُستخدم لإرسال رسائل البريد الإلكتروني.<br>• يعتمد على بروتوكول TCP لضمان نقل موثوق.<br>• يرسل المستخدم الرسالة إلى خادم البريد الخاص به.<br>• ينقل الخادم الرسالة إلى خادم بريد المستلم.<br>• يعتمد على نظام الأوامر والاستجابات.",
      expEn: "Core email delivery protocol operating at the application layer.",
      expAr: "البروتوكول الأساسي لتسليم البريد الإلكتروني في طبقة التطبيقات."
    },
    {
      titleEn: "Q2. [⭐ مهم جدًا - من تحديد الدكتور] Explain Domain Name System (DNS) in detail.",
      titleAr: "س2. [⭐ مهم جدًا - من تحديد الدكتور] اشرح نظام أسماء النطاقات (DNS) بالتفصيل.",
      imageSrc: "images/K14.png",
      ansEn: "• DNS stands for Domain Name System.<br>• It translates domain names into IP addresses.<br>• DNS is a distributed, hierarchical database.<br>• DNS servers include Root, TLD, and Authoritative servers.<br>• DNS helps users access websites using names instead of numbers.",
      ansAr: "• نظام أسماء النطاقات (DNS).<br>• يترجم أسماء النطاقات النصية إلى عناوين IP الرقمية.<br>• قاعدة بيانات موزعة وهرمية الشكل.<br>• يتكون من خوادم الجذر (Root)، النطاقات العليا (TLD)، والخوادم الموثوقة (Authoritative).<br>• يسهل على المستخدمين تصفح الويب بالأسماء بدلاً من الأرقام.",
      expEn: "Essential directory service of the internet.",
      expAr: "خدمة الدليل الحيوي الأساسية لعمل شبكة الإنترنت."
    },
    {
      titleEn: "Q3. [📘 إضافي - من النماذج] Write in detail about Circuit Switching and Packet Switching.",
      titleAr: "س3. [📘 إضافي - من النماذج] اشرح بالتفصيل عن تبديل الدارات (Circuit Switching) وتبديل الحزم (Packet Switching).",
      imageSrc: "images/K15.png",
      ansEn: "Circuit Switching:<br>• A dedicated path is reserved for the connection.<br>• Resources are reserved and idle if not used.<br>• Used in traditional telephone networks.<br><br>Packet Switching:<br>• Data is divided into packets.<br>• Packets travel through routers via store-and-forward.<br>• Packets dynamically share network resources.",
      ansAr: "تبديل الدارات (Circuit Switching):<br>• يتم حجز مسار مخصص وثابت طوال فترة الاتصال.<br>• تُحجز الموارد وتظل محجوزة حتى لو لم تُستغل بالكامل.<br>• يُستخدم في شبكات الهاتف التقليدية.<br><br>تبديل الحزم (Packet Switching):<br>• تقسم البيانات إلى حزم صغيرة.<br>• تنتقل الحزم عبر الموجهات بطريقة التخزين والتمرير.<br>• تتشارك الحزم موارد الشبكة بكفاءة عالية.",
      expEn: "Two fundamental approaches to structuring network communication links.",
      expAr: "الطريقتان الأساسيتان لهيكلة قنوات الاتصال في الشبكات."
    },
    {
      titleEn: "Q4. [⭐ مهم جدًا - من تحديد الدكتور] Explain the HTTP protocol in detail.",
      titleAr: "س4. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بروتوكول HTTP بالتفصيل.",
      imageSrc: "images/K16.png",
      ansEn: "• HTTP stands for Hypertext Transfer Protocol.<br>• It is an application-layer protocol.<br>• It uses the client-server model.<br>• The browser sends an HTTP request, and the server sends an HTTP response.<br>• HTTP uses TCP, normally port 80.<br>• HTTP is stateless (does not store previous client states).",
      ansAr: "• بروتوكول نقل النص التشعبي (HTTP).<br>• يعمل في طبقة التطبيقات.<br>• يعتمد على نموذج العميل والخادم (Client-Server).<br>• المتصفح يرسل طلب (Request) والخادم يرد باستجابة (Response).<br>• يستخدم بروتوكول TCP عبر المنفذ 80 عادة.<br>• بروتوكول عديم الحالة (Stateless) لا يحتفظ بمعلومات الطلبات السابقة.",
      expEn: "The foundation of data communication for the World Wide Web.",
      expAr: "الأساس البرمجي لتبادل البيانات وتصفح الويب."
    },
    {
      titleEn: "Q5. [⭐ مهم جدًا - من تحديد الدكتور] Explain services, layering, and encapsulation in the TCP/IP reference model using a diagram.",
      titleAr: "س5. [⭐ مهم جدًا - من تحديد الدكتور] اشرح الخدمات والطبقات والتغليف في نموذج TCP/IP مع رسم.",
      imageSrc: "images/K17.png",
      ansEn: "TCP/IP has five layers:<br>1. Application: Supports network applications.<br>2. Transport: Process-to-process data transfer.<br>3. Network: Routes datagrams.<br>4. Link: Transfers frames between neighboring nodes.<br>5. Physical: Transmits raw bits.<br>Encapsulation: Adding headers/trailers as data moves down the layers.",
      ansAr: "نموذج TCP/IP يتكون من 5 طبقات:<br>1. التطبيقات (Application): تدعم تطبيقات الشبكة.<br>2. النقل (Transport): نقل البيانات بين العمليات.<br>3. الشبكة (Network): توجيه حزم البيانات (Datagrams).<br>4. الربط (Link): نقل الإطارات بين العقد المجاورة.<br>5. الفيزيائية (Physical): نقل البتات الخام.<br>التغليف (Encapsulation): إضافة الترويسات للبيانات أثناء انتقالها للأسفل.",
      expEn: "Hierarchical architecture that standardizes network functions.",
      expAr: "الهيكل الهرمي الذي يوحد ويقنن وظائف الشبكات."
    },
    {
      titleEn: "Q6. [⭐ مهم جدًا - من تحديد الدكتور] Explain TCP and UDP in detail.",
      titleAr: "س6. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بروتوكولي TCP و UDP بالتفصيل.",
      imageSrc: "images/K18.png",
      ansEn: "TCP (Transmission Control Protocol):<br>• Connection-oriented.<br>• Reliable delivery with acknowledgments.<br>• Provides flow control and congestion control.<br><br>UDP (User Datagram Protocol):<br>• Connectionless.<br>• Unreliable, fast best-effort delivery.<br>• No flow or congestion control overhead.",
      ansAr: "بروتوكول التحكم بالنقل (TCP):<br>• يعتمد على إنشاء اتصال مسبق.<br>• نقل موثوق ومضمون مع تأكيدات الاستلام.<br>• يوفر التحكم بالتدفق والازدحام.<br><br>بروتوكول حزم بيانات المستخدم (UDP):<br>• لا يعتمد على اتصال.<br>• سريع وغير مضمون (أفضل جهد ممكن - Best-effort).<br>• لا يتضمن تحكماً بالتدفق أو الازدحام.",
      expEn: "The two primary transport layer protocols with contrasting features.",
      expAr: "أهم بروتوكولين في طبقة النقل بخصائص متعاكسة تناسب التطبيقات المختلفة."
    }
  ],

  // ==========================================
  // === 2. الإشارات والنظم (Signals & Systems) ===
  // ==========================================
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
        {txt: "(c) x(-t) = -x(t)", ar: "x(-t) = -x(-t)"},
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
        {txt: "(d) -1", ar: "-1"}
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
        {txt: "(d) x(-t) - x(t)", ar: "x(-t) - x(-t)"}
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

  // --- ب) أسئلة شبكات الحاسب القصيرة (Short Questions - 12 Questions باختلافاتها الصحيحة) ---
  "networks_theory_midterm_short": [
    {
      titleEn: "Q1. [⭐ مهم جدًا - من تحديد الدكتور] What’s a protocol?",
      titleAr: "س1. [⭐ مهم جدًا - من تحديد الدكتور] ما هو البروتوكول؟",
      imageSrc: "images/K1.png",
      ansEn: "A protocol defines the format, order of messages, and actions taken when messages are sent or received.",
      ansAr: "البروتوكول يحدد شكل الرسائل وترتيبها والإجراءات عند إرسالها أو استقبالها.",
      expEn: "Rules governing communication between network devices.",
      expAr: "قواعد تنظم وتتحكم في عملية التواصل بين الأجهزة على الشبكة."
    },
    {
      titleEn: "Q2. [📘 إضافي - من النماذج] Describe in brief different types of Networks.",
      titleAr: "س2. [📘 إضافي - من النماذج] اذكر باختصار أنواع الشبكات.",
      imageSrc: "images/K2.png",
      ansEn: "• PAN: Connects nearby personal devices.<br>• LAN: Connects devices in a small area.<br>• MAN: Covers a city.<br>• WAN: Covers a large geographical area.",
      ansAr: "• PAN: تربط الأجهزة الشخصية القريبة.<br>• LAN: تربط الأجهزة في منطقة صغيرة.<br>• MAN: تغطي مدينة كاملة.<br>• WAN: تغطي منطقة جغرافية واسعة.",
      expEn: "Categorized mainly by geographical coverage area.",
      expAr: "تُصنف الشبكات أساساً بناءً على مساحة التغطية الجغرافية."
    },
    {
      titleEn: "Q3. [⭐ مهم جدًا - من تحديد الدكتور] What transport service does an app need?",
      titleAr: "س3. [⭐ مهم جدًا - من تحديد الدكتور] ما خدمات النقل التي يحتاجها التطبيق؟",
      imageSrc: "images/K3.png",
      ansEn: "• Data integrity.<br>• Throughput.<br>• Timing.<br>• Security.",
      ansAr: "• سلامة البيانات.<br>• معدل نقل البيانات.<br>• التوقيت.<br>• الأمان.",
      expEn: "Applications require reliable or timely data transfer based on their nature.",
      expAr: "تتطلب التطبيقات نقلاً آمناً أو في الوقت الفعلي حسب طبيعة عملها."
    },
    {
      titleEn: "Q4. [📘 إضافي - من النماذج] What is the difference between client-server models and Peer-to-Peer models?",
      titleAr: "س4. [📘 إضافي - من النماذج] ما الفرق بين نموذج العميل والخادم ونموذج الند للند؟",
      imageSrc: "images/K4.png",
      ansEn: "• Client-server: Clients communicate with an always-on server.<br>• Peer-to-Peer: Devices communicate directly without an always-on server.",
      ansAr: "• Client-server: العملاء يتواصلون مع خادم يعمل باستمرار.<br>• Peer-to-Peer: الأجهزة تتواصل مباشرة بدون خادم دائم التشغيل.",
      expEn: "Client-server relies on a central server, while P2P decentralizes communication.",
      expAr: "العميل-خادم يعتمد على سيرفر مركزي، بينما الند للند يعتمد على اللامركزية وتواصل الأجهزة مباشرة."
    },
    {
      titleEn: "Q5. [⭐ مهم جدًا - من تحديد الدكتور] Explain the Peer-to-Peer architecture.",
      titleAr: "س5. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بنية الند للند (Peer-to-Peer).",
      imageSrc: "images/K5.png",
      ansEn: "• No always-on server.<br>• Peers communicate directly.<br>• Peers share services and resources.<br>• Example: P2P file sharing.",
      ansAr: "• لا يوجد خادم دائم التشغيل.<br>• الأجهزة تتواصل مباشرة مع بعضها.<br>• تتشارك الأجهزة الخدمات والموارد.<br>• مثال: مشاركة الملفات.",
      expEn: "Every peer acts as both a client and a server simultaneously.",
      expAr: "كل جهاز (عقدة) يعمل كعميل وخادم في نفس الوقت."
    },
    {
      titleEn: "Q6. [📘 إضافي - من النماذج] Write note about Digital Subscriber Line (DSL).",
      titleAr: "س6. [📘 إضافي - من النماذج] اكتب ملاحظة عن خط المشترك الرقمي (DSL).",
      imageSrc: "images/K6.png",
      ansEn: "• DSL uses existing telephone lines.<br>• It carries voice and data at different frequencies.<br>• Data goes to the Internet.<br>• Voice goes to the telephone network.",
      ansAr: "• يستخدم خطوط الهاتف النحاسية الحالية.<br>• ينقل الصوت والبيانات بترددات مختلفة.<br>• البيانات تتوجه إلى شبكة الإنترنت.<br>• الصوت يتوجه إلى شبكة الهاتف.",
      expEn: "Provides high-speed internet access over standard telephone lines.",
      expAr: "يوفر اتصال إنترنت عالي السرعة عبر خطوط الهاتف العادية."
    },
    {
      titleEn: "Q7. [⭐ مهم جدًا - من تحديد الدكتور] Define multiplexing and de-multiplexing.",
      titleAr: "س7. [⭐ مهم جدًا - من تحديد الدكتور] عرّف التجميع (Multiplexing) والفصل (Demultiplexing).",
      imageSrc: "images/K7.png",
      ansEn: "• Multiplexing: Combines data from multiple sockets for transmission.<br>• Demultiplexing: Delivers received data to the correct socket.",
      ansAr: "• Multiplexing: يجمع البيانات من عدة مقابس (Sockets) لإرسالها عبر الشبكة.<br>• Demultiplexing: يوجه البيانات المستقبلة إلى المقبس الصحيح.",
      expEn: "Handled at the transport layer to manage multiple application processes.",
      expAr: "تتم إدارتها في طبقة النقل للتعامل مع عمليات التطبيقات المتعددة."
    },
    {
      titleEn: "Q8. [📘 إضافي - من النماذج] How does Web Cache work?",
      titleAr: "س8. [📘 إضافي - من النماذج] كيف تعمل ذاكرة التخزين المؤقت للويب (Web Cache)؟",
      imageSrc: "images/K8.png",
      ansEn: "• The browser requests a web object.<br>• The cache checks if the object is stored.<br>• If found, it sends the object to the browser.<br>• If not found, it requests it from the original server.",
      ansAr: "• يطلب المتصفح محتوى ويب معيناً.<br>• يتحقق الكاش (Cache) من وجود المحتوى مخزناً لديه.<br>• إذا وجده، يرسله مباشرة للمتصفح.<br>• إذا لم يجده، يطلبه من الخادم الأصلي.",
      expEn: "Reduces response time and network traffic by storing frequent objects.",
      expAr: "يقلل زمن الاستجابة وحركة المرور في الشبكة بتخزين العناصر المتكررة."
    },
    {
      titleEn: "Q9. [⭐ مهم جدًا - من تحديد الدكتور] Mention different HTTP response status codes.",
      titleAr: "س9. [⭐ مهم جدًا - من تحديد الدكتور] اذكر رموز حالة استجابة HTTP.",
      imageSrc: "images/K9.png",
      ansEn: "• 200 OK: Request succeeded.<br>• 301 Moved Permanently: Resource moved.<br>• 400 Bad Request: Invalid request.<br>• 404 Not Found: Resource not found.<br>• 505 HTTP Version Not Supported: Unsupported HTTP version.",
      ansAr: "• 200 OK: الطلب تم بنجاح.<br>• 301 Moved Permanently: تم نقل المورد بشكل دائم.<br>• 400 Bad Request: طلب غير صالح.<br>• 404 Not Found: المورد غير موجود.<br>• 505 HTTP Version Not Supported: إصدار البروتوكول غير مدعوم.",
      expEn: "Standard codes sent by servers to indicate request outcomes.",
      expAr: "رموز قياسية يرسلها الخادم لتوضيح نتيجة معالجة الطلب."
    },
    {
      titleEn: "Q10. [⭐ مهم جدًا - من تحديد الدكتور] Write about Go-Back-N Protocol.",
      titleAr: "س10. [⭐ مهم جدًا - من تحديد الدكتور] اكتب عن بروتوكول Go-Back-N.",
      imageSrc: "images/K10.png",
      ansEn: "• It is a reliable data transfer protocol.<br>• The sender sends multiple packets.<br>• The receiver accepts packets in order.<br>• Lost packets and subsequent unacknowledged packets are retransmitted.",
      ansAr: "• بروتوكول لنقل البيانات بموثوقية عالية.<br>• يرسل المرسل عدة حزم متتالية.<br>• يستقبل المستقبل الحزم بالترتيب الصحيح.<br>• عند فقد حزمة، يعاد إرسالها مع كافة الحزم اللاحقة غير المؤكدة.",
      expEn: "Uses a sliding window protocol with cumulative acknowledgments.",
      expAr: "يستخدم بروتوكول النافذة المنزلقة مع تأكيدات تراكمية."
    },
    {
      titleEn: "Q11. [⭐ مهم جدًا - من تحديد الدكتور] What is the main difference between Transport Layer and Network Layer?",
      titleAr: "س11. [⭐ مهم جدًا - من تحديد الدكتور] ما الفرق بين طبقة النقل وطبقة الشبكة؟",
      imageSrc: "images/K11.png",
      ansEn: "• Transport Layer: Provides logical communication between processes.<br>• Network Layer: Provides logical communication between hosts.",
      ansAr: "• طبقة النقل: توفر اتصالاً منطقياً بين العمليات (Processes).<br>• طبقة الشبكة: توفر اتصالاً منطقياً بين الأجهزة (Hosts).",
      expEn: "Transport focuses on application processes, Network focuses on physical/logical end systems.",
      expAr: "طبقة النقل تركز على برامج التطبيقات، بينما طبقة الشبكة تركز على الأجهزة والمضيفين."
    },
    {
      titleEn: "Q12. [⭐ مهم جدًا - من تحديد الدكتور] What is the main difference between Routing and Forwarding?",
      titleAr: "س12. [⭐ مهم جدًا - من تحديد الدكتور] ما الفرق بين تحديد المسار (Routing) وتمرير الحزم (Forwarding)؟",
      imageSrc: "images/K12.png",
      ansEn: "• Routing: Determines the global path packets take from source to destination.<br>• Forwarding: Moves packets locally from a router's input to the appropriate output port.",
      ansAr: "• Routing: يحدد المسار العام الذي تسلكه الحزم من المصدر للوجهة.<br>• Forwarding: ينقل الحزم محلياً من مدخل الموجه إلى منفذ الخروج المناسب.",
      expEn: "Routing is path calculation; Forwarding is packet relocation across router ports.",
      expAr: "التوجيه هو حساب المسار، والتمرير هو نقل الحزمة عبر منافذ الموجه."
    }
  ],

  // --- ج) أسئلة شبكات الحاسب الطويلة (Long Questions - 6 Questions باختلافاتها الصحيحة) ---
  "networks_theory_midterm_long": [
    {
      titleEn: "Q1. [⭐ مهم جدًا - من تحديد الدكتور] Explain SMTP in detail with the help of a diagram.",
      titleAr: "س1. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بروتوكول SMTP بالتفصيل مع رسم.",
      imageSrc: "images/K13.png",
      ansEn: "SMTP stands for Simple Mail Transfer Protocol.<br>• It is used to send email messages.<br>• It uses TCP for reliable transfer.<br>• The sender sends an email to a mail server.<br>• The mail server transfers it to the receiver’s mail server.<br>• SMTP uses command/response interaction.",
      ansAr: "بروتوكول نقل البريد البسيط (SMTP):<br>• يُستخدم لإرسال رسائل البريد الإلكتروني.<br>• يعتمد على بروتوكول TCP لضمان نقل موثوق.<br>• يرسل المستخدم الرسالة إلى خادم البريد الخاص به.<br>• ينقل الخادم الرسالة إلى خادم بريد المستلم.<br>• يعتمد على نظام الأوامر والاستجابات.",
      expEn: "Core email delivery protocol operating at the application layer.",
      expAr: "البروتوكول الأساسي لتسليم البريد الإلكتروني في طبقة التطبيقات."
    },
    {
      titleEn: "Q2. [⭐ مهم جدًا - من تحديد الدكتور] Explain Domain Name System (DNS) in detail.",
      titleAr: "س2. [⭐ مهم جدًا - من تحديد الدكتور] اشرح نظام أسماء النطاقات (DNS) بالتفصيل.",
      imageSrc: "images/K14.png",
      ansEn: "• DNS stands for Domain Name System.<br>• It translates domain names into IP addresses.<br>• DNS is a distributed, hierarchical database.<br>• DNS servers include Root, TLD, and Authoritative servers.<br>• DNS helps users access websites using names instead of numbers.",
      ansAr: "• نظام أسماء النطاقات (DNS).<br>• يترجم أسماء النطاقات النصية إلى عناوين IP الرقمية.<br>• قاعدة بيانات موزعة وهرمية الشكل.<br>• يتكون من خوادم الجذر (Root)، النطاقات العليا (TLD)، والخوادم الموثوقة (Authoritative).<br>• يسهل على المستخدمين تصفح الويب بالأسماء بدلاً من الأرقام.",
      expEn: "Essential directory service of the internet.",
      expAr: "خدمة الدليل الحيوي الأساسية لعمل شبكة الإنترنت."
    },
    {
      titleEn: "Q3. [📘 إضافي - من النماذج] Write in detail about Circuit Switching and Packet Switching.",
      titleAr: "س3. [📘 إضافي - من النماذج] اشرح بالتفصيل عن تبديل الدارات (Circuit Switching) وتبديل الحزم (Packet Switching).",
      imageSrc: "images/K15.png",
      ansEn: "Circuit Switching:<br>• A dedicated path is reserved for the connection.<br>• Resources are reserved and idle if not used.<br>• Used in traditional telephone networks.<br><br>Packet Switching:<br>• Data is divided into packets.<br>• Packets travel through routers via store-and-forward.<br>• Packets dynamically share network resources.",
      ansAr: "تبديل الدارات (Circuit Switching):<br>• يتم حجز مسار مخصص وثابت طوال فترة الاتصال.<br>• تُحجز الموارد وتظل محجوزة حتى لو لم تُستغل بالكامل.<br>• يُستخدم في شبكات الهاتف التقليدية.<br><br>تبديل الحزم (Packet Switching):<br>• تقسم البيانات إلى حزم صغيرة.<br>• تنتقل الحزم عبر الموجهات بطريقة التخزين والتمرير.<br>• تتشارك الحزم موارد الشبكة بكفاءة عالية.",
      expEn: "Two fundamental approaches to structuring network communication links.",
      expAr: "الطريقتان الأساسيتان لهيكلة قنوات الاتصال في الشبكات."
    },
    {
      titleEn: "Q4. [⭐ مهم جدًا - من تحديد الدكتور] Explain the HTTP protocol in detail.",
      titleAr: "س4. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بروتوكول HTTP بالتفصيل.",
      imageSrc: "images/K16.png",
      ansEn: "• HTTP stands for Hypertext Transfer Protocol.<br>• It is an application-layer protocol.<br>• It uses the client-server model.<br>• The browser sends an HTTP request, and the server sends an HTTP response.<br>• HTTP uses TCP, normally port 80.<br>• HTTP is stateless (does not store previous client states).",
      ansAr: "• بروتوكول نقل النص التشعبي (HTTP).<br>• يعمل في طبقة التطبيقات.<br>• يعتمد على نموذج العميل والخادم (Client-Server).<br>• المتصفح يرسل طلب (Request) والخادم يرد باستجابة (Response).<br>• يستخدم بروتوكول TCP عبر المنفذ 80 عادة.<br>• بروتوكول عديم الحالة (Stateless) لا يحتفظ بمعلومات الطلبات السابقة.",
      expEn: "The foundation of data communication for the World Wide Web.",
      expAr: "الأساس البرمجي لتبادل البيانات وتصفح الويب."
    },
    {
      titleEn: "Q5. [⭐ مهم جدًا - من تحديد الدكتور] Explain services, layering, and encapsulation in the TCP/IP reference model using a diagram.",
      titleAr: "س5. [⭐ مهم جدًا - من تحديد الدكتور] اشرح الخدمات والطبقات والتغليف في نموذج TCP/IP مع رسم.",
      imageSrc: "images/K17.png",
      ansEn: "TCP/IP has five layers:<br>1. Application: Supports network applications.<br>2. Transport: Process-to-process data transfer.<br>3. Network: Routes datagrams.<br>4. Link: Transfers frames between neighboring nodes.<br>5. Physical: Transmits raw bits.<br>Encapsulation: Adding headers/trailers as data moves down the layers.",
      ansAr: "نموذج TCP/IP يتكون من 5 طبقات:<br>1. التطبيقات (Application): تدعم تطبيقات الشبكة.<br>2. النقل (Transport): نقل البيانات بين العمليات.<br>3. الشبكة (Network): توجيه حزم البيانات (Datagrams).<br>4. الربط (Link): نقل الإطارات بين العقد المجاورة.<br>5. الفيزيائية (Physical): نقل البتات الخام.<br>التغليف (Encapsulation): إضافة الترويسات للبيانات أثناء انتقالها للأسفل.",
      expEn: "Hierarchical architecture that standardizes network functions.",
      expAr: "الهيكل الهرمي الذي يوحد ويقنن وظائف الشبكات."
    },
    {
      titleEn: "Q6. [⭐ مهم جدًا - من تحديد الدكتور] Explain TCP and UDP in detail.",
      titleAr: "س6. [⭐ مهم جدًا - من تحديد الدكتور] اشرح بروتوكولي TCP و UDP بالتفصيل.",
      imageSrc: "images/K18.png",
      ansEn: "TCP (Transmission Control Protocol):<br>• Connection-oriented.<br>• Reliable delivery with acknowledgments.<br>• Provides flow control and congestion control.<br><br>UDP (User Datagram Protocol):<br>• Connectionless.<br>• Unreliable, fast best-effort delivery.<br>• No flow or congestion control overhead.",
      ansAr: "بروتوكول التحكم بالنقل (TCP):<br>• يعتمد على إنشاء اتصال مسبق.<br>• نقل موثوق ومضمون مع تأكيدات الاستلام.<br>• يوفر التحكم بالتدفق والازدحام.<br><br>بروتوكول حزم بيانات المستخدم (UDP):<br>• لا يعتمد على اتصال.<br>• سريع وغير مضمون (أفضل جهد ممكن - Best-effort).<br>• لا يتضمن تحكماً بالتدفق أو الازدحام.",
      expEn: "The two primary transport layer protocols with contrasting features.",
      expAr: "أهم بروتوكولين في طبقة النقل بخصائص متعاكسة تناسب التطبيقات المختلفة."
    }
  ],

  // ==========================================
  // === 2. الإشارات والنظم (Signals & Systems) ===
  // ==========================================
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
        {txt: "(c) x(-t) = -x(t)", ar: "x(-t) = -x(-t)"},
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
        {txt: "(d) -1", ar: "-1"}
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
        {txt: "(d) x(-t) - x(t)", ar: "x(-t) - x(-t)"}
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
      titleAr: "س1. أكتب أي استخدامين للتكامل؟[cite: 5]",
      imageSrc: "images/A1.png",
      ansEn: "1. Calculating Signal Energy: Integration is used to determine the total energy of a continuous-time signal x(t) using the formula E = ∫[-∞ to ∞] |x(t)|^2 dt.<br>2. Deriving Fundamental Signals: Integrating the Unit Impulse signal δ(t) yields the Unit Step signal u(t) = ∫[-∞ to t] δ(τ) dτ, and integrating u(t) yields the Unit Ramp signal r(t).[cite: 5]",
      ansAr: "الحل بالكامل بالعربي:<br>1. <strong>حساب طاقة الإشارة:</strong> يُستخدم التكامل لحساب الطاقة الكلية للإشارة المستمرة x(t) بالقانون E = ∫ |x(t)|^2 dt.<br>2. <strong>اشتقاق الإشارات الأساسية:</strong> تكامل إشارة النبضة δ(t) يعطي إشارة الخطوة u(t)، وتكامل إشارة الخطوة u(t) يعطي إشارة المائل r(t).[cite: 5]"
    },
    {
      titleEn: "Q2. Explain the Amplitude, Frequency, and Wavelength of a Continuous-Time Sinusoidal signal.",
      titleAr: "س2. اشرح السعة والتردد والطول الموجي لإشارة الجيب مستمرة الزمن؟[cite: 5]",
      imageSrc: "images/A2.png",
      ansEn: "For a sinusoidal signal x(t) = A sin(ωt + ϕ):<br>• Amplitude (A): The maximum magnitude or peak value attained by the wave from its zero baseline.<br>• Frequency (F): The number of complete cycles per second, expressed in Hertz (Hz), where F = 1/T.<br>• Wavelength (λ): The physical length/distance occupied by one full wave cycle in space.[cite: 5]",
      ansAr: "الحل بالكامل بالعربي للإشارة x(t) = A sin(ωt + ϕ):<br>• <strong>السعة (A):</strong> أقصى قيمة أو ارتفاع تصل إليه الموجة من خط الصفر.<br>• <strong>التردد (F):</strong> عدد الدورات الكاملة في الثانية الواحدة بالهرتز (Hz)، حيث F = 1/T.<br>• <strong>الطول الموجي (λ):</strong> المسافة الفيزيائية أو الطول الذي تشغله دورة موجية واحدة كاملة في الفضاء.[cite: 5]"
    },
    {
      titleEn: "Q3. Describe Continuous-Time and Discrete-Time System.",
      titleAr: "س3. صف النظام مستمر الزمن والنظام منفصل الزمن؟[cite: 5]",
      imageSrc: "images/A3.png",
      ansEn: "• Continuous-Time System: A system that transforms continuous-time input signals x(t) into continuous-time output signals y(t), where signals are defined for all continuous values of time t.<br>• Discrete-Time System: A system that transforms discrete-time input signals x[n] into discrete-time output signals y[n], where signals are defined only at discrete integer time instants n.[cite: 5]",
      ansAr: "الحل بالكامل بالعربي:<br>• <strong>النظام مستمر الزمن (Continuous-Time System):</strong> نظام يحول إشارات الدخل المستمرة x(t) إلى إشارات خرج مستمرة y(t)، وتكون الإشارات معرفة لجميع قيم الزمن المستمر t.<br>• <strong>النظام منفصل الزمن (Discrete-Time System):</strong> نظام يحول إشارات الدخل المنفصلة x[n] إلى إشارات خرج منفصلة y[n]، وتكون الإشارات معرفة فقط عند نقاط زمنية صحيحة منفصلة n.[cite: 5]"
    },
    {
      titleEn: "Q4. Find whether the given signal X1(t) & X2(t) as shown in Figure 1 & 2 is Even or not?",
      titleAr: "س4. حدد ما إذا كانت الإشارة X1(t) في الشكل 1 زوجية أم لا؟[cite: 5]",
      imageSrc: "images/A4.png"
    }
  ],

  "signals_theory_midterm_long": [
    {
      titleEn: "Q1. Explain the interconnection of systems and write the example of each interconnection.",
      titleAr: "س1. اشرح أنواع التوصيلات بين الأنظمة واذكر مثالاً على كل نوع؟[cite: 5]",
      imageSrc: "images/A5.png",
      ansEn: "• Series (Cascade) Interconnection: The output of the first system is fed as the direct input to the second system.<br>  Example: Television receiver (a radio frequency amplifier followed by a noise filter).<br><br>• Parallel Interconnection: The same input signal is applied simultaneously to two or more separate systems, and their outputs are added.<br>  Example: Two-way loudspeaker system (separating high and low frequencies).<br><br>• Feedback Interconnection: A portion of the system's output is fed back and combined with the primary input signal.<br>  Example: Automobile cruise control system or air conditioner thermostat system.[cite: 5]",
      ansAr: "الحل بالكامل بالعربي:<br>• <strong>التوصيل على التسلسل (Series/Cascade):</strong> يُغذى خرج النظام الأول كدخل مباشر للنظام الثاني.<br>  <em>مثال:</em> مستقبل التلفزيون (مكبر ترددات الراديو يليه مرشح الضوضاء).<br><br>• <strong>التوصيل على التوازي (Parallel):</strong> تُطبق إشارة الدخل نفسها بالتوازي على نظامين أو أكثر، وتُجمع مخرجاتهما.<br>  <em>مثال:</em> نظام مكبرات الصوت ثنائي الاتجاه (فصل الترددات العالية عن المنخفضة).<br><br>• <strong>توصيل التغذية الراجعة (Feedback):</strong> يُعاد جزء من خرج النظام ليدمج مع إشارة الدخل الرئيسية.<br>  <em>مثال:</em> نظام مثبت السرعة في السيارات أو نظام الثرموستات في المكيفات.[cite: 5]"
    },
    {
      id: "Q2",
      titleEn: "Q2. Perform the following operations on X1(t) and X2(t):",
      titleAr: "س2. نفذ العمليات التالية على الإشارات X1(t) و X2(t) المعطاة في الشكل؟[cite: 5]",
      twoImages: ["images/A6.png", "images/A7.png"],
      solImage: "images/A8.png"
    },
    {
      id: "Q3",
      titleEn: "Q3. Draw Continuous-Time Exponential and Sinusoidal signals and define each parameter of both the signals' equations.",
      titleAr: "س3. ارسم الإشارة الأسية وإشارة الجيب مستمرة الزمن، وعرّف جميع المعاملات/المتغيرات الموجودة في معادلة كل منهما؟[cite: 5]",
      imageSrc: "images/A9.png"
    }
  ]
};