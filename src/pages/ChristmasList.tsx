import GiftListPage from "./GiftListPage";
import { eventMonth, eventDay, lists } from "../data/christmasLists";

function ChristmasList() {
  return (
    <GiftListPage
      eventMonth={eventMonth}
      eventDay={eventDay}
      label="Christmas"
      lists={lists}
    />
  );
}

export default ChristmasList;
