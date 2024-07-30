import { StaticImageData } from "next/image"
import casual_img from '../assets/images/image 11.jpg'
import formal_img from '../assets/images/image 13.jpg'
import party_img from '../assets/images/image 12.jpg'
import gym_img from '../assets/images/image 14.jpg'

import calvin_logo from '../assets/images/calvin-klein-logo-1.svg'
import gucci_logo from '../assets/images/gucci-logo-1.svg'
import prada_logo from '../assets/images/prada-logo-1.svg'
import versace_logo from '../assets/images/versace-logo.svg'
import zara_logo from '../assets/images/zara-logo-1.svg'

import visa_img from '../assets/images/payment-images/Visa.svg'
import mastercard_img from '../assets/images/payment-images/Mastercard.svg'
import paypal_img from '../assets/images/payment-images/Paypal.svg'
import apple_img from '../assets/images/payment-images/applePay.svg'
import gpay_img from '../assets/images/payment-images/G Pay.svg'
import { IReviewBunner, IStylesList, TFooter } from "./types"

export const pages:string[] = ['On Sale', 'New Arrivals', 'Brands'];

export const itemsList:string[] = [
    't-shirt', 'shorts', 'suits', 'hoodie', 'jeans'
]

export const colors:string[] = [
    'green', 'red', 'yellow', 'orange', 'lightblue', 'blue', 'purple', 'violet', 'white', 'black'
]

export const dressStyleList:string[] = [
    'casual', 'formal', 'party', 'gym'
]

export const sizes:string[] = [
    'S', 'M', 'L', 'XL'
]

export const styles: IStylesList[] = [
    {
        styleName: "Casual",
        src: casual_img
    }, 
    {
        styleName: "Formal",
        src: formal_img
    }, 
    {
        styleName: "Party",
        src: party_img
    }, 
    {
        styleName: "Gym",
        src: gym_img
    }, 
]

export const brandsLogos:StaticImageData[] = [
    versace_logo, zara_logo, gucci_logo, prada_logo, calvin_logo
]

export const payImages:StaticImageData[] = [
    visa_img, mastercard_img, paypal_img, apple_img, gpay_img
]

export const footerHelpLinks: TFooter[] = [
    {
      title: 'COMPANY',
      links: [
        'About',
        'Features',
        'Works',
        'Career'
      ]
    },
    {
      title: 'HELP',
      links: [
        'Customer Support',
        'Delivery Details',
        'Terms & Conditions',
        'Privacy Policy'
      ]
    },
    {
      title: 'FAQ',
      links: [
        'Account',
        'Manage Deliveries',
        'Orders',
        'Payments'
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        'Free eBooks',
        'Development Tutorial',
        'How to - Blog',
        'Youtube Playlist'
      ]
    },
]

export const reviews:IReviewBunner[] = [
    {
        rate: 5,
        name: 'Sarah M.',
        review: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.”',
    },
    {
        rate: 4,
        name: 'Alex K.',
        review: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    },
    {
        rate: 5,
        name: 'James L.',
        review: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”',
    },
]