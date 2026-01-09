import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe, Smartphone, Search, Zap, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import webImg from "@/assets/services/web-development.jpg";

const benefits = [
  {
    icon: Globe,
    title: "تواجد رقمي قوي",
    description: "موقع احترافي يعكس هوية علامتك التجارية ويجذب العملاء"
  },
  {
    icon: Smartphone,
    title: "تصميم متجاوب",
    description: "تجربة مثالية على جميع الأجهزة من الهاتف للكمبيوتر"
  },
  {
    icon: Search,
    title: "تحسين محركات البحث",
    description: "ظهور أفضل في نتائج البحث وزيادة الزيارات العضوية"
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "تحميل سريع يحسن تجربة المستخدم ومعدل التحويل"
  }
];

const features = [
  "تصميم UI/UX عصري وجذاب",
  "متوافق مع جميع المتصفحات",
  "لوحة تحكم سهلة الاستخدام",
  "نظام إدارة محتوى مرن",
  "تكامل مع وسائل التواصل",
  "نماذج تواصل ذكية",
  "شهادة SSL للأمان",
  "استضافة سريعة ومستقرة"
];

const WebDevelopment = () => {
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
                  تصميم وتطوير
                  <span className="text-gradient block mt-2">المواقع الاحترافية</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  نبني لك حضوراً رقمياً قوياً يميزك عن المنافسين ويحول الزوار إلى عملاء
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
                    src={webImg} 
                    alt="تصميم مواقع احترافية" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-4 rounded-xl shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Website Section */}
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
                لماذا موقعك الإلكتروني هو استثمارك الأهم؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-navy-light leading-relaxed">
                <p className="text-xl mb-6">
                  في العصر الرقمي، <strong className="text-navy">موقعك الإلكتروني هو واجهتك للعالم</strong>. 
                  إنه يعمل 24 ساعة في اليوم، 7 أيام في الأسبوع، يعرض خدماتك ويجذب العملاء حتى وأنت نائم.
                </p>
                
                <p className="mb-6">
                  <strong className="text-teal">81% من العملاء</strong> يبحثون عن الشركات عبر الإنترنت قبل اتخاذ قرار الشراء. 
                  إذا لم يجدوك، سيجدون منافسيك. موقعك هو فرصتك الأولى لترك انطباع إيجابي وبناء الثقة.
                </p>
                
                <div className="bg-gradient-to-r from-teal/10 to-lime/10 p-6 rounded-xl my-8 border-r-4 border-teal">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 flex items-center">
                    <Globe className="w-6 h-6 text-teal ml-3" />
                    أكثر من مجرد صفحات
                  </h3>
                  <p className="text-navy-light m-0">
                    موقعك ليس مجرد عنوان على الإنترنت، بل هو أداة تسويقية قوية، مركز خدمة عملاء، 
                    ومنصة بيع تعمل على مدار الساعة لتحقيق أهدافك التجارية.
                  </p>
                </div>
                
                <p>
                  مع التصميم الصحيح وتجربة المستخدم المدروسة، يتحول موقعك من مجرد كتيب رقمي 
                  إلى آلة لتوليد العملاء المحتملين وزيادة المبيعات.
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
                ما الذي يميز مواقعنا؟
              </h2>
              <p className="text-navy-light text-lg max-w-2xl mx-auto">
                نصمم مواقع تجمع بين الجمال والأداء والفعالية
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
                  مميزات تجعل موقعك استثنائياً
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
                <Shield className="w-12 h-12 text-teal-light mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  أمان وموثوقية
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  نضمن لك موقعاً آمناً ومحمياً بأحدث معايير الأمان السيبراني، 
                  مع نسخ احتياطية دورية واستضافة على خوادم عالية الأداء.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    شهادة SSL مجانية
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    حماية من الهجمات الإلكترونية
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    نسخ احتياطي يومي
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
                ابدأ رحلتك الرقمية اليوم
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                دعنا نبني لك موقعاً يعكس احترافية علامتك التجارية ويحقق أهدافك
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

export default WebDevelopment;
