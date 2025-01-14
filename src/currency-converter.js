// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.

let amount = process.argv[2];
let initialCurrency = process.argv[3];
let finalCurrency = process.argv[4];

console.log(`The amount is ${amount}`);
console.log(`The initial currency is ${initialCurrency}`);
console.log(`The final currency is ${finalCurrency}`);

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.
if (amount === undefined) {
    console.error(`Whoops, you must provide a proper amount`);
    process.exit(); // calling a process method exit
}

if (initialCurrency === undefined) {
    console.error(`Whoops, you must provide a proper initial currency`);
    process.exit();
}

if (finalCurrency === undefined) {
    console.error(`Whoops, you must provide a proper final currency`);
    process.exit();
}

// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/

// define object

let rates = {
    USD: {
        CAD: 1.25
    },
    CAD: {
        USD: 0.80
    },
    //AUD: {
        //CAD: 0.96
    //},
    //CAD: {
        //AUD: 1.04
    //},
};

console.log('The rates are:', rates);

// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

//need to access rates value
//extract variable and use as key

let rateTableForInitialCurrency = rates[initialCurrency];

if (rateTableForInitialCurrency === undefined) {
    console.error(`Whoops initial currency must be valid. Initial currency received is ${initialCurrency}`);
    process.exit();
}

//make sure target currency is alsso valid
let rateTableForFinalCurrency = rates[finalCurrency];

if (rateTableForFinalCurrency === undefined) {
    console.error(`Whoops final currency must be valid. Final currency received is ${finalCurrency}`);
    process.exit();
}

// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.

function conversionRate() {
    return amount * rates[initialCurrency][finalCurrency];
}

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.
console.log(`${amount} in ${initialCurrency} is equal to ${conversionRate()} ${finalCurrency}`);

// This message should also include the original amount and currency information
// supplied by the user.
