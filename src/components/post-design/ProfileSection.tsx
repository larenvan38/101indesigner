
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface ProfileSectionProps {
  profileType: string;
  setProfileType: (value: string) => void;
  isAuthenticated?: boolean;
}

export const ProfileSection = ({ 
  profileType, 
  setProfileType, 
  isAuthenticated = true 
}: ProfileSectionProps) => {
  const [companyName, setCompanyName] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [socialLink, setSocialLink] = useState("");

  return (
    <div className="feature-card">
      {!isAuthenticated && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
          <p className="text-sm text-yellow-700 font-medium">
            Please sign in first to post your design assignment
          </p>
        </div>
      )}
      
      <h3 className="mb-6">What Describes You Perfectly?</h3>
      <div className="mb-8">
        <Select value={profileType} onValueChange={setProfileType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your profile type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="startup">Start-Up (Use your startup email)</SelectItem>
            <SelectItem value="mnc">MNC (Use your company email)</SelectItem>
            <SelectItem value="agency">Agency (Use your agency email)</SelectItem>
            <SelectItem value="individual">Individual (Use your public YouTube/Instagram email)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {(profileType === "startup" || profileType === "mnc") && (
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">Name of the Company</label>
            <input 
              type="text" 
              className="input-field w-full" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Company Website Link</label>
            <input 
              type="url" 
              className="input-field w-full" 
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
              placeholder="https://example.com"
            />
          </div>
        </div>
      )}
      
      {profileType === "agency" && (
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2">Name of the Agency</label>
            <input 
              type="text" 
              className="input-field w-full" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter agency name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Agency Website Link</label>
            <input 
              type="url" 
              className="input-field w-full" 
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
              placeholder="https://example.com"
            />
          </div>
        </div>
      )}
      
      {profileType === "individual" && (
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">YouTube/Instagram Link</label>
          <input 
            type="url" 
            className="input-field w-full" 
            value={socialLink}
            onChange={(e) => setSocialLink(e.target.value)}
            placeholder="https://youtube.com/channel/... or https://instagram.com/..."
          />
        </div>
      )}
      
      <div className="bg-accent/30 p-4 rounded-lg mb-8">
        {profileType === "individual" ? (
          <div className="text-sm">
            <p className="mb-2"><strong>Step 1</strong> - To verify your identity, send an email with subject line "ERHB4" to post@INDesigner.in
              Your post status will be updated within 6 hours.</p>
            <p><strong>Step 2</strong>: Ensure the sending email address is visible within your account details via the provided link (e.g., YouTube channel info, Instagram bio for 6 hours; you may remove it afterward). This is solely for ownership verification.</p>
          </div>
        ) : (
          <p className="text-sm">
            To verify your identity, send an email with subject line "ERHB4" to post@INDesigner.in
            Your post status will be updated within 6 hours.
          </p>
        )}
      </div>
    </div>
  );
};
