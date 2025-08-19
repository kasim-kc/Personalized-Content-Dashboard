import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contentReducer from "../features/content/contentSlice";
import preferencesReducer from "../features/preferences/preferencesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["preferences"],
};

const persistedReducer = persistReducer(persistConfig, preferencesReducer);

export const store = configureStore({
  reducer: {
    content: contentReducer,
    preferences: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
