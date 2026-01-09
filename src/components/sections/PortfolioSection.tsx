import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "الكل" },
  { id: "accounting", name: "أنظمة محاسبية" },
  { id: "management", name: "أنظمة إدارية" },
  { id: "websites", name: "مواقع ويب" },
];

const projects = [
  {
    id: 1,
    title: "نظام محاسبة شركات",
    category: "accounting",
    description: "نظام محاسبة متكامل لإدارة الفواتير والمخزون والتقارير المالية",
    color: "from-teal to-teal-dark",
  },
  {
    id: 2,
    title: "نظام إدارة المبيعات",
    category: "management",
    description: "نظام شامل لإدارة العملاء والمبيعات وتتبع الطلبات",
    color: "from-lime to-lime-dark",
  },
  {
    id: 3,
    title: "موقع شركة عقارية",
    category: "websites",
    description: "موقع احترافي لعرض العقارات مع نظام بحث متقدم",
    color: "from-navy to-navy-dark",
  },
  {
    id: 4,
    title: "برنامج نقاط البيع",
    category: "accounting",
    description: "نظام POS متكامل للمحلات التجارية والمطاعم",
    color: "from-teal-light to-teal",
  },
  {
    id: 5,
    title: "نظام إدارة الموارد البشرية",
    category: "management",
    description: "نظام HR لإدارة الموظفين والرواتب والإجازات",
    color: "from-lime-light to-lime",
  },
  {
    id: 6,
    title: "متجر إلكتروني",
    category: "websites",
    description: "منصة تجارة إلكترونية متكاملة مع بوابات دفع",
    color: "from-navy-light to-navy",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            سابقة الأعمال
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            مشاريع <span className="text-gradient">نفتخر</span> بها
          </h2>
          <p className="text-muted-foreground text-lg">
            نماذج من أعمالنا التي نفذناها لعملائنا الكرام
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-primary text-white shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <span className="text-white/80 font-heading text-xl font-semibold z-10">
                    {project.title}
                  </span>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="heroOutline" size="sm">
                      <ExternalLink className="w-4 h-4 ml-2" />
                      عرض التفاصيل
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {categories.find((c) => c.id === project.category)?.name}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            عرض جميع المشاريع
            <ChevronLeft className="w-4 h-4 mr-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
