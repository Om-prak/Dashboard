



var sidebarOpen = false;
var sidebar = document.getElementById('sidebar')


function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive")
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive")
        sidebarOpen = false;
    }
}



<!-- ------------------------------chart ---------------------------------------------->
     // Data for the chart
    var options = {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 4
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'], // White text on bars
          fontSize: '14px',
          fontWeight: 'bold'
        }
      },
      xaxis: {
        categories: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        labels: {
          style: {
            colors: '#fff', // White text for X-axis
            fontSize: '14px'
          }
        }
      },
      yaxis: {
        title: {
          text: 'Values',
          style: {
            color: '#fff', // White text for Y-axis title
            fontSize: '14px'
          }
        },
        labels: {
          style: {
            colors: '#fff', // White text for Y-axis labels
            fontSize: '14px'
          }
        }
      },
      series: [{
        name: 'Data',
        data: [30, 40, 60, 90, 120],
      }],
      // Solid multiple colors for each bar
      colors: ['#FF5733', '#33FF57', '#FF33A6', '#3357FF', '#FF8F33'], // Different solid colors for each bar
      title: {
        text: 'Vertical Bar Chart with Multiple Solid Colors and White Text',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#fff'
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
    chart.render();


    <!-- ------------------------------------------area chart-------------------------------------------- -->

      var options = {
      series: [{
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
      }, {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
      }],
      chart: {
        height: 350,
        type: 'line', // Overall chart type is 'line' but we are mixing area and line types
      },
      stroke: {
        curve: 'smooth', // Smooth line for the line chart
        width: [5, 3]  // Line width for both series, Team A is thicker
      },
      fill: {
        type: 'solid', // Fill the area chart with solid color
        opacity: [0.35, 1], // Different opacity for the area chart and the line chart
      },
      labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10', 'Dec 11'],
      markers: {
        size: 0 // Hides the markers on the lines
      },
      yaxis: [
        {
          title: {
            text: 'Series A',
            style: {
              color: '#fff' // White text for the left Y-axis title
            }
          },
          labels: {
            style: {
              colors: '#fff' // White labels for the left Y-axis
            }
          }
        },
        {
          opposite: true, // Places the second y-axis on the opposite side
          title: {
            text: 'Series B',
            style: {
              color: '#fff' // White text for the right Y-axis title
            }
          },
          labels: {
            style: {
              colors: '#fff' // White labels for the right Y-axis
            }
          }
        }
      ],
      tooltip: {
        shared: true, // Shared tooltip for both series
        intersect: false,
        theme: 'dark', // Tooltip theme
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points"; // Display points in tooltips
            }
            return y;
          }
        },
        style: {
          fontSize: '12px',
          color: '#fff' // White text in the tooltip
        }
      },
      legend: {
        labels: {
          colors: '#fff' // White text for the legend labels (series names)
        }
      },
      colors: ['#FF5733', '#33FF57'], // Different colors for the two series
    };


        var chart = new ApexCharts(document.querySelector("#area-chart"), options);
        chart.render();
