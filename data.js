/**
 * Apexora Software - Global Screenshots & Assets Data
 * Contains all system screens, descriptions, and structural assets.
 */

const systemData = {
    // معلومات الهوية والشعار الأساسي
    brand: {
        name: "Apexora Software",
        logo: "assets/images/logo.jpg", // مسار ملف اللوجو الأساسي
        tagline: "أنظمة إدارة الأعمال المتقدمة وحلول الـ ERP"
    },

    // مصفوفة الصور والواجهات الشاملة (25 + 8 + 1)
    screenshots: [
        {
            id: 1,
            fileName: "logo.jpg",
            category: "brand",
            title: "الشعار الرسمي لنظام Apexora",
            description: "شعار العلامة التجارية والهوية البصرية الرسمية لأنظمة أپيكسورا لإدارة الأعمال."
        },
        {
            id: 2,
            fileName: "invoices-filter.jpg",
            category: "sales",
            title: "شاشة فلترة وفحص الفواتير المتقدمة",
            description: "واجهة مخصصة للبحث المتقدم وتصفية الفواتير حسب التاريخ، العميل، الحالة، وطرق الدفع بسرعة فائقة."
        },
        // الشاشات الأساسية (يمكنك إضافة أو تعديل البقية هنا بنفس الهيكلة الاحترافية)
        {
            id: 3,
            fileName: "dashboard-main.jpg",
            category: "dashboard",
            title: "لوحة القيادة والتحكم الرئيسية",
            description: "نظرة شاملة ومباشرة على مؤشرات الأداء، المبيعات اليومية، والتقارير المالية اللحظية."
        },
        {
            id: 4,
            fileName: "pos-cashier.jpg",
            category: "sales",
            title: "شاشة نقاط البيع (الكاشير)",
            description: "واجهة سريعة وسهلة الاستخدام مصممة لعمليات البيع السريع والتعامل مع باركود الأصناف."
        },
        {
            id: 5,
            fileName: "inventory-stock.jpg",
            category: "inventory",
            title: "إدارة المخازن والمستودعات",
            description: "متابعة حركة المخزون، النواقص، وتنبيهات حد الطلب بشكل آلي."
        },
        {
            id: 6,
            fileName: "customers-accounts.jpg",
            category: "accounts",
            title: "حسابات العملاء والديون",
            description: "سجل متكامل لحسابات العملاء، كشف الحساب، ومتابعة الأرصدة والمدفوعات."
        },
        {
            id: 7,
            fileName: "suppliers-purchases.jpg",
            category: "purchases",
            title: "المشتريات والموردين",
            description: "تسجيل فواتير الشراء، متابعة حسابات الموردين، وأوامر التوريد."
        },
        {
            id: 8,
            fileName: "financial-reports.jpg",
            category: "reports",
            title: "التقارير المالية والأرباح",
            description: "تقارير تفصيلية للأرباح والخسائر، حركة الخزينة، والميزانية العامة."
        },
        {
            id: 9,
            fileName: "employees-permissions.jpg",
            category: "admin",
            title: "إدارة الموظفين والصلاحيات",
            description: "تحديد صلاحيات المستخدمين بدقة لضمان أمان النظام ومنع التلاعب."
        },
        {
            id: 10,
            fileName: "expenses-tracker.jpg",
            category: "accounts",
            title: "متابعة المصروفات اليومية",
            description: "تسجيل وتنصيف المصروفات النثرية والعمومية ومراقبة التدفقات النقدية الخارجة."
        },
        {
            id: 11,
            fileName: "barcode-generator.jpg",
            category: "inventory",
            title: "مولد وطباعة الباركود",
            description: "أداة لطباعة وتصميم ملصقات الباركود للأصناف والمنتجات بسهولة."
        },
        {
            id: 12,
            fileName: "pos-settings.jpg",
            category: "settings",
            title: "إعدادات نقاط البيع والفواتير",
            description: "تخصيص شكل الفاتورة وطريقة الطباعة (حراري / A4) والضرائب."
        },
        {
            id: 13,
            fileName: "shifts-management.jpg",
            category: "sales",
            title: "إدارة الورديات والنوبتجيات",
            description: "فتح وإغلاق الورديات، مطابقة النقدية، وحساب عهدة الكاشير."
        },
        {
            id: 14,
            fileName: "returns-invoices.jpg",
            category: "sales",
            title: "مرتجعات المبيعات والمشتريات",
            description: "إدارة المرتجعات وتعديل المخزون والماليات بشكل آلي ودقيق."
        },
        {
            id: 15,
            fileName: "treasury-banks.jpg",
            category: "accounts",
            title: "إدارة الخزائن والبنوك",
            description: "متابعة النقدية في الخزينة الرئيسية والفرعية والحسابات البنكية."
        },
        {
            id: 16,
            fileName: "sms-notifications.jpg",
            category: "marketing",
            title: "إرسال الرسائل والتنبيهات",
            description: "التواصل مع العملاء عبر رسائل النصوص أو الواتساب للعروض والفواتير."
        },
        {
            id: 17,
            fileName: "database-backup.jpg",
            category: "admin",
            title: "النسخ الاحتياطي والأمان",
            description: "أداة لحماية البيانات وعمل نسخ احتياطي دوري محلياً أو سحابياً."
        },
        {
            id: 18,
            fileName: "audit-logs.jpg",
            category: "admin",
            title: "سجل العمليات والرقابة",
            description: "متابعة كافة الحركات التي تمت على النظام لمعرفة من قام بإضافة أو تعديل أو حذف البيانات."
        },
        {
            id: 19,
            fileName: "price-lists.jpg",
            category: "inventory",
            title: "قوائم الأسعار المتعددة",
            description: "إدارة أسعار الجملة، نصف الجملة، والقطاعي لكل منتج."
        },
        {
            id: 20,
            fileName: "units-conversion.jpg",
            category: "inventory",
            title: "وحدات القياس المتعددة",
            description: "التعامل بالقطعة، الكرتونة، الدستة، والتحويل التلقائي بين الوحدات."
        },
        {
            id: 21,
            fileName: "quotations-sales.jpg",
            category: "sales",
            title: "عروض الأسعار للعملاء",
            description: "إنشاء وطباعة عروض أسعار احترافية وتحويلها لفواتير بيع بضغطة زر."
        },
        {
            id: 22,
            fileName: "installments-system.jpg",
            category: "accounts",
            title: "نظام التقسيط والمتابعة",
            description: "إدارة أقساط العملاء، تواريخ الاستحقاق، وإرسال تنبيهات المواعيد."
        },
        {
            id: 23,
            fileName: "lab-orders.jpg",
            category: "medical",
            title: "إدارة طلبات المعامل الطبية",
            description: "متابعة طلبيات العيادات والمعامل والمستلزمات الخاصة بـ Apexora Lab."
        },
        {
            id: 24,
            fileName: "medical-cases.jpg",
            category: "medical",
            title: "تتبع الحالات الطارئة",
            description: "إدارة الطوارئ وحالات المرضى ومتابعة الطاقم التمريضي في النظام الطبي."
        },
        {
            id: 25,
            fileName: "system-analytics.jpg",
            category: "reports",
            title: "التحليلات الرسومية المتقدمة",
            description: "رسوم بيانية توضح نسب النمو، أكثر الأصناف مبيعاً، وأوقات الذروة."
        },
        {
            id: 26,
            fileName: "tax-reports.jpg",
            category: "reports",
            title: "التقارير والاقرارات الضريبية",
            description: "حساب ضريبة القيمة المضافة وإصدار التقارير المطلوبة للمصلحة."
        },
        {
            id: 27,
            fileName: "loyalty-points.jpg",
            category: "marketing",
            title: "نقاط الولاء وعروض العملاء",
            description: "نظام مكافأة العملاء الدائمين بنقاط وكوبونات خصم تحفيزية."
        },
        {
            id: 28,
            fileName: "kitchen-display.jpg",
            category: "sales",
            title: "شاشة المطبخ وتحضير الطلبات",
            description: "مخصصة للمطاعم والكافيهات لعرض الطلبات الواردة للمطبخ بشكل مباشر."
        },
        {
            id: 29,
            fileName: "tables-management.jpg",
            category: "sales",
            title: "إدارة الطاولات والصالات",
            description: "تخطيط ومتابعة صالات المطاعم وحجوزات الطاولات وتوزيع الطلبات عليها."
        },
        {
            id: 30,
            fileName: "assets-tracking.jpg",
            category: "admin",
            title: "متابعة الأصول الثابتة",
            description: "حصر أصول الشركة، معدلات الإهلاك، وتاريخ الصيانة الدورية."
        },
        {
            id: 31,
            fileName: "custom-fields.jpg",
            category: "settings",
            title: "الحقول المخصصة المرنة",
            description: "إمكانية إضافة حقول جديدة حسب رغبة العميل لتناسب طبيعة نشاطه الفريد."
        },
        {
            id: 32,
            fileName: "multi-branches.jpg",
            category: "admin",
            title: "إدارة الفروع والمخازن المتعددة",
            description: "مزامنة العمليات ونقل البضائع بين الفروع والمركز الرئيسي بدقة."
        },
        {
            id: 33,
            fileName: "system-help.jpg",
            category: "support",
            title: "دليل الاستخدام والدعم الفني",
            description: "نافذة المساعدة الداخلية وروابط الدعم الفني وتحديثات النظام."
        },
        {
            id: 34,
            fileName: "welcome-screen.jpg",
            category: "brand",
            title: "شاشة تسجيل الدخول والترحيب",
            description: "واجهة الدخول الآمنة مع تخصيص اسم الشِركة والفرع والمستخدم الحالي."
        }
    ]
};

// تصدير البيانات للاستخدام في ملفات الجافاسكريبت الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = systemData;
}
