const state1 = { username: 'john', point: 100, loading: true };

// let state2 = Object.assign({},state1);

// state2.loading = false;
// state2.point = 75;
// state2.success = true;

// console.log(state2)


const state2 = Object.assign({},state1,{loading:false, point:75},{success:true})
console.log(state2)