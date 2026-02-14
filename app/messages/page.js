import Messages from '@/components/messages';

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    //// cache: 'no-store', //~ disable caching for this request; default in  next.js 15^
    next: {
      revalidate: 10 //~ revalidate this data every 10 seconds;
    },
  });

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
