/**
 * Sum each elements of an array.
 * @param {Array} arr Array.
 * @param {boolean} flag If true consider also each elements in string format.
 * @returns results.
 */
function sumInArray(arr, flag) {

    if(Array.isArray(arr)) {

        let result = 0

        const arrFiltered = arr.filter(el => el !== null && el !== undefined)

        if(flag === undefined) {
            
            arrFiltered.map(el => {
                
                if(!isNaN(el)) {
                    
                    result = Math.round(100 * (result + parseFloat(el))) / 100

                } else {
                    
                    result += 0
                }
            })
        }

        if(flag === true) {

            arrFiltered.map(el => {

                if(!isNaN(el) && typeof el !== 'string') {

                    result = Math.round(100 * (result + parseFloat(el))) / 100
                }
            })
        }
        
        if(flag !== true && flag !== undefined) {

            return new Error('Error: Second parameter is not valid, select [boolean=true|undefined]')
        }

        return result
    }

    return 0
}

const res = sumInArray([undefined, 1,'10',1])
const res2 = sumInArray([undefined, 1,'10',1], true)

console.log(res) // Output expected 12
console.log(res2) // Output expected 2