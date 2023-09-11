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
                'flex items-center rounded-3xl bg-card border p-3 sm:p-6 transition shadow-sm hover:shadow-md'
            )}
            {...props}
        >
            <div className='flex flex-col grow'>
                <div className='space-y-3 sm:space-y-5'>
                    {/* Post keywords */}
                    <div className='flex space-x-2 md:space-x-3 gap-y-2 flex-wrap'>
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
                    <h2 className='font-semibold text-sm md:text-base line-clamp-2'>
                        {project.name}
                    </h2>
                    <BylineMetadata date={project.updatedAt} />
                </div>
                {/* Actions */}
                <div className='flex items-center justify-start gap-2 mt-2'>
                    {project.links.gitHub && (
                        <a
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
            <div className='hidden sm:block relative flex-shrink-0 w-24 h-24 sm:w-40 sm:h-full ms-3 sm:ms-5 rounded-2xl overflow-hidden'>
                <Image
                    sizes='(max-width: 600px) 180px, 400px'
                    className='aspect-square object-cover w-full h-full'
                    fill
                    src={project.coverImage}
                    alt={`${project.name} cover image`}
                />
            </div>
        </div>
    );
}
