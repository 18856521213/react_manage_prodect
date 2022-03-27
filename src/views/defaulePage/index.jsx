import { useState, useEffect } from 'react'
import style from "./index.module.css"
import * as echarts from 'echarts/core';
import { GridComponent, TitleComponent, TooltipComponent, LegendComponent} from 'echarts/components';
import { LineChart, PieChart } from 'echarts/charts';
import { UniversalTransition, LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { Card } from "antd";
import { UsergroupAddOutlined, ScanOutlined, SmileOutlined, FrownOutlined, CommentOutlined } from '@ant-design/icons';
echarts.use([
  GridComponent, LineChart, CanvasRenderer, UniversalTransition, 
  TitleComponent, TooltipComponent, LegendComponent, PieChart, LabelLayout
]);

export default function DefaulePage() {
  const [contentList, setContentList] = useState([
    {
      icon: <UsergroupAddOutlined style={{fontSize: 50, color: "#73c0de"}} />,
      name: "添加用户",
      num: "9"
    },
    {
      icon: <ScanOutlined style={{fontSize: 50, color: "#5470c6"}} />,
      name: "扫码人数",
      num: "19"
    },
    {
      icon: <SmileOutlined style={{fontSize: 50, color: "#ee6666"}} />,
      name: "满意人数",
      num: "109"
    },
    {
      icon: <FrownOutlined style={{fontSize: 50, color: "#fac858"}} />,
      name: "不满意人数",
      num: "2"
    },
    {
      icon: <CommentOutlined style={{fontSize: 50, color: "#91cc75"}} />,
      name: "聊天人数",
      num: "489"
    }
  ]);

  useEffect(() => {
    let chartDom = document.getElementById('echartsone');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    option && myChart.setOption(option);
  }, [])
  useEffect(() => {
    let chartDom = document.getElementById('echartstwo');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }, [])
  return (
    <>
      <div className={style.contentBox}>
        {
          contentList.map((item, index) => {
            return (
              <Card style={{ width: '19%' }} key={index}>
                <div style={{display: "flex", justifyContent: "space-between", fontSize: 15}}>
                  <div>{item.icon}</div>
                  <div>
                    <div>{item.name}</div>
                    <div style={{textAlign: "right"}}>{item.num}人</div>
                  </div>
                </div>
              </Card>
            )
          })
        }
      </div>
      <div className={style.box}>
        <div id="echartsone" className={style.echartsone}></div>
        <div id="echartstwo" className={style.echartstwo}></div>
      </div>
    </>
  )
}
