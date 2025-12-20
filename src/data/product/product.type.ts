export interface GetAllProductDto {
  pid: number;
  artist: string;
  album: string;
  genre: string;
  image_url: string;
  price: number;
  hasStock: boolean;
}

export interface ProductDto {
  pid: number;
  artist: string;
  album: string;
  genre: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  track_list: string;
}