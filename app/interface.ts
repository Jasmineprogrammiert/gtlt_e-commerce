export interface simplifiedProduct {
  _id: string;
  name: string;
  price: number;
  category: string;
  slug: string;
  imgUrl: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  subtitle_1: string;
  description_1: string;
  subtitle_2: string;
  description_2: string;
  price: number;
  price_id: string;
  category: string;
  slug: string;
  images: any;
}
