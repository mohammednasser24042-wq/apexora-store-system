const systemData = {
    brand: {
        name: "Apexora Software",
        tagline: "أنظمة إدارة الأعمال المتقدمة لحلول دقيقة واحترافية",
        logo: "logo.png" // تأكد من اسم شعار العرض إذا وجد، أو اتركه حسب ملفك
    },
    screenshots: [
        {
            fileName: "dashboard.png",
            title: "لوحة التحكم الرئيسية",
            category: "sales",
            description: "شاشة رئيسية تعرض مؤشرات الأداء، إجمالي المبيعات، والأرباح اللحظية."
        },
        {
            fileName: "pos-screen.png",
            title: "واجهة نقاط البيع (POS)",
            category: "sales",
            description: "شاشة الكاشير السريعة لإتمام عمليات البيع وطباعة الفواتير بضغطة زر."
        },
        {
            fileName: "sales-invoices.png",
            title: "فواتير المبيعات",
            category: "sales",
            description: "إصدار ومتابعة فواتير العملاء مع إمكانية طباعتها وتعديلها."
        },
        {
            fileName: "sales-filter.png",
            title: "فلترة وبحث الفواتير",
            category: "sales",
            description: "البحث المتقدم وتصفية الفواتير حسب التاريخ والعميل وحالة الدفع."
        },
        {
            fileName: "sales-return.png",
            title: "مرتجع المبيعات",
            category: "sales",
            description: "إدارة مرتجعات العملاء وتعديل الأرصدة المالية والمخزنية تلقائياً."
        },
        {
            fileName: "shift-summary.png",
            title: "ملخص الوردية (الخزنة)",
            category: "sales",
            description: "إغلاق الوردية ومطابقة النقدية الفعلية مع المبيعات المسجلة."
        },
        {
            fileName: "inventory-1.png",
            title: "إدارة المخازن والأصناف (1)",
            category: "inventory",
            description: "عرض وترتيب المنتجات وتحديد الكميات والأعمار التخزينية."
        },
        {
            fileName: "inventory-2.png",
            title: "إدارة المخازن والأصناف (2)",
            category: "inventory",
            description: "متابعة حركة الأصناف داخل المخزن بدقة وتنبيهات النواقص."
        },
        {
            fileName: "inventory-3.png",
            title: "إدارة المخازن والأصناف (3)",
            category: "inventory",
            description: "تفاصيل إضافية لمستويات المخزون ووحدات البديلة للأصناف."
        },
        {
            fileName: "inventory-damage.png",
            title: "إدارة التالف والمهدور",
            category: "inventory",
            description: "تسجيل البضائع التالفة وتحديد أسباب الهدر ومسؤوليتها."
        },
        {
            fileName: "purchase-returns.png",
            title: "مرتجع المشتريات",
            category: "inventory",
            description: "إثبات وتوثيق البضائع المرتجعة للموردين."
        },
        {
            fileName: "purchases-invoices.png",
            title: "فواتير المشتريات",
            category: "inventory",
            description: "إدارة واردات البضائع وحسابات الموردين بدقة فائقة."
        },
        {
            fileName: "inventory-count.png",
            title: "جرد المخازن",
            category: "inventory",
            description: "شاشة مخصصة لجرد وتسوية المخزون ومطابقة الأرصدة الفعلية والدفترية."
        },
        {
            fileName: "customers.png",
            title: "إدارة العملاء",
            category: "accounts",
            description: "دليل العملاء، أرصدتهم، والتاريخ معاملاتها السابقة."
        },
        {
            fileName: "suppliers.png",
            title: "إدارة الموردين",
            category: "accounts",
            description: "بيانات الموردين، أرصدة الحسابات وحركات الدفع والقبض."
        },
        {
            fileName: "customer-payments.png",
            title: "سداد دفعات العملاء",
            category: "accounts",
            description: "تسجيل سندات القبض والدفعات النقدية من العملاء."
        },
        {
            fileName: "supplier-payments.png",
            title: "سداد مستحقات الموردين",
            category: "accounts",
            description: "إدارة المدفوعات النقدية والتحويلات للموردين."
        },
        {
            fileName: "financial-reports.png",
            title: "تقارير الأرباح المالية",
            category: "reports",
            description: "حسابات الأرباح والخسائر وتحليل العائد المادي بدقة."
        },
        {
            fileName: "comprehensive-reports.png",
            title: "الملخص الشامل للتقارير",
            category: "reports",
            description: "لوحة تقارير إدارية متكاملة لمديري الشركات والمتاجر."
        },
        {
            fileName: "system-settings.png",
            title: "إعدادات النظام العامة",
            category: "admin",
            description: "تخصيص بيانات المنشأة، العملة، وشروط الفواتير ومقاسات الورق."
        },
        {
            fileName: "sales-invoice-a4.png",
            title: "معاينة وطباعة الفاتورة (A4)",
            category: "sales",
            description: "عرض تفصيلي للفاتورة بتنسيق A4 مع دعم المرتجعات والبيانات الضريبية."
        },
        {
            fileName: "users-management.png",
            title: "إدارة المستخدمين والصلاحيات",
            category: "admin",
            description: "صلاحيات الوصول والتحكم الكامل بصلاحيات الموظفين داخل النظام."
        },
        {
            fileName: "change-password.png",
            title: "تغير كلمة المرور",
            category: "admin",
            description: "إدارة وتحديث بيانات الاعتماد وحسابات المستخدمين."
        },
        {
            fileName: "activity-log.png",
            title: "سجل النشاطات والأحداث",
            category: "admin",
            description: "متابعة حركة المستخدمين وعمليات التعديل والحذف في النظام لأغراض الأمان."
        },
        {
            fileName: "factory-reset.png",
            title: "إعادة ضبط المصنع",
            category: "admin",
            description: "تصفير البيانات التجريبية البدء التشغيل الفعل للنظام."
        },
        {
            fileName: "data-restore.png",
            title: "استعادة البيانات",
            category: "admin",
            description: "استرجاع النسخ الاحتياطية القديمة في حالات الطوارئ."
        },
        {
            fileName: "backup-management.png",
            title: "إدارة النسخ الاحتياطي لقاعدة البيانات",
            category: "admin",
            description: "أداة لإنشاء واستعادة النسخ الاحتياطية لضمان أمان البيانات."
        }
    ]
};
