"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { tokenStorage } from "@repo/api";
import { useAppSelector } from "@repo/redux";

export default function Page() {
  const router = useRouter();
  const userDetails = useAppSelector((state) => state.auth.userDetails);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await tokenStorage.getAccessToken();

      if (!token) {
        router.replace("/login");
        return;
      }

      if (!userDetails?.role || !userDetails?.stage) {
        return;
      }

      router.replace(`/${userDetails.role}/${userDetails.stage}`);
    };

    checkAuth();
  }, [router, userDetails]);

  return null;
}
