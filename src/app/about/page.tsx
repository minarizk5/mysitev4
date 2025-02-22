import PageContainer from '@/components/PageContainer';

export default function About() {
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
        <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>WordPress</li>
          <li>Figma</li>
          <li>Canva</li>
          <li>Office</li>
          <li>Google Workspace</li>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Artificial Intelligence</li>
          <li>Physics</li>
          <li>Data Analysis</li>
          <li>Software Engineering</li>
          <li>Blogging</li>
          <li>Ghost CMS</li>
          <li>Coding</li>
        </ul>
      </div>
    </PageContainer>
  );
}
