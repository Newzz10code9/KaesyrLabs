'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/Navigation"
import { HomeSection } from "@/components/HomeSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { PlansSection } from "@/components/PlansSection"
import { ContactSection } from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="plans">Plans</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomeSection />
          </TabsContent>

          <TabsContent value="features">
            <FeaturesSection />
          </TabsContent>

          <TabsContent value="plans">
            <PlansSection />
          </TabsContent>

          <TabsContent value="contact">
            <ContactSection />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}