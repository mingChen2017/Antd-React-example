import React from 'react';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import './moduleDescribe.css'


const textData = {
    //title: 'General',
};
//数据数组
let dataArray = [
    {
        title: 'General',
        background: '#ffd8d8',
        subTitle:'按钮和图标',
        //如果在这里要用css的符号实现分行或者是其他功能，那么需要加上一个父级标签
        //这里的写法还不够纯净，作为model层应该只存放数据而不包括html语句，我个人认为合理的做法是把这部分数据设置成一个数组，在ViewMode层再遍历后转成html
        content:
            <div>
                <h3>	&bull;按钮</h3>
                <p></p>
                <h3>	&bull;图标（icon）：提供了上百个符合antd设计规范的图标</h3>
            </div>
    },
    {
        title: 'Layout',
        background: '#fed7ff',
        subTitle:'展示',
        content:
            <div>
                <p>	&bull;栅格</p>
                <p>	&bull;布局：Layout Header Sider Content Footer</p>
            </div>
    },
    {
        title: 'Navigation' ,
        background: '#d3d1ff',
        subTitle:'导航',
        content:
            <div>
                <p>	&bull;固钉：将页面元素钉在可视范围。</p>
                <p>	&bull;面包屑：显示当前页面在系统层级结构中的位置，并能向上返回。</p>
                <p>	&bull;下拉菜单</p>
                <p>	&bull;导航菜单</p>
                <p>	&bull;分页</p>
                <p>	&bull;步骤条：引导用户按照流程完成任务的导航条</p>
            </div>
    },
    {
        title: 'Data Entry' ,
        background: '#afdbe1',
        subTitle:'数据输入',
        content:
            <div>
                <p>	&bull;自动完成：输入框自动完成功能</p>
                <p>	&bull;级联选择</p>
                <p>	&bull;多选框</p>
                <p>	&bull;日期选择框</p>
                <p>	&bull;表单</p>
                <p>	&bull;数字输入框</p>
                <p>	&bull;输入款</p>
                <p>	&bull;提及</p>
                <p>	&bull;评分</p>
                <p>	&bull;单选框</p>
                <p>	&bull;滑动输入条</p>
                <p>	&bull;开关</p>
                <p>	&bull;树选择</p>
                <p>	&bull;时间选择框</p>
                <p>	&bull;穿梭框</p>
                <p>	&bull;上传</p>
            </div>
    },
    {
        title: 'Data Display' ,
        background: '#bee1c5',
        subTitle:'数据展示',
        content:
            <div>
                <p>	&bull;头像</p>
                <p>	&bull;微标数：参考微信小红点</p>
                <p>	&bull;日历</p>
                <p>	&bull;卡片</p>
                <p>	&bull;走马灯</p>
                <p>	&bull;折叠面板</p>
                <p>	&bull;气泡卡片</p>
                <p>	&bull;文字提示：移到文字上会显示简单的文字提示气泡框。</p>
                <p>	&bull;表格</p>
                <p>	&bull;标签页</p>
                <p>	&bull;标签</p>
                <p>	&bull;时间戳</p>
                <p>	&bull;树形控件</p>
            </div>},
    {
        title: 'Feedback' ,
        background: '#ecffd8',
        subTitle:'反馈',
        content:<div>
            <p>	&bull;警告提示</p>
            <p>	&bull;对话框</p>
            <p>	&bull;全局提示</p>
            <p>	&bull;通知提醒框</p>
            <p>	&bull;进度条</p>
            <p>	&bull;气泡确认框</p>
            <p>	&bull;加载中</p>
        </div>},
    {
        title: 'Other' ,
        background: '#e1d2ba',
        subTitle:'其它',
        content:<div>
            <p>	&bull;锚点：用于跳转到页面指定位置。</p>
            <p>	&bull;回到顶部</p>
            <p>	&bull;国际化：翻译</p>
        </div>},
];

//遍历数组录入数据
dataArray = dataArray.map(item => ({ ...item, ...textData }));


