import { Stack } from "expo-router";
import { StoreProvider } from "@repo/redux";

export default function RootLayout() {
  return (
    <StoreProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </StoreProvider>
  );
}
