import { cn } from '@/lib/utils';
import CurrentProjectWidget from '@/components/current-project-widget';
import { HTMLAttributes } from 'react';
import { projects } from '@/configs/projects-config';
import ProjectCard from '@/components/project-card';
import TrendingTagsWidget from '@/components/trending-tags-widget';

// Display a collection of portfolio projects
export default function ProjectListSection({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(className, 'container relative')}
      id='projects'
      {...props}
    >
      <header className='flex flex-col'>
        <h2 className='text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl'>
          🧩 Projects
        </h2>
        <span className='mb-8 mt-2 block max-w-3xl text-base font-normal text-muted-foreground sm:text-xl md:mb-10 md:mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi.
        </span>
      </header>
      <div className='flex flex-col lg:flex-row'>
        {/* Left section - list of project cards */}
        <div className='w-full lg:w-3/5 xl:w-2/3'>
          <div className='grid grid-cols-1 gap-8 '>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
        {/* Right section - side widgets */}
        <div className='mt-8 w-full lg:mt-0 lg:w-2/5 lg:ps-12 xl:w-1/3'>
          {/* Trending tags across the projects */}
          <TrendingTagsWidget
            tagCounts={Object.entries(
              projects.reduce((tagCounts: Record<string, number>, project) => {
                project.tags.forEach((tag) => {
                  tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                });
                return tagCounts;
              }, {})
            ).map(([tag, count]) => ({ tag, count }))}
          />
          {/* Project in progress */}
          <CurrentProjectWidget projects={projects} />
        </div>
      </div>
    </section>
  );
}
