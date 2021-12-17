import {sleep} from "../../../../helpers";
import faker from "faker";
import {mockImages} from "../mock";

export const fetchObjects = async () => {
    await sleep(1000)
    return Array.from({length: 15}, (_, i) => ({
        id: i + 1,
        name: faker.commerce.product(),
        imageUuid: faker.random.arrayElement(mockImages).uuid
    }))
}
