const myChart = document.querySelector(".skills-frontend .skills-chart .canvas");
const ctx = myChart.getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 400, 400);

gradient.addColorStop(0, '#ff00002f');
gradient.addColorStop(1, '#ffff00df');



Chart.defaults.global.defaultFontColor = "#ffffffff";
Chart.defaults.global.defaultFontColor = "#ffffffff";
Chart.defaults.global.responsive = true;



let radarChart = new Chart(myChart,{
    type:"radar",
    data:{
    labels:["JAVASCRIPT","CSS","Sketch","Photoshop","HTML"],
    datasets:[{
        label:"Mehdi",
        fill:true,
        backgroundColor: gradient,
        // "#ffaa002f"
        borderColor:"#ffaa00",
        pointBorderColor: "#ffaa00",
        pointBackgroundColor:"#ffaa00",
        pointBorderWidth:1,
        pointHoverRadius:6,
        data:[70,85,80,70,89]
    }],
    },
    options:{
        legend:{
            display: false,
            },
        scale:{
            gridLines:{
                color:"#ffffff3f",
                circular:false,
                lineWidth:1                

            },
            angleLines: {
                color:"#ffffff1f"
            },
            ticks: {
                display:false,
                backdropColor: "rgba(0, 0, 0, 0)",
                suggestedMin: 40,
                suggestedMax: 100
            },
            label:{
                fontColor:"#ff0000"
            }
        }
    }
});