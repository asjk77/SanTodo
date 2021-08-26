import {ColorSchemeName, useColorScheme as _useColorSchema} from 'react-native';

export function useColorScheme(): ColorSchemeName {
    return _useColorSchema();
}
