type TStyle = 'Casual' | 'Formal' | 'Gym' | 'Party'

export interface IReview {
    rate: number,
    review: string
    user: string
    product_id: string
}

export interface IProduct {
    product_id: string,
    name: string,
    price: number,
    rate: number,
    style: TStyle,
    discount: number | null,
    description: string,
    color: string,
    main_img: string,
    img1: string, 
    img2: string, 
    img3: string,
    gender: string,
    reviews?: Array<IReview> | null
}