import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ChevronUp } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "أعمالنا", href: "#portfolio" },
  { name: "تواصل معنا", href: "#contact" },
];

const services = [
  "أنظمة محاسبية",
  "برامج ERP",
  "تصميم مواقع",
  "تطبيقات موبايل",
  "التسويق الرقمي",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-white relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img
              src={logo}
              alt="A.Y Smart Solutions"
              className="h-16 w-auto rounded-lg mb-4"
            />
            <p className="text-white/60 leading-relaxed mb-6">
              شركة رائدة في البرمجة والحلول الرقمية، نقدم أنظمة محاسبية وإدارية
              متكاملة وحلول تقنية مبتكرة
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-teal transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-lime transition-colors inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">اشترك في النشرة</h4>
            <p className="text-white/60 mb-4">
              احصل على آخر الأخبار والعروض الخاصة
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-teal transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-glow-teal transition-all duration-300"
              >
                اشتراك
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-right">
            © {new Date().getFullYear()} A.Y Smart Solutions. جميع الحقوق محفوظة.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-primary transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
