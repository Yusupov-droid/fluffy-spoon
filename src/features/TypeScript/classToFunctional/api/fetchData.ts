import faker from 'faker';
import {IData} from "./dto";
import {sleep} from "../../../../helpers";

let failCount = 0

export const fetchData = async (): Promise<IData[]> => {
    await sleep(1000)

    /** каждый третий запрос с ошибкой */
    failCount++
    if (!(failCount % 3)) {
        throw new Error("Что-то пошло не так...")
    }

    return Array.from({length: 20}, (_, i) => ({
        id: i + 1,
        name: faker.name.firstName(),
        createdAt: faker.date.between("2020-01-01", new Date())
    }))
}
