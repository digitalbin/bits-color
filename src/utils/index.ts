import tinycolor from "tinycolor2";

export const isValidHex = (hex: string) => {
  return tinycolor(hex).isValid();
};

export const getBackgroundColor = (hex: string) => {
  const color = tinycolor(hex);
  if (!color.isValid()) return "#fff";
  const shouldDarken = color.getLuminance() >= 0.8;
  if (shouldDarken) return color.darken(8).desaturate(75).toHexString();
  return color.lighten(30).toHexString();
};
