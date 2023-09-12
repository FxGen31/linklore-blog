import * as React from 'react';

import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
}

// A badge with selected Tailwind CSS color
function Badge({ className, color, ...props }: BadgeProps) {
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'red':
        return 'border-transparent bg-red-200 text-red-800 hover:bg-red-800 hover:text-white';
      case 'orange':
        return 'border-transparent bg-orange-200 text-orange-800 hover:bg-orange-800 hover:text-white';
      case 'yellow':
        return 'border-transparent bg-yellow-200 text-yellow-800 hover:bg-yellow-800 hover:text-white';
      case 'lime':
        return 'border-transparent bg-lime-200 text-lime-800 hover:bg-lime-800 hover:text-white';
      case 'green':
        return 'border-transparent bg-green-200 text-green-800 hover:bg-green-800 hover:text-white';
      case 'cyan':
        return 'border-transparent bg-cyan-200 text-cyan-800 hover:bg-cyan-800 hover:text-white';
      case 'blue':
        return 'border-transparent bg-blue-200 text-blue-800 hover:bg-blue-800 hover:text-white';
      case 'indigo':
        return 'border-transparent bg-indigo-200 text-indigo-800 hover:bg-indigo-800 hover:text-white';
      case 'pink':
        return 'border-transparent bg-pink-200 text-pink-800 hover:bg-pink-800 hover:text-white';
      case 'slate':
        return 'border-transparent bg-slate-200 text-slate-800 hover:bg-slate-800 hover:text-white';
      default:
        return 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80';
    }
  };
  return (
    <div
      className={cn(
        getBadgeColor(color),
        className,
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 md:px-3.5 md:text-sm'
      )}
      {...props}
    />
  );
}

export { Badge };
