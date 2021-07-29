(function () {
	"use strict";
	

   function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    function createChart(id, type, options) {
      var data = {
        labels: ['"Almost Pumpers"', 'Multiple Daily Injections (MDI)', 'Insulin Pumps'],
        datasets: [
          {
            label: 'My First dataset',
            data: [2, 4, 3],
            backgroundColor: [
                '#1b85a0',
                '#276A7B',
                '#92afc3',
            ],
            borderWidth: 10,
            hoverBorderWidth:15,
            hoverBorderColor:'#fff',  
          }
        ]
      };

      new Chart(document.getElementById(id), {
        type: type,
        data: data,
        options: options
      });
    }

    ['pie'].forEach(function (type) {
      createChart(type + '-canvas1', type, {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        plugins: {
          labels: {
            render: 'label',
            fontSize: 18,
            fontStyle: 'bold',
            fontColor: '#fff',
            fontFamily: 'AvenirMedium',
              position: 'border',
              arc: true,
          }
        }
      });
    });
    
  


    new Chart(document.getElementById('bar-canvas3'), {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'My First dataset',
            data: [50445, 33655, 15900],
            backgroundColor: [
              '#FF6384',
              '#FF6384',
              '#FF6384'
            ]
          },
          {
            label: 'My Second dataset',
            data: [40445, 23655, 35900],
            backgroundColor: [
              '#36A2EB',
              '#36A2EB',
              '#36A2EB'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          labels: {
            render: 'value'
          }
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });  
    
	
}(jQuery));	