class ModuleDescribe extends React.Component {
    //限制prop的类型，一般对外部传来的参数需要做类型验证
    static propTypes = {
        className: PropTypes.string.isRequired,
    };
    //设定默认props
    /*
    [
      {
        name: 'Zachary He',
        age: 13,
        married: true,
      },
      {
        name: 'Alice Yo',
        name: 17,
      },
      {
        name: 'Jonyu Me',
        age: 20,
        married: false,
      }
    ]
    propTypes: {
        myArray: React.PropTypes.arrayOf(
            React.propTypes.shape({
                name: React.propTypes.string.isRequired,
                age: React.propTypes.number.isRequired,
                married: React.propTypes.bool
            })
        )
    }
   */
    static defaultProps = {
        className: 'pic-details-demo',
    };

    constructor(props) {
        super(props);
        /*
        假如我们是以<ModuleDescribe></ModuleDescribe>调用的
            this.props.children拿到的是两个标签中间的子节点
         */
        //console.error("this.props.children:"+this.props.children)
        this.state = {
            /*
                使用classnames来动态修改或者添加多个className
                react原生动态添加多个className会报错：
                import style from './style.css'
                <div className={style.class1 style.class2}</div>
                想要得到最终渲染的效果是：
                <div class='class1 class2'></div>
                引入classnames库，安装：
                npm install classnames --save
                使用：
                import classnames from 'classnames'

                <div className=classnames({
                    'class1': true, //这里的true可以省略
                    'class2': true
                    )>
                </div>

                其他用法：
                    可以传入数组对象：
                        var arr = ['b', { c: true, d: false }];
                        classNames('a', arr); // => 'a b c'
                    可以传入动态class
                        let buttonType = 'primary';
                        classNames({ [`btn-${buttonType}`]: true });
               */

            /*
                局部state会让
             */
            picOpen: {},
        };
    }

//组件被点击后的动画
    onImgClick = (e, i) => {
        const { picOpen } = this.state;
        Object.keys(picOpen).forEach((key) => {
            //检查是否有其他打开的状态的窗口,如果有就关闭
            if (key !== i && picOpen[key]) {
                picOpen[key] = false;
            }
        });
        picOpen[i] = true;
        //更改状态，重新渲染
        this.setState({
            picOpen,
        });
    };

//组件被关闭的动画
    onClose = (e, i) => {
        const { picOpen } = this.state;
        picOpen[i] = false;
        //更改状态，重新渲染
        this.setState({
            picOpen,
        });
    };
    //关闭动画执行完毕
    onTweenEnd = (i) => {
        const { picOpen } = this.state;
        //删除picOpen[i]  delete picOpen[i]  结果为： ["a",undefined,"c","d"],在下面会通过判断类型来推断它是否被打开
        delete picOpen[i];
        this.setState({
            picOpen,
        });
    };


    getDelay = (e) => {
        //console.error("getDelay:"+e.index)
        const i = e.index + dataArray.length % 4;
        console.error("e.index:"+e.index);
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;

    };

