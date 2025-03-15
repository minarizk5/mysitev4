interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <main className={`min-h-screen py-20 px-4 ${className}`}>
      <div className="glass-container max-w-4xl mx-auto p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-30"></div>
        {children}
      </div>
    </main>
  );
}
