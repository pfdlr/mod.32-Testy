const formatDate = timeInSeconds => {
  let seconds = timeInSeconds % 60;
  let minutes = Math.floor((timeInSeconds / 60) % 60);
  let hours = Math.floor((timeInSeconds / 3600) % 3600);

  let time = (hours !== 0 ? `${hours}h ` : ``) + (minutes !== 0 ? `${minutes}m ` : ``) + (seconds !== 0 ? `${seconds}s` : ``);

  if (!timeInSeconds) {
    return `0s`;
  }
return time;
  
};

module.exports = formatDate;
