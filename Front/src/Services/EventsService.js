import httpClient from "./httpClient"

const END_POINT = "/api/event"

const getAllEvents = () => httpClient.get(END_POINT)

export {
  getAllEvents
}