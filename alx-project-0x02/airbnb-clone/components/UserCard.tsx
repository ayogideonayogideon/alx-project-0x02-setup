import { UserProps } from '../interfaces';

export default function UserCard({ id, name, email, address }: UserProps) {
  return (
    <div className="p-4 mb-4 transition border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="mt-2 text-gray-600">{email}</p>
      <p className="mt-4 text-sm text-gray-400">
        {address.street}, {address.city}
      </p>
    </div>
  );
}