<form method="post" name="guesser" id="guesser">
<label for="hourGuess">hour<br>
<input type="number" min="1" max="12" name="hourGuess" id="hourGuess"></label>
<label for="minuteGuess">minute<br>
<input type="number" min="0" max="60" name="minuteGuess" id="minuteGuess"></label>
<input type="hidden" name="timeDisp" id="timeDisp" value="">
<input type="hidden" name="userGuess" id="userGuess" value="">
<br><br>
<input type="submit" id="chGuess" name="chGuess" value="Guess">
</form>