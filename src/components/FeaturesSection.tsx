import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Server, Globe, Clock, Database, Cloud, Terminal } from 'lucide-react';

const features = [
  { icon: Cpu, title: "High-Performance Hardware", description: "Latest generation Intel processors and DDR4 RAM for maximum performance" },
  { icon: Shield, title: "DDoS Protection", description: "Enterprise-grade protection against DDoS attacks included with all plans" },
  { icon: Zap, title: "Instant Deployment", description: "Get your VPS up and running in less than 60 seconds" },
  { icon: Server, title: "99.9% Uptime", description: "Reliable infrastructure with guaranteed uptime SLA" },
  { icon: Globe, title: "Global Network", description: "Multiple locations worldwide for optimal latency" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical support via Discord" },
  { icon: Database, title: "NVMe Storage", description: "Lightning-fast SSD storage for optimal performance" },
  { icon: Cloud, title: "Full Root Access", description: "Complete control over your VPS environment" },
  { icon: Terminal, title: "Docker Support", description: "Native Docker support for containerized applications" }
];

export const FeaturesSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
        Premium Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-purple-950/50 border-purple-800 hover:border-purple-600 transition-all duration-300">
              <CardHeader>
                <feature.icon className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-xl font-bold text-purple-200">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-300">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};