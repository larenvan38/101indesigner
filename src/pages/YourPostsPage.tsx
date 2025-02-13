
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SubmittedResult {
  name: string;
  assignmentLink: string;
  portfolio: string;
  isWinner: boolean;
}

interface JobPost {
  id: number;
  title: string;
  date: string;
  status: string;
  hired: boolean;
  refundStatus: string;
  paymentStatus: string;
  results: SubmittedResult[];
}

export default function YourPostsPage() {
  const [activePost, setActivePost] = useState<JobPost | null>(null);
  const [jobPosts] = useState<JobPost[]>([
    {
      id: 1,
      title: "Post 1",
      date: "2024-03-20",
      status: "Approved",
      hired: true,
      refundStatus: "Completed",
      paymentStatus: "Paid",
      results: [
        {
          name: "John Doe",
          assignmentLink: "https://example.com/assignment1",
          portfolio: "https://portfolio.com/johndoe",
          isWinner: false
        }
      ]
    },
    {
      id: 2,
      title: "Post 2",
      date: "2024-03-21",
      status: "Approved",
      hired: true,
      refundStatus: "Completed",
      paymentStatus: "Paid",
      results: []
    }
  ]);

  const [showResults, setShowResults] = useState(false);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Your Posts</h1>
      
      <div className="grid gap-6">
        {jobPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <span className="text-gray-600">{post.date}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600">Status: {post.hired ? 'Hired' : 'Open'}</span>
              </div>
              <div className="text-right">
                <span className="text-gray-600">Amount refund status: {post.refundStatus}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                Post status: {post.status}
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                {post.paymentStatus}
              </span>
            </div>

            <div className="border-t pt-4">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => {
                    setActivePost(post);
                    setShowResults(true);
                  }}
                >
                  Results
                </Button>
                <Button variant="outline" className="flex-1">Winners List</Button>
                <Button variant="outline" className="flex-1">Winner Chats</Button>
              </div>
            </div>

            {showResults && activePost?.id === post.id && (
              <div className="mt-4 space-y-4">
                {post.results.map((result, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <p className="font-medium">{result.name}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline">Portfolio</Button>
                      <Button size="sm" variant="outline">Resume</Button>
                      <Button size="sm" variant="outline">Chat</Button>
                      {!result.isWinner && (
                        <Button size="sm" variant="secondary">
                          Make Winner
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
