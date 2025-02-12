
import { motion } from "framer-motion";
import { ArrowLeftIcon, CheckCircle2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StartHiring = () => {
  const [workType, setWorkType] = useState("");
  const [numJobs, setNumJobs] = useState<number>(1);
  const [salaryType, setSalaryType] = useState("");
  const [profileType, setProfileType] = useState("");

  const handleGoogleSignIn = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleNumJobsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setNumJobs(Math.max(1, value)); // Ensure minimum of 1 job
  };

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
              Create a task-based job posting to find the perfect designer.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="feature-card">
              <h3 className="mb-6">Step 1: Sign in with Google</h3>
              <p className="text-gray-600 mb-8">
                To ensure the quality of job postings and verify your identity, please sign in with your Google account.
              </p>
              <button 
                onClick={handleGoogleSignIn}
                className="button-primary w-full flex items-center justify-center gap-2 mb-8"
              >
                Sign in with Google
              </button>

              <h3 className="mb-6">What Describes You Perfectly?</h3>
              <div className="mb-8">
                <Select value={profileType} onValueChange={setProfileType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your profile type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Use your startup email</SelectItem>
                    <SelectItem value="mnc">Use your company email</SelectItem>
                    <SelectItem value="agency">Use your agency email</SelectItem>
                    <SelectItem value="individual">Use your YouTube/Instagram email</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-accent/30 p-4 rounded-lg mb-8">
                <p className="text-sm">
                  To verify your identity, send an email with subject line "ERHB4" to post@INDesigner.in
                  Your post status will be updated within 6 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Jobs Required *</label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="number"
                      min="1"
                      value={numJobs}
                      onChange={handleNumJobsChange}
                      className="input-field"
                      placeholder="Enter number of jobs"
                    />
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => setNumJobs(1)}
                        className="px-3 py-2 border rounded hover:bg-gray-50"
                      >
                        1
                      </button>
                      <button 
                        type="button"
                        onClick={() => setNumJobs(2)}
                        className="px-3 py-2 border rounded hover:bg-gray-50"
                      >
                        2
                      </button>
                      <button 
                        type="button"
                        onClick={() => setNumJobs(5)}
                        className="px-3 py-2 border rounded hover:bg-gray-50"
                      >
                        5
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Work Type *</label>
                    <div className="flex gap-4">
                      <select 
                        className="input-field flex-1"
                        value={workType}
                        onChange={(e) => setWorkType(e.target.value)}
                      >
                        <option value="">Select work type</option>
                        <option value="full-time">Full-time</option>
                        <option value="freelance">Freelance</option>
                      </select>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="location" value="remote" />
                          Remote
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="location" value="office" />
                          Office
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Salary Structure *</label>
                    <select 
                      className="input-field mb-4"
                      value={salaryType}
                      onChange={(e) => setSalaryType(e.target.value)}
                    >
                      <option value="">Select salary type</option>
                      <option value="fixed">Fixed Salary</option>
                      <option value="negotiable">Negotiable Salary</option>
                    </select>
                    {salaryType === 'fixed' && (
                      <input
                        type="number"
                        placeholder="Enter fixed salary amount (₹)"
                        className="input-field"
                      />
                    )}
                    {salaryType === 'negotiable' && (
                      <input
                        type="number"
                        placeholder="Enter minimum salary amount (₹)"
                        className="input-field"
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">What should candidates know? *</label>
                  <textarea
                    placeholder="Enter art-focused skills (e.g., Thumbnail design, NOT tools like Photoshop)"
                    className="input-field"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Work Description * (75 words max)</label>
                  <textarea
                    rows={4}
                    maxLength={300}
                    placeholder="Describe the work requirements (no AI-generated text)"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sample Work Links *</label>
                  <input
                    type="url"
                    placeholder="Behance, Dribbble links"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Assignment Link *</label>
                  <input
                    type="url"
                    placeholder="Google Drive, Figma links"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
                  <textarea
                    placeholder="Any extra information for candidates"
                    className="input-field"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="mb-4">Security Deposit</h3>
              <div className="bg-accent/30 p-4 rounded-lg mb-6">
                <p className="font-medium">Payable Amount: ₹{numJobs * 2500}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Calculated as ₹2,500 × {numJobs} job{numJobs > 1 ? 's' : ''}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Refund Policy</h4>
                    <p className="text-gray-600 text-sm">
                      75% will be refunded after successfully hiring designers from INDesigner.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Anti-Fraud Protection</h4>
                    <p className="text-gray-600 text-sm">
                      Fake posts will incur non-refundable charges to maintain platform quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="button-primary w-full">
              Submit for Review
            </button>
          </motion.form>
        </div>
      </main>
    </div>
  );
};

export default StartHiring;
