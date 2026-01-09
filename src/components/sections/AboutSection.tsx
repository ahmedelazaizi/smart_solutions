import { motion } from "framer-motion";
import { Code2, LayoutDashboard, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "تطوير برمجي متقدم",
    description: "نستخدم أحدث التقنيات والأدوات لبناء حلول برمجية قوية وموثوقة",
  },
  {
    icon: LayoutDashboard,
    title: "أنظمة إدارية متكاملة",
    description: "نصمم أنظمة ERP وإدارة شاملة تناسب احتياجات عملك الفريدة",
  },
  {
    icon: Shield,
    title: "أمان وحماية",
    description: "نضمن أعلى معايير الأمان والحماية لبياناتك وأنظمتك",
  },
  {
    icon: Zap,
    title: "أداء عالي",
    description: "حلولنا مصممة للسرعة والكفاءة مع قابلية التوسع",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              من نحن
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              شريكك التقني{" "}
              <span className="text-gradient">الموثوق</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A.Y Smart Solutions هي شركة رائدة في مجال البرمجة والحلول الرقمية،
              نتخصص في تطوير الأنظمة المحاسبية والإدارية المتكاملة، وتصميم المواقع
              الاحترافية، وتقديم حلول تسويق رقمي مبتكرة.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              بخبرة تمتد لسنوات عديدة، نلتزم بتقديم حلول مخصصة تناسب احتياجات كل
              عميل، مع التركيز على الجودة والابتكار والدعم المستمر.
            </p>

            {/* Stats inline */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: "100+", label: "مشروع مكتمل" },
                { value: "50+", label: "عميل سعيد" },
                { value: "5+", label: "سنوات خبرة" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
