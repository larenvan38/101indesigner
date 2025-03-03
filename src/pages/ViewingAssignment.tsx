
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
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
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
            className="mb-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b">Assignment Details</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">UI Designer for E-commerce Website</h3>
                  <p className="text-primary/70 mt-1">Posted by: Acme Corporation</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Requirements</h4>
                      <p className="text-gray-700 mt-1">Create a responsive homepage design for an e-commerce platform specializing in handcrafted jewelry.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Skills Required</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-accent px-3 py-1 rounded-full text-xs font-medium">UI Design</span>
                        <span className="bg-accent px-3 py-1 rounded-full text-xs font-medium">Responsive Design</span>
                        <span className="bg-accent px-3 py-1 rounded-full text-xs font-medium">E-commerce</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Timeline</h4>
                      <p className="text-gray-700 mt-1">3 days from assignment acceptance</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Deliverables</h4>
                      <ul className="list-disc pl-5 mt-1 text-gray-700">
                        <li>Homepage design (desktop & mobile)</li>
                        <li>Design system components</li>
                        <li>Interactive prototype</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">Compensation</h4>
                      <p className="text-gray-700 mt-1 font-medium">₹15,000 - ₹20,000 based on quality and experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                  <p className="text-yellow-800 font-medium mb-1">Important Note</p>
                  <p className="text-sm text-yellow-700">This assignment requires attention to detail and understanding of modern e-commerce UX patterns. Your submission will be evaluated based on creativity, usability, and adherence to requirements.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleUnderstood} 
              size="lg"
              className="px-12 py-6 text-lg"
            >
              I Understand The Assignment
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewingAssignment;
