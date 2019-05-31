import React from 'react'
import { Card, Tabs, message, Icon } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane

export default class Tab extends React.Component {

	newTabIndex = 0

	componentWillMount() {
		const panes = [
			{
				title: 'Tab1',
				content: 'Tab1',
				key: '1',
			},
			{
				title: 'Tab2',
				content: 'Tab2',
				key: '2',
			},
			{
				title: 'Tab3',
				content: 'Tab3',
				key: '3',
			},
		]

		this.setState({
			activeKey: panes[0].key,
			panes,
		})
 	}

 	onChange = (activeKey) => {
 		this.setState({
 			activeKey,
 		})
 	}



	onEdit = (targetKey, action) => {
	  this[action](targetKey);
	};

	add = () => {
	  const panes = this.state.panes;
	  const activeKey = `newTab${this.newTabIndex++}`;
	  panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
	  this.setState({ panes, activeKey });
	};

	remove = targetKey => {
	  let activeKey = this.state.activeKey;
	  let lastIndex;
	  this.state.panes.forEach((pane, i) => {
	    if (pane.key === targetKey) {
	      lastIndex = i - 1;
	    }
	  });
	  const panes = this.state.panes.filter(pane => pane.key !== targetKey);
	  if (panes.length && activeKey === targetKey) {
	    if (lastIndex >= 0) {
	      activeKey = panes[lastIndex].key;
	    } else {
	      activeKey = panes[0].key;
	    }
	  }
	  this.setState({ panes, activeKey });
	};



	callback = (key) => {
		message.info('Tab ' + key)
	}

	render() {
		return (
			<div>
				<Card title="Tag基础页签" className="card-wrap">
					<Tabs defaultActiveKey="1" onChange={this.callback}>
						<TabPane tab="Tab1" key="1">Tab1</TabPane>
						<TabPane tab="Tab2" key="2">Tab2</TabPane>
						<TabPane tab="Tab3" key="3" disabled>Tab3</TabPane>
					</Tabs>
				</Card>

				<Card title="Tag图标页签" className="card-wrap">
					<Tabs defaultActiveKey="1" onChange={this.callback}>
						<TabPane tab={<span><Icon type="plus" />添加</span>} key="1">添加</TabPane>
						<TabPane tab={<span><Icon type="edit" />编辑</span>} key="2">编辑</TabPane>
						<TabPane tab={<span><Icon type="delete" />删除</span>} key="3">删除</TabPane>
					</Tabs>
				</Card>

				<Card title="增加删除模式" className="card-wrap">
					<Tabs 
						type="editable-card"
						onChange={this.onChange}
						activeKey={this.state.activeKey}
						onEdit={this.onEdit}
						>
						{
							this.state.panes.map((panel)=>{
								return (
									<TabPane 
										tab={<span><Icon type="plus" />{panel.title}</span>} 
										key={panel.key}
										>
										{panel.content}
									</TabPane>
								)
							})
						}
					</Tabs>
				</Card>
			</div>
		);
	}
}