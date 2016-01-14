$(document).ready(function(){
//Array Practice
  // var sibling = ["harry","karen"];
  // var parents = ["patricia","kevin"];
  // console.log(sibling.concat(parents);
  // sibling.push("lord summerisle");
  // console.log(sibling);
  // sibling.reverse();
  // console.log(sibling);
  // parents[0,1];
  // console.log(parents);
  // parents[1]='bob';
  // console.log(parents);


//Ice Cream Practice
// var flavors = ["vanilla","chocolate","strawberry","pistachio"];
//
//     flavors.forEach(function(flavor){
//       $("p").append("<li>" + flavor + "</li>");
//     });

//99 Bottles of Beer Practice
for (var i=99; i>=0; i--){
  var counter = i-1;
  if(i===0){
    $("p").append("We're out of beer!");
}else if (i===1) {
  $("p").append(i + " bottle of beer on the wall " + i + " bottle of beer. Take one down, pass it around, " + counter + " bottle of beer on the wall! ");
}
  $("p").append(i + " bottles of beer on the wall " + i + " bottles of beer. Take one down, pass it around, " + counter + " bottles of beer on the wall! ");
}

// 99 bottles of beer on the wall
// 99 bottles of beer
// take one down, pass it around
// 98  bottles of beer on the wall
});
