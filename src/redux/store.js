// Import configureStore dari @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import countSlice.reducer dari file Toolkit.js
import countReducer from './Toolkit';

// Membuat Redux store dan mengintegrasikan countReducer
const store = configureStore({
    reducer: {
        count: countReducer // Pastikan key ini sesuai dengan yang diinginkan, dalam hal ini 'count'
    }
});

export default store;