function Time(name,city){

    this.name=name
    this.city=city

  this.show=function(){
        console.log(`O time ${this.name} é da cidade de ${this.city}`)
    }
}


function Match(TimeA,TimeB ){
    Time.call(this, TimeA.name, TimeA.city);
    this.TimeA = TimeA;
    this.TimeB = TimeB;
    console.log(`O ${this.TimeA.name} jogou contra o ${this.TimeB.name} na cidade de ${this.TimeA.city}`)
}
function Championship(timeName,starScore){
    this.starScore=starScore
    this.win=function(){
        this.starScore = starScore+3
        console.log(`O ${this.name} ganhou esta com ${this.starScore} pontos `)
    }
    this.draw=function(){
        this.starScore = starScore+1
        console.log(`O ${this.name} empatou esta com ${this.starScore} pontos `)
    }
    this.defeat=function(){
        console.log(`O ${this.name} perdeu esta com ${this.starScore} pontos `)
    }
    Time.call(this,timeName.name)
}

const TimeA= new Time('Cruzeiro',"BH")
const TimeB=new Time('Flamengo',"RJ")
const TimeC= new Time('Vasco','RJ')



TimeA.show()
new Match(TimeA,TimeB)
new Championship(TimeA,20).win()
new Championship(TimeB,20).draw()
new Championship(TimeC,20).defeat()

