// Trace1 for the Greek Data
let trace1 = {
    x: data.map(god => god.pair),
    y: data.map(god => god.greekSearchResults),
    text: data.map(god => god.greekName),
    name: "Greek",
    type: "bar"
}

// Trace 2 for the Roman Data
let trace2 = {
    x: data.map((god) => god.pair),
    y: data.map((god) => god.romanSearchResults),
    text: data.map(god => god.romanName),
    name: "Roman",
    type: "bar"
}

// Combining both traces
let data1 = [trace1, trace2];

// Apply the group barmode to the layout
let layout = {
    barmode: "group",
    title: "Greek vs Roman Search Results",
    xaxis: {title: "gods"},
    yaxis: {title: "total searches"}
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data1, layout);