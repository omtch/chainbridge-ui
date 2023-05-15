"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");
var styles = require("@material-ui/styles");

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === "undefined") {
    return;
  }

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  "/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n\tline-height: 1;\n}\nmenu, ol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n";
styleInject(css_248z);

var css_248z$1 =
  "[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;visibility:visible;overflow:auto;max-width:100%;max-height:100%}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;right:2px;width:7px;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:0;right:0;opacity:0;transition:opacity .2s linear}.simplebar-track .simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}\n";
styleInject(css_248z$1);

var ThemeSwitcherContext = React.createContext(undefined);
var ThemeSwitcher = function (_a) {
  var children = _a.children,
    themes = _a.themes;
  // TODO: check min 1 theme
  var _b = React.useState(Object.keys(themes)[0]),
    current = _b[0],
    setCurrent = _b[1];
  return React.createElement(
    ThemeSwitcherContext.Provider,
    {
      value: {
        themeKey: current,
        availableThemes: Object.keys(themes),
        setTheme: setCurrent,
      },
    },
    React.createElement(
      styles.ThemeProvider,
      { theme: themes[current] },
      children
    )
  );
};
var useThemeSwitcher = function () {
  var context = React.useContext(ThemeSwitcherContext);
  if (context == undefined) {
    throw new Error(
      "useThemeSwitcher should be called within Theme Context provider"
    );
  }
  return context;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

var DefaultPalette = {
  colorTags: {
    primary: 6,
    background: 1,
    border: 3,
    hover: 5,
  },
  additional: {
    blue: {
      1: "#e6f7ff",
      2: "#BAE7FF",
      3: "#91D5FF",
      4: "#69C0FF",
      5: "#40A9FF",
      6: "#1890FF",
      7: "#096DD9",
      8: "#0050B3",
      9: "#003A8C",
      10: "#002766",
    },
    gray: {
      1: "#FFFFFF",
      2: "#FAFAFA",
      3: "#F5F5F5",
      4: "#E8E8E8",
      5: "#D9D9D9",
      6: "#BFBFBF",
      7: "#8C8C8C",
      8: "#595959",
      9: "#262626",
      10: "#000000",
    },
    red: {
      1: "#FFF1F0",
      2: "#FFCCC7",
      3: "#FFA39E",
      4: "#FF7875",
      5: "#FF4D4F",
      6: "#F5222D",
      7: "#CF1322",
      8: "#A8071A",
      9: "#820014",
      10: "#5C0011",
    },
    volcano: {
      1: "#FFF2E8",
      2: "#FFD8BF",
      3: "#FFBB96",
      4: "#FF9C6E",
      5: "#FF7A45",
      6: "#FA541C",
      7: "#D4380D",
      8: "#AD2102",
      9: "#871400",
      10: "#610B00",
    },
    orange: {
      1: "#FFF7E6",
      2: "#FFE7BA",
      3: "#FFD591",
      4: "#FFC069",
      5: "#FFA940",
      6: "#FA8C16",
      7: "#D46B08",
      8: "#AD4E00",
      9: "#873800",
      10: "#612500",
    },
    gold: {
      1: "#FFFBE6",
      2: "#FFF1B8",
      3: "#FFE58F",
      4: "#FFD666",
      5: "#FFC53D",
      6: "#FAAD14",
      7: "#D48806",
      8: "#AD6800",
      9: "#874D00",
      10: "#613400",
    },
    yellow: {
      1: "#FEFFE6",
      2: "#FFFFB8",
      3: "#FFFB8F",
      4: "#FFF566",
      5: "#FFEC3D",
      6: "#FADB14",
      7: "#D4B106",
      8: "#AD8B00",
      9: "#876800",
      10: "#614700",
    },
    lime: {
      1: "#FCFFE6",
      2: "#F4FFB8",
      3: "#EAFF8F",
      4: "#D3F261",
      5: "#BAE637",
      6: "#A0D911",
      7: "#7CB305",
      8: "#5B8C00",
      9: "#3F6600",
      10: "#254000",
    },
    green: {
      1: "#F6FFED",
      2: "#D9F7BE",
      3: "#B7EB8F",
      4: "#95DE64",
      5: "#73D13D",
      6: "#52C41A",
      7: "#389E0D",
      8: "#237804",
      9: "#135200",
      10: "#092B00",
    },
    cyan: {
      1: "#E6FFFB",
      2: "#B5F5EC",
      3: "#87E8DE",
      4: "#5CDBD3",
      5: "#36CFC9",
      6: "#13C2C2",
      7: "#08979C",
      8: "#006D75",
      9: "#00474F",
      10: "#002329",
    },
    geekblue: {
      1: "#F0F5FF",
      2: "#D6E4FF",
      3: "#ADC6FF",
      4: "#85A5FF",
      5: "#597EF7",
      6: "#2F54EB",
      7: "#1D39C4",
      8: "#10239E",
      9: "#061178",
      10: "#030852",
    },
    purple: {
      1: "#F9F0FF",
      2: "#EFDBFF",
      3: "#D3ADF7",
      4: "#B37FEB",
      5: "#9254DE",
      6: "#722ED1",
      7: "#531DAB",
      8: "#391085",
      9: "#22075E",
      10: "#120338",
    },
    magenta: {
      1: "#FFF0F6",
      2: "#FFD6E7",
      3: "#FFADD2",
      4: "#FF85C0",
      5: "#F759AB",
      6: "#EB2F96",
      7: "#C41D7F",
      8: "#9E1068",
      9: "#780650",
      10: "#520339",
    },
  },
};

// Returns a number whose value is limited to the given range.
function clamp(value, min, max) {
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  return Math.min(Math.max(min, value), max);
}
function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
// Converts a color from CSS hex format to CSS rgb format.
function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1," + (color.length >= 6 ? 2 : 1) + "}", "g");
  var colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }
  return colors
    ? "rgb" +
        (colors.length === 4 ? "a" : "") +
        "(" +
        colors
          .map(function (n, index) {
            return index < 3
              ? parseInt(n, 16)
              : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
          })
          .join(", ") +
        ")"
    : "";
}
// Converts a color from CSS rgb format to CSS hex format.
function rgbToHex(color) {
  if (color.indexOf("#") === 0) {
    return color;
  }
  var values = decomposeColor(color).values;
  return (
    "#" +
    values
      .map(function (n) {
        return intToHex(n);
      })
      .join("")
  );
}
// Converts a color from hsl format to rgb format.
function hslToRgb(color) {
  var colorObj = decomposeColor(color);
  var values = colorObj.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);
  var f = function (n, k) {
    if (k === void 0) {
      k = (n + h / 30) % 12;
    }
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  var type = "rgb";
  var rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  if (colorObj.type === "hsla") {
    type += "a";
    rgb.push(values[3] ? values[3] : 1);
  }
  return recomposeColor({
    type: type,
    values: rgb,
  });
}
// Returns an object with the type and values of a color.
function decomposeColor(color) {
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }
  var marker = color.indexOf("(");
  var type = color.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(type) === -1) {
    throw new Error(
      "Material-UI: Unsupported `%s` color.\n" +
        "We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()."
    );
  }
  var valuesStrings = color.substring(marker + 1, color.length - 1).split(",");
  var values = valuesStrings.map(function (value) {
    return parseFloat(value);
  });
  return { type: type, values: values };
}
// Converts a color object with type and values to a string.
function recomposeColor(color) {
  var type = color.type;
  var values = color.values;
  var valuesArray = values;
  if (type.indexOf("rgb") !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    valuesArray = values.map(function (n, i) {
      return i < 3 ? n : n;
    });
  } else if (type.indexOf("hsl") !== -1) {
    valuesArray[1] = values[1] + "%";
    valuesArray[2] = values[2] + "%";
  }
  return type + "(" + values.join(", ") + ")";
}
// Calculates the contrast ratio between two colors.
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
// The relative brightness of any point in a color space,normalized to 0 for darkest black and 1 for lightest white.
function getLuminance(color) {
  var colorObj = decomposeColor(color);
  var rgb =
    colorObj.type === "hsl"
      ? decomposeColor(hslToRgb(color)).values
      : colorObj.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  // Truncate at 3 digits
  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  );
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 */
function emphasize(color, coefficient) {
  if (coefficient === void 0) {
    coefficient = 0.15;
  }
  return getLuminance(color) > 0.5
    ? darken(color, coefficient)
    : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 */
function fade(color, value) {
  var colorObj = decomposeColor(color);
  value = clamp(value);
  if (colorObj.type === "rgb" || colorObj.type === "hsl") {
    colorObj.type += "a";
  }
  colorObj.values[3] = value;
  return recomposeColor(colorObj);
}
/**
 * Darkens a color.
 */
function darken(color, coefficient) {
  var colorObj = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (colorObj.type.indexOf("hsl") !== -1) {
    colorObj.values[2] *= 1 - coefficient;
  } else if (colorObj.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      colorObj.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(colorObj);
}
/**
 * Lightens a color.
 */
function lighten(color, coefficient) {
  var colorObj = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (colorObj.type.indexOf("hsl") !== -1) {
    colorObj.values[2] += (100 - colorObj.values[2]) * coefficient;
  } else if (colorObj.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      colorObj.values[i] += (255 - colorObj.values[i]) * coefficient;
    }
  }
  return recomposeColor(colorObj);
}

// Keep in mind that @media is inclusive by the CSS specification.
var createBreakpoints = function (breakpoints) {
  var // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    _a = breakpoints.values,
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values =
      _a === void 0
        ? {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          }
        : _a,
    _b = breakpoints.unit,
    unit = _b === void 0 ? "px" : _b,
    _c = breakpoints.step,
    step = _c === void 0 ? 5 : _c,
    other = __rest(breakpoints, ["values", "unit", "step"]);
  var keys = Object.keys(values);
  function up(key) {
    var value = typeof values[key] === "number" ? values[key] : key;
    return "@media (min-width:" + value + unit + ")";
  }
  function down(key) {
    var value = typeof values[key] === "number" ? values[key] : key;
    return "@media (max-width:" + (value - step / 100) + unit + ")";
  }
  function between(start, end) {
    var endIndex = keys.indexOf(end);
    return (
      "@media (min-width:" +
      (typeof values[start] === "number" ? values[start] : start) +
      unit +
      ") and " +
      ("(max-width:" +
        ((endIndex !== -1 && typeof values[keys[endIndex]] === "number"
          ? values[keys[endIndex]]
          : end) -
          step / 100) +
        unit +
        ")")
    );
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
      // return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function width(key) {
    return values[key];
  }
  return __assign(
    {
      keys: keys,
      values: values,
      up: up,
      down: down,
      between: between,
      only: only,
      width: width,
    },
    other
  );
};

var _a, _b;
var defaultFontFamilyStack = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
};
var defaultFontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};
var defaultBreakpoints = createBreakpoints({});
var DefaultThemeConfig = {
  animation: {
    transform: 200,
    translate: 400,
  },
  breakpoints: defaultBreakpoints,
  constants: {
    generalUnit: 8,
    icon: {
      width: 25,
      height: 25,
    },
    modal: {
      inner: {
        minWidth: 30,
        minHeight: 30,
        maxWidth: defaultBreakpoints.keys["md"],
      },
      backgroundFade: 0.4,
    },
  },
  palette: __assign(
    {
      common: {
        black: {
          main: DefaultPalette.additional.gray[10],
        },
        white: {
          main: DefaultPalette.additional.gray[1],
        },
      },
      text: {
        primary: DefaultPalette.additional.gray[10],
      },
      background: {
        default: DefaultPalette.additional.gray[1],
        paper: DefaultPalette.additional.gray[2],
      },
      primary: {
        background:
          DefaultPalette.additional.blue[DefaultPalette.colorTags.background],
        border: DefaultPalette.additional.blue[DefaultPalette.colorTags.border],
        main: DefaultPalette.additional.blue[DefaultPalette.colorTags.primary],
        hover: DefaultPalette.additional.blue[DefaultPalette.colorTags.hover],
        active: DefaultPalette.additional.blue[7],
      },
      secondary: {
        background:
          DefaultPalette.additional.blue[DefaultPalette.colorTags.background],
        border: DefaultPalette.additional.blue[DefaultPalette.colorTags.border],
        hover: DefaultPalette.additional.blue[DefaultPalette.colorTags.hover],
        main: DefaultPalette.additional.blue[DefaultPalette.colorTags.primary],
      },
      error: {
        background:
          DefaultPalette.additional.red[DefaultPalette.colorTags.background],
        border: DefaultPalette.additional.red[DefaultPalette.colorTags.border],
        hover: DefaultPalette.additional.red[DefaultPalette.colorTags.hover],
        main: DefaultPalette.additional.red[DefaultPalette.colorTags.primary],
      },
      warning: {
        background:
          DefaultPalette.additional.gold[DefaultPalette.colorTags.background],
        border: DefaultPalette.additional.gold[DefaultPalette.colorTags.border],
        hover: DefaultPalette.additional.gold[DefaultPalette.colorTags.hover],
        main: DefaultPalette.additional.gold[DefaultPalette.colorTags.primary],
      },
      success: {
        background:
          DefaultPalette.additional.green[DefaultPalette.colorTags.background],
        border:
          DefaultPalette.additional.green[DefaultPalette.colorTags.border],
        hover: DefaultPalette.additional.green[DefaultPalette.colorTags.hover],
        main: DefaultPalette.additional.green[DefaultPalette.colorTags.primary],
      },
    },
    DefaultPalette
  ),
  typography: {
    global: __assign({}, defaultFontFamilyStack),
    fontWeight: defaultFontWeights,
    h1: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.semibold,
      fontSize: 38,
      lineHeight: "46px",
    }),
    h2: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.semibold,
      fontSize: 30,
      lineHeight: "38px",
    }),
    h3: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 24,
      lineHeight: "32px",
    }),
    h4: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 20,
      lineHeight: "28px",
    }),
    h5: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 16,
      lineHeight: "24px",
    }),
    h6: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 30,
      lineHeight: "46px",
    }),
    subtitle1: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 24,
      lineHeight: "32px",
    }),
    subtitle2: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 24,
      lineHeight: "32px",
    }),
    body1: __assign(
      __assign({}, defaultFontFamilyStack),
      ((_a = {
        fontWeight: defaultFontWeights.regular,
        fontSize: 14,
        lineHeight: "22px",
      }),
      (_a[defaultBreakpoints.down("sm")] = {
        fontSize: 16,
        lineHeight: "24px",
      }),
      _a)
    ),
    body2: __assign(
      __assign({}, defaultFontFamilyStack),
      ((_b = {
        fontWeight: defaultFontWeights.regular,
        fontSize: 12,
        lineHeight: "20px",
      }),
      (_b[defaultBreakpoints.down("sm")] = {
        fontSize: 14,
        lineHeight: "22px",
      }),
      _b)
    ),
    button: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 14,
      lineHeight: "22px",
    }),
    caption: __assign(__assign({}, defaultFontFamilyStack), {
      fontWeight: defaultFontWeights.regular,
      fontSize: 12,
      lineHeight: "20px",
    }),
  },
  misc: {},
  zIndex: {
    background: -1,
    layer0: 1000,
    layer1: 1500,
    layer2: 2000,
    layer3: 2500,
    layer4: 3000,
    blocker: 10000,
  },
  shadows: {
    shadow1: "0px 1px 4px " + fade(DefaultPalette.additional.gray[10], 0.15),
    shadow2: "0px 2px 8px " + fade(DefaultPalette.additional.gray[10], 0.25),
  },
};

