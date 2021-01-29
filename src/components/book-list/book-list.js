import React, {Component} from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../hoc";
import {booksError, booksLoaded, booksRequest} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

    componentDidMount() {
        const {
            bookstoreService,
            booksLoaded,
            booksRequest,
            booksError
        } = this.props;
        booksRequest();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err))
    }

    render() {
        const {books, loading, error} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ul className={'book-list'}>
                {
                    books.map((book) => {
                        return <li key={book.id}><BookListItem book={book}/></li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequest,
    booksError
}

export default compose(
    withBookstoreService(), connect(mapStateToProps, mapDispatchToProps)
)(BookList);