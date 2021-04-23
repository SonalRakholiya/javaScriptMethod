var cars = ["BMW", "volovo", "Audi", "Ford", "Fiat"];
var Bike = ["Activa", "Splendor", "Shine", "Discover", "Platina"];
var numbers = [1, 4, 9, 16];
var Reducenumbers = [175, 50.50, 25];
var ages = [32, 33, 12, 40];

var UserName = [
    { firstName: "Sonal", LastName: "Rakholiya" },
    { firstName: "Malcom", LastName: "Reynolds" },
    { firstName: "Kaylee", LastName: "Frye" }];


var text = "";
// Normal Loop
function ShowNormalLoop() {
    console.time("NormalLoop");
    for (var i = 0, text = ""; i < UserName.length; i++) {
        text += UserName[i].firstName + " " + UserName[i].LastName + "<br>";
    }
    document.getElementById("nLoop").innerHTML = text;
    console.timeEnd("NormalLoop");
}
// For In Loop
function ShowForInLoop() {
    console.time("ForInlLoop");
    text = "";
    for (var x in UserName) {
        //  text+=UserName[x]  + "<br>";
        text += UserName[x].firstName + " " + UserName[x].LastName + "<br>";
    }
    console.timeEnd("ForInlLoop");
    document.getElementById("ForInLoop").innerHTML = text;

}
// For Each Loop
function ShowForEachLoop() {
    console.time("ForEachLoop");
    text = "";
    // cars.forEach(SubFuncForEach);
    UserName.forEach(SubFuncForEach)
    document.getElementById("ForEachLoop").innerHTML = text;
    console.timeEnd("ForEachLoop");
}
function SubFuncForEach(value, index, array) {
    text += array[index].firstName + " " + array[index].LastName + "<br>";
}
// For Of Loop
function ShowForOfLoop() {
    console.time("ForOfLoop");
    text = "";
    for (var x of cars) {
        text += x + "<br>";
    }
    console.timeEnd("ForOfLoop");
    document.getElementById("ForOfLoop").innerHTML = text;
}
// While Loop
function ShowWhileLoop() {
    console.time("While_Loop");
    text = "";
    var i = 0;
    while (i < UserName.length) {
        text += "Index is " + i + " FirstName is " + UserName[i].firstName + "<br>";
        i++;
    }
    console.timeEnd("While_Loop");
    document.getElementById("WhileLoop").innerHTML = text;
}
// Add(push) Array
function AddValueInArray() {
    console.time("Push array_Loop");
    text = "";
    Bike.forEach(SubAddValueInArray);
    document.getElementById("PushArray").innerHTML = cars.join("<br>");
    console.timeEnd("Push array_Loop");

}
function SubAddValueInArray(value) {
    cars.push(value);
}

// Remove(pop) Array
function RemoveValueInArray() {
    console.time("Pop array Loop");
    text = "";
    Bike.forEach(SubRemoveValueInArray);
    document.getElementById("PopArray").innerHTML = cars.join("<br>");
    console.timeEnd("Pop array Loop");

}
function SubRemoveValueInArray(value) {
    cars.pop(value);
}
// map Array
function MapArray() {
    console.time("Map array");
    // text= numbers.map(Math.sqrt);
    text = UserName.map(GetFullName);
    document.getElementById("MapArray").innerHTML = text;
    console.timeEnd("Map array");

}
function GetFullName(item) {
    var FullName = [item.firstName, item.LastName].join(" ");
    return FullName;

}
//Reduce array
function ReduceArray() {
    console.time("Reduce Array");
    document.getElementById("ReduceArray").innerHTML = Reducenumbers.reduce(myFunc);
    document.getElementById("ReduceArraySum").innerHTML = Reducenumbers.reduce(GetSum, 0);
    document.getElementById("ReduceRightArray").innerHTML = Reducenumbers.reduceRight(myFunc);
    document.getElementById("ReduceRightArraySum").innerHTML = Reducenumbers.reduceRight(GetSum);
    console.timeEnd("Reduce Array");

}
function myFunc(total, num) {
    // debugger;
    return total - num;
}
function GetSum(total, num) {
    return total + num;
}
// Every Array
function EveryArray() {
    document.getElementById("EveryArray").innerHTML = ages.every(CheckAdults);
}

function CheckAdults(age) {
    var x = document.getElementById("AgeTocheck").value;
    if (x == "") {
        debugger;
        // setTimeout(function(){
        //      alert("Please Enter Value");
        // },100);
        alert("Please Enter Value");
        return false;
    }
    return age > x;
}
// // Filter Array
// function FilterArray() {
//     document.getElementById("FilterArray").innerHTML = ages.filter(CheckAdults);
// }
// Find Array
function FindArray() {
    document.getElementById("FindArray").innerHTML = ages.find(CheckAdults);
    document.getElementById("FindArrayIndex").innerHTML = ages.findIndex(CheckAdults);
}

const data = [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" }
]

function FilterArray() {
    // const mapReturn = data.map(x => {
    //     return x
    // })
    const mapReturn = data.map(x => {
        x.name = "dsdsd"
        return x
    })
    console.log("map", mapReturn);

    // const ForeachReturn = data.map(x => {
    //     return x
    // })

    const ForeachReturn = data.forEach(function GetName(id, type) {
        return [id, type].join(" ")
    })
    console.log("Foreach", ForeachReturn);

    const ReduceReturn = Reducenumbers.reduce((total, num) => {
        return total - num;
    })
    console.log("Reduce", ReduceReturn);

    const reduceRightReturn = Reducenumbers.reduceRight((total, num) => {
        return total - num;
    })

    console.log("Reduce Right", reduceRightReturn);

    const everyReturn = ages.every(x => {
        return x > 10;
    })
    console.log("every Which Id greter than 5002", everyReturn);

    const FilterArray = data.filter(x => {
        return x.id > 5002;
    })
    console.log("FilterArray Which Id greter than 5002", FilterArray);

    const FindArrayReturn = data.find(x => {
        return x.id > 5002;
    })
    console.log("Find Array Index Which Id greter than 5002", FindArrayReturn);

    const FindArrayIndexReturn = data.findIndex(x => {
        return x.id > 5002;
    })
    console.log("Find Array Index Which Id greter than 5002", FindArrayIndexReturn);

    const SortReturn = data.sort(function (a, b) {
        return a.id - b.id;
    })
    console.log("Sort Array", SortReturn);

    
        console.log("Slice Array", cars.slice(0,2));
      //  console.log("Splice Array", cars.splice(2,0,"ritz"));
      cars.splice(2, 0, "ritz")
        console.log("Splice Array", cars);

        const SumReturn = Reducenumbers.reduce((total, num) => {
            return total + num;
        })
        console.log("Sum Of Numbers", SumReturn);

}

