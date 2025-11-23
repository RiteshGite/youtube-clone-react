export function getRandomName() {
    const names = [
        "Siddhesh","Yogesh","Avinash","Anshul","Atharva",
        "Aditya","Batman","Shubham","Nikhil","Sahil",
        "Krushna","Kunal","Abhiraj","Jayesh","Mandar",
        "Tejas","Mahesh","Amol","Pranav","Dnyaneshwar","Anny","Saurabh",
        "Snehal","Sayali","Vaishnavi","Prajakta","Aishwarya",
        "Shreya","Shubhangi","Janhavi","Rutuja","Mrunal",
        "Purva","Srushti","Asmita","Bhagyashree","Gauri",
        "Aditi","Aarohi","Neha","Pooja","Kavita"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

export function getRandomMessage() {
    const messages = [
        "Hello everyone 👋","Nice stream bro 💗💗","Where are you from?",
        "This is interesting 🙂","Keep going man 🚀","Good explanation 👍",
        "What are we watching now?","I agree with you","That's true ✔️",
        "Tell me more about this",
        "bhai mast lag raha hai 🔥","kya chal raha hai aaj","sab log active ho?",
        "ye acha tha","bro sahi bol raha hai 😄","koi doubt ho to pucho",
        "aaj chat thoda slow hai 🐌🐌","haan ye chal jayega","kitne log online hai? 👀",
        "kay mhanta sagle","kiti mast live stream ahe 🤩","mast samjun sangitle 👌",
        "kiti lok baghtayt","ho barobar aahe 👍🏼👍🏼","majha net thoda slow aahe 😅",
        "tu changla boltoy","aata kay honar 🙀","mala pan samajla","khup chaan ✨😁💗"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}


function getNthPrime(n) {
    if (n < 1) return null;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    let num = 1;

    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++;
        }
    }

    return num;
}

export default getNthPrime;