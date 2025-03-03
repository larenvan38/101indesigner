
import { Briefcase, FileText, MessageSquare, Bell, CreditCard, User, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HoverTooltip } from "./ui/hover-tooltip";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

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

export const AuthenticatedNav = () => {
  const navigate = useNavigate();
  const [showWithdrawField, setShowWithdrawField] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "">("");
  const [showPaymentField, setShowPaymentField] = useState(false);
  const [creditAmount, setCreditAmount] = useState("");
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(false);

  const handleWithdrawSubmit = () => {
    // Process withdrawal
    setWithdrawalSuccess(true);
    setShowWithdrawField(false);
    toast.success("Withdrawal request submitted");
  };

  const handlePurchaseSubmit = () => {
    // Process purchase
    setShowPaymentField(false);
    toast.success("Purchase successful");
  };

  return (
    <div className="flex items-center space-x-6">
      <Link to="/applied-jobs" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2 flex items-center gap-2 transition-colors">
        <Briefcase className="w-5 h-5" />
        <span className="text-sm">Applied Jobs</span>
      </Link>

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

      <Link to="/chats" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2 flex items-center gap-2 transition-colors">
        <MessageSquare className="w-5 h-5" />
        <span className="text-sm">Chats</span>
      </Link>

      <Link to="/notifications" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2">
        <Bell className="w-5 h-5" />
      </Link>

      <HoverTooltip
        content={
          <div className="w-64 p-4">
            <h4 className="font-semibold mb-3">Credits</h4>
            <div className="mt-2">
              <p className="font-medium">Credits: xxx</p>
              
              {!showWithdrawField && !showPaymentField && !withdrawalSuccess && (
                <div className="flex gap-2 mt-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-1/2 bg-black text-white hover:bg-black/90"
                    onClick={() => setShowPaymentField(true)}
                  >
                    Purchase
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-1/2"
                    onClick={() => setShowWithdrawField(true)}
                  >
                    Withdraw
                  </Button>
                </div>
              )}
              
              {showWithdrawField && (
                <div className="mt-3 space-y-3">
                  <div>
                    <label className="block text-xs mb-1">Amount to withdraw</label>
                    <input 
                      type="number" 
                      className="w-full border rounded p-2 text-sm" 
                      placeholder="Enter amount"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                    />
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full" 
                    onClick={handleWithdrawSubmit}
                  >
                    Done
                  </Button>
                </div>
              )}
              
              {withdrawalSuccess && (
                <div className="mt-3 p-2 bg-green-50 border border-green-100 rounded text-sm">
                  Please check your email to see your withdrawal status.
                </div>
              )}
              
              {showPaymentField && (
                <div className="mt-3 space-y-3">
                  <div>
                    <label className="block text-xs mb-1">Amount to purchase</label>
                    <input 
                      type="number" 
                      className="w-full border rounded p-2 text-sm" 
                      placeholder="Enter amount"
                      value={creditAmount}
                      onChange={(e) => setCreditAmount(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs mb-1">Payment Method</label>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={paymentMethod === "upi" ? "default" : "outline"} 
                        className="flex-1"
                        onClick={() => setPaymentMethod("upi")}
                      >
                        UPI
                      </Button>
                      <Button 
                        size="sm" 
                        variant={paymentMethod === "card" ? "default" : "outline"} 
                        className="flex-1"
                        onClick={() => setPaymentMethod("card")}
                      >
                        Card
                      </Button>
                    </div>
                  </div>
                  
                  {paymentMethod === "upi" && (
                    <div className="flex justify-center">
                      <div className="bg-gray-200 h-24 w-24 flex items-center justify-center rounded">
                        <span className="text-xs">QR Code</span>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === "card" && (
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        className="w-full border rounded p-2 text-sm" 
                        placeholder="Card Number"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input 
                          type="text" 
                          className="border rounded p-2 text-sm" 
                          placeholder="MM/YY"
                        />
                        <input 
                          type="text" 
                          className="border rounded p-2 text-sm" 
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod !== "" && (
                    <Button 
                      size="sm" 
                      className="w-full" 
                      onClick={handlePurchaseSubmit}
                    >
                      {paymentMethod === "card" ? "Continue" : "Done"}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        }
      >
        <Link to="/credits" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2 flex items-center gap-2 transition-colors">
          <CreditCard className="w-5 h-5" />
          <span className="text-sm">Credits</span>
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
        <Link to="/profile" className="text-gray-700 hover:text-primary hover:bg-[#E0F5F1] rounded-md p-2">
          <User className="w-5 h-5" />
        </Link>
      </HoverTooltip>
    </div>
  );
};
