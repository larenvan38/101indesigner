
import { BriefcaseIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

interface JobCardProps {
  title: string;
  description: string;
  postedTime: string;
  status: string;
  badgeType: "verified" | "startup" | "premium";
  badgeText: string;
  jobType: string;
  locationType: string;
  salaryInfo: string;
  skills: string[];
  submissionFee: string;
  onViewAssignment: () => void;
  onSubmitAssignment: () => void;
}

export const JobCard = ({
  title,
  description,
  postedTime,
  status,
  badgeType,
  badgeText,
  jobType,
  locationType,
  salaryInfo,
  skills,
  submissionFee,
  onViewAssignment,
  onSubmitAssignment,
}: JobCardProps) => {
  // Determine badge color based on type
  const getBadgeClasses = () => {
    switch (badgeType) {
      case "verified":
        return "bg-green-100 text-green-700";
      case "startup":
        return "bg-blue-100 text-blue-700";
      case "premium":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="feature-card flex flex-col hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="text-left">
          <div className="flex items-center gap-4 mb-2">
            <span className={`${getBadgeClasses()} px-2 py-1 rounded text-sm`}>{badgeText}</span>
          </div>
          <h3 className="mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{postedTime}</span>
            <span>•</span>
            <span>Status: {status}</span>
          </div>
        </div>
        <BriefcaseIcon className="w-6 h-6 text-primary flex-shrink-0" />
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="tag">{jobType}</span>
        <span className="tag">{locationType}</span>
        <span className="tag">{salaryInfo}</span>
      </div>
      <div className="border-t border-gray-100 mt-4 pt-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium">Required Skills:</span>
              <div className="flex gap-2 mt-1">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-accent/50 px-2 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button className="button-primary py-2" onClick={onViewAssignment}>
                View Assignment
              </button>
              <button 
                onClick={onSubmitAssignment}
                className="button-primary py-2 flex items-center gap-2"
              >
                Submit Assignment
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Submission Fee: {submissionFee}
          </div>
        </div>
      </div>
    </div>
  );
};
