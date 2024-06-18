export type ItemPhotoDetailType = {
  id: number;
  title: string;
  price: number;
  location: string;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
  userId: number;
  attachmentId: number;
  user: {
    id: number;
    profile: {
      id: number;
      fullName: string;
      dateOfBirth: string;
      createdAt: string;
      updatedAt: string | null;
      userId: number;
      attachmentId: number;
    };
  };
  photoSellTag: PhotoSellTag[];
  photoFavorite: PhotoFavoriteType[];
};

export type PhotoSellTag = {
  id: number;
  tag: PhotoSellTagType;
};

export type PhotoSellTagType = {
  id: number;
  tagName: string;
};

export type PhotoFavoriteType = {
  id: number;
};
