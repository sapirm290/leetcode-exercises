import threeSum from '.'
import lodash from 'lodash'


describe('should pass tests', () => {

    const compareArray = (arrayA, arrayB) => {
        expect(arrayA.length).toBe(arrayB.length);

        arrayA.forEach(aItem => {
            const foundMatchedArray = !!arrayB.find(bItem => lodash.isEqual(bItem.sort(), aItem.sort()))
            expect(foundMatchedArray).toBe(true)
        })
    }

    test('simple one', () => {
        compareArray(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]])
    })

    test('empty ones', () => {
        compareArray(threeSum([0]), [])
        compareArray(threeSum([]), [])
    })

    test('complex one', () => {
        compareArray(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]), [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]])

    })
})

