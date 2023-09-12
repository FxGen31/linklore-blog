import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/configs/site-config';

// Blog author profile card
export default function AboutMe({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} id='about-me' {...props}>
      {/* Background image */}
      <div className='relative h-40 w-full md:h-60 2xl:h-72'>
        <div className='absolute inset-0'>
          <Image
            className='h-full w-full object-cover'
            sizes='100vw'
            fill
            priority
            src='/images/background.jpg'
            alt='about me section background image'
          />
        </div>
      </div>
      <div className='container -mt-10 lg:-mt-16'>
        <div className='relative z-40 flex flex-col rounded-3xl border bg-card p-5 shadow-xl md:flex-row md:rounded-[48px] lg:p-8'>
          {/* Avatar */}
          <Avatar className='h-20 w-20 shadow-2xl ring-4 ring-card lg:h-36 lg:w-36'>
            <AvatarImage
              src={siteConfig.avatar}
              alt={`@${siteConfig.metaData.author} avatar`}
            />
            <AvatarFallback>{siteConfig.metaData.author}</AvatarFallback>
          </Avatar>
          <div className='pt-5 md:ml-6 md:pt-1 lg:ml-12'>
            <div className='max-w-screen-md space-y-4'>
              {/* Author name */}
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                <span>{siteConfig.metaData.author}</span>
                <span
                  role='img'
                  className='ml-2 text-xl sm:text-2xl lg:text-3xl'
                  aria-label='smiley-face'
                >
                  &#x1F60A;
                </span>
              </h2>
              {/* Self introduction */}
              <span className='block text-sm text-muted-foreground'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores voluptatum beatae assumenda consequatur quasi quas,
                impedit aliquam eveniet obcaecati veritatis deleniti minus
                debitis labore ducimus maxime odit veniam? Sed, velit.
              </span>
              {/* Social links */}
              <div className='flex space-x-4 text-subdued-foreground'>
                <Link
                  href={siteConfig.links.gitHub}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <GitHubLogoIcon className='h-6 w-6' />
                  <span className='sr-only'>GitHub logo icon</span>
                </Link>
                <Link
                  href={siteConfig.links.linkedIn}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <LinkedInLogoIcon className='h-6 w-6' />
                  <span className='sr-only'>LinkedIn logo icon</span>
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <TwitterLogoIcon className='h-6 w-6' />
                  <span className='sr-only'>Twitter logo icon</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute end-5 top-5 flex justify-end'>
            <Badge color='red'>Web Developer</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
