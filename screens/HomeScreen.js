import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
            style={{
                width:100,
                height:100,
                resizeMode:"contain"
            }}
            source={{
                uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.similarpng.com%2Fthumbnail%2F2020%2F09%2FYellow-taxi-sign-on-transparent-background-PNG.png&f=1&nofb=1&ipt=aab9bb39dc64cfde5bb0af001ee3519cb998b983ef2497079a6d2ed30a3d25c9&ipo=images"
                //uri:"https://links/papareact.com/gzs"
            }}
        />

        <NavOptions/>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen