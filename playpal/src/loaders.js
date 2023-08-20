import { baseURL } from './base_url';

export const dogsLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${ baseURL }/dogs`)
    // convert the response in a js object
    const dogs = await response.json()
    // return the dogs
    return dogs
}

export const dogLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${ baseURL }/dogs/${id}`)
    // convert the response into a js object
    const dog = await response.json()
    // return the dog
    return dog
}
