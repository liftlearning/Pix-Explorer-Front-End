import type { Pix } from "@/model/Pix";
import { api } from ".";

export const validatePix = async (pix: Pix) => {
  try {
    await api.post("/validate_pix", pix);
    return true;
  } catch (error) {
    return false;
  }
};