    getType = (e) => {
        //console.error("getType:"+e.index)
        const animationType=["alpha","left","right","top","bottom","scale","scaleBig","scaleX","scaleY"];
        return animationType[4];
    }
    getChildren = () => {
        const imgWidth = 300;
        const imgHeight = 200;
        const imgBoxWidth = 330;
        const imgBoxHeight = 220;
        //console.error("getLiChildren prepare")
        //map()方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。每个元素都是回调函数的结果。
        return dataArray.map((item, i) => {
            //console.error("getLiChildren begin:"+i)
            const { background,title, subTitle, content } = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean';
            //读取该窗口是否被打开
            const isOpen = this.state.picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % 4);
            const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
            const isRight = false;
            const isTop = Math.floor(i / 4);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;
            //这个是点击后弹出的左边窗口的属性
            const liStyle = isEnter ? { width: '100%', height: 600, zIndex: 1 } : null;
            //点击后的阴影动画
            const liAnimation = isOpen ?
                ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)',repeat:1}) :
                ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' ,repeat:1});
            let aAnimation = isEnter ?
                ({
                    delay: 400,//新点击的目标移动后就目标多久回去
                    ease: 'easeInOutCubic',
                    width: imgWidth,
                    height: imgHeight,
                    onComplete: this.onTweenEnd.bind(this, i),
                    left: imgBoxWidth * (i % 4),
                    top: isTop ? imgBoxHeight : 0,
                }) : null;
//假如这个图案是被点击的是什么效果
            aAnimation = isOpen ?
                ({
                    ease: 'easeInOutCubic',
                    left: isRight ? (imgBoxWidth * 2) - 10 : 0,
                    width: '50%',
                    height: '100%',
                    top: 0,
                }) : aAnimation;

// 位置 js 控制；
            return (
                /*该部分是进场动画*/
                <TweenOne
                    key={i}
                    style={

                        {

                            left,
                            top,
                            ...liStyle,
                        }
                    }
                    //component是css标签的意思，比如在这里用了li的话，在页面实际上会生成一对<li></li>标签
                    component="li"
                    className={isOpen ? 'open' : ''}
                    animation={liAnimation}
                >
                    <TweenOne
                        component="a"
                        onClick={e => this.onImgClick(e, i)}
                        style={{
                            left: imgLeft,
                            top: imgTop,
                            width: 300,
                            height: 200
                        }}
                        //aAnimation会经过两层判断，先是判断是否进入的动画，再判断是否点击的动画 {item.title}
                        animation={aAnimation}
                    >
                        {/*我是一段注释*/}

                        {/*<--图片会随着缓慢变大，不是因为给图片设置了动效，是因为图片的width为100%，所以它会一直随着外面的容器变大，实际上TweenOne是一个隐形的容器，假如在这里用div画了一个长方形，不会有特效。-->*/}
                        <div className="my-rectangle" style={{background }}>{title}</div>

                    </TweenOne>



                    {/*<控制右边页面的动画-->*/}
                    <TweenOneGroup
                        enter={[
                            {
                                opacity: 0, duration: 0, type: 'from', delay: 400,
                            },
                            { ease: 'easeOutCubic', type: 'from', left: isRight ? '60%' : '0%' },
                        ]}
                        leave={{ ease: 'easeInOutCubic', left: isRight ? '60%' : '0%' }}
                        component=""
                    >
                        {isOpen && (
                            <div
                                className={`${this.props.className}-text-wrapper`}
                                key="text"
                                style={{
                                    left: isRight ? '0%' : '50%',
                                }}
                            >
                                <h1>
                                    {subTitle}
                                </h1>
                                <Icon type="cross" onClick={e => this.onClose(e, i)} />
                                {/*<!--这个标签表示标题下面的横线，虽然我也不知道为什么不是<em></em>-->*/}
                                <em />
                                <p>{content}</p>
                            </div>
                        )}
                    </TweenOneGroup>
                </TweenOne>
            );
        });
    };

    render() {
        return (

            <div>
                {/*<!--this.getLiChildren()每一次返回，QueueAnim标签都会执行一次，为每一个return分配delay component className....通过打印this.getDelay可以证明-->*/}
                {/*QueueAnim里面函数是依个全部执行完才执行下一个，例如下面会先执行六次this.getDelay，再执行六次this.getType>,根据实验，delay会影响后面this.getType的执行顺序,
                由于antd是异步加载，会先执行this.getLiChildren()，再执行QueueAnim里的函数
                */}
                {/*<!-- QueueAnim会执行括号内的函数*/}
                <QueueAnim
                    delay={this.getDelay}
                    component="ul"
                    className={`${this.props.className}-image-wrapper`}
                    type={this.getType}
                    duration={2000}
                >
                    {/*在这里我们拿到的是一个数组，但是编译器会自动拼接数组的所有元素，验证的办法是 这里可以写成this.getChildren()[0]，那么屏幕只会显示一个子组件*/}
                    {this.getChildren()}
                    {console.error(this.getChildren)}
                </QueueAnim>

            </div>

        );
    }
}
export default ModuleDescribe;