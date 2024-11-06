// 1. Parašyt endpointą kuris leistu atspausdint concolėje filmo rekomendacijos objektą, filmo rekomendacija susideda iš: id, title, raiting, description, imdbLink. Filmo rekomendacija turi būt atsiųsta per body;
// 2. Pamodifikuot endpointą, sugebėtu išsaugoti filmo rekomendaciją į masyvo kintamąjį; // Reiks rekomandaciją supushint;
// 3. Parašyt endpointą kuris parsiųstu visas išsaugotas rekomendacijas;
// 4. Parašyt endpointą kuris gražintu visas rekomendacijas išrikiuotas mažėjimo tvarka pagal reitingą;
// 5. Parašyt endpointą kuris ištrintų visas rekomendacijas;
// 6. Patobulint add movie endpointą, kad jus neleistu pridėti filmo su jau egzistuojančiu id;
// 7. Patobulint savo endpointą bei bei jei masyvas yra tuščias - gražinti 200 statusa su žinute "Data not exist"
// 8. Apsirašyt frontenda kuri turi 2 funkcionalumus: įdėti rekomendaciją į backendą. Pasiimti rekomendacijas ir jas atvaizduoti ekrane.
console.log("Sveiki atvyke i Node.JS");

const { v4: uuidv4 } = require("uuid"); //eilute kuri importuoja musu biblioteka
const express = require("express"); //eilute kuri importuoja musu biblioteka
const cors = require("cors");
const app = express(); // app reskia kad viska ka sukursime tures pradzoje app viskas bus issaugota "APP"

app.use(cors());

app.use(express.json());

const recommendations = [];

app.get("/getResponse", (req, res) => {
  res.send("Hello World");
});

app.get("/generateId", (req, res) => {
  return res.status(200).json({ id: uuidv4() });
});

app.post("/insertRecommendation", (req, res) => {
  const recommendation = {
    id: uuidv4(),
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  };

  const existingRecommendation = recommendations.find(
    (recommendation) => recommendation.id === recommendation.id
  );
  if (existingRecommendation) {
    return res.status(400).send({ message: "This recommendation exists" });
  }

  if (existingRecommendation) {
    return res
      .status(400)
      .send({ message: "This recommendation already exists." });
  }

  recommendations.push(recommendation);

  return res.status(201).json({
    response: "recommendation was inserted successfully",
    recommendations: recommendation,
  });

  if (recommendation.length === 0) {
    return res.status(200).send({ message: "Data not exist" });
  }
});

app.get("/getAllRecomendations", (req, res) => {
  if (tasks.length > 0) {
    const sortedRecommendations = [...recommendations].sort((a, b) => {
      const ratingA = parseFloat(a.rating);
      const ratingB = parseFloat(b.rating);
      return ratingB - ratingA;
    });

    return res.status(200).json({ recommendations: sortedRecommendations });
  }
  return res.status(200).json({ message: "recommendation do not exist" });
});

app.delete("/recommendations", (req, res) => {
  res.status(200).send({ message: "Recommendations was deleted" });
});

app.use((req, res) => {
  res.status(404).json({ response: "your endpoint does not exit" });
});
app.listen(3000);

app.listen(port, () => {
  console.log(`App was started on port ${port}`);
});
