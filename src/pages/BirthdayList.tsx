import { useState } from "react";
import Countdown from "../components/Countdown";
import * as XLSX from "xlsx";

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
    {
      name: "Candles",
      price: "~£10",
      shop: "Next or M&S",
      isNew: true,
    },
    {
      name: "Plants",
      isNew: true,
    },
    {
      name: "Cool artwork to sit on my shelves",
      price: "~20",
      isNew: true,
    },
    {
      name: "Razer Chroma Mouse",
      price: "~£120",
      shop: "Amazon",
      Weblink:
        "https://www.amazon.co.uk/Razer-Basilisk-HyperSpeed-Customizable-Customisable/dp/B0DDC9PPH6?crid=36MRPL5CV0IVS&dib=eyJ2IjoiMSJ9.xRfzq8ZHYPVw_DwGaK3oSA71lGFFrwYv77UnjGGjI4uB_BRyTPlzmRoFV_FW8UrOEbdnxF9qQtgIhFTJT3E_5we0o4CASDM1gImJwQgE1UYgMt3VeOkbvQfr0glypJ1VZMM0au6voUQkQPOmgELC9DcQPHBZizIMwtC_anYyJ46lLsUOnmgFTUTXrzhMv0H763XLYZO2lefi8VWeAOc--mwO6W4Ku7iIvdgqpFZIgys.YbTcEsHchcrFSihQ5VwLBgb0MxwhnJv7KHVFZgwSibU&dib_tag=se&keywords=Razer%2BChroma%2BMouse%2BWireless&qid=1778515547&sprefix=razer%2Bchroma%2Bmouse%2Bwirel%2Caps%2C317&sr=8-1&th=1",
      isNew: true,
    },
    {
      name: "New Mouse Pad",
      description: "Or some other cool design (80 x 30cm)",
      price: "~£30",
      shop: "Epic Design Pads",
      Weblink:
        "https://epicdesignpads.com/collections/best-sellers/products/mountain-sunset-desk-mat-and-mouse-pad",
      isNew: true,
    },
    {
      name: "SHOKZ Bone Conduction Headphones",
      price: "£135",
      shop: "Amazon",
      Weblink:
        "https://www.amazon.co.uk/SHOKZ-Conduction-Headphones-Cancelling-Waterproof-Black/dp/B0D2HKQWHX",
    },
    { name: "Fun socks" },
    {
      name: "Hamper",
      description: "Pringles, Watermelon, Grapes, Kinder Stuff.....",
    },
    {
      name: "Magsafe Wallet",
      price: "£10",
      shop: "Amazon",
      Weblink: "https://www.amazon.co.uk/s?k=MagSafe+wallet",
    },
    {
      name: "Rituals Men's Shower foam",
      price: "£10",
      shop: "Rituals",
      Weblink: "https://www.rituals.com/en-gb/men/body-hand-care",
    },
    {
      name: "New Standing Desk",
      price: "~£300",
      shop: "Desktronic",
      Weblink:
        "https://desktronic.co.uk/products/height-adjustable-desk-homepro",
    },
    {
      name: "2 Dark Shelves",
      description: "For above my bed",
    },
    {
      name: "MOVA Globe",
      price: "£195",
      shop: "Amazon",
      Weblink:
        "https://www.amazon.co.uk/Globe-Powered-Rotating-Unique-Decoration/dp/B002U21ZZK",
    },
    {
      name: "Scratch off Globe",
      price: "£50.00",
      shop: "Amazon",
      Weblink:
        "https://www.amazon.co.uk/Luckies-London-Scratch-Globes-Gadgets/dp/B0CBQ9FP1J",
    },
    {
      name: "Desk Lamp",
      description: "For under my TV",
      price: "£10",
      shop: "Dunelm",
      Weblink:
        "https://www.dunelm.com/category/lighting/table-and-desk-lamps",
    },
    {
      name: "Govee TV Backlight",
      price: "£80",
      shop: "Amazon",
      Weblink:
        "https://www.amazon.co.uk/Govee-Backlight-Fish-eye-Correction-Function/dp/B0CL4KNPT9",
    },
    {
      name: "Govee Light Bars",
      price: "£70",
      shop: "Amazon",
      Weblink:
        "https://www.amazon.co.uk/Govee-Backlight-Multiple-Placement-Assistant/dp/B0BX25BSD1",
    },
    {
      name: "Lego Ford Model T",
      price: "£119.99",
      shop: "Lego",
      Weblink: "https://www.lego.com/en-gb/product/ford-model-t-11376",
    },
    {
      name: "Lego Rocking Plants",
      price: "£17.99",
      shop: "Lego",
      Weblink: "https://www.lego.com/en-gb/product/rocking-plants-11506",
    },
    {
      name: "Lego Hibiscus",
      price: "£59.99",
      shop: "Lego",
      Weblink: "https://www.lego.com/en-gb/product/hibiscus-10372",
    },
    {
      name: "Lego Flowering Cactus",
      price: "£24.99",
      shop: "Lego",
      Weblink: "https://www.lego.com/en-gb/product/flowering-cactus-11509",
    },
    {
      name: "Lego Shopping Street",
      price: "£229.99",
      shop: "Lego",
      Weblink: "https://www.lego.com/en-gb/product/shopping-street-11371",
    },
    {
      name: "Lego River Steamboat",
      price: "£289.99",
      shop: "Lego",
      Weblink: "https://www.lego.com/en-gb/product/river-steamboat-21356",
    },
  ];

  const total = gifts.reduce((sum, gift) => {
    const match = gift.price?.match(/£?([\d.]+)/);
    return match ? sum + parseFloat(match[1]) : sum;
  }, 0);

  let displayedGifts: Gift[] = [...gifts];

  if (sortOption === "new") {
    displayedGifts = displayedGifts.filter((gift) => gift.isNew);
  }

  if (sortOption === "Lego") {
    displayedGifts = displayedGifts.filter(
      (gift) => gift.shop === "Lego"
    );
  }

  displayedGifts = displayedGifts.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortOption === "price") {
      const priceA = parseFloat(
        a.price?.replace(/[£~,]/g, "") || "0"
      );
      const priceB = parseFloat(
        b.price?.replace(/[£~,]/g, "") || "0"
      );

      return priceB - priceA;
    }

    return 0;
  });

  const downloadExcel = () => {
    const exportData = displayedGifts.map((gift) => ({
      Name: gift.name,
      Description: gift.description || "",
      Price: gift.price || "",
      Shop: gift.shop || "",
      Link: gift.Weblink || "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);

    worksheet["!cols"] = [
      { wch: 30 },
      { wch: 40 },
      { wch: 15 },
      { wch: 20 },
      { wch: 50 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Birthday List"
    );

    XLSX.writeFile(workbook, "Birthday_List.xlsx");
  };

  return (
    <div className="list-page">
      <Countdown targetDate={birthdayDate} label="Birthday" />

      <h2 className="total-price">
        🎁 Total: £{total.toFixed(2)}
      </h2>

      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => setSortOption("name")}>
          Sort A–Z
        </button>

        <button onClick={() => setSortOption("price")}>
          Sort by Price
        </button>

        <button onClick={() => setSortOption("new")}>
          Show New Only
        </button>

        <button onClick={() => setSortOption("Lego")}>
          Lego
        </button>

        <button onClick={() => setSortOption(null)}>
          Reset
        </button>

        <button
          onClick={downloadExcel}
          style={{ marginLeft: "auto" }}
        >
          ⬇ Download Excel
        </button>
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
            const rowContent = (
              <>
                <td className="gift-name-cell">
                  <div className="gift-name">
                    {gift.name}
                    {gift.isNew && (
                      <span className="new-tag">
                        NEW
                      </span>
                    )}
                  </div>

                  {gift.description && (
                    <div className="gift-description">
                      {gift.description}
                    </div>
                  )}
                </td>

                <td>{gift.price || "—"}</td>
                <td>{gift.shop || "—"}</td>
              </>
            );

            if (gift.Weblink) {
              return (
                <tr
                  key={index}
                  onClick={() =>
                    window.open(
                      gift.Weblink,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  {rowContent}
                </tr>
              );
            }

            return <tr key={index}>{rowContent}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BirthdayList;