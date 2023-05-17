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
            data: [10, 30, 50, 20, 25],
            backgroundColor:'rgba(255, 0, 0, 1)',
            borderColor:'rgba(255, 0, 0, 1)'
        },
        {
            label: 'min',
            data: [30, 33, 22, 19, 11],
            backgroundColor: 'rgba(0, 99, 255, 1)',
            borderColor:'rgba(0, 99, 255, 1)'
        },
        {
            label: 'avg',
            data: [30, 30, 30, 30, 30],
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