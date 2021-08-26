import {Dimensions, Platform} from 'react-native';

export const GetDeviceInfo = {
    os: Platform.OS,
    ScreenHeight: Dimensions.get('screen').width,
    ScreenWidth: Dimensions.get('screen').height,
};
