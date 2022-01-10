---
title: Websockets with Tomcat
date: "2022-01-05T10:40:32.169Z"
description: Complete guide to integrate websockets in Java Project
tags: ["Web", "Spring", "Websocket", "assembly"]
---

#### What is Websocket ? 
It is communication protocol, which provides full duplex/bi-directional communication built on top of TCP protocol. The Websocket API is standardized by W3C committe and has wide support in almost all the browsers. For more details about the protocol check [this](https://datatracker.ietf.org/doc/html/rfc6455)

This post is about how to write server side websockets using spring and how to connect it using bare JavaScript. We will not be using extra 3rd party websocket libraries.

#### How to connect from Browser?
Let's look at Websocket API now (Check original MDN article [here](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)). This is javascript of side socket initialization and usage.

```js
// Create new connection
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    // Send messages
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

```

<br/>


#### Server Side Web Socket Setup

Let's create backend server for websockets. We will use popular spring boot based setup.

Copy paste this [link](https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.6.2&packaging=war&jvmVersion=11&groupId=com.example&artifactId=websocket&name=websocket&description=Demo%20project%20for%20Spring%20Boot%20and%20Websocket&packageName=com.example.websocket) in new browser tab to generate new spring boot project.

Click on "Generate" button.

Extract the zip file and change directory to project foloder

type `./gradlew clean build` in the terminal to verify that setup is building without errors.

Next we need to make few changes to our project to support websocket endpoint.

1. Add Text based websocket handler. The `TextWebSocketHandler` extends `AbstractWebSocketHandler` which calls the `handleTextMessage` method when new message is received.

```java

@Component
public class WebsocketHandler extends TextWebSocketHandler {
    List<WebSocketSession> sessions = new CopyOnWriteArrayList<WebSocketSession>();

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message)
            throws InterruptedException, IOException {
        System.out.println("Message Received. message.payLoad: " + message.getPayload());
        // Send message to all the connected clients
        for (WebSocketSession webSocketSession : sessions) {
            webSocketSession.sendMessage(new TextMessage("Hello " + message.getPayload() + "!"));
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // Add new session to list of all the sessions.
        // This list will be used for broadcasting messages
        sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        // Once client has disconnected, remove it from broadcast list
        sessions.remove(session);
    }
}

```

2. Add Configuration file to enable web sockets and bind API endpoint `helloAll` to our text based web socket handler
```java
package com.example.websocket;

import org.springframework.context.annotation.Configuration;

import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new WebsocketHandler(), "/helloAll");
    }
}
```
</br>


##### Cliet Side Implementation

1. Create new file call `index.html` at `src/main/resources/static` directory.
2. Copy the following code to the index.html

```javascript
<html>

<head>
    <title>Web Socket Demo</title>
</head>

<body>
    <div>
        <input id="input-msg" type="text" />
        <button id="send-btn">Send Message</button>
        <ul id="messages"></ul>
    </div>
    <script>
        var connected = false;
        function setConnected(val) {
            connected = val;
        }
        function connect() {
            ws = new WebSocket('ws://localhost:8080/helloAll');
            ws.onmessage = function (data) {
                showGreeting(data.data);
            }
            setConnected(true);
        }

        function disconnect() {
            if (ws != null) {
                ws.close();
            }
            setConnected(false);
            console.log("Disconnected");
        }

        function showGreeting(message) {
            let msgList = document.querySelector("#messages");
            let newMsg = document.createElement('li');
            newMsg.innerHTML = message;
            msgList.appendChild(newMsg);
        }

        window.onload = function () {
            connect();
            document.querySelector('#send-btn').onclick = function () {
                if (connected) {
                    ws.send(document.querySelector("#input-msg").value);
                } else {
                    console.error("Websocket is not connected. Please connect first")
                }
            }
        }
    </script>
</body>

</html>
```

#### How to test the demo

1. Go to `websocket` directory.
2. Type `./gradlew bootRun` to start the spring boot application.
3. Open new browser window and paste `http://localhost:8080/index.html` in the tab
4. Type your name and click on "Send Message" button. You will get reply from server.
5. Now open another tab and do the same. You should see the previous tab is getting messages from latest tab as well. That's our goal achieved.

#### Points to Ponder
1. Does websocket holds the thread at server side ?
2. Can websocket based application scale? If yes how ?
3. Why most of the other examples show message broker based setup ?
4. Is it blocking or non-blocking socket connection ?

I will update this very post with answers soon.


Complete code is available on the Github, [here](https://github.com/zeoneo/websocket-demo)


