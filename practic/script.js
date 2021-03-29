
let day = [
    ['school', 6],
    ['food', 1],
    ['driving', 2],
    ['free time', 8],
    ['sleeping', 7],
];


day.splice(3, 0 ,['study', 2]);
day[4][1] -=2;
day.splice(4, 0,['programming', 1]);
day[6][1] -=1;



for(i in day){
    let percent = Math.round(day[i][1]/24*100);
    day[i][2] = percent+"%";
}

for (let i = 0; i < activities.length; i++){
    for(let j = 0; j < activities.length; j++){
        console.log(`[` + i `,` + j + `] = ` + activities[i][j]);
    }
}

console.table(day);