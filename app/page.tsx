import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "Collection name 1",
    totalCars: 10,
    currentCars: 3,
    color: "",
  },
  {
    name: "Collection name 2",
    totalCars: 10,
    currentCars: 3,
    color: "",
  },
  {
    name: "Collection name 3",
    totalCars: 10,
    currentCars: 3,
    color: "",
  },
];

const cars = [
  {
    name: "Car name",
    collection: "Collection name",
    color: "",
    photo: "",
    number: 1,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-2">
      <div>
        <h2 className="text-center">Colleciones</h2>
        <Collections collections={collections} />
      </div>
    </main>
  );
}

export const Collections = ({ collections }: { collections: any[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {collections.map((c) => (
        <Collection key={c.name} collection={c} />
      ))}
    </div>
  );
};

export const Collection = ({ collection }: { collection: any }) => {
  return (
    <Link
      href={`/collection/${collection.name}`}
      className="h-24 w-36 rounded-lg shadow-md"
    >
      <p>{collection.name}</p>
      <p>
        {collection.currentCars} / {collection.totalCars}
      </p>
    </Link>
  );
};
