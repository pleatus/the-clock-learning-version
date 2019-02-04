<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="js/clockCheat.js"></script>
<link rel="stylesheet" href="css/clockMain.css" type="text/css">
</head>
<body>
<?php
	if (isset($_POST['start'])) {
		$length = $_POST['qAmount'];
		$email = $_POST['uEmail'];
		$counter = 1;
		
		echo "selected length is $length. email provided is $email. counter is set to $counter.";
		
		if (isset($_POST['chGuess'])) {
			$shown = $_POST['timeDisp'];
			$guessed = $_POST['userGuess'];
			$hourG = $_POST['hourGuess'];
			$minG = $_POST['minuteGuess'];
			echo "last time shown $shown. last guess $guessed. hour guess $hourG. minute guess $minG.";
			$counter++;
			
		}
	
?>

<h3 style="color:#eeeeee;">Guess <?php echo $counter; ?> of <?php echo $length; ?></h3>

<?php require('clock.php'); ?>

<?php

	}
	else {
?>
<form name="guessPre" method="post" action="">
<input type="radio" name="qAmount" value="5" checked/>5<br>
<input type="radio" name="qAmount" value="10"/>10<br>
<input type="radio" name="qAmount" value="25"/>25<br>
<label for="uEmail">Email: <input type="email" name="uEmail"/></label><br>
<input type="submit" name="start" value="Start!"/>
</form>
<?php
	}
	?>
<?php include_once('clockFooter.php'); ?>

