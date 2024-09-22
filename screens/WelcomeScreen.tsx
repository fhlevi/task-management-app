
import useWelcoming from 'store/welcoming';
import React from 'react';
import StatusBar from '@/components/commons/StatusBar';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';

const {width} = Dimensions.get('window');

const WelcomeScreen = ({navigation}: any) => {
  const setInitialized: any = useWelcoming((state) => state.setInitialized);
  const handleNextStep = () => {
    setInitialized(true)
    navigation.navigate('OnboardingStack', { screen: 'Onboarding' })
  };

  return (
    <SafeAreaView style={[styles.container, styles.shadow]}>
      <StatusBar backgroundColor="#5e2ef8" barStyle="light-content" />

      <View style={styles.containerImage3Icon}>
        <Image 
          style={[styles.image3Icon]} 
          resizeMode="cover" 
          source={require('@src/assets/images/logo-onboarding.png')} 
        />
      </View>
      <Text style={[styles.taskzen, styles.taskzenFlexBox]}>
        TaskZen
      </Text>
      <Text style={styles.streamlinedTaskManagement}>
        Streamlined task management with intuitive design
      </Text>

      <View style={styles.footerFlexBox}>
        <Text style={[styles.showCase, styles.taskzenFlexBox]}>
          Show Case
        </Text>
        <TouchableOpacity style={styles.buttonNext} onPress={handleNextStep}>
          <Image  source={require('src/assets/icons/arrow-right.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 149
    },
    shadowRadius: 42,
    elevation: 42,
    shadowOpacity: 1,
  },
  container: {
    backgroundColor: "#5e2ef8",
    flex: 1,
    overflow: "hidden",
    alignItems: 'center'
  },
  streamlinedTaskManagement: {
    fontSize: 15,
    textAlign: "center",
    width: 282,
    color: "#fff",
    fontFamily: "Poppins-Regular",
    lineHeight: 27,
  },
  containerImage3Icon: {
    width: width,
    paddingLeft: 30,
    justifyContent: 'flex-end',
    height: 372,
  },
  image3Icon: {
    width: 289,
    height: 282,
    alignItems: 'center'
  },
  taskzen: {
    fontSize: 42,
    width: 173,
    height: 64,
    fontFamily: "Poppins-Regular",
    textAlign: "center"
  },
  taskzenFlexBox: {
    color: "#fff",
  },
  showCase: {
    width: 100,
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "Poppins-Black",
    textAlign: "left",
    lineHeight: 27
  },
  footerFlexBox: { 
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width,
    paddingHorizontal: 27
  },
  buttonNext: {
    width: 66,
    height: 66,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WelcomeScreen;
