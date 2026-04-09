export interface PostFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  thumbnail?: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  url: string;
}
