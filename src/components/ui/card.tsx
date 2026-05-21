type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({
  title,
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-4 text-lg font-semibold">
        {title}
      </h2>

      <div>
        {children}
      </div>
    </div>
  );
}