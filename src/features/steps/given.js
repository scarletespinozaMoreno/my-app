const {Given}= require ('cucumber')

Given ('a user opens {string}',(url)=> {
    console.log(url)
})