export const getTimeLeft = (dueDate: string): string => {
  const difference = new Date(dueDate).getTime() - Date.now();

  if (difference <= 0) return 'Время истекло';

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
