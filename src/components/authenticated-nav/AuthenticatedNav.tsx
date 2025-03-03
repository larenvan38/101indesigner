
import { Link } from "react-router-dom";
import { Briefcase, FileText, MessageSquare, Bell } from "lucide-react";
import { CreditsTooltip } from "./CreditsTooltip";
import { ProfileTooltip } from "./ProfileTooltip";
import { PostsTooltip } from "./PostsTooltip";

export const AuthenticatedNav = () => {
  return (
    <div className="flex items-center space-x-6">
      <Link to="/applied-jobs" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2 flex items-center gap-2 transition-colors">
        <Briefcase className="w-5 h-5" />
        <span className="text-sm">Applied Jobs</span>
      </Link>

      <PostsTooltip />

      <Link to="/chats" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2 flex items-center gap-2 transition-colors">
        <MessageSquare className="w-5 h-5" />
        <span className="text-sm">Chats</span>
      </Link>

      <Link to="/notifications" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2">
        <Bell className="w-5 h-5" />
      </Link>

      <CreditsTooltip />
      <ProfileTooltip />
    </div>
  );
};
