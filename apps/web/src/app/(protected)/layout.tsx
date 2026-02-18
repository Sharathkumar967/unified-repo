"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { tokenStorage } from "@repo/api";
import { useAppSelector } from "@repo/redux";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const userDetails = useAppSelector((state) => state.auth.userDetails);

  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await tokenStorage.getAccessToken();

      if (!token) {
        router.replace("/login");
        return;
      }

      if (!userDetails?.role || !userDetails?.stage) {
        setIsChecking(false);
        return;
      }

      const correctBasePath = `/${userDetails.role}/${userDetails.stage}`;

      if (!pathname.startsWith(correctBasePath)) {
        router.replace(correctBasePath);
        return;
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [router, pathname, userDetails]);

  if (isChecking) {
    return null;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
