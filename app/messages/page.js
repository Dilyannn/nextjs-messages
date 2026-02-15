import Messages from '@/components/messages';

//export const revalidate = 10; //~ revalidate this data every 10 seconds; (alternative to using the 'next' option in fetch)
// export const dynamic = 'force-dynamic'; //~ force this page to be rendered on the server for every request (alternative to using the 'next' option in fetch)

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
