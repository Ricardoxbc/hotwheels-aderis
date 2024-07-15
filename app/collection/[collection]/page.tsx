export default function Home({ params }: { params: { collection: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-2">
      <div>
        <h2 className="text-center">Get cars from collection: {params?.collection}</h2>
      </div>
    </main>
  );
}
