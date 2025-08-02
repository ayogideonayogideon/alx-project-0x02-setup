import { CardProps } from '../../interfaces';

const Card = ({ title, content }: CardProps) => (
  <div className="p-4 mb-4 border rounded shadow-md">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;