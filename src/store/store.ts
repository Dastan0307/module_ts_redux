import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from '../features/movies/moviesSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
    reducer: {
        darkTheme: themeReducer,
        movies: moviesSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;