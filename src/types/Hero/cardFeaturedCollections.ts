
export type TextSpan = "left" | "right";

export interface CardFeaturedCollectionsProps {
  primaryText: string;
  textcolor?: string;
  colSpan?: string;
  textSpan?: TextSpan;
  bgColor?: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

export interface CardFeaturedCollectionsForList extends CardFeaturedCollectionsProps {
  id: number;
}