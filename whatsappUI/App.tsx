import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import StoryCard from './components/StoryCard'
import ChatsCard from './components/ChatsCard'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StoryCard />
        <ChatsCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
})