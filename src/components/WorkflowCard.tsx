import { Play, Pause, Trash2, Clock, Zap, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface Workflow {
  id: string;
  name: string;
  description: string | null;
  trigger_type: string;
  is_enabled: boolean;
  last_run_at: string | null;
  run_count: number;
  steps: any[];
  created_at: string;
}

interface WorkflowCardProps {
  workflow: Workflow;
  onToggle: (id: string, enabled: boolean) => void;
  onDelete: (id: string) => void;
  onRun: (id: string) => void;
}

const triggerIcons: Record<string, typeof Zap> = {
  manual: Zap,
  schedule: Clock,
  webhook: GitBranch,
};

const WorkflowCard = ({ workflow, onToggle, onDelete, onRun }: WorkflowCardProps) => {
  const TriggerIcon = triggerIcons[workflow.trigger_type] || Zap;

  return (
    <div className={`group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:glow-primary ${!workflow.is_enabled ? "opacity-60" : ""}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <TriggerIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-mono font-semibold text-foreground">{workflow.name}</h3>
            {workflow.description && (
              <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{workflow.description}</p>
            )}
          </div>
        </div>
        <Badge
          variant={workflow.is_enabled ? "default" : "secondary"}
          className={workflow.is_enabled ? "bg-success/15 text-success border-success/20" : ""}
        >
          {workflow.is_enabled ? "Active" : "Paused"}
        </Badge>
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-4">
        <span className="capitalize">{workflow.trigger_type}</span>
        <span>•</span>
        <span>{workflow.run_count} runs</span>
        {workflow.last_run_at && (
          <>
            <span>•</span>
            <span>Last: {formatDistanceToNow(new Date(workflow.last_run_at), { addSuffix: true })}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" variant="secondary" className="font-mono text-xs gap-1.5" onClick={() => onRun(workflow.id)}>
          <Play className="h-3 w-3" /> Run
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="font-mono text-xs gap-1.5"
          onClick={() => onToggle(workflow.id, !workflow.is_enabled)}
        >
          {workflow.is_enabled ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          {workflow.is_enabled ? "Pause" : "Enable"}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="font-mono text-xs text-destructive hover:text-destructive gap-1.5 ml-auto"
          onClick={() => onDelete(workflow.id)}
        >
          <Trash2 className="h-3 w-3" /> Delete
        </Button>
      </div>
    </div>
  );
};

export default WorkflowCard;
