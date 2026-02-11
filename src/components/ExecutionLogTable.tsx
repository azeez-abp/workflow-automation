import { CheckCircle2, XCircle, Loader2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface ExecutionLog {
  id: string;
  workflow_id: string;
  status: string;
  started_at: string;
  completed_at: string | null;
  duration_ms: number | null;
  error_message: string | null;
  workflows?: { name: string } | null;
}

interface ExecutionLogTableProps {
  logs: ExecutionLog[];
}

const statusConfig: Record<string, { icon: typeof CheckCircle2; className: string }> = {
  success: { icon: CheckCircle2, className: "text-success" },
  failed: { icon: XCircle, className: "text-destructive" },
  running: { icon: Loader2, className: "text-primary animate-spin" },
};

const ExecutionLogTable = ({ logs }: ExecutionLogTableProps) => {
  if (logs.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-muted-foreground font-mono text-sm">No executions yet</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-mono text-muted-foreground uppercase tracking-wider p-4">Status</th>
              <th className="text-left text-xs font-mono text-muted-foreground uppercase tracking-wider p-4">Workflow</th>
              <th className="text-left text-xs font-mono text-muted-foreground uppercase tracking-wider p-4">Started</th>
              <th className="text-left text-xs font-mono text-muted-foreground uppercase tracking-wider p-4">Duration</th>
              <th className="text-left text-xs font-mono text-muted-foreground uppercase tracking-wider p-4">Error</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => {
              const config = statusConfig[log.status] || statusConfig.running;
              const StatusIcon = config.icon;
              return (
                <tr key={log.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`h-4 w-4 ${config.className}`} />
                      <Badge variant="secondary" className="font-mono text-xs capitalize">
                        {log.status}
                      </Badge>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-sm text-foreground">
                    {log.workflows?.name || "Unknown"}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground font-mono">
                    {formatDistanceToNow(new Date(log.started_at), { addSuffix: true })}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground font-mono">
                    {log.duration_ms ? `${log.duration_ms}ms` : "—"}
                  </td>
                  <td className="p-4 text-sm text-destructive font-mono max-w-[200px] truncate">
                    {log.error_message || "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExecutionLogTable;
