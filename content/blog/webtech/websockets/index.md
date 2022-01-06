---
title: Websockets with Tomcat
date: "2022-01-05T10:40:32.169Z"
description: Complete guide to integrate websockets in Java Project
tags: ["Web", "Spring", "Websocket", "assembly"]
---

#### What is Websocket ? 
It is communication protocol, which provides full duplex/bi-directional communication built on top of TCP protocol. The Websocket API is standardized by W3C committe and has wide support in almost all the browsers. For more details about the protocol check [this](https://datatracker.ietf.org/doc/html/rfc6455)

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


Let's create backend server for websockets. We will use most popular spring boot based setup.

Copy paste this [link](https://start.spring.io/#!type=gradle-project&language=java&platformVersion=2.6.2&packaging=war&jvmVersion=11&groupId=com.example&artifactId=websocket&name=websocket&description=Demo%20project%20for%20Spring%20Boot%20and%20Websocket&packageName=com.example.websocket) in new browser tab to generate new spring boot project.

Click on "Generate" button.

Extract the zip file and change directory to project foloder

type `./gradlew clean build` to build the project

Add following depdencies to the `build.gradle`
```gradle
implementation 'org.webjars:webjars-locator-core'
implementation 'org.webjars:sockjs-client:1.0.2'
implementation 'org.webjars:stomp-websocket:2.3.3'
implementation 'org.webjars:bootstrap:3.3.7'
implementation 'org.webjars:jquery:3.1.1-1'
```


