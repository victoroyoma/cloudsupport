import React, { useState } from 'react';
import { SearchIcon, BookOpenIcon, FolderIcon, FileTextIcon, ChevronRightIcon, StarIcon, ThumbsUpIcon, ThumbsDownIcon, ServerIcon, HardDriveIcon, DatabaseIcon, GlobeIcon, ShieldIcon, ActivityIcon, CreditCardIcon, InfoIcon } from 'lucide-react';
export const Documentation = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const categories = [{
    id: 'getting-started',
    name: 'Getting Started',
    icon: <BookOpenIcon className="h-5 w-5" />
  }, {
    id: 'compute',
    name: 'Compute Services',
    icon: <ServerIcon className="h-5 w-5" />
  }, {
    id: 'storage',
    name: 'Storage Solutions',
    icon: <HardDriveIcon className="h-5 w-5" />
  }, {
    id: 'database',
    name: 'Database Services',
    icon: <DatabaseIcon className="h-5 w-5" />
  }, {
    id: 'networking',
    name: 'Networking',
    icon: <GlobeIcon className="h-5 w-5" />
  }, {
    id: 'security',
    name: 'Security & IAM',
    icon: <ShieldIcon className="h-5 w-5" />
  }, {
    id: 'monitoring',
    name: 'Monitoring & Logging',
    icon: <ActivityIcon className="h-5 w-5" />
  }, {
    id: 'billing',
    name: 'Billing & Pricing',
    icon: <CreditCardIcon className="h-5 w-5" />
  }];
  const popularArticles = ['Quick Start Guide: Setting Up Your First Cloud Instance', 'Understanding Cloud Storage Options', 'Securing Your Cloud Environment: Best Practices', 'Database Migration Strategies', 'Cost Optimization Techniques for Cloud Services'];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Documentation & Knowledge Base
        </h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search documentation..." />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Categories</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`w-full flex items-center px-4 py-3 hover:bg-gray-50 focus:outline-none ${activeCategory === category.id ? 'bg-blue-50' : ''}`}>
                  <span className={`mr-3 ${activeCategory === category.id ? 'text-blue-600' : 'text-gray-500'}`}>
                    {category.icon}
                  </span>
                  <span className={`text-sm font-medium ${activeCategory === category.id ? 'text-blue-600' : 'text-gray-900'}`}>
                    {category.name}
                  </span>
                  {activeCategory === category.id && <ChevronRightIcon className="ml-auto h-5 w-5 text-blue-600" />}
                </button>)}
            </div>
          </div>
          <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Popular Articles
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {popularArticles.map((article, index) => <button key={index} className="w-full flex items-center px-4 py-3 hover:bg-gray-50 focus:outline-none">
                  <StarIcon className="mr-3 h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-900">{article}</span>
                </button>)}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center">
                <BookOpenIcon className="h-6 w-6 text-blue-600" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">
                  Getting Started with Cloud Services
                </h2>
              </div>
            </div>
            <div className="px-6 py-5">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Introduction
              </h3>
              <p className="text-gray-700 mb-4">
                Welcome to our Cloud Services platform. This guide will help you
                get started with setting up your environment, creating your
                first resources, and understanding the core concepts of our
                cloud infrastructure.
              </p>
              <h4 className="text-base font-medium text-gray-900 mb-2">
                Prerequisites
              </h4>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>A valid account with admin privileges</li>
                <li>Payment method on file for any billable services</li>
                <li>Basic understanding of cloud computing concepts</li>
              </ul>
              <h4 className="text-base font-medium text-gray-900 mb-2">
                Quick Start Steps
              </h4>
              <ol className="list-decimal pl-5 mb-4 text-gray-700">
                <li className="mb-2">
                  Log in to your cloud dashboard using your credentials
                </li>
                <li className="mb-2">
                  Navigate to the "Projects" section and create a new project
                </li>
                <li className="mb-2">
                  Set up your billing information and budget alerts
                </li>
                <li className="mb-2">
                  Create your first virtual machine instance
                </li>
                <li className="mb-2">
                  Configure networking and security settings
                </li>
              </ol>
              <div className="p-4 bg-blue-50 rounded-lg mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InfoIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      New users receive $300 in credits to explore and evaluate
                      our services for the first 90 days.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Core Concepts
              </h3>
              <p className="text-gray-700 mb-4">
                Understanding these fundamental concepts will help you make the
                most of our cloud platform:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Projects</h4>
                  <p className="text-sm text-gray-700">
                    Projects help you organize resources. All resources belong
                    to a project, and each project has its own settings,
                    permissions, and billing.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Resources</h4>
                  <p className="text-sm text-gray-700">
                    Resources are the fundamental components available for your
                    applications, such as virtual machines, databases, and
                    storage buckets.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Regions & Zones
                  </h4>
                  <p className="text-sm text-gray-700">
                    Geographic locations where your resources can be hosted.
                    Regions contain multiple zones for redundancy.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">IAM</h4>
                  <p className="text-sm text-gray-700">
                    Identity and Access Management controls who can do what on
                    which resources, allowing fine-grained access control.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-sm text-gray-500">
                  Last updated: July 15, 2023
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    Was this helpful?
                  </span>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <ThumbsUpIcon className="h-5 w-5 text-gray-400 hover:text-green-500" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <ThumbsDownIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-5">
              <div className="flex items-center mb-4">
                <FileTextIcon className="h-5 w-5 text-blue-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">
                  Related Guides
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Setting up multi-factor authentication
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Understanding network security groups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Best practices for resource organization
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Cost management and optimization
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-5">
              <div className="flex items-center mb-4">
                <FolderIcon className="h-5 w-5 text-blue-600" />
                <h3 className="ml-2 text-lg font-medium text-gray-900">
                  Sample Templates
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Basic web application infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Highly available database setup
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Microservices architecture template
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Secure VPC network configuration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};