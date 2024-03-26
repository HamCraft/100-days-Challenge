function averageScore(...scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++)
        sum += scores[i];
    return sum / scores.length;
}
console.log(averageScore(54, 80, 90));
export {};
