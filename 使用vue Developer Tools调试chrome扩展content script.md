I have the same issue, and I solve it with a tricky way.
### 1.install vue-remote-devtools,
`npm install -g @vue/devtools`
### 2.run it in terminal
`vue-devtools`
### 3.send a GET request to get the script it provide and use eval to run it, like this:

```
// at your content script
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:8098/')
xhr.onload = function (x, e) {
  eval(x.currentTarget.responseText)
};
xhr.send();
```

### 4.reinstall extension and reload your page with extension.here is what it look like
![image](https://user-images.githubusercontent.com/15519222/76204557-902ddb80-6233-11ea-986a-6215a1f2f6f0.png)


