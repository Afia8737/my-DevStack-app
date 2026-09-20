import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import Banner from "./components/Banner";
import Explore from "./components/exploreTec/Explore";
import YourStack from "./components/exploreTec/YourStack";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import type { IData } from "./Types/DataType";

const fetchExplore = async (): Promise<IData[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) throw new Error("Failed to load technologies");
  return res.json();
};

const explorePromise = fetchExplore();

function App() {
  const [selected, setSelected] = useState<IData[]>([]);

  const handleAdd = (tech: IData) => {
    if (selected.some((t) => t.id === tech.id)) return;

    setSelected([...selected, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (tech: IData) => {
    setSelected(selected.filter((t) => t.id !== tech.id));
    toast(`${tech.name} removed`);
  };

  const handleRemoveAll = () => {
    setSelected([]);
    toast("Stack cleared");
  };

  return (
    <>
      <Nav />
      <Banner />
      <main>
        <section className="container mx-auto my-10 px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Explore the{" "}
              <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Pick technologies to build your ideal stack.
            </p>
          </div>

          <div className="grid  gap-5 grid-cols-4">
            <Suspense
              fallback={
                <div className="col-span-3">Loading.....
                </div>
              }
            >
              <Explore
                explorePromise={explorePromise}
                selected={selected}
                onAdd={handleAdd}
              />
            </Suspense>

            <YourStack
              selected={selected}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;