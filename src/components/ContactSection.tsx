import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
        Contact Us
      </h2>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-purple-950/50 border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-200 text-center">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Button
                  className="w-full md:w-auto bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.open('https://discord.gg/eyceXmmUs9', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Join Our Discord
                </Button>
                <Button
                  className="w-full md:w-auto bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.open('mailto:support@kaesyr.us.kg', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </Button>
              </div>
              <div className="text-center text-purple-300 space-y-2">
                <p>Discord: Fast response time (24&frasl;7)</p>
                <p>Email: support@kaesyr.us.kg</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};