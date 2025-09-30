import { StaticImageData } from "next/image";

interface thumbimageProps {
  image: StaticImageData | string; // 👈 for static imports
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  description: string;
  thumbimageProps: thumbimageProps | string;
  image: thumbimageProps | string;
  discount: string;
}
