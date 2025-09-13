---
layout: elmGame
title: Galactic Reclrim
description: Our group game in ENGR100 Proj1
permalink: /games/engr100p1/
img: assets/img/thumbnail_engr100p1.jpg
importance: 4
category: fun
---

<link rel="stylesheet" href="{{ '/games/engr100p1/build/style.css' | relative_url }}">
<script src="{{ '/games/engr100p1/build/elm-canvas.js' | relative_url }}"></script>
<script src="{{ '/games/engr100p1/build/elm-audio.js' | relative_url }}"></script>
<script src="{{ '/games/engr100p1/build/main.js' | relative_url }}"></script>

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
