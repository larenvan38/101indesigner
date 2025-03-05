
import { motion } from "framer-motion";
import { BriefcaseIcon, UsersIcon, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { TextAnimate } from "@/components/ui/text-animate";

interface JobsViewProps {
  isAuthenticated: boolean;
}

export const JobsView = ({ isAuthenticated }: JobsViewProps) => {
  return (
    <motion.div
      key="jobs"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <motion.section className="text-center">
        <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
          Design Your Future
        </span>
        <TextAnimate 
          as="h1" 
          className="mb-6" 
          animation="blurInUp" 
          by="word"
          once={true}
        >
          Connect with Top Design Opportunities
        </TextAnimate>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          A task-based job portal where serious designers meet quality opportunities. Show your skills, not just your resume.
        </p>

        <Link 
          to="/explore-jobs" 
          state={{ authenticated: isAuthenticated }}
          className="button-primary inline-block mb-20"
        >
          Explore Jobs
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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

        <HowItWorks />
      </motion.section>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-24 mb-24 text-center"
    >
      <h2 className="font-display text-3xl font-bold mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
            <span className="font-display text-xl font-bold">1</span>
          </div>
          <h3 className="font-display text-lg font-semibold mb-2">Find Opportunities</h3>
          <p className="text-gray-600">Browse through curated design tasks from verified employers.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
            <span className="font-display text-xl font-bold">2</span>
          </div>
          <h3 className="font-display text-lg font-semibold mb-2">Submit Your Work</h3>
          <p className="text-gray-600">Complete design tasks and showcase your skills directly.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
            <span className="font-display text-xl font-bold">3</span>
          </div>
          <h3 className="font-display text-lg font-semibold mb-2">Get Hired</h3>
          <p className="text-gray-600">Connect with employers and secure your next opportunity.</p>
        </div>
      </div>
    </motion.section>
  );
};
