export const weatherUnitConverter = (value, scale) => {
  let temperature = value;
  if (value == "") return "";

  if (scale == "C") {
    temperature = ((value - 32) * 5) / 9;
  }

  return temperature.toFixed(1);
};
