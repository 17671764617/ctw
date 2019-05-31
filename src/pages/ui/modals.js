import React from 'react'
import { Card, Modal, Button } from 'antd'
import './ui.less'

export default class Modals extends React.Component {

	state = {
		showModal1: false,
		showModal2: false,
		showModal3: false,
		showModal4: false,
		showModal5: false,
	}

	handleOpen = (type) => {
		this.setState({
			[type]: true,
		})
	}

	handleConfirm = (type) => {
		Modal[type]({
			title: '确认？',
			content: '你确认么？',
			onOk() {},
			onCancel() {},
		})
	}

	render() {
		return (
			<div className="modal-wrap">
				<Card title="基础弹框" className="card-wrap">
					<Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
					<Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
					<Button type="primary" onClick={() => this.handleOpen('showModal3')}>水平居中 (使用自定义样式)</Button>
					<Button type="primary" onClick={() => this.handleOpen('showModal4')}>距离顶部20px (使用自定义样式)</Button>
				</Card>

				<Card title="信息确认弹框" className="card-wrap">
					<Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
					<Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
					<Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
					<Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
					<Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
				</Card>

				<Modal
					title="React"
					visible={this.state.showModal1}
					onCancel={() => {
						this.setState({
							showModal1: false,
						})
					}}
				>
					Climb the world.
				</Modal>

				<Modal
					title="React"
					visible={this.state.showModal2}
					okText="确认"
					cancelText="取消"
					onOk={() => {
						this.setState({
							showModal2: false,
						})
					}}
					onCancel={() => {
						this.setState({
							showModal2: false,
						})
					}}
				>
					Climb the world.
				</Modal>

				<Modal
					title="React"
					wrapClassName="vertical-center-modal"
					visible={this.state.showModal3}
					okText="确认"
					cancelText="取消"
					onOk={() => {
						this.setState({
							showModal3: false,
						})
					}}
					onCancel={() => {
						this.setState({
							showModal3: false,
						})
					}}
				>
					Climb the world.
				</Modal>

				<Modal
					title="React"
					style={{top: 20}}
					visible={this.state.showModal4}
					okText="确认"
					cancelText="取消"
					onOk={() => {
						this.setState({
							showModal4: false,
						})
					}}
					onCancel={() => {
						this.setState({
							showModal4: false,
						})
					}}
				>
					Climb the world.
				</Modal>
			</div>
		);
	}
}