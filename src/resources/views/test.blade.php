<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>sample-api</title>

    {{-- react に変更があったとき自動で --}}
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/ts/index.tsx'])

</head>

<body class="antialiased">
<div id="app"></div>
</body>
</html>
