import React from 'react';
import '../styles.css';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

export function VerifiedOrganizations() {
  return (
    <div className="rounded-2xl border border-[#16181c] mb-4 overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#e7e9ea] mb-4">Verified Organizations</h2>

        <div className="bg-[#16181c] rounded-xl p-4 mb-4">
          <p className="text-sm text-twitter-gray">Remaining ads credits</p>
          <p className="text-2xl font-bold text-[#e7e9ea]">$120</p>
        </div>

        <div className="space-y-3">
          <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
            Manage your ads credits
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
            Set up an ad campaign
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
            Manage your jobs
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-between text-[#e7e9ea] hover:bg-[#16181c] rounded-full">
            Get support with an issue
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="w-full justify-between text-twitter-blue hover:bg-[#16181c] rounded-full">
            View all features
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VerifiedOrganizations;
