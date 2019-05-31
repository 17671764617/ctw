import React from 'react'
import { Card, Table, Modal, message, Button, Badge } from 'antd'
import './table.less'
import axios from '../../axios/index.js'
import Utils from '../../utils/utils.js'
export default class High extends React.Component {

	state = {
		dataSource: []
	}

	params = {
		page: 1,
	}

	componentWillMount() {
		this.request()
	}

	// 动态获取 Mock 数据
	request = () => {
		axios.ajax({
			url: '/table/list',
			data: {
				params: {
					pages: this.params.page
				}
			}
		}).then((res) => {
			if(res.code === 0) {
				this.setState({
					dataSource: res.result.list,
				})
			}
		})
	}

	handleChange = (pagination, filters, sorter) => {
		this.setState({
			sortOrder: sorter.order
		})
	}

	handleDelete = (item) => {
		let id = item.id
		Modal.confirm({
			title: '确认',
			content: '您确认要删除此条数据么？',
			onOk: () => {
				message.success('删除成功')
				this.request()
			}
		})
	}

	render() {
		const columns1 = [
			{
				title: 'id',
				dataIndex: 'id',
				width: 80
			},
			{
				title: '用户名',
				dataIndex: 'userName',
				width: 80
			},
			{
				title: '性别',
				dataIndex: 'sex',
				width: 80,
				render(sex) {
					return sex === 1 ? '男' : '女'
				}
			},
			{
				title: '状态',
				dataIndex: 'state',
				width: 80,
				render(state) {
					let config = {
						"1": "钢铁直男",
						"2": "文弱书生",
						"3": "科技大佬",
						"4": "可乐肥宅",
					}
					return config[state]
				}
			},
			{
				title: '爱好',
				dataIndex: 'hobby',
				width: 80,
				render(hobby) {
					let config = {
						"1": "游泳",
						"2": "跑步",
						"3": "篮球",
						"4": "足球",
						"5": "爬山",
						"6": "骑行",
						"7": "台球",
						"8": "卡牌",
					}
					return config[hobby]
				}
			},
			{
				title: '生日',
				dataIndex: 'birthday',
				width: 80
			},
			{
				title: '地址',
				dataIndex: 'address',
				width: 80
			},
			{
				title: '早起时间',
				dataIndex: 'time',
				width: 80
			}
		]

		const columns2 = [
			{
				title: 'id',
				dataIndex: 'id',
				width: 80,
				fixed: 'left'
			},
			{
				title: '用户名',
				dataIndex: 'userName',
				width: 80,
				fixed: 'left'
			},
			{
				title: '性别',
				dataIndex: 'sex',
				width: 80,
				render(sex) {
					return sex === 1 ? '男' : '女'
				}
			},
			{
				title: '状态',
				dataIndex: 'state',
				width: 800,
				render(state) {
					let config = {
						"1": "钢铁直男",
						"2": "文弱书生",
						"3": "科技大佬",
						"4": "可乐肥宅",
					}
					return config[state]
				}
			},
			{
				title: '爱好',
				dataIndex: 'hobby',
				width: 800,
				render(hobby) {
					let config = {
						"1": "游泳",
						"2": "跑步",
						"3": "篮球",
						"4": "足球",
						"5": "爬山",
						"6": "骑行",
						"7": "台球",
						"8": "卡牌",
					}
					return config[hobby]
				}
			},
			{
				title: '生日',
				dataIndex: 'birthday',
				width: 80
			},
			{
				title: '地址',
				dataIndex: 'address',
				width: 180,
				fixed: "right"
			},
			{
				title: '早起时间',
				dataIndex: 'time',
				width: 80,
				fixed: "right"
			}
		]

		const columns3 = [
			{
				title: 'id',
				dataIndex: 'id',
				width: 80,
				sorter: (a, b) => {
					return a.id - b.id
				},
				sortOrder: this.state.sortOrder
			},
			{
				title: '用户名',
				dataIndex: 'userName',
				width: 80
			},
			{
				title: '性别',
				dataIndex: 'sex',
				width: 80,
				render(sex) {
					return sex === 1 ? '男' : '女'
				}
			},
			{
				title: '状态',
				dataIndex: 'state',
				width: 80,
				render(state) {
					let config = {
						"1": "钢铁直男",
						"2": "文弱书生",
						"3": "科技大佬",
						"4": "可乐肥宅",
					}
					return config[state]
				}
			},
			{
				title: '爱好',
				dataIndex: 'hobby',
				width: 80,
				render(hobby) {
					let config = {
						"1": "游泳",
						"2": "跑步",
						"3": "篮球",
						"4": "足球",
						"5": "爬山",
						"6": "骑行",
						"7": "台球",
						"8": "卡牌",
					}
					return config[hobby]
				}
			},
			{
				title: '生日',
				dataIndex: 'birthday',
				width: 80
			},
			{
				title: '地址',
				dataIndex: 'address',
				width: 80
			},
			{
				title: '早起时间',
				dataIndex: 'time',
				width: 80
			}
		]

		const columns4 = [
			{
				title: 'id',
				dataIndex: 'id',
			},
			{
				title: '用户名',
				dataIndex: 'userName',
			},
			{
				title: '性别',
				dataIndex: 'sex',
				render(sex) {
					return sex === 1 ? '男' : '女'
				}
			},
			{
				title: '状态',
				dataIndex: 'state',
				render(state) {
					let config = {
						"1": "钢铁直男",
						"2": "文弱书生",
						"3": "科技大佬",
						"4": "可乐肥宅",
					}
					return config[state]
				}
			},
			{
				title: '爱好',
				dataIndex: 'hobby',
				render(hobby) {
					let config = {
						"1": <Badge status="success" text="游泳" />,
						"2": <Badge status="error" text="跑步" />,
						"3": <Badge status="default" text="篮球" />,
						"4": <Badge status="warning" text="足球" />,
						"5": "爬山",
						"6": "骑行",
						"7": "台球",
						"8": "卡牌",
					}
					return config[hobby]
				}
			},
			{
				title: '生日',
				dataIndex: 'birthday',
			},
			{
				title: '地址',
				dataIndex: 'address',
			},
			{
				title: '操作',
				render: (text, item) => {
					return <Button onClick={() => this.handleDelete(item)}>删除</Button>
				}
			}
		]

		return(
			<div>
				<Card title="头部固定" className="card-wrap">
					<Table
						bordered
						columns={columns1}
						dataSource={this.state.dataSource}
						pagination={false}
						scroll={{y:240}}
					>
					</Table>
				</Card>

				<Card title="左侧固定" className="card-wrap">
					<Table
						bordered
						columns={columns2}
						dataSource={this.state.dataSource}
						pagination={false}
						scroll={{x:2200}}
					>
					</Table>
				</Card>
				<Card title="排序" className="card-wrap">
					<Table
						bordered
						columns={columns3}
						dataSource={this.state.dataSource}
						pagination={false}
						onChange={this.handleChange}
					>
					</Table>
				</Card>

				<Card title="操作" className="card-wrap">
					<Table
						bordered
						columns={columns4}
						dataSource={this.state.dataSource}
						pagination={false}
					>
					</Table>
				</Card>
			</div>
		)
	}
}