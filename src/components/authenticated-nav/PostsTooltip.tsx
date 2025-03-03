
import { FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HoverTooltip } from "../ui/hover-tooltip";
import { Button } from "../ui/button";

// Mock data for Your Posts tooltip
const mockPostsData = [
  {
    id: 1,
    title: "Post 1",
    date: "2024-03-20",
    status: "Hired",
    postStatus: "Approved",
    refundStatus: "Completed",
    paymentStatus: "Paid"
  },
  {
    id: 2,
    title: "Post 2",
    date: "2024-03-21",
    status: "Hired",
    postStatus: "Approved",
    refundStatus: "Completed",
    paymentStatus: "Paid"
  }
];

export const PostsTooltip = () => {
  const navigate = useNavigate();

  return (
    <HoverTooltip
      content={
        <div className="w-[460px] p-4 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-lg">Your Posts</h4>
            <Button 
              size="sm" 
              variant="outline" 
              className="hover:bg-[#E0F5F1]"
              onClick={() => navigate("/your-posts")}
            >
              Open Further
            </Button>
          </div>
          
          <div className="space-y-4">
            {mockPostsData.map(post => (
              <div key={post.id} className="bg-[#F1F0F8] rounded-lg p-4 mb-3">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-medium">{post.title}</h5>
                  <span className="text-sm text-gray-600">{post.date}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span>Status: {post.status}</span>
                  </div>
                  <div className="text-right">
                    <span>Refund status: {post.refundStatus}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">
                    Post status: {post.postStatus}
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">
                    {post.paymentStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <Link to="/your-posts" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2 flex items-center gap-2 transition-colors">
        <FileText className="w-5 h-5" />
        <span className="text-sm">Your Posts</span>
      </Link>
    </HoverTooltip>
  );
};
