! function(document, window, $) {
    "use strict";


    /*---- Carousel ----*/
    $("#owl-full").owlCarousel({
        navigation: true,
        slideSpeed: 400,
        paginationSpeed: 500,
        items: 1,
    });

    //Realtime Rickshaw Chart
    if ($('#rickshaw-realtime').length != 0) {

        (function() {

            var container = '#rickshaw-realtime';

            var seriesData = [
                [],
                [],
                []
            ];
            var random = new Rickshaw.Fixtures.RandomData(50);
            for (var i = 0; i < 50; i++) {
                random.addData(seriesData);
            }
            var graph = new Rickshaw.Graph({
                element: document.querySelector(container),
                height: 295,
                renderer: 'area',
                series: [{
                    data: seriesData[0],
                    color: 'rgb(8, 115, 128)', // change contextual color rgba(98, 84, 154, 0.3)
                    name: 'Traffic 1'
                }, {
                    data: seriesData[1],
                    color: 'rgba(8, 115, 128, 0.6)', // change contextual color
                    name: 'Traffic 2'
                }]
            });

            var y_axis = new Rickshaw.Graph.Axis.Y({
                graph: graph,
                orientation: 'right',
                tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
                element: document.getElementById('rickshaw-realtime_y_axis'),
            });

            var hoverDetail = new Rickshaw.Graph.HoverDetail({
                graph: graph
            });

            // Update the graph with realtime data
            setInterval(function() {
                random.removeData(seriesData);
                random.addData(seriesData);
                graph.update();
            }, 1000);

            $('.y_ticks text').css('fill', 'white'); //text color

            d3.selectAll('#rickshaw-realtime_y_axis .tick.major line').attr('x2', '9');
            d3.selectAll('#rickshaw-realtime_y_axis .tick.major text').attr('x', '14');

            $(window).resize(function() {
                graph.configure({
                    width: $(container).width(),
                    height: 295
                });
                graph.render()
            });

            $(container).data('chart', graph);

        })();

    }


    /*---- collapse ----*/
    $(".dashboard-collapse").click(function() {

        //        $collapse = $(this);
        $(this).closest(".content").find(".dashboard-box").slideToggle(500, function() {
            //            $collapse.child().find('.icon_minus-06').toggleClass("icon_minus-06 icon_plus");

        });

    });
    $(".dashboard-close").click(function() {
        $(this).closest(".content").hide();
        //        $(this).closest( ".content" )
    });

    /*---- CoolClock ----*/
    CoolClock.config.skins = {
        classic: {
            outerBorder: { lineWidth: 185, radius: 1, color: "#E5ECF9", alpha: 1 },
            smallIndicator: { lineWidth: 2, startAt: 89, endAt: 94, color: "#087380", alpha: 1 },
            largeIndicator: { lineWidth: 4, startAt: 83, endAt: 94, color: "#087380", alpha: 1 },
            hourHand: { lineWidth: 5, startAt: 0, endAt: 60, color: "#087380", alpha: 1 },
            minuteHand: { lineWidth: 4, startAt: 0, endAt: 80, color: "#087380", alpha: 1 },
            secondHand: { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: .85 },
            secondDecoration: { lineWidth: 3, startAt: 0, radius: 2, fillColor: "#087380", color: "#087380", alpha: 1 }
        }
    };

    /*---- Time-events ----*/
    var week_data = [
        { "period": "2011 W27", "licensed": 3400, "sorned": 650 },
        { "period": "2011 W26", "licensed": 3300, "sorned": 850 },
        { "period": "2011 W25", "licensed": 2900, "sorned": 200 },
        { "period": "2011 W24", "licensed": 2800, "sorned": 660 },
        { "period": "2011 W23", "licensed": 2700, "sorned": 660 },
        { "period": "2011 W22", "licensed": 2750, "sorned": 627 },
        { "period": "2011 W21", "licensed": 2800, "sorned": 660 },
        { "period": "2011 W20", "licensed": 2900, "sorned": 676 },
        { "period": "2011 W19", "licensed": 2950, "sorned": 656 },
        { "period": "2011 W18", "licensed": 3000, "sorned": 622 },
        { "period": "2011 W17", "licensed": 3100, "sorned": 632 },
        { "period": "2011 W16", "licensed": 3200, "sorned": 681 },
        { "period": "2011 W15", "licensed": 3250, "sorned": 667 },
        { "period": "2011 W14", "licensed": 3300, "sorned": 620 },
        { "period": "2011 W13", "licensed": 3400, "sorned": null },
        { "period": "2011 W12", "licensed": 3350, "sorned": null },
        { "period": "2011 W11", "licensed": 3300, "sorned": null },
        { "period": "2011 W10", "licensed": 3200, "sorned": null },
        { "period": "2011 W09", "licensed": 2950, "sorned": null },
        { "period": "2011 W08", "licensed": 2900, "sorned": null },
        { "period": "2011 W07", "licensed": 3000, "sorned": null },
        { "period": "2011 W06", "licensed": 3050, "sorned": null },
        { "period": "2011 W05", "licensed": 2900, "sorned": null },
        { "period": "2011 W04", "licensed": 2800, "sorned": null },
        { "period": "2011 W03", "licensed": 2500, "sorned": null },
        { "period": "2011 W02", "licensed": 1600, "sorned": null },
        { "period": "2011 W01", "licensed": 1500, "sorned": null }
    ];
    var timeevent = Morris.Line({
        element: 'time-events',
        data: week_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'SORN'],
        lineColors: ['#087380', '#c9302c'],
        events: [
            '2011-04',
            '2011-08'
        ],
        resize: true
    });

    /*---- Donut-color ----*/
    var donut = Morris.Donut({
        element: 'donut-color',
        data: [
            { value: 40, label: 'Mozilla firefox' },
            { value: 35, label: 'Google chrome' },
            { value: 25, label: 'Microsoft IE' },
        ],
        backgroundColor: '#ccc',
        labelColor: '#449d44',
        colors: ['#449d44', '#c9302c', '#ec971f'],
        resize: true,
        formatter: function(x) {
            return x + "%"
        }
    });

    var resizeEnd;
    $(window).on('resize', function() {
        clearTimeout(resizeEnd);
        resizeEnd = setTimeout(function() {
            $(window).trigger('resize-end');
        }, 2500);
    });

    $(window).on('resize-end', function() {
        timeevent.redraw();
        donut.redraw();
    });

}(document, window, jQuery);