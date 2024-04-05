function Lala(tytul, author, rok) {
    this.tytul = tytul;
    this.author = author;
    this.rok = rok;
   }

const book1 = new Lala("Bukvar", "Rostik Yaremko", 1998);
function func(box) {
    console.log (box.tytul + "-" + box.author + `(${box.rok})`)
    };
func(book1)

function student(name,lastname,na,matma,wf,infa){
    this.name = name
    this.lastname = lastname
    this.na = na
    this.matma = matma
    this.wf = wf
    this.infa = infa
}
const bla = new student("Rotik","Yaremko","w69958",5,5,5);

function display(boxx){
    const sr = boxx.matma + boxx.wf + boxx.infa 
    console.log(boxx.name + " " + boxx.lastname + " " + boxx.na + " " + boxx.matma + " " + boxx.wf + " " + boxx.infa)
    console.log("srednia = ",sr / 3 );
}
display(bla)

function Car(marka,model,rok,kolor,predkos){
    this.marka = marka
    this.model = model
    this.rok = rok
    this.kolor = kolor
    this.predkos = predkos
    this.up = function(up){
        const speed = this.predkos + up
        return speed
    }
      this.down = function(up){
        const speed = this.predkos - up
        return speed
    }
    this.age1 = function(age){
        const how = 2024 - this.rok
        return how
    }
}

const out = new Car("Ford","mustang",2006,"czarny", 100);

function display(dis){
    console.log(dis.marka + " " + dis.model + " " + `(${dis.rok})` + " " + "Kolor:"+ dis.kolor + " " + "Prednkosc:" + dis.predkos)
}
display(out)
console.log(out.up(100));
console.log(out.down(80));
console.log(out.age1())
