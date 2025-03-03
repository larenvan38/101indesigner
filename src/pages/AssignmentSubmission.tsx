
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { motion } from "framer-motion";
import { AuthenticatedNav } from "@/components/AuthenticatedNav";
import { Button } from "@/components/ui/button";

const AssignmentSubmission = () => {
  const navigate = useNavigate();
  const [assignmentLink, setAssignmentLink] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credits, setCredits] = useState(150); // Mock credits value
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Start countdown
    setCountdown(2);
  };
  
  useEffect(() => {
    let timer: number;
    if (countdown > 0) {
      timer = window.setTimeout(() => setCountdown(countdown - 0.1), 100);
    } else if (isSubmitting && countdown <= 0) {
      // Submit was completed
      navigate("/authenticated-explore-jobs");
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, isSubmitting, navigate]);
  
  const handleUndo = () => {
    setIsSubmitting(false);
    setCountdown(0);
  };

  const handlePurchaseCredits = () => {
    navigate("/credits");
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/authenticated-explore-jobs" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <Link to="/" className="font-display text-2xl font-bold">INDesigner</Link>
            </div>
            <AuthenticatedNav />
          </div>
        </div>
      </nav>

      <main className="section-container pt-24 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Assignment Submission</h1>
            <p className="text-gray-600">
              Submit your assignment for the selected job position
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Credits:</label>
                <div className="flex items-center justify-between bg-white rounded-md p-3">
                  <span className="text-sm font-medium">{credits} credits available</span>
                  <Button variant="outline" size="sm" onClick={handlePurchaseCredits}>
                    Purchase
                  </Button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Assignment link:</label>
                <input
                  type="url"
                  className="input-field w-full"
                  value={assignmentLink}
                  onChange={(e) => setAssignmentLink(e.target.value)}
                  placeholder="https://example.com/my-assignment"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Note: ensure link is valid and accessible to others</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Name:</label>
                <input
                  type="text"
                  className="input-field w-full"
                  value="Default filled"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Portfolio:</label>
                <input
                  type="text"
                  className="input-field w-full"
                  value="Default filled"
                  disabled
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Resume:</label>
                <input
                  type="text"
                  className="input-field w-full"
                  value="Default filled"
                  disabled
                />
              </div>
              
              {!isSubmitting ? (
                <Button type="submit" className="w-full py-6">
                  Submit
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(1 - countdown/2) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{countdown.toFixed(1)} countdown</span>
                    <Button 
                      variant="outline" 
                      type="button" 
                      onClick={handleUndo}
                    >
                      Undo
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AssignmentSubmission;
