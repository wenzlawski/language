const env: string = "development";

let envApiUrl = "";

if (env === "production") {
  envApiUrl = `https://${process.env.VUE_APP_DOMAIN_PROD}`;
} else if (env === "staging") {
  envApiUrl = `https://${process.env.VUE_APP_DOMAIN_STAG}`;
} else {
  envApiUrl = `http://localhost:80`;
}

export const apiUrl = envApiUrl;
export const appName = "nlp-app";
