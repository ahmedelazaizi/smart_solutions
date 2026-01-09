import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Megaphone, Target, TrendingUp, Users, Search, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import marketingImg from "@/assets/services/digital-marketing.jpg";

const services = [
  {
    icon: Search,
    title: "تحسين محركات البحث (SEO)",
    description: "تصدّر نتائج البحث وجذب زيارات عضوية مستدامة"
  },
  {
    icon: Megaphone,
    title: "إعلانات مدفوعة",
    description: "حملات Google Ads و Meta Ads بعائد استثمار مرتفع"
  },
  {
    icon: Share2,
    title: "إدارة السوشيال ميديا",
    description: "محتوى جذاب وتفاعل مستمر يبني مجتمعك"
  },
  {
    icon: Target,
    title: "استراتيجية محتوى",
    description: "خطة محتوى متكاملة تحقق أهدافك التسويقية"
  }
];

const results = [
  "زيادة الزيارات العضوية بنسبة 300%",
  "خفض تكلفة اكتساب العميل بنسبة 45%",
  "رفع معدل التحويل إلى 5%+",
  "زيادة التفاعل على السوشيال ميديا",
  "تحسين ترتيب الكلمات المفتاحية",
  "بناء قاعدة عملاء مخلصين"
];

const DigitalMarketing = () => {
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
                  حلول التسويق
                  <span className="text-gradient block mt-2">الرقمي المتكاملة</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  استراتيجيات تسويقية مبتكرة تضع علامتك التجارية أمام جمهورك المستهدف وتحول الزوار إلى عملاء
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href="https://wa.me/201551888808" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 ml-2" />
                      احصل على استشارة مجانية
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <Link to="/#portfolio">
                      شاهد نتائجنا
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
                    src={marketingImg} 
                    alt="التسويق الرقمي" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-4 rounded-xl shadow-lg">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Digital Marketing Section */}
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
                لماذا التسويق الرقمي ضروري لنمو شركتك؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-navy-light leading-relaxed">
                <p className="text-xl mb-6">
                  <strong className="text-navy">التواجد الرقمي لم يعد اختيارياً</strong>. 
                  أكثر من 4.5 مليار شخص يستخدمون الإنترنت يومياً، ومعظمهم يبحثون عن منتجات وخدمات مثل ما تقدمه.
                </p>
                
                <p className="mb-6">
                  الشركات التي تستثمر في التسويق الرقمي تحقق 
                  <strong className="text-teal"> عائد استثمار يصل إلى 400%</strong>. 
                  هذا لأن التسويق الرقمي يتيح استهدافاً دقيقاً وقياساً فورياً للنتائج.
                </p>
                
                <div className="bg-gradient-to-r from-teal/10 to-lime/10 p-6 rounded-xl my-8 border-r-4 border-teal">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 flex items-center">
                    <Users className="w-6 h-6 text-teal ml-3" />
                    الوصول للجمهور الصحيح
                  </h3>
                  <p className="text-navy-light m-0">
                    لا تهدر ميزانيتك على جمهور غير مهتم. التسويق الرقمي يتيح لك استهداف 
                    العملاء المحتملين بدقة متناهية بناءً على اهتماماتهم وسلوكهم وموقعهم.
                  </p>
                </div>
                
                <p>
                  سواء كنت شركة ناشئة تبحث عن أول 100 عميل، أو مؤسسة راسخة تريد التوسع، 
                  فإن استراتيجية التسويق الرقمي الصحيحة هي مفتاح تحقيق أهدافك.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
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
                خدماتنا التسويقية
              </h2>
              <p className="text-navy-light text-lg max-w-2xl mx-auto">
                حلول متكاملة تغطي جميع جوانب التسويق الرقمي
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-navy-light">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
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
                  نتائج حقيقية نحققها لعملائنا
                </h2>
                
                <div className="grid gap-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0" />
                      <span className="text-navy-light text-lg">{result}</span>
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
                  منهجية مبنية على البيانات
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  لا نعتمد على التخمين. كل قرار نتخذه مبني على تحليل عميق للبيانات 
                  واختبار مستمر للوصول لأفضل النتائج.
                </p>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    تحليل المنافسين والسوق
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    اختبار A/B مستمر
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-lime" />
                    تقارير أداء شهرية مفصلة
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
                ابدأ رحلة النمو الرقمي اليوم
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                احصل على استشارة مجانية وخطة تسويقية مخصصة لأعمالك
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

export default DigitalMarketing;
