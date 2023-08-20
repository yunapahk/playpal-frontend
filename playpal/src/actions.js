import { baseURL } from "./base_url";
import { redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const newDog = {
    name: formData.get("name"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    image: formData.get("image"),
    size: formData.get("size"),
    activityLevel: formData.get("activityLevel")
  };

  await fetch(`${baseURL}/dogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newDog)
  });

  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const updatedDog = {
    name: formData.get("name"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    image: formData.get("image"),
    size: formData.get("size"),
    activityLevel: formData.get("activityLevel")
  };

  await fetch(`${baseURL}/dogs/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedDog)
  });

  return redirect("/");
};

export const deleteAction = async ({ params }) => {
  await fetch(`${baseURL}/dogs/${params.id}`, {
    method: "DELETE"
  });

  return redirect("/");
};

export const showAction = async ({ params }) => {
  const response = await fetch(`${baseURL}/dogs/${params.id}`);
  const dog = await response.json();

  return dog;
};