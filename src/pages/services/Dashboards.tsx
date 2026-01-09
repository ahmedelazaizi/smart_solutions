import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BarChart3, PieChart, TrendingUp, Eye, Gauge, Activity, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import dashboardImg from "@/assets/services/dashboards.jpg";

const benefits = [
  {
    icon: Eye,
    title: "رؤية شاملة",
    description: "اطلع على جميع مؤشرات الأداء من مكان واحد"
  },
  {
    icon: TrendingUp,
    title: "تحليلات تنبؤية",
    description: "توقع الاتجاهات واتخذ قرارات استباقية"
  },
  {
    icon: Gauge,
    title: "مراقبة فورية",
    description: "تتبع الأداء لحظة بلحظة مع تنبيهات ذكية"
  },
  {
    icon: Activity,
    title: "تقارير تلقائية",
    description: "توليد تقارير دورية وإرسالها تلقائياً"
  }
];

const features = [
  "رسوم بيانية تفاعلية ومتحركة",
  "فلاتر وتصفية متقدمة للبيانات",
  "تصدير للـ PDF و Excel",
  "دعم اللغة العربية بالكامل",
  "تخصيص الألوان والتصميم",
  "ربط مع مصادر بيانات متعددة",
  "صلاحيات مستخدمين متعددة",
  "دعم العمل على الموبايل"
];

const Dashboards = () => {
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
                  لوحات التحكم
                  <span className="text-gradient block mt-2">والتحليلات الذكية</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  حول بياناتك إلى رؤى استراتيجية تدعم قراراتك وتسرّع نمو أعمالك
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
                    src={dashboardImg} 
                    alt="لوحات تحكم وتحليلات" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-4 rounded-xl shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Dashboards Section */}
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
                لماذا لوحات التحكم ضرورية لنجاح شركتك؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-navy-light leading-relaxed">
                <p className="text-xl mb-6">
                  في عالم تتضاعف فيه البيانات كل عامين، <strong className="text-navy">القدرة على فهم وتحليل هذه البيانات 
                  هي ما يميز الشركات الناجحة</strong>. لوحات التحكم تحول الأرقام الجافة إلى رؤى قابلة للتنفيذ.
                </p>
                
                <p className="mb-6">
                  الشركات التي تعتمد على تحليل البيانات تحقق <strong className="text-teal">أرباحاً أعلى بـ 23%</strong> 
                  من منافسيها. ليس لأنها تمتلك بيانات أكثر، بل لأنها تفهم بياناتها وتتصرف بناءً عليها.
                </p>
                
                <div className="bg-gradient-to-r from-teal/10 to-lime/10 p-6 rounded-xl my-8 border-r-4 border-teal">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 flex items-center">
                    <PieChart className="w-6 h-6 text-teal ml-3" />
                    من البيانات إلى القرارات
                  </h3>
                  <p className="text-navy-light m-0">
                    لوحة التحكم الذكية لا تعرض أرقاماً فقط، بل تروي قصة. تكشف الأنماط، 
                    تحدد الفرص، وتنبهك للمخاطر قبل أن تصبح مشاكل.
                  </p>
                </div>
                
                <p>
                  سواء كنت تريد متابعة المبيعات، قياس أداء الموظفين، أو مراقبة سلسلة التوريد، 
                  فإن لوحة تحكم مصممة بعناية تمنحك القوة لاتخاذ قرارات أسرع وأدق.
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
                ما تقدمه لوحاتنا
              </h2>
              <p className="text-navy-light text-lg max-w-2xl mx-auto">
                أدوات تحليل متقدمة بواجهة سهلة الاستخدام
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
                  className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
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

        {/* Features Section */}
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
                  مميزات تقنية متقدمة
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
                <TrendingUp className="w-12 h-12 text-teal-light mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  تحليلات في الوقت الفعلي
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  راقب أداء عملك لحظة بلحظة مع تحديثات فورية للبيانات. لا مزيد من الانتظار 
                  لنهاية الشهر لمعرفة ما يحدث في شركتك.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    تحديث البيانات كل ثانية
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    تنبيهات فورية للأحداث المهمة
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    مقارنات تاريخية تلقائية
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
                ابدأ برؤية بياناتك بوضوح
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                دعنا نصمم لك لوحة تحكم تلبي احتياجاتك وتساعدك على النمو
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

export default Dashboards;
