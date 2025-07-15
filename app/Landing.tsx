import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Marquee} from '@animatereactnative/marquee'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
export default function Landing() {
  const imageList = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/5.jpg'),
    require('../assets/images/6.jpg'),
    require('../assets/images/7.jpg'),
    require('../assets/images/8.jpg'),
  ];

  return (
    <GestureHandlerRootView>

    <Marquee spacing={10} speed={0.7}
    style={{
        transform: [{ rotate: '-4deg' }],
    }}
    > 
      <View style={styles.imageContainer}>
        {imageList.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.image}
          />
        ))}
      </View>
      </Marquee>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
   
  },
});
