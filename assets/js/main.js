$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }



  // shows-item-section-slider

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

  $(".mynavbar #nav-icon1").click(function () {
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
      $(".profile-sidebar").removeClass("profile-sidebar-active");
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  }

  if ($(".animate__animated").length) {
    new WOW().init();
  }

  if ($(".open-profile-sidebar").length) {
    $(".open-profile-sidebar").click(function () {
      $(".profile-sidebar").addClass("profile-sidebar-active");
      $("html").addClass("side-active");
    });
  }

  if ($(".profile-sidebar").length) {
    $(".profile-sidebar .close-sidebar").click(function () {
      $(".profile-sidebar").removeClass("profile-sidebar-active");
      $("html").removeClass("side-active");
    });
  }
});

if ($("#phone").lenght) {
  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["sa"],
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
}

var inputs = document.querySelectorAll(".file-input");

for (var i = 0, len = inputs.length; i < len; i++) {
  customInput(inputs[i]);
}

function customInput(el) {
  const fileInput = el.querySelector('[type="file"]');
  const label = el.querySelector("[data-js-label]");

  fileInput.onchange = fileInput.onmouseout = function () {
    if (!fileInput.value) return;

    var value = fileInput.value.replace(/^.*[\\\/]/, "");
    el.className += " -chosen";
    label.innerText = value;
  };
}


$(window).on("load", function () {
  $("html").removeClass("splash-active");
  $(".splash").addClass("splashscreen-none");
});
