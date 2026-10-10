import { useState } from "react";
import type { GiftList } from "../data/types";
import GiftTable from "./GiftTable";

interface PastListsProps {
  lists: GiftList[];
}

function PastLists({ lists }: PastListsProps) {
  const [openListId, setOpenListId] = useState<string | null>(null);

  if (lists.length === 0) {
    return null;
  }

  return (
    <div className="past-lists">
      <h3 className="past-lists-heading">📜 Past Lists</h3>

      {lists.map((list) => {
        const isOpen = openListId === list.id;
        return (
          <div className="past-list-card" key={list.id}>
            <button
              className="past-list-card-header"
              onClick={() => setOpenListId(isOpen ? null : list.id)}
              aria-expanded={isOpen}
            >
              <span className="past-list-card-title">
                <span className={`chevron ${isOpen ? "open" : ""}`}>▸</span>
                {list.label}
              </span>
              <span className="past-list-count">{list.items.length} items</span>
            </button>

            <div className={`collapsible ${isOpen ? "open" : ""}`}>
              <div className="collapsible-inner past-list-card-body">
                <GiftTable gifts={list.items} emptyMessage="This list is empty." />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PastLists;
