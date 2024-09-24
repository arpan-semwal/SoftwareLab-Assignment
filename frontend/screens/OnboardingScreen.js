import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Quality',
    text: 'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
    image: require('../assets/onboarding-img-1.jpg'),
    backgroundColor: '#fce4ec',
    buttonColor: '#5EA25F',
  },
  {
    key: '2',
    title: 'Convenient',
    text: 'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
    image: require('../assets/onboarding-img-2.jpg'),
    backgroundColor: '#e8f5e9',
    buttonColor: '#D5715B',
  },
  {
    key: '3',
    title: 'Local',
    text: 'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time.',
    image: require('../assets/onboarding-img-3.jpg'),
    backgroundColor: '#fff3e0',
    buttonColor: '#F8C569',
  },
];

const OnboardingScreen = ({ navigation }) => {
  return (
    <Swiper
      loop={true}
      autoplay={true}
      autoplayTimeout={3}
      showsPagination={false} // Hide default pagination
    >
      {slides.map((slide) => (
        <View key={slide.key} style={[styles.slide, { backgroundColor: slide.backgroundColor }]}>
          <Image source={slide.image} style={styles.image} />
          <View style={styles.contentBox}>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.text}>{slide.text}</Text>

            {/* Custom dots positioning */}
            <View style={styles.dotContainer}>
              {slides.map((_, index) => (
                <View key={index} style={index === slides.findIndex(s => s.key === slide.key) ? styles.activeDotStyle : styles.dotStyle} />
              ))}
            </View>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: slide.buttonColor }]}
              onPress={() => navigation.navigate('Screen1')}
            >
              <Text style={styles.buttonText}>Join the movement!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen1')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height * 0.5,
    resizeMode: 'cover',
  },
  contentBox: {
    width: '100%',
    height: 422,
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
    paddingTop: 40, // Add padding to the top for spacing
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 0, // Remove top margin if not needed
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginText: {
    marginTop: 15,
    color: '#555',
    fontSize: 16,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dotStyle: {
    backgroundColor: '#ccc',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: '#333',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
});

export default OnboardingScreen;
