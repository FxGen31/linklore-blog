import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface PostCategoryFilterProps extends HTMLAttributes<HTMLDivElement> {
  categories: string[];
  currentCategory: string;
  onCategoryChange: (_: string) => void;
}

// Category selection list
export default function PostCategoryFilter({
  categories,
  className,
  currentCategory,
  onCategoryChange,
}: PostCategoryFilterProps) {
  return (
    <ScrollArea className={cn(className, 'max-w-2xl')}>
      <div className='flex space-x-2'>
        <Button
          onClick={() => onCategoryChange('all')}
          size='lg'
          variant={currentCategory === 'all' ? 'default' : 'ghost'}
          className='flex-shrink-0'
        >
          All categories
        </Button>
        {categories?.map((category, idx) => (
          <Button
            onClick={() => onCategoryChange(category)}
            key={`${category}-${idx}`}
            size='lg'
            variant={currentCategory === category ? 'default' : 'ghost'}
            className='flex-shrink-0'
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
}
