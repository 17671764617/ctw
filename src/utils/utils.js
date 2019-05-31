import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;

export default {
	formateDate(time) {
		if(!time) return ''
		let date = new Date(time)
		return date.getFullYear() + '-' +
			   (date.getMonth()+1) + '-' +
			   date.getDate() + ' ' +
			   date.getHours() + ':' +
			   date.getMinutes() + ':' +
			   date.getSeconds();
	},

	arrTrans(num,arr) { // 一维数组转换为二维数组,num 每个子数组里的元素个数, arr 需要转换的一维数组
	  const iconsArr = []; // 声明数组
	  arr.forEach((item, index) => {
	    const page = Math.floor(index / num); // 计算该元素为第几个素组内
	    if (!iconsArr[page]) { // 判断是否存在
	      iconsArr[page] = [];
	    }
	    iconsArr[page].push(item);
	  });
	  return iconsArr;
	},

	pagination(data, callback) {
		return {
			onChange:(current) => {
				callback(current)
			},
			current: data.result.page,
			pageSize: data.result.page_size,
			total: data.result.total,
			showTotal:() => {
				return `共${data.result.total}条`
			},
			showQuickJumper: true
		}
	},

	getOptionList(data){
        if(!data){
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.map((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    },
    
     /**
     * ETable 行点击通用函数
     * @param {*选中行的索引} selectedRowKeys
     * @param {*选中行对象} selectedItem
     */
    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    },
}