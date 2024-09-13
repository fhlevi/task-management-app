import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const WelcomeScreen = ({navigation}: any) => {
  //   const handleNextStep = () => {
  //     navigation.navigate('AuthStack', {screen: 'Login'});
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('@src/assets/images/logo-onboarding.png')}
          />
          <View style={styles.wrapTitleDesc}>
            <Text style={styles.title}>TaskZen</Text>
            <Text style={styles.shortDesc}>
                Streamlined task management with
            </Text>
            <Text style={styles.shortDesc}>intuitive design</Text>
          </View>
        </View>
        <View style={styles.footer}>
            <View style={{ flex: 1 }}>
                <Text style={styles.labelFooter}>Show</Text>
                <Text style={styles.labelFooter}>Case</Text>
            </View>
            <TouchableOpacity style={styles.buttonNext}>
                <Image 
                    source={require('src/assets/icons/arrow-right.png')} 
                />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingTop: 17,
    backgroundColor: '#5E2EF8',
    height: '100%',
    width: '100%',
  },
  main: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    marginRight: 40,
  },
  wrapTitleDesc: {
    position: 'absolute',
    bottom: -50,
  },
  title: {
    fontSize: 42,
    top: 0,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Poppins'
  },
  shortDesc: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 27,
    color: '#ffffff',
    fontFamily: 'Poppins'
  },
  labelFooter: {
    color: '#ffffff',
    fontWeight: '900',
    lineHeight: 27,
    fontSize: 24
  },
  footer: {
    width: '100%',
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
