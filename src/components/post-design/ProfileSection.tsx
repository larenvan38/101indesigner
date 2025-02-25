
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProfileSectionProps {
  profileType: string;
  setProfileType: (value: string) => void;
}

export const ProfileSection = ({ profileType, setProfileType }: ProfileSectionProps) => {
  return (
    <div className="feature-card">
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
      
      <div className="bg-accent/30 p-4 rounded-lg mb-8">
        <p className="text-sm">
          To verify your identity, send an email with subject line "ERHB4" to post@INDesigner.in
          Your post status will be updated within 6 hours.
        </p>
      </div>
    </div>
  );
};
