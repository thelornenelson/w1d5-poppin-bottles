// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

function totalBottles(cash){
  var assets = {bottles: cash / 2, empties: cash / 2, caps: cash / 2};
  var totalEarned = {fromEmpties: 0, fromCaps: 0};
  var newBottles = 0;
  while(true){
    if(assets.empties > 1){
        newBottles = Math.floor(assets.empties / 2);
        assets.bottles += newBottles;
        totalEarned.fromEmpties += newBottles;
        assets.empties = assets.empties % 2;
        assets.empties += newBottles;
        assets.caps += newBottles;
      }
    if(assets.caps > 3){
      newBottles = Math.floor(assets.caps / 4);
      assets.bottles += newBottles;
      totalEarned.fromCaps += newBottles;
      assets.caps = assets.caps % 4;
      assets.caps += newBottles;
      assets.empties += newBottles;
    }
    if(assets.empties < 2 && assets.caps < 4){
      break;
    }
  }
  console.log("CASH SPENT: $" + cash);
  console.log("TOTAL BOTTLES: " + assets.bottles);
  console.log("REMAINING BOTTLES: " + assets.empties);
  console.log("REMAINING CAPS: " + assets.caps);
  console.log("TOTAL EARNED:");
  console.log("  FROM BOTTLES: " + totalEarned.fromEmpties);
  console.log("  FROM CAPS: " + totalEarned.fromCaps);
}

// recursive option, seems to work but fails due to stack depth over 20+ dollars
// function calcBottles(assets){
//   if(assets.empties > 1){
//     var newBottles = Math.floor(assets.empties / 2);
//     assets.bottles += newBottles;
//     assets.empties = assets.empties % 2;
//     assets.empties += newBottles;
//     assets.caps += newBottles;
//   }
//   if(assets.caps > 3){
//     var newBottles = Math.floor(assets.caps / 4);
//     assets.bottles += newBottles;
//     assets.caps = assets.caps % 4;
//     assets.caps += newBottles;
//     assets.empties += newBottles;
//   }
//   if(assets.empties > 1 || assets.caps > 3){
//     return calcBottles(assets);
//   } else {
//     return assets;
//   }
// }

totalBottles(Number(process.argv[2]));
