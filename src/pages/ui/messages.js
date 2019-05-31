import React from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'

export default class Messages extends React.Component {

	handleMessage = (type) => {
		message[type]('React 是用于构建用户界面的 JavaScript 库', 3)
	}

	render() {
		return (
			<div>
				<Card title="全局Message" className="card-wrap">
					<Button type="primary" onClick={() => this.handleMessage('info')}>Info 信息</Button>
					<Button type="primary" onClick={() => this.handleMessage('warning')}>Warning 信息</Button>
					<Button type="primary" onClick={() => this.handleMessage('success')}>Success 信息</Button>
					<Button type="primary" onClick={() => this.handleMessage('error')}>Error 信息</Button>
					<Button type="primary" onClick={() => this.handleMessage('loading')}>Loading 信息</Button>
				</Card>
			</div>
		);
	}
}