import Countdown from "../components/Countdown";

interface Wish {
  name: string;
  price?: string;
  shop?: string;
}

function BirthdayList() {
  const birthdayDate = new Date("2026-06-02T00:00:00");

  const wishes: Wish[] = [
  ];

  return (
    <div className="list-page">
      <Countdown targetDate={birthdayDate} label="My Birthday" />

      <table className="list-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Shop</th>
          </tr>
        </thead>
        <tbody>
          {wishes.map((wish, index) => (
            <tr key={index}>
              <td>{wish.name}</td>
              <td>{wish.price || "—"}</td>
              <td>{wish.shop || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BirthdayList;
