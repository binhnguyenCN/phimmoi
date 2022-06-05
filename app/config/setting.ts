// libs
import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://api.themoviedb.org/3/"
  },
  staging: {
    apiUrl: "https://api.themoviedb.org/3/"
  },
  prod: {
    apiUrl: "https://api.themoviedb.org/3/"
  }
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest?.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings;
