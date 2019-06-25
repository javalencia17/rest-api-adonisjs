'use strict'

class StoreBook {

  get rules () {
    return {
      title: 'required|unique:books,title',
      isbn: 'requerid|unique:books,isbn',
      author: 'requerid'
    }
  }

  get messages () {
    return {
      'title.required': 'El campo titulo es requerido',
      'title.unique': 'El titulo ya existe',
      'isbn.required': 'El campo isbn es requerido',
      'isbn.unique': 'El isbn ya existe',
      'author.required': 'El campo author es requerido'
    }
  }

}

module.exports = StoreBook
