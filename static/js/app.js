// 1. Use the D3 library to read in samples.json

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs 
//    found in that individual.
// 			- Use sample_values as the values for the bar chart.
// 			- Use otu_ids as the labels for the bar chart.
// 			- Use otu_labels as the hovertext for the chart.

// 3. Create a bubble chart that displays each sample.
//      - Use otu_ids for the x values.
//			- Use sample_values for the y values.
//			- Use sample_values for the marker size.
//			- Use otu_ids for the marker colors.
//			- Use otu_labels for the text values.

// 4. Display the sample metadata, i.e., an individual's demographic information.
// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
// 6. Update all of the plots any time that a new sample is selected.


// Populate the dropdown with names
var dropDown = d3.select("#selDataset");

d3.json("samples.json").then((samplesData) => {
    
    var names = samplesData.names.map(name_id => name_id);
    first_ID = names[0];

    names.forEach(function(name) {
       var dropDownOption = dropDown.append("option");

        dropDownOption.attr("value", name)
        .text(name);
      });
});


function optionChanged(id){
    

d3.json("samples.json").then((samplesData) => {
var panel_body = d3.select(".panel-body");
Object.entries(samplesData.metadata).forEach(function([KEY, VALUE]) {
  if (VALUE.id == id){
      panel_body.html("ID: " + VALUE.id + "<br>Ethnicity: " + VALUE.ethnicity + "<br>Gender: " + VALUE.gender +
                    "<br>Age: " + VALUE.age + "<br>Location: " + VALUE.location + "<br>BBtype: " + VALUE.bbtype + "<br>WFreq: " + VALUE.wfreq);
      };
 });


/*
      
        var trace1 = {
            type: 'bar',
            x: ,
            y: ,
            text: ,
            orientation: 'h'
        };
        
        var bar_data = [trace1]
        
        var bar_layout = {
            title: 'Top 10 OTUs'
        }
        Plotly.newPlot('bar', bar_data, bar_layout);


        
//bubble stuff
   var trace2 = {
     x: otu_id ,
     y: sample_value,
     mode: 'markers',
     text: otu_labels,
     marker: {
     size: sample_values,
     color: otu_ids,
       }
   };

   var bubblelayout = {
     title: `Bubble Chart`
   }

   var bubbledata = [trace2]
   Plotly.newPlot('bubble', bubbledata, bubblelayout);

*/
    });
};	
optionChanged(940);
