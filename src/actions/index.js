

export const UPDATE_QUERY = 'UPDATE_QUERY';

export function updateQuery(newQuery) {
    return {
        type: UPDATE_QUERY,
        payload: newQuery
    };
}
