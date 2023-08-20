import React from "react";
import { Link, useLoaderData, Form } from "react-router-dom";

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
        <input type="text" name="activityLevel" placeholder="dog's activity level" />
        <input type="submit" value="Create Dog" />
      </Form>
      {dogs.map((dog) => (
        <div key={dog._id} className="dog">
          <Link to={`/${dog._id}`}>
            <h1>{dog.name}</h1>
          </Link>
          <img src={dog.image} alt={dog.name} />
          <h3>{dog.breed}</h3>
        </div>
      ))}
    </div>
  );
}

export default Index;