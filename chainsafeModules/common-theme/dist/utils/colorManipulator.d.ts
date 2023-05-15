export declare type ColorFormat = "rgb" | "rgba" | "hsl" | "hsla";
export declare type ColorValues = number[];
export interface IColorObject {
  type: ColorFormat;
  values: ColorValues;
}
export declare function hexToRgb(color: string): string;
export declare function rgbToHex(color: string): string;
export declare function hslToRgb(color: string): string;
export declare function decomposeColor(color: string): IColorObject;
export declare function recomposeColor(color: IColorObject): string;
export declare function getContrastRatio(
  foreground: string,
  background: string
): number;
export declare function getLuminance(color: string): number;
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 */
export declare function emphasize(color: string, coefficient?: number): string;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 */
export declare function fade(color: string, value: number): string;
/**
 * Darkens a color.
 */
export declare function darken(color: string, coefficient: number): string;
/**
 * Lightens a color.
 */
export declare function lighten(color: string, coefficient: number): string;
