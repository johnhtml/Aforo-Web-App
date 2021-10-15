import httpClient from "./httpClient";

const END_POINT = "/api/authenticate";

const validateUser = (user) => httpClient.post(END_POINT, user);

export { validateUser };
