import React from 'react'
import './index.less'
import { Row, Col } from 'antd'
import Utils from '../../utils/utils.js'
import axios from '../../axios'
import { connect } from 'react-redux'

class Header extends React.Component {

	componentWillMount() {
		this.setState({
			userName:'原野鬼叔',
		})

		setInterval(() => {
			let sysTime = Utils.formateDate(new Date().getTime())
			this.setState({
				sysTime: sysTime,
			})
		}, 1000)

		this.getWeatherAPIData()
	}

	getWeatherAPIData() {
		axios.jsonp({
			url: 'https://www.tianqiapi.com/api/',
		}).then((res) => {
			if(!res.status || res.status === 'success') {
				let wea = res.data[0].wea;
				this.setState({
					wea: wea,
				});
			}
		})
	}

	render() {
		return (
			<div className="header">
				<Row className="header-top">
					<Col span={24}>
						<span>欢迎，{this.state.userName}</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="breadcrumb">
					<Col span={16} className="breadcrumb-title">
						{ this.props.menuName }
					</Col>
					<Col span={8} className="weather">
						<span className="date">{ this.state.sysTime }</span>
						<span className="weather-detail">{this.state.wea}</span>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		menuName: state.menuName
	}
}
export default connect(mapStateToProps)(Header)