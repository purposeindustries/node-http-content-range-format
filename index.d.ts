export interface Range {
    unit?: string;
    first?: number | string;
    last?: number| string;
    length?: number | string;
  }

declare function format(obj: Range): string;

export default format;