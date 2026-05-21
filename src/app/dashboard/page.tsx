import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Welcome to StreamForge.
        </p>
      </div>

      <div className="flex gap-4">
        <Button>
          Create Review
        </Button>

        <Button variant="secondary">
          View Analytics
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card title="Open Reviews">
          <p className="text-4xl font-bold">
            12
          </p>
        </Card>

        <Card title="Active Sessions">
          <p className="text-4xl font-bold">
            4
          </p>
        </Card>

        <Card title="AI Suggestions">
          <p className="text-4xl font-bold">
            28
          </p>
        </Card>
      </div>
    </div>
  );
}