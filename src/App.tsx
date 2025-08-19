import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import FeedSection from "./components/dashboard/FeedSection";
import TrendingSection from "./components/dashboard/TrendingSection";
import FavoritesSection from "./components/dashboard/FavoritesSection";
import SettingsPanel from "./components/dashboard/SettingsPanel";
import NotFound from "./components/ui/NotFound";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div className="App">
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<FeedSection />} />
              <Route path="trending" element={<TrendingSection />} />
              <Route path="favorites" element={<FavoritesSection />} />
              <Route path="settings" element={<SettingsPanel />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </PersistGate>
  );
}

export default App;
