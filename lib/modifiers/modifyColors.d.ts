import { LottieColor, LottieObject } from '../types';
/**
 * Replace Lottie colors in the animation. Specify the target lottie color array exactly as the source lottie color order.
 * @param colorsArray must be LOTTIE COLORS
 * @param lottieObject
 * @returns LottieObject
 */
export declare const modifyColors: (
  colorsArray: LottieColor[],
  lottieObject: LottieObject,
  immutable?: boolean,
) => LottieObject;
