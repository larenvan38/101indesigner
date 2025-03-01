
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SecurityDepositSection } from "@/components/post-design/SecurityDepositSection";
import { ProfileSection } from "@/components/post-design/ProfileSection";
import { JobDetailsForm } from "@/components/post-design/JobDetailsForm";

const StartHiring = () => {
  const navigate = useNavigate();
  const [workType, setWorkType] = useState("");
  const [numJobs, setNumJobs] = useState<number>(1);
  const [salaryType, setSalaryType] = useState("");
  const [profileType, setProfileType] = useState("");

  const handleNumJobsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setNumJobs(Math.max(1, value));
  };

  const handleSignInClick = () => {
    // Handle Google sign in here
    navigate('/signed-in');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <h1 className="font-display text-2xl font-bold">INDesigner</h1>
            </div>
            <Button onClick={handleSignInClick} variant="outline">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      <main className="section-container pt-16 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold mb-4">Post Your Design Task</h1>
            <p className="text-gray-600">
              Create a task-based job posting to find the perfect designer.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <ProfileSection 
              profileType={profileType}
              setProfileType={setProfileType}
              isAuthenticated={false}
            />

            <div className="feature-card">
              <JobDetailsForm
                workType={workType}
                setWorkType={setWorkType}
                numJobs={numJobs}
                handleNumJobsChange={handleNumJobsChange}
                salaryType={salaryType}
                setSalaryType={setSalaryType}
              />
            </div>

            <SecurityDepositSection numJobs={numJobs} />

            <div className="space-y-4">
              <button 
                type="button" 
                onClick={handleSignInClick} 
                className="button-primary w-full text-lg py-3"
              >
                Sign In to Continue
              </button>
              <p className="text-gray-600 text-center text-sm mt-6">
                After we have approved your job posting, you can pay through Your Posts section
              </p>
            </div>
          </motion.form>
        </div>
      </main>
    </div>
  );
};

export default StartHiring;
