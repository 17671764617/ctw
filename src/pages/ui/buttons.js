import React from 'react'
import { Card, Button, Icon, Radio } from 'antd'
import './ui.less'
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

export default class Buttons extends React.Component {

	state = {
		loading: false,
		iconLoading: false,
		size: 'default',
	}

	handleEnterLoading = () => {
		this.setState({
			loading: true,
		})
	}

	handleIconLoading = () => {
		this.setState({
			iconLoading: true,
		})
	}

	handleCloseLoading = () => {
		this.setState({
			loading: false,
			iconLoading: false,
		})
	}

	handleSizeChange = (e) => {
    	this.setState({
    		size: e.target.value,
    	});
  	}

	render() {
		return (
			<div className="button-wrap">
				<Card title="基础按钮" className="card-wrap">
					<Button type="primary">主按钮</Button>
					<Button>副按钮</Button>
					<Button type="dashed">虚线按钮</Button>
					<Button type="danger">警告按钮</Button>
					<Button disabled>禁用按钮</Button>
				</Card>
				<Card title="图形按钮" className="card-wrap">
					<Button icon="plus">创建</Button>
					<Button icon="edit">编辑</Button>
					<Button icon="delete">删除</Button>
					<Button shape="circle" icon="search"></Button>
					<Button icon="search">搜索</Button>
					<Button icon="download">下载</Button>
				</Card>
				<Card title="Loading 按钮" className="card-wrap">
					<Button loading={this.state.loading} onClick={ this.handleEnterLoading }>点击加载</Button>
					<Button shape="circle" loading={this.state.iconLoading} onClick={ this.handleIconLoading }></Button>
					<Button type="primary" onClick={ this.handleCloseLoading }>响应后关闭加载效果</Button>
				</Card>
				<Card title="按钮组" className="card-wrap">
					<ButtonGroup>
						<Button type="primary"><Icon type="left" />返回</Button>
						<Button type="primary">前进<Icon type="right" /></Button>
					</ButtonGroup>
				</Card>
				<Card title="按钮尺寸" className="card-wrap">
					<RadioGroup value={this.state.size} onChange={this.handleSizeChange}>
						<Radio value="small">小</Radio>
						<Radio value="default">中(默认)</Radio>
						<Radio value="large">大</Radio>
					</RadioGroup>
					<Button type="primary" size={this.state.size}>主按钮</Button>
					<Button size={this.state.size}>副按钮</Button>
					<Button type="dashed" size={this.state.size}>虚线按钮</Button>
					<Button type="danger" size={this.state.size}>警告按钮</Button>
					<Button disabled size={this.state.size}>禁用按钮</Button>
				</Card>
			</div>
		);
	}
}