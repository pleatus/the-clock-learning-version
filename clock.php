<div  id="clockArea" onload="startClock()">
<div id="guessArea">
<h2 style="color:#eeeeee;text-align:center;">Can you guess what time this reads as?</h2>
<div id="clockFace">
<clock-circle-minutes id="ccm-one"></clock-circle-minutes>
<clock-circle-minutes id="ccm-two"></clock-circle-minutes>
<clock-circle-minutes id="ccm-three"></clock-circle-minutes>
<clock-circle-minutes id="ccm-blank"></clock-circle-minutes><br><br><br>
<div class="triBorder" id="triLeft"></div><div class="triBorder" id="triRight"></div><div class="triBorder" id="triBottom"></div>
<clock-triangle-minutes id="ctm-one"></clock-triangle-minutes>
<clock-triangle-minutes id="ctm-two"></clock-triangle-minutes><br><br><br><br>
<clock-square-minutes id="csm-blank">
<clock-square-minutes id="csm-one"></clock-square-minutes>
<clock-square-minutes id="csm-two"></clock-square-minutes>
<clock-square-minutes id="csm-three"></clock-square-minutes>
<clock-square-minutes id="csm-four"></clock-square-minutes>
</clock-square-minutes>
</div>
<table id="keyWork">
	<tr><th class="circle">○</th>
			<td><span class="red">12</span></td>
			<td><span class="blue">1</span></td>
			<td><span class="green">2</span></td>
			<td><span class="red">3</span></td>
			<td><span class="green">4</span></td>
			<td><span class="blue">5</span></td>
			<td><span class="cyan">6</span></td>
			<td><span class="yellow">7</span></td>
			<td><span class="magenta">8</span></td>
			<td><span class="cyan">9</span></td>
			<td><span class="magenta">10</span></td>
			<td><span class="yellow">11</span></td>
	</tr>
	<tr><th class="triangle">∆</th>
			<td><span class="green">H</span></td>
			<td><span class="red">H</span></td>
			<td><span class="blue">H</span></td>
			<td><span class="blue">H</span></td>
			<td><span class="red">H</span></td>
			<td><span class="green">H</span></td>
			<td><span class="magenta">H</span></td>
			<td><span class="cyan">H</span></td>
			<td><span class="yellow">H</span></td>
			<td><span class="yellow">H</span></td>
			<td><span class="cyan">H</span></td>
			<td><span class="magenta">H</span></td>
	</tr>
	<tr><th class="square">□</th>
			<td><span class="blue">R</span></td>	
			<td><span class="green">R</span></td>
			<td><span class="red">R</span></td>
			<td><span class="green">R</span></td>
			<td><span class="blue">R</span></td>	
			<td><span class="red">R</span></td>
			<td><span class="yellow">R</span></td>
			<td><span class="magenta">R</span></td>
			<td><span class="cyan">R</span></td>
			<td><span class="magenta">R</span></td>
			<td><span class="yellow">R</span></td>
			<td><span class="cyan">R</span></td>
	<tr>
</table>
			

<p>Input guess below</p>
<?php require('clockGuess.php'); ?>
</div>
</div>
<br><br>