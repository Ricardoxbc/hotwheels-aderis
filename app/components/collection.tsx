import Link from "next/link";

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
  