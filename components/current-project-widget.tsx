import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { Project } from '@/configs/projects-config';
import { StarIcon } from '@radix-ui/react-icons';

interface CurrentProjectWidgetProps extends HTMLAttributes<HTMLDivElement> {
  projects: Project[];
}

// Side widget to showcase the project which you are currently working on
export default function CurrentProjectWidget({
  projects,
  className,
  ...props
}: CurrentProjectWidgetProps) {
  // Get the current project
  const currentProject = projects.find((project) => project.isCurrent);

  // If it exists
  return currentProject ? (
    <div className={cn(className, 'my-8 rounded-3xl bg-card')} {...props}>
      <div className='flex items-center justify-between border-b p-4 xl:p-5'>
        <h2 className='text-lg font-semibold'>🌱 Current Project</h2>
      </div>
      <div className='grid grid-cols-[1fr_110px] flex-col items-start gap-4 space-y-0 p-6'>
        <div className='space-y-1'>
          <h3 className='text-2xl font-semibold leading-none tracking-tight'>
            {currentProject.name}
          </h3>
          <p className='text-sm text-muted-foreground'>
            {currentProject.description}
          </p>
        </div>
        <a
          href={currentProject.links.gitHub}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='secondary' className='px-3 shadow-none'>
            <StarIcon className='mr-2 h-4 w-4' />
            <span className='sr-only'>Star icon</span>
            Github
          </Button>
        </a>
      </div>
      <div className='p-6 pt-0'>
        <div className='flex justify-between space-x-4 text-sm text-muted-foreground'>
          <div className='flex items-center'>
            <StarIcon className='mr-1 h-3 w-3' />
            <span className='sr-only'>Star icon</span>
            20k
          </div>
          <div>{currentProject.updatedAt}</div>
        </div>
      </div>
    </div>
  ) : null;
}
