import { request } from "@/utils/service"
import type * as Dish from "./types/dish"
export function getDishDataApi(params: Dish.GetDishRequestData) {
  return request<Dish.GetDishResponseData>({
    url: "dish",
    method: "get",
    params
  })
}

export function createDishDataApi(data: Dish.CreateOrUpdateDishRequestData) {
  return request({
    url: "dish",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data
  })
}

/** 改 */
export function updateDishDataApi(data: Dish.CreateOrUpdateDishRequestData) {
  return request({
    url: "dish",
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    data
  })
}
/** 删 */
export function deleteDishDataApi(id: string) {
  return request({
    url: `dish/${id}`,
    method: "delete"
  })
}
