
import { Button } from '@/components/ui/button';

const ConnectBanner = () => {
  return (
    <section className="bg-primary relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ffffff_0%,rgba(255,255,255,0)_25%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-primary-50 mb-8 text-lg">
            Now that we've aligned the details, it's time to get things mapped out and
            organized. Now that we've aligned the details.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConnectBanner;
