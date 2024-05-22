import { RecipelModel } from "../models/recipe.model"

export const readHotels = (filter) => RecipelModel.find(filter)
export const readHotelById = (id) => RecipelModel.findById(id)
export const createHotel = (data) => RecipelModel.create(data)