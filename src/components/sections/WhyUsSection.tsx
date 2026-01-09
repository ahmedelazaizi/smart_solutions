import { motion } from "framer-motion";
import {
  Settings2,
  Shield,
  Palette,
  HeadphonesIcon,
  Layers,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Settings2,
    title: "حلول مخصصة",
    description: "نصمم حلول تناسب احتياجاتك الخاصة وليست قوالب جاهزة",
  },
  {
    icon: Shield,
    title: "أنظمة آمنة",
    description: "أعلى معايير الأمان لحماية بياناتك ومعلومات عملائك",
  },
  {
    icon: Palette,
    title: "واجهات عصرية",
    description: "تصاميم حديثة وجذابة مع تجربة مستخدم سلسة",
  },
  {
    icon: HeadphonesIcon,
    title: "دعم مستمر",
    description: "فريق دعم فني متاح لمساعدتك في أي وقت",
  },
  {
    icon: Layers,
    title: "قابلية التوسع",
    description: "أنظمتنا مصممة لتنمو مع نمو أعمالك",
  },
  {
    icon: Rocket,
    title: "تسليم سريع",
    description: "نلتزم بالمواعيد ونسلم المشاريع في الوقت المحدد",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-teal-light font-medium text-sm mb-4">
            لماذا نحن
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            لماذا تختار{" "}
            <span className="text-gradient">A.Y Smart Solutions</span>؟
          </h2>
          <p className="text-white/70 text-lg">
            نتميز بالخبرة والاحترافية والالتزام بتقديم أفضل الحلول لعملائنا
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-teal/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
