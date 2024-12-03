import { Story, Meta } from '@storybook/react/types-6-0';
import { PostCard, PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default title',
    cover: '/images/node.png',
  },
} as Meta;

export const NodeCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

export const TypeScriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

TypeScriptCover.args = {
  cover: '/images/typescript.jpeg',
};
