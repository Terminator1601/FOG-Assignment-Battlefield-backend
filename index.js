// const express = require("express");
// const cors = require("cors");
// const app = express();
// const PORT = process.env.PORT || 5000;
// const axios = require("axios");

// // Middleware
// // app.use(cors());
// app.use(express.json());

// app.use(
//   cors({
//     origin: "https://fog-battlefield-frontend.vercel.app",
//     // Allow requests from your React app's origin
//   })
// );

// axios.defaults.baseURL = "https://";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// // Previous data structure for basic settings
// const basicSettings = {
//   title: "Settings",
//   settings: [
//     {
//       label: "Region",
//       value: "europe - de",
//     },
//     {
//       label: "Punkbuster",
//       value: "on",
//     },
//     {
//       label: "Fairfight",
//       value: "on",
//     },
//     {
//       label: "Password",
//       value: "off",
//     },
//     {
//       label: "Preset",
//       value: "normal",
//     },
//   ],
// };

// // New data structure for advanced settings
// const advancedSettings = {
//   title: "Advanced",
//   settings: [
//     {
//       label: "Minimap",
//       value: "on",
//     },
//     {
//       label: "Only Squad Leader Spawn",
//       value: "off",
//     },
//     {
//       label: "Vehicles",
//       value: "on",
//     },
//     {
//       label: "Team Balance",
//       value: "on",
//     },
//     {
//       label: "Minimap Spotting",
//       value: "on",
//     },

//     {
//       label: "HUD",
//       value: "ON",
//     },
//     {
//       label: "3p Vehicle cam",
//       value: "on",
//     },
//     {
//       label: "REGENERATIVE HEALTH",
//       value: "on",
//     },
//     {
//       label: "KILL CAM",
//       value: "on",
//     },
//     {
//       label: "FRIENDLY FIRE",
//       value: "off",
//     },
//     {
//       label: "3D SPOTTING",
//       value: "on",
//     },
//     {
//       label: "ENEMY NAME TAGS",
//       value: "on",
//     },
//   ],
// };

// const rulesData = {
//   title: "Advanced",
//   settings: [
//     { label: "tickets", value: "400" },
//     { label: "vehicle spawn delay", value: "25" },
//     { label: "bullet damage", value: "100" },
//     { label: "kick after team kills", value: "5" },
//     { label: "player health", value: "100" },
//     { label: "KICK AFTER IDLE", value: "300" },
//     { label: "BAN AFTER KICKS", value: "3" },
//   ],
// };
// // Routes
// app.get("/api/settings/basic", (req, res) => {
//   res.json(basicSettings);
// });

// app.get("/api/settings/advanced", (req, res) => {
//   res.json(advancedSettings);
// });

// app.get("/api/settings/rulesData", (req, res) => {
//   res.json(rulesData);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to backend");
// });





const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://fog-battlefield-frontend.vercel.app', 
}));

axios.defaults.baseURL = "https://";

// Define settings endpoints
const endpoints = {
  basic: "/api/settings/basic",
  advanced: "/api/settings/advanced",
  rulesData: "/api/settings/rulesData",
};

// Batching function to combine multiple requests
const batchRequests = async (endpoints) => {
  const requests = Object.values(endpoints).map(endpoint => axios.get(endpoint));
  try {
    const responses = await Promise.all(requests);
    return responses.map(response => response.data);
  } catch (error) {
    console.error("Error in batch request:", error);
    throw error;
  }
};

// Previous data structure for basic settings
const basicSettings = {
  title: "Settings",
  settings: [
    {
      label: "Region",
      value: "europe - de",
    },
    {
      label: "Punkbuster",
      value: "on",
    },
    {
      label: "Fairfight",
      value: "on",
    },
    {
      label: "Password",
      value: "off",
    },
    {
      label: "Preset",
      value: "normal",
    },
  ],
};

// New data structure for advanced settings
const advancedSettings = {
  title: "Advanced",
  settings: [
    {
      label: "Minimap",
      value: "on",
    },
    {
      label: "Only Squad Leader Spawn",
      value: "off",
    },
    {
      label: "Vehicles",
      value: "on",
    },
    {
      label: "Team Balance",
      value: "on",
    },
    {
      label: "Minimap Spotting",
      value: "on",
    },
    {
      label: "HUD",
      value: "ON",
    },
    {
      label: "3p Vehicle cam",
      value: "on",
    },
    {
      label: "REGENERATIVE HEALTH",
      value: "on",
    },
    {
      label: "KILL CAM",
      value: "on",
    },
    {
      label: "FRIENDLY FIRE",
      value: "off",
    },
    {
      label: "3D SPOTTING",
      value: "on",
    },
    {
      label: "ENEMY NAME TAGS",
      value: "on",
    },
  ],
};

const rulesData = {
  title: "Advanced",
  settings: [
    { label: "tickets", value: "400" },
    { label: "vehicle spawn delay", value: "25" },
    { label: "bullet damage", value: "100" },
    { label: "kick after team kills", value: "5" },
    { label: "player health", value: "100" },
    { label: "KICK AFTER IDLE", value: "300" },
    { label: "BAN AFTER KICKS", value: "3" },
  ],
};

// Routes
app.get("/api/settings", async (req, res) => {
  try {
    const data = await batchRequests(endpoints);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});
