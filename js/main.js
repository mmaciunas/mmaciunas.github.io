var x, pav;
var dukartai = 0, laimejai = 0;
var buves, priestaibuves;
var pav, buvespav="";
var a1, a2, a3, a4, a5, a6;

for (var arr=[],i=0;i<6;++i) arr[i]=i;
function shuffle(array) 
{
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
arr = shuffle(arr);
a1=arr[1];
a2=arr[2];
a3=arr[3];
a4=arr[4];
a5=arr[5];
a6=arr[6];

function vykdyk()
{
    if(pav==buvespav && dukartai==1)
    {
        document.getElementById(x).style.visibility="hidden";
        document.getElementById(buves).style.visibility="hidden";
        laimejai++;
        dukartai=0;
        if(laimejai==3)
        alert("valio!");
    }
    else if(dukartai<2)
    {
        dukartai++;
        buvespav=pav;
    }
    else if(dukartai==2)
    {
        document.getElementById(buves).src="image/back.jpg";
        document.getElementById(priestaibuves).src="image/back.jpg";
        dukartai=1;
        buvepav=pav;
    }
    document.getElementById(x).src=pav;
    priestaibuves=buves;
    buves=x;
}
function versti1()
{
    x = "id1";
    if(a1==1 || a1==2)
        pav = "image/plus.jpg";
    if(a1==3 || a1==4)
        pav = "image/minus.jpg";
    if(a1==5 || a1==6)
        pav = "image/divide.jpg";
    vykdyk(x, pav);
}
function versti2()
{
    x = "id2";
    if(a2==1 || a2==2)
        pav = "image/plus.jpg";
    if(a2==3 || a2==4)
        pav = "image/minus.jpg";
    if(a2==5 || a2==6)
        pav = "image/divide.jpg";
    vykdyk(x, pav);
}
function versti3()
{
    x = "id3";
    if(a3==1 || a3==2)
        pav = "image/plus.jpg";
    if(a3==3 || a3==4)
        pav = "image/minus.jpg";
    if(a3==5 || a3==6)
        pav = "image/divide.jpg";
    vykdyk(x, pav);
}
function versti4()
{
    x = "id4";
    if(a4==1 || a4==2)
        pav = "image/plus.jpg";
    if(a4==3 || a4==4)
        pav = "image/minus.jpg";
    if(a4==5 || a4==6)
        pav = "image/divide.jpg";
    vykdyk(x, pav);
}
function versti5()
{
    x = "id5";
    if(a5==1 || a5==2)
        pav = "image/plus.jpg";
    if(a5==3 || a5==4)
        pav = "image/minus.jpg";
    if(a5==5 || a5==6)
        pav = "image/divide.jpg";
    vykdyk(x, pav);
}
function versti6()
{
    x = "id6";
    if(a5==1 || a5==2)
        pav = "image/plus.jpg";
    if(a5==3 || a5==4)
        pav = "image/minus.jpg";
    if(a5==5 || a5==6)
        pav = "image/divide.jpg";
    vykdyk(x, pav);
}