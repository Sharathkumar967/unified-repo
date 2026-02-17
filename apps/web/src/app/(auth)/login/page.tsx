"use client";

import { tokenStorage } from "@repo/api";
import { authService } from "../../../lib/service";
import LoginForm from "../../../components/ui/LoginForm";
import { useRouter } from "next/navigation";
import {
  useAppDispatch,
  setAuthDetails,
  setIsAuthenticated,
} from "@repo/redux";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    const response = await authService.login({
      username,
      password,
      product: "0",
      platform: "web",
    });

    console.log("response", response.data);

    if (response.data.accessToken) {
      toast.success("Login successful");
      tokenStorage.setAccessToken(response.data.accessToken);
      tokenStorage.setRefreshToken(response.data.refreshToken);
    }

    if (response.data.role && response.data.stage) {
      dispatch(
        setAuthDetails({
          role: response.data.role,
          stage: response.data.stage,
        }),
      );
      dispatch(setIsAuthenticated(true));
    }

    if (response.data.role && response.data.stage) {
      const redirectUrl = `/${response.data.role}/${response.data.stage}`;
      router.replace(redirectUrl);
    }
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;