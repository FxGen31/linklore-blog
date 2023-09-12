import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface TrendingTagsWidgetProps extends HTMLAttributes<HTMLDivElement> {
  tagCounts: { tag: string; count: number }[];
}

// Trending tags across the projects
export default function TrendingTagsWidget({
  tagCounts,
  className,
  ...props
}: TrendingTagsWidgetProps) {
  return (
    <div
      className={cn(className, 'overflow-hidden rounded-3xl bg-card')}
      {...props}
    >
      <div className='flex items-center justify-between border-b p-4 xl:p-5'>
        <h2 className='flex-grow text-lg font-semibold'>🚀 Trending Tags</h2>
      </div>
      <div className='flex flex-wrap gap-2 p-4 xl:p-5 '>
        {tagCounts.map((tag) => (
          <Badge
            className='mb-3'
            key={tag.tag}
            color='blue'
          >{`${tag.tag} (${tag.count})`}</Badge>
        ))}
      </div>
    </div>
  );
}
