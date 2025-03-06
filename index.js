function bruteForceSearch(targetValue, numDigits = 3) {
    if (typeof targetValue !== "number" || isNaN(targetValue)) {
        console.log("Value has to be a number.");
        return;
    }

    // Define the max possible number based on digits (e.g., 999 for 3 digits)
    const maxValue = Math.pow(10, numDigits) - 1;
    if (targetValue < 0 || targetValue > maxValue) {
        console.log(`Code inserted has to be between 000 and ${maxValue}`);
        return;
    }

    let attempts = 0;
    let currentValue = 0;
    const startTime = performance.now(); // Capture start time

    while (currentValue <= maxValue) {
        attempts++;

        // Print every 100 attempts to track progress (optional)
        if (attempts % 100 === 0) {
            console.log(`Attempt ${attempts}: Trying ${currentValue.toString().padStart(numDigits, '0')}...`);
        }

        if (currentValue === targetValue) {
            const endTime = performance.now(); // Capture end time
            console.log("\nTarget found!");
            console.log({
                codeInserted: targetValue,
                attempts,
                executionTime: `${(endTime - startTime).toFixed(2)}ms`
            });
            return;
        }

        currentValue++;
    }
}

// Run the brute-force search with a 3-digit number
bruteForceSearch(234, 3);