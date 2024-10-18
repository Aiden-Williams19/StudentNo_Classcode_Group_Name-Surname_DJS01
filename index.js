/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity in km/h
const acc = 3; // acceleration in m/s^2
const time = 3600; // time in seconds (1 hour)
const d = 0; // initial distance in km
const fuel = 5000; // remaining fuel in kg
const fbr = 0.5; // fuel burn rate in kg/s

// Convert velocity from km/h to m/s
const velInMs = vel * (1000 / 3600); // km/h to m/s

// Function to calculate new velocity in m/s
const calcNewVel = (velInMs, acc, time) => {
  return velInMs + (acc * time); // velocity after acceleration
};

// Calculate new distance in meters using the kinematic formula: d = v0 * t + 0.5 * a * t^2
const calcNewDistance = (velInMs, acc, time) => {
  return (velInMs * time) + (0.5 * acc * Math.pow(time, 2)); // distance in meters
};

// Calculate remaining fuel
const calcRemainingFuel = (fuel, fbr, time) => {
  return fuel - (fbr * time); // remaining fuel
};

// Convert new distance to km
const newDistanceInKm = calcNewDistance(velInMs, acc, time) / 1000; // meters to kilometers

// Calculate new velocity in m/s
const newVelInMs = calcNewVel(velInMs, acc, time);

// Convert new velocity from m/s back to km/h
const newVelInKmH = newVelInMs * (3600 / 1000); // m/s to km/h

// Calculate remaining fuel after 1 hour
const remainingFuel = calcRemainingFuel(fuel, fbr, time);

// Output results
console.log(`Corrected New Velocity: ${newVelInKmH.toFixed(2)} km/h`); // Expected: ~48880 km/h
console.log(`Corrected New Distance: ${newDistanceInKm.toFixed(2)} km`); // Expected: ~10000 km
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`); // Expected: ~3200 kg

// Error Handling: Check if units are used correctly
if (acc > 50) {
  throw new Error("Acceleration too high. Ensure the unit is in m/s^2.");
}
if (vel > 30000) {
  throw new Error("Velocity too high. Ensure the unit is in km/h.");
}






