'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Cpu, Shield, Zap, Server, Globe, Clock, Database, Cloud, Terminal, DiscIcon as Discord, HardDrive, MemoryStickIcon as Ram, Mail, MessageCircle } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

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
]

const paidPlans = [
  { name: "Starter VPS", price: "1", specs: { ram: "4GB DDR4", storage: "20GB SSD", cpu: "1 Core Intel" } },
  { name: "Basic VPS", price: "2", specs: { ram: "6GB DDR4", storage: "60GB SSD", cpu: "2 Core Intel" } },
  { name: "Standard VPS", price: "3", specs: { ram: "8GB DDR4", storage: "120GB SSD", cpu: "4 Core Intel" } },
  { name: "Premium VPS", price: "6", specs: { ram: "16GB DDR4", storage: "200GB SSD", cpu: "6 Core Intel" } },
  { name: "Enterprise VPS", price: "10", specs: { ram: "36GB DDR4", storage: "500GB SSD", cpu: "12 Core Intel" } }
]

const freePlans = [
  { invites: 2, ram: "2GB" },
  { invites: 4, ram: "4GB" },
  { invites: 6, ram: "6GB" },
  { invites: 8, ram: "8GB" }
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSelectPlan = () => window.open('https://discord.gg/eyceXmmUs9', '_blank')

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://cdn.discordapp.com/attachments/1327163566419087432/1327179613973250058/ccfbd7dedea89e4f0cbe66d69107aab7.webp?ex=67821fd5&is=6780ce55&hm=b391ccb98b9130c0f9d47cf08390b009caf15d03fcebb65c9cc4c38dd3ec485f"
                alt="Kaesyr Labs Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-purple-200">Kaesyr Labs</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="plans">Plans</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home">
            <section className="py-12 text-center relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200 animate-fade-in">
                  Powerful VPS Hosting for Your Projects
                </h1>
                <p className="text-xl text-purple-200 max-w-2xl mx-auto animate-fade-in-up">
                  Fast, secure, and scalable virtual private servers tailored to your needs
                </p>
                <div className="flex justify-center animate-fade-in-up">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open('https://discord.gg/eyceXmmUs9', '_blank')}
                  >
                    <Discord className="w-5 h-5 mr-2" />
                    Join Discord
                  </Button>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
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
          </TabsContent>

          {/* Plans Tab */}
          <TabsContent value="plans">
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
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
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
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}