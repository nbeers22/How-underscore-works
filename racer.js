$(document).ready(function(){

	var arrayBeforeUniq = [1,1,2,2,3,3,4,4,5,5];
	var uniqArray = _.uniq(arrayBeforeUniq);
	var objectArray = [{name: "Bob",age:25},{name:"Tom",age:55},{name:"Sarah",age:14}];
	var objectArrayPlucked = _.pluck(objectArray,'age');

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
		
	});
});
