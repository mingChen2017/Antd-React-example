import React from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import './designRule.css'


const Element = BannerAnim.Element;
//存放内容
//存放页面颜色
let dataArray = [
    {
        background: '#f46e65',
        content: <div>
            <p>	&bull;色彩应与产品定位相匹配，且符合用户心理认知</p>
            <p>	&bull;视觉层次应清晰分明，为重要行动点或关键信息定义一个主色，并建立视觉连续性</p>
            <p>	&bull;遵守 WCAG 2.0 的 标准，保证足够的对比度，让色彩更容易被视障碍（色盲）用户识别</p>
        </div>,
        title: '色彩'
    },
    {
        background: '#3dbd7d',
        content: <div>
            <p>	&bull;简单的图形语言以及高辨识度。清晰、直观的图标更能明确指代含义便于识别记忆</p>
            <p>	&bull;保持图标之间一致的风格和表现方式。界面中的所有图标都应该在细节设计、透视和笔画权重上保持一致</p>
        </div>,
        title: '图标',
    },
    {
        background: '#49a9ee',

        content:<div>
            <p>	&bull;合理的使用不同的字重、字号和颜色来强调界面中最重要的信息</p>
            <p>	&bull;尽可能的使用单种字体，混合使用多种字体会让界面看起来零散和草率</p>
            <p>	&bull;遵循 WCAG 2.0 标准，字体在使用时与背景颜色的对比值满足无障碍阅读的最低标准</p>
        </div>,
        title: '字体',
    },
    {
        background: '#f7629e',
        content: <div>
            <p>	&bull;从用户角度出发</p>
            <p>	&bull;表述一致</p>
            <p>	&bull;重要的信息放在显著位置</p>
            <p>	&bull;专业、精准、完整</p>
            <p>	&bull;精简、友好、正面</p>
        </div>,
        title: '文案',
    },
    {
        background: '#f78e3d',
        content:<div>
            <p>	&bull;明确用户在此场景中完成的主要任务和需获取的决策信息</p>
            <p>	&bull;明确决策信息和操作的优先级及内容特点，选择合理布局</p>
        </div>,
        title: '布局',
    },
    {
        background: '#948aec',
        content:<div>
            <p>	&bull;尽可能提供标识、上下文线索，避免用户迷路</p>
            <p>	&bull;保持导航样式和行为一致或者减少导航数量，降低用户学习成本</p>
            <p>	&bull;尽可能减少页面间的跳转（例如：一个常见任务需要多个页面跳转时，请减少至一到两次），让用户移动距离保持简短</p>
        </div>,
        title: '导航',
    },
    {
        background: '#ffce3d',
        content: <div>
            <p>	&bull;为初级用户／偶尔访问的用户提供简单易懂的文案作为『标签（Label） 』；为领域专家提供专业术语作为『标签（Label） 』。当需要用户提供敏感信息时，通过『暗提示』来说明系统为什么要这么做，例如：需要获取身份证号码、手机号码时</p>
            <p>	&bull;让用户能在上下文中获取信息，帮助他完成输入。使用『良好的默认值』、『结构化的格式』、『暗提示』、『输入提醒』等方式，避免让用户在空白中猜测输入</p>
        </div>,
        title: '数据录入',
    },
    {
        background: '#3db8c1',
        content:<div>
            <p>	&bull;依据信息的重要等级、操作频率和关联程度来编排展示的顺序</p>
            <p>	&bull;注意极端情况下的引导。如数据信息过长，内容为空的初始化状态等</p>
        </div>,
        title: '数据展示',
    },
    {
        background: '#d9d9d9',
        content:<div>
            <p>	&bull;为用户在各个阶段提供必要、积极、即时的反馈</p>
            <p>	&bull;避免过度反馈，以免给用户带来不必要的打扰，能够及时看到效果的、简单的操作，可以省略反馈提示</p>
        </div>,
        title: '反馈',
    },
];
//把textData写入dataArray
//dataArray = dataArray.map(item => ({ ...item, ...textData }));

class DesignRule extends React.Component {
    //限定prop的类型
    static propTypes = {
        className: PropTypes.string,
    };
    //设置组件默认数据
    static defaultProps = {
        className: 'details-switch-demo',
    };
    //构造器
    constructor(props) {
        super(props);
        this.state = {
            showInt: 0,
            delay: 0,
            imgAnim: [
                { translateX: [0, 300], opacity: [1, 0] },
                { translateX: [0, -300], opacity: [1, 0] },
            ],
        };
        this.oneEnter = false;
    }
    //向左翻页
    onLeft = () => {
        let showInt = this.state.showInt;
        showInt -= 1;
        if (showInt <= 0) {
            showInt = 0;
        }
        this.setState({ showInt, });    //更新页数

        this.bannerText.prev(); //调动向前函数 这个是蚂蚁官方提供的api;
    };

    //向右翻页
    onRight = () => {
        let showInt = this.state.showInt;
        const imgAnim = [
            { translateX: [0, 300], opacity: [1, 0] },
            { translateX: [0, -300], opacity: [1, 0] },
        ];
        showInt += 1;
        if (showInt > dataArray.length - 1) {
            showInt = dataArray.length - 1;
        }
        this.setState({ showInt });
        this.bannerText.next();
    };

    render() {
        //文字内容存放的方法
        const textChildren = dataArray.map((item, i) => {
            /*
                map是一个遍历函数，其工作是左边的数组对象的每一个元素通过某个函数遍历一遍
                item为当前项，即当前遍历的元素本身。即dataArray[0],dataArray[1],dataArray[2]...
                i为元素处于数组中的下标或索引。分别为 0, 1, 2...
            */
            /*
                等同于：
                const title=item.title;
                ...

             */
            const { title, background ,content } = item;
            return (
                //循环或者遍历子组件必须加key
                    <Element key={i}>
                        <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
                            <h1 key="h1">{title}</h1>
                            {/*这里的background会自动解析成background：background*/}
                            <em key="em" style={{background }} />
                            <p key="p">{item.content}</p>
                        </QueueAnim>
                    </Element>);
        });

        return (
            <QueueAnim
                component="div"
                type="alpha"
                duration={3000}
            >
                <div
                    className={`${this.props.className}-wrapper`}
                    style={{ background: dataArray[this.state.showInt].background }}
                    key="1"
                >
                    <div className={this.props.className}>
                        {/*BannerAnim是一个动画属性设置的标签*/}
                        <BannerAnim
                            prefixCls={`${this.props.className}-text-wrapper`} //自定义样式
                            sync //传递到 Element.
                            type="across" //各种动画效果
                            duration={1000} //用时多少
                            arrow={false} //默认箭头，如果 Arrow 在 children 里，此项无效
                            thumb={false}
                            ease="easeInOutExpo"//滑动方程
                            ref={(c) => { this.bannerText = c; }} //用来控制跳转
                            dragPlay={false} //在 banner 上拖动播放下一个或上一个。默认开启
                        >

                                {textChildren}

                        </BannerAnim>


                        {/*TweenOneGroup是单元素动画标签*/}
                        {this.state.showInt>0 && <Icon type="left" key="left" onClick={this.onLeft} />}
                        {this.state.showInt < dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
                    </div>
                </div>
            </QueueAnim>
        )
    }
}

export default DesignRule;