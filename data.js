const systemData = {
    brand: {
        name: "Apexora Software",
        tagline: "أنظمة إدارة الأعمال المتقدمة لحلول دقيقة واحترافية",
        logo: "logo.png"
    },
    screenshots: [
        {
            fileName: "dashboard.jpg",
            title: "لوحة التحكم الرئيسية",
            category: "sales",
            description: "لوحة مؤشرات أداء ذكية تعرض إجمالي المبيعات، الأرباح اللحظية، وحركة السيولة النقدية."
        },
        {
            fileName: "pos-screen.jpg",
            title: "واجهة نقاط البيع (POS)",
            category: "sales",
            description: "شاشة كاشير سريعة وعالية الأداء لإتمام عمليات البيع، قراءة الباركود، وطباعة الفواتير الفورية."
        },
        {
            fileName: "invoice-sales.jpg",
            title: "فواتير المبيعات",
            category: "sales",
            description: "إصدار ومتابعة فواتير العملاء مع إمكانية التعديل، الطباعة، وربطها بالمخازن تلقائياً."
        },
        {
            fileName: "invoices-filter.jpg",
            title: "فلترة وبحث الفواتير",
            category: "sales",
            description: "محرك بحث متقدم لتصفية الفواتير بدقة حسب التاريخ، اسم العميل، رقم الفاتورة، أو حالة الدفع."
        },
        {
            fileName: "invoice-purchase.jpg",
            title: "مرتجع المبيعات",
            category: "sales",
            description: "إدارة مرتجعات العملاء باحترافية مع تسوية الأرصدة المالية والمخزنية بشكل آلي."
        },
        {
            fileName: "expenses.jpg",
            title: "ملخص الوردية (الخزنة)",
            category: "sales",
            description: "إغلاق وردية الكاشير ومطابقة النقدية الفعليّة مع إجمالي المبيعات والمصروفات المسجلة."
        },
        {
            fileName: "activity-log.jpg",
            title: "كشف حساب العملاء (بحث وتصفية)",
            category: "accounts",
            description: "شاشة متقدمة لعرض تفاصيل حركات وكشف حساب العملاء خلال أي فترة زمنية محددة."
        },
        {
            fileName: "additional-view.jpg",
            title: "معاينة طباعة كشف الحساب (A5)",
            category: "accounts",
            description: "الشكل النهائي المعتمد لمعاينة وطباعة كشف حساب العملاء بتنسيق A5 المنظم."
        },
        {
            fileName: "items.jpg",
            title: "إدارة المخازن والأصناف (1)",
            category: "inventory",
            description: "دليل شامل لإضافة وترتيب المنتجات، تحديد الأسعار، ومراقبة الكميات والأعمار التخزينية."
        },
        {
            fileName: "inventory-1.jpg",
            title: "إدارة المخازن والأصناف (2)",
            category: "inventory",
            description: "متابعة حركة الأصناف داخل المستودعات بدقة وإصدار تنبيهات النواقص بimmediate alerts."
        },
        {
            fileName: "inventory-2.jpg",
            title: "إدارة المخازن والأصناف (3)",
            category: "inventory",
            description: "إدارة إضافية لمستويات المخزون الحد الأدنى، وحدات القياس البديلة، والباركود المتعدد."
        },
        {
            fileName: "damaged-goods.jpg",
            title: "إدارة التالف والمهدور",
            category: "inventory",
            description: "تسجيل بضائع المخزن التالفة وتحديد أسباب الهدر ومسؤوليتها لضمان دقة الجرد."
        },
        {
            fileName: "inventory-stocktake.jpg",
            title: "جرد المخازن",
            category: "inventory",
            description: "شاشة مخصصة لعمليات الجرد الفعلي وتسوية الفروقات بين الأرصدة الدفترية والفعلية."
        },
        {
            fileName: "customers.jpg",
            title: "إدارة العملاء",
            category: "accounts",
            description: "قاعدة بيانات متكاملة لبيانات العملاء، أرصدتهم الحالية، وسجل المعاملات السابقة."
        },
        {
            fileName: "suppliers.jpg",
            title: "إدارة الموردين",
            category: "accounts",
            description: "تسجيل بيانات الموردين، متابعة مديونياتهم، وتنظيم حركات التوريد والدفع."
        },
        {
            fileName: "pay-customers.jpg",
            title: "سداد دفعات العملاء",
            category: "accounts",
            description: "إصدار سندات القبض وتسجيل الدفعات النقدية والتحويلات الواردة من العملاء."
        },
        {
            fileName: "pay-suppliers.jpg",
            title: "سداد مستحقات الموردين",
            category: "accounts",
            description: "تسجيل المدفوعات النقدية وسندات الصرف للموردين لتسوية الحسابات أولاً بأول."
        },
        {
            fileName: "backup.jpg",
            title: "النسخ الاحتياطي لقاعدة البيانات",
            category: "admin",
            description: "أداة أمان متطورة لإنشاء نسخ احتياطية دورية لضمان حماية بيانات المنشأة من الفقدان."
        },
        {
            fileName: "change-password.jpg",
            title: "تغيير كلمة المرور",
            category: "admin",
            description: "تحديث بيانات الاعتماد وتأمين حسابات المستخدمين بكلمات مرور مشفرة."
        },
        {
            fileName: "additional-view.jpg",
            title: "إدارة المستخدمين والصلاحيات",
            category: "admin",
            description: "تخصيص مستويات الوصول والصلاحيات الكاملة لكل موظف داخل النظام بدقة."
        },
        {
            fileName: "system-settings.jpg",
            title: "إعدادات النظام العامة",
            category: "admin",
            description: "تهيئة بيانات المنشأة التجارية، العملة، أرقام التواصل، وشروط وطريقة طباعة الفواتير."
        },
        {
            fileName: "factory-reset.jpg",
            title: "إعادة ضبط المصنع",
            category: "admin",
            description: "أداة إدارية لتصفير البيانات التجريبية والبدء الفعلي في التشغيل الحقيقي للنظام."
        },
        {
            fileName: "inventory-3.jpg",
            title: "استعادة البيانات",
            category: "admin",
            description: "استرجاع النسخ الاحتياطية القديمة لقاعدة البيانات بكل سهولة في حالات الطوارئ."
        },
        {
            fileName: "labels.jpg",
            title: "طباعة الباركود والملصقات",
            category: "inventory",
            description: "تصميم وطباعة ملصقات الباركود الخاصة بالمنتجات والأصناف بمقاسات متنوعة."
        }
    ]
};
