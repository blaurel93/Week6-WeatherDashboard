const realTime = document.getElementById("theTime")

setInterval(() => {
    const now = moment()
    const theTime = now.format('MMMM dddd, Do, GGGG, HH:mm:s ')
    // console.log(theTime);
    realTime.textContent = theTime;
}, 1000);