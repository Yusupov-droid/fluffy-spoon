import faker from "faker";

export const mockImages = Array.from({length: 20}, (_, i) => ({
    uuid: faker.datatype.uuid(),
    url: faker.image.imageUrl(200, 100, 'cats', true)
}))