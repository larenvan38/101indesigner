
import { motion } from "framer-motion";
import { ShieldCheckIcon, SparklesIcon, CreditCardIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const EmployersView = () => {
  return (
    <motion.div
      key="employers"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <motion.section className="text-center">
        <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
          Find Perfect Fit
        </span>
        <h1 className="mb-6">Hire the Best Design Talent</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Skip the resume screening and find exceptional designers through real-world tasks. Our platform ensures you only see submissions from committed professionals.
        </p>

        <Link 
          to="/start-hiring"
          className="button-primary inline-block mb-20"
        >
          Start Hiring Now
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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

        <HowItWorksForEmployers />
      </motion.section>
    </motion.div>
  );
};

const HowItWorksForEmployers = () => {
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
          <h3 className="font-display text-lg font-semibold mb-2">Post Your Job</h3>
          <p className="text-gray-600">Create a design task and set your requirements with a secure deposit.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
            <span className="font-display text-xl font-bold">2</span>
          </div>
          <h3 className="font-display text-lg font-semibold mb-2">Review Submissions</h3>
          <p className="text-gray-600">Get task solutions from committed designers and evaluate their work.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
            <span className="font-display text-xl font-bold">3</span>
          </div>
          <h3 className="font-display text-lg font-semibold mb-2">Hire the Best</h3>
          <p className="text-gray-600">Choose your preferred candidate and start the collaboration.</p>
        </div>
      </div>
    </motion.section>
  );
};
