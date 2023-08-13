let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

function isEmptyObj(obj) {
    let isEmpty = true;
    for (let key in obj){
        isEmpty = false;
    }
    return isEmpty;
}


  //(OBJ) => NUMBER
  function calSalaries (object) {
    // 1. Validate => แยก Service
   if (isEmptyObj(object)) return 0;
   //  2.Calculate
   let sum = 0;
   for(let key in object){
    //เข้าถึง value 
    // <obj>.<key>
    //<obj>.<key>
    console.log(object[key]); // object['age']
    sum += object[key];
   }

   return sum;

  }

  let total = calSalaries(salaries)
  console.log(total);

