import { NextPage } from "next";
import { Collections } from "./components/collection";

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
        <h2 className="text-center">Collections</h2>
        <Collections collections={collections} />
      </div>
    </main>
  );
}
