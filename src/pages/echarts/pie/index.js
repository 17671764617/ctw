import React from 'react'
import { Card } from 'antd'
// 导入主题
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
// 按需导入
import echarts from 'echarts/lib/echarts'
// 导入饼图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'

export default class Pie extends React.Component {

	componentWillMount() {
		echarts.registerTheme('CTW', echartTheme)
	}

	getOption1 = () => {
		let option = {
			title: {
				text: '用户骑行订单'
			},
			tooltip: {
				trigger: 'item',
				formatter : "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
        		right: 20,
        		top: 20,
        		bottom: 20,
				data: ['周一','周二','周三','周四','周五','周六','周日']
			},
			series: [
				{
					name: '订单量',
					type: 'pie',
					data: [
						{
							value: 700,
							name: '周一'
						},
						{
							value: 800,
							name: '周二'
						},
						{
							value: 1800,
							name: '周三'
						},
						{
							value: 1600,
							name: '周四'
						},
						{
							value: 4000,
							name: '周五'
						},
						{
							value: 2000,
							name: '周六'
						},
						{
							value: 3000,
							name: '周日'
						}
					]
				}
			]

		}

		return option
	}

	getOption2 = () => {
		let option = {
			title: {
				text: '用户骑行订单',
				left: 'center',
			},
			tooltip: {
				trigger: 'item',
				formatter : "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
        		right: 20,
        		top: 20,
        		bottom: 20,
				data: ['周一','周二','周三','周四','周五','周六','周日']
			},
			series: [
				{
					name: '订单量',
					type: 'pie',
					radius: ['50%', '70%'],
					center: ['50%', '50%'],
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
					data: [
						{
							value: 700,
							name: '周一'
						},
						{
							value: 800,
							name: '周二'
						},
						{
							value: 1800,
							name: '周三'
						},
						{
							value: 1600,
							name: '周四'
						},
						{
							value: 4000,
							name: '周五'
						},
						{
							value: 2000,
							name: '周六'
						},
						{
							value: 3000,
							name: '周日'
						}
					]
				}
			]

		}

		return option
	}

	getOption3 = () => {
		let option = {
			title: {
				text: '用户骑行订单',
				left: 'center',
			},
			tooltip: {
				trigger: 'item',
				formatter : "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
        		right: 20,
        		top: 20,
        		bottom: 20,
				data: ['周一','周二','周三','周四','周五','周六','周日']
			},
			series: [
				{
					name: '订单量',
					type: 'pie',
					roseType: 'radius',
					data: [
						{
							value: 700,
							name: '周一'
						},
						{
							value: 800,
							name: '周二'
						},
						{
							value: 1800,
							name: '周三'
						},
						{
							value: 1600,
							name: '周四'
						},
						{
							value: 4000,
							name: '周五'
						},
						{
							value: 2000,
							name: '周六'
						},
						{
							value: 3000,
							name: '周日'
						}
					].sort(function (a, b) { return a.value - b.value; }),
				}
			]

		}

		return option
	}

	render() {
		return (
			<div>
				<Card title="饼形图表之一" style={{marginBottom:10}}>
					<ReactEcharts option={this.getOption1()} theme="CTW" style={{height: 500}} />
				</Card>

				<Card title="饼形图表之二" style={{marginBottom:10}}>
					<ReactEcharts option={this.getOption2()} theme="CTW" style={{height: 500}} />
				</Card>

				<Card title="饼形图表之三">
					<ReactEcharts option={this.getOption3()} theme="CTW" style={{height: 500}} />
				</Card>
			</div>
		)
	}
}