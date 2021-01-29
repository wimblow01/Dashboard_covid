  
   // Create the chart
   Highcharts.mapChart('container', {
     chart: {
       map: 'countries/fr/fr-all-all'
     },
   
     title: {
       text: 'Nombre de décès en hôpital par département'
     },
   
     mapNavigation: {
       enabled: true,
       buttonOptions: {
         verticalAlign: 'bottom'
       }
     },
   
     colorAxis: {
       stops: [
               [0.00, '#E0BDFF'],
               [0.05, '#B869FF'],
               [0.10, '#A037FF'],
               [0.25, '#8600FF'],
               [0.50, '#6900C8'],
               [0.75, '#39006D'],
               [0.95, '#17002C']
           ],
     },
   
     series: [{
       data: data,
       name: 'Nombre de décès',
       states: {
         hover: {
           color: 'white'
         }
       },
       dataLabels: {
         enabled: false,
         format: '{point.name}'
       }
     }, {
       name: 'Separators',
       type: 'mapline',
       data: Highcharts.geojson(Highcharts.maps['countries/fr/fr-all-all'], 'mapline'),
       color: 'silver',
       nullColor: 'silver',
       showInLegend: false,
       enableMouseTracking: false
     }]
   });
   

// //////// //
// Graphe 2 //
// //////// //

   Highcharts.chart('container_1', {
    chart: {
      type: 'line'
    },
    
    title: {
      text: 'Décès en hospitalisation en France'
    },
    xAxis: {
      categories: deces,
      color: '#7E4485',
  },
    yAxis: {
      
      title: {
        text: 'Nombre de décès'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: 'Décès en Hôpital',
      data : deces,
      color: '#7E4485',
    }]
  });


// //////// //
// Graphe 3 //
// //////// //

  Highcharts.chart('container_2', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Décès depuis le 18 mars 2020 en France'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
    },
    yAxis: {
        title: {
            text: 'Nombre de mort'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name}<b> : {point.y:,.0f}</b><br/>{point.x} jours après le début de l\'épidémie'
    },
    plotOptions: {
        area: {
            pointStart: 1,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        }
    },
    series: [{
        name: 'Décès totaux',
        data : somme,
        color: '#7E4485',

  }]
});