
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-2">
              <div className="inline-block animate-fade-in">
                <span className="bg-primary px-3 py-1 text-xs text-white rounded-full font-medium">
                  Robotics & Programming
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-fade-in animate-delay-100">
                <span className="text-robotics-yellow">Bangladesh</span>
                <br />
                <span className="text-primary text-glow">School of Robotics</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-lg animate-fade-in animate-delay-200">
                Explore and learn more about everything from machine learning and global networking to scaling your team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white group">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-50">
                Learn More
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-6 animate-fade-in animate-delay-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={cn(
                    "w-8 h-8 rounded-full border-2 border-white",
                    i === 1 && "bg-blue-400",
                    i === 2 && "bg-green-400",
                    i === 3 && "bg-yellow-400",
                    i === 4 && "bg-red-400",
                  )}></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">500+</span> students already enrolled
              </p>
            </div>
          </div>
          
          <div className="relative lg:ml-auto">
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/2e5d224f-f128-41cc-83ae-733180f5f326.png" 
                alt="Robotics Learning Illustration" 
                className="w-full max-w-lg mx-auto"
              />
            </div>
            
            <div className="absolute top-1/4 -left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/3 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-pulse animate-delay-200"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary rounded-full opacity-70 animate-pulse animate-delay-300"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
