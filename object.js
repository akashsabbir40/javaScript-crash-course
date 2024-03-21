// var myInformation = {
//     Name: 'Sabbir',
//     FathersName: 'Saiful Alam',
//     mothersName: 'Rokeya khanom'
// }
// console.log(myInformation.Name);

// var myInformation = {Name: 'Sabbir', FathersName: 'Saiful Alam', mothersName: 'Rokeya khanom'}

function MyInfo(Name, Village, PhoneNo){
    this.Name = Name;
    this.Village = Village;
    this.PhoneNo = PhoneNo;
    this.showMe = function(){
        console.log(this.Name);
        console.log(this.Village);
        console.log(this.PhoneNo);

    }
}
var NewObj = new MyInfo ('vhvjvhSabbir', 'nbvhvAlexander', 999098765432);
var NewObj1 = new MyInfo ('Sabbir', 'Alexander', 8888098765432);
NewObj.showMe();
console.log('----');
NewObj1.showMe();
