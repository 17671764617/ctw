import React from 'react'
import { Card, Form, Input, Icon, Button, InputNumber, message, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload } from 'antd'
import moment from 'moment'
import './register.less'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select
const TextArea = Input.TextArea

class FormRegister extends React.Component {

	state = {
		loading: false
	}

	handleSubmit = () => {
		let userInfo = this.props.form.getFieldsValue()
		console.log(JSON.stringify(userInfo))
		message.success("注册成功，注册信息为：" + JSON.stringify(userInfo));
	}

	getBase64 = (img, callback) => {
	  const reader = new FileReader();
	  reader.addEventListener('load', () => callback(reader.result));
	  reader.readAsDataURL(img);
	}

	beforeUpload = (file) => {
		const isJPG = file.type === 'image/jpeg';
		if (!isJPG) {
		  message.error('You can only upload JPG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
		  message.error('Image must smaller than 2MB!');
		}
		return isJPG && isLt2M;
	}

	handleChange = info => {
	    if (info.file.status === 'uploading') {
	      this.setState({ loading: true });
	      return;
	    }
	    if (info.file.status === 'done') {
	      // Get this url from response in real world.
	      this.getBase64(info.file.originFileObj, imageUrl =>
	        this.setState({
	          imageUrl,
	          loading: false,
	        }),
	      );
	    }
  	}

	render() {
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {
			labelCol: {
				xs: 24,
				sm: 4,
			},
			wrapperCol: {
				xs: 24,
				sm: 12
			}
		}

		const offsetLayout = {
			wrapperCol: {
				xs: 24,
				sm: {
					span:12,
					offset:4
				}
			}
		}

		const uploadButton = (
	      	<div>
		        <Icon type={this.state.loading ? 'loading' : 'plus'} />
		        <div className="ant-upload-text">Upload</div>
	      	</div>
   		)

		return(
			<div>
				<Card title="注册表单">
					<Form>
						<FormItem label="用户名" {...formItemLayout}>
							{
								getFieldDecorator('userName',{
									rules: [
										{
											required: true,
											message: '用户名不能为空'

										}
									]
								})(
									<Input placeholder="请输入用户名" />
								)
							}
						</FormItem>

						<FormItem label="密码" {...formItemLayout}>
							{
								getFieldDecorator('password',{
									rules: [
										{
											required: true,
											message: '密码不能为空'

										}
									]
								})(
									<Input type="password" placeholder="请输入密码" />
								)
							}
						</FormItem>
						<FormItem label="性别" {...formItemLayout}>
							{
								getFieldDecorator('sex',{
									initialValue: '1'
								})(
									<RadioGroup>
										<Radio value="1">男</Radio>
										<Radio value="2">女</Radio>
									</RadioGroup>
								)
							}
						</FormItem>
						<FormItem label="年龄" {...formItemLayout}>
							{
								getFieldDecorator('age',{
									initialValue: '18'
								})(
									<InputNumber />
								)
							}
						</FormItem>
						<FormItem label="当前状态" {...formItemLayout}>
							{
								getFieldDecorator('state',{
									initialValue: '1'
								})(
									<Select>
										<Option value="1">钢铁直男</Option>
										<Option value="2">文弱书生</Option>
										<Option value="3">科技大佬</Option>
										<Option value="4">可乐肥宅</Option>
									</Select>
								)
							}
						</FormItem>
						<FormItem label="爱好" {...formItemLayout}>
							{
								getFieldDecorator('hobby',{
									initialValue: ['1','2','3']
								})(
									<Select mode="multiple">
										<Option value="1">游泳</Option>
										<Option value="2">跑步</Option>
										<Option value="3">篮球</Option>
										<Option value="4">足球</Option>
										<Option value="5">爬山</Option>
										<Option value="6">骑行</Option>
										<Option value="7">台球</Option>
										<Option value="8">卡牌</Option>
									</Select>
								)
							}
						</FormItem>

						<FormItem label="是否已婚" {...formItemLayout}>
							{
								getFieldDecorator('isMarried',{
									valuePropName: 'checked',
									initialValue: false,
								})(
									<Switch />
								)
							}
						</FormItem>

						<FormItem label="生日" {...formItemLayout}>
							{
								getFieldDecorator('birthday',{
									initialValue: moment('2019-05-30 12:13:14')
								})(
									<DatePicker
										showTime
										format="YYYY-MM-DD HH:mm:ss"
									/>
								)
							}
						</FormItem>

						<FormItem label="联系地址" {...formItemLayout}>
							{
								getFieldDecorator('address',{
									initialValue: '武汉市黄陂区木兰大道'
								})(
									<TextArea
										autosize={{minRows:2, maxRows:2}}
									/>
								)
							}
						</FormItem>

						<FormItem label="早起时间" {...formItemLayout}>
							{
								getFieldDecorator('time',{
								})(
									<TimePicker />
								)
							}
						</FormItem>

						<FormItem label="头像" {...formItemLayout}>
							{
								getFieldDecorator('userImg',{
								})(
									<Upload
										listType="picture-card"
										action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
										showUploadList={false}
										beforeUpload={this.beforeUpload}
										onChange={this.handleChange}
									>
										{this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : uploadButton}
									</Upload>
								)
							}
						</FormItem>

						<FormItem {...offsetLayout}>
							{
								getFieldDecorator('read',{
								})(
									<Checkbox>我已阅读过<a href="#">CTW协议</a></Checkbox>
								)
							}
						</FormItem>

						<FormItem {...offsetLayout}>
							<Button type="primary" onClick={this.handleSubmit}>注册</Button>
						</FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(FormRegister);