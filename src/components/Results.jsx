import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ inputValues }) {
  const investResults = calculateInvestmentResults(inputValues);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investResults.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            inputValues.initialInvestment -
            yearData.annualInvestment * yearData.year;

          const investedCapital =
            inputValues.initialInvestment +
            yearData.annualInvestment * yearData.year;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
