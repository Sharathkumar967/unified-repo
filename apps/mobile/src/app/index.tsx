import { useEffect } from "react";
import { useRouter } from "expo-router";
import { tokenStorage } from "@repo/api";
import { useAppSelector } from "@repo/redux";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const router = useRouter();
  const userDetails = useAppSelector((state) => state.auth.userDetails);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await tokenStorage.getAccessToken();

      if (!token) {
        router.replace("/(auth)/login");
        return;
      }

      if (userDetails?.role && userDetails?.stage) {
        router.replace({
          pathname: `/${userDetails.role}/${userDetails.stage}` as any,
        });
        return;
      }

      router.replace("/(auth)/login");
    };

    checkAuth();
  }, [userDetails]);

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  );
}
