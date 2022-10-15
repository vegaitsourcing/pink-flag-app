interface ColorModel {
  /** #EC67B1 */
  primary: string;
  /** '#333333' */
  secondary: string;
  /** '#554994' */
  nav: string;
  /** '#8E8E8E' */
  description: string;
  /** rgba(255,255,255,1) */
  white: string;
  /** rgba(174,226,154,255) */
  success: string;
  /** rgba(255, 174, 0, 1) */
  warning: string;
  /** rgba(213,44,99,255) */
  danger: string;
  [name: string]: string;
}

interface Theme {
  colors: ColorModel;
  borderRadius: {
    /** unit(24) */
    $1: string;
    /** 24 */
    $1Number: number;
  };
  spacing: {
    /** unit(20) */
    $1: string;
    /** 20 */
    $1Number: number;
  };
  iconSize: {
    /** value unit(20) */
    $1: string;
    /** value unit(25) */
    $2: string;
    /** value 20 */
    $1Number: number;
    /** value 25 */
    $2Number: number;
  };
  fontSize: {
    /** unit(10) */
    $1: string;
    /** unit(12) */
    $2: string;
    /** unit(13) */
    $3: string;
    /** unit(15) */
    $4: string;
    /** unit(16) */
    $5: string;
    /** unit(18) */
    $6: string;
    /** unit(22) */
    $7: string;
    /** unit(24) */
    $8: string;
    /** value 10 */
    $1Number: number;
    /** value 12 */
    $2Number: number;
    /** value 13 */
    $3Number: number;
    /** value 15 */
    $4Number: number;
    /** value 16 */
    $5Number: number;
    /** value 18 */
    $6Number: number;
    /** value 22 */
    $7Number: number;
    /** value 24 */
    $8Number: number;
  };
  lineHeight: {
    /** unit(12) */
    $1: string;
    /** unit(16) */
    $2: string;
    /** unit(20) */
    $3: string;
    /** unit(22) */
    $4: string;
    /** unit(32) */
    $5: string;
  };
}

export { Theme };
