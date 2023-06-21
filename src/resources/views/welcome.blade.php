
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MileCallender</title>
    @viteReactRefresh
    @vite([
    'resources/css/app.css',
    'resources/scss/app.scss',
    'resources/ts/index.tsx',
    ])
</head>
<body>
<div id="app"></div>
</body>
</html>
