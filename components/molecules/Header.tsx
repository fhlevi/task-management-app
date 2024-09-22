import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 98,
        backgroundColor: 'red'
    }
})