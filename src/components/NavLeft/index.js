import React from 'react'
import './index.less'
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig.js'
import { Menu } from 'antd';
import { connect } from 'react-redux'
import { switchMenu } from '../../redux/action'

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class NavList extends React.Component {

	state = {
		currentKey: '',
	}

	handleClick = ({item, key}) => {
		const { dispatch } = this.props
		dispatch(switchMenu(item.props.title))

		this.setState({
			currentKey: key
		})
	}

	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig);
		let currentKey = window.location.hash.replace(/#|\?.*$/g, '')
		this.setState({
			menuTreeNode: menuTreeNode,
			currentKey
		});
	}

	// 菜单渲染
	renderMenu = (data) => {
		return data.map((item) => {
			if (item.children) {
				return (
					<SubMenu key={item.key} title={item.title}>
						{this.renderMenu(item.children)}
					</SubMenu>
				)
			}

			return (
				<MenuItem key={item.key} title={item.title}>
					<NavLink to={item.key}>{item.title}</NavLink>
				</MenuItem>
			)
		});
	}

	render() {
		return (
			<div className="nav-left">
				<div className="logo">
					<img src="/assets/logo.svg" alt="" />
					<h1>CTW</h1>
				</div>
				<Menu
					onClick={this.handleClick}
					selectedKeys={this.state.currentKey}
					theme={"dark"}
				>
				    { this.state.menuTreeNode }
				</Menu>
			</div>
		);
	}
}

export default connect()(NavList)