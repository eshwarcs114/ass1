// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (typeof mass === "number" and typeof height === "number" and mass>0 and height>0){
        var bmi = mass/(height * height) 
        return bmi
    } else {
        return 'INVALID INPUT'
    }
}

module.exports = BMICalculator;
