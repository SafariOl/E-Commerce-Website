export interface ICustomerInfo {
    customer_id: string
    user_name: string
    email: string
    is_activated: boolean
}

export interface ICustomer {
    refreshToken: string
    accessToken: string
    customer: ICustomerInfo
}

export interface IRegister {
    user_name: string
    email: string
    password: string
}

export interface ILogin {
    email: string
    password: string
}

export interface ICustomerName {
    newName: string
    customer_id: string
}

export interface ICustomerPassword {
    customer_id: string
    password: string
}