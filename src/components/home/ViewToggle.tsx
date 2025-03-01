
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
        className={currentView === 'jobs' ? 'button-primary' : 'button-secondary'}
      >
        Find Design Jobs
      </button>
      <button 
        onClick={() => onViewChange('employers')}
        className={currentView === 'employers' ? 'button-primary' : 'button-secondary'}
      >
        For Employers
      </button>
    </div>
  );
};
