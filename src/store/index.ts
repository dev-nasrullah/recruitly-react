import { configureStore } from '@reduxjs/toolkit';
import { companyApi } from '../services/api';

export const store = configureStore({
  reducer: {
    [companyApi.reducerPath]: companyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(companyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
