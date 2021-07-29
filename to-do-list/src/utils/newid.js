let lastId = 0;

export default function newID(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}