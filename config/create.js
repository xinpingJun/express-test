// const db = require('./config/database')

const Event = require('../model/event')


const event1 = new Event({
    title:"nodeJS 开发者大会"
})

event1.save()
      .then(document=>console.log(document))
      .catch(error=>{console.log(error)})