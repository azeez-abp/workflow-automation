import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import DashboardHeader from "@/components/DashboardHeader";
import StatsCards from "@/components/StatsCards";
import WorkflowCard from "@/components/WorkflowCard";
import CreateWorkflowDialog from "@/components/CreateWorkflowDialog";
import ExecutionLogTable from "@/components/ExecutionLogTable";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    setLoadingData(true);
    const [wfRes, logRes] = await Promise.all([
      supabase.from("workflows").select("*").order("created_at", { ascending: false }),
      supabase.from("execution_logs").select("*, workflows(name)").order("started_at", { ascending: false }).limit(20),
    ]);
    if (wfRes.data) setWorkflows(wfRes.data);
    if (logRes.data) setLogs(logRes.data);
    setLoadingData(false);
  };

  const createWorkflow = async (data: { name: string; description: string; trigger_type: string }) => {
    const { error } = await supabase.from("workflows").insert({
      name: data.name,
      description: data.description || null,
      trigger_type: data.trigger_type,
      user_id: user!.id,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Workflow created!");
      setShowCreate(false);
      fetchData();
    }
  };

  const toggleWorkflow = async (id: string, enabled: boolean) => {
    await supabase.from("workflows").update({ is_enabled: enabled }).eq("id", id);
    fetchData();
  };

  const deleteWorkflow = async (id: string) => {
    await supabase.from("workflows").delete().eq("id", id);
    toast.success("Workflow deleted");
    fetchData();
  };

  const runWorkflow = async (id: string) => {
    const startTime = Date.now();
    const { error } = await supabase.from("execution_logs").insert({
      workflow_id: id,
      user_id: user!.id,
      status: "success",
      started_at: new Date().toISOString(),
      completed_at: new Date().toISOString(),
      duration_ms: Math.floor(Math.random() * 2000) + 200,
    });

    if (!error) {
      await supabase
        .from("workflows")
        .update({ last_run_at: new Date().toISOString(), run_count: (workflows.find((w) => w.id === id)?.run_count || 0) + 1 })
        .eq("id", id);
      toast.success("Workflow executed successfully!");
      fetchData();
    }
  };

  if (authLoading || (!user && !authLoading)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader email={user?.email} onSignOut={signOut} onCreateWorkflow={() => setShowCreate(true)} />

      <main className="container py-8 space-y-8">
        <div>
          <h2 className="font-mono text-2xl font-bold text-foreground mb-1">Dashboard</h2>
          <p className="text-muted-foreground text-sm">Manage and monitor your automation workflows</p>
        </div>

        <StatsCards
          totalWorkflows={workflows.length}
          activeWorkflows={workflows.filter((w) => w.is_enabled).length}
          totalRuns={logs.length}
          failedRuns={logs.filter((l) => l.status === "failed").length}
        />

        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-4">Workflows</h3>
          {loadingData ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          ) : workflows.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
              <p className="text-muted-foreground font-mono mb-2">No workflows yet</p>
              <p className="text-sm text-muted-foreground">Create your first workflow to get started</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {workflows.map((wf) => (
                <WorkflowCard key={wf.id} workflow={wf} onToggle={toggleWorkflow} onDelete={deleteWorkflow} onRun={runWorkflow} />
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-mono text-lg font-semibold text-foreground mb-4">Recent Executions</h3>
          <ExecutionLogTable logs={logs} />
        </div>
      </main>

      <CreateWorkflowDialog open={showCreate} onOpenChange={setShowCreate} onSubmit={createWorkflow} />
    </div>
  );
};

export default Index;
