var coins = [200, 100, 50, 20, 10, 5, 2];
function getChange(totalPayable, cashPaid) {
    var change = [];
    var totalChange = 0;
    var returnAmount = cashPaid - totalPayable;

    if (returnAmount < 0) {
        return -1;
    }
    else {
        for (var i = 0; i < coins.length; i++) {
            var returnCoin = (returnAmount - totalChange) / coins[i];
            if (returnCoin >= 1) {
                var totalReturnCoin = Math.floor(returnCoin);
                for (var j = 0; j < totalReturnCoin; j++) {
                    change.push(coins[i]);
                    totalChange += coins[i];
                }
            }
            if (totalChange >= returnAmount) {
                break;
            }
        }
    }

    return change;
}

/* The code block below ONLY Applies to Node.js - This Demonstrates
 re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = getChange;  // allows CommonJS/Node.js require()
}