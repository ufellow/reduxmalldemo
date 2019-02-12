import React ,{Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actionCreators  from './../../store/actionCreator';
import ReactSwiper from 'reactjs-swiper';
import {HomeBox} from './style';
import ShopCart from './shopcart';
 class Home extends Component{
     constructor(props){
         super(props);
         this.state={
                images:[
                    {
                        image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=967395617,3601302195&fm=27&gp=0.jpg'
                        ,link:'https:www.baidu.com'
                    },{
                        image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2230167403,4188800858&fm=27&gp=0.jpg'
                        ,link:'https:www.baidu.com'
                    },{
                        image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3557322465,1056490878&fm=27&gp=0.jpg'
                        ,link:'https:www.baidu.com'
                    }
                ]
         }
     }
    render(){
        const swiperOptions = {
            preloadImages: true,
            autoplay: 100,
            autoplayDisableOnInteraction: false
          };
          const banners = this.state.images;     
          const products = this.props.products;   
          const selectGoods = this.props.selectGoods;
          let totalCount = 0;
          let totalPrice = 0;
          selectGoods.forEach(item => {
                totalCount += item.count;
                totalPrice += item.count * item.price;
          })
        return(
            <HomeBox>
                 <ReactSwiper swiperOptions={swiperOptions} showPagination items={banners}
                 className="swiper-example" />    
            {products.length > 0 ?             
                <ul className='product-list'>
                    {products.map((product,index)=>{
                        return(
                            <li key={index}>
                            <div className="productIcon">
                                <img src={product.image} alt='商品图片'/>
                            </div>
                            <div className="product">
                                <div className="name">{product.name}</div>
                                <div className="discription">{product.discriprion}</div>
                                <div className='price-operation'>
                                    <div className="price-unit">
                                        <span className='price'>￥{product.price}</span>
                                        <span className='unit'>/{product.danwei}</span>
                                    </div>                                    
                                    <div className={`cartcontrol ${product.count<=0?"add":""}`}>
                                    {product.count > 0 ? 
                                       <Fragment> <i className='iconfont icon-jian operation-dec' onClick={this.handleDec.bind(this, product)}></i>
                                        <span>{product.count}</span>
                                        </Fragment>
                                    :null
                                    }                                       
                                         <i className='iconfont icon-jia operation-add' onClick={this.handleAdd.bind(this, product)}></i>
                                    </div>
                                </div>
                            </div>
                            </li>    
                        )
                    })
                    } 
                      
                </ul>
                :null
            }
               <ShopCart selectGoods={selectGoods} handleEmpty={this.handleEmpty.bind(this)} addCart={this.handleAdd.bind(this)} decCart={this.handleDec.bind(this)}></ShopCart>
            </HomeBox>
        );
    }
    
    componentDidMount(){
        this.props.getAllProducts();
    }
    handleDec(product){
        const products = this.props.products;  
        let selectedGoods = [];
       products.forEach(item => {
        if(item.productid == product.productid){
            if( item.count > 0)
            item.count--;
            item.amount++;
        } 
         if(item.count > 0){
            selectedGoods.push(item)
         }          
        })
            this.props.getSelectGoods(selectedGoods)
    }
    handleAdd(product){
        const products = this.props.products;  
        let selectedGoods = [];
       products.forEach(item => {
        if(item.productid == product.productid){
            if(item.amount > 0 && item.amount > item.count)
            item.count++;
            item.amount--;
            selectedGoods.push(item)
        } else if(item.count > 0){
            selectedGoods.push(item)
         }
       })
       if(selectedGoods.length > 0){
        this.props.getSelectGoods(selectedGoods)
       }
    }
    handleEmpty(){
        let arr = [];
        const products = this.props.products;  
        products.forEach((item)=>{
            item.amount += item.count;
            item.count = 0;
            arr.push(item);
        })
        this.props.emptyShopCart(arr);
    }
    
}
const mapStateToProps = state=>{
    return{
        products: state.products,
        selectGoods: state.selectGoods
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getAllProducts(){    
            dispatch(actionCreators.GetAllProducts())
        },
        getSelectGoods(arr){
            dispatch(actionCreators.SelectProducts(arr))
        },
      emptyShopCart(arr){
        dispatch(actionCreators.EmptyShopCart(arr))
      }
    }
}
// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home)