var isObject = function (item) {
  return item && typeof item === "object" && !Array.isArray(item);
};
var mergeDeep = function (target, source) {
  var output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      var _a, _b;
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, ((_a = {}), (_a[key] = source[key]), _a));
        else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, ((_b = {}), (_b[key] = source[key]), _b));
      }
    });
  }
  return output;
};

var createThemeConfig = function (themeConfig) {
  // No conversion or mapping needed for now
  return __assign({}, mergeDeep(DefaultThemeConfig, themeConfig));
};

var DefaultMixins = {
  overflowEllipsis: function (height) {
    return {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: typeof height === "number" ? height + "px" : height,
    };
  },
};

var createMixins = function (additionalMixins) {
  // No transforms required yet
  return __assign({}, mergeDeep(DefaultMixins, additionalMixins));
};

var _a$1, _b$1;
var DefaultGlobalStyling = {
  html: __assign(__assign({}, DefaultThemeConfig.typography.global), {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: "border-box",
  }),
  "*, *:before, *:after": {
    boxSizing: "inherit",
  },
  "strong, b": {
    fontWeight: DefaultThemeConfig.typography.fontWeight.bold,
  },
  body: __assign(
    __assign(
      { color: DefaultThemeConfig.palette.text.primary },
      DefaultThemeConfig.typography.body2
    ),
    {
      backgroundColor: DefaultThemeConfig.palette.background.default,
      "& @media print": {
        // Save printer ink.
        backgroundColor:
          (_a$1 = DefaultThemeConfig.palette.common) === null || _a$1 === void 0
            ? void 0
            : _a$1.white.main,
      },
    }
  ),
  a: {
    outline: "none",
    textDecoration: "underline",
    color:
      (_b$1 = DefaultThemeConfig.palette.common) === null || _b$1 === void 0
        ? void 0
        : _b$1.black.main,
  },
};

