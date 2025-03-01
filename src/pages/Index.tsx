
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SignInDialog } from "@/components/SignInDialog";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/home/Header";
import { ViewToggle } from "@/components/home/ViewToggle";
import { JobsView } from "@/components/home/JobsView";
import { EmployersView } from "@/components/home/EmployersView";

const Index = () => {
  const [currentView, setCurrentView] = useState<'jobs' | 'employers'>('jobs');
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setIsSignInDialogOpen(true);
  };

  const handleContinue = () => {
    setIsSignInDialogOpen(false);
    setIsAuthenticated(true);
    navigate('/signed-in');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <Header 
        isAuthenticated={isAuthenticated} 
        onSignInClick={handleSignInClick} 
      />

      <SignInDialog 
        open={isSignInDialogOpen} 
        onOpenChange={setIsSignInDialogOpen}
        onContinue={handleContinue}
      />

      <main className="section-container pt-32">
        <ViewToggle 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            {currentView === 'jobs' ? (
              <JobsView isAuthenticated={isAuthenticated} />
            ) : (
              <EmployersView />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Index;
