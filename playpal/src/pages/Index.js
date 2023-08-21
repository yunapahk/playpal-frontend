import React from "react";
import { Link, useLoaderData, Form } from "react-router-dom";
import { Card, CardWrapper } from "react-swipeable-cards"; // Import specific components
import "../styles.scss";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const dogs = useLoaderData();

  return (
    <div>
      <h2>Create a Dog</h2>
      <Form action="/create" method="POST">
        <input type="text" name="name" placeholder="dog's name" />
        <input type="text" name="breed" placeholder="dog's breed" />
        <input type="number" name="age" placeholder="dog's age" />
        <input type="text" name="image" placeholder="dog's image" />
        <input type="text" name="size" placeholder="dog's size" />
        <input
          type="text"
          name="activityLevel"
          placeholder="dog's activity level"
        />
        <input type="submit" value="Create Dog" />
      </Form>
      <CardWrapper>
        {/* Swipeable card items */}
        {dogs.map((dog, index) => (
          <Card
            key={dog._id}
            style={{
              backgroundColor: "#5FBF54",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add your box shadow here
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px", // Adjust padding as needed
              margin: "10px", // Adjust margin as needed
              color: "#fff",
              fontSize: "1.5rem",
            }}
          >
            <Link
              to={`/${dog._id}`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <h1>{dog.name}</h1>
            </Link>
            <img
              src={dog.image}
              alt={dog.name}
              style={{
                maxWidth: "100%", // Set the maximum width of the image
                height: "auto", // Allow the height to adjust automatically
              }}
            />
            <h3>{dog.breed}</h3>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
}

export default Index;
