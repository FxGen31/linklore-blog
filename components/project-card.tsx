import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import BylineMetadata from '@/components/byline-metadata';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Project } from '@/configs/projects-config';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
}

// Display a portfolio project
export default function ProjectCard({
  className,
  project,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        className,
        'flex items-center rounded-3xl border bg-card p-3 shadow-sm transition hover:shadow-md sm:p-6'
      )}
      {...props}
    >
      <div className='flex grow flex-col'>
        <div className='space-y-3 sm:space-y-5'>
          {/* Post keywords */}
          <div className='flex flex-wrap gap-y-2 space-x-2 md:space-x-3'>
            {project.tags.map((tag) => (
              // ContentLayer list field type appends a carriage return character `\r` to the last element
              <Badge
                key={tag}
                color='blue'
                className='cursor-pointer px-2 py-1 text-xs font-medium'
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className='line-clamp-2 text-sm font-semibold md:text-base'>
            {project.name}
          </h2>
          <BylineMetadata date={project.updatedAt} />
        </div>
        {/* Actions */}
        <div className='mt-2 flex items-center justify-start gap-2'>
          {project.links.gitHub && (
            <a
              aria-label='link to project github'
              href={project.links.gitHub}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Button
                variant='greyscale'
                className='hover:bg-amber-200 hover:text-amber-800'
              >
                GitHub
              </Button>
            </a>
          )}
          {project.links.demo && (
            <a
              aria-label='link to project demo'
              href={project.links.demo}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Button
                variant='outline'
                className='hover:bg-rose-200 hover:text-rose-800'
              >
                Demo
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className='relative ms-3 hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl sm:ms-5 sm:block sm:h-full sm:w-40'>
        <Image
          sizes='(max-width: 768px) 256px, 384px'
          className='aspect-square h-full w-full object-cover'
          fill
          src={project.coverImage}
          alt={`${project.name} cover image`}
        />
      </div>
    </div>
  );
}
