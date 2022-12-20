window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
        axisX:{
            gridColor: "transparent",
            tickColor: "transparent",
            lineColor: "transparent",

        },
        axisY:{
            gridColor: "transparent",
            tickColor: "transparent",
            lineColor: "transparent",
            labelFontColor: "transparent",
         },
		data: [              
		{
            type: "spline",
            lineColor: "#6154F0",
            backgroundColor:"transparent",
            markerType: "none",
            lineThickness: 1,
			dataPoints: [
				{ label: "apple",  y: 20  },
				{ label: "orange", y: 50  },
				{ label: "banana", y: 30  },
				{ label: "mango",  y: 20  },
				{ label: "grape",  y: 25  },
                { label: "grape",  y: 40  },
			]
		}
		]
	});
	chart.render();
}
