import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon, InfoIcon } from 'lucide-react';
export const ServiceStatus = () => {
  const services = [{
    name: 'Compute Engine',
    status: 'operational',
    icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />
  }, {
    name: 'Storage Service',
    status: 'operational',
    icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />
  }, {
    name: 'Database Service',
    status: 'degraded',
    icon: <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
  }, {
    name: 'Analytics Platform',
    status: 'operational',
    icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />
  }, {
    name: 'CDN Network',
    status: 'incident',
    icon: <InfoIcon className="h-5 w-5 text-red-500" />
  }, {
    name: 'Kubernetes Service',
    status: 'operational',
    icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />
  }];
  return <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Service Status
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Current operational status of all cloud services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {services.map((service, index) => <div key={index} className="flex items-center p-3 border rounded-lg">
            {service.icon}
            <span className="ml-2 text-sm font-medium text-gray-700">
              {service.name}
            </span>
            <span className={`ml-auto text-xs font-semibold rounded-full px-2 py-1 ${service.status === 'operational' ? 'bg-green-100 text-green-800' : service.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
            </span>
          </div>)}
      </div>
    </div>;
};