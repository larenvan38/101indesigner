
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticatedNav } from "@/components/AuthenticatedNav";
import { Button } from "@/components/ui/button";

const ViewingAssignment = () => {
  const navigate = useNavigate();
  
  const handleUnderstood = () => {
    navigate("/authenticated-explore-jobs");
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
              <h1 className="font-display text-2xl font-bold">INDesigner</h1>
            </div>
            <AuthenticatedNav />
          </div>
        </div>
      </nav>

      <main className="section-container pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Viewing Assignment</h1>
            <p className="text-gray-600">
              Review the assignment details provided by the employer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 p-8 rounded-lg mb-8"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Assignment Details</h2>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">UI Designer for E-commerce Website</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium">Requirements:</h4>
                      <p>Create a responsive homepage design for an e-commerce platform specializing in handcrafted jewelry.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Skills Required:</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-accent/50 px-2 py-1 rounded-full text-xs">UI Design</span>
                        <span className="bg-accent/50 px-2 py-1 rounded-full text-xs">Responsive Design</span>
                        <span className="bg-accent/50 px-2 py-1 rounded-full text-xs">E-commerce</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Timeline:</h4>
                      <p>3 days from assignment acceptance</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Deliverables:</h4>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Homepage design (desktop & mobile)</li>
                        <li>Design system components</li>
                        <li>Interactive prototype</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Compensation:</h4>
                      <p>₹15,000 - ₹20,000 based on quality and experience</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                    <p className="text-sm text-yellow-800">Note: This assignment requires attention to detail and understanding of modern e-commerce UX patterns. Your submission will be evaluated based on creativity, usability, and adherence to requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleUnderstood} 
              size="lg"
              className="px-8"
            >
              I Understood The Assignment
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewingAssignment;
