import React from 'react';
import BookList from "../book-list";

const HomePage = () => {

    const books = [
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

    return (
        <BookList books={books}/>
    )
}

export default HomePage;