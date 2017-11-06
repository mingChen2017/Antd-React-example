import React, { Component } from 'react';
import { Card, Col, Row  } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Dragger from 'react-dragger-r'
//视图数据层   model
let dataArray = [
    {
        title: '亲密性',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
        //这里的写法还不够纯净，作为model层应该只存放数据而不包括html语句，我个人认为合理的做法是把这部分数据设置成一个数组，在ViewMode层再遍历后转成html
            <div>
                <p>&bull;纵向间距</p>
                <p>&bull;横向间距关系</p>
            </div>
    },
    {
        title: '对齐',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;文案类对齐</p>
                <p>&bull;表单类对齐</p>
                <p>&bull;数字类对齐</p>
            </div>
    },
//。。。这里并没有写全

];
//视图逻辑层 View Model
class DesignTenet extends React.Component{
    constructor(props)
    {
        super(props);
    }
    showData;
    getChildren = () => {
        {console.error("fsfdds")}
        //map()方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。每个元素都是回调函数的结果。
        this.showData=dataArray.map((item, i) => {
            return(
                <Dragger >
                    <QueueAnim>
                        <Col span={6} key={i}>
                            <Card title={dataArray[i].title} extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200}}>
                                {dataArray[i].content}
                            </Card>
                        </Col>
                    </QueueAnim>
                </Dragger>
            )

        })
    }


    render() {
        return (

            <div style={{ padding: 24, minHeight: 720 }}>
                {this.getChildren()}
                <Row gutter={48}>
                    {this.showData}
                </Row>
            </div>
        )
    }
}
export default DesignTenet;