var createTheme = function (themeProps) {
  return __assign(
    __assign(
      {},
      createThemeConfig(
        themeProps === null || themeProps === void 0
          ? void 0
          : themeProps.themeConfig
      )
    ),
    {
      globalStyling: {
        "@global": __assign(
          __assign({}, DefaultGlobalStyling),
          themeProps === null || themeProps === void 0
            ? void 0
            : themeProps.globalStyling
        ),
      },
      mixins: createMixins(
        themeProps === null || themeProps === void 0
          ? void 0
          : themeProps.mixins
      ),
    }
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
// Hook
var useOnClickOutside = function (ref, handler) {
  React.useEffect(
    function () {
      var listener = function (event) {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return function () {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

// Source: https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/useMediaQuery/useMediaQuery.js
var useMediaQuery = function (queryInput, options) {
  if (options === void 0) {
    options = {};
  }
  var theme = styles.useTheme();
  var props = styles.getThemeProps({
    theme: theme,
    name: "MuiUseMediaQuery",
    props: {},
  });
  if (process.env.NODE_ENV !== "production") {
    if (typeof queryInput === "function" && theme === null) {
      console.error(
        [
          "Material-UI: The `query` argument provided is invalid.",
          "You are providing a function without a theme in the context.",
          "One of the parent elements needs to use a ThemeProvider.",
        ].join("\n")
      );
    }
  }
  var query = typeof queryInput === "function" ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, "");
  // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.
  var supportMatchMedia =
    typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
  var _a = __assign(__assign({}, props), options),
    _b = _a.defaultMatches,
    defaultMatches = _b === void 0 ? false : _b,
    _c = _a.matchMedia,
    matchMedia =
      _c === void 0 ? (supportMatchMedia ? window.matchMedia : null) : _c,
    _d = _a.noSsr,
    noSsr = _d === void 0 ? false : _d,
    _e = _a.ssrMatchMedia,
    ssrMatchMedia = _e === void 0 ? null : _e;
  var _f = React.useState(function () {
      if (noSsr && supportMatchMedia) {
        // @ts-ignore
        return matchMedia(query).matches;
      }
      if (ssrMatchMedia) {
        return ssrMatchMedia(query).matches;
      }
      // Once the component is mounted, we rely on the
      // event listeners to return the correct matches value.
      return defaultMatches;
    }),
    match = _f[0],
    setMatch = _f[1];
  React.useEffect(
    function () {
      var active = true;
      if (!supportMatchMedia) {
        return undefined;
      }
      // @ts-ignore
      var queryList = matchMedia(query);
      var updateMatch = function () {
        // Workaround Safari wrong implementation of matchMedia
        // TODO can we remove it?
        // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
        if (active) {
          setMatch(queryList.matches);
        }
      };
      updateMatch();
      queryList.addListener(updateMatch);
      return function () {
        active = false;
        queryList.removeListener(updateMatch);
      };
    },
    [query, matchMedia, supportMatchMedia]
  );
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue({ query: query, match: match });
  }
  return match;
};

var debounce = function (func, waitForMs) {
  var timeout = 0;
  var debounced = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(void 0, args);
    }, waitForMs);
  };
  return debounced;
};

Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return styles.ThemeProvider;
  },
});
Object.defineProperty(exports, "createStyles", {
  enumerable: true,
  get: function () {
    return styles.createStyles;
  },
});
Object.defineProperty(exports, "makeStyles", {
  enumerable: true,
  get: function () {
    return styles.makeStyles;
  },
});
Object.defineProperty(exports, "useTheme", {
  enumerable: true,
  get: function () {
    return styles.useTheme;
  },
});
exports.ThemeSwitcher = ThemeSwitcher;
exports.createTheme = createTheme;
exports.darken = darken;
exports.debounce = debounce;
exports.decomposeColor = decomposeColor;
exports.emphasize = emphasize;
exports.fade = fade;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.hexToRgb = hexToRgb;
exports.hslToRgb = hslToRgb;
exports.isObject = isObject;
exports.lighten = lighten;
exports.mergeDeep = mergeDeep;
exports.recomposeColor = recomposeColor;
exports.rgbToHex = rgbToHex;
exports.useMediaQuery = useMediaQuery;
exports.useOnClickOutside = useOnClickOutside;
exports.useThemeSwitcher = useThemeSwitcher;
//# sourceMappingURL=index.js.map
