import type { IData } from "../../Types/DataType";

type YourStackProps = {
  selected: IData[];
  onRemove: (tech: IData) => void;
  onRemoveAll: () => void;
};

const YourStack = ({ selected, onRemove, onRemoveAll }: YourStackProps) => {
  const count = selected.length;

  return (
    <aside className="self-start rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sticky top-4">
      <h3 className="text-2xl font-bold">Your Stack</h3>

      <p className="mt-1 text-sm text-gray-400">
        {count === 0
          ? "No technologies selected yet."
          : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
      </p>

      
      {count === 0 && (
        <div className="mt-5 rounded-2xl border border-dashed border-base-300 py-8 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      )}

      
      {count > 0 && (
        <>
          <ul className="mt-5 space-y-3">
            {selected.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-2xl border border-base-200 p-3"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                />

                <div className="flex-1">
                  <p className="font-bold">{tech.name}</p>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </div>

                <button
                  onClick={() => onRemove(tech)}
                  aria-label={`Remove ${tech.name}`}
                  className="btn btn-ghost btn-sm text-lg text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-2xl border border-red-400 py-2 text-lg font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;