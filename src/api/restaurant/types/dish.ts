export interface CreateOrUpdateTableRequestData {
  id?: string
  username: string
  password?: string
}

export interface GetDishRequestData {
  /** 菜品名称，可选 */
  name?: number
  /** 菜品类别名称，可选 */
  categoryName?: number
}

export interface GetDishData {
  description: string
  id: number
  img: null
  name: string
  price: number
  stock: number
}

export type GetDishResponseData = ApiResponseData<GetDishData[]>
