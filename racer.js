var array = [1,2,2,3,9,8,7,4,4,22,44,44];
var uniqArray = _.uniq(array)

$('#answer').text(array);

$('#click').on('click',function(){
	$('#answer').text(uniqArray);
});

$('#back').on('click',function(){
	$('#answer').text(array);
});

