import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

export default function HomePage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 mb-4 text-white bg-green-600 rounded"
        >
          Add Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {showModal && (
          <PostModal
            onSubmit={handleAddPost}
            onClose={() => setShowModal(false)}
          />
        )}
      </main>
    </>
  );
}