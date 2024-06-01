import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";

export default function LineReactEchart() {
  const lineChart = {
    title: {
      text: "Line Chart",
      subtext: "Data Anual",
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
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
        data: [320, 432, 401, 434, 690, 630, 820, 420, 532, 401, 434, 690],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.87)",
          width: 4,
        },
      },
    ],
  };
  return (
    <div>
      <ReactEcharts
        option={lineChart}
        style={{ height: "400px", width: "1010px", border: "2px solid white" }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}
