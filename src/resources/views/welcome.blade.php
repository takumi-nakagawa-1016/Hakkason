
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>MileCallender</title>
    @viteReactRefresh
    @vite([
    'resources/css/app.css',
    'resources/scss/app.scss',
    'resources/ts/app.tsx',
    ])
</head>
<body>
<div id="app"></div>
</body>
</html>
