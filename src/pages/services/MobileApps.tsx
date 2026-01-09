import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Smartphone, Tablet, Wifi, Bell, Users, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import mobileImg from "@/assets/services/mobile-apps.jpg";

const benefits = [
  {
    icon: Smartphone,
    title: "تطبيقات أصلية",
    description: "تطبيقات iOS و Android بأداء عالٍ وتجربة مستخدم سلسة"
  },
  {
    icon: Wifi,
    title: "عمل بدون إنترنت",
    description: "إمكانية العمل دون اتصال مع مزامنة تلقائية عند الاتصال"
  },
  {
    icon: Bell,
    title: "إشعارات ذكية",
    description: "تنبيهات مخصصة تبقي المستخدمين على تواصل مع خدماتك"
  },
  {
    icon: Lock,
    title: "أمان متقدم",
    description: "تشفير البيانات ومصادقة متعددة العوامل لحماية المستخدمين"
  }
];

const appTypes = [
  "تطبيقات التجارة الإلكترونية",
  "تطبيقات الخدمات والحجوزات",
  "تطبيقات إدارة الأعمال",
  "تطبيقات التوصيل واللوجستيات",
  "تطبيقات التعليم والتدريب",
  "تطبيقات الصحة واللياقة",
  "تطبيقات التواصل الاجتماعي",
  "تطبيقات الترفيه والألعاب"
];

const MobileApps = () => {
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
                  تطبيقات
                  <span className="text-gradient block mt-2">الويب والموبايل</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  نحول أفكارك إلى تطبيقات ذكية تصل لعملائك أينما كانوا وتعزز ولاءهم لعلامتك التجارية
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
                    src={mobileImg} 
                    alt="تطبيقات الموبايل" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-4 rounded-xl shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Apps Section */}
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
                لماذا تحتاج شركتك لتطبيق موبايل؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-navy-light leading-relaxed">
                <p className="text-xl mb-6">
                  <strong className="text-navy">90% من وقت استخدام الهاتف يُقضى في التطبيقات</strong>. 
                  هذا يعني أن عملاءك يفضلون التطبيقات على المتصفحات، وأنت بحاجة للوصول إليهم حيث هم.
                </p>
                
                <p className="mb-6">
                  التطبيقات ليست رفاهية بل ضرورة تنافسية. الشركات التي تمتلك تطبيقات تحقق 
                  <strong className="text-teal"> معدل تفاعل أعلى بـ 3 أضعاف</strong> مقارنة بتلك التي تعتمد على المواقع فقط.
                </p>
                
                <div className="bg-gradient-to-r from-teal/10 to-lime/10 p-6 rounded-xl my-8 border-r-4 border-teal">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 flex items-center">
                    <Users className="w-6 h-6 text-teal ml-3" />
                    علاقة أقوى مع العملاء
                  </h3>
                  <p className="text-navy-light m-0">
                    التطبيق يخلق قناة تواصل مباشرة ودائمة مع عملائك. الإشعارات الفورية، 
                    التخصيص الشخصي، وسهولة الوصول تبني ولاءً حقيقياً يصعب تحقيقه بأي وسيلة أخرى.
                  </p>
                </div>
                
                <p>
                  سواء كنت تريد زيادة المبيعات، تحسين خدمة العملاء، أو تبسيط العمليات الداخلية، 
                  فإن التطبيق المصمم باحترافية هو الحل الأمثل لتحقيق أهدافك.
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
                مميزات تطبيقاتنا
              </h2>
              <p className="text-navy-light text-lg max-w-2xl mx-auto">
                نبني تطبيقات بأعلى معايير الجودة والأداء
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

        {/* App Types Section */}
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
                  أنواع التطبيقات التي نطورها
                </h2>
                
                <div className="grid gap-4">
                  {appTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0" />
                      <span className="text-navy-light text-lg">{type}</span>
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
                <Tablet className="w-12 h-12 text-teal-light mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  تقنيات حديثة ومتطورة
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  نستخدم أحدث التقنيات وأطر العمل لضمان تطبيقات سريعة، مستقرة، وسهلة الصيانة والتطوير المستقبلي.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    Flutter & React Native
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    Swift & Kotlin للتطبيقات الأصلية
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    Progressive Web Apps
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
                حول فكرتك إلى تطبيق ناجح
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                شاركنا رؤيتك وسنحولها إلى تطبيق يفوق توقعاتك
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

export default MobileApps;
