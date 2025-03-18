alert("Enter hour(0-23), minute(0-59), second(0-59): ");
let hour = Number(prompt());
let minute = Number(prompt());
let second = Number(prompt());
let time;

if((hour > 23 || hour < 0) || (minute < 0 || minute > 59) || (second < 0 || second > 59)) {
    alert("Invalid input");
} else {
    if(hour >= 12) {
        if(hour === 0) {
            hour = "00";
        } if(minute === 0) {
            minute = "00";
        } if(second === 0) {
            second = "00";
        }
        hour = hour - 12;
        time = "PM";
    } else {
        time = "AM";
    }
}
alert(`${hour}:${minute}:${second} ${time}`);