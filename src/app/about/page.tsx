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
        { name: 'React.js', level: 5 },
        { name: 'Next.js', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'HTML/CSS', level: 5 },
        { name: 'Tailwind CSS', level: 4 },
      ],
    },
    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      color: 'green-400',
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'Python', level: 5 },
        { name: 'RESTful APIs', level: 4 },
        { name: 'Database Design', level: 4 },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: 'fas fa-tools',
      color: 'rose-400',
      skills: [
        { name: 'Git/GitHub', level: 4 },
        { name: 'Docker', level: 3 },
        { name: 'CI/CD', level: 3 },
        { name: 'AWS', level: 3 },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: 'fas fa-brain',
      color: 'amber-400',
      skills: [
        { name: 'TensorFlow', level: 3 },
        { name: 'PyTorch', level: 3 },
        { name: 'Data Analysis', level: 4 },
        { name: 'NLP', level: 3 },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: 'fas fa-palette',
      color: 'purple-400',
      skills: [
        { name: 'Figma', level: 4 },
        { name: 'Responsive Design', level: 5 },
        { name: 'UI Prototyping', level: 4 },
        { name: 'User Research', level: 3 },
      ],
    },
  ];

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg mb-4">
          I&apos;m Mina Soliman, a Full Stack Developer and AI enthusiast with over 7 years of experience crafting innovative digital solutions. My journey in software engineering has been driven by a passion for creating elegant, efficient, and user-centric applications that make a real impact.
        </p>
        <p className="text-lg mb-4">
          I specialize in modern web development with React and Next.js, building scalable applications that combine beautiful interfaces with robust backend systems. My expertise extends to machine learning and AI integration, where I leverage cutting-edge technologies to solve complex business challenges.
        </p>
        <p className="text-lg mb-4">
          Beyond coding, I&apos;m deeply committed to best practices in software architecture, clean code principles, and continuous learning. I enjoy collaborating with teams to transform ideas into production-ready solutions that exceed expectations.
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
