import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [isPlayerReady,setIsPlayerReady]=useState(false)
  return (
    <SafeAreaView>
      <Text style={{color:'red'}}>App</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1
  }
})