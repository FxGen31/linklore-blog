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
            className={cn(className, 'rounded-3xl overflow-hidden bg-card')}
            {...props}
        >
            <div className='flex items-center justify-between p-4 xl:p-5 border-b'>
                <h2 className='text-lg font-semibold flex-grow'>
                    🚀 Trending Tags
                </h2>
            </div>
            <div className='flex flex-wrap p-4 xl:p-5 gap-2 '>
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
