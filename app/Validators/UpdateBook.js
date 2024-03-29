'use strict'

class UpdateBook {

  get rules () {
    const bookId = this.ctx.params.id;
    return {
      title: `required|unique:books,title,id,{$bookId}`,
      isbn: `requerid|unique:books,isbn,id,{$bookId}`,
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

module.exports = UpdateBook
