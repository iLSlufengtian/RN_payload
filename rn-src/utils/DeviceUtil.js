"use strict"

import {Dimensions, StatusBar, Platform, PixelRatio} from 'react-native'
import DeviceInfo from 'react-native-device-info';

//UI设计图的宽度
const designWidth = 750;
//UI设计图的高度
const designHeight = 1334;

//手机屏幕的宽度
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const uW = width / designWidth
//计算手机屏幕高度对应设计图高度的单位高度
export const uH = height / designHeight

export const statusBarHeight = getStatusBarHeight();
export const safeAreaViewHeight = isIphoneX() ? 34 : 0
//标题栏的高度
export const titleHeight = uW * 88 + statusBarHeight;

// 是否是iphonex
export const isAppleX = isIphoneX();

//字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale()

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH)
}

//状态栏的高度
export function getStatusBarHeight() {
    if (Platform.OS == 'android') return StatusBar.currentHeight;
    if (isIphoneX()) {
        return 44
    }
    return 20
}
export const APP_VERSION =DeviceInfo.getVersion();// APP版本
export const APP_CODE =DeviceInfo.getBuildNumber();// build号
export const APPLICATION_ID =DeviceInfo.getBundleId();// 应用包名
export const UNIQUE_ID= DeviceInfo.getUniqueID();// UniqueID
