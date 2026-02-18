const APP_ENV = process.env.APP_ENV ?? "development";

export default {
  expo: {
    name: "mobile",
    slug: "mobile",
    version: "1.0.0",

    runtimeVersion: {
      policy: "appVersion",
    },

    ios: {
      bundleIdentifier: "com.yourcompany.yourapp",
      supportsTablet: true,
    },

    android: {
      package: "com.yourcompany.yourapp",
      adaptiveIcon: {
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundColor: "#FFFFFF",
      },
    },

    experiments: {
      typedRoutes: true,
    },

    // ✅ FIXED HERE
    plugins: [
      "expo-router",
      "expo-secure-store", // <-- ADD THIS
    ],

    extra: {
      eas: {
        projectId: "113c4360-f0c6-42ba-81b6-86912f2362f4",
      },

      apiUrl:
        APP_ENV === "production"
          ? "https://user-dev.eksaq.in/api"
          : "http://localhost:4001/api",
    },
  },
};
