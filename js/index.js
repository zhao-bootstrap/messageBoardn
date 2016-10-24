//var React = require('react');
//var ReactDOM = require('react-dom');
//var MessageBoard = require('../component/messageBoard.jsx');
import React from 'react';
import ReactDOM from "react-dom";
import MessageBoard from "../component/messageBoard.jsx";
ReactDOM.render(<MessageBoard title="留言板"/>,
    document.getElementById('container')
);