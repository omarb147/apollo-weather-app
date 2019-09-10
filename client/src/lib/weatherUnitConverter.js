export const weatherUnitConverter = (value, scale) => {
  let temperature;
  if (value == "" || value == undefined) return "";

  if (scale == "F") {
    temperature = ((value - 273.15) * 9) / 5 + 32;
  }

  if (scale == "C") {
    temperature = value - 273.15;
  }

  return temperature.toFixed(1);
};
