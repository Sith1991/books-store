const initialState = {
    books: [
        {
            id: 1,
            title: 'Барбаросса',
            author: 'V. Pikul'
        },
        {
            id: 2,
            title: 'Фаворит',
            author: 'V. Pikul'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default: return state
    }
}

export default reducer;