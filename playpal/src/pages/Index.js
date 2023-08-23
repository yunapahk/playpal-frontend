import React from "react";
import "../styles.scss";
import { Link, useLoaderData, Form } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import DislikeButton from "../components/DislikeButton";
import { Card, CardWrapper } from "react-swipeable-cards"; 

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const dogs = useLoaderData();

  return (
    <div>
      <div className="form-container">
      <h2>Add Your Pal!</h2>
      <Form className="form-column" action="/create" method="POST">
        <input className="form-input" type="text" name="name" placeholder="name" />
        <input className="form-input" type="text" name="breed" placeholder="breed" />
        <input className="form-input" type="number" name="age" placeholder="age" />
        <input className="form-input" type="text" name="image" placeholder="image" />
        <input className="form-input" type="text" name="size" placeholder="size" />
        <input className="form-input" type="text" name="activityLevel" placeholder="activity level" />
        <input className="form-button" type="submit" value="Add Pal" />
      </Form>
      </div>
      <CardWrapper >
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
              padding: "20px", 
              margin: "10px", 
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
       <div>
            <LikeButton />
            <DislikeButton />
        </div>
           </Card>
        ))}
      </CardWrapper>
    </div>
  );
}

export default Index;
