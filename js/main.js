// Triangle
function calculateTriangleArea() {
    let height = parseFloat(document.getElementById("triangle-height").value);
    let base = parseFloat(document.getElementById("triangle-base").value);
    let area = 0.5 * height * base;
    let p = document.createElement("p");
    p.innerText = area;

    let areaName = document.createElement('p');
    areaName.innerText = "Area of Triangle is: "
    let resultContainer = document.getElementById("area-result-container");
    resultContainer.appendChild(areaName);
    resultContainer.appendChild(p);
}

// Rectangle
function calculateRectangleArea() {
    let length = parseFloat(document.getElementById("rectangle-length").value);
    let width = parseFloat(document.getElementById("rectangle-width").value);
    let area = length * width;
    let p = document.createElement("p");
    p.innerText = area;


    let areaName = document.createElement('p');
    areaName.innerText = "Area of Rectangle is: "
    let resultContainer = document.getElementById("area-result-container");
    resultContainer.appendChild(areaName);
    resultContainer.appendChild(p);


}


// Parallelogram
function calculateParallelogramArea() {
    let base = parseFloat(document.getElementById("parallelogram-base").value);
    let height = parseFloat(document.getElementById("parallelogram-height").value);
    let area = base * height;
    let p = document.createElement("p");
    p.innerText = area;


    let areaName = document.createElement('p');
    areaName.innerText = "Area of Parallelogram is: "
    let resultContainer = document.getElementById("area-result-container");
    resultContainer.appendChild(areaName);
    resultContainer.appendChild(p);

}

// Rhombus
function calculateRhombusArea() {
    let d1 = parseFloat(document.getElementById("rhombus-d1").value);
    let d2 = parseFloat(document.getElementById("rhombus-d2").value);
    let area = 0.5 * d1 * d2;
    let p = document.createElement("p");
    p.innerText = area;


    let areaName = document.createElement('p');
    areaName.innerText = "Area of Rhombus is: "
    let resultContainer = document.getElementById("area-result-container");
    resultContainer.appendChild(areaName);
    resultContainer.appendChild(p);

}

// Pentagon
function calculatePentagonArea() {
    let P = parseFloat(document.getElementById("pentagon-p").value);
    let b = parseFloat(document.getElementById("pentagon-b").value);
    let area = 0.5 * P * b;
    let p = document.createElement("p");
    p.innerText = area;


    let areaName = document.createElement('p');
    areaName.innerText = "Area of Pentagon is: "
    let resultContainer = document.getElementById("area-result-container");
    resultContainer.appendChild(areaName);
    resultContainer.appendChild(p);

}

// Ellipse
function calculateEllipseArea() {
    let a = parseFloat(document.getElementById("ellipse-a").value);
    let b = parseFloat(document.getElementById("ellipse-b").value);
    let area = 3.1416 * a * b;
    let p = document.createElement("p");
    p.innerText = area;


    let areaName = document.createElement('p');
    areaName.innerText = "Area of Ellipse is: "
    let resultContainer = document.getElementById("area-result-container");
    resultContainer.appendChild(areaName);
    resultContainer.appendChild(p);

}







