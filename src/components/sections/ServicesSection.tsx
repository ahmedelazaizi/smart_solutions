import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calculator,
  Building2,
  Globe,
  Smartphone,
  BarChart3,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "أنظمة محاسبية",
    description:
      "أنظمة محاسبة متكاملة تشمل الفواتير، المخزون، الحسابات، والتقارير المالية",
    color: "teal",
    link: "/services/accounting-systems",
  },
  {
    icon: Building2,
    title: "برامج ERP",
    description:
      "أنظمة إدارة موارد المؤسسات الشاملة لربط جميع أقسام شركتك في منصة واحدة",
    color: "lime",
    link: "/services/erp-systems",
  },
  {
    icon: Globe,
    title: "تصميم مواقع",
    description:
      "تصميم وتطوير مواقع احترافية متجاوبة مع جميع الأجهزة وصديقة لمحركات البحث",
    color: "navy",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "تطبيقات الموبايل",
    description:
      "تطوير تطبيقات iOS و Android بأحدث التقنيات مع تجربة مستخدم سلسة",
    color: "teal",
    link: "/services/mobile-apps",
  },
  {
    icon: BarChart3,
    title: "لوحات تحكم",
    description:
      "لوحات تحكم تفاعلية وتحليلات بيانات متقدمة لاتخاذ قرارات أفضل",
    color: "lime",
    link: "/services/dashboards",
  },
  {
    icon: TrendingUp,
    title: "التسويق الرقمي",
    description:
      "حلول تسويق رقمي شاملة تشمل SEO، إعلانات مدفوعة، وإدارة السوشيال ميديا",
    color: "navy",
    link: "/services/digital-marketing",
  },
];

const ServicesSection = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white";
      case "lime":
        return "bg-lime/10 text-lime group-hover:bg-lime group-hover:text-white";
      case "navy":
        return "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            خدماتنا
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            حلول <span className="text-gradient">متكاملة</span> لأعمالك
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم مجموعة شاملة من الخدمات البرمجية والرقمية المصممة خصيصاً لتلبية
            احتياجات عملك
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 border border-border hover:border-primary/20 overflow-hidden h-full cursor-pointer"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${getColorClasses(
                    service.color
                  )}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4" />
                </span>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
