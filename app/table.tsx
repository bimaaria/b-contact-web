import { TContact } from "./types";

export default function Table(props: { contacts: TContact[] }) {
  const { contacts } = props;
  console.log(contacts);

  return (
    <table>
      <thead>
        <tr>
          <td className="px-4 py-2 border border-black">#</td>
          <td className="px-4 py-2 border border-black">Name</td>
          <td className="px-4 py-2 border border-black">Region</td>
          <td className="px-4 py-2 border border-black">Flag</td>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact: TContact) => {
          return (
            <tr key={contact.id}>
              <td className="px-4 py-2 border border-black">{contact.id}</td>
              <td className="px-4 py-2 border border-black">{contact.name}</td>
              <td className="px-4 py-2 border border-black">{contact.phone}</td>
              <td className="px-4 py-2 border border-black">{contact.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
