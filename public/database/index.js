const overall = require('./overall');
const platform = require('./platform');
const campaign = require('./campaign');

const combinedRoutes = {
  overall: overall.daily.items,
  platform: platform.daily.items,
  campaign: campaign.ads.items,
};

module.exports = () => combinedRoutes;
