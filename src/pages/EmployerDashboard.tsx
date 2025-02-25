
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthenticatedNav } from "@/components/AuthenticatedNav";

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="nav-container">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold">INDesigner</h1>
            <AuthenticatedNav />
          </div>
        </div>
      </nav>

      <main className="section-container pt-32">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.section className="text-center">
            <span className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              Find Perfect Fit
            </span>
            <h1 className="mb-6">Hire the Best Design Talent</h1>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Skip the resume screening and find exceptional designers through real-world tasks. Our platform ensures you only see submissions from committed professionals.
            </p>

            <Link 
              to="/post-design-task"
              className="button-primary inline-block mb-20"
            >
              Post Design Task
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              <div className="feature-card">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <span className="font-display text-xl font-bold">1</span>
                </div>
                <h3 className="mb-3">Post Task</h3>
                <p className="text-gray-600">Create a design task and set your requirements</p>
              </div>
              <div className="feature-card">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <span className="font-display text-xl font-bold">2</span>
                </div>
                <h3 className="mb-3">Review Work</h3>
                <p className="text-gray-600">Get submissions from committed designers</p>
              </div>
              <div className="feature-card">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <span className="font-display text-xl font-bold">3</span>
                </div>
                <h3 className="mb-3">Hire Designer</h3>
                <p className="text-gray-600">Choose your preferred candidate</p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
