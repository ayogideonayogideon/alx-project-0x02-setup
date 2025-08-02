import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { Post } from '../interfaces'; // ✅ Import the Post interface

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]); // ✅ Type annotation for posts

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data)); // ✅ Cast fetched data to Post[]
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="mb-4 text-2xl font-bold">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
}