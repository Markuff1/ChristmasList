import { useState } from "react";
import Countdown from "../components/Countdown";

interface Gift {
  name: string;
  description?: string;
  price?: string;
  shop?: string;
  Weblink?: string;
  isNew?: boolean;
}

function BirthdayList() {
  const [sortOption, setSortOption] =
    useState<"name" | "price" | "new" | "Lego" | null>(null);

  const birthdayDate = new Date(
    `${new Date().getFullYear()}-06-02T00:00:00`
  );

 const gifts: Gift[] = [
    { name: "Lego Ford Model T", price: "£119.99", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/ford-model-t-11376", isNew: true, },
    { name: "Lego Rocking Plants", price: "£17.99", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/rocking-plants-11506", isNew: true, },
    { name: "Lego Hibiscus", price: "£59.99", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/hibiscus-10372", isNew: true, },
    { name: "Lego Rocking Plants", price: "£24.99", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/flowering-cactus-11509", isNew: true, },
    { name: "Lego Shopping Street", price: "£229.99", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/shopping-street-11371", isNew: true, },
    { name: "Lego River Steamboat", price: "£289.99", shop: "Lego", Weblink: "https://www.lego.com/en-gb/product/river-steamboat-21356", isNew: true, },
    { name: "Running Hydration Vest", description: "Might be a better one but something good for Marathons and long runs", price: "~£50", shop: "Decathlon", Weblink: "https://www.decathlon.co.uk/p/unisex-running-competition-hydration-gilet-kiprun-race-900-3l-black/352243/c382m8862851", isNew: true, },
    { name: "SHOKZ Bone Conduction Headphones", price: "£135", shop: "Amazon", Weblink: "https://www.amazon.co.uk/SHOKZ-Conduction-Headphones-Cancelling-Waterproof-Black/dp/B0D2HKQWHX?crid=25WF0W38ZPC3W&dib=eyJ2IjoiMSJ9.2okRs93yDSkztk5C9O4QEgQZrb4LaPw4SIL_jZR4QOkj2_6-iVHO_jLjKGbkTeq5OaA0xgYUQ0J6AqPhLG0l3Kxgjuu8IvcEpjzAoQ3LPkdTH7pTTp0D0QRJyB431kzNu0B1YMPt-67C4lNz3CYPng8DJx6pzcI98COhlN7WiavFDnkC6Unao9vqrSc2ZCdcytIXkG95kxzs-JmZ7-IrYOlO0JsH0W5EDz4eu2KOLfQ.5C-Em2COImIvkEYXtlDQ7xvUs5ofNNJlhiumSQIadfE&dib_tag=se&keywords=bone%2Bconduction%2Bheadphones&qid=1776640621&sprefix=bone%2Bcondu%2Caps%2C254&sr=8-7&ufe=app_do%3Aamzn1.fos.d7e5a2de-8759-4da3-993c-d11b6e3d217f&th=1", isNew: true, },
    { name: "Fun socks", price: "", shop: "", Weblink: "", isNew: true, },
    { name: "Hamper ", description: "Pringles, Watermelon, Grapes, Kinder Stuff.....", price: "", shop: "", Weblink: "", isNew: true, },
    { name: "Magsafe Wallet", price: "£10", shop: "Amazon", Weblink: "https://www.amazon.co.uk/s?k=MagSafe+wallet", isNew: true, },
    { name: "Rituals Men's Shower foam", price: "£10", shop: "Rituals", Weblink: "https://www.rituals.com/en-gb/men/body-hand-care", isNew: true, },
    { name: "New Standing Desk", price: "~£300", shop: "Desktronic", Weblink: "https://desktronic.co.uk/products/height-adjustable-desk-homepro?variant=45480644378845", isNew: true, },
    { name: "2 Dark Shelves", description: "For above my bed", price: "", shop: "", Weblink: "", isNew: true, },
    { name: "MOVA Globe", price: "£195", shop: "Amazon", Weblink: "https://www.amazon.co.uk/Globe-Powered-Rotating-Unique-Decoration/dp/B002U21ZZK/ref=sr_1_4?crid=YIGM6NAS3OCX&dib=eyJ2IjoiMSJ9.44KMol966EFxQS30wAR-_dans92-WpqnTPoYNKf6A9qk509c6eYu0kaUh9Y3Kzu2_UP4By2EhfxbE8vYmnqWBQiLCZr5yImcr0z7kVwudlMnaKmakPYFzCyiLONVHc5RgcZ_f1oy_KBnwY6YlfpVRdOiJ71IoVsQH0anEhKLLvRDgVrcbiErcBJI16KWXpUUzeJj-ZLS7IZbiQUZZBud7zfT5VCBf-ahHsxC-RrkzNeH1cd691PbTnrLIu4tyEB_aCiE6E3sYL2u_b8cZeMvw7eSD413vOrCTVpwYxDCLyM.J3I5N8sPa5dBvzdcmmDkNevApfOkKzwmUej1N8kqlwg&dib_tag=se&keywords=Mova+globe&qid=1760908607&sprefix=mova+glob%2Caps%2C110&sr=8-4" },
    { name: "Scratch off Globe", price: "£50.00", shop: "Amazon", Weblink: "https://www.amazon.co.uk/Luckies-London-Scratch-Globes-Gadgets/dp/B0CBQ9FP1J?crid=VIG20NWPFN7Z&dib=eyJ2IjoiMSJ9.aKHw5zPA2RltH_LrrRTSvZIxLfWI_FA8-HqTY5oraj7_l0OKrb5hVNDTpEo6qa7-9sPwPxWUXn51LWMg5Ona_aAT_325XI21Owl45ua-38PiXLUrdZ5vi__PR7PbIoGl4TC_nxsWx-xUhXCM1ceE1YkuDSJc-j2SgN1JH-50vLLWfFoESHzGttlIIn0I3xM4tU3EUqTSfPeUTaAogYc0FXLjayIv3O9WpZklGYDQe3t43txET_2Ps-MlA6pxGWHLpxraQGZdpTdGnOoiLNJ6ap4vGN99KcZHdefUWGyhMm0.2Ent8qOLZvMwknjGEGvvFr1rwspF9Y7JsK5kQvGFYxY&dib_tag=se&keywords=scratch%2Boff%2Bglobe&qid=1760908652&sprefix=scratch%2Boff%2Bglob%2Caps%2C117&sr=8-6&th=1" },
    { name: "Lululemon Running Clothes", price: "£100", shop: "Lululemon", Weblink: "", isNew: true, },
    { name: "Desk Lamp ", description: "For under my TV", price: "£10", shop: "Dunelm", Weblink: "https://www.dunelm.com/category/lighting/table-and-desk-lamps", isNew: true, },
    { name: "Govee TV Backlight", price: "£80", shop: "Amazon", Weblink: "https://www.amazon.co.uk/Govee-Backlight-Fish-eye-Correction-Function/dp/B0CL4KNPT9?crid=3ASVSN6QB86U7&dib=eyJ2IjoiMSJ9.QhZs8Uru1RY8anGAnUXBPcWbkZNDT4bkZSuHCAmXWigBbCXehzhYFVSREjXUOHArNvz46YX2tfk-2HOCI9eQlRATZnrKgfYxtPBSNYf5C_bi4ZCROk4syJIy_WaktEAfAmgpvj-KQT_Bga74VtvlwT22alehNyTixl47JHaTkD_IAYvRVnima4GGQsfka4wMl_hIgS9UXi47hATYDYzC8jMuUAH4_U2F2sS0yFaSjKYttp6Hc7hFX1A8Y1uZYvIsafMgdkusSn4pd7ctOhwF1IsF18eEjFMJbsxpQd68yqg.kEAMDjq9v3PsaZIyGhtcVPLtpq9iGeVAr3cigy--ex4&dib_tag=se&keywords=Grovee&qid=1776644105&sprefix=grove%2Caps%2C269&sr=8-8&th=1", isNew: true, },
    { name: "Govee Light Bars", price: "£70", shop: "Amazon", Weblink: "https://www.amazon.co.uk/Govee-Backlight-Multiple-Placement-Assistant/dp/B0BX25BSD1?dib=eyJ2IjoiMSJ9.QhZs8Uru1RY8anGAnUXBPcWbkZNDT4bkZSuHCAmXWigBbCXehzhYFVSREjXUOHArNvz46YX2tfk-2HOCI9eQlRATZnrKgfYxtPBSNYf5C_bi4ZCROk4syJIy_WaktEAfAmgpvj-KQT_Bga74VtvlwT22alehNyTixl47JHaTkD_IAYvRVnima4GGQsfka4wMl_hIgS9UXi47hATYDYzC8jMuUAH4_U2F2sS0yFaSjKYttp6Hc7hFX1A8Y1uZYvIsafMgdkusSn4pd7ctOhwF1IsF18eEjFMJbsxpQd68yqg.kEAMDjq9v3PsaZIyGhtcVPLtpq9iGeVAr3cigy--ex4&dib_tag=se&keywords=Grovee&qid=1776644339&sr=8-9&th=1", isNew: true, },
    /*{ name: "", price: "", shop: "", Weblink: "", isNew: true, },*/

  ];

  // Calculate total from numeric prices only
  const total = gifts.reduce((sum, gift) => {
    const match = gift.price?.match(/£?([\d.]+)/);
    return match ? sum + parseFloat(match[1]) : sum;
  }, 0);

  let displayedGifts: Gift[] = [...gifts];

  // Apply filters
  if (sortOption === "new") {
    displayedGifts = displayedGifts.filter(gift => gift.isNew);
  }

  if (sortOption === "Lego") {
    displayedGifts = displayedGifts.filter(gift => gift.shop === "Lego");
  }

  // Sorting logic
  displayedGifts = displayedGifts.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "price") {
    const priceA = parseFloat(a.price?.replace(/[£,~]/g, "") || "0");
    const priceB = parseFloat(b.price?.replace(/[£,~]/g, "") || "0");
    return priceB - priceA;
  }
    return 0;
  });

  return (
    <div className="list-page">
      <Countdown targetDate={birthdayDate} label="Christmas" />

      <h2 className="total-price">🎁 Total: £{total.toFixed(2)}</h2>

      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={() => setSortOption("name")}>Sort A–Z</button>
        <button onClick={() => setSortOption("price")}>Sort by Price</button>
        <button onClick={() => setSortOption("new")}>Show New Only</button>
        <button onClick={() => setSortOption("Lego")}>Lego</button>
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
          {displayedGifts.map((gift, index) => {
            const giftNameCell = (
              <td className="gift-name-cell">
                <div className="gift-name">
                  {gift.name}
                  {gift.isNew && <span className="new-tag">NEW</span>}
                </div>
                {gift.description && (
                  <div className="gift-description">{gift.description}</div>
                )}
              </td>
            );

            if (gift.Weblink) {
              return (
                <a
                  key={index}
                  href={gift.Weblink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit", display: "contents" }}
                >
                  <tr style={{ cursor: "pointer" }}>
                    {giftNameCell}
                    <td>{gift.price || "—"}</td>
                    <td>{gift.shop || "—"}</td>
                  </tr>
                </a>
              );
            }

            return (
              <tr key={index}>
                {giftNameCell}
                <td>{gift.price || "—"}</td>
                <td>{gift.shop || "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BirthdayList;
