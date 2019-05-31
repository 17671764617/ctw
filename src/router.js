import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App.js'
import Login from './pages/login'
import Admin from './pages/admin/admin.js'
import Home from './pages/home'
import Buttons from './pages/ui/buttons.js'
import Modals from './pages/ui/modals.js'
import Spins from './pages/ui/spins.js'
import Notifications from './pages/ui/notifications.js'
import Messages from './pages/ui/messages.js'
import Tab from './pages/ui/tabs.js'
import Gallery from './pages/ui/gallery.js'
import Carousel from './pages/ui/carousel.js'
import LoginForm from './pages/form/login.js'
import RegistForm from './pages/form/register.js'
import BasicTable from './pages/table/basic.js'
import HighTable from './pages/table/high.js'
import Order from './pages/order'
import Common from './common'
import User from './pages/user/index.js'
import BikeMap from './pages/map/bikeMap.js'
import RichText from './pages/rich/index.js'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import NoMatch from './pages/noMatch/noMatch.js'

export default class IRouter extends React.Component {
	render() {
		return(
			<HashRouter>
				<App>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/common" render={() =>
                            <Common/>
                        }
                     />
					<Route path="/" render={() =>
						<Admin>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/home" component={Home} />
								<Route path="/ui/buttons" component={Buttons} />
								<Route path="/ui/modals" component={Modals} />
								<Route path="/ui/spins" component={Spins} />
								<Route path="/ui/notification" component={Notifications} />
								<Route path="/ui/messages" component={Messages} />
								<Route path="/ui/tabs" component={Tab} />
								<Route path="/ui/gallery" component={Gallery} />
								<Route path="/ui/carousel" component={Carousel} />
								<Route path="/form/login" component={LoginForm} />
								<Route path="/form/reg" component={RegistForm} />
								<Route path="/table/basic" component={BasicTable} />
								<Route path="/table/high" component={HighTable} />
								<Route path="/order" component={Order} />
								<Route path="/user" component={User} />
								<Route path="/bikeMap" component={BikeMap} />
								<Route path="/rich" component={RichText} />
								<Route path="/charts/bar" component={Bar} />
								<Route path="/charts/pie" component={Pie} />
								<Route path="/charts/line" component={Line} />
								<Route component={NoMatch} />
							</Switch>
						</Admin>
					}/>
					</Switch>
				</App>
			</HashRouter>
		)
	}
}