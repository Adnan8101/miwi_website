import { motion } from "framer-motion";

const stats = [
  { value: "1M+", label: "Users" },
  { value: "50K+", label: "Servers" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" }
];

export default function Stats() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
