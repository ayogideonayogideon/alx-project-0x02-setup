export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostCardProps {
  title: string;
  content: string;
  userId: number;
}
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
