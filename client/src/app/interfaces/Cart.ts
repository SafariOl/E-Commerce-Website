export interface ICartPost {
    customer_id: string
    product_id: string
    count: number
    size: string
}

export interface ICartRemove {
    customer_id: string
    product_id: string
    size: string
}

export interface ICart {
    product_id: string,
    item_name: string,
    main_img: string,
    color: string,
    price: number,
    count: number,
    size: string,
    gender: string
}