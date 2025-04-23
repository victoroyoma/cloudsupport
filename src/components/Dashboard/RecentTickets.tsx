
import { AlertTriangleIcon, InfoIcon, MessageSquareIcon, UserIcon } from 'lucide-react';
export const RecentTickets = () => {
  const tickets = [{
    id: 'TK-7829',
    title: 'Unable to scale database cluster',
    status: 'high',
    time: '2 hours ago',
    user: 'Alex Johnson',
    department: 'Engineering'
  }, {
    id: 'TK-7830',
    title: 'New API key request for production',
    status: 'medium',
    time: '4 hours ago',
    user: 'Sarah Miller',
    department: 'DevOps'
  }, {
    id: 'TK-7831',
    title: 'Storage bucket permissions issue',
    status: 'low',
    time: '6 hours ago',
    user: 'James Wilson',
    department: 'Data Science'
  }, {
    id: 'TK-7832',
    title: 'CDN configuration assistance needed',
    status: 'medium',
    time: '12 hours ago',
    user: 'Emma Davis',
    department: 'Marketing'
  }];
  return <div className="bg-white shadow rounded-lg overflow-hidden">
    <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Recent Support Tickets
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Latest support requests from users
        </p>
      </div>
      <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        View All
      </button>
    </div>
    <ul className="divide-y divide-gray-200">
      {tickets.map(ticket => <li key={ticket.id} className="p-4 hover:bg-gray-50">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {ticket.status === 'high' ? <AlertTriangleIcon className="h-6 w-6 text-red-500" /> : ticket.status === 'medium' ? <InfoIcon className="h-6 w-6 text-yellow-500" /> : <MessageSquareIcon className="h-6 w-6 text-blue-500" />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 truncate">
                {ticket.title}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  {ticket.id}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <UserIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                <span>
                  {ticket.user} • {ticket.department}
                </span>
              </div>
              <div className="text-sm text-gray-500">{ticket.time}</div>
            </div>
          </div>
        </div>
      </li>)}
    </ul>
  </div>;
};