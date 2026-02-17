import { Stack, useRouter, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { tokenStorage } from "@repo/api";
import { useAppSelector } from "@repo/redux";
import { View, ActivityIndicator } from "react-native";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function ProtectedLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const userDetails = useAppSelector((state) => state.auth.userDetails);

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await tokenStorage.getAccessToken();

      if (!token) {
        router.replace("/(auth)/login");
        return;
      }

      if (userDetails?.role && userDetails?.stage) {
        const correctBasePath = `/${userDetails.role}/${userDetails.stage}`;

        if (!pathname.startsWith(correctBasePath)) {
          router.replace({
            pathname: correctBasePath as any,
          });
          return;
        }
      }

      setChecking(false);
    };

    checkAuth();
  }, [userDetails, pathname]);

  if (checking) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <DashboardLayout>
      <Stack screenOptions={{ headerShown: false }} />
    </DashboardLayout>
  );
}
