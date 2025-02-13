
import { BriefcaseIcon, MessageSquare, Bell, CreditCard, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function AuthenticatedNav() {
  return (
    <div className="flex items-center gap-6">
      <Link to="/applied-jobs">
        <Button variant="ghost" className="flex items-center gap-2">
          <BriefcaseIcon className="w-5 h-5" />
          Applied Jobs
        </Button>
      </Link>
      <Link to="/your-posts">
        <Button variant="ghost" className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Your Posts
        </Button>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <MessageSquare className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <CreditCard className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
