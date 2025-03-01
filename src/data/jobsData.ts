
export interface Job {
  id: string;
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
}

export const jobsData: Job[] = [
  {
    id: "1",
    title: "UI/UX Designer for E-commerce App",
    description: "Seeking art-focused designer for thumbnail design and brand visuals.",
    postedTime: "Posted 2 days ago",
    status: "In Progress",
    badgeType: "verified",
    badgeText: "Verified Agency",
    jobType: "Full-time",
    locationType: "Remote",
    salaryInfo: "Fixed Salary: ₹40,000",
    skills: ["Thumbnail Design", "Brand Design"],
    submissionFee: "₹99"
  },
  {
    id: "2",
    title: "Motion Designer for Social Media",
    description: "Creative motion designer needed for engaging social media content.",
    postedTime: "Posted 1 day ago",
    status: "Open",
    badgeType: "startup",
    badgeText: "Startup",
    jobType: "Freelance",
    locationType: "Remote",
    salaryInfo: "Negotiable Salary",
    skills: ["Motion Graphics", "Social Media"],
    submissionFee: "₹49"
  },
  {
    id: "3",
    title: "Senior Brand Designer",
    description: "Experienced brand designer needed for complete brand identity project.",
    postedTime: "Posted 3 hours ago",
    status: "Urgent",
    badgeType: "premium",
    badgeText: "Premium Project",
    jobType: "Full-time",
    locationType: "Hybrid",
    salaryInfo: "Fixed Salary: ₹85,000",
    skills: ["Brand Identity", "Visual Design"],
    submissionFee: "₹249"
  }
];
