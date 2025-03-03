import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExploreJobs from "./pages/ExploreJobs";
import StartHiring from "./pages/StartHiring";
import NotFound from "./pages/NotFound";
import YourPostsPage from "./pages/YourPostsPage";
import SignedInPage from "./pages/SignedInPage";
import AuthenticatedExploreJobs from "./pages/AuthenticatedExploreJobs";
import PostDesignTask from "./pages/PostDesignTask";
import EmployerDashboard from "./pages/EmployerDashboard";
import AssignmentSubmission from "./pages/AssignmentSubmission";
import ViewingAssignment from "./pages/ViewingAssignment";
import ProfileEditPage from "./pages/ProfileEditPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signed-in" element={<SignedInPage />} />
          <Route path="/explore-jobs" element={<ExploreJobs />} />
          <Route path="/authenticated-explore-jobs" element={<AuthenticatedExploreJobs />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/post-design-task" element={<PostDesignTask />} />
          <Route path="/start-hiring" element={<StartHiring />} />
          <Route path="/your-posts" element={<YourPostsPage />} />
          <Route path="/assignment-submission" element={<AssignmentSubmission />} />
          <Route path="/viewing-assignment" element={<ViewingAssignment />} />
          <Route path="/profile-edit" element={<ProfileEditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
