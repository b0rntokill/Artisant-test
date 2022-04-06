export type Image = {
  compressed?: string;
  original: string;
};

export type Images = Image[];

export type BackendCreatedBy = {
  custom_url: string;
  display_name: string;
  image: Image;
  public_address: string;
  user_id: number;
};

export type BackendJsonNftData = {
  attributes: {
    trait_type: string;
    value: string;
  }[];
  description: string;
  external_url: string;
  image: string;
  name: string;
};

export type BackendProduct = {
  additional_photos: Images;
  avatar: Image;
  created_at: string;
  created_by: BackendCreatedBy;
  description: string;
  initial_price: number;
  is_wearable: boolean;
  json_nft_data: BackendJsonNftData;
  json_nft_link: string;
  latest_price: string;
  name: string;
  on_main_page: boolean;
  other_file: {
    original: string;
  };
  product_id: number;
  quantity: number;
  quantity_available: number;
  quantity_nfts_created: number;
  tx_status: string;
  type: string;
  updated_at: string;
};

export type BackendProducts = BackendProduct[];

export type CreatedBy = {
  authorName: string;
};

export type FrontProduct = {
  avatar: Image;
  createdBy: CreatedBy;
  initialPrice: number;
  name: string;
  productId: number;
  quantity: number;
  quantityAvailable: number;
};

export type FrontProducts = FrontProduct[];
