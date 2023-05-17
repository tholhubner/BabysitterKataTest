const {
	getRateForTime,
	calculateRateForHours,
	calculateFinalRate
} = require("../babysitter")

test("Should return a rate of 12 with time of 6pm", () => {
	expect(getRateForTime(18, 21)).toBe(12)
})

test("Should return a rate of 8 with time of 11pm", () => {
	expect(getRateForTime(23, 21)).toBe(8)
})

test("Should return rate of 16 with time of 1am", () => {
	expect(getRateForTime(1, 21)).toBe(16)
})

test("Should return rate of 16 with time of 2am and no bedtime provided", () => {
	expect(getRateForTime(2)).toBe(16)
})

test("Should get rate of 64 for 4 hours of work at 16/hour", () => {
	expect(calculateRateForHours(16, 12, 16)).toBe(64)
})

test("Should get final rate of 136 for start of 5pm, end of 4am, bedtime of 9pm", () => {
	expect(calculateFinalRate(17, 4, 21)).toBe(136)
})