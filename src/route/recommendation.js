import express from "express";

const recommendations = [];

import {
  GET_RESPONSE,
  GENERATE_ID,
  INSERT_RECOMMENDATION,
  GET_ALL_RECOMMENDATIONS,
  DELETE_RECOMENDATIONS,
} from "../controller/recommendation.js";

const router = express.Router();

router.get("/recommendations", GET_RESPONSE);

router.post("/recommendations/:id", GENERATE_ID);

router.post("/recommendations", INSERT_RECOMMENDATION);

router.get("/recommendations", GET_ALL_RECOMMENDATIONS);

router.delete("/recommendations", DELETE_RECOMENDATIONS);

export default router;
