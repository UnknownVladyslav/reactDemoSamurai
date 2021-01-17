


export const updateObjectInArray = (items, itemId, id, newObjProps) => {
    items.map(u => {
        if (u[id] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}