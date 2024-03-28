const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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
app.get("/api/settings/basic", (req, res) => {
  res.json(basicSettings);
});

app.get("/api/settings/advanced", (req, res) => {
  res.json(advancedSettings);
});

app.get("/api/settings/rulesData", (req, res) => {
  res.json(rulesData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
