import { PrismaClient } from "@prisma/client";
import { TContact } from "../types";
import Link from "next/link";

const prisma = new PrismaClient();

const fetchContacts = async (): Promise<TContact[]> => {
  return await prisma.contacts.findMany();
};

export default async function Table() {
  const contacts = await fetchContacts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/">Home</Link>
      <h1 className="font-bold mb-6">Contacts</h1>
      <table>
        <thead>
          <tr>
            <td className="px-4 py-2 border border-black">#</td>
            <td className="px-4 py-2 border border-black">Name</td>
            <td className="px-4 py-2 border border-black">Phone</td>
            <td className="px-4 py-2 border border-black">Email</td>
            <td className="px-4 py-2 border border-black">Actions</td>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact: TContact) => {
            return (
              <tr key={contact.id}>
                <td className="px-4 py-2 border border-black">{contact.id}</td>
                <td className="px-4 py-2 border border-black">
                  {contact.name}
                </td>
                <td className="px-4 py-2 border border-black">
                  {contact.phone}
                </td>
                <td className="px-4 py-2 border border-black">
                  {contact.email}
                </td>
                <td className="px-4 py-2 border border-black">
                  <button
                    type="button"
                    className="border border-black px-2 py-1 rounded-md mr-2 w-24"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="border border-black px-2 py-1 rounded-md w-24"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
