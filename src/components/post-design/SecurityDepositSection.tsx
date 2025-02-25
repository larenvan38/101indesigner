
import { CheckCircle2Icon } from "lucide-react";

interface SecurityDepositSectionProps {
  numJobs: number;
}

export const SecurityDepositSection = ({ numJobs }: SecurityDepositSectionProps) => {
  return (
    <div className="feature-card">
      <h3 className="mb-4">Security Deposit</h3>
      <div className="bg-accent/30 p-4 rounded-lg mb-6">
        <p className="font-medium">Payable Amount: ₹{numJobs * 2500}</p>
        <p className="text-sm text-gray-600 mt-2">
          Calculated as ₹2,500 × {numJobs} job{numJobs > 1 ? 's' : ''}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
          <div>
            <h4 className="font-medium mb-1">Refund Policy</h4>
            <p className="text-gray-600 text-sm">
              75% will be refunded after successfully hiring designers from INDesigner.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <CheckCircle2Icon className="w-6 h-6 text-primary mt-1" />
          <div>
            <h4 className="font-medium mb-1">Anti-Fraud Protection</h4>
            <p className="text-gray-600 text-sm">
              Fake posts will incur non-refundable charges to maintain platform quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
