'use client';

import { cn } from '@/lib/utils';
import FeaturedPostCard from '@/components/featured-post-card';
import Pagination from '@/components/pagination';
import { Post } from 'contentlayer/generated';
import PostCategoryFilter from '@/components/post-category-filter';
import RegularPostCard from '@/components/regular-post-card';
import { useMemo, useState } from 'react';

interface PostListSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    posts: Post[];
}

// Maximum number of posts per page
const PAGE_SIZE = 4;

// Display a collection of posts
export default function PostListSection({
    className,
    posts,
    ...props
}: PostListSectionProps) {
    // Selected category
    const [currentCategory, setCurrentCategory] = useState('all');
    // Current page in pagination (start from 1)
    const [currentPage, setCurrentPage] = useState(1);

    // Filter the posts based on the selected category
    const filteredPosts = useMemo(() => {
        setCurrentPage(1);
        return posts.filter(
            (post) =>
                post.keywords.includes(currentCategory) ||
                currentCategory === 'all'
        );
    }, [posts, currentCategory]);

    const displayingPosts = useMemo(() => {
        // Calculate the range of posts to display on the current page
        const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
        const lastPageIndex = firstPageIndex + PAGE_SIZE;
        return filteredPosts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredPosts]);

    return (
        <section
            className={cn(className, 'container relative')}
            id='posts'
            {...props}
        >
            <header className='flex flex-col'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight'>
                    ✨ Latest Posts
                </h2>
                <span className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-muted-foreground max-w-3xl mb-8 md:mb-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cum molestias voluptates aut eveniet repellat explicabo
                    accusamus est incidunt corrupti!
                </span>
                {/* Category selection list */}
                <PostCategoryFilter
                    categories={posts
                        .flatMap((post) => post.keywords)
                        .filter(
                            (value, index, self) =>
                                self.indexOf(value) === index
                        )}
                    currentCategory={currentCategory}
                    onCategoryChange={setCurrentCategory}
                />
            </header>
            {/* Display maximum four posts per page, a highlighted one and the other three */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 '>
                {displayingPosts.length > 0 && (
                    <>
                        <FeaturedPostCard
                            post={displayingPosts[0]}
                            className='lg:mb-16'
                        />
                        <div className='grid gap-8 lg:grid-rows-3'>
                            {displayingPosts
                                .filter((_, i) => i < 4 && i > 0)
                                .map((post, idx) => (
                                    <RegularPostCard
                                        key={`${post.title}-${idx}`}
                                        post={post}
                                    />
                                ))}
                        </div>
                    </>
                )}
            </div>
            {/* Pagination */}
            <Pagination
                className='mt-8 lg:mt-12'
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                pageSize={PAGE_SIZE}
                siblingNumber={0}
                totalNumber={filteredPosts.length} // Use the length of the filtered array
            />
        </section>
    );
}
