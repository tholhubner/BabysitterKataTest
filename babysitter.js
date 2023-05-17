/** 
	Babysitter Kata

	Background
	----------
	This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward:

	The babysitter 
	- starts no earlier than 5:00PM
	- leaves no later than 4:00AM
	- gets paid $12/hour from start-time to bedtime
	- gets paid $8/hour from bedtime to midnight
	- gets paid $16/hour from midnight to end of job
	- gets paid for full hours (no fractional hours)


	Feature:
	As a babysitter
	In order to get paid for 1 night of work
	I want to calculate my nightly charge
*/

// As a babysitter, I would be using this system to make the most money possible
// Arriving at 5pm, leaving at 4am
// Baby is going to bed no earlier than 9pm (4 hours after arrival)

const arrival = 17
const departure = 4
const bedtime = 21

// Gets the hourly rate from the time provided,
// bedtime optional, defaults to 9pm
const getRateForTime = (time, bedtime=21) => {
	if (time >= 17 && time < bedtime) return 12
	else if (time >= bedtime && time < 24) return 8
	else if (time <= 4) return 16
}

// Gets the pay for rate and hours provided
// end time is optional, defaults to null
const calculateRateForHours = (rate, start, end=null) => {
	let hours = start
	if (end) hours = end - start
	return hours * rate
}

// Calculates the overall rate for times provided
const calculateFinalRate = (arrival, departure, bedtime) => {
	const r1 = calculateRateForHours(getRateForTime(arrival, bedtime), arrival, bedtime)
	const r2 = calculateRateForHours(getRateForTime(bedtime, bedtime), bedtime, 24)
	const r3 = calculateRateForHours(getRateForTime(departure, bedtime), departure)

	return r1 + r2 + r3
}

const finalRate = calculateFinalRate(arrival, departure, bedtime)
console.log(finalRate)

module.exports = {
	getRateForTime,
	calculateRateForHours,
	calculateFinalRate
}