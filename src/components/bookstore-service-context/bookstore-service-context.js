import React from 'react';

const {
    Provider: BookstoreServiceProvide,
    Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvide,
    BookstoreServiceConsumer
}