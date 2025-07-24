import React, { useState } from 'react';
import { Mail, Settings, Check } from 'lucide-react';
import { EmailPreferences } from '../types';

interface SubscriptionFormProps {
  onSubscribe: (email: string, name: string, preferences: EmailPreferences) => void;
}

export const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState<EmailPreferences>({
    topics: ['dsa', 'ai-ml'],
    frequency: 'daily',
    timeOfDay: '09:00',
    includeDSA: true,
    includeInnovations: true,
    includeResearch: false
  });

  const topicOptions = [
    { id: 'dsa', label: 'Data Structures & Algorithms', color: 'bg-blue-100 text-blue-800' },
    { id: 'ai-ml', label: 'AI & Machine Learning', color: 'bg-green-100 text-green-800' },
    { id: 'cybersecurity', label: 'Cybersecurity', color: 'bg-red-100 text-red-800' },
    { id: 'web-dev', label: 'Web Development', color: 'bg-purple-100 text-purple-800' },
    { id: 'systems', label: 'Systems Programming', color: 'bg-orange-100 text-orange-800' },
    { id: 'research', label: 'Academic Research', color: 'bg-indigo-100 text-indigo-800' }
  ];

  const handleTopicToggle = (topicId: string) => {
    setPreferences(prev => ({
      ...prev,
      topics: prev.topics.includes(topicId)
        ? prev.topics.filter(t => t !== topicId)
        : [...prev.topics, topicId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe(email, name, preferences);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Mail className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Subscribe to Daily Updates</h2>
          <p className="text-gray-600">Get the latest CS trends and DSA tricks delivered to your inbox</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Settings className="inline h-4 w-4 mr-1" />
            Topics of Interest
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {topicOptions.map(topic => (
              <button
                key={topic.id}
                type="button"
                onClick={() => handleTopicToggle(topic.id)}
                className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                  preferences.topics.includes(topic.id)
                    ? `${topic.color} border-current`
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                {preferences.topics.includes(topic.id) && (
                  <Check className="inline h-4 w-4 mr-1" />
                )}
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
              Frequency
            </label>
            <select
              id="frequency"
              value={preferences.frequency}
              onChange={(e) => setPreferences(prev => ({ ...prev, frequency: e.target.value as 'daily' | 'weekly' }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeOfDay" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              id="timeOfDay"
              value={preferences.timeOfDay}
              onChange={(e) => setPreferences(prev => ({ ...prev, timeOfDay: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Content Preferences</label>
          <div className="space-y-2">
            {[
              { key: 'includeDSA', label: 'DSA Tricks & Problem Solving Techniques' },
              { key: 'includeInnovations', label: 'Latest CS Innovations & Breakthroughs' },
              { key: 'includeResearch', label: 'Academic Research Papers & Studies' }
            ].map(option => (
              <label key={option.key} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences[option.key as keyof EmailPreferences] as boolean}
                  onChange={(e) => setPreferences(prev => ({ ...prev, [option.key]: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Subscribe to Daily Updates
        </button>
      </form>
    </div>
  );
};