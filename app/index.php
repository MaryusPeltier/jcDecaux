<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
</head>
<body>
        <style>
                #marker {
                background-image: url('https://www.bikeswelcome.org/wp-content/uploads/2016/12/bike_map_marker_225-Icon.png');
                background-size: cover;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
                }
            </style>
    <div id='map' style='width: 800px; height: 500px; display:block;'></div>
    
    <script src="dist/assets/js/jquery-3.3.1.min.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>
    <script src="src/assets/js/app.js"></script>

</body>
</html>