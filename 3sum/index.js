// This exercise was not accepted by leetcode as the: 	Time Limit Exceeded


/**
 * @param {number[]} nums
 * @return {number[][]}
 */



const arraySum = arr => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return arr.reduce(reducer)
}

// If 2 items in a triplet are identical to the another triplet, and the triplet always sum to 0. the third item must also be identical
const compareTripletByValues = (tripletA, tripletB) => {
    const [aFirstItem, aSecondItem] = tripletA
    const firstItemIndexInTripletB = tripletB.indexOf(aFirstItem)
    const bHasFirstItem = firstItemIndexInTripletB !== -1
    if (!bHasFirstItem) {
        return false
    }
    const bTripletWoAFirstItem = tripletB.slice(0, firstItemIndexInTripletB).concat(tripletB.slice(firstItemIndexInTripletB + 1))
    const bHasASecondItem = bTripletWoAFirstItem.includes(aSecondItem)
    return bHasFirstItem && bHasASecondItem
}

const hasTripletAlreadyBeenFound = (previouslyFoundValueTriplets, tripletMaybeExisting) => !!previouslyFoundValueTriplets.find(prevFoundTriplet => compareTripletByValues(prevFoundTriplet, tripletMaybeExisting))

const threeSum = function (nums) {
    const foundTripletValuesSumming0 = []
    const desiredTripletIndices = []

    const checkIndices = (i, j, y) => {
        const currentValues = [nums[i], nums[j], nums[y]]
        if (arraySum(currentValues) !== 0) {
            return
        }
        if (!hasTripletAlreadyBeenFound(foundTripletValuesSumming0, currentValues)) {
            foundTripletValuesSumming0.push(currentValues)
            const indicesAsArray = [i, j, y]
            desiredTripletIndices.push(indicesAsArray)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let y = j + 1; y < nums.length; y++) {
                checkIndices(i, j, y)
            }
        }
    }
    return foundTripletValuesSumming0
};

export default threeSum;