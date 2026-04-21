import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const analyticsEndpoint = (import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined)?.trim();
const analyticsWebsiteId = (import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined)?.trim();

if (analyticsEndpoint && analyticsWebsiteId) {
  const endpoint = analyticsEndpoint.replace(/\/+$/, "");
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${endpoint}/umami`;
  script.dataset.websiteId = analyticsWebsiteId;
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
