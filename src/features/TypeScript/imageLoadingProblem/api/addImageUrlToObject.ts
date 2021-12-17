import faker from "faker";
import {sleep} from "../../../../helpers";
import {mockImages} from "../mock";
import {IObject} from "./dto";
import {TWithImg} from "../interfaces";

export const addImageUrlToObject = async (object: IObject): Promise<TWithImg<IObject>> => {
    await sleep(faker.datatype.number({
        'min': 100,
        'max': 3000
    }))

    return {
        ...object,
        img: mockImages.find(item => item.uuid === object.imageUuid)?.url
    }
}
