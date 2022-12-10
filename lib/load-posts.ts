// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts(endpoint: string) {
  // Call an external API endpoint to get posts
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}
