import "./IncomeBar.css";

interface IIncomeBarProps {
  amount: number;
  spent: number;
}

const IncomeBar: React.FunctionComponent<IIncomeBarProps> = ({
  amount,
  spent,
}) => {
  const width = Math.ceil((spent / amount) * 100);
  const backgroundColor = width < 75 ? "green" : width < 90 ? "yellow" : "red";
  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${width}%`, backgroundColor }}
        ></div>
      </div>
      <span>
        ${spent} / ${amount}
      </span>
    </>
  );
};

export default IncomeBar;
