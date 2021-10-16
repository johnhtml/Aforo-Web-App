import httpClient from "./httpClient";

const END_POINT = "/api/user";

const insertNewUser = (newUser) => httpClient.post(END_POINT, newUser);

export { insertNewUser };
