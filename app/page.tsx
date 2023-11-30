import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold mb-6">Contacts</h1>
      <Link href="/contacts">Contacts</Link>
    </main>
  );
}
