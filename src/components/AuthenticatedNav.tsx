
import { Bell, CreditCard, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import { HoverTooltip } from "./ui/hover-tooltip";

export const AuthenticatedNav = () => {
  return (
    <div className="flex items-center space-x-5">
      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Your Applied Jobs</h4>
            <p className="text-xs text-gray-500">
              Track your applications & submissions
            </p>
          </div>
        }
      >
        <Link to="/applied-jobs" className="text-gray-700 hover:text-primary">
          <CreditCard className="w-6 h-6" />
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Your Posts</h4>
            <p className="text-xs text-gray-500">
              Manage your job postings & applications
            </p>
          </div>
        }
      >
        <Link to="/your-posts" className="text-gray-700 hover:text-primary">
          <MessageSquare className="w-6 h-6" />
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Notifications</h4>
            <p className="text-xs text-gray-500">
              Check updates & alerts
            </p>
          </div>
        }
      >
        <Link to="/notifications" className="text-gray-700 hover:text-primary">
          <Bell className="w-6 h-6" />
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Profile</h4>
            <p className="text-xs text-gray-500">
              Manage your account & settings
            </p>
          </div>
        }
      >
        <Link to="/profile" className="text-gray-700 hover:text-primary">
          <User className="w-6 h-6" />
        </Link>
      </HoverTooltip>
    </div>
  );
};
