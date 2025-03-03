
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthenticatedNav } from "@/components/AuthenticatedNav";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProfileEditPage = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    mobile: "+1234567890",
    resume: "",
    portfolio: "https://portfolio.com",
    linkedin: "https://linkedin.com/in/john",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/signed-in" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <h1 className="font-display text-2xl font-bold">INDesigner</h1>
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
                  <div className="bg-primary h-3 rounded-full w-3/5"></div>
                </div>
                <p className="text-right text-sm mt-1 text-gray-600">Profile Completion: 60%</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
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
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="input-field w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Resume/CV *</label>
                    <input
                      type="file"
                      name="resume"
                      className="input-field w-full"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Portfolio Link</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="input-field w-full"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="input-field w-full"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Skillsets *</label>
                  <input
                    type="text"
                    name="skills"
                    className="input-field w-full"
                    placeholder="e.g., UI Design, UX Research, Wireframing"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
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
