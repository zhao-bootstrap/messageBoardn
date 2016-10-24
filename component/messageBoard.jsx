// 留言板
import React from 'react';
import MessageList from "../component/messageList.jsx";
import MessageForm from "../component/messageForm.jsx";

const data=[{
    name:'小华',
    message:'你好'
}];
export default class MessageBoard extends React.Component{
    constructor(props){
        super(props);
        this.state={'data':[]};

    }
    componentDidMount(){
        this.setState({data:data})
    }
    handleMessageSubmit(){
        data.push(message);
        this.setState({
            data:data
        })
    }
    render(){
        return (
            <div className="massageBoard">
                <h3>{this.props.title}</h3>
                <MessageList data={this.state.data}/>
                <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
            </div>
        )
    }
}




