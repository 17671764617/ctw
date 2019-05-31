import React from 'react'
import { Card, Table, Modal, message, Button } from 'antd'
import './table.less'
import axios from '../../axios/index.js'
import Utils from '../../utils/utils.js'
export default class Basic extends React.Component {

	state = {
		dataSource2: []
	}

	params = {
		page: 1,
	}

	componentWillMount() {
		const dataSource = [
			{
				key: '0',
				id: '0',
				userName: 'Jack',
				sex: '1',
				state: '1',
				hobby: '1',
				birthday: '1996-01-14',
				address: '湖北省武汉市黄陂区',
				time: '06:00'
			},
			{
				key: '1',
				id: '1',
				userName: 'Tom',
				sex: '1',
				state: '1',
				hobby: '1',
				birthday: '1996-01-14',
				address: '湖北省武汉市黄陂区',
				time: '06:00'
			},
			{
				key: '2',
				id: '2',
				userName: 'Kylo',
				sex: '1',
				state: '1',
				hobby: '1',
				birthday: '1996-01-14',
				address: '湖北省武汉市黄陂区',
				time: '06:00',
			},
		]

		this.setState({
			dataSource,
		})

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
					dataSource2: res.result.list,
					selectedRowKeys: [],
					selectedRowKeys1: [],
					pagination: Utils.pagination(res, (current) => {
						this.params.page = current;
						this.request()
					})
				})
			}
		})
	}

	onRowClick = (record, index) => {
		let selectKry = [index]
		Modal.info({
			title: "选中信息",
			content: `用户名：${record.userName}, 用户爱好：${record.hobby}`
		})
		this.setState({
			selectedRowKeys: selectKry,
			selectedItem: record
		})
	}

	// 多选删除操作
	handleDelete = () => {
		let rows = this.state.selectedRows
		let ids = []
		rows.map((item) => {
			ids.push(item.id)
		})
		Modal.confirm({
			title: "删除确认",
			content: `你确定删除这些数据么？ ${ids.join(',')}`,
			onOk:() => {
				message.success('删除成功')
				this.request()
			}
		})
	}

	render() {
		const columns = [
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
			},
			{
				title: '地址',
				dataIndex: 'address',
			},
			{
				title: '早起时间',
				dataIndex: 'time',
			}
		]

		const rowSelection = {
			type: 'radio',
			selectedRowKeys: this.state.selectedRowKeys
		}

		const rowCheckSelection = {
			type: 'checkbox',
			selectedRowKeys: this.state.selectedRowKeys1,
			onChange: (selectedRowKeys1, selectedRows) => {
				this.setState({
					selectedRowKeys1,
					selectedRows,
				})
			}
		}

		return(
			<div>
				<Card title="基础表格" className="card-wrap">
					<Table
						bordered
						columns={columns}
						dataSource={this.state.dataSource}
						pagination={false}
					>
					</Table>
				</Card>

				<Card title="动态数据渲染表格-Mock" className="card-wrap">
					<Table
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={false}
					>
					</Table>
				</Card>

				<Card title="单选" className="card-wrap">
					<Table
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={false}
						rowSelection={rowSelection}
						onRow={(record, index) => {
						    	return {
						      		onClick: () => {
						      			this.onRowClick(record, index);
						      		},
						    	}
							}
						}
					>
					</Table>
				</Card>

				<Card title="多选" className="card-wrap">
					<div style={{marginBottom:10}}>
						<Button onClick={this.handleDelete}>删除</Button>
					</div>
					<Table
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={false}
						rowSelection={rowCheckSelection}
					>
					</Table>
				</Card>

				<Card title="分页" className="card-wrap">
					<Table
						bordered
						columns={columns}
						dataSource={this.state.dataSource2}
						pagination={this.state.pagination}
					>
					</Table>
				</Card>

			</div>
		)
	}
}