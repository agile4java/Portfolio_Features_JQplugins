const callback = o => {
	var pct = Math.round(o.percent)+'%';
	$('#percentage').html(pct);
};

$('#myslider_1').sGlide({
	height		: 10,
	image		: 'images/knob.png',
	startAt		: 70,
	colorShift	: ['#3a4d31', '#7bb560'],
	buttons		: true,
	drag		: callback,
	onButton	: callback
});

$('#myslider_2').on('sGlide.ready', function(e, data){
	$(this).sGlide('startAt', 66.66);
	$('#container').css('visibility', 'visible');
}).sGlide({
	startAt	: 38,
	pill	: false,
	width	: 60,
	snap	: {
		points	: 4,
		markers	: true
	}
});

$('#myslider_3').sGlide({
	startAt	: 50,
	height	: 20,
	disabled: true,
	noHandle: true
});

// dynamically update
$('#myslider_3').sGlide(
	'startAt',
	input_value,	// Number, percent
	true			// animate
);

$('#myslider_4').sGlide({
	startAt	: 33.33,
	width	: 300,
	unit	: 'px',
	snap	: {
		points	: 5,
		markers	: true,
		type	: 'soft'
	},
	vertical: true,
	noHandle: true
});