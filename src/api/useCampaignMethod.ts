import { useState } from "react";
import { dataRequest } from "./services/service";
import { AxiosResponse } from "axios";

export const useCampaignMethod = () => {
  const [campaigns, setCampaigns] = useState([]);

  const updateCampaign = (response: AxiosResponse | void) => {
    if (response) {
      setCampaigns(response.data);
    }
  };
  const getCampaign = async () => {
    const response = await dataRequest.get("/campaign");
    updateCampaign(response);
  };

  return {
    campaigns,
    getCampaign,
  };
};
