import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateWorkflowDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { name: string; description: string; trigger_type: string }) => void;
}

const CreateWorkflowDialog = ({ open, onOpenChange, onSubmit }: CreateWorkflowDialogProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [triggerType, setTriggerType] = useState("manual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, trigger_type: triggerType });
    setName("");
    setDescription("");
    setTriggerType("manual");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono text-foreground">New Workflow</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Workflow name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-muted border-border font-mono"
          />
          <Textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-muted border-border font-mono resize-none"
            rows={3}
          />
          <Select value={triggerType} onValueChange={setTriggerType}>
            <SelectTrigger className="bg-muted border-border font-mono">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="manual">Manual Trigger</SelectItem>
              <SelectItem value="schedule">Scheduled</SelectItem>
              <SelectItem value="webhook">Webhook</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)} className="font-mono">
              Cancel
            </Button>
            <Button type="submit" className="gradient-primary text-primary-foreground font-mono">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkflowDialog;
