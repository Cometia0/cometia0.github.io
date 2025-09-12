---
layout: elmGame
title: Elm Game 2
description: another project with an image 🎉
permalink: /_games/engr100p2/
img: assets/img/6.jpg
importance: 4
category: fun
---

<link rel="stylesheet" href="{{ '/_games/engr100p2/build/style.css' | relative_url }}">
<script src="{{ '/_games/engr100p2/build/elm-canvas.js' | relative_url }}"></script>
<script src="{{ '/_games/engr100p2/build/elm-audio.js' | relative_url }}"></script>
<script src="{{ '/_games/engr100p2/build/main.js' | relative_url }}"></script>

<script>
    const pathname = document.location.pathname + "info";
    var app = Elm.Main.init({
      node: document.getElementById('myapp'),
      flags: {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        timeStamp: Math.floor(Date.now()),
        info: localStorage.getItem(pathname) ? localStorage.getItem(pathname) : ""
      }
    });

    app.ports.sendInfo.subscribe(function (m) {
      localStorage.setItem(pathname, m);
    });

    app.ports.alert.subscribe(function (m) {
      alert(m);
    });

    app.ports.prompt.subscribe(function (m) {
      let res = prompt(m.title);
      app.ports.promptReceiver.send({
        name: m.name,
        result: res
      });
    });

    window.addEventListener("keydown", (e) => {
      const { key, keyCode, metaKey, shiftKey, altKey, ctrlKey } = e;
      if (keyCode >= 112 && keyCode <= 115) {
        e.preventDefault();
      }
    });

    startAudio(app);
</script>
