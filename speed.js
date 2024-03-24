function checkSpeed(speed) {
    if (speed < 70) {
        console.log('OK');
    } else if (speed === 80) {
        console.log('Points: 2');
    } else {
        const points = Math.floor((speed - 70) / 5);
        if (points >= 12) {
            console.log('License suspended');
        } else {
            console.log('Points:', points);
        }
    }
}

// Test cases
checkSpeed(60);  // Output: OK
checkSpeed(80);  // Output: Points: 2
checkSpeed(100); // Output: Points: 6
checkSpeed(200); // Output: License suspended

