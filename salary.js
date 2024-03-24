function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const TAX_RATE = 0.3; // 30%
    const NHIF_RATE = 0.05; // 5%
    const NSSFDeductions = 200; // Flat rate of 200

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax
    const tax = grossSalary * TAX_RATE;

    // Calculate NHIF deductions
    const NHIFDeductions = grossSalary * NHIF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;

    return {
        grossSalary: grossSalary,
        tax: tax,
        NHIFDeductions: NHIFDeductions,
        NSSFDeductions: NSSFDeductions,
        netSalary: netSalary
    };
}

// Example usage
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits)) {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Tax:", salaryDetails.tax);
    console.log("NHIF Deductions:", salaryDetails.NHIFDeductions);
    console.log("NSSFDeductions:", salaryDetails.NSSFDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
