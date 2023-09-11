import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import { visit } from 'unist-util-visit';

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        coverImage: {
            type: 'string',
            description: 'The cover image path of the post',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The brief description of the post',
            required: true,
        },
        keywords: {
            type: 'list',
            of: { type: 'string' },
            description: 'The keywords of the post',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === 'element' && node?.tagName === 'pre') {
                        const [codeEl] = node.children;

                        if (codeEl.tagName !== 'code') return;

                        node.raw = codeEl.children?.[0].value;
                    }
                });
            },
            [
                rehypePrettyCode,
                {
                    theme: {
                        dark: 'github-dark',
                        light: 'github-light',
                    },
                },
            ],
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === 'element' && node?.tagName === 'div') {
                        if (
                            !(
                                'data-rehype-pretty-code-fragment' in
                                node.properties
                            )
                        ) {
                            return;
                        }

                        for (const child of node.children) {
                            if (child.tagName === 'pre') {
                                child.properties['raw'] = node.raw;
                            }
                        }
                    }
                });
            },
        ],
    },
});
