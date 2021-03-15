let dogProductPrice = ["Crocheted Dog Toy: $10.00", "Slow Feeder Bowl: $14.00 ", "Pawz Grey Treat Jar: $20.00", "Blue Sweet Dreams Thermal Pajamas: $30.00 ", "Checker Chewy Vuiton Bowl: $32.00 ", "Red Heart Sweater Dress: $27.00 ", "Velvet Hair Bow - Sun Kissed: $12.00", "Into the Wild Leash: $27.00"]
let wishList = []
doneWishList = false
i = 0

//Shows all products available
btnAllProducts.onclick=function(){
  lblAllProducts.value = dogProductPrice
}

//Adds to wishlist
btnSpecificProduct.onclick=function(){
  let wishList = inptProduct.value
  lblSpecificProduct.value = `Your wishList contains ${wishList}`
}

//View your current wish list
btnWishList.onclick=function(){
  while (doneWishList == false) {
    wishList[i] = inptProduct.value
    i++
    doneWishList = confirm ("Are you done entering products?")
}
  lblSpecificProduct.value = wishList[i]
}
