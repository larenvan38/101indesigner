
import { motion } from "framer-motion";
import { ArrowLeftIcon, CheckCircle2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const StartHiring = () => {
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
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
              <Link to="/chat" className="text-gray-600 hover:text-gray-900">Chat</Link>
              <button className="button-primary">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="mb-4">Post Your Design Task</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create a task-based job posting to find the perfect designer. Free to post, pay only when you're ready to hire.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="feature-card">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Senior UI/UX Designer"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Type *</label>
                  <select className="input-field" required>
                    <option value="">Select job type</option>
                    <option value="full-time">Full-time</option>
                    <option value="remote">Remote</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City, State"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Design Task Description * (75 words max)</label>
                  <textarea
                    rows={4}
                    required
                    maxLength={300}
                    placeholder="Describe the design task candidates need to complete..."
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sample Work Links</label>
                  <input
                    type="url"
                    placeholder="Figma, Dribbble, or Behance links"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assignment Link *</label>
                  <input
                    type="url"
                    required
                    placeholder="Link to the design task details"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Salary Range</label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min (₹)"
                      className="input-field"
                    />
                    <input
                      type="number"
                      placeholder="Max (₹)"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="mb-4">Security Deposit</h3>
              <p className="text-gray-600 mb-6">
                A refundable deposit of ₹2,500 per hire is required to ensure a safe hiring process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Anti-fraud Protection</h4>
                    <p className="text-gray-600 text-sm">
                      75% of the deposit (₹1,875) will be refunded after successful hiring verification.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Quality Assurance</h4>
                    <p className="text-gray-600 text-sm">
                      We verify all job posts to maintain platform quality and protect designers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="button-primary w-full">
              Post Job (Free)
            </button>
          </motion.form>
        </div>
      </main>
    </div>
  );
};

export default StartHiring;
