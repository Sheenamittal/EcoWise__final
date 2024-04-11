const ctx4 = document.getElementById('polararea');

  const polarArea=new Chart(ctx4, {
    type: 'polarArea',
    data: {
      labels: ['Renewables' , 'Nuclear' ,'Fossil Fuels' ],
      datasets: [{
        label: 'Energy Mix',
        data: [20,10,70],
        backgroundColor: [
            'rgba(144, 238, 144, 0.2)',
            'rgba(0, 128, 0, 0.2)',
            'rgba(173, 255, 47, 0.2)',
          ],
          borderColor: [
            'rgba(144, 238, 144, 1)',
            'rgba(0, 128, 0, 1)',
            'rgba(173, 255, 47, 1)',
          ],
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        tooltips: {
            mode: 'index',
            intersect: false,
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  ctx.onclick = function(e) {
    const activeElement = barChart.getElementsAtEventForMode(e, 'nearest', { intersect: true });

    if (activeElement.length > 0) {
        const dataIndex = activeElement[0].index;

        
        barChart.data.datasets[0].backgroundColor[dataIndex] = 'rgba(255, 0, 0, 0.2)';
        barChart.update();

      
        if (dataIndex === 0) {
            window.location.href = 'https://www.who.int/health-topics/air-pollution#tab=tab_1';
        } else if (dataIndex === 1) {
            window.location.href = 'https://www.who.int/news-room/fact-sheets/detail/drinking-water';
        } else if (dataIndex === 2) {
            window.location.href = 'https://www.fao.org/documents/card/en?details=cb4827en';
        }
    }
};
