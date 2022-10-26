import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SECRET_KEY } from '../secret';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Aao bhai</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            //styles={toInputBoxStyles} --> Some Error in styling due to which it is not working[API results success but invisible]
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: SECRET_KEY,
              language: "en",
            }}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              console.log(data);
              console.log(details);
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            nearbyPlacesAPI="GooglePlaceSearch"
            debounce={400}
            onFail={(error) => console.error(error)}
          />
        </View>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  );
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        fex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});