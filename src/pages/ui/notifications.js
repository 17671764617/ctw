import React from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

export default class Notifications extends React.Component {

	openNotification = () => {
		notification.config({
			placement: 'topRight',
		})

		notification.open({
			message: 'React',
			description: '用于构建用户界面的 JavaScript 库',
			duration: 3,
		})
	}

	openNotificationWithIcon = (type, placement) => {
		if (placement) {
			notification.config({
				placement: placement,
			})
		} else {
			notification.config({
				placement: 'topRight',
			})
		}

		notification[type]({
			message: 'React',
			description: '用于构建用户界面的 JavaScript 库',
			duration: 3,
		})
	}

	render() {
		return (
			<div>
				<Card title="通知提醒框" className="card-wrap">
					<Button type="primary" onClick={this.openNotification}>普通提醒</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('info')}>Info 提醒</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('warning')}>Warning 提醒</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('success')}>Success 提醒</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('error')}>Error 提醒</Button>
				</Card>

				<Card title="提醒框方向控制" className="card-wrap">  
					<Button type="primary" onClick={() => this.openNotificationWithIcon('info', 'topLeft')}>Info 提醒(左上)</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('warning', 'topRight')}>Warning 提醒(右上)</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('success', 'bottomLeft')}>Success 提醒(左下)</Button>
					<Button type="primary" onClick={() => this.openNotificationWithIcon('error', 'bottomRight')}>Error 提醒(右下)</Button>
				</Card>
			</div>
		);
	}
}