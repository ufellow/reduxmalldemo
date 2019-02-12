import React, {Component} from 'react';
import {ShopcartBox, ShopCartList} from './style';
class ShopCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            maskShow: false,
            listShow: false
        }
    }
    render(){
        const selectGoods = this.props.selectGoods;
        let totalCount = 0;
        let totalPrice = 0;
        selectGoods.forEach(item => {
              totalCount += item.count;
              totalPrice += item.count * item.price;
        })
        return(
            <ShopcartBox>
                <div className='box'>               
                    <div className='cartbox'>
                        <div className='gouwucheIconBox'>
                            <i className='iconfont icon-gouwuche gouwuche'></i>
                            {totalCount > 0?
                                <div className='count'><span>{totalCount}</span></div>
                            :null}
                        </div>
                        <div className='totalprice' onClick={this.showSelectGoods.bind(this)}>
                        {
                            totalPrice > 0 ?
                            <span>￥ {totalPrice}</span>
                            : <span>选择商品</span>
                        }                           
                        </div>
                    </div>
                    {totalPrice > 0 ?
                        <div className='go-statements'>
                            <span>结算</span>
                        </div>                    
                    :null
                    } 
                 </div>
                 {(this.state.listShow && selectGoods.length > 0) ?
                    <div className='shopcart-list'>
                        <div className='shopcart-header'>
                            <div className='title'>购物车</div>
                            <div className='cleanShopCart' onClick={this.handleEmpty.bind(this)}>
                                <i className='iconfont icon-shanchu cleancart'></i>
                                清空购物车
                            </div>
                        </div>
                    <ShopCartList>
                        {selectGoods.length > 0 ?
                            selectGoods.map((product,index) => {
                                return(
                                    <li key={index}>
                                        <div className='product-name'>
                                            <div>{product.name}</div>
                                            <div className='cart-danwei'>（{product.danwei}）</div>
                                        </div>
                                        <div className='cartcontrol'>
                                        <i className='iconfont icon-jian operation-dec' onClick={this.handleDec.bind(this,product)}></i>
                                        <span>{product.count}</span>
                                        <i className='iconfont icon-jia operation-add' onClick={this.handleAdd.bind(this,product)}></i>
                                        </div>
                                    </li>
                                )
                            })
                        :null
                        }
                    </ShopCartList>     
                </div>             
                
                    :null
                 }
                 <div className='mask'></div>
            </ShopcartBox>
        );
    }
    showSelectGoods(){
        let {listShow, maskShow} = this.state;
        this.setState({
            listShow: !listShow
        })
    }
    handleAdd(product){
        this.props.addCart(product)
    }
    handleDec(product){
        this.props.decCart(product)
    }
    handleEmpty(){
        this.props.handleEmpty();
    }
    componentDidMount(){
        
    }
}
export default ShopCart;