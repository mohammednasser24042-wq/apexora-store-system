const systemData = {
    brand: {
        name: "Apexora Software",
        logo: "logo.jpg"
    },
    screenshots: [
        {
            fileName: "dashboard.jpg",
            title: "لوحة التحكم الرئيسية",
            description: "شاشة رئيسية تعرض مؤشرات الأداء، إجمالي المبيعات، والأرباح اللحظية.",
            category: "sales"
        },
        {
            fileName: "pos.jpg",
            title: "واجهة نقاط البيع (POS)",
            description: "شاشة الكاشير السريعة لإتمام عمليات البيع وطباعة الفواتير بضغطة زر.",
            category: "sales"
        },
        {
            fileName: "invoice-purchase.jpg",
            title: "فواتير المشتريات",
            description: "إدارة واردات البضائع وحسابات الموردين بدقة فائقة.",
            category: "inventory"
        },
        {
            fileName: "invoice-sales.jpg",
            title: "فواتير المبيعات",
            description: "إصدار ومتابعة فواتير العملاء مع إمكانية طباعتها وتعديلها.",
            category: "sales"
        },
        {
            fileName: "invoices-filter.jpg",
            title: "فلترة وبحث الفواتير",
            description: "البحث المتقدم وتصفية الفواتير حسب التاريخ والعميل وحالة الدفع.",
            category: "sales"
        },
        {
            fileName: "inventory-1.jpg",
            title: "إدارة المخازن والأصناف (1)",
            description: "عرض وترتيب المنتجات وتحديد الكميات والأعمار التخزينية.",
            category: "inventory"
        },
        {
            fileName: "inventory-2.jpg",
            title: "إدارة المخازن والأصناف (2)",
            description: "متابعة حركة الأصناف داخل المخزن بدقة وتنبيهات النواقص.",
            category: "inventory"
        },
        {
            fileName: "inventory-3.jpg",
            title: "إدارة المخازن والأصناف (3)",
            description: "تفاصيل إضافية لمستويات المخزون والوحدات البديلة للأصناف.",
            category: "inventory"
        },
        {
            fileName: "inventory-stocktake.jpg",
            title: "جرد المخازن",
            description: "شاشة مخصصة لجرد وتسوية المخزون ومطابقة الأرصدة الفعلية والدفترية.",
            category: "inventory"
        },
        {
            fileName: "items.jpg",
            title: "إدارة الأصناف والمنتجات",
            description: "إضافة وتعديل الأصناف، الوحدات، والأسعار داخل النظام.",
            category: "inventory"
        },
        {
            fileName: "customers.jpg",
            title: "إدارة العملاء",
            description: "دليل العملاء، أرصدتهم، وتاريخ معاملاتهم السابقة.",
            category: "accounts"
        },
        {
            fileName: "suppliers.jpg",
            title: "إدارة الموردين",
            description: "بيانات الموردين، أرصدة الحسابات، وحركات الدفع والقبض.",
            category: "accounts"
        },
        {
            fileName: "pay-customers.jpg",
            title: "سداد دفعات العملاء",
            description: "تسجيل سندات القبض والدفعات النقدية من العملاء.",
            category: "accounts"
        },
        {
            fileName: "pay-suppliers.jpg",
            title: "سداد مستحقات الموردين",
            description: "إدارة المدفوعات النقدية والتحويلات للموردين.",
            category: "accounts"
        },
        {
            fileName: "expenses.jpg",
            title: "إدارة المصروفات",
            description: "تسجيل ومتابعة المصروفات اليومية والنثرية للنشاط التجاري.",
            category: "accounts"
        },
        {
            fileName: "profits.jpg",
            title: "تقارير الأرباح المالية",
            description: "حسابات الأرباح والخسائر وتحليل العائد المادي بدقة.",
            category: "reports"
        },
        {
            fileName: "reports-summary.jpg",
            title: "الملخص الشامل للتقارير",
            description: "لوحة تقارير إدارية متكاملة لمديري الشركات والمتاجر.",
            category: "reports"
        },
        {
            fileName: "purchases.jpg",
            title: "حركة المشتريات العامة",
            description: "تقارير ومتابعة عمليات الشراء وإجماليات التكاليف.",
            category: "inventory"
        },
        {
            fileName: "purchase-return.jpg",
            title: "مرتجع المشتريات",
            description: "إثبات وتوثيق البضائع المرتجعة للموردين.",
            category: "inventory"
        },
        {
            fileName: "sales-return.jpg",
            title: "مرتجع المبيعات",
            description: "إدارة مرتجعات العملاء وتعديل الأرصدة المالية والمخزنية تلقائياً.",
            category: "sales"
        },
        {
            fileName: "damaged-goods.jpg",
            title: "إدارة التالف والمهدور",
            description: "تسجيل البضائع التالفة وتحديد أسباب الهدر ومسؤوليتها.",
            category: "inventory"
        },
        {
            fileName: "transfers.jpg",
            title: "التحويلات بين المخازن",
            description: "إدارة حركة نقل البضائع والأصناف بين الفروع والمستودعات.",
            category: "inventory"
        },
        {
            fileName: "labels.jpg",
            title: "تصميم وطباعة الباركود والملصقات",
            description: "طباعة باركود الأصناف والأسعار لتسهيل عمليات البيع والجرد.",
            category: "inventory"
        },
        {
            fileName: "activity-log.jpg",
            title: "سجل النشاطات والأحداث",
            description: "متابعة حركة المستخدمين وعمليات التعديل والحذف في النظام لأغراض الأمان.",
            category: "admin"
        },
        {
            fileName: "users.jpg",
            title: "إدارة المستخدمين والصلاحيات",
            description: "صلاحيات الوصول والتحكم الكامل بصلاحيات الموظفين داخل النظام.",
            category: "admin"
        },
        {
            fileName: "change-password.jpg",
            title: "تغيير كلمة المرور",
            description: "إدارة وتحديث بيانات الاعتماد وحسابات المستخدمين.",
            category: "admin"
        },
        {
            fileName: "backup.jpg",
            title: "النسخ الاحتياطي لقاعدة البيانات",
            description: "أداة لإنشاء واستعادة النسخ الاحتياطية لضمان أمان البيانات.",
            category: "admin"
        },
        {
            fileName: "recovery.jpg",
            title: "استعادة البيانات",
            description: "استرجاع النسخ الاحتياطية القديمة في حالات الطوارئ.",
            category: "admin"
        },
        {
            fileName: "factory-reset.jpg",
            title: "إعادة ضبط المصنع",
            description: "تصفير البيانات التجريبية وبدء التشغيل الفعلي للنظام.",
            category: "admin"
        },
        {
            fileName: "system-settings.jpg",
            title: "إعدادات النظام العامة",
            description: "تخصيص بيانات المنشأة، العملة، وشروط الفواتير.",
            category: "admin"
        },
        {
            fileName: "shift-summary.jpg",
            title: "ملخص الوردية (الخزنة)",
            description: "إغلاق الوردية ومطابقة النقدية الفعلية مع المبيعات المسجلة.",
            category: "sales"
        },
        {
            fileName: "login.jpg",
            title: "شاشة تسجيل الدخول",
            description: "بوابة الأمان والتحقق من هوية المستخدم وصلاحياته عند بدء العمل.",
            category: "admin"
        },
        {
            fileName: "additional-view.jpg",
            title: "واجهة إضافية متقدمة",
            description: "شاشة تفصيلية إضافية لإدارة وتخصيص العمليات الخاصة بنظام Apexora.",
            category: "sales"
        }
    ]
};
