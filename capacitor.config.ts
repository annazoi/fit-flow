import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "fit-flow",
  webDir: "out",
  server: {
    url: "//http://192.168.2.2:3000",
    cleartext: true,
  },
};

export default config;
