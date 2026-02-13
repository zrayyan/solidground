'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface CuringProject {
  id: string;
  name: string;
  startDate: Date;
  curingDays: number;
  status: 'curing' | 'ready' | 'overdue';
}

export default function CuringCountdown() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Static mock data - in a real app, this would come from an API
  const projects: CuringProject[] = [
    {
      id: '1',
      name: 'Smith Driveway',
      startDate: new Date('2024-02-10'), // 4 days ago from Feb 14
      curingDays: 7,
      status: 'curing',
    },
    {
      id: '2',
      name: 'Johnson Patio',
      startDate: new Date('2024-02-08'), // 6 days ago from Feb 14
      curingDays: 7,
      status: 'curing',
    },
    {
      id: '3',
      name: 'Garcia Foundation',
      startDate: new Date('2024-02-06'), // 8 days ago from Feb 14
      curingDays: 7,
      status: 'ready',
    },
  ];

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getTimeRemaining = (startDate: Date, curingDays: number) => {
    const endDate = new Date(startDate.getTime() + curingDays * 24 * 60 * 60 * 1000);
    const timeDiff = endDate.getTime() - currentTime.getTime();

    if (timeDiff <= 0) return { days: 0, hours: 0, minutes: 0, isOverdue: true };

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes, isOverdue: false };
  };

  const getStatusIcon = (status: string, isOverdue: boolean) => {
    if (isOverdue) return <AlertTriangle className="w-5 h-5 text-red-500" />;
    if (status === 'ready') return <CheckCircle className="w-5 h-5 text-green-500" />;
    return <Clock className="w-5 h-5 text-blue-500" />;
  };

  const getStatusColor = (status: string, isOverdue: boolean) => {
    if (isOverdue) return 'border-red-200 bg-red-50';
    if (status === 'ready') return 'border-green-200 bg-green-50';
    return 'border-blue-200 bg-blue-50';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-md"
    >
      <h3 className="text-lg font-bold text-concrete-gray mb-4">Curing Projects</h3>

      <div className="space-y-3">
        {projects.map((project) => {
          const timeRemaining = getTimeRemaining(project.startDate, project.curingDays);
          const isOverdue = timeRemaining.isOverdue;

          return (
            <div
              key={project.id}
              className={`p-3 rounded-lg border ${getStatusColor(project.status, isOverdue)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-concrete-gray">{project.name}</span>
                {getStatusIcon(project.status, isOverdue)}
              </div>

              {isOverdue ? (
                <div className="text-red-600 text-xs font-medium">
                  Curing period complete - Ready for use
                </div>
              ) : timeRemaining.days === 0 && timeRemaining.hours === 0 ? (
                <div className="text-green-600 text-xs font-medium">
                  Curing complete in {timeRemaining.minutes} minutes
                </div>
              ) : (
                <div className="text-blue-600 text-xs">
                  {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m remaining
                </div>
              )}

              <div className="text-xs text-gray-500 mt-1">
                Started: {project.startDate.toLocaleDateString()}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Important:</strong> Concrete needs {projects[0]?.curingDays || 7} days to reach full strength.
          Avoid heavy loads during curing period.
        </p>
      </div>
    </motion.div>
  );
}