import React from 'react';
import { CheckCircleIcon, ClockIcon, AlertCircleIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
export const SupportStats = () => {
  const stats = [{
    title: 'Resolved Tickets',
    value: '142',
    change: '+12%',
    trend: 'up',
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />
  }, {
    title: 'Open Tickets',
    value: '38',
    change: '-4%',
    trend: 'down',
    icon: <ClockIcon className="h-8 w-8 text-yellow-500" />
  }, {
    title: 'Critical Issues',
    value: '3',
    change: '+1',
    trend: 'up',
    icon: <AlertCircleIcon className="h-8 w-8 text-red-500" />
  }];
  return <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Support Statistics
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Last 30 days</p>
      </div>
      <div className="p-4 space-y-4">
        {stats.map((stat, index) => <div key={index} className="flex items-center p-3 border rounded-lg">
            <div className="p-2 rounded-lg bg-gray-50">{stat.icon}</div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <p className="text-xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div className={`ml-auto flex items-center ${stat.trend === 'up' ? 'text-red-600' : 'text-green-600'}`}>
              {stat.trend === 'up' ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
              <span className="text-sm font-medium ml-1">{stat.change}</span>
            </div>
          </div>)}
      </div>
    </div>;
};