
import { CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { HoverTooltip } from "../ui/hover-tooltip";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const CreditsTooltip = () => {
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
  );
};
