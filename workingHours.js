{
  var taskStartTime = '2019-12-19 13:30:00.000';
  var taskEndTime = '2019-12-19 14:30:00.000';

  var openingTime = '2018-12-12 09:30:00.000';
  var closingTime = '2018-12-12 17:30:00.000';

  var currentTaskStartTime = new Date(taskStartTime).getTime();
  var currentTaskEndTime = new Date(taskEndTime).getTime();

  var pastZeroBenchmark = new Date(openingTime).setHours(0, 0, 0, 0);
  var pastOpeningTimeTS = new Date(openingTime).getTime();
  var pastClosingTimeTS = new Date(closingTime).getTime();

  var pastZeroToOpeningOffset = pastOpeningTimeTS - pastZeroBenchmark;
  var pastZeroToClosingOffset = pastClosingTimeTS - pastZeroBenchmark;

  var currentZeroBenchmark = new Date(taskStartTime).setHours(0, 0, 0, 0);
  var currentDayStartTime = new Date(currentZeroBenchmark).getTime() + pastZeroToOpeningOffset;
  var currentDayEndTime = new Date(currentZeroBenchmark).getTime() + pastZeroToClosingOffset;
  
  if (currentDayStartTime > currentTaskStartTime) {
   currentPreDayStartTime = currentDayStartTime - 86400000;
   currentPreDayEndTime = currentDayEndTime - 86400000;
   if (currentPreDayStartTime <= currentTaskStartTime && currentTaskStartTime >= currentPreDayEndTime) {
    currentDayStartTime = currentPreDayStartTime;
    currentDayEndTime = currentPreDayEndTime;
   }
  } else if (currentTaskStartTime > currentDayEndTime) {
   currentPostDayStartTime = currentDayStartTime + 86400000;
   currentPostDayEndTime = currentDayEndTime + 86400000;
   if (currentPostDayStartTime <= currentTaskStartTime && currentTaskStartTime >= currentPostDayEndTime) {
    currentDayStartTime = currentPostDayStartTime;
    currentDayEndTime = currentPostDayEndTime;
   }
  } else {
   currentDayStartTime = currentDayStartTime;
   currentDayEndTime = currentDayEndTime;
   if (currentDayStartTime <= currentTaskStartTime && currentTaskStartTime >= currentDayEndTime) {
    currentDayStartTime = currentDayStartTime;
    currentDayEndTime = currentDayEndTime;
   }
  }

  var workOpen = new Date(currentDayStartTime).toISOString().replace('T', ' ').replace('Z', '');
  var workClose = new Date(currentDayEndTime).toISOString().replace('T', ' ').replace('Z', '');
  var taskStart = new Date(currentTaskStartTime).toISOString().replace('T', ' ').replace('Z', '');
  var taskEnd = new Date(currentTaskEndTime).toISOString().replace('T', ' ').replace('Z', '');
  
  if ((currentDayStartTime <= currentTaskStartTime && currentDayStartTime <= currentDayEndTime) && (currentDayEndTime >= currentTaskStartTime && currentDayEndTime >= currentTaskEndTime)) {
   console.log('true');
  } else {
   console.log('false');
  }

 }