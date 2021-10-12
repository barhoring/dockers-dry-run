# 01 - Exercise: containerize an express app

Grab the hello world app from express docs and put that inside index.js
Install the dependancy (express)
Make sure the app is running and everything is okay and then CTRL+C to exit

Create a Dockerfile.
Build & run
Port

Bonus:
create

### docker build .

### docker build . --tag express ## or -t instead of --tag

```bash
 docker build . --tag express
```

### docker run my-node-app

```bash
docker run --rm -it --name my-cool-express-1 -p 3000:3000 express

```

### docker run --rm -it --name my-cool-express-1 -p 3000:3000 express

if you find youeself can't close express the container!
you need to send signit with --init

```bash
docker run --rm --init -it --name my-cool-express-1 -p 3000:3000 express
```

<details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
<br><br>
<pre>
&lt;details&gt;
&lt;summary&gt;How do I dropdown?&lt;&#47;summary&gt;
&lt;br&gt;
This is how you dropdown.
&lt;&#47;details&gt;
</pre>
</details>
