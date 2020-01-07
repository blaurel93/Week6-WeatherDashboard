const realTime = document.getElementById("theTime")

setInterval(() => {
    const now = moment()
    const theTime = now.format('GGGG MMMM dddd, Do, HH:mm:s ')
    // console.log(theTime);
    realTime.textContent = theTime;
}, 1000);