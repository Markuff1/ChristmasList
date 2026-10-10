import type { GiftList } from "./types";

export const eventMonth = 6;
export const eventDay = 2;

export const lists: GiftList[] = [
  {
    id: "birthday-2027",
    label: "Birthday 2027",
    current: true,
    items: [],
  },
  {
    id: "birthday-2026",
    label: "Birthday 2026",
    current: false,
    items: [
      { name: "New Graphics Card", price: "£0", shop: "James Nixon's Shop", isNew: true },
      { name: "Candles", price: "~£10", shop: "Next or M&S", isNew: true },
      { name: "Plants", isNew: true },
      { name: "Cool artwork to sit on my shelves", price: "~20", isNew: true },
      {
        name: "Razer Chroma Mouse",
        price: "~£120",
        shop: "Amazon",
        weblink:
          "https://www.amazon.co.uk/Razer-Basilisk-HyperSpeed-Customizable-Customisable/dp/B0DDC9PPH6?crid=36MRPL5CV0IVS&dib=eyJ2IjoiMSJ9.xRfzq8ZHYPVw_DwGaK3oSA71lGFFrwYv77UnjGGjI4uB_BRyTPlzmRoFV_FW8UrOEbdnxF9qQtgIhFTJT3E_5we0o4CASDM1gImJwQgE1UYgMt3VeOkbvQfr0glypJ1VZMM0au6voUQkQPOmgELC9DcQPHBZizIMwtC_anYyJ46lLsUOnmgFTUTXrzhMv0H763XLYZO2lefi8VWeAOc--mwO6W4Ku7iIvdgqpFZIgys.YbTcEsHchcrFSihQ5VwLBgb0MxwhnJv7KHVFZgwSibU&dib_tag=se&keywords=Razer%2BChroma%2BMouse%2BWireless&qid=1778515547&sprefix=razer%2Bchroma%2Bmouse%2Bwirel%2Caps%2C317&sr=8-1&th=1",
        isNew: true,
      },
      {
        name: "New Mouse Pad",
        description: "Or some other cool design (80 x 30cm)",
        price: "~£30",
        shop: "Epic Design Pads",
        weblink:
          "https://epicdesignpads.com/collections/best-sellers/products/mountain-sunset-desk-mat-and-mouse-pad",
        isNew: true,
      },
      {
        name: "SHOKZ Bone Conduction Headphones",
        price: "£135",
        shop: "Amazon",
        weblink:
          "https://www.amazon.co.uk/SHOKZ-Conduction-Headphones-Cancelling-Waterproof-Black/dp/B0D2HKQWHX",
      },
      { name: "Fun socks" },
      {
        name: "Hamper",
        description: "Pringles, Watermelon, Grapes, Kinder Stuff, Chocolate fingers, Oreos.....",
      },
      {
        name: "Magsafe Wallet",
        price: "£10",
        shop: "Amazon",
        weblink: "https://www.amazon.co.uk/s?k=MagSafe+wallet",
      },
      {
        name: "Rituals Men's Shower foam",
        price: "£10",
        shop: "Rituals",
        weblink: "https://www.rituals.com/en-gb/men/body-hand-care",
      },
      {
        name: "New Standing Desk",
        price: "~£300",
        shop: "Desktronic",
        weblink:
          "https://desktronic.co.uk/products/height-adjustable-desk-homepro",
      },
      {
        name: "2 x Shelf",
        price: "£13",
        shop: "Ikea",
        weblink:
          "https://www.ikea.com/gb/en/p/lack-wall-shelf-white-90282180/",
        isNew: true,
      },
      {
        name: "MOVA Globe",
        price: "£195",
        shop: "Amazon",
        weblink:
          "https://www.amazon.co.uk/Globe-Powered-Rotating-Unique-Decoration/dp/B002U21ZZK",
      },
      {
        name: "Scratch off Globe",
        price: "£50.00",
        shop: "Amazon",
        weblink:
          "https://www.amazon.co.uk/Luckies-London-Scratch-Globes-Gadgets/dp/B0CBQ9FP1J",
      },
      {
        name: "Desk Lamp",
        description: "For under my TV",
        price: "£19",
        shop: "Ikea",
        weblink: "https://www.ikea.com/gb/en/p/-10096375",
        isNew: true,
      },
      {
        name: "Govee TV Backlight",
        price: "£80",
        shop: "Amazon",
        weblink:
          "https://www.amazon.co.uk/Govee-Backlight-Fish-eye-Correction-Function/dp/B0CL4KNPT9",
      },
      {
        name: "Govee Light Bars",
        price: "£70",
        shop: "Amazon",
        weblink:
          "https://www.amazon.co.uk/Govee-Backlight-Multiple-Placement-Assistant/dp/B0BX25BSD1",
      },
      {
        name: "Lego Bike",
        price: "£109.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/road-bike-11380",
        isNew: true,
      },
      {
        name: "PAC-MAN Arcade",
        price: "£229.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/pac-man-arcade-10323",
        isNew: true,
      },
      {
        name: "Lego Ford Model T",
        price: "£119.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/ford-model-t-11376",
      },
      {
        name: "Lego Rocking Plants",
        price: "£17.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/rocking-plants-11506",
      },
      {
        name: "Lego Hibiscus",
        price: "£59.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/hibiscus-10372",
      },
      {
        name: "Lego Flowering Cactus",
        price: "£24.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/flowering-cactus-11509",
      },
      {
        name: "Lego Shopping Street",
        price: "£229.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/shopping-street-11371",
      },
      {
        name: "Lego River Steamboat",
        price: "£289.99",
        shop: "Lego",
        weblink: "https://www.lego.com/en-gb/product/river-steamboat-21356",
      },
    ],
  },
];
