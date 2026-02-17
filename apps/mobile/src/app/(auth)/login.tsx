import { useRouter } from "expo-router";
import { tokenStorage } from "@repo/api";
import {
  useAppDispatch,
  setAuthDetails,
  setIsAuthenticated,
} from "@repo/redux";
import { authService } from "@/src/lib/services";
import LoginForm from "@/src/components/ui/LoginForm";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogin = async (username: string, password: string) => {
    const response = await authService.login({
      username,
      password,
      product: "0",
      platform: "mobile",
    });

    if (response.data.accessToken) {
      await tokenStorage.setAccessToken(response.data.accessToken);
      await tokenStorage.setRefreshToken(response.data.refreshToken);
    }

    if (response.data.role && response.data.stage) {
      dispatch(
        setAuthDetails({
          role: response.data.role,
          stage: response.data.stage,
        }),
      );

      dispatch(setIsAuthenticated(true));

      router.replace({
        pathname: `/${response.data.role}/${response.data.stage}` as any,
      });
    }
  };

  return <LoginForm onLogin={handleLogin} />;
}
