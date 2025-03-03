
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthenticatedNav } from "@/components/AuthenticatedNav";
import { JobCard } from "@/components/jobs/JobCard";
import { JobFilters } from "@/components/jobs/JobFilters";
import { SearchBar } from "@/components/jobs/SearchBar";
import { jobsData } from "@/data/jobsData";
import { useState, useEffect } from "react";
import { ProfileCompletionModal } from "@/components/ProfileCompletionModal";

const AuthenticatedExploreJobs = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    // Show the profile completion modal when the page loads
    const timer = setTimeout(() => {
      setShowProfileModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    // In a real app, this would filter the jobs
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // In a real app, this would search the jobs
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
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

      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          <JobFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          <SearchBar onSearch={handleSearch} />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {jobsData.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                description={job.description}
                postedTime={job.postedTime}
                status={job.status}
                badgeType={job.badgeType}
                badgeText={job.badgeText}
                jobType={job.jobType}
                locationType={job.locationType}
                salaryInfo={job.salaryInfo}
                skills={job.skills}
                submissionFee={job.submissionFee}
                onViewAssignment={() => {}}
                onSubmitAssignment={() => {}}
              />
            ))}
          </motion.div>
        </div>
      </main>

      <ProfileCompletionModal 
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
};

export default AuthenticatedExploreJobs;
