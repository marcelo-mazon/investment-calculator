export default function UserInput({ inputValues, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            onChange={(e) => onInputChange("initialInvestment", e.target.value)}
            type="number"
            id="initial-investment"
            value={inputValues.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            onChange={(e) => onInputChange("annualInvestment", e.target.value)}
            type="number"
            id="annual-investment"
            value={inputValues.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            onChange={(e) => onInputChange("expectedReturn", e.target.value)}
            type="number"
            id="expected-return"
            value={inputValues.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            onChange={(e) => onInputChange("duration", e.target.value)}
            type="number"
            id="duration"
            value={inputValues.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
