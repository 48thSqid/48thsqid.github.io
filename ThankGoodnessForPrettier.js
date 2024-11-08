var temperatures = [];
var humidities = [];

function addData() {
    const temp = document.getElementById("temperature").value;
    const humidity = document.getElementById("humidity").value;
    if(humidity < 0 || humidity > 100){
        alert("Humidity Invalid")
        return
    }
    temperatures.push(temp);
    humidities.push(humidity);

    const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

    const newRow = tableBody.insertRow();

    const tempCell = newRow.insertCell(0);
    const humidityCell = newRow.insertCell(1);

    tempCell.textContent = temp;
    humidityCell.textContent = humidity;

    document.getElementById("temperature").value = "";
    document.getElementById("humidity").value = "";

    const trace1 = {
        x: Array.from({ length: temperatures.length }, (_, i) => i + 1),
        y: temperatures,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Temperature (°C)',
        line: { color: 'blue' },
        marker: { color: 'blue' },
    };

    const trace2 = {
        x: Array.from({ length: humidities.length }, (_, i) => i + 1),
        y: humidities,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Humidity (%)',
        line: { color: 'green' },
        marker: { color: 'green' },
    };

    const layout = {
        title: 'Temperature and Humidity Over Time',
        xaxis: { title: 'Data Point' },
        yaxis: { title: 'Value' },
        plot_bgcolor: '#f0f0f0',
        paper_bgcolor: '#f0f0f0',
    };

    const data = [trace1, trace2];

    Plotly.newPlot('temperatureGraph', data, layout);
}

function clearData() {
    temperatures = [];
    humidities = [];
    const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    const trace1 = {
        x: [],
        y: [],
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Temperature (°C)',
        line: { color: 'blue' },
        marker: { color: 'blue' },
    };

    const trace2 = {
        x: [],
        y: [],
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Humidity (%)',
        line: { color: 'green' },
        marker: { color: 'green' },
    };

    const layout = {
        title: 'Temperature and Humidity Over Time',
        xaxis: { title: 'Data Point' },
        yaxis: { title: 'Value' },
        plot_bgcolor: '#f0f0f0', 
        paper_bgcolor: '#f0f0f0', 
    };

    const data = [trace1, trace2];

    Plotly.newPlot('temperatureGraph', data, layout);
}
