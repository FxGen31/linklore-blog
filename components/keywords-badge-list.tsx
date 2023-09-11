import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { keywordColorMapping } from '@/configs/keyword-colors-config';

interface KeywordsBadgeListProps extends HTMLAttributes<HTMLDivElement> {
    keywords: string[];
}

// Display post keywords
export default function KeywordsBadgeList({
    className,
    keywords,
    ...props
}: KeywordsBadgeListProps) {
    return (
        <div
            className={cn(className, 'flex flex-wrap space-x-2 md:space-x-3')}
            {...props}
        >
            {keywords.map((keyword) => (
                // ContentLayer list field type appends a carriage return character `\r` to the last element
                <Badge
                    key={keyword}
                    color={
                        keywordColorMapping[
                            keyword.replace(
                                /\r$/,
                                ''
                            ) as keyof typeof keywordColorMapping
                        ]
                    }
                    className='cursor-pointer'
                >
                    {keyword}
                </Badge>
            ))}
        </div>
    );
}
