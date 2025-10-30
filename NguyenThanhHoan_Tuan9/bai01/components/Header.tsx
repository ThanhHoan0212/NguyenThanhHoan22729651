import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <SafeAreaView style={{flexDirection: "row", height: 50}}>
        <Text>Icon</Text>
        <View style={{flexDirection: "row"}}>
            <Image style={{width: 50}} resizeMode='contain' source={require("../assets/images/image.png")}/>
        </View>
    </SafeAreaView>
  )
}

export default Header