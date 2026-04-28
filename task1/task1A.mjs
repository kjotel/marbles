// Original Code (with issues)

function calcTotal(prices) {
  let total = 0;
  for (let i = 1; i <= prices.length; i++) {
    total += price[i];
  }
  return total.toFixed(2);
}

// Fixed Version

export function calcTotalFixed(prices) {
  if (!Array.isArray(prices)) {
    throw new Error("Input must be an array");
  }

  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    const value = prices[i];

    if (typeof value !== "number") {
      throw new Error("All items must be numbers");
    }

    total += value;
  }

  return Number(total.toFixed(2));
}
