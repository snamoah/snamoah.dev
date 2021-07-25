export enum Size {
  XS = 528,
  SM = 768,
  MD = 1023,
}

export const Device = {
  MOBILE: `@media (max-width: ${Size.XS}px)`,
  TABLET: `@media (min-width: ${Size.SM}) and (max-width: ${Size.MD}px)`,
  DESKTOP: `@media (min-width: ${Size.MD + 1}px)`,
  NOT_DESKTOP: `@media (max-width: ${Size.MD}px)`,
}
