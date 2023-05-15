export declare const DefaultGlobalStyling: {
  html: {
    WebkitFontSmoothing: string;
    MozOsxFontSmoothing: string;
    boxSizing: string;
  };
  "*, *:before, *:after": {
    boxSizing: string;
  };
  "strong, b": {
    fontWeight: number;
  };
  body:
    | {
        backgroundColor: string;
        "& @media print": {
          backgroundColor: string;
        };
        color: string;
      }
    | {
        backgroundColor: string;
        "& @media print": {
          backgroundColor: string;
        };
        color: string;
      };
  a: {
    outline: string;
    textDecoration: string;
    color: string;
  };
};
