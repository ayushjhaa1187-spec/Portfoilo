import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    image: { type: 'string' },
    author: { type: 'string', default: 'Ayush Kumar Jha' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(/^blog\//, ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace(/^blog\//, '')}`,
    },
  },
}));

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `case-studies/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    projectSlug: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    image: { type: 'string' },
    techStack: { type: 'list', of: { type: 'string' } },
    githubUrl: { type: 'string' },
    liveUrl: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (cs) => cs._raw.flattenedPath.replace(/^case-studies\//, ''),
    },
    url: {
      type: 'string',
      resolve: (cs) => `/case-studies/${cs._raw.flattenedPath.replace(/^case-studies\//, '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, CaseStudy],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rehypePrettyCode as any,
        {
          theme: 'one-dark-pro',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
