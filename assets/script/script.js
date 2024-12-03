let operator =prompt('Menu \n 1. + \n 2. -\n 3. *\n 4. /');
let one=prompt('Write the 1st number');
let two=prompt('Write the 2nd number');
console.log(`This is value operator ${operator}`);


if (operator === '+'){
   let sum=parseInt(one)+parseInt(two);
    console.log(sum);
    document.write(one+ '+'+two+'=' +sum);
}

if (operator === '-'){
    let minus=parseInt(one)-parseInt(two);
    console.log(minus);
    document.write(one+ '-'+two+'=' +minus);
}

if (operator === '*'){
    let times=parseInt(one)*parseInt(two);
    console.log(times);
    document.write(one+ '*'+two+'=' +times);
}

if (operator === '/'){
    let divide=parseInt(one)/parseInt(two);
    console.log(divide);
    document.write(one+ '/'+two+'=' +divide);

}