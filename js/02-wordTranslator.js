let languageCode = prompt('Please indicate what language you would like to use.\nUse the codes listed to make your choice. \nSpanish (Espanol)="es"\nGerman (Deutch) = "de"\nEnglish = "en"\nFrench (Francais) = "fr"');

switch (languageCode) {
    case 'es': 
        console.log('Hello World translated in Spanish is:  Hola Mundo.');
        break;
    case 'de':
        console.log('Hello World translated in German is:  Hallo Welt.');
        break;    
    case 'fr':
        console.log('Hello World translated in French is Boujour le monde.');
        break;
    case 'en':
        console.log('You chose English!  Of course Hello World, translates to Hello World!');
        break;
    default: 
        console.log('Hello World!');
}