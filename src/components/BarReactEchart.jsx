import React from "react";
import ReactEcharts from "echarts-for-react";

export default function BarReactEchart() {
  const barChart = {
    title: {
      text: "Bar Chart",
      subtext: "Data Week",
      left: "center",
      textStyle: {
        color: "rgba(255, 255, 255, 0.87)",
      },
      subtextStyle: {
        color: "rgba(255, 255, 255, 0.87)",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: { color: "rgba(255, 255, 255, 0.87)" },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "rgba(255, 255, 255, 0.87)" },
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 210, 130],
        type: "bar",
      },
    ],
  };
  return (
    <div>
      <ReactEcharts
        option={barChart}
        style={{ height: "400px", width: "600px", border: "2px solid white" }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}
