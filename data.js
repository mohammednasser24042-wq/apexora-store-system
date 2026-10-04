const systemData = {
    brand: {
        name: "Apexora Software",
        tagline: "أنظمة إدارة الأعمال المتقدمة لحلول دقيقة واحترافية",
        logo: "logo.jpg"
    },
    screenshots: [
        {
            fileName: "dashboard.jpg",
            title: "لوحة التحكم الرئيسية",
            category: "sales",
            description: "لوحة مؤشرات أداء ذكية تعرض إجمالي المبيعات، الأرباح اللحظية، وحركة السيولة النقدية."
        },
        {
            fileName: "pos.jpg",
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
            fileName: "sales-return.jpg",
            title: "مرتجع المبيعات",
            category: "sales",
            description: "إدارة مرتجعات العملاء باحترافية مع تسوية الأرصدة المالية والمخزنية بشكل آلي."
        },
        {
            fileName: "shift-summary.jpg",
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
            title: "إدارة وإضافة الأصناف",
            category: "inventory",
            description: "دليل شامل لإضافة أصناف جديدة، تعديل الأسعار، تحديد بيانات المنتجات، ومتابعة تفاصيلها الأساسية."
        },
        {
            fileName: "inventory-1.jpg",
            title: "أرصدة الأصناف - (الاصناف المتوفرة)",
            category: "inventory",
            description: "متابعة أرصدة المخازن مع فلترة عرض الأصناف المتوفرة وحركتها التفصيلية."
        },
        {
            fileName: "inventory-2.jpg",
            title: "أرصدة الأصناف - (الأصناف المنخفضة)",
            category: "inventory",
            description: "تقرير ومتابعة الأصناف التي وصلت لحد الطلب أو المخزون المنخفض لتنبيه الإدارة."
        },
        {
            fileName: "inventory-3.jpg",
            title: "أرصدة الأصناف - (الأصناف التي نفذت)",
            category: "inventory",
            description: "عرض وتصفية الأصناف التي نفذت تماماً من المخزن لاتخاذ إجراءات إعادة الطلب."
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
            fileName: "purchases.jpg",
            title: "فواتير المشتريات",
            category: "inventory",
            description: "إدارة واردات البضائع وحسابات الموردين بدقة فائقة وتوثيق التوريدات."
        },
        {
            fileName: "invoice-purchase.jpg",
            title: "تفاصيل فواتير المشتريات",
            category: "inventory",
            description: "مراجعة بنود فواتير المشتريات وتفاصيل الأصناف الواردة من الموردين."
        },
        {
            fileName: "purchase-return.jpg",
            title: "مرتجع المشتريات",
            category: "inventory",
            description: "إثبات وتوثيق البضائع المرتجعة للموردين وتسوية الفروقات المالية."
        },
        {
            fileName: "labels.jpg",
            title: "طباعة الباركود والملصقات",
            category: "inventory",
            description: "تصميم وطباعة ملصقات الباركود الخاصة بالمنتجات والأصناف بمقاسات متنوعة."
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
            fileName: "expenses.jpg",
            title: "إدارة المصروفات",
            category: "accounts",
            description: "تسجيل وتصنيف المصروفات النقدية والتشغيلية للمتجر أو المنشأة بدقة."
        },
        {
            fileName: "profits.jpg",
            title: "تقارير الأرباح المالية",
            category: "reports",
            description: "حسابات الأرباح والخسائر وتحليل العائد المادي بدقة."
        },
        {
            fileName: "reports-summary.jpg",
            title: "الملخص الشامل للتقارير",
            category: "reports",
            description: "لوحة تقارير إدارية متكاملة لمديري الشركات والمتاجر والاطلاع على الإحصائيات العامة."
        },
        {
            fileName: "system-settings.jpg",
            title: "إعدادات النظام العامة",
            category: "admin",
            description: "تهيئة بيانات المنشأة التجارية، العملة، أرقام التواصل، وشروط وطريقة طباعة الفواتير."
        },
        {
            fileName: "sales-invoice-a4.jpg",
            title: "معاينة وطباعة الفاتورة (A4/A5)",
            category: "sales",
            description: "عرض تفصيلي للفاتورة بتنسيق احترافي مع دعم المرتجعات والبيانات الضريبية."
        },
        {
            fileName: "login.jpg",
            title: "شاشة تسجيل الدخول",
            category: "admin",
            description: "بوابة الأمان والتحقق من هوية المستخدم وصلاحياته عند بدء العمل."
        },
        {
            fileName: "users-management.jpg",
            title: "إدارة المستخدمين والصلاحيات",
            category: "admin",
            description: "تخصيص مستويات الوصول والصلاحيات الكاملة لكل موظف داخل النظام بدقة."
        },
        {
            fileName: "change-password.jpg",
            title: "تغيير كلمة المرور",
            category: "admin",
            description: "إدارة وتحديث بيانات الاعتماد وحسابات المستخدمين بأمان تام."
        },
        {
            fileName: "backup.jpg",
            title: "النسخ الاحتياطي لقاعدة البيانات",
            category: "admin",
            description: "أداة أمان متطورة لإنشاء نسخ احتياطية دورية لضمان حماية بيانات المنشأة من الفقدان."
        },
        {
            fileName: "recovery.jpg",
            title: "استعادة البيانات",
            category: "admin",
            description: "استرجاع النسخ الاحتياطية القديمة لقاعدة البيانات بكل سهولة في حالات الطوارئ."
        },
        {
            fileName: "factory-reset.jpg",
            title: "إعادة ضبط المصنع",
            category: "admin",
            description: "أداة إدارية لتصفير البيانات التجريبية والبدء الفعلي في التشغيل الحقيقي للنظام."
        },
        {
            fileName: "transfers.jpg",
            title: "التحويلات المخزنية",
            category: "inventory",
            description: "إدارة نقل البضائع والأصناف بين المستودعات والفروع المختلفة بدقة."
        }
    ]
};
