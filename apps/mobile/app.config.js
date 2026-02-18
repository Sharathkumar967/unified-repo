const APP_ENV = process.env.APP_ENV ?? "development";

export default {
  expo: {
    name: "mobile",
    slug: "mobile",
    version: "1.0.0",

    // Production-ready metadata
    // https://docs.expo.dev/versions/latest/config/app/#runtimeversion
    runtimeVersion: {
      policy: "appVersion",
    },
    ios: {
      bundleIdentifier: "com.yourcompany.yourapp", // TODO: Replace with your actual bundle identifier
      supportsTablet: true,
    },
    android: {
      package: "com.yourcompany.yourapp", // TODO: Replace with your actual package name
      adaptiveIcon: {
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundColor: "#FFFFFF",
      },
    },

    experiments: {
      // Typed routes are generally safe for production and improve developer experience.
      typedRoutes: true,
    },
    plugins: ["expo-router"],
    extra: {
      router: {
        origin: false,
      },
      // Environment-specific configuration
      apiUrl:
        APP_ENV === "production"
          ? "https://user-dev.eksaq.in/api"
          : "http://localhost:4001/api",
    },
  },
};
