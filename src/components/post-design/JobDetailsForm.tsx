
interface JobDetailsFormProps {
  workType: string;
  setWorkType: (value: string) => void;
  numJobs: number;
  handleNumJobsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  salaryType: string;
  setSalaryType: (value: string) => void;
}

export const JobDetailsForm = ({
  workType,
  setWorkType,
  numJobs,
  handleNumJobsChange,
  salaryType,
  setSalaryType,
}: JobDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Number of Jobs Required *</label>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            min="1"
            value={numJobs}
            onChange={handleNumJobsChange}
            className="input-field"
            placeholder="Enter number of jobs"
          />
          <div className="flex gap-2">
            {[1, 2, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleNumJobsChange({ target: { value: num.toString() } } as React.ChangeEvent<HTMLInputElement>)}
                className="px-3 py-2 border rounded hover:bg-gray-50"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Work Type *</label>
          <div className="flex gap-4">
            <select 
              className="input-field flex-1"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            >
              <option value="">Select work type</option>
              <option value="full-time">Full-time</option>
              <option value="freelance">Freelance</option>
            </select>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="location" value="remote" />
                Remote
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="location" value="office" />
                Office
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Salary Structure *</label>
          <select 
            className="input-field mb-4"
            value={salaryType}
            onChange={(e) => setSalaryType(e.target.value)}
          >
            <option value="">Select salary type</option>
            <option value="fixed">Fixed Salary</option>
            <option value="negotiable">Negotiable Salary</option>
          </select>
          {salaryType === 'fixed' && (
            <input
              type="number"
              placeholder="Enter fixed salary amount (₹)"
              className="input-field"
            />
          )}
          {salaryType === 'negotiable' && (
            <input
              type="number"
              placeholder="Enter minimum salary amount (₹)"
              className="input-field"
            />
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">What should candidates know? *</label>
        <textarea
          placeholder="Enter art-focused skills (e.g., Thumbnail design, NOT tools like Photoshop)"
          className="input-field"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Work Description * (75 words max)</label>
        <textarea
          rows={4}
          maxLength={300}
          placeholder="Describe the work requirements (no AI-generated text)"
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Sample Work Links *</label>
        <input
          type="url"
          placeholder="Behance, Dribbble links"
          className="input-field"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Additional Notes (Optional)</label>
        <textarea
          placeholder="Any extra information for candidates"
          className="input-field"
          rows={3}
        />
      </div>
    </div>
  );
};
