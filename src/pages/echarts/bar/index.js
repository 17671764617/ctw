import React from 'react'
import { Card } from 'antd'
// 导入主题
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
// 按需导入
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'

export default class Bar extends React.Component {

	componentWillMount() {
		echarts.registerTheme('CTW', echartTheme)
	}

	getOption1 = () => {
		let option = {
			title: {
				text: '用户骑行订单'
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
				data:['周一','周二','周三','周四','周五','周六','周日']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: '订单量',
					type: 'bar',
					data: [1000,2000,1500,3000,2000,1200,800]
				}
			]
		}

		return option
	}

	getOption2 = () => {
		let option = {
			title: {
				text: '用户骑行订单'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['ofo', '摩拜', '小蓝']
			},
			xAxis: {
				data:['周一','周二','周三','周四','周五','周六','周日']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'ofo',
					type: 'bar',
					data: [1000,2000,1500,3300,1800,1200,800]
				},
				{
					name: '摩拜',
					type: 'bar',
					data: [800,3000,1800,1100,2200,1300,500]
				},
				{
					name: '小蓝',
					type: 'bar',
					data: [300,1200,1000,3200,3400,1200,800]
				}
			]
		}

		return option
	}

	render() {
		return (
			<div>
				<Card title="柱形图表之一" style={{marginBottom:10}}>
					<ReactEcharts option={this.getOption1()} theme="CTW" style={{height: 500}} />
				</Card>

				<Card title="柱形图表之二">
					<ReactEcharts option={this.getOption2()} theme="CTW" style={{height: 500}} />
				</Card>
			</div>
		)
	}
}