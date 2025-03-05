
import { User, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HoverTooltip } from "../ui/hover-tooltip";
import { Button } from "../ui/button";

export const ProfileTooltip = () => {
  const navigate = useNavigate();
  // Mock data for profile completion
  const profileData = {
    name: "John Doe",
    resume: "profile.pdf",
    portfolio: "https://portfolio.com"
  };
  
  // Calculate profile completion percentage
  const getProfileCompletion = () => {
    // Only name is required for 100% completion
    return profileData.name ? 100 : 0;
  };
  
  const completionPercentage = getProfileCompletion();
  
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
          
          {/* Profile completion progress bar */}
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-right text-xs mt-1 text-gray-600">Profile Completion: {completionPercentage}%</p>
          </div>
          
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Name:</span> {profileData.name}</p>
            <p><span className="font-medium">Resume:</span> {profileData.resume}</p>
            <p><span className="font-medium">Portfolio:</span> {profileData.portfolio}</p>
          </div>
          
          <p className="mt-3 text-xs text-gray-600 border-t pt-2">
            To submit an assignment, you need to include your portfolio.
          </p>
        </div>
      }
    >
      <Link to="/profile-edit" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2">
        <User className="w-5 h-5" />
      </Link>
    </HoverTooltip>
  );
};
