import {sleep} from "../../../../helpers";
import faker from "faker";
import {mockImages} from "../mock";
import {IObject} from "./dto";

export const fetchObjects = async (): Promise<IObject[]> => {
    await sleep(1000)
    return Array.from({length: 15}, (_, i) => ({
        id: i + 1,
        name: faker.commerce.product(),
        imageUuid: faker.random.arrayElement(mockImages).uuid
    }))
}
