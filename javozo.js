var turno = true;
var conjunto = Array();
var x = 0;




function vez()
{
	var redx = document.createElement("img");
	if (turno == true)
	 {
	 	redx.src = "img/x.png";
		redx.style.width = "50px";
		redx.style.height = "50px";
	 }
	 else
	 {
	 	redx.src = "img/o.png";
		redx.style.width = "50px";
		redx.style.height = "50px";
	 }

	 return redx;
};

function wincon()
{

	var s1 = document.getElementById('slot1').value;
	var s2 = document.getElementById('slot2').value;
	var s3 = document.getElementById('slot3').value;
	var s4 = document.getElementById('slot4').value;
	var s5 = document.getElementById('slot5').value;
	var s6 = document.getElementById('slot6').value;
	var s7 = document.getElementById('slot7').value;
	var s8 = document.getElementById('slot8').value;
	var s9 = document.getElementById('slot9').value;
	
	//WinCon Player 1
	
	if (s1 == 1 && s2 == 1 && s3 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s4 == 1 && s5 == 1 && s6 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s7 == 1 && s8 == 1 && s9 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s1 == 1 && s5 == 1 && s9 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s3 == 1 && s5 == 1 && s7 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s1 == 1 && s4 == 1 && s7 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s2 == 1 && s5 == 1 && s8 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	if (s3 == 1 && s6 == 1 && s9 == 1)
	{
		alert('Player One Wins!'); return false;
	}
	
	//WinCon Player 2
	
	if (s1 == 2 && s2 == 2 && s3 == 2)
	{
		alert('Player Two Wins!'); return false;
	}
	if (s4 == 2 && s5 == 2 && s6 == 2)
	{
		alert('Player Two Wins!'); return false;
	}
	if (s7 == 2 && s8 == 2 && s9 == 2)
	{
		alert('Player Two Wins!');  return false;
	}
	if (s1 == 2 && s5 == 2 && s9 == 2)
	{
		alert('Player Two Wins!'); return false;
	}
	if (s3 == 2 && s5 == 2 && s7 == 2)
	{
		alert('Player Two Wins!'); return false;
	}
	if (s1 == 2 && s4 == 2 && s7 == 2)
	{
		alert('Player Two Wins!');  return false;
	}
	if (s2 == 2 && s5 == 2 && s8 == 2)
	{
		alert('Player Two Wins!');  return false;
	}
	if (s3 == 2 && s6 == 2 && s9 == 2)
	{
		alert('Player Two Wins!');  return false;
	}
}



function teste(campo)
{	
	
	document.getElementById(campo).appendChild(vez());
	
	if(turno == true)
	{
	document.getElementById(campo).value = 1;
	}
	else
	{
	document.getElementById(campo).value = 2;
	}
	
	
	if(wincon() == false)
	{
		
		$('td').removeAttr("onclick");
		
	}
	
	
	
	turno = !turno;

}
