
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface ProfileCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileCompletionModal = ({ isOpen, onClose }: ProfileCompletionModalProps) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;
  
  const handleDoItNow = () => {
    navigate("/profile-edit");
    onClose();
  };
  
  const handleSkip = () => {
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Complete Your Profile</h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="mb-6">
          Please complete your profile to 100% before submitting or posting an assignment.
        </p>
        
        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={handleSkip}>
            Skip For Now
          </Button>
          <Button onClick={handleDoItNow}>
            Do It Now
          </Button>
        </div>
      </div>
    </div>
  );
};
