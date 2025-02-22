interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`min-h-screen py-20 px-4 ${className}`}>
      <div className="glass-container max-w-4xl mx-auto p-8">
        {children}
      </div>
    </div>
  );
}
