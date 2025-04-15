
export type TextSpan = "left" | "right";

export interface CardFeaturedCollectionsProps {
  primaryText: string;
  textcolor?: string;
  colSpan?: string;
  gridSpan?: string;
  gridSpanMobile?: string;
  colSpanMobile?: string;
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