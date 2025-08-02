import { useState } from 'react';

interface PostModalProps {
  onSubmit: (title: string, content: string) => void;
  onClose: () => void;
}

const PostModal = ({ onSubmit, onClose }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit(title, content);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded shadow-md w-96">
        <h2 className="mb-4 text-xl">Add Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <button onClick={handleSubmit} className="px-4 py-2 mr-2 text-white bg-blue-600 rounded">
          Submit
        </button>
        <button onClick={onClose} className="px-4 py-2 text-white bg-gray-400 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PostModal;