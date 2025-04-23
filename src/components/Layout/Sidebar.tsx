import { cloneElement } from 'react';
import { LayoutDashboardIcon, TicketIcon, MessageSquareIcon, FileTextIcon, SettingsIcon, LogOutIcon, CloudIcon } from 'lucide-react';
interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}
export const Sidebar = ({
  currentView,
  setCurrentView
}: SidebarProps) => {
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    id: 'tickets',
    label: 'Tickets',
    icon: <TicketIcon size={20} />
  }, {
    id: 'chat',
    label: 'AI Support',
    icon: <MessageSquareIcon size={20} />
  }, {
    id: 'docs',
    label: 'Documentation',
    icon: <FileTextIcon size={20} />
  }];
  return <div className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col">
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-center md:justify-start">
        <CloudIcon className="h-8 w-8 text-blue-600" />
        <span className="hidden md:block ml-2 text-xl font-semibold text-gray-800">
          CloudSupport
        </span>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto py-4">
      <nav className="px-2 space-y-1">
        {navItems.map(item => <button key={item.id} onClick={() => setCurrentView(item.id)} className={`flex items-center px-3 py-2 w-full rounded-md text-sm font-medium ${currentView === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            {cloneElement(item.icon, {
              className: currentView === item.id ? 'text-blue-600' : 'text-gray-500'
            })}
            <span className="hidden md:block ml-3">{item.label}</span>
          </div>
        </button>)}
      </nav>
    </div>
    <div className="p-4 border-t border-gray-200">
      <div className="space-y-2">
        <button className="flex items-center px-3 py-2 w-full rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <SettingsIcon size={20} className="text-gray-500" />
            <span className="hidden md:block ml-3">Settings</span>
          </div>
        </button>
        <button className="flex items-center px-3 py-2 w-full rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <LogOutIcon size={20} className="text-gray-500" />
            <span className="hidden md:block ml-3">Logout</span>
          </div>
        </button>
      </div>
    </div>
  </div>;
};