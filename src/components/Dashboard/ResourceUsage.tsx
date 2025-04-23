import React from 'react';
import { ServerIcon, DatabaseIcon, HardDriveIcon } from 'lucide-react';
export const ResourceUsage = () => {
  const resources = [{
    name: 'CPU Usage',
    used: 68,
    total: 100,
    unit: '%',
    icon: <ServerIcon className="h-6 w-6 text-blue-500" />
  }, {
    name: 'Memory Usage',
    used: 12.4,
    total: 16,
    unit: 'GB',
    icon: <DatabaseIcon className="h-6 w-6 text-indigo-500" />
  }, {
    name: 'Storage Usage',
    used: 384,
    total: 512,
    unit: 'GB',
    icon: <HardDriveIcon className="h-6 w-6 text-green-500" />
  }];
  return <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Resource Usage
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Current cloud resource utilization
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {resources.map((resource, index) => {
        const percentage = resource.used / resource.total * 100;
        let barColor = 'bg-blue-500';
        if (percentage > 80) {
          barColor = 'bg-red-500';
        } else if (percentage > 60) {
          barColor = 'bg-yellow-500';
        } else {
          barColor = 'bg-green-500';
        }
        return <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-lg bg-gray-50">{resource.icon}</div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    {resource.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {resource.used} / {resource.total} {resource.unit}
                  </p>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full ${barColor}`} style={{
              width: `${percentage}%`
            }} />
              </div>
            </div>;
      })}
      </div>
    </div>;
};