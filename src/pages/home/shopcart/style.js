import styled from 'styled-components'
export const ShopcartBox = styled.div`
    position: fixed;
    bottom: 0;
    height: 1.6rem;
    width: 100%;   
   .box{  
       height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .cartbox{
            flex: 1;
            background: black;
            opacity: 0.8;
            color: #fff;
            //购物车
            .gouwucheIconBox{
                position: absolute;
                left: .2rem;
                bottom: .3rem;    
                border-radius: 50%;
                .gouwuche{
                    font-size: 1.8rem;
                    color: #5f5f5f;
                }
                .count{
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: .7rem;
                    height: .7rem;           
                    text-align: center;
                    line-height: .7rem;
                    border-radius: 50%;
                    background: #f00;
                    font-weight: bold;
                }
            }
            .totalprice{
                margin-left: 2.5rem;
                line-height: 1.6rem;
            }
        }
    
        //去结算
        .go-statements{
            width: 3rem;
            height: 100%;
            background: #f7c100;
            color: #fff;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            letter-spacing: .1rem;
            font-weight: bold;
            font-size: .5rem;        
        }
   }
   .shopcart-list{
    position: absolute;
    bottom: 1.6rem;
    left: 0;
    width: 100%;
    background: #e2e2e2;
    z-index: -1;
    .shopcart-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: .2rem;
        background: #d8d8d8;
        .cleancart{
            margin-right: .2rem;
        }
    }
}
    .mask{
        width: 100%;
        height: 1000%;
        background: black;
        opacity: 0.8;
        z-index: 900000;
    }
`;
export const ShopCartList = styled.ul`
    padding-bottom: 1rem;
    max-height: 6rem
    overflow: auto;
    font-size: 16px;
   li{
       padding: .3rem;
       border-bottom: solid 1px grey;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       .product-name{
           flex: 1;
           .cart-danwei{
               margin-top: .2rem;
           }
       }
       .cartcontrol{
        width: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: 16px;
        }
        .operation-add, .operation-dec{
            font-size: 22px;
            color: #f7c503;
        }
    }
   }
`;