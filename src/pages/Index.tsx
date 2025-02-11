import { motion } from "framer-motion";
import { BriefcaseIcon, UsersIcon, StarIcon, ShieldCheckIcon, SparklesIcon, CreditCardIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold">INDesigner</h1>
            <div className="space-x-6">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">
              Find Design Jobs
            </button>
            <button className="bg-white border border-gray-200 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all">
              For Employers
            </button>
          </div>
          <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            Design Your Future
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connect with Top Design Opportunities
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            A task-based job portal where serious designers meet quality opportunities. Show your skills, not just your resume.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass-card rounded-xl p-8 hover-lift">
            <BriefcaseIcon className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Task-Based Hiring</h3>
            <p className="text-gray-600">Show your skills through real design tasks, not just resumes.</p>
          </div>
          <div className="glass-card rounded-xl p-8 hover-lift">
            <UsersIcon className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Quality Candidates</h3>
            <p className="text-gray-600">₹29 submission fee ensures only serious designers apply.</p>
          </div>
          <div className="glass-card rounded-xl p-8 hover-lift">
            <StarIcon className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">Verified Employers</h3>
            <p className="text-gray-600">Anti-fraud deposit system for secure hiring process.</p>
          </div>
        </motion.section>

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

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 mb-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              For Employers
            </span>
            <h2 className="font-display text-4xl font-bold mb-6">
              Hire the Best Design Talent
            </h2>
            <p className="text-gray-600 text-lg">
              Skip the resume screening and find exceptional designers through real-world tasks. Our platform ensures you only see submissions from committed professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 hover-lift">
              <ShieldCheckIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Verified Candidates</h3>
              <p className="text-gray-600">Every applicant is pre-screened and committed with a submission fee.</p>
            </div>
            <div className="glass-card rounded-xl p-8 hover-lift">
              <SparklesIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Task-Based Selection</h3>
              <p className="text-gray-600">Evaluate designers based on their actual work, not just their portfolio.</p>
            </div>
            <div className="glass-card rounded-xl p-8 hover-lift">
              <CreditCardIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Safe Hiring</h3>
              <p className="text-gray-600">Refundable ₹2500 deposit ensures a secure hiring process.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">
              Start Hiring Now
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
