export interface Gift {
  name: string;
  description?: string;
  price?: string;
  shop?: string;
  weblink?: string;
  isNew?: boolean;
}

export interface GiftList {
  id: string;
  label: string;
  /** The list currently shown by default; every other list is archived under "Past Lists". */
  current: boolean;
  items: Gift[];
}
