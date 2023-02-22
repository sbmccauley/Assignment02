let entry1 = prompt('Enter a whole number.');
let entry2 = prompt('Enter another whole number.');


if (entry1 > entry2) {
    document.write(`${entry1} is the larger of your entries.`);
} else if (entry2 > entry1){
    document.write(`${entry2} is the larger of your entries.`);
} else {
    document.write('You entered equal numbers.')
}