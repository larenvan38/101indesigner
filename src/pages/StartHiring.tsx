import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StartHiring = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    // Handle Google sign in here
    navigate('/employer-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeftIcon className="w-6 h-6" />
            </Link>
            <h1 className="font-display text-2xl font-bold">INDesigner</h1>
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="mb-4">Start Hiring Designers</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with talented designers and find the perfect match for your projects.
            </p>
          </motion.div>

          <div className="bg-accent/30 p-8 rounded-xl max-w-md mx-auto text-center">
            <h3 className="text-xl font-display mb-6">Welcome to INDesigner Hiring</h3>
            <div>
              <p className="text-gray-600 mb-6">
                Sign in with your Google account to start posting design tasks and find talented designers.
              </p>
              <Button 
                onClick={handleSignInClick} 
                variant="outline" 
                className="w-full bg-white hover:bg-accent/50 border-gray-200 shadow-sm py-6 text-base font-medium flex items-center justify-center gap-3 transition-all duration-300"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Continue with Google
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartHiring;
