<?php
header('Access-Control-Allow-Origin: *');
session_start();


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once("../api/header.php")?>
</head>
<body>
    
    
    <form id="formLogin">
        <input type="text" placeholder="username" name="username">
        <input type="password" placeholder="password" name="password">
        <input type="submit" value="LOGIN">
    </form>
    <form id="formSignup">
        <input type="text" placeholder="Prenom" name="name">
        <input type="text" placeholder="Nom" name="lastname">
        <input type="text" placeholder="Email" name="email">
        <input type="text" placeholder="username" name="username">
        <input type="password" placeholder="password" name="password">
        <input type="submit" value="S'enregistrer">
    </form>
    <button>S'enregistrer</button>
    <section id="main">
            <header id="navbarVelo">
                <div id="mySidenav" class="sidenav">
                    <div class="sidebarProfil">
                        <div class="row">
                        <div class="col-3">
                            <div class="imageProfil"></div>
                        </div>
                        <div class="col-9">
                            <h3>MICHEL</h3>
                            <p>Crédit : 0.00 €</p>
                        </div>
                        </div>
                    </div>
                <div class="buttonSidenav">
                    <a href="#">Carte</a>
                    <a href="#">Mes factures</a>
                    <a href="#">Shop</a>
                    <a href="#">Paramètres</a>
                    <a href="#">Paiement</a>
                    <a href="#">Aide</a>
                </div>
                </div>
                <span ><i class="fas fa-bars"></i></span>
            </header>
        <div id="map"></div>
    </section>
    <?php include_once("../api/scripts.php")?>
</body>
</html>