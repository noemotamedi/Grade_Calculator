





function setUpPage(){
    doPercent("1,2");
    doPercent("2,2");
    doPercent("3,2");
    randomPoints("1,1");
    randomPoints("2,1");
    randomPoints("3,1");
    finalWeight('dummyVariable');
    document.getElementById('4,1').value=Math.floor(Math.random()*3)*10+70;
}


function finalWeight(x){
    zeroWeight('1,2');
    zeroWeight('2,2');
    zeroWeight('3,2');


    document.getElementById('4,1').value=Math.floor(Math.random()*3)*10+70;
    var number=100-(parseInt(document.getElementById('1,2').value)+parseInt(document.getElementById('2,2').value)+parseInt(document.getElementById('3,2').value));

    if(number<=0){
        alert('Error. Percentages cannot add up to more than 100.')
    }
    while(number<=0){
        document.getElementById(x).value-=10;
        number=100-(parseInt(document.getElementById('1,2').value)+parseInt(document.getElementById('2,2').value)+parseInt(document.getElementById('3,2').value))
    }

    document.getElementById('finalWeight').innerHTML='<p>Final Weight %:</p>'+number;
}


function randomPoints(x){
    document.getElementById(x).value= doNumber(x);
    for(var i=0;i<Math.floor(Math.random()*5)+1;i++){
        document.getElementById(x).value+=', ';
        document.getElementById(x).value+= doNumber(x);
    }
}



function doNumber(x){
   var points=Math.floor(Math.random() * 61+40);
    if(points<70){
        points=Math.floor(Math.random() * 61+40);
    }
    return points;
}


function doPercent(x){
    document.getElementById(x).value=Math.floor(Math.random()*3)*10+10;
}

function zeroWeight(x){
    if(isNaN(parseInt(document.getElementById(x).value))||parseInt(document.getElementById(x).value)<=0){
        document.getElementById(x).value=1;
    }
}











function calculateGrades(){
    document.getElementById('1,1').style.backgroundColor="transparent";
    document.getElementById('2,1').style.backgroundColor="transparent";
    document.getElementById('3,1').style.backgroundColor="transparent";

    var x=convertArrayStringToNumber('1,1');
    if(isNaN(x)){
        return;
    }
    var y=convertArrayStringToNumber('2,1');
    if(isNaN(y)){
        return;
    }
    var z=convertArrayStringToNumber('3,1');
    if(isNaN(z)){
        return;
    }
    calculateGradeNeeded(x,y,z);
}





function convertArrayStringToNumber(x) {
    var str=document.getElementById(x).value;
    var arr = str.split(",");
    for(var i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
            errorFunction(x);
            //return value that will trigger the return to end the functions
            return 'BadInfo';
        }
    arr[i] = parseInt(arr[i],10);
    }
    var firstSum=averageArray(arr,x);
    return firstSum;
}



function averageArray(arr,x) {
    var total=0;
    for(var i=0;i<arr.length;i++){
        total+=arr[i];
    }
    total=total/arr.length;
    document.getElementById(x+',3').innerHTML='<p>Grade:</p>'+'<p>'+ getLetterGrade(total)+ '</p>';
    document.getElementById(x+',3').style.backgroundColor=getLetterColor(getLetterGrade(total));
    return total;
}



function calculateGradeNeeded(x,y,z) {
    var currentGrade=(parseFloat(x)+parseFloat(y)+parseFloat(z))/3;
    var  number=100-(parseInt(document.getElementById('1,2').value)+parseInt(document.getElementById('2,2').value)+parseInt(document.getElementById('3,2').value))
    var gradeNeeded=100*(parseInt(document.getElementById('4,1').value)-currentGrade*(1-(number/100)))/number;

    document.getElementById('resultGrades').innerHTML='<p>Current Grade:</p>'+'<p>'+(getLetterGrade(currentGrade))+'</p>'+ '<p>Grade Needed:</p>'+'<p>'+Math.round(gradeNeeded)+'</p>';
    document.body.style.backgroundColor = getLetterColor(getLetterGrade(currentGrade));
}
















function errorFunction(x){
    document.getElementById(x).style.backgroundColor="red";

    document.getElementById('1,1,3').innerHTML='<p>Grade:</p>';
    document.getElementById('1,1,3').style.backgroundColor="transparent";
    document.getElementById('2,1,3').innerHTML='<p>Grade:</p>';
    document.getElementById('2,1,3').style.backgroundColor="transparent";
    document.getElementById('3,1,3').innerHTML='<p>Grade:</p>';
    document.getElementById('3,1,3').style.backgroundColor="transparent";
}


function gradeDesiredErrors(){
    var x=document.getElementById('4,1').value;
    if(x<0){
        document.getElementById('4,1').value=Math.abs(x);
    }
    if(Math.abs(x)>100){
        alert("Are you sure you want a grade higher than 100%?");
    }
}


function getLetterGrade(x){
    if(x<59){
        return 'F';
    }
    if(x<69){
        return 'D';
    }
    if(x<79){
        return 'C';
    }
    if(x<89){
        return 'B';
    }
    return 'A';
}


function getLetterColor(x){
    if(x=='A'){
        return 'Darkgreen';
    }
    if(x=='B'){
        return 'Chartreuse';
    }
    if(x=='C'){
        return 'Yellow';
    }
    if(x=='D'){
        return 'Red';
    }
    if(x=='F'){
        return 'Maroon';
    }
}

