document.addEventListener("DOMContentLoaded", function () {
    // Gráfico de linha para Uso de CPU
    const ctxCPU = document.getElementById('cpuChart').getContext("2d");
    new Chart(ctxCPU, {
      type: 'line',
      data: {
        labels: ['5min', '4min', '3min', '2min', '1min'],
        datasets: [{
          label: 'Uso de CPU (%)',
          data: [60, 62, 65, 67, 70], // 5 valores
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // Gráfico de barras para Tráfego de Rede
    const ctxNetwork = document.getElementById('networkChart').getContext("2d");
    new Chart(ctxNetwork, {
      type: 'bar',
      data: {
        labels: ['5min', '4min', '3min', '2min', '1min'],
        datasets: [{
          label: 'Tráfego de Rede (MB/s)',
          data: [10, 20, 15, 25, 30], // 5 valores
          backgroundColor: 'rgba(153, 102, 255, 0.6)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  });