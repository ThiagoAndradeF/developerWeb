const receiveFirstAndLastElement=function(elementos){
    const indicateFirst=0
    const indicateLast=elementos.length-1
    const firstElement= elementos[indicateFirst]
    const lastElement= elementos[indicateLast]

    
    return [firstElement,lastElement]
}

console.log(receiveFirstAndLastElement([10,20,30,40,50,60]))