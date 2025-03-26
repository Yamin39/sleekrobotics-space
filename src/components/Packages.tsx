
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PackageType = {
  title: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
};

const Packages = () => {
  const packages: PackageType[] = [
    {
      title: 'Standard',
      price: 'BDT 2000',
      period: '/Monthly',
      features: [
        '10+ Classes',
        '1+ Projects',
        'Build Tools',
      ],
    },
    {
      title: 'Premium',
      price: 'BDT 3000',
      period: '/Monthly',
      popular: true,
      features: [
        '20+ Classes',
        '3+ Projects',
        'Build Tools',
        'Free Update',
      ],
    },
    {
      title: 'Enterprise',
      price: 'BDT 5000',
      period: '/Monthly',
      features: [
        '30+ Classes',
        '5+ Projects',
        'Build Tools',
        'Free Update',
        'Source Files',
      ],
    },
  ];

  return (
    <section id="packages" className="bg-white">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Packages</h2>
          <p className="text-gray-600">
            There are different e-learning packages available. In each package, you get
            high-quality e-learning, excellent resources, and many more...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card p-8 transition-all duration-300 hover:shadow-xl relative flex flex-col justify-between",
                pkg.popular && "border-primary border-2"
              )}
            >
              <div>
              {pkg.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{pkg.price}</span>
                <span className="text-gray-500">{pkg.period}</span>
              </div>
              
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              </div>
              
              <Button 
                className={cn(
                  "w-full", 
                  pkg.popular 
                    ? "bg-primary hover:bg-primary-600 text-white" 
                    : "bg-white border-2 border-primary text-primary hover:bg-primary-50"
                )}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
