
// Fixed: Removed problematic triple-slash references to react and react-dom types as they are causing resolution errors

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
  }
}
