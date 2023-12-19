import "./app.css";
import App from "./App.svelte";
import Counter from "./lib/Counter.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
