<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="IE=Edge">

        <title>IoT Aquaponik</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
        <!-- <link rel="stylesheet" text="text/css" media="screen" href="{{ asset('css/app.css') }}"> -->
    </head>
    </head>
    <body>
        <div id="app">
            <app-root></app-root>
        </div>
    </body>
    <script src="{{ mix('/js/app.js') }}"></script>
</html>