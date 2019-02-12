import styled from 'styled-components';
export const OrderBox = styled.div`
    padding: 5px;
    ul{
        list-style: none;
        li{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .productIcon{
                width: 100px;
                height: 100px;
            }
        }
    }
`;