squaller.js

simple and lightweight component based framework

importing squaller.js

if you installed the `squallor.js` file:
```html
<script type="module" src="squaller.js" defer>
```
if you want to use a CDN for it:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/squaller@1.0.0/src/squaller.js" defer>
```

example use-case:
```html
<html>
    <head>
        <script type="module" src="../src/squaller.js" defer></script>
    </head>
    <body id="root">
        <squallerComponent name="default">
            <h1 style="color: red;">Hello ${sail1} and ${sail2}!</h1>
        </squallerComponent>

        <default sail="sail1: example one; sail2: epic"></default>
    </body>
</html>
```