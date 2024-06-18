import type { ItemPhotoDetailType } from "./HomeType";
import type { TagType } from "./TagType";

export enum ModeViewEnum {
  List = "list",
  Grid = "grid",
}

export type AddSellPhotoBodyType = {
  id?: string;
  photoDetail: Object | null;
  price: string;
  location: string;
  date: string;
  description: string;
  tag: TagType[];
};

export type SellPhotoBodyType = {
  title: string;
  attachmentId: number;
  price: number;
  location: string;
  date: string;
  description: string;
  tagIds: number[];
};

export type SellPhotoType = ItemPhotoDetailType;

export type SellPhotoParamType = {
  page?: number;
  limit?: number;
  search?: string;
} & FilterSellPhotoType;

export type FilterSellPhotoType = {
  startDate?: string;
  endDate?: string;
  lowPrice?: string;
  highPrice?: string;
  tagIds?: number[];
};

export type SellPhotoSelectType = {
  isChecked: boolean;
} & SellPhotoType;
