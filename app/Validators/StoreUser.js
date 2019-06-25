'use strict'

class StoreUser {

  get rules () {
    return {
      username: 'required',
      email: 'required|unique:user,email',
      password: 'required'

    }
  }

  get messages (){
    return{
      'username.required': 'El campo usuario es requerido',
      'email.required': 'El campo email es requerido',
      'email.unique': 'El email ya existe!',
      'password.required': 'La contraseña es requerida'
    }
  }

}

module.exports = StoreUser
