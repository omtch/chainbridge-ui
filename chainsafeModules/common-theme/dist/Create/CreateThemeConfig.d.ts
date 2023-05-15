import { IComponentOverrides } from "../Overrides";
import { IBreakpoints } from "./CreateBreakpoints";
interface IPaletteColor {
  background?: string;
  main: string;
  active?: string;
  border?: string;
  hover?: string;
  [key: string]: string | undefined;
}
interface IPalette {
  primary: IPaletteColor;
  common: {
    black: IPaletteColor;
    white: IPaletteColor;
    [key: string]: IPaletteColor | string;
  };
  secondary: IPaletteColor;
  error: IPaletteColor;
  warning: IPaletteColor;
  info?: IPaletteColor;
  success: IPaletteColor;
  additional: {
    [key: string]: {
      [key: number]: string;
    };
  };
  text: {
    primary: string;
    secondary?: string;
  };
  background: {
    paper: string;
    default: string;
    [key: string]: string;
  };
}
interface IFontWeights {
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
}
interface ITypography {
  global: Record<string, any>;
  fontWeight: IFontWeights;
  h1?: Record<string, any>;
  h2?: Record<string, any>;
  h3?: Record<string, any>;
  h4?: Record<string, any>;
  h5?: Record<string, any>;
  h6?: Record<string, any>;
  subtitle1?: Record<string, any>;
  subtitle2?: Record<string, any>;
  body1?: Record<string, any>;
  body2?: Record<string, any>;
  button?: Record<string, any>;
  caption?: Record<string, any>;
  [key: string]: Record<string, any> | undefined;
}
interface IConstants {
  generalUnit: number;
  modal: Record<string, any>;
  icon: Record<string, any>;
  [key: string]: number | string | Record<string, any> | undefined;
}
interface IAnimation {
  transform: 200;
  translate: 400;
  [key: string]: any;
}
interface IShadows {
  shadow1: string;
  shadow2: string;
  [key: string]: string;
}
interface IThemeConfig {
  animation: IAnimation;
  breakpoints: IBreakpoints;
  constants: IConstants;
  palette: IPalette;
  typography: ITypography;
  misc?: any;
  zIndex?: {
    background: number;
    layer0: number;
    layer1: number;
    layer2: number;
    layer3: number;
    layer4: number;
    blocker: number;
    [key: string]: number;
  };
  shadows: IShadows;
  cssBaseline?: Record<string, any>;
  globalStyling?: Record<string, any>;
  overrides?: IComponentOverrides;
}
declare const createThemeConfig: (
  themeConfig?:
    | {
        animation?:
          | {
              [x: string]: any;
              transform?: 200 | undefined;
              translate?: 400 | undefined;
            }
          | undefined;
        breakpoints?:
          | {
              keys?: string[] | undefined;
              values?:
                | {
                    [x: string]: number | undefined;
                  }
                | undefined;
              up?: ((key: string | number) => string) | undefined;
              down?: ((key: string | number) => string) | undefined;
              between?:
                | ((start: string | number, end: string | number) => string)
                | undefined;
              only?: ((key: string) => string) | undefined;
              width?: ((key: string) => number) | undefined;
            }
          | undefined;
        constants?:
          | {
              [x: string]:
                | string
                | number
                | {
                    [x: string]: any;
                  }
                | undefined;
              generalUnit?: number | undefined;
              modal?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              icon?:
                | {
                    [x: string]: any;
                  }
                | undefined;
            }
          | undefined;
        palette?:
          | {
              primary?:
                | {
                    [x: string]: string | undefined;
                    background?: string | undefined;
                    main?: string | undefined;
                    active?: string | undefined;
                    border?: string | undefined;
                    hover?: string | undefined;
                  }
                | undefined;
              common?:
                | {
                    [x: string]:
                      | string
                      | {
                          [x: string]: string | undefined;
                          background?: string | undefined;
                          main?: string | undefined;
                          active?: string | undefined;
                          border?: string | undefined;
                          hover?: string | undefined;
                        }
                      | undefined;
                    black?:
                      | {
                          [x: string]: string | undefined;
                          background?: string | undefined;
                          main?: string | undefined;
                          active?: string | undefined;
                          border?: string | undefined;
                          hover?: string | undefined;
                        }
                      | undefined;
                    white?:
                      | {
                          [x: string]: string | undefined;
                          background?: string | undefined;
                          main?: string | undefined;
                          active?: string | undefined;
                          border?: string | undefined;
                          hover?: string | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              secondary?:
                | {
                    [x: string]: string | undefined;
                    background?: string | undefined;
                    main?: string | undefined;
                    active?: string | undefined;
                    border?: string | undefined;
                    hover?: string | undefined;
                  }
                | undefined;
              error?:
                | {
                    [x: string]: string | undefined;
                    background?: string | undefined;
                    main?: string | undefined;
                    active?: string | undefined;
                    border?: string | undefined;
                    hover?: string | undefined;
                  }
                | undefined;
              warning?:
                | {
                    [x: string]: string | undefined;
                    background?: string | undefined;
                    main?: string | undefined;
                    active?: string | undefined;
                    border?: string | undefined;
                    hover?: string | undefined;
                  }
                | undefined;
              info?:
                | {
                    [x: string]: string | undefined;
                    background?: string | undefined;
                    main?: string | undefined;
                    active?: string | undefined;
                    border?: string | undefined;
                    hover?: string | undefined;
                  }
                | undefined;
              success?:
                | {
                    [x: string]: string | undefined;
                    background?: string | undefined;
                    main?: string | undefined;
                    active?: string | undefined;
                    border?: string | undefined;
                    hover?: string | undefined;
                  }
                | undefined;
              additional?:
                | {
                    [x: string]:
                      | {
                          [x: number]: string | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              text?:
                | {
                    primary?: string | undefined;
                    secondary?: string | undefined;
                  }
                | undefined;
              background?:
                | {
                    [x: string]: string | undefined;
                    paper?: string | undefined;
                    default?: string | undefined;
                  }
                | undefined;
            }
          | undefined;
        typography?:
          | {
              [x: string]:
                | {
                    [x: string]: any;
                  }
                | undefined;
              global?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              fontWeight?:
                | {
                    light?: number | undefined;
                    regular?: number | undefined;
                    medium?: number | undefined;
                    semibold?: number | undefined;
                    bold?: number | undefined;
                  }
                | undefined;
              h1?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              h2?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              h3?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              h4?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              h5?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              h6?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              subtitle1?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              subtitle2?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              body1?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              body2?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              button?:
                | {
                    [x: string]: any;
                  }
                | undefined;
              caption?:
                | {
                    [x: string]: any;
                  }
                | undefined;
            }
          | undefined;
        misc?: any;
        zIndex?:
          | {
              [x: string]: number | undefined;
              background?: number | undefined;
              layer0?: number | undefined;
              layer1?: number | undefined;
              layer2?: number | undefined;
              layer3?: number | undefined;
              layer4?: number | undefined;
              blocker?: number | undefined;
            }
          | undefined;
        shadows?:
          | {
              [x: string]: string | undefined;
              shadow1?: string | undefined;
              shadow2?: string | undefined;
            }
          | undefined;
        cssBaseline?:
          | {
              [x: string]: any;
            }
          | undefined;
        globalStyling?:
          | {
              [x: string]: any;
            }
          | undefined;
        overrides?:
          | {
              Avatar?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    sizes?:
                      | {
                          large?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          medium?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          small?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    variants?:
                      | {
                          square?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          circle?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              Blockies?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Breadcrumb?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    home?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    separator?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    crumb?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Button?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    size?:
                      | {
                          large?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          medium?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          small?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    icon?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          large?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          medium?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          small?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    variants?:
                      | {
                          primary?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                hover?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                focus?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          outline?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                hover?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                focus?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          dashed?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                hover?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                focus?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    state?:
                      | {
                          danger?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                hover?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                focus?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          disabled?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                hover?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              Card?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    hoverable?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    header?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          dense?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    body?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          dense?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    footer?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          dense?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              ChainsafeLogo?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              CheckboxInput?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    checkbox?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          hover?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          checked?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          disabled?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    input?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    label?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    labelDisabled?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    error?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Divider?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Drawer?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    backdrop?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          open?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          transparent?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    position?:
                      | {
                          top?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                open?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          bottom?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                open?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          right?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                open?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          left?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                open?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              ExpansionPanel?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    basic?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    borderless?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    icon?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    heading?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          active?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          borderless?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          basic?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    content?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          active?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          basic?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                active?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              FileInput?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    pending?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    filesDropped?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    error?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    item?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Grid?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    container?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    item?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    fullWidth?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Icons?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    size?:
                      | {
                          small?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          medium?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          large?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          extraLarge?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              MenuDropdown?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    title?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    icon?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          flip?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          rotate?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    options?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          open?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          position?:
                            | {
                                topLeft?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                topCenter?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                topRight?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                bottomLeft?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                bottomCenter?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                bottomRight?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    item?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          hover?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              Modal?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    active?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    inner?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          size?:
                            | {
                                xs?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                sm?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                md?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                lg?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                xl?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    closeIcon?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          left?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          right?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              Paper?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    rounded?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    bordered?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              RadioInput?:
                | {
                    radioContainer?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    radioInput?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    radio?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          checked?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          disabled?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    label?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    labelDisabled?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    error?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              ScrollbarWrapper?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              SearchBar?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    standardIcon?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          size?:
                            | {
                                large?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                medium?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                small?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    size?:
                      | {
                          large?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          medium?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          small?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    input?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          hover?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          focus?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          disabled?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    inputArea?:
                      | {
                          large?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                input?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          medium?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                input?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                          small?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                input?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              SelectInput?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    label?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    caption?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    container?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    control?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    menu?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    dropdownIndicator?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    singleValue?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    placeholder?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    option?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    valueContainer?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    indicatorsContainer?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Table?:
                | {
                    table?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          dense?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          hover?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          striped?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    tableHead?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    headCell?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          left?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          center?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          right?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          sortContainer?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          sortContainerChildren?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          caretContainer?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          caretContainerChildren?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          sortButton?:
                            | {
                                root?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                hover?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    row?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          selected?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          classic?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          grid?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    cell?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          left?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          center?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          right?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              Tabs?:
                | {
                    tabList?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    tabBar?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          selected?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              TextInput?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    disabled?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    size?:
                      | {
                          large?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          medium?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          small?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    inputArea?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          size?:
                            | {
                                large?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                medium?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                                small?:
                                  | {
                                      [x: string]: any;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                    input?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          focus?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          hover?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          disabled?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                        }
                      | undefined;
                    caption?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    label?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    icon?:
                      | {
                          root?:
                            | {
                                [x: string]: any;
                              }
                            | undefined;
                          size?:
                            | {
                                large?:
                                  | {
                                      root?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                      left?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                      right?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                    }
                                  | undefined;
                                medium?:
                                  | {
                                      root?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                      left?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                      right?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                    }
                                  | undefined;
                                small?:
                                  | {
                                      root?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                      left?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                      right?:
                                        | {
                                            [x: string]: any;
                                          }
                                        | undefined;
                                    }
                                  | undefined;
                              }
                            | undefined;
                        }
                      | undefined;
                  }
                | undefined;
              Toaster?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    inner?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    typeIcon?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    closeButton?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    closeIcon?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    messageContainer?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    message?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    description?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
              Typography?:
                | {
                    root?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    h1?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    h2?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    h3?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    h4?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    h5?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    h6?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    subtitle1?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    subtitle2?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    body1?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    body2?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    caption?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                    button?:
                      | {
                          [x: string]: any;
                        }
                      | undefined;
                  }
                | undefined;
            }
          | undefined;
      }
    | undefined
) => IThemeConfig;
export default createThemeConfig;
export {
  IThemeConfig,
  IPalette,
  IPaletteColor,
  ITypography,
  IBreakpoints,
  IConstants,
  IAnimation,
  IFontWeights,
};
