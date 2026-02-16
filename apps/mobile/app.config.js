export default {
  expo: {
    name: "mobile",
    slug: "mobile",
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    plugins: ["expo-router"],
    extra: {
      router: {
        origin: false,
      },
    },
  },
};
