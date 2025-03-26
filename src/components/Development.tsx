
import { ArrowRight } from 'lucide-react';

const Development = () => {
  const steps = [
    {
      title: 'Sign up for a course',
      description: 'Register with valid details to stay connected with us anytime.',
      image: '/lovable-uploads/a1cd4574-a8a6-4bab-8b90-51dc87bb80d8.png',
    },
    {
      title: 'Choose your plan',
      description: 'Select a course, programming language, and your preferred time.',
      image: '/lovable-uploads/a1cd4574-a8a6-4bab-8b90-51dc87bb80d8.png',
    },
    {
      title: 'Get certified',
      description: 'Complete your lessons and receive a professional certification.',
      image: '/lovable-uploads/a1cd4574-a8a6-4bab-8b90-51dc87bb80d8.png',
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
              
              <div className="mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center">
                  {step.title}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
              
              <div className="h-40 mt-6 overflow-hidden rounded-lg">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
