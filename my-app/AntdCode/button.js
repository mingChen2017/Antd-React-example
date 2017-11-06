import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/*react原生动态添加多个className会报错：
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
import omit from 'omit.js';
import Icon from '../icon';
import Group from './button-group';

//判断是不是中文且限定在两个字数
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str: any) {
    return typeof str === 'string';
}

// 如果是两个汉字会自动在汉字的中间加入间隔

function insertSpace(child: React.ReactChild, needInserted: boolean) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    const SPACE = needInserted ? ' ' : '';
    // strictNullChecks oops.
    if (typeof child !== 'string' && typeof child !== 'number' &&
        isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {},
            child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return <span>{child}</span>;
    }
    return child;
}

//导出三个类型：按钮类型 按钮形状 按钮大小
export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'large';

//导出按钮接口
export interface ButtonProps {
    type?: ButtonType;
    htmlType?: string;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: React.FormEventHandler<any>;
    onMouseUp?: React.FormEventHandler<any>;
    onMouseDown?: React.FormEventHandler<any>;
    loading?: boolean | { delay?: number };
    disabled?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
}

export default class Button extends React.Component<ButtonProps, any> {
    static Group: typeof Group;
    static __ANT_BUTTON = true;

    static defaultProps = {
        prefixCls: 'ant-btn',
        loading: false,
        ghost: false,
    };

    static propTypes = {
        type: PropTypes.string,
        shape: PropTypes.oneOf(['circle', 'circle-outline']),
        size: PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
        onClick: PropTypes.func,
        loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        className: PropTypes.string,
        icon: PropTypes.string,
    };

    timeout: number;
    delayTimeout: number;

    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            loading: props.loading,
            clicked: false,
        };
    }

    componentWillReceiveProps(nextProps: ButtonProps) {
        const currentLoading = this.props.loading;
        const loading = nextProps.loading;

        if (currentLoading) {
            clearTimeout(this.delayTimeout);
        }

        if (typeof loading !== 'boolean' && loading && loading.delay) {
            this.delayTimeout = setTimeout(() => this.setState({ loading }), loading.delay);
        } else {
            this.setState({ loading });
        }
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Add click effect
        this.setState({ clicked: true });
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.setState({ clicked: false }), 500);

        const onClick = this.props.onClick;
        if (onClick) {
            onClick(e);
        }
    }

    render() {
        const {
            type, shape, size, className, htmlType, children, icon, prefixCls, ghost, ...others,
        } = this.props;

        const { loading, clicked } = this.state;

        // large => lg
        // small => sm
        let sizeCls = '';
        switch (size) {
            case 'large':
                sizeCls = 'lg';
                break;
            case 'small':
                sizeCls = 'sm';
            default:
                break;
        }

        const classes = classNames(prefixCls, className, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${sizeCls}`]: sizeCls,
            [`${prefixCls}-icon-only`]: !children && icon,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-clicked`]: clicked,
            [`${prefixCls}-background-ghost`]: ghost,
        });

        const iconType = loading ? 'loading' : icon;
        const iconNode = iconType ? <Icon type={iconType} /> : null;
        const needInserted = React.Children.count(children) === 1 && (!iconType || iconType === 'loading');
        const kids = React.Children.map(children, child => insertSpace(child, needInserted));

        return (
            <button
                {...omit(others, ['loading'])}
                type={htmlType || 'button'}
                className={classes}
                onClick={this.handleClick}
            >
                {iconNode}{kids}
            </button>
        );
    }
}