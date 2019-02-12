import React ,{Component} from 'react';
import {OrderBox} from './style';
export default class Order extends Component{
    render(){
        return(
            <OrderBox>
                <ul>
                    <li>
                        <div className="productIcon">
                             <img src='' alt='商品图片'/>
                        </div>
                        <div className="product">
                            <div className="name">商品名</div>
                            <div className="discription">商品描述</div>
                            <div className='price-operation'>
                                <span className='price'>商品价格</span>
                                
                            </div>
                        </div>
                    </li>
                </ul>
                {/* <button onClick={this.clickToHome.bind(this)}>toHome</button> */}
            </OrderBox>
        );
    }
    clickToHome(){
        console.log(this.props)
        this.props.history.push({pathname:'./home',state:{name:'order'}})
    }
}