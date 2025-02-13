
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface SignInDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
}

export function SignInDialog({ open, onOpenChange, onContinue }: SignInDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In Successful</DialogTitle>
          <DialogDescription>
            You have successfully signed in with Google
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <DialogFooter>
          <Button onClick={onContinue} className="w-full">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
