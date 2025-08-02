import { PostProps } from '../../interfaces';

const PostCard = ({ title, content, userId }: PostProps) => (
  <div className="p-4 mb-4 border rounded shadow-md">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{content}</p>
    <p className="text-sm text-gray-500">User ID: {userId}</p>
  </div>
);

export default PostCard;