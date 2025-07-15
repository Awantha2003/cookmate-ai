import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '@/servicess/Colors';

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
      <View>
        <Marquee spacing={10} speed={0.7} style={{ 
            transform: [{ rotate: '-6deg' }] ,
            marginTop: 10,}}>
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image
                key={`marquee1-${index}`}
                source={image}
                style={styles.image}
              />
            ))}
          </View>
        </Marquee>

        <Marquee spacing={10} speed={0.4} style={{ 
            transform: [{ rotate: '-6deg' }] ,
            marginTop: 10,}}>
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image
                key={`marquee2-${index}`}
                source={image}
                style={styles.image}
              />
            ))}
          </View>
        </Marquee>

        <Marquee spacing={10} speed={0.3} style={{ 
            transform: [{ rotate: '-6deg' }],
            marginTop: 10,}}>
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image
                key={`marquee3-${index}`}
                source={image}
                style={styles.image}
              />
            ))}
          </View>
        </Marquee>
      </View>

      <View style={{ 
        backgroundColor: Colors.WHITE,
        height: '100%',
        padding: 20,
      }}>
        <Text style={{
          fontFamily: 'outfit-Bold',
          fontSize: 24,
          textAlign: 'center',
        }}>
          Cookmate AI 🥗🔍 | Find, Create & Enjoy Delicious Recipes!
        </Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 16,
          textAlign: 'center',
          marginTop: 10,
        }}>
          Generate delicious recipes in seconds with the power of AI! 🍔✨
        </Text>

       
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity onPress={() => console.log('Get Started')}
           style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: 'outfit-Bold',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
