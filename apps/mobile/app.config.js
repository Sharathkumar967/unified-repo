const APP_ENV = process.env.APP_ENV ?? "development";

export default {
  expo: {
    name: "Eksaq",
    slug: "eksaq-mobile",
    scheme: "eksaq",
    version: "1.0.0",

    runtimeVersion: {
      policy: "appVersion",
    },

    ios: {
      bundleIdentifier: "com.eksaq.mobile",
      supportsTablet: true,
    },

    android: {
      package: "com.eksaq.mobile",
      adaptiveIcon: {
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundColor: "#FFFFFF",
      },
    },

    experiments: {
      typedRoutes: true,
    },

    plugins: ["expo-router", "expo-secure-store"],

    extra: {
      eas: {
        projectId: "113c4360-f0c6-42ba-81b6-86912f2362f4",
      },

      apiUrl:
        APP_ENV === "production"
          ? "https://user-dev.eksaq.in/api"
          : "http://10.0.2.2:4001",
    },
  },
};
