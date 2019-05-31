import React from 'react'
import { Card, Row, Col, Spin, Alert, Modal } from 'antd'
import './ui.less'
import Utils from '../../utils/utils.js'
// import axios from '../../axios'
const data = require('../../config/gallery.json')

export default class Gallery extends React.Component {

	state = {
		movies: data.subjects,
		visible: false,
	}

	componentWillMount() {

		// this.getImagesAPIData()
		const imgList = this.getImagesList()
		this.setState({
			imgList,
		})
	}

	// getImagesAPIData() {
	// 	axios.jsonp({
	// 		url: 'https://douban.uieee.com/v2/movie/in_theaters?count=25',
	// 	}).then((res) => {
	// 		if(!res.status || res.status === 'success') {
	// 			this.setState({
	// 				movies: data.subjects,
	// 			}, () => {
	// 				const imgList = this.getImagesList()
	// 				this.setState({
	// 					imgList,
	// 				})
	// 			});
	// 		}
	// 	})
	// }

	getImagesList() {
		const movieList = Utils.arrTrans(5, this.state.movies)

		return movieList.map((list) => list.map((item) => 
			<Card
				style={{marginBottom:16}}
				cover={<img src={item.images.small.replace('https://', 'https://images.weserv.nl/?url=')} alt=""
					onClick={() => this.showMovieDetil(item)} />}
				key={item.id}
			>
				<Card.Meta 
					title="热映电影"
					description={item.title}
				/>
			</Card>
		))
	}

	showMovieDetil = (item) => {
		this.setState({
			currentMovie: item,
			visible: true
		})
	}

	renderMovieDetil = () => {
		if (this.state.currentMovie) {
			return (
				<Modal
					width={600}
					height={500}
					title="热映电影"
					visible={this.state.visible}
					onCancel={() => {
						this.setState({
							visible: false
						})
					}}
					footer={null}
				>
					<img style={{display:"inline-block"}} src={this.state.currentMovie.images.small.replace('https://', 'https://images.weserv.nl/?url=')} alt="" />
					<p style={{display:"inline-block", margin:"0 0 0 25px", width:250, verticalAlign:"top", fontSize:18}}>
					电影名称：{this.state.currentMovie.title}<br/><br/>
				 	上映年份：{this.state.currentMovie.year}<br/><br/>
				 	电影类型：{this.state.currentMovie.genres.join('，')}<br/><br/>
				 	豆瓣评分：{this.state.currentMovie.rating.average}</p>
				</Modal>
			)
		} else {
			return <div></div>
		}
	} 

	render() {
		if (this.state.imgList){
			return (
				<div>
					<Row gutter={16}>
						<Col md={4}>{this.state.imgList[0]}</Col>
						<Col md={5}>{this.state.imgList[1]}</Col>
						<Col md={6}>{this.state.imgList[2]}</Col>
						<Col md={5}>{this.state.imgList[3]}</Col>
						<Col md={4}>{this.state.imgList[4]}</Col>
					</Row>
					{this.renderMovieDetil()}
				</div>
			)
		} else {
			return (
				<div>
					<Spin tip="Loading...">
		    			<Alert
		      				message="正在请求电影列表"
		      				description="精彩内容，马上呈现..."
		      				type="info"
		    			/>
		  			</Spin>
				</div>
			)
		}
	}
}