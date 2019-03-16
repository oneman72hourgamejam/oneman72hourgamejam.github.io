function Calculate(){
  var oneStar = +document.getElementById('one').value;
  var twoStar = +document.getElementById('two').value;
  var threeStar = +document.getElementById('three').value;
  var fourStar = +document.getElementById('four').value;
  var fiveStar = +document.getElementById('five').value;
  var sixStar = +document.getElementById('six').value;
  var sevenStar = +document.getElementById('seven').value;
  var eightStar = +document.getElementById('eight').value;
  var nineStar = +document.getElementById('nine').value;
  var tenStar = +document.getElementById('ten').value;

  var oneTotal = oneStar * 1;
  var twoTotal = twoStar * 2;
  var threeTotal = threeStar * 3;
  var fourTotal = fourStar * 4;
  var fiveTotal = fiveStar * 5;
  var sixTotal = sixStar * 6;
  var sevenTotal = sevenStar * 7;
  var eightTotal = eightStar * 8;
  var nineTotal = nineStar * 9;
  var tenTotal = tenStar * 10;

  var totalClicks = (oneStar + twoStar + threeStar + fourStar + fiveStar + sixStar + sevenStar + eightStar + nineStar + tenStar);
  var totalStars = (oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal + sixTotal + sevenTotal + eightTotal + nineTotal + tenTotal);
  var avgStars = (totalStars/totalClicks);

  var stars = '&#9733;';
  document.getElementById('resultTitle').style.display = 'block';
  document.getElementById('roundp').style.display = 'block';
  document.getElementById('avg').innerHTML = avgStars.toFixed(2);
  for(var i = 0 ;i<(Math.round(avgStars))-1;i++)
  {
    stars=stars+' &#9733;';
  }
  for(var i = (Math.round(avgStars))-1 ;i<10-1;i++)
  {
    stars=stars+' &#9734;';
  }
  document.getElementById('round').innerHTML = stars;
}

function Clear(){
  document.getElementById('one').value=0;
  document.getElementById('two').value=0;
  document.getElementById('three').value=0;
  document.getElementById('four').value=0;
  document.getElementById('five').value=0;
  document.getElementById('six').value=0;
  document.getElementById('seven').value=0;
  document.getElementById('eight').value=0;
  document.getElementById('nine').value=0;
  document.getElementById('ten').value=0;
  document.getElementById('avg').innerHTML = "";
  document.getElementById('round').innerHTML = "";
  document.getElementById('resultTitle').style.display = 'none';
  document.getElementById('roundp').style.display = 'none';
}
