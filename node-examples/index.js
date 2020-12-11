var rect = require('./rectangle')

function solveRect(l,b){
    console.log("solving rectangle area and peremiter with x="+l+"and y =" +b);
    rect(l, b, (err, rectangle) => {
        if(err){
             console.log("ERROR:" + err.message);
        }
        else{
            console.log("area of  = "+ rectangle.area());
            console.log("peremiter = "+ rectangle.perimeter());
        }

    });
    console.log("This statment after the area and peremiter statment")
}


solveRect(2,4);
solveRect(5.5,10);
solveRect(6.7,12);