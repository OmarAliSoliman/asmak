$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      // rtl: currentDir == "rtl" ? true : false,
      arrows: false,
      fade: true,
      dots: true,
    });
  }

  if ($(".service-section-slider").length) {
    $(".service-section-slider").slick({
      rtl: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  // shows-item-section-slider

  if ($(".shows-item-section-slider").length) {
    $(".shows-item-section-slider").slick({
      rtl: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  if ($(".personal-img").length) {
    $(document).on("change", ".personal-img-file", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () {
          // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile
            .closest(".personal-img")
            .find(".per")
            .css("background-image", "url(" + this.result + ")");
          $(".personal-img-validation-delete").css("display", "block");
        };
      }
    });
  }

  if ($(".custom_input_file").length) {
    $("#inputfile").on("change", function (e) {
      let file_name = e.target.files[0].name;
      console.log(this.files[0].mozFullPath);
      // console.log(file_name)
      let catditem = $(this)
        .closest(".moda_images")
        .find(".card-img:last")
        .clone();
      // $(this).closest(".moda_images .images_file").append(catditem);
      $(catditem).insertBefore(".custom_input_file");
      $(catditem)
        .find(".img-parent img")
        .attr("src", `./assets/images/${file_name}`);
    });
  }

  $(".custom-navbar #nav-icon1").click(function () {
    $(".side-nav").addClass("side-nav-open");
    $("html").addClass("side-active");
  });

  if ($(".side-nav").length) {
    $(".side-nav .close-nav").click(function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".bg-side-open").length) {
    $(".bg-side-open").on("click", function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
      $(".profile-sidebar").removeClass('profile-sidebar-active');
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  if ($(".animate__animated").length) {
    new WOW().init();
  }

  if ($(".services-slider").length) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 4.5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3.5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }

  if($(".open-profile-sidebar").length){
    $(".open-profile-sidebar").click(function(){
      $(".profile-sidebar").addClass('profile-sidebar-active');
      $("html").addClass("side-active");
    })
  }

  if($(".profile-sidebar").length){
    $(".profile-sidebar .close-sidebar").click(function(){
      $(".profile-sidebar").removeClass('profile-sidebar-active');
      $("html").removeClass("side-active");
    })
  }

});

// if ($(".animation-debth").length) {
//   var circles = document.querySelector(".animation-debth");
//   var parallaxInstance = new Parallax(circles);
// }
// if ($(".animation-debth2").length) {
//   var circles = document.querySelector(".animation-debth2");
//   var parallaxInstance = new Parallax(circles);
// }

$(window).on("load", function () {
  $("html").removeClass("splash-active");
  $(".splash").addClass("splashscreen-none");
});
