
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/jobs/JobCard";
import { JobFilters } from "@/components/jobs/JobFilters";
import { SearchBar } from "@/components/jobs/SearchBar";
import { jobsData } from "@/data/jobsData";

const ExploreJobs = () => {
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSignInClick = () => {
    // In a real app, this would trigger a sign-in flow
    setShowSignInPrompt(true);
  };

  const handleSubmitAssignment = () => {
    setShowSignInPrompt(true);
  };

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
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <h1 className="font-display text-2xl font-bold">INDesigner</h1>
            </div>
            <Button onClick={handleSignInClick} variant="outline">
              Sign In
            </Button>
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
                onSubmitAssignment={handleSubmitAssignment}
              />
            ))}
          </motion.div>
        </div>
      </main>

      <Dialog open={showSignInPrompt} onOpenChange={setShowSignInPrompt}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Sign In Required</h3>
            <p className="text-gray-600 mb-4">
              Please sign in to submit your assignment or explore more jobs.
            </p>
            <Link to="/" className="button-primary w-full inline-block text-center">
              Sign In
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExploreJobs;
