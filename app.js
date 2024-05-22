let article = ["The", "A", "An"];
let adjective = ["MostIncredible", "SimplyStunning", "Jiggly", "Rotund", "Surprising", "Excitable"];
let noun = ["Cyclist", "DoorKnob", "Buffalo", "Ostrich", "Anchovie", "Cookie"];
let extension = [".com", ".org", ".it", ".ie"];

// window.onload function generateDomain() {
    // function generateDomain(){
    // let randomArticle = article[(Math.floor(Math.random() * article.length))];
    // let randomAdjective = adjective[(Math.floor(Math.random() * adjcetive.length))];
    // let randomNoun = noun[(Math.floor(Math.random() * noun.length))];
    // let randomExtension = extension[(Math.floor(Math.random() * extension.length))];


    // return console.log(randomArticle + randomAdjective + randomNoun + randomExtension);
// }
// }

// generateDomain();

// document.getElementById("excuse").innerHTML = excuseGenerator();


function generateDomains(arr1, arr2, arr3, arr4){
    let domains = [];
    for (let i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            for (let k=0; k < arr3.length; k ++) {
                for (let l=0; l< arr4.length; l++) {
                    domains.push(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
                }
           }
        }
    }
    console.log(domains);
}
generateDomains(article,adjective,noun,extension);