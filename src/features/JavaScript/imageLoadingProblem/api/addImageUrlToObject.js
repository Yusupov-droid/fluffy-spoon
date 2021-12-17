import faker from "faker";
import {sleep} from "../../../../helpers";
import {mockImages} from "../mock";

export const addImageUrlToObject = async (object) => {
    await sleep(faker.random.number({
        'min': 100,
        'max': 3000
    }))

    return {
        ...object,
        img: mockImages.find(item => item.uuid === object.imageUuid)?.url
    }
}
