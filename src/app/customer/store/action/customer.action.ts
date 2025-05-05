import { createAction } from "@ngrx/store";
import { Customer } from "../../../models/customer/customer";

export const AddCustomer = createAction(
    '[Customer] Add Customer',
    (customer:Customer) => ({customer})
)
