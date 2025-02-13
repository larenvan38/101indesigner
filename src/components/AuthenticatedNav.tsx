
import { BriefcaseIcon, MessageSquare, Bell, CreditCard, User, FileText, List, Award, MessageCircle, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import { useState } from "react";

interface JobPost {
  id: number;
  title: string;
  date: string;
  status: string;
  hired: boolean;
  refundStatus: string;
  paymentStatus: string;
}

export function AuthenticatedNav() {
  const navigate = useNavigate();
  const [jobPosts] = useState<JobPost[]>([
    {
      id: 1,
      title: "Post 1",
      date: "2024-03-20",
      status: "Approved",
      hired: true,
      refundStatus: "Completed",
      paymentStatus: "Paid"
    },
    {
      id: 2,
      title: "Post 2",
      date: "2024-03-21",
      status: "Approved",
      hired: true,
      refundStatus: "Completed",
      paymentStatus: "Paid"
    }
  ]);

  const handleOpenFurther = () => {
    navigate('/your-posts');
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-6">
        <Link to="/applied-jobs">
          <Button variant="ghost" className="flex items-center gap-2">
            <BriefcaseIcon className="w-5 h-5" />
            Applied Jobs
          </Button>
        </Link>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Your Posts
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-96">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Your Posts</h4>
                <Button variant="outline" size="sm" onClick={handleOpenFurther}>
                  Open Further
                </Button>
              </div>
              <div className="space-y-3">
                {jobPosts.map((post) => (
                  <div key={post.id} className="bg-[#F1F0FB] rounded-2xl p-4 space-y-2 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center">
                      <h5 className="font-medium text-lg">{post.title}</h5>
                      <span className="text-sm text-gray-600">{post.date}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-2">
                      <span>Status: {post.hired ? 'Hired' : 'Open'}</span>
                      <span>Refund status: {post.refundStatus}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="bg-white/80 px-4 py-2 rounded-full">
                        Post status: {post.status}
                      </span>
                      <span className="bg-white/80 px-4 py-2 rounded-full">
                        {post.paymentStatus === 'Paid' ? 'Paid' : 'make it live by completing payment'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
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
              <div className="p-2 space-y-2">
                <p>Credits: xxx</p>
                <Button variant="default" size="sm" className="w-full">
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
                <div className="flex justify-between items-center">
                  <p className="font-medium">Profile Details</p>
                  <Button variant="ghost" size="sm">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
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
