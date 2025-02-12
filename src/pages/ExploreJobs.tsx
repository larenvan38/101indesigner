
import { motion } from "framer-motion";
import { ArrowLeftIcon, BriefcaseIcon, SearchIcon, StarIcon } from "lucide-react";
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
            <div className="flex items-center gap-6">
              <Link to="/chat" className="text-gray-600 hover:text-gray-900">Chat</Link>
              <Link to="/credits" className="text-gray-600 hover:text-gray-900">Credits</Link>
              <button className="button-primary">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-center mb-6">Featured Design Opportunities</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="tag bg-primary text-white">All Jobs</button>
              <button className="tag">Full-time</button>
              <button className="tag">Freelance</button>
              <button className="tag">Remote</button>
              <button className="tag">Office</button>
              <button className="tag">Fixed Salary</button>
              <button className="tag">Negotiable</button>
            </div>
          </div>

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
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Verified Agency</span>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium ml-1">4.8</span>
                      </div>
                    </div>
                    <h3 className="mb-2">UI/UX Designer for E-commerce App</h3>
                    <p className="text-gray-600 mb-4">
                      Seeking art-focused designer for thumbnail design and brand visuals.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>Posted 2 days ago</span>
                      <span>•</span>
                      <span>Status: In Progress</span>
                    </div>
                  </div>
                  <BriefcaseIcon className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="tag">Full-time</span>
                  <span className="tag">Remote</span>
                  <span className="tag">Fixed Salary: ₹40,000</span>
                </div>
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-medium">Required Skills:</span>
                        <div className="flex gap-2 mt-1">
                          <span className="bg-accent/50 px-2 py-1 rounded-full text-xs">Thumbnail Design</span>
                          <span className="bg-accent/50 px-2 py-1 rounded-full text-xs">Brand Design</span>
                        </div>
                      </div>
                      <button className="button-primary py-2">View Assignment</button>
                    </div>
                    <div className="text-sm text-gray-600">
                      Submission Fee: ₹29
                    </div>
                  </div>
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
