import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">About Page</h1>
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </main>
    </>
  );
}