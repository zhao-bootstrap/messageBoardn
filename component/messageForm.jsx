import React from 'react';
export default class MessageForm extends React.Component{
    constructor (props){
        super(props);
        this.state={
            "name":'',
            message:''
        }

    }
    handleNameChange(e){
        this.setState({"name":e.target.value})
    }
    handleMessageChange(e){
        this.setState({"name":e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const name=this.state.name.trim();
        const message=this.state.message.trim();
        if(!name||!message){
            return
        }
        this.props.onMessageSubmit({
            name:name,
            message:message
        })
        this.setState({
            name:'',
            message:''
        })

    }
    componentDidMount(){

    }
    render(){
        return(
            <div className="row">
                <form className="messageForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your name" onChange={this.handleNameChange} id="textName" className="form-control"/>
                    <input type="text" placeholder="say something" onChange={this.handleMessageChange} id="textMessage" className="form-control" />
                    <input type="submit" className="btn ben-default" value="Leave a message"/>
                </form>
            </div>
        )
    }

}