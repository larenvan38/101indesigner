import { motion } from "framer-motion";
import { ArrowLeftIcon, BriefcaseIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreJobs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <h1 className="font-display text-2xl font-bold">INDesigner</h1>
            </div>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-8"
          >
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search design tasks..."
              className="input-field pl-12"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[1, 2, 3].map((job) => (
              <div
                key={job}
                className="feature-card flex flex-col hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-left">
                    <h3 className="mb-2">UI/UX Designer for E-commerce App</h3>
                    <p className="text-gray-600 mb-4">
                      Create a modern and intuitive user interface for our e-commerce platform.
                    </p>
                  </div>
                  <BriefcaseIcon className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="tag">₹40,000 - ₹60,000</span>
                  <span className="tag">Remote</span>
                  <span className="tag">Task-based</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ExploreJobs;
