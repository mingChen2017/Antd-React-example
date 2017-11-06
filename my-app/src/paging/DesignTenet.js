import React from 'react';
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
    {
        title: '对比',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;主次关系对比</p>
                <p>&bull;总分关系对比</p>
                <p>&bull;状态关系对比</p>
            </div>
    },
    {
        title: '重复',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;重复元素</p>
            </div>
    },
    {
        title: '直截了当',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;页内编辑</p>
                <p>&bull;利用拖放</p>
            </div>
    },
    {
        title: '足不出户',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;覆盖层</p>
                <p>&bull;嵌入层</p>
                <p>&bull;虚拟页面</p>
                <p>&bull;流程处理</p>
            </div>
    },
    {
        title: '简化交互',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;实时可见工具</p>
                <p>&bull;悬停即现工具</p>
                <p>&bull;开关显示工具</p>
                <p>&bull;交互中的工具</p>
                <p>&bull;可视区域 ≠ 可点击区域</p>
            </div>
    },
    {
        title: '提供邀请',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;静态邀请</p>
                <p>&bull;动态邀请</p>
            </div>
    },
    {
        title: '巧用过渡',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;在视图变化时保持上下文</p>
                <p>&bull;解释刚刚发生了什么</p>
                <p>&bull;改善感知性能</p>
                <p>&bull;自然运动</p>
            </div>
    },{
        title: '即时反应',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        content:
            <div>
                <p>&bull;查询模式</p>
                <p>&bull;反馈模式</p>
            </div>
    },


];
//视图逻辑层
class DesignTenet extends React.Component{
    getChildren = () => {
        return dataArray.map((item, i) => {
            return(
                <Dragger  key={i}>
                    <QueueAnim>
                        <Col span={6} key={i} style={{ width: 380,height: 230}}>
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
                <Row gutter={48}>
                    {this.getChildren()}
                </Row>
        )
    }
}
export default DesignTenet;