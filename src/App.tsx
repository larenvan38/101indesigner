
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore-jobs" element={<ExploreJobs />} />
          <Route path="/start-hiring" element={<StartHiring />} />
          <Route path="/your-posts" element={<YourPostsPage />} />
          <Route path="/signed-in" element={<SignedInPage />} />
          <Route path="/authenticated-explore-jobs" element={<AuthenticatedExploreJobs />} />
          <Route path="/post-design-task" element={<PostDesignTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
