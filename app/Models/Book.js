'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {

    static get table () {
        return 'books';
    }

    static get primaryKey () {
        return 'id';
    }

    static get visible () {
        return ['title','isbn', 'author','created_at']
    }

    static get dates () {
        return super.dates.concat(['created_at', 'updated_at'])
    }

    static castDates (field, value) {
        return value.format('DD-MM-YYYY')
    }

}

module.exports = Book
