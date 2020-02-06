import React from "react";
import {
  Animated,
  Image as ImageNative,
  StyleSheet,
  View,
  Platform
} from "react-native";

class Image extends React.Component {
  state = {
    placeholderOpacity: new Animated.Value(1)
  };

  onLoad = () => {
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();

    setTimeout(
      () => {
        Animated.timing(this.state.placeholderOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: Platform.OS === "web" ? false : true
        }).start();
      },
      Platform.OS === "android" ? 0 : Math.floor(minimumWait + staggerNonce)
    );
  };

  render() {
    const {
      placeholderStyle,
      PlaceholderContent,
      containerStyle,
      style,
      children,
      ...attributes
    } = this.props;
    const hasImage = Boolean(attributes.source);

    return (
      <View
        accessibilityIgnoresInvertColors={true}
        style={StyleSheet.flatten([styles.container, containerStyle])}
      >
        <ImageNative
          testID="RNE__Image"
          {...attributes}
          onLoad={this.onLoad}
          style={[
            StyleSheet.absoluteFill,
            {
              width: style.width,
              height: style.height
            }
          ]}
        />

        <Animated.View
          pointerEvents={hasImage ? "none" : "auto"}
          accessibilityElementsHidden={hasImage}
          importantForAccessibility={hasImage ? "no-hide-descendants" : "yes"}
          style={[
            styles.placeholderContainer,
            {
              opacity: hasImage ? this.state.placeholderOpacity : 1
            }
          ]}
        >
          <View
            testID="RNE__Image__placeholder"
            style={StyleSheet.flatten([
              style,
              styles.placeholder,
              placeholderStyle
            ])}
          >
            {PlaceholderContent}
          </View>
        </Animated.View>

        <View style={style}>{children}</View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "transparent",
    position: "relative",
    overflow: "hidden"
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject
  },
  placeholder: {
    backgroundColor: "#bdbdbd",
    alignItems: "center",
    justifyContent: "center"
  }
};

export { Image };
