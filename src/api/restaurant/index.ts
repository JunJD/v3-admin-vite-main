import { request } from "@/utils/service"
import type * as Dish from "./types/dish"
export function getDishDataApi(params: Dish.GetDishRequestData) {
  return request<Dish.GetDishResponseData>({
    url: "dish",
    method: "get",
    params
  })
}
