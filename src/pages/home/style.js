import styled from 'styled-components';
export const HomeBox = styled.div`
    font-size: 14px;
    .swiper-example{
        height: 150px;     
        .slide-content{
          height: 100%
        }
        .swiper-img{
            height: 100%;
            width: 100%;
        } 
    }
    .product-list{
        margin-top: 30px;
        margin-bottom: 1.6rem;
        list-style: none;
        li{
            margin: 5px;
            padding: 5px;
            display: flex;
            flex-direction: row;
            border-bottom: solid 1px #b1b1b1;
            .productIcon{
                width: 100px;
                height: 75px;
                margin-right: .5rem
                img{
                    height: 100%;
                    width: 100%;
                }
            }
            .product{
                flex: 1
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .name{
                    font-size: 18px;
                }
                .discription{        
                    color: grey;       
                    overflow:hidden; 
                    text-overflow:ellipsis;                    
                    display:-webkit-box;                     
                    -webkit-box-orient:vertical;                    
                    -webkit-line-clamp:1;                 
                     display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。                    
                    -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式                    
                    -webkit-line-clamp:1; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
                }
                .price-operation{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .price{
                        color: #f00;
                        font-size: 17px;
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
                    .add{
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                    }
                   
                }
            }
        }
    }
`;
