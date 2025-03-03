
import { User, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HoverTooltip } from "../ui/hover-tooltip";
import { Button } from "../ui/button";

export const ProfileTooltip = () => {
  const navigate = useNavigate();
  
  return (
    <HoverTooltip
      content={
        <div className="w-64 p-3">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold">Profile Details</h4>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0"
              onClick={() => navigate("/profile-edit")}
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Name:</span> John Doe</p>
            <p><span className="font-medium">Resume:</span> profile.pdf</p>
            <p><span className="font-medium">Portfolio:</span> https://portfolio.com</p>
          </div>
        </div>
      }
    >
      <Link to="/profile-edit" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2">
        <User className="w-5 h-5" />
      </Link>
    </HoverTooltip>
  );
};
