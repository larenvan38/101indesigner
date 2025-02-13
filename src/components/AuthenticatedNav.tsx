
import { BriefcaseIcon, MessageSquare, Bell, CreditCard, User, FileText, List, Award, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { useState } from "react";

interface SubmittedResult {
  name: string;
  assignmentLink: string;
  portfolio: string;
  isWinner: boolean;
}

export function AuthenticatedNav() {
  const [showResults, setShowResults] = useState(false);
  const [submittedResults] = useState<SubmittedResult[]>([
    {
      name: "John Doe",
      assignmentLink: "https://example.com/assignment1",
      portfolio: "https://portfolio.com/johndoe",
      isWinner: false
    }
  ]);

  const YourPostsTooltip = () => (
    <div className="w-64 p-2">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">Your Posts</h4>
          <Button variant="outline" size="sm" onClick={() => setShowResults(true)}>
            Open Further
          </Button>
        </div>
        {showResults && (
          <div className="mt-2">
            <div className="flex justify-between gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                Results
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Winners List
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Winner Chats
              </Button>
            </div>
            {showResults && (
              <div className="mt-4 space-y-4">
                {submittedResults.map((result, index) => (
                  <div key={index} className="border p-3 rounded-lg">
                    <p className="font-medium">{result.name}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline">Portfolio</Button>
                      <Button size="sm" variant="outline">Resume</Button>
                      <Button size="sm" variant="outline">Chat</Button>
                      {!result.isWinner && (
                        <Button size="sm" variant="secondary">
                          Make Winner
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <div className="flex items-center gap-6">
        <Link to="/applied-jobs">
          <Button variant="ghost" className="flex items-center gap-2">
            <BriefcaseIcon className="w-5 h-5" />
            Applied Jobs
          </Button>
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Your Posts
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <YourPostsTooltip />
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Chats
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Credits
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="p-2">
                <p>Credits: xxx</p>
                <Button variant="link" className="mt-1 p-0">
                  Purchase now
                </Button>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-2 p-2">
                <p>Name: John Doe</p>
                <p>Mobile: +1234567890</p>
                <p>Email: john@example.com</p>
                <p>Resume: profile.pdf</p>
                <p>Portfolio: https://portfolio.com</p>
                <p>LinkedIn: https://linkedin.com/in/john</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
