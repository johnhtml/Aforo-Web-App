import httpClient from "./httpClient";

const END_POINT = "/api/user/:id";

const validateUserName = (userName) => httpClient.get(END_POINT, userName);

export { validateUserName };