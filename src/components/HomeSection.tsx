import { Button } from "@/components/ui/button";
import { DiscIcon as Discord } from "lucide-react";

export const HomeSection = () => {
  return (
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
  );
};