module.exports = class CustomerDto {
    customer_id
    user_name
    email
    is_activated

    constructor(model) {
        this.customer_id = model.customer_id
        this.user_name = model.user_name
        this.email = model.email
        this.is_activated = (model.is_activated === 0) ? false : true
    }
}