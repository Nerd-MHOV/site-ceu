import { activitiesList } from "@/contants";


function createData(
    name: string,
    multimedia: string[],
    planetarium: string[],
    workshop: string[],
    especial: string[]
) {
    return { name, multimedia, planetarium, workshop, especial };
}

function filterActivities(type: string, year: string) {
    const teste = (activitiesList.filter(act => act.type === type && act.tags.some(tag => tag.title === year))).map(act => act.title);
    return teste
}

const rowsFirst = [
    createData('1° ano',
        filterActivities("multimedia", "1°ano"),
        filterActivities("planetarium", "1°ano"),
        filterActivities("workshop", "1°ano"),
        filterActivities("especial", "1°ano")),
    createData('2° ano',
        filterActivities("multimedia", "2°ano"),
        filterActivities("planetarium", "2°ano"),
        filterActivities("workshop", "2°ano"),
        filterActivities("especial", "2°ano")),
    createData('3° ano',
        filterActivities("multimedia", "3°ano"),
        filterActivities("planetarium", "3°ano"),
        filterActivities("workshop", "3°ano"),
        filterActivities("especial", "3°ano")),
    createData('4° ano',
        filterActivities("multimedia", "4°ano"),
        filterActivities("planetarium", "4°ano"),
        filterActivities("workshop", "4°ano"),
        filterActivities("especial", "4°ano")),
    createData('5° ano',
        filterActivities("multimedia", "5°ano"),
        filterActivities("planetarium", "5°ano"),
        filterActivities("workshop", "5°ano"),
        filterActivities("especial", "5°ano")),
];

const rowsSecond = [
    createData('6° ano',
        filterActivities("multimedia", "6°ano"),
        filterActivities("planetarium", "6°ano"),
        filterActivities("workshop", "6°ano"),
        filterActivities("especial", "6°ano")),
    createData('7° ano',
        filterActivities("multimedia", "7°ano"),
        filterActivities("planetarium", "7°ano"),
        filterActivities("workshop", "7°ano"),
        filterActivities("especial", "7°ano")),
    createData('8° ano',
        filterActivities("multimedia", "8°ano"),
        filterActivities("planetarium", "8°ano"),
        filterActivities("workshop", "8°ano"),
        filterActivities("especial", "8°ano")),
    createData('9° ano',
        filterActivities("multimedia", "9°ano"),
        filterActivities("planetarium", "9°ano"),
        filterActivities("workshop", "9°ano"),
        filterActivities("especial", "9°ano")),
];

const rowsThird = [
    createData('1° ano [E.M.]',
        filterActivities("multimedia", "1°ano[E.M.]"),
        filterActivities("planetarium", "1°ano[E.M.]"),
        filterActivities("workshop", "1°ano[E.M.]"),
        filterActivities("especial", "1°ano[E.M.]")),
    createData('2° ano [E.M.]',
        filterActivities("multimedia", "2°ano[E.M.]"),
        filterActivities("planetarium", "2°ano[E.M.]"),
        filterActivities("workshop", "2°ano[E.M.]"),
        filterActivities("especial", "2°ano[E.M.]")),
    createData('3° ano [E.M.]',
        filterActivities("multimedia", "3°ano[E.M.]"),
        filterActivities("planetarium", "3°ano[E.M.]"),
        filterActivities("workshop", "3°ano[E.M.]"),
        filterActivities("especial", "3°ano[E.M.]")),
];

export {
    rowsFirst,
    rowsSecond,
    rowsThird,
}