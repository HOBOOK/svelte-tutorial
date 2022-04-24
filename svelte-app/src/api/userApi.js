import Api from "../services/Api";

// Method to get a list of all Pokemon
export const getOrgList = async () => {
    try {
      const response = await Api.get("/auth/org");
      return response.body;
    } catch (error) {
      console.error(error);
    }
};