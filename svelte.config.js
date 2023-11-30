import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
import dotenv from 'dotenv';
import azure from 'svelte-adapter-azure-swa';

dotenv.config();
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: azure(),
  },
  preprocess: vitePreprocess(),
};
export default config;
