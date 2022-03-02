export async function getBlogData(id) {
  const res = await fetch(`http://localhost:3000/api/wiki`);
  const blogs = await res.json();
  id = +id - 1;

  return {
    ...blogs[id],
  };
}
