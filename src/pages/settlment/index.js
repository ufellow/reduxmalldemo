import React, {Component} from 'react';
class Settlment extends Component{
    render(){
        return(
            <div></div>
        );
    }
    * countryGenerator(){
        yield console.log('中国');
        yield console.log('美国');
        yield console.log('俄罗斯');
    }
    * foo(x) {
        var y = 2 * (yield (x + 1));
        var z = yield (y / 3);
        return (x + y + z);
      }
    
    componentDidMount(){
        const country = this.countryGenerator();
        setTimeout(()=>{
            country.next();
        },3000)
        var myIterable = {};
        myIterable[Symbol.iterator] = function* (){
            yield 1;
            yield 2;
            yield 3;
        };        
        console.log([...myIterable]);
        var g = this.foo(5);
        console.log(g.next())  //yield 5+1
        console.log(g.next(12)) //yield (2*12)/3
        console.log(g.next(13)) //yield x=5, y=24, z= 13   13+5+24=42
        class Students{                
            constructor(){
                this.name = 'nihao';
                this.age = 13
            }
            setStudent(name,age){
                this.name = name;
                this.age = age
            }
            getStudent(){
                return( {'name': this.name,
                'age': this.age})                 
            }
        }
        let student = new Students();
        console.log(student.getStudent())
        student.setStudent('jing',0)
        console.log(student.getStudent())
    }
}

export default Settlment;