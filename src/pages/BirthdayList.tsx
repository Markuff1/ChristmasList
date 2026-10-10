import GiftListPage from "./GiftListPage";
import { eventMonth, eventDay, lists } from "../data/birthdayLists";

function BirthdayList() {
  return (
    <GiftListPage
      eventMonth={eventMonth}
      eventDay={eventDay}
      label="Birthday"
      lists={lists}
    />
  );
}

export default BirthdayList;
