import PageContainer from '@/components/PageContainer';
import { FC } from 'react';

interface SkillCardProps {
  category: string;
  skills: Array<{
    name: string;
    level: number; // 1-5
  }>;
  icon: string;
  color: string;
}

const SkillCard: FC<SkillCardProps> = ({ category, skills, icon, color }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-${color}/20 hover:border-${color}/40 transition-all duration-300 h-full`}>
      <div className="flex items-center gap-3 mb-4">
        <i className={`${icon} text-${color} text-xl`}></i>
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span>{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}/5</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${color} rounded-full`} 
                style={{ width: `${(skill.level / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'fas fa-code',
      color: 'blue-400',
      skills: [
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 5 },
        { name: 'JavaScript', level: 5 },
      ],
    },
    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      color: 'green-400',
      skills: [
        { name: 'Python', level: 5 },
        { name: 'Software Engineering', level: 4 },
      ],
    },
    {
      category: 'Design & Content',
      icon: 'fas fa-palette',
      color: 'purple-400',
      skills: [
        { name: 'Figma', level: 3 },
        { name: 'Canva', level: 4 },
        { name: 'Blogging', level: 4 },
        { name: 'Next.JS', level: 5 },
      ],
    },
    {
      category: 'AI & Data',
      icon: 'fas fa-brain',
      color: 'amber-400',
      skills: [
        { name: 'Machine Learning', level: 3 },
        { name: 'Deep Learning', level: 3 },
        { name: 'Artificial Intelligence', level: 3 },
        { name: 'Data Analysis', level: 3 },
      ],
    },
    {
      category: 'Other Skills',
      icon: 'fas fa-tools',
      color: 'rose-400',
      skills: [
        { name: 'WordPress', level: 5 },
        { name: 'Office', level: 5 },
        { name: 'Google Workspace', level: 5 },
        { name: 'Physics', level: 4 },
      ],
    },
  ];

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-4">
          I&apos;m Mina Soliman, a passionate software engineer with over 7 years of experience in the tech industry. I&apos;ve dedicated my career to solving complex problems and delivering high-quality solutions.
        </p>
        <p className="text-lg mb-4">
          I specialize in web development, creating modern and responsive applications using the latest technologies.
        </p>
        
        <h2 className="text-2xl font-bold mt-12 mb-6">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
          {skillCategories.map((category) => (
            <SkillCard 
              key={category.category}
              category={category.category}
              skills={category.skills}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
