import Link from "next/link";

export default async function DetailContact() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/">Home</Link>
      <h1 className="font-bold mb-6">Detail Contact</h1>
    </main>
  );
}
