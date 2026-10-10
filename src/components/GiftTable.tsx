import type { Gift } from "../data/types";

interface GiftTableProps {
  gifts: Gift[];
  emptyMessage?: string;
}

function GiftTable({ gifts, emptyMessage = "No items yet." }: GiftTableProps) {
  if (gifts.length === 0) {
    return <p className="empty-list-message">{emptyMessage}</p>;
  }

  return (
    <div className="table-scroll">
      <table className="list-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Shop</th>
          </tr>
        </thead>
        <tbody>
          {gifts.map((gift, index) => {
            const cells = (
              <>
                <td className="gift-name-cell">
                  <div className="gift-name">
                    {gift.name}
                    {gift.isNew && <span className="new-tag">NEW</span>}
                  </div>
                  {gift.description && (
                    <div className="gift-description">{gift.description}</div>
                  )}
                </td>
                <td>{gift.price || "—"}</td>
                <td>{gift.shop || "—"}</td>
              </>
            );

            if (gift.weblink) {
              return (
                <a
                  key={index}
                  href={gift.weblink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gift-row-link-wrapper"
                >
                  <tr className="gift-row-link">{cells}</tr>
                </a>
              );
            }

            return <tr key={index}>{cells}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GiftTable;
