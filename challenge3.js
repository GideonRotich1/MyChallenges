// Define the function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Define the constants for tax rates and deductions
    const NSSF_RATE = 0.06;
    const NHIF_RATE = 0.015;
    const PERSONAL_RELIEF = 2400;
    const INSURANCE_RELIEF = 5000;
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate NSSF deductions
    const nssfDeductions = Math.min(3600, grossSalary * NSSF_RATE);
  
    // Calculate NHIF deductions
    const nhifDeductions = Math.min(1700, grossSalary * NHIF_RATE);
  
    // Calculate taxable income
    const taxableIncome = grossSalary - nssfDeductions - nhifDeductions - PERSONAL_RELIEF - INSURANCE_RELIEF;
  
    // Calculate PAYE (tax)
    let paye = 0;
    if (taxableIncome > 0 && taxableIncome <= 24000) {
      paye = taxableIncome * 0.1;
    } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
      paye = 2400 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome > 32333 && taxableIncome <= 500000) {
      paye = 2400 + 2575 + (taxableIncome - 32333) * 0.3;
    } else if (taxableIncome > 500000 && taxableIncome <= 800000) {
      paye = 2400 + 2575 + 140869 + (taxableIncome - 500000) * 0.325;
    } else if (taxableIncome > 800000) {
      paye = 2400 + 2575 + 140869 + 97500 + (taxableIncome - 800000) * 0.35;
    }
  
    // Calculate net salary
    const netSalary = grossSalary - nssfDeductions - nhifDeductions - paye;
  
    // Return the results
    return {
      grossSalary: grossSalary,
      nssfDeductions: nssfDeductions,
      nhifDeductions: nhifDeductions,
      paye: paye,
      netSalary: netSalary
    };
  }
  
  // Call the function with sample values
  const result = calculateNetSalary(100000, 0);
  
  // Log the results to the console
  console.log(`Gross Salary: ${result.grossSalary}`);
  console.log(`NSSF Deductions: ${result.nssfDeductions}`);
  console.log(`NHIF Deductions: ${result.nhifDeductions}`);
  console.log(`PAYE: ${result.paye}`);
  console.log(`Net Salary: ${result.netSalary}`);
  