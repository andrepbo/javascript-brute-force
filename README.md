# JavaScript Brute Force

This project is a brute-force search algorithm that iterates through all possible numerical combinations until it finds a predefined target value. This project is useful for understanding brute-force techniques and search algorithms.

## Features

- Brute-force search through all possible values within a given digit range.
- Configurable number of digits (e.g., 2, 3, or 4-digit searches).
- Displays intermediate attempts to track progress.
- Calculates and displays the execution time.
- Developed in **JavaScript** and executable with **Node.js**.

## How to Use
```bash
git clone https://github.com/andrepbo/javascript-brute-force.git
cd javascript-brute-force
node index.js
```

## Example Usage
```javascript
bruteForceSearch(234, 3);
```

## Expected output:
```bash
Attempt 100: Trying 099...
Attempt 200: Trying 199...
Attempt 300: Trying 299...

Target found!
{
  codeInserted: 234,
  attempts: 235,
  executionTime: "0.50ms"
}
```
## Configurations
The function bruteForceSearch(targetValue, numDigits) allows adjusting the number of digits:
```javascript
bruteForceSearch(78, 2); // Searches within 00-99
bruteForceSearch(9876, 4); // Searches within 0000-9999
```

The script prints intermediate attempts every 100 iterations.