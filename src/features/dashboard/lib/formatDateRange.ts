import type { TDateRange } from '@/entities';

export function formatDateRange(dateRange: TDateRange): string {
  const start = new Date(dateRange.startDate);
  const end = new Date(dateRange.endDate);

  const monthFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const shortMonthFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const dayFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const yearFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  });

  switch (dateRange.type) {
    case 'month':
      return monthFormatter.format(start);

    case 'week':
      return `${shortMonthFormatter.format(start)} – ${shortMonthFormatter.format(end)}`;

    case 'day':
      return dayFormatter.format(start);

    case 'year':
      return yearFormatter.format(start);

    default:
      return '';
  }
}
