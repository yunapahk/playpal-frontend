import React from "react";
import "../styles.scss";
import { Link, useLoaderData, Form } from "react-router-dom";

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
      {dogs.map((dog, index) => {
        return (
          <div key={dog._id} className="dog">
            <Link to={`/${dog._id}`}>
              <h1>{dog.name}</h1>
            </Link>
            <img src={dog.image} alt={dog.name} />
            <h3>{dog.breed}</h3>
            <h3>{dog.age}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
