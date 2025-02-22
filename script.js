const stocks = [
    {symbol: "AMD", price: 130.50, entry: 125, exit: 150, stopLoss: 115, return: 20, horizon: "Short-term", alert: "No"},
    {symbol: "INTC", price: 36.70, entry: 35, exit: 42, stopLoss: 32, return: 20, horizon: "Short-term", alert: "No"},
    {symbol: "NKE", price: 98.25, entry: 95, exit: 110, stopLoss: 90, return: 15.79, horizon: "Short-term", alert: "No"},
    {symbol: "MRNA", price: 85.60, entry: 80, exit: 100, stopLoss: 75, return: 25, horizon: "Short-term", alert: "No"},
    {symbol: "SKX", price: 48.50, entry: 45, exit: 55, stopLoss: 40, return: 22.22, horizon: "Long-term (<$100)", alert: "No"},
    {symbol: "DLR", price: 150.30, entry: 140, exit: 165, stopLoss: 130, return: 17.86, horizon: "Long-term (<$200)", alert: "No"}
];

function updateTable() {
    const table = document.getElementById("stockTable");
    stocks.forEach(stock => {
        const row = table.insertRow();
        row.innerHTML = `<td>${stock.symbol}</td>
                         <td>${stock.price}</td>
                         <td>${stock.entry}</td>
                         <td>${stock.exit}</td>
                         <td>${stock.return}%</td>
                         <td>${stock.stopLoss}</td>
                         <td>${stock.horizon}</td>
                         <td>${stock.alert}</td>`;
    });
}

function drawChart() {
    const ctx = document.getElementById("returnChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: stocks.map(stock => stock.symbol),
            datasets: [{
                label: "Expected Return (%)",
                data: stocks.map(stock => stock.return),
                backgroundColor: "blue"
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

window.onload = function() {
    updateTable();
    drawChart();
};
