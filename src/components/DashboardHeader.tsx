import { Zap, LogOut, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  email?: string;
  onSignOut: () => void;
  onCreateWorkflow: () => void;
}

const DashboardHeader = ({ email, onSignOut, onCreateWorkflow }: DashboardHeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 glow-primary">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="font-mono text-lg font-bold text-foreground">FlowForge</span>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={onCreateWorkflow} size="sm" className="gradient-primary text-primary-foreground font-mono gap-2">
            <Plus className="h-4 w-4" />
            New Workflow
          </Button>
          <span className="hidden sm:block text-sm text-muted-foreground font-mono">{email}</span>
          <Button variant="ghost" size="icon" onClick={onSignOut} className="text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
