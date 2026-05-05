import "./Countdown.css";

const CountdownDisplay = ({ timeLeft }) => {
  const timeUnits = [
    { value: timeLeft.weeks, label: "недель" },
    { value: timeLeft.days, label: "дней" },
    { value: timeLeft.hours, label: "часов" },
    { value: timeLeft.minutes, label: "минут" },
    { value: timeLeft.seconds, label: "секунд" },
  ];

  return (
    <div className="countdown-container">
      {timeUnits.map((unit, index) => (
        <div key={index} className="time-unit">
          <div className="value">{unit.value}</div>
          <div className="label">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownDisplay;
