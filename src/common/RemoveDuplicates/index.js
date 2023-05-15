export const getNonDuplicatedItems = (array, numberOfItems) => {
    const quantity = numberOfItems ?? array.length;

    // filtering from duplicates
    let filteredArray = Array.from(new Set(array.map((item) => item.id))).map(
        (id) => {
            return array.find((a) => a.id === id);
        }
    );

    // getting exact number of people
    filteredArray = filteredArray.filter(
        (item) => filteredArray.indexOf(item) < quantity
    );

    return filteredArray;
};