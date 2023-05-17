var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Min and Max Settings'
        }
      },
      scales: {
        y: {
          min: 10,
          max: 50,
        }
      }
    },
    data: {
        labels: [
            '1','2','3','4','5'
        ],
        datasets: [{
            label: 'max',
            data: [max1, max2, max3, max4, max5],
            backgroundColor:'rgba(255, 0, 0, 1)',
            borderColor:'rgba(255, 0, 0, 1)'
        },
        {
            label: 'min',
            data: [min1, min2, min3, min4, min5],
            backgroundColor: 'rgba(0, 99, 255, 1)',
            borderColor:'rgba(0, 99, 255, 1)'
        },
        {
            label: 'avg',
            data: [avg1, avg2, avg3, avg4, avg5],
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderColor:'rgba(0, 0, 0, 1)'
        },
        ]
    },
    yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
});