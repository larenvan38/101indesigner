
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticatedNav } from "@/components/authenticated-nav";
import { ProfileCompletionModal } from "@/components/ProfileCompletionModal";
import { ArrowLeftIcon, BriefcaseIcon, UsersIcon, StarIcon, ShieldCheckIcon, SparklesIcon, CreditCardIcon } from "lucide-react";
import { ViewToggle } from "@/components/home/ViewToggle";

const SignedInPage = () => {
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(true);
  const [currentView, setCurrentView] = useState<'jobs' | 'employers'>('jobs');
  
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
          {/* View Toggle Buttons */}
          <ViewToggle 
            currentView={currentView} 
            onViewChange={setCurrentView} 
          />

          {/* Dynamic Content based on selected view */}
          <div className="overflow-hidden mt-16">
            <AnimatePresence mode="wait">
              {currentView === 'jobs' ? (
                <motion.div
                  key="jobs"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium">
                    Welcome Back Designer
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Connect with Top Design Opportunities
                  </h1>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A task-based job portal where serious designers meet quality opportunities. Show your skills, not just your resume.
                  </p>

                  <Button onClick={handleFindDesignJobs} size="lg" className="px-12 py-6 text-base">
                    Explore Jobs
                  </Button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
                    <div className="feature-card">
                      <BriefcaseIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
                      <h3 className="mb-3">Task-Based Hiring</h3>
                      <p className="text-gray-600">Show your skills through real design tasks, not just resumes.</p>
                    </div>
                    <div className="feature-card">
                      <UsersIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
                      <h3 className="mb-3">Quality Candidates</h3>
                      <p className="text-gray-600">Submission fee ensures only serious designers apply.</p>
                    </div>
                    <div className="feature-card">
                      <StarIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
                      <h3 className="mb-3">Verified Employers</h3>
                      <p className="text-gray-600">Anti-fraud deposit system for secure hiring process.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="employers"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium">
                    Welcome Back Employer
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Find Top Design Talent
                  </h1>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Connect with pre-screened designers committed to delivering quality work through our task-based hiring platform.
                  </p>

                  <Button onClick={handleHireDesigner} size="lg" className="px-12 py-6 text-base">
                    Start Hiring Now
                  </Button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
                    <div className="feature-card">
                      <ShieldCheckIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
                      <h3 className="mb-3">Verified Candidates</h3>
                      <p className="text-gray-600">Every applicant is pre-screened and committed with a submission fee.</p>
                    </div>
                    <div className="feature-card">
                      <SparklesIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
                      <h3 className="mb-3">Task-Based Selection</h3>
                      <p className="text-gray-600">Evaluate designers based on their actual work, not just their portfolio.</p>
                    </div>
                    <div className="feature-card">
                      <CreditCardIcon className="w-16 h-16 text-primary mb-6 mx-auto" />
                      <h3 className="mb-3">Safe Hiring</h3>
                      <p className="text-gray-600">Refundable ₹2500 deposit ensures a secure hiring process.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Keep the current "How It Works" section */}
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
