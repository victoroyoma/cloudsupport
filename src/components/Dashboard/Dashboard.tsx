
import { ServiceStatus } from './ServiceStatus';
import { SupportStats } from './SupportStats';
import { RecentTickets } from './RecentTickets';
import { ResourceUsage } from './ResourceUsage';
export const Dashboard = () => {
  return <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">
      Cloud Support Dashboard
    </h1>
    <ServiceStatus />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <RecentTickets />
      </div>
      <div>
        <SupportStats />
      </div>
    </div>
    <ResourceUsage />
  </div>;
};