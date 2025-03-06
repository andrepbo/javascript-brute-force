function bruteForceSearch(targetValue) {
    // Validate if the target value has exactly 3 digits
    if (targetValue < 0 || targetValue > 999) {
        console.log("Invalid value. Please enter a number between 000 and 999");
        return;
    }

    let attempts = 0;
    let currentValue = 0; // Start at 000

    // Simulate the brute-force search
    while (currentValue <= 999) {
        attempts++;

        // If we find the target value, stop the search
        if (currentValue === targetValue) {
            console.log(`Target found: ${currentValue.toString().padStart(3, '0')}`);
            console.log(`Number of attempts: ${attempts}`);
            return;
        }

        // Move to the next attempt
        currentValue++;
    }
}

bruteForceSearch(378);