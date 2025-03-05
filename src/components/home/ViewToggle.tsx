
import { useState } from "react";

interface ViewToggleProps {
  currentView: 'jobs' | 'employers';
  onViewChange: (view: 'jobs' | 'employers') => void;
}

export const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      <button 
        onClick={() => onViewChange('jobs')}
        className={`px-8 py-4 rounded-lg transition-all duration-300 ${currentView === 'jobs' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
      >
        Find Design Jobs
      </button>
      <button 
        onClick={() => onViewChange('employers')}
        className={`px-8 py-4 rounded-lg transition-all duration-300 ${currentView === 'employers' ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
      >
        For Employers
      </button>
    </div>
  );
};
