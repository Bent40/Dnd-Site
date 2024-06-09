const express = require("express");
const router = express.Router();
const controller = require("../controllers/campaign");

router.get("/", controller.findCampaign);
router.get("/allCampaigns", controller.getAllCampaigns);
router.patch("/updateChar", controller.updateChar);
router.ws("/current", controller.campaignHandler)

module.exports = router;
