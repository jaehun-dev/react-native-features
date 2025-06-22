import React from 'react';
import {
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  DimensionValue,
} from 'react-native';

interface BoxProps extends ViewProps {
  width?: DimensionValue;
  height?: DimensionValue;
  padding?: DimensionValue;
  shape?: ShapeStyle;
  style?: StyleProp<ViewStyle>;
}

type ShapeStyle = 'none' | 'circle' | 'oval' | number;

const Box = ({
  children,
  width,
  height,
  padding,
  shape = 'none',
  style,
  ...rest
}: BoxProps) => {
  const borderRadius = (() => {
    if (shape === 'none') {
      return 0;
    }

    if (shape === 'circle') {
      return '50%';
    }

    if (shape === 'oval') {
      return 9999;
    }

    return shape;
  })();

  const boxInternalStyle: ViewStyle = {
    width,
    height,
    padding,
    borderRadius,
  };

  return (
    <View style={[boxInternalStyle, style]} {...rest}>
      {children}
    </View>
  );
};

export default Box;
