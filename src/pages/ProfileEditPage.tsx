
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthenticatedNav } from "@/components/authenticated-nav";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProfileEditPage = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    resume: "",
    portfolio: "https://portfolio.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };

  // Calculate profile completion percentage
  const getProfileCompletion = () => {
    // Only name is required for 100% completion
    return formData.name ? 100 : 0;
  };
  
  const completionPercentage = getProfileCompletion();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/signed-in" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <Link to="/" className="font-display text-2xl font-bold">INDesigner</Link>
            </div>
            <AuthenticatedNav />
          </div>
        </div>
      </nav>

      <main className="section-container pt-24 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
            <p className="text-gray-600">
              Update your profile information to 100% completion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: `${completionPercentage}%` }}></div>
                </div>
                <p className="text-right text-sm mt-1 text-gray-600">Profile Completion: {completionPercentage}%</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Resume/CV
                  </label>
                  <input
                    type="file"
                    name="resume"
                    className="input-field w-full"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Portfolio Link
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="input-field w-full"
                    placeholder="https://yourportfolio.com"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    To submit an assignment, you need to include your portfolio.
                  </p>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Save Profile
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProfileEditPage;
