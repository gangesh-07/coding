function isSafe(nums) {
    let inc = true
    let dec = true

    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1]

        if (diff <= 0 || diff > 3) inc = false
        if (diff >= 0 || diff < -3) dec = false

        if (!inc && !dec) return false
    }

    return true
}

function countSafeReports(input) {
    return input
        .trim()
        .split("\n")
        .map((line) => line.split(" ").map(Number))
        .filter(isSafe).length
}

const testInput = [
    `7 6 4 2 1
    1 2 7 8 9
    9 7 6 2 1
    1 3 2 4 5
    8 6 4 4 1
    1 3 6 7 9
    7 6 5 4 3 2 1`,

    `1 2 3 4 5
    9 7 6 5 3
    1 2 6 7
    1 3 2 4 5
    8 6 4 4 1
    5 4 3 2 1
    1 4 7 10
    1 2 3 7
    5 7
    5
    3 6 5 7`,
    
    `3 2 1 2`,
]

for (const input of testInput) {
    console.log(countSafeReports(input))
}
