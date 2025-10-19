import { useState } from "react";
import Countdown from "../components/Countdown";

interface Gift {
  name: string;
  price?: string;
  shop?: string;
  link?: string;
}

function ChristmasList() {
  const [sortOption, setSortOption] = useState<"name" | "price" | null>(null);

  const christmasDate = new Date(`${new Date().getFullYear()}-12-25T00:00:00`);

  const gifts: Gift[] = [
    { name: "Crocs", price: "£10.00", link: "https://www.crocs.co.uk" },
    { name: "Stanley Water bottle - Cool Metalic Dark Blue (Mum knows)", price: "£40.00", link: "https://www.stanley1913.com" },
    { name: "Big Gingerbread Man", price: "£10.00", shop: "John Lewis", link: "https://www.johnlewis.com" },
    { name: "Faux fur pillow cases" },
    { name: "Lego Mineral Collection", price: "£50.00", shop: "Lego", link: "https://www.lego.com" },
    { name: "Medal holder" },
    { name: "Gymshark running clothes", shop: "Gymshark", link: "https://www.gymshark.com" },
    { name: "Hamper" },
    { name: "Kinder selection box", price: "£10.00", shop: "B&M" },
    { name: "Ugear Sky watcher Tourbillon Table clock", price: "£74.50", shop: "Amazon", link: "https://www.amazon.co.uk" },
    { name: "Jo Malone - Sandalwood & Spiced Apricot Cologne", price: "£128", shop: "Jo Malone", link: "https://www.jomalone.co.uk/product/25946/139624/colognes/sandalwood-spiced-apricot-cologne" },
    { name: "MOVA Globe", price: "£195", shop: "Amazon", link: "https://www.amazon.co.uk" },
    { name: "Scratch off Globe", price: "£50.00", shop: "Amazon", link: "https://www.amazon.co.uk" },
    { name: "Cho-lo Cherry drink" },
    { name: "Rituals Shower Foam Men", price: "£10.00", shop: "Rituals", link: "https://www.rituals.com" },
    { name: "Rituals Candle", price: "£20.00", shop: "Rituals", link: "https://www.rituals.com" },
    { name: "Shortbread tin", price: "£15.00" },
  ];

  // Calculate total from numeric prices only
  const total = gifts.reduce((sum, gift) => {
    const match = gift.price?.match(/£([\d.]+)/);
    return match ? sum + parseFloat(match[1]) : sum;
  }, 0);

  // Sort copy of gifts (without mutating)
  const sortedGifts = [...gifts].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "price") {
      const priceA = parseFloat(a.price?.replace(/[£,]/g, "") || "0");
      const priceB = parseFloat(b.price?.replace(/[£,]/g, "") || "0");
      return priceB - priceA;
    }
    return 0;
  });

  return (
    <div className="list-page">
      <Countdown targetDate={christmasDate} label="Christmas" />

      <h2 className="total-price">🎁 Total: £{total.toFixed(2)}</h2>

      {/* Sorting Controls */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={() => setSortOption("name")}>Sort A–Z</button>
        <button onClick={() => setSortOption("price")}>Sort by Price</button>
        <button onClick={() => setSortOption(null)}>Reset</button>
      </div>

      <table className="list-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Shop</th>
          </tr>
        </thead>
        <tbody>
          {sortedGifts.map((gift, index) =>
            gift.link ? (
              <a
                key={index}
                href={gift.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", display: "contents" }}
              >
                <tr style={{ cursor: "pointer" }}>
                  <td>{gift.name}</td>
                  <td>{gift.price || "—"}</td>
                  <td>{gift.shop || "—"}</td>
                </tr>
              </a>
            ) : (
              <tr key={index}>
                <td>{gift.name}</td>
                <td>{gift.price || "—"}</td>
                <td>{gift.shop || "—"}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ChristmasList;
