import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import StoryCard from './components/StoryCard'
import Background from './components/Background'
import ChatsCard from './components/ChatsCard'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <StoryCard />
        <ChatsCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})