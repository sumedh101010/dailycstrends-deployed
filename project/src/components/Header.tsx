import React from 'react';
import { Mail, TrendingUp } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CS Daily Trends</h1>
              <p className="text-sm text-gray-600">Stay ahead with daily CS insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-medium">Daily Email Service</span>
          </div>
        </div>
      </div>
    </header>
  );
};