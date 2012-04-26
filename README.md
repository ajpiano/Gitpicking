# Gitpicking

A set of tools for improving the experience of discussing and editing prose text on Github, by @jsvine and @ajpiano. Right now we only have one, but there's more in the works!

## Multiline Bookmarklet
Github works great when you're discussing changes and asking questions about code. Unfortunately, when you're working with prose text, lines frequently go **way** past the edge of the container, often with the horizontal scrollbar a long ways away. It's pretty much impossible to read anything. Sure, you could just make sure that everyone, everywhere, always sets a hard wrap on their text, but solutions like "make millions of people do something differently," rarely scale in the short term. We think it's a lot easier to just remove the non-breaking spaces in the code display and force the text to wrap... which is exactly what [this bookmarklet](https://raw.github.com/ajpiano/Gitpicking/master/dist/bookmarklet.js) does!

#### Before
![Before]( http://cl.ly/1q2l3E0S3P102a3q281L/Screen%20Shot%202012-04-26%20at%2014.17.25.png )

#### After
![After]( http://cl.ly/3E1m1Y1o3W18320y0C2x/Screen%20Shot%202012-04-26%20at%2014.21.29.png )

