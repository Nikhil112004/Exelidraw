"use client"
import { motion } from "framer-motion";
import { type LucideIcon} from "lucide-react";
import { InfinityIcon } from "lucide-react";


interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
    >
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 font-body text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;