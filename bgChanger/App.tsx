import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [background, setBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = '123456789ABCDEF'
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hexRange[Math.floor(Math.random() * 16)]
      setBackground(hexColor);
    }
  }

  return (
    <>
      {/* <StatusBar backgroundColor={background} /> */}
      <View style={[styles.container, { backgroundColor: background }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.btnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    backgroundColor: '#6A1B4D',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  btnText: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'
  }
})