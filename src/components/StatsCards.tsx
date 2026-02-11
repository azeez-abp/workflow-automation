import { Workflow, Play, CheckCircle2, XCircle } from "lucide-react";

interface StatsCardsProps {
  totalWorkflows: number;
  activeWorkflows: number;
  totalRuns: number;
  failedRuns: number;
}

const StatsCards = ({ totalWorkflows, activeWorkflows, totalRuns, failedRuns }: StatsCardsProps) => {
  const stats = [
    { label: "Workflows", value: totalWorkflows, icon: Workflow, color: "text-primary" },
    { label: "Active", value: activeWorkflows, icon: Play, color: "text-success" },
    { label: "Total Runs", value: totalRuns, icon: CheckCircle2, color: "text-accent" },
    { label: "Failed", value: failedRuns, icon: XCircle, color: "text-destructive" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-4 gradient-card">
          <div className="flex items-center gap-2 mb-2">
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</span>
          </div>
          <p className="text-2xl font-mono font-bold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
