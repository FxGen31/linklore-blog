import AboutMe from '@/components/about-me';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import PostListSection from '@/components/post-list-section';
import ProjectListSection from '@/components/project-list-section';

export default function Home() {
    // Get all posts sorted by publish date
    const posts = allPosts.sort((a: Post, b: Post) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
    return (
        <>
            {/* Blog author profile card */}
            <AboutMe />
            {/* A collection of posts */}
            <PostListSection posts={posts} className='pt-16 lg:pt-28' />
            {/* Project portfolio */}
            <ProjectListSection className='py-16 lg:py-28' />
        </>
    );
}
