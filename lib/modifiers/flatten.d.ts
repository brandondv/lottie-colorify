import { Color, LottieObject } from '../types';
/**
 * Replace all the colors in a lottie object with 1 target color.
 * @param targetColor
 * @param lottieObject
 * @param immutable
 * @returns lottieObject
 */
export declare const flatten: (targetColor: Color, lottieObject: LottieObject, immutable?: boolean) => any;
