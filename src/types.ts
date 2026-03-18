export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  full_description: string;
  image: string;
  detail_image?: string;
  features: string[];
}
