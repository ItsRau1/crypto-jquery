$(document).ready(function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        title:{
            text: "Statistic",
            horizontalAlign: 2,
            fontSize: 21,
            fontWeight: 500,
            fontColor: "#1A1A1A",
        },
        axisX:{
            gridColor: "transparent",
            tickColor: "transparent",
            lineColor: "transparent",
            labelFontColor: "#9E9E9E",
            labelFontSize: 12,
            labelFontFamily: "Inter",

        },
        axisY:{
            gridColor: "transparent",
            tickColor: "transparent",
            lineColor: "transparent",
            labelFontColor: "#9E9E9E",
            labelFontSize: 12,
            labelFontFamily: "Inter",
            prefix: "$"
         },
		data: [              
		{
            type: "spline",
            lineColor: "#6154F0",
            backgroundColor:"transparent",
            markerType: "none",
            lineThickness: 2,
			dataPoints: [
				{ label: "Jan",  y: 20  },
				{ label: "Mar", y: 50  },
				{ label: "May", y: 30  },
				{ label: "Jul",  y: 20  },
				{ label: "Sep",  y: 25  },
                { label: "Nov",  y: 40  },
			]
		}
		]
	});
	chart.render();

    var miniChart1 = new CanvasJS.Chart("miniChartContainer1", {
        axisX:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
        },
        axisY:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
            margin: 0,
         },
		data: [              
		{
            type: "spline",
            lineColor: "#6154F0",
            backgroundColor:"transparent",
            markerType: "none",
            lineThickness: 2,
			dataPoints: [
				{ x: 1,  y: 20  },
				{ x: 2, y: 50  },
				{ x: 3, y: 5  },
				{ x: 4,  y: 90  },
				{ x: 5,  y: 25  },
                { x: 6,  y: 40  },
			]
		}
		]
	});
	miniChart1.render();

    var miniChart2 = new CanvasJS.Chart("miniChartContainer2", {
        axisX:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
        },
        axisY:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
            margin: 0,
         },
		data: [              
		{
            type: "spline",
            lineColor: "#FABC1E",
            backgroundColor:"transparent",
            markerType: "none",
            lineThickness: 2,
			dataPoints: [
				{ x: 1,  y: 20  },
				{ x: 2, y: 50  },
				{ x: 3, y: 5  },
				{ x: 4,  y: 90  },
				{ x: 5,  y: 25  },
                { x: 6,  y: 40  },
			]
		}
		]
	});
	miniChart2.render();

    var miniChart3 = new CanvasJS.Chart("miniChartContainer3", {
        axisX:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
        },
        axisY:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
            margin: 0,
         },
		data: [              
		{
            type: "spline",
            lineColor: "#3855EC",
            backgroundColor:"transparent",
            markerType: "none",
            lineThickness: 2,
			dataPoints: [
				{ x: 1,  y: 20  },
				{ x: 2, y: 50  },
				{ x: 3, y: 5  },
				{ x: 4,  y: 90  },
				{ x: 5,  y: 25  },
                { x: 6,  y: 40  },
			]
		}
		]
	});
	miniChart3.render();

    var miniChart4 = new CanvasJS.Chart("miniChartContainer4", {
        axisX:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
        },
        axisY:{
            gridColor: "none",
            tickColor: "none",
            lineColor: "transparent",
            labelFontColor: "none",
            margin: 0,
         },
		data: [              
		{
            type: "spline",
            lineColor: "#1ECB4F",
            backgroundColor:"transparent",
            markerType: "none",
            lineThickness: 2,
			dataPoints: [
				{ x: 1,  y: 20  },
				{ x: 2, y: 50  },
				{ x: 3, y: 5  },
				{ x: 4,  y: 90  },
				{ x: 5,  y: 25  },
                { x: 6,  y: 40  },
			]
		}
		]
	});
	miniChart4.render();
})



