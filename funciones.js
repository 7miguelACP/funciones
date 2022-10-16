

function verdadero(){
   return true;
}

function time(){
    setTimeout( function(){
        console.log( "Hola soy una promesa" );
    },5000)
}


function* some(){
    let i=0;
    while(true){
        yield i
        i=i + 2;
    }
}

let pares= some();

console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
