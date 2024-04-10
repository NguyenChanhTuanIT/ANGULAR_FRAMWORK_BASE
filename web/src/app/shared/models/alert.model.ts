import { CrudType } from "@shared/enums/crud-type.enum";
import { Utils } from "@shared/enums/utils";


export interface AlertModel {
    title: Utils | string,
    icon?: string,
    arrayMessage?: string[],
    message: string,
    mode: CrudType,
    textBtnConfirm?: string,
    textBtnSuccess?: string,
    textBtnError?: string,
    role?: number
}

export interface ConfirmModel {
    title: string,
    message: string,
    image?: string,
    textBtnCancel?: string,
    textBtnOk?: string
}
