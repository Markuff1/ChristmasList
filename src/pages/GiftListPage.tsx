import Countdown from "../components/Countdown";
import GiftTable from "../components/GiftTable";
import ListControls from "../components/ListControls";
import PastLists from "../components/PastLists";
import { useGiftListView } from "../hooks/useGiftListView";
import { exportGiftsToExcel } from "../utils/excelExport";
import type { GiftList } from "../data/types";

interface GiftListPageProps {
  eventMonth: number;
  eventDay: number;
  label: string;
  lists: GiftList[];
}

function GiftListPage({ eventMonth, eventDay, label, lists }: GiftListPageProps) {
  const currentList = lists.find((list) => list.current) ?? lists[0];
  const pastLists = lists.filter((list) => list.id !== currentList.id);

  const { sortOption, setSortOption, displayedGifts, total } = useGiftListView(
    currentList.items
  );

  const handleExport = () =>
    exportGiftsToExcel(displayedGifts, {
      filename: `${currentList.label.replace(/\s+/g, "_")}.xlsx`,
      sheetName: currentList.label,
      title: `${currentList.label}`,
    });

  return (
    <div className="list-page">
      <Countdown eventMonth={eventMonth} eventDay={eventDay} label={label} />

      <h2 className="list-page-title">{currentList.label}</h2>
      <h2 className="total-price">🎁 Total: £{total.toFixed(2)}</h2>

      <ListControls
        sortOption={sortOption}
        onSortChange={setSortOption}
        onExport={handleExport}
      />

      <GiftTable
        gifts={displayedGifts}
        emptyMessage={`No items on the ${currentList.label} list yet.`}
      />

      <PastLists lists={pastLists} />
    </div>
  );
}

export default GiftListPage;
