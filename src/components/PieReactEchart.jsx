import React from "react";
import ReactEcharts from "echarts-for-react";

export default function PieReactEchart() {
  const pieChart = {
    title: {
      text: "Pie Chart",
      subtext: "Data Monthly",
      left: "center",
      textStyle: {
        color: "rgba(255, 255, 255, 0.87)",
      },
      subtextStyle: {
        color: "rgba(255, 255, 255, 0.87)",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}</br>{c}<br/> {d}%",
      textStyle: { fontWeight: "bold" },
      padding: 10,
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: { color: "rgba(255, 255, 255, 0.87)" },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        label: {
          position: "outside",
          alingTo: "edge",
          color: "rgba(255, 255, 255, 0.87)",
          minTurnAngle: 60,
        },
        data: [
          { value: 1048, name: "A" },
          { value: 735, name: "B" },
          { value: 580, name: "C" },
          { value: 484, name: "D" },
          { value: 300, name: "E" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactEcharts
        option={pieChart}
        style={{ height: "400px", width: "400px", border: "2px solid white" }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}
