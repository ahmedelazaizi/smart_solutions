import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers, Settings, Users, Package, ShoppingCart, Truck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import erpImg from "@/assets/services/erp-systems.jpg";

const modules = [
  {
    icon: Package,
    title: "إدارة المخزون",
    description: "تتبع المخزون في الوقت الفعلي مع تنبيهات إعادة الطلب الذكية"
  },
  {
    icon: Users,
    title: "إدارة الموارد البشرية",
    description: "نظام متكامل للرواتب والحضور والإجازات وتقييم الأداء"
  },
  {
    icon: ShoppingCart,
    title: "إدارة المبيعات",
    description: "متابعة العملاء والعروض والفواتير وتحليل المبيعات"
  },
  {
    icon: Truck,
    title: "إدارة سلسلة التوريد",
    description: "تحسين عمليات الشراء والتوزيع وإدارة الموردين"
  }
];

const integrationBenefits = [
  "توحيد جميع العمليات في نظام واحد",
  "تقليل الإدخال اليدوي المتكرر",
  "تحسين التنسيق بين الأقسام",
  "رؤية شاملة لجميع العمليات",
  "اتخاذ قرارات أسرع وأدق",
  "تقليل التكاليف التشغيلية"
];

const ERPSystems = () => {
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
                  أنظمة ERP
                  <span className="text-gradient block mt-2">لإدارة المؤسسات</span>
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                  حلول تخطيط موارد المؤسسة المتكاملة التي تربط جميع أقسام شركتك في منظومة واحدة ذكية
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
                    src={erpImg} 
                    alt="نظام ERP متكامل" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-4 rounded-xl shadow-lg">
                  <Layers className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why ERP Section */}
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
                كيف يضمن نظام ERP استمرارية ونمو شركتك؟
              </h2>
              
              <div className="prose prose-lg max-w-none text-navy-light leading-relaxed">
                <p className="text-xl mb-6">
                  تخيل أن جميع أقسام شركتك - المالية، المخزون، الموارد البشرية، المبيعات، والإنتاج - 
                  تعمل كوحدة واحدة متناسقة. <strong className="text-navy">هذا ما يحققه نظام ERP المتكامل</strong>.
                </p>
                
                <p className="mb-6">
                  الشركات التي تستخدم أنظمة ERP تحقق <strong className="text-teal">زيادة في الإنتاجية بنسبة 35%</strong> 
                  وتخفيض في التكاليف التشغيلية بنسبة 23%. هذه ليست مجرد أرقام، بل هي نتائج حقيقية تعكس 
                  قوة التكامل والأتمتة.
                </p>
                
                <div className="bg-gradient-to-r from-teal/10 to-lime/10 p-6 rounded-xl my-8 border-r-4 border-teal">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 flex items-center">
                    <Settings className="w-6 h-6 text-teal ml-3" />
                    التكامل هو مفتاح النجاح
                  </h3>
                  <p className="text-navy-light m-0">
                    عندما تتواصل جميع الأقسام عبر نظام واحد، تختفي الفجوات المعلوماتية، 
                    تتسارع العمليات، وتتحسن جودة القرارات. هذا هو جوهر التحول الرقمي الحقيقي.
                  </p>
                </div>
                
                <p>
                  سواء كنت تدير مصنعاً، شركة تجارية، أو مؤسسة خدمية، فإن نظام ERP يمنحك السيطرة الكاملة 
                  على عملياتك ويجعل التوسع والنمو أمراً طبيعياً ومدروساً.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modules Section */}
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
                وحدات النظام المتكاملة
              </h2>
              <p className="text-navy-light text-lg max-w-2xl mx-auto">
                نظام شامل يغطي جميع جوانب عملياتك التجارية
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">
                    {module.title}
                  </h3>
                  <p className="text-navy-light">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-hero p-8 rounded-2xl lg:order-2"
              >
                <Layers className="w-12 h-12 text-teal-light mb-6" />
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  قوة التكامل الشامل
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  نظام ERP ليس مجموعة برامج منفصلة، بل هو منظومة واحدة متكاملة تضمن تدفق البيانات 
                  بسلاسة بين جميع الأقسام، مما يقضي على العزلة المعلوماتية ويحقق الكفاءة القصوى.
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-white/90 text-sm">
                    "بعد تطبيق نظام ERP، انخفض وقت إعداد التقارير الشهرية من 5 أيام إلى ساعتين فقط"
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:order-1"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8">
                  فوائد التكامل الذي نقدمه
                </h2>
                
                <div className="grid gap-4">
                  {integrationBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-teal flex-shrink-0" />
                      <span className="text-navy-light text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
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
                حان وقت توحيد عمليات شركتك
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                دعنا نصمم لك نظام ERP مخصص يناسب طبيعة عملك ويدعم طموحاتك في النمو
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

export default ERPSystems;
