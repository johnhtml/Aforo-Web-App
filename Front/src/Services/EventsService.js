import httpClient from "./httpClient"

const END_POINT = "/api/events"

const getAllEvents = () => httpClient.get(END_POINT)

export {
  getAllEvents
}