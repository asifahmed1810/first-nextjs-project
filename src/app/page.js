

async function getPosts() {
  const res=await fetch(' https://jsonplaceholder.typicode.com/posts',{
    next:{revalidate:60}
  });
  return res.json();
  
}

export default async function Home() {

  const posts=await getPosts();



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  );
}
