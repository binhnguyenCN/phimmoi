// libs
import React from "react";
// layouts
import AppLayout from "@/components/AppLayout";
// others
import { ProvideAuth } from "@/auth/context";

const App = () => (
  <ProvideAuth>
    <AppLayout />
  </ProvideAuth>
);
export default App;
