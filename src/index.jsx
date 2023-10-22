import React from "react";
import ReactDOMClient from "react-dom/client";
import { MacbookPro } from "./screens/MacbookPro";
import { Iphone } from "./screens/Iphone/Iphone";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

// Check if the device is a mobile device
const isMobile = /Mobile/.test(navigator.userAgent);

// Conditionally render the component based on the device type
if (isMobile) {
  root.render(<Iphone />);
} else {
  root.render(<MacbookPro />);
}