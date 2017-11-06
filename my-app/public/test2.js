import React, { Component } from 'react';
import { Card, Col, Row  } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Dragger from 'react-dragger-r'

class DesignTenet extends React.Component{
    constructor(props)
    {
        super(props);
    }


    render() {
        return (

            <div style={{ padding: 24, minHeight: 720 }}>

                <Row gutter={48}>

                    <Dragger >
                        <QueueAnim>
                            <Col span={6} key="1">

                                <Card title="亲密性" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200}}>
                                    <p>&bull;纵向间距</p>
                                    <p>&bull;横向间距关系</p>
                                </Card>

                            </Col>
                        </QueueAnim>
                    </Dragger>

                    <Dragger >
                        <QueueAnim>
                            <Col span={6} key="2">

                                <Card title="对齐" extra={<a href="https://ant.design/docs/spec/alignment-cn">more</a>} style={{ width: 350,height: 200 }}>
                                    <p>&bull;文案类对齐</p>
                                    <p>&bull;表单类对齐</p>
                                    <p>&bull;数字类对齐</p>
                                </Card>

                            </Col>
                        </QueueAnim>
                    </Dragger>
                    <Dragger >
                        <QueueAnim>
                            <Col span={6} key="3">
                                <Card title="对比" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200 }}>
                                    <p>&bull;主次关系对比</p>
                                    <p>&bull;总分关系对比</p>
                                    <p>&bull;状态关系对比</p>
                                </Card>
                            </Col>
                        </QueueAnim>
                    </Dragger>
                    <Dragger >
                        <QueueAnim>
                            <Col span={6} key="4">
                                <Card title="重复" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200 }}>
                                    <p>&bull;重复元素</p>
                                </Card>
                            </Col>
                        </QueueAnim>
                    </Dragger>

                </Row>
                <br></br>
                <Row gutter={48}>
                    <QueueAnim>
                        <Col span={6} key="1">
                            <Card title="直截了当" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200}}>
                                <p>&bull;页内编辑</p>
                                <p>&bull;利用拖放</p>
                            </Card>
                        </Col>
                        <Col span={6} key="2">
                            <Card title="足不出户" extra={<a href="https://ant.design/docs/spec/alignment-cn">more</a>} style={{ width: 350,height: 200 }}>
                                <p>&bull;覆盖层</p>
                                <p>&bull;嵌入层</p>
                                <p>&bull;虚拟页面</p>
                                <p>&bull;流程处理</p>
                            </Card>
                        </Col>
                        <Col span={6} key="3">
                            <Card title="简化交互" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200 }}>
                                <p>&bull;实时可见工具</p>
                                <p>&bull;悬停即现工具</p>
                                <p>&bull;开关显示工具</p>
                                <p>&bull;交互中的工具</p>
                                <p>&bull;可视区域 ≠ 可点击区域</p>
                            </Card>
                        </Col>
                        <Col span={6} key="4">
                            <Card title="提供邀请" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200 }}>
                                <p>&bull;静态邀请</p>
                                <p>&bull;动态邀请</p>
                            </Card>
                        </Col>
                    </QueueAnim>
                </Row>
                <br></br>
                <Row gutter={48}>
                    <QueueAnim>
                        <Col span={6} key="1">
                            <Card title="巧用过渡" extra={<a href="https://ant.design/docs/spec/proximity-cn">more</a>} style={{ width: 350,height: 200}}>
                                <p>&bull;在视图变化时保持上下文</p>
                                <p>&bull;解释刚刚发生了什么</p>
                                <p>&bull;改善感知性能</p>
                                <p>&bull;自然运动</p>
                            </Card>
                        </Col>
                        <Col span={6} key="2">
                            <Card title="即时反应" extra={<a href="https://ant.design/docs/spec/alignment-cn">more</a>} style={{ width: 350,height: 200 }}>
                                <p>&bull;查询模式</p>
                                <p>&bull;反馈模式</p>
                            </Card>
                        </Col>
                    </QueueAnim>
                </Row>

            </div>
        )
    }
}
export default DesignTenet;