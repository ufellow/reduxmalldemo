import React from 'react';
import {connect} from 'react-redux';
import {Box} from './style'
class A extends React.Component {

    render() {
        console.log(this.props)
        return (
            <Box>
            <div>+++
              <span>  你好  你好  你好  你好</span>
                <button onClick={this.add.bind(this)}>plus</button>
                <button onClick={this.dec.bind(this)}>dec</button>
              <p>{this.props.id}</p>
                <p>{this.props.name}</p>
            </div>
            </Box>
        )
    }
    add(){
        this.props.addAction();
    }
    dec(){
        this.props.decAction();
    }

}
const mapStateToProps = state =>{
    return{
        id: state.id,
        name: state.name
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addAction(){
            const actiontype = {
                type:"ADD_ID"
            }
            dispatch(actiontype);
        },
        decAction(){
            const actiontype = {
                type: "DEC_ID"
            }
            dispatch(actiontype)
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(A);