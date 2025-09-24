// crop.js

const dataset = [
    {N:90,P:42,K:43,temp:20.87,hum:82,pH:6.50,rain:202.93,label:'rice'},
    {N:85,P:58,K:41,temp:21.77,hum:80.31,pH:7.03,rain:226.65,label:'rice'},
    {N:92,P:60,K:23,temp:18.66,hum:71.51,pH:5.72,rain:69.93,label:'maize'},
    {N:76,P:51,K:18,temp:26.16,hum:71.96,pH:6.24,rain:79.84,label:'maize'},
    {N:40,P:72,K:77,temp:17.02,hum:16.98,pH:7.48,rain:88.55,label:'chickpea'},
    {N:23,P:72,K:84,temp:19.02,hum:17.13,pH:6.92,rain:79.92,label:'chickpea'},
    {N:22,P:71,K:17,temp:18.15,hum:19.38,pH:5.50,rain:107.69,label:'kidneybeans'},
    {N:31,P:79,K:25,temp:23.18,hum:22.31,pH:5.90,rain:63.38,label:'kidneybeans'},
    {N:34,P:59,K:18,temp:23.38,hum:21.98,pH:5.74,rain:87.66,label:'kidneybeans'},
    {N:20,P:74,K:16,temp:36.04,hum:43.61,pH:4.75,rain:159.89,label:'pigeonpeas'},
    {N:19,P:57,K:23,temp:23.67,hum:47.28,pH:7.34,rain:141.12,label:'pigeonpeas'},
    {N:3,P:60,K:19,temp:25.74,hum:40.71,pH:4.82,rain:100.77,label:'pigeonpeas'}
];

let loopInterval;

function predictCrop() {
    clearInterval(loopInterval);

    const N = parseFloat(document.getElementById('nitrogen').value) || 0;
    const P = parseFloat(document.getElementById('phosphorus').value) || 0;
    const K = parseFloat(document.getElementById('potassium').value) || 0;
    const temp = parseFloat(document.getElementById('temperature').value) || 0;
    const hum = parseFloat(document.getElementById('humidity').value) || 0;
    const pH = parseFloat(document.getElementById('ph').value) || 0;
    const rain = parseFloat(document.getElementById('rainfall').value) || 0;

    const distances = dataset.map(d => ({
        label: d.label,
        dist: Math.sqrt(
            Math.pow(N-d.N,2) + Math.pow(P-d.P,2) + Math.pow(K-d.K,2) +
            Math.pow(temp-d.temp,2) + Math.pow(hum-d.hum,2) + Math.pow(pH-d.pH,2) +
            Math.pow(rain-d.rain,2)
        )
    }));

    distances.sort((a,b) => a.dist - b.dist);

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Recommended Crop: ${distances[0].label}`; // show closest first

    // Loop through all crops continuously
    let i = 1; // start from second
    loopInterval = setInterval(() => {
        resultDiv.innerText = `Recommended Crop: ${distances[i].label}`;
        i = (i + 1) % distances.length;
    }, 1000);
}

