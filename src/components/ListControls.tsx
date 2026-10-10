import type { SortOption } from "../hooks/useGiftListView";

interface ListControlsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  onExport: () => void;
}

function ListControls({ sortOption, onSortChange, onExport }: ListControlsProps) {
  return (
    <div className="list-controls">
      <button
        className={sortOption === "name" ? "active" : undefined}
        onClick={() => onSortChange("name")}
      >
        Sort A–Z
      </button>
      <button
        className={sortOption === "price" ? "active" : undefined}
        onClick={() => onSortChange("price")}
      >
        Sort by Price
      </button>
      <button
        className={sortOption === "new" ? "active" : undefined}
        onClick={() => onSortChange("new")}
      >
        Show New Only
      </button>
      <button
        className={sortOption === "Lego" ? "active" : undefined}
        onClick={() => onSortChange("Lego")}
      >
        Lego
      </button>
      <button onClick={() => onSortChange(null)}>Reset</button>

      <button className="export-button" onClick={onExport}>
        ⬇ Download Excel
      </button>
    </div>
  );
}

export default ListControls;
