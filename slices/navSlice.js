import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin:(state,action) => {
            state.origin = action.payload;
        },
        setDestination:(state,action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfromation:(state,action) => {
            state.travelTimeInformation = action.payload
        }
    }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;


//Selectors (Like getters in JAVA):---
export const selectOrigin = (state) => state.nav.origin//Arrow function without curly braces means direct value is returned
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInfromation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer;