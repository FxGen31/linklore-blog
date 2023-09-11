export interface Project {
    name: string;
    description: string;
    coverImage: string;
    tags: string[];
    updatedAt: string;
    links: {
        gitHub?: string;
        demo?: string;
    };
    isCurrent: boolean;
}

export const projects: Project[] = [
    {
        name: 'Fusce euismod',
        description: 'Senectus et netus et malesuada.',
        coverImage: 'https://source.unsplash.com/niUkImZcSP8',
        tags: ['next.js', 'tailwindcss', 'react', 'contentlayer'],
        updatedAt: 'August 2023',
        links: {
            gitHub: 'https://github.com',
            demo: 'https://github.com',
        },
        isCurrent: true,
    },
    {
        name: 'Lorem ipsum dolor',
        description:
            'Asperiores voluptatum beatae assumenda consequatur quasi quas, impedit aliquam eveniet obcaecati veritatis deleniti minus.',
        coverImage: 'https://source.unsplash.com/HOrhCnQsxnQ',
        tags: ['langchain', 'generative ai', 'next.js'],
        updatedAt: 'June 2023',
        links: {
            gitHub: 'https://github.com',
        },
        isCurrent: false,
    },
    {
        name: 'Asperiores voluptatum',
        description:
            'Asperiores voluptatum beatae assumenda consequatur quasi quas, impedit aliquam eveniet obcaecati veritatis deleniti minus.',
        coverImage: 'https://source.unsplash.com/VZNYO4suM5o',
        tags: ['react', 'tauri', 'vite'],
        updatedAt: 'June 2023',
        links: {
            demo: 'https://github.com',
        },
        isCurrent: false,
    },
];
