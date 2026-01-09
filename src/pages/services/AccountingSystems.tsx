import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Clock, BarChart3, Calculator, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import accountingImg from "@/assets/services/accounting-systems.jpg";

const benefits = [
  {
    icon: TrendingUp,
    title: "زيادة الكفاءة المالية",
    description: "تقليل الأخطاء البشرية وتسريع العمليات المحاسبية بنسبة تصل إلى 80%"
  },
  {
    icon: Shield,
    title: "حماية البيانات المالية",
    description: "تشفير متقدم وصلاحيات متعددة المستويات لحماية معلوماتك"
  },
  {
    icon: Clock,
    title: "توفير الوقت والجهد",
    description: "أتمتة المهام الروتينية وإعداد التقارير الفورية"
  },
  {
    icon: BarChart3,
    title: "تقارير تحليلية دقيقة",
    description: "رؤية شاملة لأداء شركتك المالي واتخاذ قرارات مدروسة"
  }
];

const features = [
  "إدارة الحسابات العامة والفرعية",
  "إصدار الفواتير والإيصالات إلكترونياً",
  "متابعة المصروفات والإيرادات",
  "إدارة الذمم المدينة والدائنة",
  "إعداد الميزانيات والقوائم المالية",
  "تقارير الأرباح والخسائر",
  "إدارة الضرائب والزكاة",
  "التكامل مع البنوك والمنظومات الحكومية"
];

const AccountingSystems = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/" className="inline-flex items-center text-teal-light hover:text-teal transition-colors mb-6">
                  <ArrowRight className="w-4 h-4 ml-2" />
                  العودة للرئيسية
                </Link>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  الأنظمة المحاسبية
                  <span className="text-gradient block mt-2">والإدارية المتكاملة</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  حلول محاسبية ذكية تحول بياناتك المالية إلى رؤى استراتيجية تدعم نمو أعمالك واستقرارها
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://wa.me/201551888808" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      احصل على عرض سعر
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/#portfolio">
                      شاهد أعمالنا
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={accountingImg} 
                    alt="نظام محاسبي متكامل" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-4 rounded-xl shadow-lg">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Important Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                لماذا تحتاج شركتك لنظام محاسبي متكامل؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-navy-light leading-relaxed">
                <p className="text-xl mb-6">
                  في عالم الأعمال المتسارع، لم يعد الاعتماد على السجلات الورقية أو جداول البيانات البسيطة خياراً قابلاً للتطبيق. 
                  <strong className="text-navy"> النظام المحاسبي المتكامل هو العمود الفقري لأي شركة ناجحة</strong>، 
                  فهو يضمن دقة البيانات المالية ويوفر رؤية واضحة لحالة الشركة المالية في أي لحظة.
                </p>
                
                <p className="mb-6">
                  تشير الدراسات إلى أن <strong className="text-teal">67% من الشركات الصغيرة والمتوسطة</strong> التي تفشل، 
                  يكون السبب الرئيسي هو سوء الإدارة المالية وعدم وجود نظام محاسبي فعال. 
                  هذا ليس مجرد رقم، بل هو تحذير حقيقي لكل صاحب عمل يطمح للنجاح والاستمرارية.
                </p>
                
                <div className="bg-gradient-to-r from-teal/10 to-lime/10 p-6 rounded-xl my-8 border-r-4 border-teal">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 flex items-center">
                    <TrendingUp className="w-6 h-6 text-teal ml-3" />
                    الاستقرار والنمو يبدأ من هنا
                  </h3>
                  <p className="text-navy-light m-0">
                    النظام المحاسبي ليس مجرد أداة لتسجيل المعاملات، بل هو شريك استراتيجي يساعدك على فهم أداء شركتك، 
                    تحديد فرص النمو، واتخاذ قرارات مالية سليمة مبنية على بيانات دقيقة.
                  </p>
                </div>
                
                <p>
                  سواء كنت تدير شركة ناشئة أو مؤسسة راسخة، فإن امتلاك نظام محاسبي قوي يعني:
                  السيطرة الكاملة على التدفقات النقدية، الامتثال للمتطلبات الضريبية، 
                  وبناء ثقة المستثمرين والشركاء في قدرتك على إدارة الشؤون المالية باحترافية.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                فوائد تحصل عليها مع نظامنا
              </h2>
              <p className="text-navy-light text-lg max-w-2xl mx-auto">
                نظام مصمم خصيصاً لتلبية احتياجات السوق العربي
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-navy-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8">
                  مميزات شاملة لإدارة مالية متكاملة
                </h2>
                
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0" />
                      <span className="text-navy-light text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-hero p-8 rounded-2xl"
              >
                <FileText className="w-12 h-12 text-teal-light mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  تقارير فورية وتحليلات ذكية
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  احصل على تقارير مالية فورية ولوحات تحكم تفاعلية تمنحك رؤية 360 درجة لأداء شركتك المالي. 
                  اتخذ قرارات استراتيجية مبنية على بيانات حقيقية ودقيقة.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    تقارير يومية وأسبوعية وشهرية
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    مقارنات بين الفترات الزمنية
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    تنبيهات ذكية للمستحقات
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                ابدأ رحلة التحول الرقمي لشركتك اليوم
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات شركتك
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="xl" asChild>
                  <a href="https://wa.me/201551888808" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    تواصل عبر واتساب
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy" asChild>
                  <a href="mailto:Smart2024Solutions@gmail.com">
                    أرسل بريد إلكتروني
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountingSystems;
