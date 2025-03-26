
import { Linkedin, Twitter, Mail } from 'lucide-react';

type TeamMemberType = {
  name: string;
  title: string;
  position: string;
  image: string;
};

const Team = () => {
  const team: TeamMemberType[] = [
    {
      name: 'Md Kamrul Hasan',
      title: 'Team Leader',
      position: 'Joint Secretary, Planning & Budget Branch, Cabinet Division',
      image: '/lovable-uploads/Md-Kamrul-Hasan.png',
    },
    {
      name: 'Engr Abu Kowsar',
      title: 'Project Manager',
      position: 'Programmer, Dept. of ICT, ICT Division',
      image: '/lovable-uploads/Engr-Abu-Kowsar.png',
    },
    {
      name: 'Shanjit Mondol',
      title: 'Master Trainer',
      position: 'Senior Robotics Trainer',
      image: '/lovable-uploads/Shanjit-Mondol.png',
    },
    {
      name: 'Jewel Nath',
      title: 'Master Trainer',
      position: 'Senior Robotics Trainer',
      image: '/lovable-uploads/Jewel-Nath.png',
    },
  ];

  return (
    <section id="team" className="bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Management</h2>
          <p className="text-gray-600">
            We work under the guidance of team leaders and alongside other team
            members to ensure that organizational goals are met.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.title}</p>
                <p className="text-gray-500 text-sm mt-2">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
