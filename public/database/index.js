const overall = require("./overall");
const platform = require("./platform");
const campaign = require("./campaign");

const combinedRoutes = {
  overall: overall.overall.daily,
  platform: platform.platform.daily,
  campaign: campaign.campaign.ads,
};

module.exports = () => combinedRoutes;
