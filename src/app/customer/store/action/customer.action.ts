import { createAction } from "@ngrx/store";
import { Customer } from "../../../models/customer";

export const AddCustomer = createAction(
    '[Customer] Add Customer',
    (customer:Customer) => ({customer})
)