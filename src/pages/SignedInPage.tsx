
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticatedNav } from "@/components/AuthenticatedNav";
import { ProfileCompletionModal } from "@/components/ProfileCompletionModal";
import { ArrowLeftIcon } from "lucide-react";

const SignedInPage = () => {
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(true);
  
  useEffect(() => {
    // Show the modal when the component mounts
    setShowProfileModal(true);
  }, []);

  const handleHireDesigner = () => {
    navigate("/post-design-task");
  };

  const handleFindDesignJobs = () => {
    navigate("/authenticated-explore-jobs");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10">
      <ProfileCompletionModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />
      
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <Link to="/" className="font-display text-2xl font-bold">INDesigner</Link>
            </div>
            <AuthenticatedNav />
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to INDesigner
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with top design talent or find exciting design opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Hire Designers</h2>
              <p className="text-gray-600 mb-6">
                Post design assignments and find the perfect designer for your project.
              </p>
              <Button onClick={handleHireDesigner} size="lg" className="w-full">
                Post a Design Assignment
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold mb-4">Find Design Jobs</h2>
              <p className="text-gray-600 mb-6">
                Explore design assignments and showcase your skills to potential clients.
              </p>
              <Button onClick={handleFindDesignJobs} size="lg" variant="outline" className="w-full">
                Explore Design Assignments
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignedInPage;
