interface ChartCardProps {
    title: string;
    children: React.ReactNode;
  }
  
  export default function Card({ title, children }: ChartCardProps) {
    return (
      <div className="rounded-lg shadow p-3 md:p-6 bg-white dark:bg-zinc-800">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">{title}</h2>
        {children}
      </div>
    );
  }