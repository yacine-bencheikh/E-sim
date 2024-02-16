import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailScreen = ({navigation}) => {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button onPress = {()=>navigation.navigate('Tabs')} title='click'> </Button>
    </View>
  )
}

export default DetailScreen