import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import ImgBackground from "../assets/background.jpg"; 

const BackgroundWrapper = ({ children }) => {
  return (
    <ImageBackground source={ImgBackground} style={styles.background}>
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default BackgroundWrapper;
