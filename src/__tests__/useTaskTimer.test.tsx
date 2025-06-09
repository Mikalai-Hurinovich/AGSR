import { renderHook, act } from '@testing-library/react';
import { useTaskTimer } from '@/entity/task/lib/useTaskTimer';

describe('useTaskTimer Hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('returns empty string when no dueDate provided', () => {
    const { result } = renderHook(() => useTaskTimer());
    expect(result.current).toBe('');
  });

  test('returns correct time format when dueDate is in future', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    const { result } = renderHook(() => useTaskTimer(futureDate.toISOString()));
    expect(result.current).toMatch(/1d \d+h \d+m \d+s/);
  });

  test('updates time left every second', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    const { result } = renderHook(() => useTaskTimer(futureDate.toISOString()));
    const initialValue = result.current;

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current).not.toBe(initialValue);
  });
});
