<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Social Media Dashboard</title>

        <!-- CUSTOM STYLES  -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}">

        <!-- CUSTOM FONT -->
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet">

        <!-- CUSTOM ICONS -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
        
    </head>
    <body>
        <div id="App"></div>

        <script src= "{{asset('js/app.js')}}" ></script>
    </body>
</html>
