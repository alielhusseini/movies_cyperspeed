import "ts-node/register"; // Add this to import TypeScript files
import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "my-app",
  slug: "my-app",
};

export default config;
