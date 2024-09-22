import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import StatusBar from '@/components/commons/StatusBar';

const OnboardingStep = [
  {
    id: '1',
    image: require('@/src/assets/images/onboarding-1.png'),
    title: 'Transform Your Productivity with AI-Driven Task Management',
  },
  {
    id: '2',
    image: require('@/src/assets/images/onboarding-2.png'),
    title: 'All-in-One: Tasks, Scheduling, Notes, and Well-Being',
  },
  {
    id: '3',
    image: require('@/src/assets/images/onboarding-3.png'),
    title: 'Achieve More Together with Efficient Team Task Management',
  },
];

const Slide = ({item, width}: any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{
          height: 300,
          marginTop: 41,
          width,
        }}
        resizeMode="cover"
        source={item.image}
      />
    </View>
  );
};

const OnboardingScreen = ({navigation}: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref: any = useRef();
  const scrollX: any = useRef(new Animated.Value(0)).current;

  const {height, width} = useWindowDimensions();

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != OnboardingStep.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
      return
    }

    navigation.navigate('AppTabs', { screen: 'HomeStack' })
  };

  const handleSkip = () => {
    const lastSlideIndex = OnboardingStep.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={styles.onboarding}>
      <StatusBar backgroundColor="#fff" />
      <Text style={styles.taskzen}>TaskZen</Text>
      
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height/2.3}}
        style={{flexGrow: 0}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={OnboardingStep}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={22}
        bounces={false}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} width={width} />}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {OnboardingStep.map((_, index) => {
            const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp'
            })

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
            })

            return (
                <Animated.View
                    key={index}
                    style={[
                        styles.indicator,
                        {
                            width: dotWidth,
                            opacity
                        }
                    ]}
                />
            )
        })}
      </View>

      <Text style={[styles.transformYourProductivity, styles.aiDrivenTypo]}>
        {OnboardingStep[currentSlideIndex].title}
      </Text>
      
      <View style={[styles.skipFlexBox, styles.footer]}>
        <TouchableOpacity
          style={[styles.rectangleParent, styles.instanceChildLayout1]}
          onPress={goToNextSlide}
        >
          <View style={[styles.instanceChild, styles.instanceChildLayout1]} />
          <Text style={[styles.continue, styles.skipFlexBox]}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  skipFlexBox: {
    textAlign: 'center',
    position: 'absolute',
  },
  aiDrivenTypo: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    lineHeight: 26,
    fontSize: 21,
  },
  instanceChildLayout1: {
    height: 48,
    width: 195,
  },
  instanceChildLayout: {
    height: 6,
    width: 6,
    position: 'absolute',
  },
  skip: {
    marginTop: 13,
    fontSize: 20,
    letterSpacing: 0.2,
    fontFamily: 'Kurale-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center'
  },
  taskzen: {
    marginTop: 13,
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  transformYourProductivity: {
    width: 301,
    color: '#000',
    marginTop: 29
  },
  instanceChild: {
    left: 0,
    backgroundColor: '#313131',
    top: 0,
    borderRadius: 20,
  },
  continue: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fffdfd',
    top: 12,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 134,
    },
    shadowRadius: 38,
    elevation: 38,
    shadowOpacity: 1,
  },
  rectangleParent: {
    alignItems: 'center',
    marginTop: 76,
  },
  footer: {
    bottom: 0,
    paddingBottom: 49,
  },
  onboarding: {
    backgroundColor: '#fff',
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
  },
  indicator: {
    height: 5.5,
    width: 15,
    backgroundColor: 'grey',
    marginHorizontal: 1,
    borderRadius: 2,
  },
});

export default OnboardingScreen;
