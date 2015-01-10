$(document).ready(function(){

	var arrayBeforeUniq = [1,1,2,2,3,3,4,4,5,5];
	var uniqArray = _.uniq(arrayBeforeUniq);
	var objectArray = [{name: "Bob",age:25},{name:"Tom",age:55},{name:"Sarah",age:14}];
	var objectArrayPlucked = _.pluck(objectArray,'age');
	var mappedArray = _(arrayBeforeUniq).map(function(num){return num * 10});

	// uniq
	$('#uniq-answer').text("[" + arrayBeforeUniq + "]");

	$('#uniq').on('click',function(){
		$('#uniq-answer').text("[" + uniqArray + "]");
	});

	$('#back').on('click',function(){
		$('#uniq-answer').text("[" + arrayBeforeUniq + "]");
	});

	//pluck
	// $('#pluck-answer').text("[" + objectArray + "]");

	$('#pluck').on('click',function(){
		$('#pluck-answer').text("[" + objectArrayPlucked + "]")
	});

	$('#unpluck').on('click',function(){
		$('#pluck-answer').text("[" + objectArray + "]")
	});

	//map
	$('#map-answer').text("[" + arrayBeforeUniq + "]")

	$('#map').on('click',function(){
		$('#map-answer').text("[" + mappedArray + "]")
	});

	$('#unmap').on('click',function(){
		$('#map-answer').text("[" + arrayBeforeUniq + "]")
	});
});
