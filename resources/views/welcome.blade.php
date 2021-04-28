<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Chill Zone</title>
        <link rel="Icon" href="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/178687252_521250689044688_8980257469736987516_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JajHiiGTn8UAX949S1X&_nc_ht=scontent-sin6-1.xx&oh=dc440050364f1679aaf9ff5c4538630b&oe=60AF0765">
        <link rel="stylesheet" href="/css/all.css">

    </head>
    <body>
        <div id="app">
            <mainapp></mainapp>
        </div>
    </body>
    <script src="{{mix('/js/app.js')}}"></script>
</html>
