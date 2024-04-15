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
  price: number;
  price_2: number;
  stock: number;
  subtitle_1: string;
  description_1: string;
  subtitle_2: string;
  description_2: string;
  price_id: string;
  price_2_id: string;
  category: string;
  slug: string;
  images: any;
}