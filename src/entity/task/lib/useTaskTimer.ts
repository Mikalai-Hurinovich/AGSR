import { useEffect, useState } from 'react';
import { getTimeLeft } from '@/shared/utils/time';

const UPDATE_TIME = 1000;

export const useTaskTimer = (dueDate?: string) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    if (!dueDate) return;

    const updateTimeLeft = () => {
      setTimeLeft(getTimeLeft(dueDate));
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, UPDATE_TIME);

    return () => clearInterval(interval);
  }, [dueDate]);

  return timeLeft;
};
