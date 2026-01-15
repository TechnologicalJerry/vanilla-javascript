const numbersForMap = [1, 2, 3];

const newNumbers = numbersForMap.map(function (num) {
    return num + 1;
});

// console.log('Result::::', newNumbers);

// function isSubset(a, b) {
//     console.log("Main array (a):", a);
//     console.log("Subset array (b):", b);

//     for (let i = 0; i < b.length; i++) {
//         console.log("Checking element:", b[i]);

//         if (!a.includes(b[i])) {
//             console.log(b[i], "is NOT found in array a");
//             return false;
//         }

//         console.log(b[i], "is found in array a");
//     }

//     console.log("All elements of b are present in a");
//     return true;
// }

// const a = [1, 2, 3, 4, 5];
// const b = [2, 4];

// function isSubset(a, b) {
//     console.log("Main array:", a);
//     console.log("Subset array:", b);

//     for (let i = 0; i < b.length; i++) {
//         console.log("Checking:", b[i]);

//         if (!a.includes(b[i])) {
//             console.log("Not found:", b[i]);
//             return false;
//         }

//         console.log("Found:", b[i]);
//     }

//     return true;
// }

// console.log("Result:", isSubset(a, b));


// const a1 = [10, 20, 30, 40];
// const b1 = [20, 30];

// function isSubset(a, b) {
//     console.log("Main array (a):", a);
//     console.log("Subset array (b):", b);

//     for (let i = 0; i < b.length; i++) {
//         console.log("Checking element---:", b[i]);

//         if (!a.includes(b[i])) {
//             console.log("❌ Not found:", b[i]);
//             return false;
//         }

//         console.log("✅ Found:", b[i]);
//     }

//     console.log("🎉 All elements found");
//     return true;
// }

// console.log("Result:", isSubset(a1, b1));





const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
