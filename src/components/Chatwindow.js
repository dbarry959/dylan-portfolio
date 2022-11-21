import React, { Component } from "react";
import { Launcher } from "react-chat-window";
//import Avatar from "../../../images/chatbot-64.png";
// import { mergeClasses } from '@material-ui/styles';
// const useStyles = makeStyles((theme) => ({
//   test: {
//     '&: sc-header': {
//       //maxHeight: 45,
//       minHeight: '45 !important'
//     }
//     ,
//   }
// }));
export default class Chatwindow extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
    };
  }
  componentDidMount() {
    let message =
      "Welcome to Dylan's Portfolio! I'm the assistant. How can I help you?";
    this._sendMessage(message);
  }
  _onMessageWasSent(message) {
    var self = this;
    this.setState({
      messageList: [...this.state.messageList, message],
    });
    //API variables
    const CLIENT_TOKEN = "GIP73NQVG3NTUICB44CZUPQD544TF63A";
    const q = encodeURIComponent(message.data.text);
    const uri = "https://api.wit.ai/message?v=20220915&q=" + q;
    const auth = "Bearer " + CLIENT_TOKEN;
    //API Call
    fetch(uri, { headers: { Authorization: auth } })
      .then((res) => res.json())
      .then((res) => {
        var index = [];
        for (var x in res.traits) {
          index.push(x);
        }
        //if user types in something that's out of scope, AI sends a message apologizing for not understanding. else, sends the correct response
        if (res.traits[index[0]] === undefined) {
          let msg =
            "I'm sorry, I didn't quite get that. Let me get back to you on that! :)";
          self._sendMessage(msg);
        } else {
          self._sendMessage(res.traits[index[0]][0].value);
        }
      });
  }
  _sendMessage(text) {
    //console.log(text);
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      });
    }
  }
  render() {
    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: "Profitual Assistant",
            //imageUrl: Avatar,
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>
    );
  }
}
