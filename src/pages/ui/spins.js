import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'

export default class Spins extends React.Component {

	render() {
		const icon = <Icon type="loading" />

		return (
			<div>
				<Card title="Spin 基本用法" className="card-wrap">
					<Spin className="spin" size="small" />
					<Spin className="spin" />
					<Spin className="spin" size="large" />
					<Spin className="spin" indicator={icon} size="large" />
				</Card>

				<Card title="内容遮盖" className="card-wrap">
					<Alert
						message="React"
						description="React 学习"
						type="info"
					/>
					<Spin>
					 	<Alert
						message="React"
						description="React 学习"
						type="warning"
					/>
					</Spin>

					<Spin tip="加载中...">
					 	<Alert
						message="React"
						description="React 学习"
						type="warning"
					/>
					</Spin>
				</Card>
			</div>
		);
	}
}