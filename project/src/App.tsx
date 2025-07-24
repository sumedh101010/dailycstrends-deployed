import React, { useState } from 'react';
import { Header } from './components/Header';
import { SubscriptionForm } from './components/SubscriptionForm';
import { SuccessMessage } from './components/SuccessMessage';
import { EmailPreview } from './components/EmailPreview';
import { useLocalStorage } from './hooks/useLocalStorage';
import { mockTrends } from './data/mockTrends';
import { User, EmailPreferences } from './types';
import { ArrowLeft, Eye } from 'lucide-react';

type ViewState = 'subscription' | 'success' | 'preview';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('subscription');
  const [user, setUser] = useLocalStorage<User | null>('cs-trends-user', null);

  const handleSubscribe = (email: string, name: string, preferences: EmailPreferences) => {
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      subscribed: true,
      preferences,
      createdAt: new Date().toISOString()
    };
    
    setUser(newUser);
    setCurrentView('success');
  };

  const handleViewPreview = () => {
    setCurrentView('preview');
  };

  const handleBackToForm = () => {
    setCurrentView('subscription');
    setUser(null);
  };

  const handleBackToSuccess = () => {
    setCurrentView('success');
  };

  // Filter trends based on user preferences
  const filteredTrends = user 
    ? mockTrends.filter(trend => {
        if (!user.preferences.includeDSA && trend.category === 'dsa') return false;
        if (!user.preferences.includeInnovations && ['ai-ml', 'web-dev', 'systems'].includes(trend.category)) return false;
        if (!user.preferences.includeResearch && trend.category === 'research') return false;
        return user.preferences.topics.includes(trend.category);
      })
    : mockTrends;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentView === 'subscription' && (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Never Miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CS Breakthrough</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get daily insights on Data Structures & Algorithms tricks, latest computer science innovations, 
                and cutting-edge research delivered straight to your inbox.
              </p>
            </div>
            
            <SubscriptionForm onSubscribe={handleSubscribe} />
            
            <div className="mt-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview Today's Email</h2>
                <p className="text-gray-600">See what you'll receive in your daily CS trends digest</p>
              </div>
              <EmailPreview trends={mockTrends.slice(0, 4)} />
            </div>
          </div>
        )}

        {currentView === 'success' && user && (
          <div>
            <div className="mb-8">
              <button
                onClick={handleBackToForm}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Subscription</span>
              </button>
            </div>
            
            <SuccessMessage user={user} onViewPreview={handleViewPreview} />
          </div>
        )}

        {currentView === 'preview' && user && (
          <div>
            <div className="mb-8 flex items-center justify-between">
              <button
                onClick={handleBackToSuccess}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Success</span>
              </button>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Eye className="h-5 w-5" />
                <span className="font-medium">Email Preview</span>
              </div>
            </div>
            
            <EmailPreview trends={filteredTrends} />
          </div>
        )}
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 CS Daily Trends. Keeping developers ahead of the curve.</p>
            <p className="mt-2 text-sm">
              Built with React, TypeScript, and Tailwind CSS. 
              <span className="mx-2">•</span>
              Ready for production deployment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;