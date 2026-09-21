import { FcRating } from "react-icons/fc";
import type { IData } from "../../Types/DataType";

type ExploreCardProps = {
  explore: IData;
  isSelected: boolean;
  onAdd: (tech: IData) => void;
};


const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-green-50 text-green-600",
  Fast: "bg-orange-50 text-orange-500",
  Production: "bg-slate-100 text-slate-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-purple-50 text-purple-600",
  Robust: "bg-indigo-50 text-indigo-600",
  Modern: "bg-cyan-50 text-cyan-600",
  Containers: "bg-blue-50 text-blue-500",
};

const ExploreCard = ({ explore, isSelected, onAdd }: ExploreCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = explore;

  return (
    <div
      className={`flex flex-col rounded-xl border bg-base-100 p-4 shadow-sm transition hover:shadow-md ${
        isSelected ? "border-slate-900" : "border-base-200"
      }`}
    >
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="h-8 w-8 object-contain" />
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
            badgeStyles[badge] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-3 font-semibold">{name}</h3>
      <p className="mt-1 flex-1 text-xs text-gray-500">{description}</p>

      <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
        <span className="rounded border border-base-300 px-1.5 py-0.5">
          {category}
        </span>
        <span>{difficulty}</span>
        <span className="flex items-center gap-1">
          <FcRating /> {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(explore)}
        disabled={isSelected}
        className="btn btn-sm mt-3 w-full border-slate-900 bg-slate-900 text-white hover:bg-slate-700 disabled:border-base-300 disabled:bg-base-200 disabled:text-gray-400"
      >
        {isSelected ? "Added ✓" : "Add to Stack"}
      </button>
    </div>
  );
};

export default ExploreCard;