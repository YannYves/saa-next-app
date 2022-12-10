import { loadPosts } from "../../../lib/load-posts";

const Post = (post: any) => {
  console.log(post, "post");
  return <p>Post: {post.id}</p>;
};

export async function getStaticPaths() {
  const posts = await loadPosts(
    process.env.STRAPI_LOCAL + "/annonce-regular-posts"!
  );

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { pid: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const pid = context.params.pid;
  const post = await loadPosts(
    process.env.STRAPI_LOCAL + `/annonce-regular-posts/${pid}`!
  );

  return { props: { post } };
}

export default Post;
