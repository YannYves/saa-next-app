import React from "react";
import { loadPosts } from "../../lib/load-posts";

export default function Home({ posts }: { posts: any }) {
  return <div>Home</div>;
}

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts(
    process.env.STRAPI_LOCAL + "/annonce-regular-posts"!
  );

  // Props returned will be passed to the page component
  return { props: { posts } };
}
