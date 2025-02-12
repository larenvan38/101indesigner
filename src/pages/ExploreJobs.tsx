
import { motion } from "framer-motion";
import { ArrowLeftIcon, BriefcaseIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ExploreJobs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
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

      <main className="container mx-auto px-6 pt-32">
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
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                className="glass-card rounded-xl p-6 hover-lift cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      UI/UX Designer for E-commerce App
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create a modern and intuitive user interface for our e-commerce platform.
                    </p>
                  </div>
                  <BriefcaseIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-accent px-3 py-1 rounded-full text-sm">
                    ₹40,000 - ₹60,000
                  </span>
                  <span className="bg-accent px-3 py-1 rounded-full text-sm">
                    Remote
                  </span>
                  <span className="bg-accent px-3 py-1 rounded-full text-sm">
                    Task-based
                  </span>
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
