$("#slider").roundSlider({
    sliderType: "min-range",
    width: 76,
    value: 18,
    lineCap: "round",
    circleShape: "pie",
    radius: 121,
    startAngle: 310,
    min: 1,
    handleSize: "+1",
    readOnly: true,
    disabled: true,
    mouseScrollAction: true,

    drag: function (args) {
        // handle the drag event here
    },
    change: function (args) {
        // handle the change event here
    }
});