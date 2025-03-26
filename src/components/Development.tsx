
import { ArrowRight } from 'lucide-react';

const Development = () => {
  const steps = [
    {
      title: 'Sign up',
      description: 'Register with valid details to stay connected with us anytime.',
    },
    {
      title: 'Choose your plan',
      description: 'Select a plan, pay the price, and start learning anytime.',
    },
    {
      title: 'Get certified',
      description: 'Complete your lessons and receive a professional certification.',
    },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Develop Yourself with Us</h2>
          <p className="text-gray-600">
            At the School of Robotics (SoR), we provide hands-on learning to help you master technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-card p-6 group">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center">
                  {step.title}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
