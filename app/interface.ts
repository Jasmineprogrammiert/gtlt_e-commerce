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
  description: string;
  price: number;
  category: string;
  slug: string;
  images: any;
}
