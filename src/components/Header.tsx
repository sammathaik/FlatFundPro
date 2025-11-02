import { Building2 } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/AppLogo-FlatFund Pro.jpg"
              alt="FlatFund Pro"
              className="h-10 w-10 object-contain rounded-lg"
            />
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900">FlatFund Pro</h1>
              <p className="text-xs text-gray-600">Smart Payment Submissions</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
            <Building2 className="w-4 h-4 text-amber-600" />
            <span className="font-medium">Society Management System</span>
          </div>
        </div>
      </div>
    </header>
  );
}
