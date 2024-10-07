function sumaAndProduct(arr) {
    //  suma
    const suma = arr.reduce((acc, num) => acc + num, 0);
  
    //  producto
    const producto = arr.reduce((acc, num) => acc * num, 1);

    console.log(`La suma es ${suma}.`);
    console.log(`El producto es ${producto}.`);
}

sumaAndProduct([3, 4, 5, 6]);  //La suma es 18. El producto es 360.
