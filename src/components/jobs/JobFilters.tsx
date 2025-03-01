
import { motion } from "framer-motion";

interface JobFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const JobFilters = ({ activeFilter, onFilterChange }: JobFiltersProps) => {
  const filters = [
    { id: "all", label: "All Jobs" },
    { id: "fulltime", label: "Full-time" },
    { id: "freelance", label: "Freelance" },
    { id: "remote", label: "Remote" },
    { id: "office", label: "Office" },
    { id: "fixed", label: "Fixed Salary" },
    { id: "negotiable", label: "Negotiable" },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-center mb-6">Featured Design Opportunities</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`tag ${activeFilter === filter.id ? "bg-primary text-white" : ""}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};
