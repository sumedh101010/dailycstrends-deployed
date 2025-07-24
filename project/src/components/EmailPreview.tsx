import React from 'react';
import { Calendar, Code, ExternalLink, BookOpen, Zap, Shield } from 'lucide-react';
import { TrendItem } from '../types';

interface EmailPreviewProps {
  trends: TrendItem[];
}

export const EmailPreview: React.FC<EmailPreviewProps> = ({ trends }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'dsa': return <Code className="h-5 w-5" />;
      case 'ai-ml': return <Zap className="h-5 w-5" />;
      case 'cybersecurity': return <Shield className="h-5 w-5" />;
      case 'research': return <BookOpen className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'dsa': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'ai-ml': return 'text-green-600 bg-green-50 border-green-200';
      case 'cybersecurity': return 'text-red-600 bg-red-50 border-red-200';
      case 'web-dev': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'systems': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'research': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getDifficultyBadge = (difficulty?: string) => {
    if (!difficulty) return null;
    
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[difficulty as keyof typeof colors]}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Daily CS Trends</h2>
            <div className="flex items-center space-x-2 text-blue-100">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{trends.length}</div>
            <div className="text-sm text-blue-100">Updates Today</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🚀 What's Trending Today</h3>
          <p className="text-gray-600 text-sm">
            Stay ahead of the curve with these hand-picked insights from the world of computer science and software development.
          </p>
        </div>

        <div className="space-y-6">
          {trends.map((trend, index) => (
            <div key={trend.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg border ${getCategoryColor(trend.category)}`}>
                    {getCategoryIcon(trend.category)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                      {getDifficultyBadge(trend.difficulty)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{trend.title}</h4>
                  </div>
                </div>
                {trend.link && (
                  <a 
                    href={trend.link} 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{trend.description}</p>

              {trend.codeExample && (
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">CODE EXAMPLE</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{trend.codeExample}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">💡 Quick Tip of the Day</h4>
            <p className="text-sm text-gray-700">
              When solving DSA problems, always start by understanding the constraints. 
              This helps you choose the right algorithm and avoid Time Limit Exceeded errors.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>This email was sent by CS Daily Trends. You're receiving this because you subscribed to our daily updates.</p>
          <p className="mt-1">
            <a href="#" className="text-blue-600 hover:underline">Manage Preferences</a> | 
            <a href="#" className="text-blue-600 hover:underline ml-1">Unsubscribe</a>
          </p>
        </div>
      </div>
    </div>
  );
};