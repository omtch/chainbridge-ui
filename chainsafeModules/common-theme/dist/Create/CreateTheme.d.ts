import {
  IThemeConfig,
  IPaletteColor,
  IPalette,
  IAnimation,
  IBreakpoints,
  IFontWeights,
  IConstants,
  ITypography,
} from "./CreateThemeConfig";
import { MixinConfig } from "./CreateMixins";
import { DeepPartial } from "ts-essentials";
interface ITheme extends IThemeConfig {
  mixins: MixinConfig;
  globalStyling: {
    "@global": Record<string, any>;
  };
}
interface ICreateThemeProps {
  themeConfig?: DeepPartial<IThemeConfig>;
  mixins?: DeepPartial<MixinConfig>;
  globalStyling?: Record<string, any>;
}
declare const createTheme: (
  themeProps?: ICreateThemeProps | undefined
) => ITheme;
export default createTheme;
export {
  ICreateThemeProps,
  ITheme,
  IPaletteColor,
  IPalette,
  IAnimation,
  IBreakpoints,
  IConstants,
  IFontWeights,
  ITypography,
};
