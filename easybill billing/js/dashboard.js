const ctx =
document.getElementById('chart');

new Chart(ctx, {
type:'bar',

data:{
labels:[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun'
],

datasets:[{
label:'Revenue',

data:[
12000,
18000,
22000,
25000,
27000,
32000
]
}]
}
});