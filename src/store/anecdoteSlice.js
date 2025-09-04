import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, content: 'But it works in my machine...', votes: 8 },
    { id: 2, content: 'If it hurts, do it more often.', votes: 2 },
    { id: 3, content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 1 },
    { id: 4, content: 'The hardest part of coding is getting started.', votes: 5 },
    { id: 5, content: 'Adding manpower to a late software project makes it later!', votes: 0 }
  ];

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    incrementVoteById (state, action){
      const id = action.payload;
      const anecdote = state.find((anecdote)=>{return anecdote.id === id;});
      anecdote.votes++;
    },
    addAnecdote (state, action){
      const newAnecdote = { id: state.length + 1, content: action.payload, votes: 0 }
      state.push(newAnecdote)
    },
  },
});

export const {incrementVoteById, addAnecdote} = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
