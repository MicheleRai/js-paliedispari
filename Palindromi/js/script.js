/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

let parolaUtente = prompt('Inserire una parola per scoprire se è palindroma')

let risposta = verificaPalindroma(parolaUtente)


function verificaPalindroma (parola) {  
    
    const arrParola = parola.split ('');
    console.log(arrParola);

    const reveArrParola = arrParola.reverse();
    console.log(reveArrParola);

    const revParola = reveArrParola.join('');
    console.log(revParola);
    
    if (parola == revParola) 
    {  
    console.log('Questa parola è palindroma');   
    }  
    else {  
    console.log('Questa parola non è palindroma');  
    }
} 