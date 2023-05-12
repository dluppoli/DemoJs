function DemoIeri()
{
    //alert('Hello World');
    console.log('Hello');

    const pi = 3.14;

    console.log(`Pi greco 
    vale ${pi}`);
    console.log('Pi greco vale ' + pi);

    const testo = "Hello world";
    console.log(testo.toUpperCase())
    console.log(testo);

    //stampare la tabellina del 7
    let tabellina7 = [];
    for(let n = 1 ; n<=10 ;n++ )
    {
        //tabellina7[n-1] = n*7;
        tabellina7.push(n*7);
    }

    tabellina7.push('END');

    console.log(tabellina7.join(' '))


    let s = '9 18 27 36 45'
    let tabellina9 = s.split(' ');
    console.log(tabellina9.length);


    let paragrafo = "Nel mezzo del cammin di nostra vita mi ritrovai";
    let parole = paragrafo.split(' ');
    for(let i = 0; i < parole.length; i++)
    {
        if( parole[i].length > 5) 
            parole[i] = parole[i].toUpperCase();
    }
    paragrafo = parole.join(' ');
    console.log(paragrafo);
}

function EvidenziaTesto(paragrafo, numCar=5)
{
    let parole = paragrafo.split(' ');

    for(let i=0 ; i< parole.length; i++)
    {
        if( parole[i].length > numCar)
            parole[i] = parole[i].toUpperCase(); 
    }

    return parole.join(' ');
}

function RimuoviEvidenziazione(paragrafo)
{
    
}

function Maiuscoletto(paragrafo)
{
    //restituire la variabile paragrafo (stringa) con tutte 
    //le prime lettere in maiuscolo
    let parole = paragrafo.split(' ');

    for(let i=0 ; i< parole.length; i++)
    {
/*        let primaLettera = parole[i].charAt(0);  //[0]
        let parolaRestante = parole[i].slice(1);
        primaLettera = primaLettera.toUpperCase();
        parole[i] = primaLettera + parolaRestante;
*/
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }

    return parole.join(' ');
}

function RimuoviMaiuscoletto(paragrafo)
{
    //Restituire il paragrafo con tutte le prime lettere minuscole, tranne:
    //1 - Per la prima parola
    //2 - Quando la parola precedente termina con . ! ?
    let parole = paragrafo.split(' ');

    for(let i=1 ; i< parole.length; i++)
    {
        //if(i==0)continue;

        /*if( parole[i-1].endsWith('.') || 
            parole[i-1].endsWith('!') || 
            parole[i-1].endsWith('?') ) continue;*/
        if( !parole[i-1].endsWith('.') && 
            !parole[i-1].endsWith('!') &&
            !parole[i-1].endsWith('?') )
        {
            parole[i] = parole[i].charAt(0).toLowerCase() + parole[i].slice(1);
        }
    }

    return parole.join(' ');
}

let p = 'I promessi sposi! Quel ramo del lago di como che volge a ponente...';
p = RimuoviMaiuscoletto(Maiuscoletto(p));
console.log(p);