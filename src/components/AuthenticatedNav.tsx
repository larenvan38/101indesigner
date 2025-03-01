
import { Briefcase, FileText, MessageSquare, Bell, CreditCard, User, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { HoverTooltip } from "./ui/hover-tooltip";
import { Button } from "./ui/button";

export const AuthenticatedNav = () => {
  return (
    <div className="flex items-center space-x-6">
      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Applied Jobs</h4>
          </div>
        }
      >
        <Link to="/applied-jobs" className="text-gray-700 hover:text-primary hover:bg-[#F2FCE2] rounded-md p-2 flex flex-col items-center transition-colors">
          <Briefcase className="w-6 h-6" />
          <span className="text-xs mt-1">Applied Jobs</span>
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Your Posts</h4>
            <Button 
              size="sm" 
              variant="outline" 
              className="mt-2 w-full"
              onClick={() => window.location.href = "/your-posts"}
            >
              Open Further
            </Button>
          </div>
        }
      >
        <Link to="/your-posts" className="text-gray-700 hover:text-primary hover:bg-[#F2FCE2] rounded-md p-2 flex flex-col items-center transition-colors">
          <FileText className="w-6 h-6" />
          <span className="text-xs mt-1">Your Posts</span>
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Chats</h4>
          </div>
        }
      >
        <Link to="/chats" className="text-gray-700 hover:text-primary hover:bg-[#F2FCE2] rounded-md p-2 flex flex-col items-center transition-colors">
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1">Chats</span>
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Notifications</h4>
          </div>
        }
      >
        <Link to="/notifications" className="text-gray-700 hover:text-primary hover:bg-[#F2FCE2] rounded-md p-2">
          <Bell className="w-6 h-6" />
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-48 p-2">
            <h4 className="font-semibold mb-1">Credits</h4>
            <div className="mt-2">
              <p className="font-medium">Credits: xxx</p>
              <Button 
                variant="default" 
                size="sm" 
                className="mt-2 w-full bg-black text-white hover:bg-black/90"
              >
                Purchase now
              </Button>
            </div>
          </div>
        }
      >
        <Link to="/credits" className="text-gray-700 hover:text-primary hover:bg-[#F2FCE2] rounded-md p-2 flex flex-col items-center transition-colors">
          <CreditCard className="w-6 h-6" />
          <span className="text-xs mt-1">Credits</span>
        </Link>
      </HoverTooltip>

      <HoverTooltip
        content={
          <div className="w-64 p-3">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">Profile Details</h4>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Name:</span> John Doe</p>
              <p><span className="font-medium">Mobile:</span> +1234567890</p>
              <p><span className="font-medium">Email:</span> john@example.com</p>
              <p><span className="font-medium">Resume:</span> profile.pdf</p>
              <p><span className="font-medium">Portfolio:</span> https://portfolio.com</p>
              <p><span className="font-medium">LinkedIn:</span> https://linkedin.com/in/john</p>
            </div>
          </div>
        }
      >
        <Link to="/profile" className="text-gray-700 hover:text-primary hover:bg-[#F2FCE2] rounded-md p-2">
          <User className="w-6 h-6" />
        </Link>
      </HoverTooltip>
    </div>
  );
};
