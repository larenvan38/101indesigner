
import { motion } from "framer-motion";
import { ArrowLeftIcon, CheckCircle2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const StartHiring = () => {
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
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl font-bold mb-4">
              Post Your Design Task
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create a task-based job posting to find the perfect designer for your project.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g., UI/UX Designer for Mobile App"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Design Task Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe the design task candidates need to complete..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min (₹)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input
                      type="number"
                      placeholder="Max (₹)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Security Deposit</h3>
              <p className="text-gray-600 mb-6">
                A refundable deposit of ₹2,500 is required to ensure a safe hiring process.
              </p>
              <div className="flex items-start gap-4">
                <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Why do we need a deposit?</h4>
                  <p className="text-gray-600 text-sm">
                    The deposit helps us maintain a high-quality platform and ensures serious employers only.
                    It will be fully refunded once the hiring process is complete.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">
              Continue to Payment
            </button>
          </motion.form>
        </div>
      </main>
    </div>
  );
};

export default StartHiring;
