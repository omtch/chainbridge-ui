export interface IDefaultPalette {
  colorTags: {
    primary: 6;
    background: 1;
    border: 3;
    hover: 5;
    [key: number]: number;
  };
  additional: {
    blue: {
      [key: number]: string;
    };
    gray: {
      [key: number]: string;
    };
    red: {
      [key: number]: string;
    };
    volcano: {
      [key: number]: string;
    };
    orange: {
      [key: number]: string;
    };
    gold: {
      [key: number]: string;
    };
    yellow: {
      [key: number]: string;
    };
    lime: {
      [key: number]: string;
    };
    green: {
      [key: number]: string;
    };
    cyan: {
      [key: number]: string;
    };
    geekblue: {
      [key: number]: string;
    };
    purple: {
      [key: number]: string;
    };
    magenta: {
      [key: number]: string;
    };
  };
}
export declare const DefaultPalette: IDefaultPalette;
