import { createSlice } from '@reduxjs/toolkit'


const playingMoviesSlice =createSlice({
    name:"movies",
    initialState:{
        playingMovies:null,
        trailer:null
    },
    reducers :{
        addMovies : (state,action )=>{
                state.playingMovies=action.payload;
        },

        addTrailer : (state,action )=>{
            state.trailer=action.payload;
    }
    }
})

export const {addMovies,addTrailer}=playingMoviesSlice.actions;

export default playingMoviesSlice.reducer;
