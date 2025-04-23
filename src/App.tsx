import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { TicketSystem } from './components/TicketSystem/TicketSystem';
import { ChatSupport } from './components/ChatSupport/ChatSupport';
import { Documentation } from './components/Documentation/Documentation';
import { LoginForm } from './components/Auth/LoginForm';
import { AuthProvider, useAuth } from './context/AuthContext';

const AppContent = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="flex w-full h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'tickets' && <TicketSystem />}
          {currentView === 'chat' && <ChatSupport />}
          {currentView === 'docs' && <Documentation />}
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}