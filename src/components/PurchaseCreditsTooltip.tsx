
import { useState } from "react";
import { HoverTooltip } from "./ui/hover-tooltip";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const PurchaseCreditsTooltip = () => {
  const [showPaymentField, setShowPaymentField] = useState(false);
  const [creditAmount, setCreditAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "">("");

  const handlePurchaseSubmit = () => {
    // Process purchase
    setShowPaymentField(false);
    toast.success("Purchase successful");
  };

  return (
    <HoverTooltip
      content={
        <div className="w-64 p-4">
          <h4 className="font-semibold mb-3">Purchase Credits</h4>
          
          {!showPaymentField ? (
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-black text-white hover:bg-black/90"
              onClick={() => setShowPaymentField(true)}
            >
              Purchase Credits
            </Button>
          ) : (
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
      }
    >
      <Button 
        variant="default" 
        size="sm" 
        className="bg-primary hover:bg-primary/90 text-white"
      >
        Purchase
      </Button>
    </HoverTooltip>
  );
};
