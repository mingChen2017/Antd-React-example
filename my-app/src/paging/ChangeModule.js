import React from 'react';
import { Steps, Button, message } from 'antd';
import './changeModule.css';
import QueueAnim from 'rc-queue-anim';

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: '通过Antd提供的react组件的Api修改，该方法需要Antd官方把这部分属性暴露成api',
}, {
    title: 'Second',
    content: '通过在外层加class修改，该方法有一定局限性，不能灵活的修改部件',
}, {
    title: 'Last',
    content: '通过chrome审查元素后，找一个比较大的父级通过加global限定',
}];

class ChangeModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <QueueAnim
                component="div"
                type="alpha"
                duration={3000}
            >
                <div className="change-module" key={"1"}>
                    <div className="steps-title">
                        <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                    </div>
                    <div className="steps-content">
                        <p style={{fontSize:'16px',color:'#fff'}}> {steps[this.state.current].content}</p>
                    </div>
                    <div className="steps-action">
                        {
                            this.state.current < steps.length - 1
                            &&
                            <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                            this.state.current === steps.length - 1
                            &&
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                        }
                        {
                            this.state.current > 0
                            &&
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        }
                    </div>
                </div>
            </QueueAnim>
        );
    }
}

export default ChangeModule;