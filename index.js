const messages = [];
function writeCards (name, event) {
    console.log(name, event)
    for (let x = 0; x < name.length; x++) {
        messages.push(`Thank you, ${name[x]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
//writeCards(names);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }
}