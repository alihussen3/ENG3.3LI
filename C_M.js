const statsDbData = {
  // === 1. الإحصاء والاحتمالات (Stats) - قريباً ===

  // === 2. مفاهيم قواعد البيانات (Database - DBMS) ===
  "db_theory_midterm_mcq": [
    {
      q: "1. A collection of related data is called a:",
      qAr: "1. تُسمى مجموعة البيانات المرتبطة ببعضها البعض بـ:",
      options: [
        {txt: "(a) Database", ar: "قاعدة بيانات"},
        {txt: "(b) DBMS", ar: "نظام إدارة قواعد البيانات"},
        {txt: "(c) Metadata", ar: "بيانات الوصف / بيانات عن البيانات"},
        {txt: "(d) Mini-world", ar: "العالم المصغر"}
      ],
      ans: 0
    },
    {
      q: "2. Which of the following describes how data is actually stored on disk?",
      qAr: "2. أي مما يلي يصف كيفية تخزين البيانات فعلياً على القرص؟",
      options: [
        {txt: "(a) Logical Level", ar: "المستوى المنطقي"},
        {txt: "(b) View Level", ar: "مستوى العرض / العرض الظاهري"},
        {txt: "(c) Physical Level", ar: "المستوى المادي / الفيزيائي"},
        {txt: "(d) Application Level", ar: "مستوى التطبيق"}
      ],
      ans: 2
    },
    {
      q: "3. The software package used to facilitate the creation and maintenance of a computerized database is called:",
      qAr: "3. حزمة البرامج المستخدمة لتسهيل إنشاء قاعدة البيانات المحوسبة وصيانتها تُسمى:",
      options: [
        {txt: "(a) Database System", ar: "نظام قاعدة البيانات"},
        {txt: "(b) Query Tool", ar: "أداة الاستعلام"},
        {txt: "(c) DBMS", ar: "نظام إدارة قواعد البيانات"},
        {txt: "(d) Data Warehouse", ar: "مستودع البيانات"}
      ],
      ans: 2
    },
    {
      q: "4. Which characteristic of the database approach allows changes in database structure without affecting applications?",
      qAr: "4. ما هي خاصية نهج قواعد البيانات التي تسمح بتغيير هيكل قاعدة البيانات دون التأثير على التطبيقات؟",
      options: [
        {txt: "(a) Scalability", ar: "القابلية للتوسع"},
        {txt: "(b) Query Flexibility", ar: "مرونة الاستعلام"},
        {txt: "(c) Data Independence", ar: "استقلالية البيانات"},
        {txt: "(d) Centralized Control", ar: "التحكم المركزي"}
      ],
      ans: 2
    },
    {
      q: "5. End-users who make up the largest section of users and work with predefined transactions are called:",
      qAr: "5. يُسمى المستخدمون النهائيون الذين يشكلون القطاع الأكبر ويعملون باستخدام معاملات محددة مسبقاً:",
      options: [
        {txt: "(a) Casual users", ar: "المستخدمون العرضيون / غير المنتظمين"},
        {txt: "(b) Sophisticated users", ar: "المستخدمون الخبراء / المتخصصون"},
        {txt: "(c) Stand-alone users", ar: "المستخدمون المستقلون"},
        {txt: "(d) Naive or Parametric users", ar: "المستخدمون البسطاء أو المحدودون"}
      ],
      ans: 3
    },
    {
      q: "6. Database administrators (DBAs) are primarily responsible for:",
      qAr: "6. مسؤولية مدير قواعد البيانات (DBA) الأساسية هي:",
      options: [
        {txt: "(a) Defining database content", ar: "تحديد محتوى قاعدة البيانات"},
        {txt: "(b) Authorizing access and monitoring use", ar: "منح صلاحيات الوصول ومراقبة الاستخدام"},
        {txt: "(c) Implementing DBMS software", ar: "تطوير/تنفيذ برامج نظام إدارة قواعد البيانات"},
        {txt: "(d) Running canned transactions", ar: "تشغيل المعاملات المجهزة مسبقاً"}
      ],
      ans: 1
    },
    {
      q: "7. Which of the following is NOT an advantage of the database approach?",
      qAr: "7. أي مما يلي لا يُعد من مزايا نهج قاعدة البيانات؟",
      options: [
        {txt: "(a) Controlling redundancy", ar: "التحكم في التكرار"},
        {txt: "(b) Providing backup and recovery", ar: "توفير النسخ الاحتياطي والاستعادة"},
        {txt: "(c) Restricting unauthorized access", ar: "تقييد الوصول غير المصرح به"},
        {txt: "(d) Increasing overhead in storage and processing", ar: "زيادة العبء الإضافي في التخزين والمعالجة"}
      ],
      ans: 3
    },
    {
      q: "8. In which situation is it NOT suitable to use a DBMS?",
      qAr: "8. في أي حالة لا يكون من المناسب استخدام نظام إدارة قواعد البيانات (DBMS)؟",
      options: [
        {txt: "(a) When complex relationships exist among data", ar: "عند وجود علاقات معقدة بين البيانات"},
        {txt: "(b) When stringent real-time requirements must be met", ar: "عند وجود متطلبات صارمة للزمن الحقيقي"},
        {txt: "(c) When multiple users need concurrent access", ar: "عندما يحتاج عدة مستخدمين للوصول في نفس الوقت"},
        {txt: "(d) When backup and recovery services are needed", ar: "عند الحاجة لخدمات النسخ الاحتياطي والاستعادة"}
      ],
      ans: 1
    },
    {
      q: "9. Which group of users designs and develops DBMS software?",
      qAr: "9. أي مجموعة من المستخدمين تقوم بتصميم وتطوير برمجيات الـ DBMS نفسها؟",
      options: [
        {txt: "(a) Database Administrators", ar: "مديرو قواعد البيانات"},
        {txt: "(b) System Analysts", ar: "محللو النظم"},
        {txt: "(c) Workers Behind the Scene", ar: "العاملون خلف الكواليس"},
        {txt: "(d) End Users", ar: "المستخدمون النهائيون"}
      ],
      ans: 2
    },
    {
      q: "10. Which of the following is an example of 'Actors on the Scene'?",
      qAr: "10. أي مما يلي يُعد مثالاً على 'الجهات الفاعلة على المسرح' (Actors on the Scene)؟",
      options: [
        {txt: "(a) DBMS Implementors", ar: "منفذو ومطورو نظام إدارة قواعد البيانات"},
        {txt: "(b) Tool Developers", ar: "مطور الأدوات"},
        {txt: "(c) Database Designers", ar: "مصممو قواعد البيانات"},
        {txt: "(d) Operators and Maintenance Personnel", ar: "مشغلو النظام وموظفو الصيانة"}
      ],
      ans: 2
    },
    {
      q: "11. Which type of data model provides concepts that are close to the way many users perceive data?",
      qAr: "11. أي نوع من نماذج البيانات يوفر مفاهيم قريبة من الطريقة التي يدرك بها معظم المستخدمين البيانات؟",
      options: [
        {txt: "(a) Physical data model", ar: "نموذج البيانات المادي / الفيزيائي"},
        {txt: "(b) Conceptual data model", ar: "نموذج البيانات المفاهيمي"},
        {txt: "(c) Representational data model", ar: "نموذج البيانات التمثيلي"},
        {txt: "(d) Relational data model", ar: "نموذج البيانات العلائقي"}
      ],
      ans: 1
    },
    {
      q: "12. Which of the following is an example of an access path?",
      qAr: "12. أي مما يلي يُعد مثالاً على مسار الوصول (Access Path)؟",
      options: [
        {txt: "(a) Attribute", ar: "خاصية / صفة"},
        {txt: "(b) Entity", ar: "كيان"},
        {txt: "(c) Index", ar: "فهرس"},
        {txt: "(d) Schema", ar: "مخطط / هيكل"}
      ],
      ans: 2
    },
    {
      q: "13. The description of a database is called the:",
      qAr: "13. يُسمى وصف قاعدة البيانات بـ:",
      options: [
        {txt: "(a) Database State", ar: "حالة قاعدة البيانات"},
        {txt: "(b) Database Schema", ar: "مخطط قاعدة البيانات"},
        {txt: "(c) Instance", ar: "نسخة لحظية / حالة حالية"},
        {txt: "(d) Access Path", ar: "مسار الوصول"}
      ],
      ans: 1
    },
    {
      q: "14. The data in the database at a particular moment in time is called:",
      qAr: "14. تُسمى البيانات الموجودة في قاعدة البيانات في لحظة زمنية معينة بـ:",
      options: [
        {txt: "(a) Schema construct", ar: "بنية المخطط"},
        {txt: "(b) Database State", ar: "حالة قاعدة البيانات"},
        {txt: "(c) Data Abstraction", ar: "تجريد البيانات"},
        {txt: "(d) External Schema", ar: "المخطط الخارجي"}
      ],
      ans: 1
    },
    {
      q: "15. Which level of the three-schema architecture describes the physical storage structures and access paths?",
      qAr: "15. أي مستوى في معمارية المخططات الثلاثة (Three-Schema Architecture) يصف بنيات التخزين المادية ومسارات الوصول؟",
      options: [
        {txt: "(a) Internal schema", ar: "المخطط الداخلي"},
        {txt: "(b) Conceptual schema", ar: "المخطط المفاهيمي"},
        {txt: "(c) External schema", ar: "المخطط الخارجي"},
        {txt: "(d) Logical schema", ar: "المخطط المنطقي"}
      ],
      ans: 0
    },
    {
      q: "16. The capacity to change the conceptual schema without affecting external schemas is known as:",
      qAr: "16. تُعرف القدرة على تغيير المخطط المفاهيمي دون التأثير على المخططات الخارجية بـ:",
      options: [
        {txt: "(a) Physical Data Independence", ar: "استقلالية البيانات المادية"},
        {txt: "(b) Logical Data Independence", ar: "استقلالية البيانات المنطقية"},
        {txt: "(c) Database State", ar: "حالة قاعدة البيانات"},
        {txt: "(d) Data Abstraction", ar: "تجريد البيانات"}
      ],
      ans: 1
    },
    {
      q: "17. Which DBMS language is used to specify database retrievals and updates?",
      qAr: "17. أي لغة في نظام إدارة قواعد البيانات تُستخدم لتحديد عمليات استرجاع وتحديث البيانات؟",
      options: [
        {txt: "(a) DDL", ar: "لغة تعريف البيانات - Data Definition Language"},
        {txt: "(b) DML", ar: "لغة معالجة البيانات - Data Manipulation Language"},
        {txt: "(c) SDL", ar: "لغة تعريف التخزين - Storage Definition Language"},
        {txt: "(d) VDL", ar: "لغة تعريف العرض - View Definition Language"}
      ],
      ans: 1
    },
    {
      q: "18. SQL is an example of which type of language?",
      qAr: "18. تُعتبر لغة SQL مثالاً على أي نوع من اللغات؟",
      options: [
        {txt: "(a) Procedural", ar: "إجرائية"},
        {txt: "(b) Assembly", ar: "تجميعية"},
        {txt: "(c) Declarative", ar: "تصريحية / غير إجرائية"},
        {txt: "(d) Host language", ar: "لغة مضيفة"}
      ],
      ans: 2
    },
    {
      q: "19. Which database utility is responsible for reorganizing a set of database files to improve performance?",
      qAr: "19. أي أداة مساعدة لقواعد البيانات تكون مسؤولة عن إعادة تنظيم ملفات قاعدة البيانات لتحسين الأداء؟",
      options: [
        {txt: "(a) Backup utility", ar: "أداة النسخ الاحتياطي"},
        {txt: "(b) Data conversion tool", ar: "أداة تحويل البيانات"},
        {txt: "(c) Performance monitoring", ar: "مراقبة الأداء"},
        {txt: "(d) Storage reorganization", ar: "أداة إعادة تنظيم التخزين"}
      ],
      ans: 3
    },
    {
      q: "20. Which schema describes the part of the database that a particular user group is interested in?",
      qAr: "20. أي مخطط يصف الجزء من قاعدة البيانات الذي تهتم به مجموعة معينة من المستخدمين؟",
      options: [
        {txt: "(a) Internal schema", ar: "المخطط الداخلي"},
        {txt: "(b) Conceptual schema", ar: "المخطط المفاهيمي"},
        {txt: "(c) External schema", ar: "المخطط الخارجي"},
        {txt: "(d) Physical schema", ar: "المخطط المادي"}
      ],
      ans: 2
    },
    {
      q: "21. A ________ is some part of the real world about which data is stored in a database.",
      qAr: "21. جزء من العالم الحقيقي تُخزن البيانات عنه في قاعدة البيانات.",
      options: [
        {txt: "(a) Data Model", ar: "نموذج البيانات"},
        {txt: "(b) Mini-world", ar: "العالم المصغر"},
        {txt: "(c) Schema", ar: "المخطط"},
        {txt: "(d) Database State", ar: "حالة قاعدة البيانات"}
      ],
      ans: 1
    },
    {
      q: "22. The ________ level of database architecture defines the relationships between data elements and structures.",
      qAr: "22. المستوى الذي يحدد العلاقات بين عناصر البيانات وهياكلها في معمارية قاعدة البيانات.",
      options: [
        {txt: "(a) Internal Level", ar: "المستوى الداخلي"},
        {txt: "(b) Physical Level", ar: "المستوى المادي"},
        {txt: "(c) Logical Level", ar: "المستوى المنطقي"},
        {txt: "(d) External Level", ar: "المستوى الخارجي"}
      ],
      ans: 2
    },
    {
      q: "23. The database system contains the database itself along with ________ describing its structure and organization.",
      qAr: "23. يحتوي نظام قاعدة البيانات على قاعدة البيانات نفسها بالإضافة إلى ________ التي تصف هيكلها وتنظيمها.",
      options: [
        {txt: "(a) Metadata", ar: "البيانات الوصفية / بيانات عن البيانات"},
        {txt: "(b) Software", ar: "البرامج"},
        {txt: "(c) Queries", ar: "الاستعلامات"},
        {txt: "(d) Indexes", ar: "الفهارس"}
      ],
      ans: 0
    },
    {
      q: "24. The ability of databases to allow multiple users to access data concurrently while maintaining integrity is called ________.",
      qAr: "24. قدرة قواعد البيانات على السماح لعدة مستخدمين بالوصول للبيانات في نفس الوقت مع الحفاظ على سلامتها تُسمى ________.",
      options: [
        {txt: "(a) Data Independence", ar: "استقلالية البيانات"},
        {txt: "(b) Data Sharing", ar: "مشاركة البيانات"},
        {txt: "(c) Data Redundancy", ar: "تكرار البيانات"},
        {txt: "(d) Data Security", ar: "أمان البيانات"}
      ],
      ans: 1
    },
    {
      q: "25. ________ users are thoroughly familiar with system capabilities and include scientists, engineers, and business analysts.",
      qAr: "25. المستخدمون ________ هم على دراية تامة بإمكانيات النظام ويشملون العلماء، المهندسين، ومحللي الأعمال.",
      options: [
        {txt: "(a) Casual", ar: "العرضيون"},
        {txt: "(b) Naive", ar: "البسطاء / المبتدئون"},
        {txt: "(c) Sophisticated", ar: "المتخصصون / المتمرسون"},
        {txt: "(d) Parametric", ar: "الباراميتريون"}
      ],
      ans: 2
    },
    {
      q: "26. System analysts design applications including ________ transactions to meet user requirements.",
      qAr: "26. يقوم محللو الأنظمة بتصميم تطبيقات تتضمن معاملات ________ لتلبية متطلبات المستخدمين.",
      options: [
        {txt: "(a) Canned", ar: "مجهزة مسبقاً / نمطية"},
        {txt: "(b) Ad-hoc", ar: "عشوائية / طارئة"},
        {txt: "(c) Manual", ar: "يدوية"},
        {txt: "(d) External", ar: "خارجية"}
      ],
      ans: 0
    },
    {
      q: "27. Tool developers design and implement software systems called ________ that facilitate database modeling and monitoring.",
      qAr: "27. يقوم مطورو الأدوات بتصميم وتنفيذ أنظمة برمجية تُسمى ________ لتسهيل نمذجة قاعدة البيانات ومراقبتها.",
      options: [
        {txt: "(a) DBMS", ar: "أنظمة إدارة قواعد البيانات"},
        {txt: "(b) Tools", ar: "الأدوات"},
        {txt: "(c) Utilities", ar: "المنافع / الخدمات"},
        {txt: "(d) Interfaces", ar: "الواجهات"}
      ],
      ans: 1
    },
    {
      q: "28. One major advantage of using a DBMS is enforcing ________ constraints on the database.",
      qAr: "28. إحدى المزايا الرئيسية لاستخدام نظام إدارة قواعد البيانات هي فرض قيود ________ على قاعدة البيانات.",
      options: [
        {txt: "(a) Security", ar: "الأمان"},
        {txt: "(b) Redundancy", ar: "التكرار"},
        {txt: "(c) Integrity", ar: "النزاهة / السلامة"},
        {txt: "(d) Storage", ar: "التخزين"}
      ],
      ans: 2
    },
    {
      q: "29. When there is no need for multiple-user access, it may be better ________ to use a DBMS.",
      qAr: "29. عندما لا تكون هناك حاجة لوصول متعدد المستخدمين، قد يكون من الأفضل ________ استخدام نظام إدارة قواعد البيانات.",
      options: [
        {txt: "(a) Always", ar: "دائماً"},
        {txt: "(b) Not", ar: "عدم"},
        {txt: "(c) Mandatory", ar: "إجباري"},
        {txt: "(d) Preferred", ar: "مفضل"}
      ],
      ans: 1
    },
    {
      q: "30. The process of providing storage structures such as ________ helps in efficient query processing.",
      qAr: "30. عملية توفير هياكل تخزين مثل ________ تساعد في معالجة الاستعلامات بكفاءة.",
      options: [
        {txt: "(a) Schemas", ar: "المخططات"},
        {txt: "(b) Views", ar: "الواجهات / العروض"},
        {txt: "(c) Indexes", ar: "الفهارس"},
        {txt: "(d) Metadata", ar: "البيانات الوصفية"}
      ],
      ans: 2
    },
    {
      q: "31. A ________ is a collection of concepts used to describe the structure of a database.",
      qAr: "31. مجموعة من المفاهيم المُستخدمة لوصف هيكل قاعدة البيانات تُسمى ________.",
      options: [
        {txt: "(a) Data model", ar: "نموذج البيانات"},
        {txt: "(b) Database state", ar: "حالة قاعدة البيانات"},
        {txt: "(c) Access path", ar: "مسار الوصول"},
        {txt: "(d) DBMS utility", ar: "أداة نظام قواعد البيانات"}
      ],
      ans: 0
    },
    {
      q: "32. An ________ is a structure that makes searching for particular database records efficient.",
      qAr: "32. هيكل يجعل البحث عن سجلات معينة في قاعدة البيانات أمراً كفؤاً يُسمى ________.",
      options: [
        {txt: "(a) Schema diagram", ar: "رسم تخطيطي للمخطط"},
        {txt: "(b) Access path", ar: "مسار الوصول"},
        {txt: "(c) Data definition", ar: "تعريف البيانات"},
        {txt: "(d) Instance", ar: "النموذج اللحظي"}
      ],
      ans: 1
    },
    {
      q: "33. A displayed schema is called a ________.",
      qAr: "33. المخطط المعروض مرئياً يُسمى ________.",
      options: [
        {txt: "(a) Database State", ar: "حالة قاعدة البيانات"},
        {txt: "(b) Data Model", ar: "نموذج البيانات"},
        {txt: "(c) Schema diagram", ar: "الرسم التخطيطي للمخطط"},
        {txt: "(d) Internal Schema", ar: "المخطط الداخلي"}
      ],
      ans: 2
    },
    {
      q: "34. The database schema is the skeleton of the database, while the ________ is a snapshot at a given time.",
      qAr: "34. مخطط قاعدة البيانات هو الهيكل العظمي لقاعدة البيانات، بينما ________ هي لقطة لحظية في وقت معين.",
      options: [
        {txt: "(a) Access path", ar: "مسار الوصول"},
        {txt: "(b) Database state (or Instance)", ar: "حالة قاعدة البيانات / النموذج اللحظي"},
        {txt: "(c) Conceptual schema", ar: "المخطط المفاهيمي"},
        {txt: "(d) Data dictionary", ar: "قاموس البيانات"}
      ],
      ans: 1
    },
    {
      q: "35. The ________ schema describes the structure of the whole database, hiding physical storage details.",
      qAr: "35. المخطط ________ يصف هيكل قاعدة البيانات بأكملها مع إخفاء تفاصيل التخزين المادي.",
      options: [
        {txt: "(a) Physical", ar: "المادي"},
        {txt: "(b) Internal", ar: "الداخلي"},
        {txt: "(c) Conceptual", ar: "المفاهيمي"},
        {txt: "(d) External", ar: "الخارجي"}
      ],
      ans: 2
    },
    {
      q: "36. The capacity to change the internal schema without affecting the conceptual schema is called ________.",
      qAr: "36. القدرة على تغيير المخطط الداخلي دون التأثير على المخطط المفاهيمي تُسمى ________.",
      options: [
        {txt: "(a) Logical Data Independence", ar: "الاستقلالية المنطقية للبيانات"},
        {txt: "(b) Physical Data Independence", ar: "الاستقلالية المادية للبيانات"},
        {txt: "(c) Data Redundancy", ar: "تكرار البيانات"},
        {txt: "(d) Concurrent Access", ar: "الوصول المتزامن"}
      ],
      ans: 1
    },
    {
      q: "37. The language used to define internal and external schemas is called ________.",
      qAr: "37. اللغة المستخدمة لتحديد المخططات الداخلية والخارجية تُسمى ________.",
      options: [
        {txt: "(a) DML", ar: "لغة معالجة البيانات"},
        {txt: "(b) SDL and VDL", ar: "لغة تعريف التخزين ولغة تعريف العرض"},
        {txt: "(c) SQL", ar: "لغة الاستعلام المهيكلة"},
        {txt: "(d) DDL", ar: "لغة تعريف البيانات"}
      ],
      ans: 1
    },
    {
      q: "38. Languages like SQL are called ________ because they specify what data to retrieve, not how.",
      qAr: "38. تُسمى اللغات مثل SQL باللغات ________ لأنها تحدد البيانات المراد استرجاعها وليس كيفية ذلك.",
      options: [
        {txt: "(a) Procedural", ar: "الإجرائية"},
        {txt: "(b) Declarative (or Non-procedural)", ar: "التصريحية / غير الإجرائية"},
        {txt: "(c) Programming", ar: "البرمجية"},
        {txt: "(d) Low-level", ar: "منخفضة المستوى"}
      ],
      ans: 1
    },
    {
      q: "39. The utility that monitors database usage and provides statistics to the DBA is called ________.",
      qAr: "39. الأداة التي تراقب استخدام قاعدة البيانات وتوفر إحصائيات لمدير قاعدة البيانات تُسمى ________.",
      options: [
        {txt: "(a) Backup utility", ar: "أداة النسخ الاحتياطي"},
        {txt: "(b) Loading utility", ar: "أداة التحميل"},
        {txt: "(c) Performance monitoring utility", ar: "أداة مراقبة الأداء"},
        {txt: "(d) Reorganization utility", ar: "أداة إعادة التنظيم"}
      ],
      ans: 2
    },
    {
      q: "40. Loading data stored in files into a database is done using a ________ utility.",
      qAr: "40. يتم تحميل البيانات المخزنة في الملفات إلى قاعدة البيانات باستخدام أداة ________.",
      options: [
        {txt: "(a) Loading (or Data loading)", ar: "التحميل / تحميل البيانات"},
        {txt: "(b) Sorting", ar: "الفرز"},
        {txt: "(c) Monitoring", ar: "المراقبة"},
        {txt: "(d) Indexing", ar: "الفهرسة"}
      ],
      ans: 0
    }
  ],

  "db_theory_midterm_short": [
    {
      titleEn: "Q1. Discuss Database Architecture with a suitable diagram.",
      titleAr: "س1. ناقش معمارية قاعدة البيانات مع رسم توضيحي مناسب؟",
      imageSrc: "images/M1.png",
      ansEn: "Database architecture is partitioned into three levels (Three-Schema Architecture): Internal Schema (physical storage), Conceptual Schema (overall logical structure), and External Schema (user views).",
      ansAr: "تنقسم معمارية قاعدة البيانات إلى 3 مستويات (المخططات الثلاثة): الداخلي (التخزين المادي)، المفهومي (الهيكل المنطقي الشامل)، والخارجي (واجهات العرض للمستخدمين)."
    },
    {
      titleEn: "Q2. When is it not suitable to use a DBMS?",
      titleAr: "س2. متى لا يكون من المناسب استخدام نظام إدارة قواعد البيانات؟",
      imageSrc: "images/M2.png",
      ansEn: "1. Stringent real-time performance requirements.<br>2. Simple, well-defined applications that rarely change.<br>3. Single-user access without requirements for multi-user processing or concurrent control.<br>4. High initial investment costs or storage/processing overhead.",
      ansAr: "1. وجود متطلبات زمن حقيقي (Real-Time) صارمة وسريعة للغاية.<br>2. الأنظمة البسيطة والمحددة التي نادراً ما تتغير.<br>3. وصول مستخدم واحد بدون الحاجة للوصول المتعدد أو التزامن.<br>4. ارتفاع التكاليف الأولية والعبء الإضافي للتخزين والمعالجة."
    },
    {
      titleEn: "Q3. What are the responsibilities of Database Administrators and Database Designers?",
      titleAr: "س3. ما هي مسؤوليات مديري قواعد البيانات ومصممي قواعد البيانات؟",
      imageSrc: "images/M3.png",
      ansEn: "• Database Administrators (DBA): Authorizing access, monitoring system usage, acquiring hardware/software resources, ensuring security.<br>• Database Designers: Defining data contents, structure, constraints, and designing transactions to satisfy user requirements.",
      ansAr: "• مدراء قواعد البيانات (DBA): إدارة ومنح صلاحيات الوصول، مراقبة الاستخدام، توفير العتاد والبرامج، وضمان أمن البيانات.<br>• مصممو قواعد البيانات: تحديد البيانات المراد تخزينها، هياكلها، القيود، وتصميم المعاملات بناءً على متطلبات المستخدمين."
    },
    {
      titleEn: "Q4. Illustrate a simplified Database System Environment.",
      titleAr: "س4. وضّح بيئة نظام قاعدة بيانات مبسطة؟",
      imageSrc: "images/M4.png",
      ansEn: "A simplified DBMS environment consists of Users/Programmers interacting through Application Programs/Queries with the DBMS Software, which accesses both the Stored Database and the Catalog/Metadata.",
      ansAr: "تتكون البيئة المبسطة من: المستخدمين والبرامج، الواجهات والبرمجيات التطبيقية، نظام إدارة قواعد البيانات (DBMS)، والوصول المباشر لقاعدة البيانات المصنفة وحافظة البيانات الوصفية (Metadata)."
    },
    {
      titleEn: "Q5. Define the following terms: data, database, DBMS, database system.",
      titleAr: "س5. عرّف المصطلحات التالية: البيانات، قاعدة البيانات، نظام DBMS، نظام قاعدة البيانات؟",
      imageSrc: "images/M5.png",
      ansEn: "• Data: Known facts that can be recorded and have implicit meaning.<br>• Database: A logically coherent collection of related data.<br>• DBMS: Software package to create, maintain, and manipulate a computerized database.<br>• Database System: The combined entity of DBMS software along with the database itself.",
      ansAr: "• البيانات: حقائق معروفة يمكن تسجيلها وله معانٍ ضمنية.<br>• قاعدة البيانات: مجموعة منطقية مترابطة من البيانات ذات المعنى.<br>• DBMS: البرمجية التي تقوم بإنشاء وصيانة ومعالجة قاعدة البيانات.<br>• نظام قاعدة البيانات: الكيان المتكامل الذي يشمل برمجية الـ DBMS وقاعدة البيانات المخزنة معاً."
    },
    {
      titleEn: "Q6. What are the different types of database end users? Discuss the main activities of each.",
      titleAr: "س6. ما هي الأنواع المختلفة للمستخدمين النهائيين لقواعد البيانات وما أنشطتهم؟",
      imageSrc: "images/M6.png",
      ansEn: "1. Casual Users: Access database occasionally using different queries.<br>2. Naive/Parametric Users: Main user group, perform standard canned transactions.<br>3. Sophisticated Users: Engineers, analysts using complex software tools.<br>4. Stand-alone Users: Maintain personal databases using ready-made packages.",
      ansAr: "1. العرضيون: يتصلون بالنظام من حين لآخر باستعلامات مختلفة.<br>2. البسطاء/الباراميتريون: الشريحة الكبرى، ينفذون معاملات مجهزة مسبقاً (Canned transactions).<br>3. الخبراء: المهندسون والمحللون الذين يستخدمون استعلامات ودوال معقدة.<br>4. المستقلون: يديرون قواعد بيانات شخصية باستخدام حزم برمجية جاهزة."
    },
    {
      titleEn: "Q7. What a DBMS Facilitates?",
      titleAr: "س7. ما الذي يسهّله نظام إدارة قواعد البيانات؟",
      imageSrc: "images/M7.png",
      ansEn: "1. Defining data types, structures, and constraints.<br>2. Constructing and populating initial data.<br>3. Manipulating data (retrieval, querying, updating).<br>4. Sharing data concurrently among multiple users securely.",
      ansAr: "1. تعريف البيانات وهياكلها والقيود عليها.<br>2. إنشاء وتحميل البيانات الأولية على الأقراص.<br>3. معالجة البيانات من تعديل واسترجاع واستعلام.<br>4. مشاركة البيانات بأمان بين مستخدمين متعددين بنفس الوقت."
    },
    {
      titleEn: "Q8. What is \"big data\"?",
      titleAr: "س8. ما هي \"البيانات الضخمة\" (Big Data)؟",
      imageSrc: "images/M8.png",
      ansEn: "Big Data refers to massive, high-velocity, dynamic datasets that cannot be easily managed or processed by traditional relational DBMS architectures.",
      ansAr: "البيانات الضخمة هي مجموعات بيانات هائلة الحجم، سريعة التغير والتدفق، وتتجاوز قدرة أنظمة قواعد البيانات العلائقية التقليدية على معالجتها وتخزينها بكفاءة."
    },
    {
      titleEn: "Q9. Discuss few DBMS Functionalities.",
      titleAr: "س9. ناقش بعض وظائف نظام إدارة قواعد البيانات؟",
      imageSrc: "images/M9.png",
      ansEn: "• Protection & Security: Preventing unauthorized access.<br>• Active Processing: Executing automatic triggered actions.<br>• Concurrency Control: Preserving integrity during simultaneous updates.<br>• Recovery: Restoring states after failure.",
      ansAr: "• الحماية والأمان: تقييد الوصول غير المصرح به.<br>• المعالجة النشطة: تنفيذ إجراءات تلقائية منشطة (Triggers).<br>• التحكم بالتزامن: منع التضارب أثناء التعديل المتزامن.<br>• الاستعادة والتعافي: استرجاع الحالة السليمة عند الفشل."
    },
    {
      titleEn: "Q10. How the applications interact with a database.",
      titleAr: "س10. كيف تتفاعل التطبيقات مع قاعدة البيانات؟",
      imageSrc: "images/M10.png",
      ansEn: "Applications interact with a database through DML queries embedded inside code or API interfaces, sending retrieval or modification requests handled directly by the DBMS engine.",
      ansAr: "تتفاعل التطبيقات عبر تقديم طلبات واستعلامات لغة DML المدمجة في البرامج أو الواجهات (APIs)، حيث يتلقاها محرك الـ DBMS ويعالجها على القرص المادي."
    },
    {
      titleEn: "Q11. Describe mini-world with a suitable example.",
      titleAr: "س11. صف العالم المصغر (Mini-World) مع مثال مناسب؟",
      imageSrc: "images/M11.png",
      ansEn: "Mini-world is the part of the real world represented in a database. Example: A University database storing information about students, professors, courses, and grades.",
      ansAr: "العالم المصغر هو الجزء المحدد من العالم الحقيقي الذي تُخزن البيانات عنه. مثال: قاعدة بيانات الجامعة التي تمثل الطلاب، المحاضرين، المقررات، والدرجات."
    },
    {
      titleEn: "Q12. What is the difference between procedural and nonprocedural DMLs?",
      titleAr: "س12. ما الفرق بين لغات DML الإجرائية وغير الإجرائية؟",
      imageSrc: "images/M12.png",
      ansEn: "• Procedural DML: Specifies WHAT data is needed and HOW to retrieve it step-by-step.<br>• Non-procedural (Declarative) DML: Specifies ONLY WHAT data is needed, letting DBMS optimize retrieval.",
      ansAr: "• DML الإجرائية (Procedural): تحدد البيانات المطلوب استرجاعها وكيفية الوصول إليها خطوة بخطوة.<br>• DML غير الإجرائية/التصريحية (Declarative): تحدد فقط ما هي البيانات المطلوبة ويقوم الـ DBMS بتحديد الطريقة المثلى للوصول إليها تلقائياً."
    },
    {
      titleEn: "Q13. What is the difference between a database schema and a database state?",
      titleAr: "س13. ما الفرق بين مخطط قاعدة البيانات وحالة قاعدة البيانات؟",
      imageSrc: "images/M13.png",
      ansEn: "• Database Schema: The static description and structure of the database defined during design.<br>• Database State: The dynamic content/snapshot stored in the database at a specific moment in time.",
      ansAr: "• مخطط قاعدة البيانات (Schema): الهيكل العام والتصميم الوصفي المعتمد الذي نادراً ما يتغير.<br>• حالة قاعدة البيانات (State): البيانات واللقطة الفعلية المخزنة حالياً والتي تتغير باستمرار مع الإضافة والحذف."
    },
    {
      titleEn: "Q14. What is the difference between logical data independence and physical data independence?",
      titleAr: "س14. ما الفرق بين الاستقلالية المنطقية والمادية للبيانات؟",
      imageSrc: "images/M14.png",
      ansEn: "• Logical Data Independence: Ability to change conceptual schema without affecting external schemas or application programs.<br>• Physical Data Independence: Ability to change internal schema (storage structure) without affecting conceptual schema.",
      ansAr: "• الاستقلالية المنطقية: القدرة على تعديل المخطط المفاهيمي دون الحاجة لتعديل الواجهات والتطبيقات الخارجية.<br>• الاستقلالية المادية: القدرة على تعديل المخطط الداخلي المادي دون الحاجة لتعديل المخطط المفاهيمي."
    },
    {
      titleEn: "Q15. Discuss database utilities and their functions.",
      titleAr: "س15. ناقش أدوات قاعدة البيانات ووظائفها؟",
      imageSrc: "images/M15.png",
      ansEn: "Database utilities are specialized tools for DBA administrative functions including Data Loading, Backup creation, Index Reorganization, and Performance Monitoring.",
      ansAr: "هي برمجيات مساعدة تُستخدم في مهام الصيانة والإدارة بواسطة الـ DBA وتشمل: تحميل البيانات، النسخ الاحتياطي، إعادة التنظيم، ومراقبة سرعة الخوادم."
    }
  ],

  "db_theory_midterm_long": [
    {
      id: "LQ1",
      titleEn: "LQ1. Define the following terms: data model, database schema, database state, internal schema, conceptual schema, external schema, data independence, access path, DDL, DML, SDL, VDL, database utility.",
      titleAr: "س1. عرّف المصطلحات التالية: نموذج البيانات، مخطط قاعدة البيانات، حالة قاعدة البيانات، المخطط الداخلي، المخطط المفهومي، المخطط الخارجي، استقلالية البيانات، مسار الوصول، DDL, DML, SDL, VDL والأدوات المساعدة؟",
      twoImages: ["images/M16.png", "images/M17.png"],
      ansEn: "• Data models: Frameworks defining structure, storage, and access.<br>• Database Schema: Structural layout description.<br>• Database State: Current data snapshot at a point in time.<br>• Internal Schema: Describes physical storage.<br>• Conceptual Schema: Whole structure description.<br>• External Schema: Specific user view level.<br>• Logical Independence: Changing conceptual without changing external.<br>• Physical Independence: Changing internal without changing conceptual.<br>• DDL/DML/SDL/VDL: Languages for structure definition, manipulation, storage definition, and view definition.",
      ansAr: "شرح كامل للمصطلحات بالفئات:<br>• <strong>نموذج البيانات:</strong> إطار يحدد البناء والتخزين والوصول.<br>• <strong>مخطط قاعدة البيانات:</strong> الهيكل العام التصميمي.<br>• <strong>حالة قاعدة البيانات:</strong> اللقطة الحالية للبيانات المخزنة.<br>• <strong>المخطط الداخلي:</strong> يصف التخزين المادي على أقراص الحاسب.<br>• <strong>المخطط المفهومي:</strong> يصف الكيانات والعلاقات والقيود بدون التفاصيل الفيزيائية.<br>• <strong>المخطط الخارجي:</strong> واجهة الرؤية المخصصة للمستخدم.<br>• <strong>الاستقلاليات (المنطقية والمادية):</strong> فصل المخططات لعدم التأثير عند التعديل.<br>• <strong>اللغات المخصصة:</strong> DDL للتعريف، DML للتعامل والمعالجة، SDL للتخزين، VDL للواجهات العرضية.",
      expEn: "Essential glossary covering core concepts from DBMS data structures to user views.",
      expAr: "💡 **معلومة توضيحية مبسطة:** هذا السؤال هو معجم المصطلحات الأساسية للـ DBMS؛ يربط بين كيفية تعريف الهياكل وكيفية التعامل والتعديل على المحتوى ومستويات العرض المختلفة."
    },
    {
      id: "LQ2",
      titleEn: "LQ2. Discuss the capabilities that should be provided by a DBMS.",
      titleAr: "س2. ناقش الإمكانيات والقدرات التي يجب أن يوفرها نظام إدارة قواعد البيانات (DBMS)؟",
      imageSrc: "images/M18.png",
      ansEn: "1. Define: Data types, structures, constraints.<br>2. Construct: Populate data on storage.<br>3. Manipulate: Retrieval, modification, web access.<br>4. Processing & Sharing: Multi-user concurrent access.<br>5. Protection, security, and automated processing.",
      ansAr: "1. **التعريف (Define):** تحديد البيانات الهيكلية الشاملة والقيود.<br>2. **البناء (Construct):** بناء وتحميل البيانات على وسائط التخزين.<br>3. **المعالجة (Manipulate):** الاسترجاع والتعديل والوصول عبر الويب.<br>4. **المشاركة والتزامن:** دعم التزامن بأمان لاتساق البيانات.<br>5. **إمكانيات أمان وإدارة ذاتية:** أمان وحماية ومعالجة نشطة تلقائية.",
      expEn: "A complete DBMS provides definition, population, querying, sharing, and active security management.",
      expAr: "💡 **معلومة توضيحية مبسطة:** الـ DBMS الجيد لا يكتفي بحفظ البيانات فقط، بل يوفر الأمن، المشاركة المتزامنة، إمكانية المعالجة التلقائية، والاسترجاع السريع للمعلومات."
    },
    {
      id: "LQ3",
      titleEn: "LQ3. Define main types of actors involve databases?",
      titleAr: "س3. عرّف الأنواع الرئيسية للجهات/الأشخاص المشاركين (Actors) في بيئة قواعد البيانات؟",
      imageSrc: "images/M19.png",
      ansEn: "• Database Administrators (DBA): System security & management.<br>• Database Designers: Structural design.<br>• End-users: Data querying & updates.<br>• System Analysts & Application Programmers: Canned application software development.<br>• Business Analysts: Big Data analysis.",
      ansAr: "• **مدراء قواعد البيانات (DBA):** إدارة النظام، الصلاحيات والأمان.<br>• **مصممو قواعد البيانات:** تصميم المخططات والهياكل والعلاقات.<br>• **المستخدمون النهائيون:** استخدام المعاملات والتطبيقات والاستعلامات.<br>• **محللو الأنظمة والبرمجة:** تطوير التطبيقات والمعاملات المجهزة مسبقاً.<br>• **محللو الأعمال:** تحليل البيانات الضخمة لدعم واتخاذ القرارات الاستراتيجية.",
      expEn: "Actors divide into administrative personnel, technical designers, system developers, and operational end users.",
      expAr: "💡 **معلومة توضيحية مبسطة:** فريق العمل ينقسم بين أصحاب البنية الأساسية (DBA/Designers)، والمطورين (Analysts/Programmers)، والمستخدمين والمحللين (End-users/Business Analysts)."
    },
    {
      id: "LQ4",
      titleEn: "LQ4. Discuss the main characteristics of the database approach.",
      titleAr: "س4. ناقش الخصائص الرئيسية لأسلوب قاعدة البيانات (Database Approach)؟",
      imageSrc: "images/M20.png",
      ansEn: "1. Self-Describing Nature (contains metadata).<br>2. Insulation between programs and data (Data Independence).<br>3. Data Abstraction.<br>4. Support of multiple views.<br>5. Sharing of data and multi-user transaction processing.",
      ansAr: "1. **الوصف الذاتي:** تحتوي على البيانات المادية وكتالوج التعريفات (Metadata).<br>2. **استقلالية البيانات:** فصل البيانات عن التطبيقات المطبقة.<br>3. **تجريد البيانات (Abstraction):** تقديم نماذج واضحة ومبسطة.<br>4. **دعم وجهات نظر متعددة:** إظهار واجهات مختلفة لكل فئة من المستخدمين.<br>5. **المشاركة والتزامن:** إدارة المعاملات المزدوجة المتزامنة بكفاءة.",
      expEn: "The database approach isolates data management logic from execution tools through system metadata.",
      expAr: "💡 **معلومة توضيحية مبسطة:** أسلوب قواعد البيانات يتفوق على نظام الملفات القديم لأنه يحفظ وصف البيانات بداخله (Metadata)، ويسمح بالمشاركة والتوسع، ويفصل التطبيقات عن التخزين."
    },
    {
      id: "LQ5",
      titleEn: "LQ5. Explain the three-schema architecture with the help of its diagram.",
      titleAr: "س5. اشرح معمارية المخططات الثلاثة (Three-Schema Architecture) بمساعدة الرسم التوضيحي؟",
      imageSrc: "images/M21.png",
      ansEn: "• Internal Level: Physical storage schema.<br>• Conceptual Level: Global database logical structure.<br>• External Level: Individual user customized views.<br>Diagram mapping links user views to logical entities, which map directly to disk files.",
      ansAr: "• **المخطط الداخلي:** يحدد مسارات التخزين والتنظيم المادي على القرص.<br>• **المخطط المفهومي:** يحدد الهيكل الشامل والعلاقات والأنواع والقيود.<br>• **المخطط الخارجي:** واجهات مخصصة لكل فئة مع حجب باقي الأجزاء غير المعنية.<br>• **الرابط:** يوضح تحويل استعلامات الواجهات للمخطط المنطقي ومنه للأقراص المادية.",
      expEn: "Separates physical storage implementation details from user applications.",
      expAr: "💡 **معلومة توضيحية مبسطة:** هذه المعمارية تقسم النظام إلى 3 طبقات: خارجية (ما يراه المستخدم)، مفهومية (تصميم الجداول)، وداخلية (التخزين على الأجهزة) لعزل التفاصيل وحماية النظام."
    },
    {
      id: "LQ6",
      titleEn: "LQ6. Discuss the main categories of data models.",
      titleAr: "س6. ناقش الفئات الرئيسية لنماذج البيانات (Data Models)؟",
      imageSrc: "images/M22.png",
      ansEn: "1. High-Level / Conceptual Data Models (e.g., Entity-Relationship ER).<br>2. Low-Level / Physical Data Models.<br>3. Representational / Implementation Models (Relational model).<br>4. Self-Describing Data Models (XML, NoSQL).",
      ansAr: "1. **نماذج عالية المستوى (Conceptual):** قريبة من إدراك البشر مثل ER Model.<br>2. **نماذج منخفضة المستوى (Physical):** تفاصيل تخزين العتاد والملفات.<br>3. **نماذج تمثيلية (Representational):** مثل النموذج العلائقي Relational Model.<br>4. **نماذج ذاتية الوصف (Self-Describing):** تدمج القيم والوصف معاً مثل XML وNoSQL.",
      expEn: "Models range from human-perceivable schemas to machine hardware layouts.",
      expAr: "💡 **معلومة توضيحية مبسطة:** نماذج البيانات إما عالية المستوى تفهمها عقولنا (ER)، أو مادية منخفضة يفهمها الجهاز (Physical)، أو حديثة ذاتية الوصف تفهم الوصف والقيمة معاً (NoSQL/XML)."
    },
    {
      id: "LQ7",
      titleEn: "LQ7. Discuss Database System Utilities and their functions.",
      titleAr: "س7. ناقش أدوات/مرافق نظام قاعدة البيانات (Utilities) ووظائفها بالتفصيل؟",
      imageSrc: "images/M15.png",
      ansEn: "Utilities provide key management functions: Loading, Backing up, Reorganizing storage indexes, Report Generation, and Performance Monitoring.",
      ansAr: "تنفذ وظائف صيانة تشغيلية مثل:<br>1. **التحميل (Loading):** تحويل ونقل البيانات الخارجية.<br>2. **النسخ الاحتياطي (Backing up):** نسخ وقائية دورية.<br>3. **إعادة التنظيم (Reorganizing):** ترتيب الملفات والفهارس.<br>4. **إنشاء التقارير (Report generation).**<br>5. **مراقبة الأداء (Performance Monitoring):** متابعة سرعة النظام وتحديد الاختناقات.",
      expEn: "Utilities simplify DBA routines for system health and continuous data integrity.",
      expAr: "💡 **معلومة توضيحية مبسطة:** الـ Utilities هي الأدوات المساعدة الملحقة بالنظام لتنفيذ أعمال الصيانة، النسخ الاحتياطي، الضغط، والمراقبة المستمرة."
    }
  ]
};