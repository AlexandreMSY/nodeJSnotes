const double = (number) => {
    return number * 2
}

const percentage = (number, percent) => {
    return (number / 100) * percent
} 

module.exports.double = double
module.exports.percentage = percentage