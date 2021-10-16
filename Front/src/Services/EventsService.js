import httpClient from "./httpClient"

const END_POINT = "/api/events"

const getAllEvents = () => httpClient.get(END_POINT)

const createEvent = (event) => httpClient.post(END_POINT, event)

const createEventWithImage = (event) => httpClient.post(END_POINT, event, {
  headers: {
    "Content-Type": "multipart/form-data"
  }
})

export {
  getAllEvents, createEvent, createEventWithImage
};