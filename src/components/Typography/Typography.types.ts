export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph'
  | 'caption'
  | 'label'
  | 'helper';

export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  className?: string;
}

export {};