<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="HandheldFriendly" content="true">

  <meta name="description" content="This is description">
  <meta name="keywords" content="keywords">
  <title>Amman</title>
  <link rel="shortcut icon" href="img/logo.png" type="image/x-icon">
  <link rel="icon" href="img/logo.png" type="image/x-icon">

  <!-- Import Styles -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="css/libs.min.css">
  <!-- Custom Styles -->
  <link rel="stylesheet" type="text/css" href="css/base.css">
  <link rel="stylesheet" type="text/css" href="css/common.css">

  <!--[if lt IE 9]>v
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- START Preloader -->
    <style type="text/css">
      #page-preloader {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 100500;
      }
      #page-preloader .spinner {
          width: 478px;
          height: 146px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -73px 0 0 -239px;
          background: url('img/logo.png') no-repeat 50% 50%;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
      }
    </style>
  <!-- Finish Preloader -->

</head>
<body>
  <div class="for-overflow">
    <!-- START Preloader -->
      <div id="page-preloader"><span class="spinner"></span></div>
    <!-- Finish Preloader -->
    
    <?php
      include 'header.php';
    ?>
    
    <?php
      include 'main.php';
    ?>
    
    <?php
      include 'footer.php';
    ?>
  </div><!-- for-overflow -->
  
  <!-- Scripts -->
  <script defer src="js/libs.min.js"></script>
  <script defer src="js/common.js"></script>
</body>
</html>