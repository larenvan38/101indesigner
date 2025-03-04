
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticatedNav } from "@/components/authenticated-nav";
import { ProfileCompletionModal } from "@/components/ProfileCompletionModal";
import { ArrowLeftIcon, BriefcaseIcon, UsersIcon } from "lucide-react";

const SignedInPage = () => {
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(true);
  
  useEffect(() => {
    // Show the modal when the component mounts
    setShowProfileModal(true);
  }, []);

  const handleHireDesigner = () => {
    navigate("/post-design-task");
  };

  const handleFindDesignJobs = () => {
    navigate("/authenticated-explore-jobs");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <ProfileCompletionModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />
      
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <Link to="/" className="font-display text-2xl font-bold">INDesigner</Link>
            </div>
            <AuthenticatedNav />
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            Welcome Back
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Design Journey Starts Here
          </h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Connect with top design talent or find exciting design opportunities tailored to your skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="feature-card"
            >
              <UsersIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
              <h2 className="text-2xl font-bold mb-4">Hire Designers</h2>
              <p className="text-gray-600 mb-6">
                Post design assignments and find the perfect designer for your project.
              </p>
              <Button onClick={handleHireDesigner} size="lg" className="w-full">
                Post a Design Assignment
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="feature-card"
            >
              <BriefcaseIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
              <h2 className="text-2xl font-bold mb-4">Find Design Jobs</h2>
              <p className="text-gray-600 mb-6">
                Explore design assignments and showcase your skills to potential clients.
              </p>
              <Button onClick={handleFindDesignJobs} size="lg" variant="outline" className="w-full">
                Explore Design Assignments
              </Button>
            </motion.div>
          </div>
          
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 mb-24 text-center"
          >
            <h2 className="font-display text-3xl font-bold mb-8">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="font-display text-xl font-bold">1</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Complete Your Profile</h3>
                <p className="text-gray-600">Make sure your profile showcases your skills and experience.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="font-display text-xl font-bold">2</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Choose Your Path</h3>
                <p className="text-gray-600">Decide whether you want to hire talent or find work.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="font-display text-xl font-bold">3</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">Start Connecting</h3>
                <p className="text-gray-600">Begin your journey in the world of professional design.</p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
};

export default SignedInPage;
