import { useState } from "react";
import Countdown from "../components/Countdown";

interface Gift {
  name: string;
  price?: string;
  shop?: string;
  Weblink?: string;
}

function ChristmasList() {
  const [sortOption, setSortOption] = useState<"name" | "price" | null>(null);

  const christmasDate = new Date(`${new Date().getFullYear()}-12-25T00:00:00`);

  const gifts: Gift[] = [
    { name: "Fun Crocs", price: "£10.00", shop: "Crocs/Amazon", Weblink: "https://www.amazon.co.uk/s?k=Crocs&ref=nb_sb_noss" },
    { name: "Stanley Water bottle - Cool Metalic Dark Blue (Mum knows)", price: "£40.00", shop: "Selfridges" },
    { name: "Big Gingerbread Man", price: "£10.00", shop: "John Lewis" },
    { name: "Faux fur pillow cases", price: "£40.00", shop: "Next", Weblink: "https://www.next.co.uk/style/su561052/ay5088" },
    { name: "Lego Mineral Collection", price: "£50.00", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/mineral-collection-21362" },
    { name: "Lego Italian Riviera", price: "£250.00", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/italian-riviera-21359" },
    { name: "Lego Botanical Garden", price: "£290.00", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/the-botanical-garden-21353" },
    { name: "Lego Notre-Dame de Paris", price: "£200.00", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/notre-dame-de-paris-21061" },
    { name: "Medal holder", price: "30.00", shop: "Etsy" },
    { name: "Gymshark running T-shirt and Shorts", shop: "Gymshark", Weblink: "https://www.gymshark.com" },
    { name: "Hamper" },
    { name: "Kinder selection box", price: "£10.00", shop: "B&M" },
    { name: "Ugear Sky watcher Tourbillon Table clock", price: "£74.50", shop: "Amazon", Weblink: "https://www.amazon.co.uk/dp/B09LGTWHKF?ref=ppx_yo2ov_dt_b_fed_asin_title" },
    { name: "Jo Malone - Sandalwood & Spiced Apricot Cologne", price: "£128", shop: "Jo Malone", Weblink: "https://www.jomalone.co.uk/product/25946/139624/colognes/sandalwood-spiced-apricot-cologne" },
    { name: "MOVA Globe", price: "£195", shop: "Amazon", Weblink: "https://www.amazon.co.uk/Globe-Powered-Rotating-Unique-Decoration/dp/B002U21ZZK/ref=sr_1_4?crid=YIGM6NAS3OCX&dib=eyJ2IjoiMSJ9.44KMol966EFxQS30wAR-_dans92-WpqnTPoYNKf6A9qk509c6eYu0kaUh9Y3Kzu2_UP4By2EhfxbE8vYmnqWBQiLCZr5yImcr0z7kVwudlMnaKmakPYFzCyiLONVHc5RgcZ_f1oy_KBnwY6YlfpVRdOiJ71IoVsQH0anEhKLLvRDgVrcbiErcBJI16KWXpUUzeJj-ZLS7IZbiQUZZBud7zfT5VCBf-ahHsxC-RrkzNeH1cd691PbTnrLIu4tyEB_aCiE6E3sYL2u_b8cZeMvw7eSD413vOrCTVpwYxDCLyM.J3I5N8sPa5dBvzdcmmDkNevApfOkKzwmUej1N8kqlwg&dib_tag=se&keywords=Mova+globe&qid=1760908607&sprefix=mova+glob%2Caps%2C110&sr=8-4" },
    { name: "Scratch off Globe", price: "£50.00", shop: "Amazon", Weblink: "https://www.amazon.co.uk/Luckies-London-Scratch-Globes-Gadgets/dp/B0CBQ9FP1J?crid=VIG20NWPFN7Z&dib=eyJ2IjoiMSJ9.aKHw5zPA2RltH_LrrRTSvZIxLfWI_FA8-HqTY5oraj7_l0OKrb5hVNDTpEo6qa7-9sPwPxWUXn51LWMg5Ona_aAT_325XI21Owl45ua-38PiXLUrdZ5vi__PR7PbIoGl4TC_nxsWx-xUhXCM1ceE1YkuDSJc-j2SgN1JH-50vLLWfFoESHzGttlIIn0I3xM4tU3EUqTSfPeUTaAogYc0FXLjayIv3O9WpZklGYDQe3t43txET_2Ps-MlA6pxGWHLpxraQGZdpTdGnOoiLNJ6ap4vGN99KcZHdefUWGyhMm0.2Ent8qOLZvMwknjGEGvvFr1rwspF9Y7JsK5kQvGFYxY&dib_tag=se&keywords=scratch%2Boff%2Bglobe&qid=1760908652&sprefix=scratch%2Boff%2Bglob%2Caps%2C117&sr=8-6&th=1" },
    { name: "Cho-lo Cherry drink (Like in the link)", shop: "Amazon or other markets", Weblink: "https://www.amazon.co.uk/Chu-Lo-Japanese-Inspired-Reduced-Friendly/dp/B09XVL3N2M?crid=P94SWEHADK4V&dib=eyJ2IjoiMSJ9.fC3Hd2m6-TgpkKPfzG3Weupv_jSPQdr_xHpg4gSzwn83W7EfPlZg3-C2q0JUDHrS0F3ANN95CmrNMzoDfF3gXtgJ_dkd_oBCfQ6jf-iHl4fztKsCi6ZUENALUkhQ2Dc9KlOF6xjtbbNCyzc6xdWT-Bw1daTGoMlqiJnl27bp8elRrwy0IKuqGAdO896-bT-5cJC0wsqjWYDTLqc-7DeKsTIkvcBT2SUX2fsdEO9x6i4.Zgj_3skLJVFKupVRt4gx3gmgaGhoP6JE35V5LxeZDY4&dib_tag=se&keywords=Chu-lo+Cherry&qid=1760908678&sprefix=chu-lo+cherry+%2Caps%2C106&sr=8-1" },
    { name: "Rituals Shower Foam Men", price: "£10.90", shop: "Rituals", Weblink: "https://www.rituals.com/en-gb/men/body-hand-care" },
    { name: "Rituals XL Sweet Jasmine Candle", price: "£170.00", shop: "Rituals", Weblink: "https://www.rituals.com/en-gb/sweet-jasmine-scented-candle-2500g-1119477.html" },
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
            gift.Weblink ? (
              <a
                key={index}
                href={gift.Weblink}
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
