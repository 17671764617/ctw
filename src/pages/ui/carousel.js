import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.less'

export default class Carousels extends React.Component {
	render() {
		return(
			<div>
				<Card title="文字背景轮播" className="card-wrap">
					<Carousel autoplay effect="fade">
					    <div><h3>React</h3></div>
					    <div><h3>Vue</h3></div>
					    <div><h3>Angular</h3></div>
					</Carousel>
				</Card>

				<Card title="图片背景轮播" className="card-wrap slider-wrap">
					<Carousel autoplay>
					    <div>
					    	<img src="https://images.weserv.nl/?url=pic4.zhimg.com/v2-559b2f4526626329b2b2f9c9e8b5adef_r.jpg" alt="" />
					    </div>
					    <div>
					    	<img src="https://images.weserv.nl/?url=pic4.zhimg.com/v2-26e3ff8a795bd84ec55c20cfd8de7e7e_r.jpg" alt="" />
					    </div>
					    <div>
					    	<img src="https://images.weserv.nl/?url=pic4.zhimg.com/v2-c867abd246634c4c13c0290b696144b5_r.jpg" alt="" />
					    </div>
					</Carousel>
				</Card>
			</div>
		)
	}
}