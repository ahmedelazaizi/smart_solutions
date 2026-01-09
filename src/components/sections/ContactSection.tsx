import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "الهاتف",
    value: "+201551888808",
    href: "tel:+201551888808",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "+201551888808",
    href: "https://wa.me/201551888808",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "Smart2024Solutions@gmail.com",
    href: "mailto:Smart2024Solutions@gmail.com",
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "جمهورية مصر العربية",
    href: "#",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `رسالة من ${formData.name}`;
    const body = `الاسم: ${formData.name}%0Aالهاتف: ${formData.phone}%0Aالبريد: ${formData.email}%0A%0Aالرسالة:%0A${formData.message}`;
    window.location.href = `mailto:Smart2024Solutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast({
      title: "جاري فتح البريد الإلكتروني",
      description: "سيتم فتح تطبيق البريد لإرسال رسالتك.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative">
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
            تواصل معنا
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ابدأ مشروعك <span className="text-gradient">اليوم</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            تواصل معنا لمناقشة مشروعك والحصول على استشارة مجانية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-card p-8 border border-border"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05XXXXXXXX"
                    required
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رسالتك
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب تفاصيل مشروعك أو استفسارك..."
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-teal-light transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading font-bold text-xl text-foreground mb-2">
                تحتاج استشارة سريعة؟
              </h4>
              <p className="text-muted-foreground mb-4">
                تواصل معنا عبر واتساب للرد الفوري
              </p>
              <Button variant="lime" size="lg" className="w-full" asChild>
                <a href="https://wa.me/201551888808" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  محادثة واتساب
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
