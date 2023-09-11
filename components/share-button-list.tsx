import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

interface ShareButtonListProps extends HTMLAttributes<HTMLDivElement> {
    iconSize: number;
    shareUrl: string;
    title: string;
}

// Share posts on social medias
export default function ShareButtonList({
    className,
    iconSize,
    shareUrl,
    title,
    ...props
}: ShareButtonListProps) {
    return (
        <div className={cn(className, 'flex flex-wrap space-x-2')} {...props}>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                rel='noopener noreferrer'
                target='_blank'
            >
                <Button
                    size='icon'
                    className='w-8 h-8 bg-[#0077b5] hover:bg-[#0077b5]'
                >
                    <LinkedInLogoIcon className='h-4 w-4' />
                </Button>
            </a>
            <a
                href={`http://www.twitter.com/share?url=${shareUrl}`}
                rel='noopener noreferrer'
                target='_blank'
            >
                <Button
                    size='icon'
                    className='w-8 h-8 bg-[#1da1f2] hover:bg-[#1da1f2]'
                >
                    <TwitterLogoIcon className='h-4 w-4' />
                </Button>
            </a>
        </div>
    );
}
