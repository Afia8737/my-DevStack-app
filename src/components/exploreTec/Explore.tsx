import { use } from "react";
import type { IData } from "../../Types/DataType";
import ExploreCard from "./ExploreCard";

type ExploreProps = {
  explorePromise: Promise<IData[]>;
  selected: IData[];
  onAdd: (tech: IData) => void;
};

const Explore = ({ explorePromise, selected, onAdd }: ExploreProps) => {
  const allExplore = use(explorePromise);

  return (
    <div className="grid grid-cols-3 gap-5 col-span-4 ">
      {allExplore.map((item) => (
        <ExploreCard
          key={item.id}
          explore={item}
          isSelected={selected.some((s) => s.id === item.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default Explore;