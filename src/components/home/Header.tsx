
import { Button } from "@/components/ui/button";
import { AuthenticatedNav } from "@/components/authenticated-nav";

interface HeaderProps {
  isAuthenticated: boolean;
  onSignInClick: () => void;
}

export const Header = ({ isAuthenticated, onSignInClick }: HeaderProps) => {
  return (
    <nav className="nav-container">
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold">INDesigner</h1>
          {!isAuthenticated ? (
            <Button onClick={onSignInClick} variant="outline">
              Sign In
            </Button>
          ) : (
            <AuthenticatedNav />
          )}
        </div>
      </div>
    </nav>
  );
};
