let hours = 5;
let fee = 0;

if (hours === 1) {
    fee = 5000;
} else if (hours > 1) {
    fee = 5000 + ((hours - 1) * 3000);
    if (fee > 20000) {
        fee = 20000;
    }
}

console.log("Total Fee: Rp" + fee);