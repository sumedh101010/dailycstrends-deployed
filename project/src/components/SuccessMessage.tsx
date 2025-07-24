import React from 'react';
import { CheckCircle, Mail, Settings } from 'lucide-react';
import { User } from '../types';

interface SuccessMessageProps {
  user: User;
  onViewPreview: () => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ user, onViewPreview }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to CS Daily Trends!</h2>
        <p className="text-gray-600">
          Thanks for subscribing, <strong>{user.name}</strong>! Your daily CS updates are all set up.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Your Subscription Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700">{user.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-gray-500" />
            <span className="text-gray-700">
              {user.preferences.frequency.charAt(0).toUpperCase() + user.preferences.frequency.slice(1)} at {user.preferences.timeOfDay}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-600 font-medium">Topics: </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.preferences.topics.map(topic => (
              <span key={topic} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {topic.replace('-', ' ').toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={onViewPreview}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Preview Your First Email
        </button>
        
        <div className="text-sm text-gray-600">
          <p>🎉 Your first email will arrive tomorrow at {user.preferences.timeOfDay}</p>
          <p className="mt-1">Check your inbox (and spam folder) for our welcome email!</p>
        </div>
      </div>
    </div>
  );
};