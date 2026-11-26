import { site } from '../config/site';

export interface PostMeta {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  service: 'linkMovix' | 'fleetMovix';
  client: string;
  result?: string; // headline result, e.g. '-18% cost per drop'
  example?: boolean; // template content, never published
}
interface Mod { frontmatter: PostMeta; Content: any; file: string }

const mods = import.meta.glob<Mod>('../content/blog/*.md', { eager: true });

export const posts = Object.values(mods)
  .map((m) => ({ ...m.frontmatter, slug: m.file.split('/').pop()!.replace(/\.md$/, ''), Content: m.Content }))
  .sort((a, b) => b.date.localeCompare(a.date));

/** Posts that may go in the sitemap: only when the blog is public, and never templates. */
export const publicPosts = site.blogPublic ? posts.filter((p) => !p.example) : [];
