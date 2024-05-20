export interface CreateOrUpdateDishRequestData {
  id?: string
  name: string | undefined
  description: string
  price: number
  stock: number
  img: string
}

export interface GetDishRequestData {
  /** 菜品名称，可选 */
  name?: string
  /** 菜品类别名称，可选 */
  categoryName?: string
}

export interface GetDishData {
  description: string
  id?: string
  img: string
  name: string | undefined
  price: number
  stock: number
}

export type GetDishResponseData = ApiResponseData<GetDishData[]>
