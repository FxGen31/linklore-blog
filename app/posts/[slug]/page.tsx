import { allPosts, Post } from 'contentlayer/generated';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import BylineMetadata from '@/components/byline-metadata';
import { ChevronRightIcon, HomeIcon } from '@radix-ui/react-icons';
import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import KeywordsBadgeList from '@/components/keywords-badge-list';
import Link from 'next/link';
import { mdxComponents } from '@/components/mdx-components';

// Generate routes at build time with post file name
export const generateStaticParams = async () =>
    allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }));

// Generate dynamic metadata
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find(
        (post: Post) => post._raw.flattenedPath === params.slug
    );
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
    return { title: post.title };
};

export default function PostPage({ params }: { params: { slug: string } }) {
    // Get the post for the current route segment
    const post = allPosts.find(
        (post: Post) => post._raw.flattenedPath === params.slug
    );
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    // Markdown file content
    const Content = getMDXComponent(post.body.code);

    return (
        <article className='container relative py-8 lg:py-12'>
            <div className='mx-auto max-w-[85ch]'>
                <div className='space-y-4 sm:space-y-6'>
                    {/* Breadcrumb */}
                    <nav aria-label='Breadcrumb'>
                        <ol className='flex items-center gap-1 text-base'>
                            <li>
                                <Link
                                    href='/#posts'
                                    className='block transition text-muted-foreground hover:text-primary'
                                >
                                    <HomeIcon />
                                    <span className='sr-only'> Home </span>
                                </Link>
                            </li>

                            <li>
                                <ChevronRightIcon />
                            </li>

                            <li>
                                <div className='transition text-muted-foreground hover:text-primary'>
                                    {post.title}
                                </div>
                            </li>
                        </ol>
                    </nav>
                    {/* Post title */}
                    <h1 className='font-semibold text-3xl/snug lg:text-5xl/tight'>
                        {post.title}
                    </h1>
                    {/* Post keywords */}
                    <KeywordsBadgeList keywords={post.keywords} />
                    <p className='text-muted-foreground text-base lg:text-lg'>
                        {post.description}
                    </p>
                    {/* Post metadata - avatar, author, publish date */}
                    <BylineMetadata
                        date={format(parseISO(post.date), 'LLLL d, yyyy')}
                    />
                </div>
                <hr className='my-4' />
                {/* Post cover image */}
                <div className='w-full mb-8 lg:mb-12'>
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src={post.coverImage}
                            alt={`${post.title} cover`}
                            className='rounded-lg object-cover'
                            sizes='(max-width: 1400px) 100vw, 1456px'
                            fill
                            priority
                        />
                    </AspectRatio>
                </div>
                {/* Post content with custom markdown styles */}
                <main>
                    <Content components={mdxComponents} />
                </main>
            </div>
        </article>
    );
}
