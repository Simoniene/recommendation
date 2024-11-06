import { v4 as uuidv4 } from "uuid";
import express from "express";

const router = express.Router();

let recommendations = [];

const GET_RESPONSE = (req, res) => {
  res.status(200).json({ response: "Hello world" });
};

const GENERATE_ID = (req, res) => {
  return res.status(200).json({ id: uuidv4() });
};

const INSERT_RECOMMENDATION = (req, res) => {
  const recommendation = {
    id: uuidv4(),
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  };

  const isExistingRecommendation = recommendations.find(
    (recommendation) => recommendation.id === recommendation.id
  );
  if (isExistingRecommendation) {
    return res.status(400).send({ message: "This recommendation exists" });
  }

  if (isExistingRecommendation) {
    return res
      .status(400)
      .send({ message: "This recommendation already exists." });
  }

  if (recommendation.length === 0) {
    return res.status(200).send({ message: "Data not exist" });
  }

  recommendations.push(recommendation);

  return res.status(201).json({
    response: "recommendation was inserted successfully",
    recommendations: recommendation,
  });
};

const GET_ALL_RECOMMENDATIONS = (req, res) => {
  if (tasks.length > 0) {
    const sortedRecommendations = [...recommendations].sort((a, b) => {
      const ratingA = parseFloat(a.rating);
      const ratingB = parseFloat(b.rating);
      return ratingB - ratingA;
    });

    return res.status(200).json({ recommendations: sortedRecommendations });
  }
  return res.status(200).json({ message: "recommendation do not exist" });
};

const DELETE_RECOMENDATIONS = (req, res) => {
  recommendations = [];
  res.status(200).send({ message: "Recommendations was deleted" });
};

export {
  GET_RESPONSE,
  GENERATE_ID,
  INSERT_RECOMMENDATION,
  GET_ALL_RECOMMENDATIONS,
  DELETE_RECOMENDATIONS,
};

export default router;
