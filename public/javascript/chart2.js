const ctx2 = document.getElementById('doughnut');
const doughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Solar', 'Wind', 'Hydro', 'Geothermal'],
        datasets: [{
            label: 'Renewable energies',
            data: [4, 10, 16, 0.4],
            backgroundColor: [
                'rgba(144, 238, 144, 0.2)',
                'rgba(0, 128, 0, 0.2)',
                'rgba(173, 255, 47, 0.2)',
                'rgba(255 , 206 , 86 , 0.2)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

ctx2.onclick = function (e) {
    const activeElement = doughnutChart.getElementsAtEventForMode(e, 'nearest', { intersect: true });

    if (activeElement.length > 0) {
        const dataIndex = activeElement[0].index;

        switch (dataIndex) {
            case 0:
                window.location.href = 'https://en.wikipedia.org/wiki/Solar_power_in_India#:~:text=for%20rooftop%20solar%20projects.,the%20canal%20top%20solar%20power.';
                break;
            case 1:
                window.location.href = 'https://en.wikipedia.org/wiki/Wind_power_in_India';
                break;
            case 2:
                window.location.href = 'https://en.wikipedia.org/wiki/Wind_pohydro_energy_statswer_in_India';
                break;
            case 3:
                window.location.href = 'https://en.wikipedia.org/wiki/Geothermal_power';
                break;
            default:
                break;
        }
    }
};
