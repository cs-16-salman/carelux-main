$(document).ready(function () {

    $('.popup-link').magnificPopup({
        type: 'image'
        // other options
    });
    $('.iframe-link').magnificPopup({
        type: 'iframe'
    });

    /**
 * Animation on scroll
 */

    // AOS.init({
    //     duration: 500,
    //     easing: "ease-in-out",
    //     once: true,
    //     mirror: false
    // });

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    $('.dropdown-toggle').dropdown();

    $("#home_slider").owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        autoplay: true,
        animateOut: "fadeOut",
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    $("#home_banner_slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dot: false,
        autoplay: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    $("#slider-card").owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        autoplay: false,
        URLhashListener: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    function homeSlider() {
        var circleSlider = $(".slider-image").length;

        if (circleSlider > 0) {
            var arryDeg = ["-47deg", "47deg", "135deg", "225deg"],
                counter = 0,
                timer = setInterval(function () {
                    $(".slider-content").removeClass("visibile");
                    changeTranform(arryDeg[counter]);
                    $(".slider-content:eq(" + counter + ")").addClass("visibile");

                    $(".slider-image").find("span.caption-text h2").removeClass("visibile");

                    $(".slider-image:eq(" + parseInt(counter + 0) + ")")
                        .find("span.caption-text h2")
                        .addClass("visibile");

                    counter++;

                    if (counter === arryDeg.length) {
                        counter = 0;
                        // clearInterval(timer);
                    }
                }, 5000);
        }
    }
    homeSlider();

    function changeTranform(degValue) {
        document.getElementById("box-circle").style.transform = "rotate(" + degValue + ")";
    }

    $(window).scroll(function () {
        var sticky = $("header"),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass("fixed");
        else sticky.removeClass("fixed");
    });

    function customAccordion() {
        $(".accordion-list > li > .answer").hide();
        $(".accordion-list > li").click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".answer").slideUp();
            } else {
                $(".accordion-list > li.active .answer").slideUp();
                $(".accordion-list > li.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
            }
            return false;
        });
    }
    customAccordion();

    $(document).on('change', '.input-select, .input-text', function () {
        $(this).removeClass('error-border');
    });

    $(document).on('submit', '#nurse_apply_form', function (e) {
        e.preventDefault();

        var flag = true;

        $('#nurse_apply_form .input-text').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        $('#nurse_apply_form .input-select').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        if (flag) {

            $('#nurse_apply_form .btn-submit').prop('disabled', true);
            $('#nurse_apply_form .btn-submit').text('Please Wait');

            $.ajax({
                url: "save-nurse-info.php",
                method: 'post',
                enctype: 'multipart/form-data',
                data: new FormData($(this)[0]),
                processData: false,
                contentType: false,
            }).then(function (data) {
                var res = JSON.parse(data);
                // $('#nurse_apply_form')[0].reset();
                ohSnap(res.msg, {
                    color: 'green'
                });
                location.href = "https://globalnurseforce.zohorecruit.com/forms/917562532c0f1d59d48d444c4c315964c99c774b13eda8048633141d885c300f";
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');

                // setTimeout(function() {
                //     location.reload();
                // }, 3000);

            }, function (error) {
                var err = JSON.parse(error.responseText);
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');
                ohSnap(err.msg, {
                    color: 'red'
                });
            })
        }

    });

    $(document).on('submit', '#enquire_form', function (e) {
        e.preventDefault();

        var flag = true;

        $('#enquire_form .input-text').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        $('#enquire_form .input-select').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        if (flag) {

            $('#enquire_form .btn-submit').prop('disabled', true);
            $('#enquire_form .btn-submit').text('Please Wait');

            $.ajax({
                url: "save-info.php",
                method: 'post',
                enctype: 'multipart/form-data',
                data: new FormData($(this)[0]),
                processData: false,
                contentType: false,
            }).then(function (data) {
                var res = JSON.parse(data);
                // $('#enquire_form')[0].reset();
                ohSnap(res.msg, {
                    color: 'green'
                });
                location.href = "https://globalnurseforce.zohorecruit.com/forms/917562532c0f1d59d48d444c4c315964c99c774b13eda8048633141d885c300f";
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');

                // setTimeout(function() {
                //     location.reload();
                // }, 3000);

            }, function (error) {
                var err = JSON.parse(error.responseText);
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');
                ohSnap(err.msg, {
                    color: 'red'
                });
            })
        }

    });

    $(document).on('submit', '#training_form', function (e) {
        e.preventDefault();

        var flag = true;

        $('#training_form .input-text').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        $('#training_form .input-select').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        if (flag) {

            $('#training_form .btn-submit').prop('disabled', true);
            $('#training_form .btn-submit').text('Please Wait');

            $.ajax({
                url: "save-training-info.php",
                method: 'post',
                enctype: 'multipart/form-data',
                data: new FormData($(this)[0]),
                processData: false,
                contentType: false,
            }).then(function (data) {
                var res = JSON.parse(data);
                // $('#training_form')[0].reset();
                ohSnap(res.msg, {
                    color: 'green'
                });
                location.href = "https://globalnurseforce.zohorecruit.com/forms/917562532c0f1d59d48d444c4c315964c99c774b13eda8048633141d885c300f";
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');

                // setTimeout(function() {
                //     location.reload();
                // }, 3000);

            }, function (error) {
                var err = JSON.parse(error.responseText);
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');
                ohSnap(err.msg, {
                    color: 'red'
                });
            })
        }

    });

    $(document).on('submit', '.mail_list_form1', function (e) {
        e.preventDefault();

        var flag = true;

        $('.mail_list_form1 .input-text').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        if (flag) {

            $('.mail_list_form1 .btn-submit').prop('disabled', true);
            $('.mail_list_form1 .btn-submit').text('Please Wait');

            $.ajax({
                url: "save-mail.php",
                method: 'post',
                enctype: 'multipart/form-data',
                data: new FormData($(this)[0]),
                processData: false,
                contentType: false,
            }).then(function (data) {
                var res = JSON.parse(data);
                // $('#training_form')[0].reset();
                ohSnap(res.msg, {
                    color: 'green'
                });
                location.href = "https://globalnurseforce.zohorecruit.com/forms/917562532c0f1d59d48d444c4c315964c99c774b13eda8048633141d885c300f";
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');

                // setTimeout(function() {
                //     location.reload();
                // }, 3000);

            }, function (error) {
                var err = JSON.parse(error.responseText);
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');
                ohSnap(err.msg, {
                    color: 'red'
                });
            })
        }

    });

    $(document).on('submit', '.mail_list_form2', function (e) {
        e.preventDefault();

        var flag = true;

        $('.mail_list_form2 .input-text').each(function () {
            if ($(this).val() == "" || $(this).val() == null) {
                $(this).addClass('error-border');
                flag = false;
            }
        });

        if (flag) {

            $('.mail_list_form2 .btn-submit').prop('disabled', true);
            $('.mail_list_form2 .btn-submit').text('Please Wait');

            $.ajax({
                url: "save-mail.php",
                method: 'post',
                enctype: 'multipart/form-data',
                data: new FormData($(this)[0]),
                processData: false,
                contentType: false,
            }).then(function (data) {
                var res = JSON.parse(data);
                // $('#training_form')[0].reset();
                ohSnap(res.msg, {
                    color: 'green'
                });
                location.href = "https://globalnurseforce.zohorecruit.com/forms/917562532c0f1d59d48d444c4c315964c99c774b13eda8048633141d885c300f";
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');

                // setTimeout(function() {
                //     location.reload();
                // }, 3000);

            }, function (error) {
                var err = JSON.parse(error.responseText);
                $('.btn-submit').prop('disabled', false);
                $('.btn-submit').text('Submit');
                ohSnap(err.msg, {
                    color: 'red'
                });
            })
        }

    });

});
