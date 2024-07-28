import { StaticImageData } from 'next/image'
import { IReview } from '../interfaces/Product'

export interface IStylesList {
    styleName: string,
    src: StaticImageData
}

export type TFooter = {
    title: string,
    links: Array<string>
}

export interface IProductInfo {
    product_id: string
    name: string
    rate: number
    price: number
    discount: number | null
    description: string
    color: string
    reviews?: Array<IReview> | null
}

export interface IFooterWebLink {
    href: string,
    icon: React.ReactNode
}

export interface IReviewBunner {
    rate: number,
    name: string,
    review: string
}