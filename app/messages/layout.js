import { getMessages } from "@/lib/messages.js";

export default async function MessagesLayout({ children }) {
  // const response = await fetch('http://localhost:8080/messages');
  // const messages = await response.json();

  const messages = await getMessages(); //& simulate a delay for fetching messages; this will trigger the loading.js state for this page
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
