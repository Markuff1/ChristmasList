import type { Gift } from "../data/types";

interface ExportOptions {
  filename: string;
  sheetName: string;
  title: string;
}

export async function exportGiftsToExcel(gifts: Gift[], { filename, sheetName, title }: ExportOptions) {
  const XLSX = await import("xlsx-js-style");

  const data: (string | number)[][] = [
    [title],
    ["#", "Name", "Description", "New item?", "Price", "Shop"],
  ];

  gifts.forEach((gift, index) => {
    data.push([
      index + 1,
      gift.name || "",
      gift.description || "",
      gift.isNew ? "Yes" : "",
      gift.price || "",
      gift.shop || "",
    ]);
  });

  const worksheet = XLSX.utils.aoa_to_sheet(data);

  // Merge title row
  worksheet["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }];

  // Column widths
  worksheet["!cols"] = [
    { wch: 6 }, // #
    { wch: 30 }, // Name
    { wch: 45 }, // Description
    { wch: 15 }, // New item
    { wch: 12 }, // Price
    { wch: 25 }, // Shop
  ];

  // Row heights
  worksheet["!rows"] = [
    { hpt: 35 }, // Title
    { hpt: 25 }, // Headers
    ...gifts.map(() => ({ hpt: 40 })),
  ];

  // Title styling
  worksheet["A1"].s = {
    font: { bold: true, sz: 22 },
    alignment: { horizontal: "center", vertical: "center" },
    fill: { fgColor: { rgb: "89A9D6" } },
  };

  // Header styling
  ["A2", "B2", "C2", "D2", "E2", "F2"].forEach((cell) => {
    worksheet[cell].s = {
      font: { bold: true, sz: 12 },
      alignment: { horizontal: "center", vertical: "center" },
      fill: { fgColor: { rgb: "B8C9E3" } },
      border: {
        top: { style: "thin", color: { rgb: "CCCCCC" } },
        bottom: { style: "thin", color: { rgb: "CCCCCC" } },
      },
    };
  });

  // Data row styling
  for (let row = 3; row <= gifts.length + 2; row++) {
    ["A", "B", "C", "D", "E", "F"].forEach((col) => {
      const cell = worksheet[`${col}${row}`];
      if (!cell) return;

      cell.s = {
        alignment: { horizontal: "center", vertical: "center", wrapText: true },
        font: { sz: 11 },
        border: { bottom: { style: "thin", color: { rgb: "E5E5E5" } } },
      };
    });

    worksheet[`C${row}`].s = {
      alignment: { horizontal: "center", vertical: "center", wrapText: true },
      font: { sz: 10, italic: true, color: { rgb: "666666" } },
      border: { bottom: { style: "thin", color: { rgb: "E5E5E5" } } },
    };
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  XLSX.writeFile(workbook, filename);
}
