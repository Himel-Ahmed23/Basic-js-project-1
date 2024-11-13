// Triangle
document.getElementById ('triangleButton').addEventListener ('click', function(){

    let triInputBhumi = document.getElementById("triInputBhu");
    let triInputBhumiValueString = triInputBhumi.value;
    let triInputBhumiValue = parseFloat(triInputBhumiValueString);
    console.log(triInputBhumiValue);

    let triInputUcchota = document.getElementById("triInputUch");
    let triInputUcchotaValueString = triInputUcchota.value;
    let triInputUcchotaValue = parseFloat(triInputUcchotaValueString);
    console.log(triInputUcchotaValue);

    let triTextBhumi =document.getElementById('triangleBhumi');
    triTextBhumi.innerText = triInputBhumiValue;


    let triTextUcchota =document.getElementById('triangleUcchota');
    triTextUcchota.innerText = triInputUcchotaValue;

    let calculate = 0.5 * triInputBhumiValue * triInputUcchotaValue;
   
    let li = document.createElement('li');
    li.innerHTML = `Triangle = ${calculate}cm<sup>2</sup>`;
    
    let Ol = document.getElementById('Ol');
    Ol.appendChild(li);

    triInputBhumi.value = " "; triInputUcchota .value = " ";

});

// Parallelogram
document.getElementById ('paraButton').addEventListener ('click', function(){

    let paraInputBhumi = document.getElementById("paraInputBhu");
    let paraInputBhumiValueString = paraInputBhumi.value;
    let paraInputBhumiValue = parseFloat(paraInputBhumiValueString);
    console.log(paraInputBhumiValue);

    let paraInputUcchota = document.getElementById("paraInputUch");
    let paraInputUcchotaValueString = paraInputUcchota.value;
    let paraInputUcchotaValue = parseFloat(paraInputUcchotaValueString);
    console.log(paraInputUcchotaValue);

    let paraTextBhumi =document.getElementById('paraBhumi');
    paraTextBhumi.innerText = paraInputBhumiValue;


    let paraTextUcchota =document.getElementById('paraUcchota');
    paraTextUcchota.innerText = paraInputUcchotaValue;

    let calculate = paraInputBhumiValue * paraInputUcchotaValue;

    let li = document.createElement("li");
    li.innerHTML = `Parallelogram = ${calculate}cm<sup>2</sup>`;
    
    let Ol = document.getElementById("Ol");
    Ol.appendChild(li);
    
    paraInputBhumi.value = " "; paraInputUcchota.value = " ";

});

// Rhombus
document.getElementById ('romButton').addEventListener ('click', function(){

    let romInputBhumi = document.getElementById("rhomInputBhu");
    let romInputBhumiValueString = romInputBhumi.value;
    let romInputBhumiValue = parseFloat(romInputBhumiValueString);
    console.log(romInputBhumiValue);

    let romInputUcchota = document.getElementById("rhomInputUch");
    let romInputUcchotaValueString = romInputUcchota.value;
    let romInputUcchotaValue = parseFloat(romInputUcchotaValueString);
    console.log(romInputUcchotaValue);

    let romTextBhumi =document.getElementById('rhomBhumi');
    romTextBhumi.innerText = romInputBhumiValue;


    let romTextUcchota =document.getElementById('rhomUcchota');
    romTextUcchota.innerText = romInputUcchotaValue;

    let calculate = 0.5 * romInputBhumiValue * romInputUcchotaValue;
   
    let li = document.createElement('li');
    li.innerHTML = `Rhombus = ${calculate}cm<sup>2</sup>`;
    
    let Ol = document.getElementById('Ol');
    Ol.appendChild(li);

    romInputBhumi.value = " "; romInputUcchota.value = " ";

});

// Pentagon
document.getElementById ('pentaButton').addEventListener ('click', function(){

    let pentaInputBhumi = document.getElementById("pentaInputBhu");
    let pentaInputBhumiValueString = pentaInputBhumi.value;
    let pentaInputBhumiValue = parseFloat(pentaInputBhumiValueString);
    console.log(pentaInputBhumiValue);

    let pentaInputUcchota = document.getElementById("pentaInputUch");
    let pentaInputUcchotaValueString = pentaInputUcchota.value;
    let pentaInputUcchotaValue = parseFloat(pentaInputUcchotaValueString);
    console.log(pentaInputUcchotaValue);

    let pentaTextBhumi =document.getElementById('pentaBhumi');
    pentaTextBhumi.innerText = pentaInputBhumiValue;


    let pentaTextUcchota =document.getElementById('pentaUcchota');
    pentaTextUcchota.innerText = pentaInputUcchotaValue;

    let calculate = 0.5 * pentaInputBhumiValue * pentaInputUcchotaValue;

    let li = document.createElement('li');
    li.innerHTML = `Pentagon = ${calculate}cm<sup>2</sup>`

    let Ol = document.getElementById("Ol");
    Ol.appendChild(li);

    pentaInputBhumi.value = " "; pentaInputUcchota.value = " ";


});

