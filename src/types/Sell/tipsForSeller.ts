

export interface TipsForSeller {
    title: string;
    listItems: string[];
    bgColor : string;
  }

export interface TipsForSellerCardProps extends TipsForSeller {
    index: number;
  }