import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DiscIcon as Discord, HardDrive, MemoryStickIcon as Ram, Cpu } from 'lucide-react';

const paidPlans = [
  { name: "Starter VPS", price: "1", specs: { ram: "4GB DDR4", storage: "20GB SSD", cpu: "1 Core Intel" } },
  { name: "Basic VPS", price: "2", specs: { ram: "6GB DDR4", storage: "60GB SSD", cpu: "2 Core Intel" } },
  { name: "Standard VPS", price: "3", specs: { ram: "8GB DDR4", storage: "120GB SSD", cpu: "4 Core Intel" } },
  { name: "Premium VPS", price: "6", specs: { ram: "16GB DDR4", storage: "200GB SSD", cpu: "6 Core Intel" } },
  { name: "Enterprise VPS", price: "10", specs: { ram: "36GB DDR4", storage: "500GB SSD", cpu: "12 Core Intel" } }
];

const freePlans = [
  { invites: 2, ram: "2GB" },
  { invites: 4, ram: "4GB" },
  { invites: 6, ram: "6GB" },
  { invites: 8, ram: "8GB" }
];

export const PlansSection = () => {
  const handleSelectPlan = () => window.open('https://discord.gg/eyceXmmUs9', '_blank');

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
        VPS Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paidPlans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-purple-950/50 border-purple-800 hover:border-purple-600 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-200">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <span className="text-4xl font-bold text-purple-300">${plan.price}</span>
                  <span className="text-purple-400">/month</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-200">
                    <Ram className="w-5 h-5 text-purple-400" />
                    <span>{plan.specs.ram}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200">
                    <HardDrive className="w-5 h-5 text-purple-400" />
                    <span>{plan.specs.storage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200">
                    <Cpu className="w-5 h-5 text-purple-400" />
                    <span>{plan.specs.cpu}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={handleSelectPlan}
                >
                  <Discord className="w-5 h-5 mr-2" />
                  Open Ticket
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-center my-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
        Free VPS Event
      </h3>
      <Card className="bg-purple-900/30 border-purple-800">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-200">
            Invite Friends, Get Free VPS!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {freePlans.map((reward) => (
              <motion.div
                key={reward.invites}
                whileHover={{ scale: 1.05 }}
                className="bg-purple-950/50 p-6 rounded-lg text-center"
              >
                <div className="text-xl font-bold text-purple-300 mb-2">
                  {reward.invites} Invites
                </div>
                <div className="text-purple-200">
                  {reward.ram} RAM VPS
                  <div className="text-sm text-purple-400">(24/7 docker)</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4 text-center">
            <h3 className="text-xl font-bold text-purple-200">How to Participate:</h3>
            <ul className="text-purple-300 space-y-2">
              <li>{'• Invite friends to join our Discord server'}</li>
              <li>{'• Redeem your free VPS once you reach the invite milestone'}</li>
            </ul>
          </div>

          <div className="space-y-2 text-center text-sm text-purple-400">
            <p>* Limited time offer</p>
            <p>* Terms and conditions apply</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};