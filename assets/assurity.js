AOS.init();

$('.last-updated').text("12 November 2021");

$(window).scroll(function () {
    var yvalue = $(this).scrollTop() * 0.1;
    $(".page-home #section-1").css("background-position","center " + yvalue + "px");

    if ($(window).width()>768) {
      $(".dropdown-menu").css('top', 50 + "px");
    }
    
});

$('.dropdown').hover(function() {
    $(this).addClass('show');
},
function() {
    $(this).removeClass('show');
});

if ($(window).width()>1600) {
  var masonryOptions = {
   columnWidth: 600,
   itemSelector: '.grid-item'
  };
}
else{
  var masonryOptions = {
   columnWidth: 500,
   itemSelector: '.grid-item'
  };
}

$(window).on("load", function() {
    var $grid1 = $('#tab1-content').masonry(masonryOptions);
    var $grid2 = $('#tab2-content').masonry(masonryOptions);
});


$('.partners-icons').slick({
	dots: false,
  	infinite: true,
  	slidesToShow: 5,
  	slidesToScroll: 1,
  	autoplay: true,
		autoplaySpeed: 2000,
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  	]
});

/* page join */
function displayAllJobs(){
  $('.job-item').removeClass('disnone');
}
function displaySelectedJobs(cases){
  $('.job-item').addClass('disnone');

  var jobsArr = cases.split("-");
  jobsArr.forEach((entry) => {
    $('#job-'+entry).removeClass('disnone');
  });
}
var jobsContainedInCategories = {cat1 : "2-3-4", 
                                cat2 : "1-6-7-8-9-11-12",
                                cat3 : "",
                                cat4 : "",
                                cat5 : "",
                                cat6 : "10"};
$('.page-join .filter-cat').click(function(){
  var catID = $(this).attr('id').replace("-", "");
  $('#dropdown-cat-label').text($(this).text());

  if(catID == 'cat0'){
    displayAllJobs();
  }
  else{
    var cases = jobsContainedInCategories[catID];
    displaySelectedJobs(cases);
  }
});

/* page testimonials */
function displayAllTestimonials(){
  $('.testimonial-box').removeClass('disnone');
}
function displaySelectedTestimonials(cases){
  $('.testimonial-box').addClass('disnone');

  var peopleArr = cases.split("-");
  peopleArr.forEach((entry) => {
    $('#testimonial-'+entry).removeClass('disnone');
  });
}
var peopleContainedInProducts = {product1 : "3-4-5", 
                                product2 : "1-2-3-4-5-6-7",
                                product3 : "1"};
var peopleContainedInProductsM = {fp1 : "3-4-5", 
                                fp2 : "1-2-3-4-5-6-7",
                                fp3 : "1"};
var peopleContainedInSectors = {sector1 : "5", 
                                sector2 : "2",
                                sector3 : "3",
                                sector4 : "4",
                                sector5 : "6",
                                sector6 : "1",
                                sector7 : "7" };
var peopleContainedInSectorsM = {fs1 : "5", 
                                fs2 : "2",
                                fs3 : "3",
                                fs4 : "4",
                                fs5 : "6",
                                fs6 : "1",
                                fs7 : "7" };
var peopleContainedInUseCase = {usecase1 : "3-4-5", 
                                usecase2 : "3-4-5",
                                usecase3 : "1-2-3-4-5-6-7",
                                usecase4 : "1-2-3-4-5-6-7",
                                usecase5 : "1",
                                usecase6 : "1" };
var peopleContainedInUseCaseM = {fuc1 : "3-4-5", 
                                fuc2 : "3-4-5",
                                fuc3 : "1-2-3-4-5-6-7",
                                fuc4 : "1-2-3-4-5-6-7",
                                fuc5 : "1",
                                fuc6 : "1" };

$('.page-testimonial .filter-product').click(function(){
  clearCSFilters();
  var productID = $(this).attr('id').replace("-", "");
  $('#dropdown-product-label').text($(this).text());

  if(productID == 'product0'){
    displayAllTestimonials();
  }
  else{
    var cases = peopleContainedInProducts[productID];
    displaySelectedTestimonials(cases);
  }
});
$('.page-testimonial .filter-sector').click(function(){
  clearCSFilters();
  var sectorID = $(this).attr('id').replace("-", "");
  $('#dropdown-sector-label').text($(this).text());

  if(sectorID == 'sector0'){
    displayAllTestimonials();
  }
  else{
    var cases = peopleContainedInSectors[sectorID];
    displaySelectedTestimonials(cases);
  }
});

$('.page-testimonial .filter-usecase').click(function(){
  clearCSFilters();
  var usecaseID = $(this).attr('id').replace("-", "");
  $('#dropdown-usecase-label').text($(this).text());

  if(usecaseID == 'usecase0'){
    displayAllTestimonials();
  }
  else{
    var cases = peopleContainedInUseCase[usecaseID];
    displaySelectedTestimonials(cases);
  }
});

/* use case filter mobile */
function removeFilterActiveT(){
  $('.filter-item-m').removeClass('active');
}
$('.filter-page-testimonial .f-p').click(function(){
  removeFilterActiveT();
  $('#filter-item-m-product').addClass('active');

  $( '.f-s' ).prop('checked', false);
  $( '.f-uc' ).prop('checked', false);

  var mProductID = $(this).attr('id').replace(/-/g, "");

  if(mProductID == 'fp0'){
    displayAllTestimonials();
  }
  else{
    var cases = peopleContainedInProductsM[mProductID];
    displaySelectedTestimonials(cases);
  }
});
$('.filter-page-testimonial .f-s').click(function(){
  removeFilterActiveT();
  $('#filter-item-m-sector').addClass('active');

  $( '.f-p' ).prop('checked', false);
  $( '.f-uc' ).prop('checked', false);

  var mSectorID = $(this).attr('id').replace(/-/g, "");

  if(mSectorID == 'fs0'){
    displayAllTestimonials();
  }
  else{
    var cases = peopleContainedInSectorsM[mSectorID];
    displaySelectedTestimonials(cases);
  }
});
$('.filter-page-testimonial .f-uc').click(function(){
  removeFilterActiveT();
  $('#filter-item-m-usecase').addClass('active');

  $( '.f-p' ).prop('checked', false);
  $( '.f-s' ).prop('checked', false);

  var mUsecaseID = $(this).attr('id').replace(/-/g, "");

  if(mUsecaseID == 'fuc0'){
    displayAllTestimonials();
  }
  else{
    var cases = peopleContainedInUseCaseM[mUsecaseID];
    displaySelectedTestimonials(cases);
  }
});


/* page case studies */
function displayAllCases(){
  $('.cs-menu-item').removeClass('disnone');
  $('.cs-video-item').removeClass('disnone');
}
function displaySelectedCases(cases){
  $('.cs-menu-item').addClass('disnone');
  $('.cs-video-item').addClass('disnone');

  var caseArr = cases.split("-");
  caseArr.forEach((entry) => {
    $('#cs-menu-'+entry).removeClass('disnone');
    $('#cs-video-'+entry).removeClass('disnone');
  });
}
function clearCSFilters(){
  $('#dropdown-product-label').text("Product");
  $('#dropdown-sector-label').text("Sector");
  $('#dropdown-usecase-label').text("Use-case");
} 

var caseContainedInProducts = {product1 : "1-3", 
                                product2 : "1-2-3",
                                product3 : "2-4" };
var caseContainedInProductsM = {fp1 : "1-3", 
                                fp2 : "1-2-3",
                                fp3 : "2-4" };
var caseContainedInSectors = {sector1 : "1", 
                                sector2 : "3",
                                sector3 : "4",
                                sector4 : "2" };
var caseContainedInSectorsM = {fs1 : "1", 
                                fs2 : "3",
                                fs3 : "4",
                                fs4 : "2" };                             
var caseContainedInUseCase = {usecase1 : "1-3", 
                                usecase2 : "1-3",
                                usecase3 : "1-2-3",
                                usecase4 : "1-2-3",
                                usecase5 : "2-4",
                                usecase6 : "2-4" };         
var caseContainedInUseCaseM = {fuc1 : "1-3", 
                                fuc2 : "1-3",
                                fuc3 : "1-2-3",
                                fuc4 : "1-2-3",
                                fuc5 : "2-4",
                                fuc6 : "2-4" };   


$('.page-cs .filter-product').click(function(){
  clearCSFilters();
  var productID = $(this).attr('id').replace("-", "");
  $('#dropdown-product-label').text($(this).text());

  if(productID == 'product0'){
    displayAllCases();
  }
  else{
    var cases = caseContainedInProducts[productID];
    displaySelectedCases(cases);
  }
});
$('.page-cs .filter-sector').click(function(){
  clearCSFilters();
  var sectorID = $(this).attr('id').replace("-", "");
  $('#dropdown-sector-label').text($(this).text());

  if(sectorID == 'sector0'){
    displayAllCases();
  }
  else{
    var cases = caseContainedInSectors[sectorID];
    displaySelectedCases(cases);
  }
});
$('.page-cs .filter-usecase').click(function(){
  clearCSFilters();
  var usecaseID = $(this).attr('id').replace("-", "");
  $('#dropdown-usecase-label').text($(this).text());

  if(usecaseID == 'usecase0'){
    displayAllCases();
  }
  else{
    var cases = caseContainedInUseCase[usecaseID];
    displaySelectedCases(cases);
  }
});


/* use case filter mobile */
$('.filter-page-cs .f-p').click(function(){
  removeFilterActiveT();
  $('#filter-item-m-product').addClass('active');

  $( '.f-s' ).prop('checked', false);
  $( '.f-uc' ).prop('checked', false);

  var mProductID = $(this).attr('id').replace(/-/g, "");

  if(mProductID == 'fp0'){
    displayAllCases();
  }
  else{
    var cases = caseContainedInProductsM[mProductID];
    displaySelectedCases(cases);
  }
});
$('.filter-page-cs .f-s').click(function(){
  removeFilterActiveT();
  $('#filter-item-m-sector').addClass('active');

  $( '.f-p' ).prop('checked', false);
  $( '.f-uc' ).prop('checked', false);

  var mSectorID = $(this).attr('id').replace(/-/g, "");

  if(mSectorID == 'fs0'){
    displayAllCases();
  }
  else{
    var cases = caseContainedInSectorsM[mSectorID];
    displaySelectedCases(cases);
  }
});
$('.filter-page-cs .f-uc').click(function(){
  removeFilterActiveT();
  $('#filter-item-m-usecase').addClass('active');

  $( '.f-p' ).prop('checked', false);
  $( '.f-s' ).prop('checked', false);

  var mUsecaseID = $(this).attr('id').replace(/-/g, "");

  if(mUsecaseID == 'fuc0'){
    displayAllCases();
  }
  else{
    var cases = caseContainedInUseCaseM[mUsecaseID];
    displaySelectedCases(cases);
  }
});

$('.filter-open-m').click(function(){
  $('.filter-popup-m').show();
});
$('.filter-close-m').click(function(){
  $('.filter-popup-m').hide();
});
$('.filter-button-m').click(function(){
  $('.filter-popup-m').hide();
});


var stopAllYouTubeVideos = () => { 
  var iframes = document.querySelectorAll('iframe');
  Array.prototype.forEach.call(iframes, iframe => { 
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
  func: 'pauseVideo' }), '*');
 });
}
function hidePrevCases(){
  $('.case-iframe').addClass('hide');
  $('.desc-item').addClass('hide');
  $('.case-indicator').removeClass('clicked');
  $('.case-iframe').delay(500).hide();

  stopAllYouTubeVideos();
}
$('.case-indicator').click(function(){
  var selectedID = $(this).attr('id').substr(-1);
  hidePrevCases();
  $('#case-'+selectedID).addClass('clicked');
  $('#case-iframe-'+selectedID).show();
  $('#case-iframe-'+selectedID).removeClass('hide');
  $('#desc-'+selectedID).removeClass('hide');
});

function disableAllCsMenu(){
  $('.cs-menu-item').removeClass('active');
}
$('.cs-menu-item').click(function(){
  var selectedID = $(this).attr('id').substr(-1);
  disableAllCsMenu();
  $(this).addClass('active');
  
  $(".cs-video").scrollTo('#cs-video-'+selectedID, 500);
});

$('#tab1').click(function(){
  $('#tab1').addClass('active');
  $('#tab2').removeClass('active');
  $('#tab1-content').show();
  $('#tab2-content').hide();

  $('#tab1-content').masonry({
    itemSelector: '.grid-item',
    columnWidth: 500
  });
}); 
$('#tab2').click(function(){
  $('#tab1').removeClass('active');
  $('#tab2').addClass('active');
  $('#tab1-content').hide();
  $('#tab2-content').show();

  $('#tab2-content').masonry({
    itemSelector: '.grid-item',
    columnWidth: 500
  });
}); 

if ($(window).width()>1024) {
  $('.video-wrapper').slick({
    dots: true,
    infinite: false,
      slidesToShow: 1,
      variableWidth: true,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
  });
}
window.addEventListener("orientationchange", function(event) {
  if ($(window).width()>833) {
    $('.video-wrapper').slick({
      dots: true,
      infinite: false,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });
  }
});

var defaultMemberDescHeight = 72;

$('.readmore').on("click", function(){
  var newHeight = 0;
  var idArr = $(this).attr('id').split("-");
  var member = $('#member-'+idArr[1]);
  var textHeight = member[0].scrollHeight;

  if (member.hasClass("extend")) {
    newHeight = defaultMemberDescHeight;
    member.removeClass("extend");
    $('#caret-'+idArr[1]).removeClass("extend");
    $('#read-'+idArr[1]).html($('#read-'+idArr[1]).html().replace('Read Less', 'Read More'));
  } else {
    newHeight = textHeight;
    member.addClass("extend");
    $('#caret-'+idArr[1]).addClass("extend");
    $('#read-'+idArr[1]).html($('#read-'+idArr[1]).html().replace('Read More', 'Read Less'));
  }
  member.animate({
    "max-height": newHeight
  }, 300, function() {
    $grid1 = $('#tab1-content').masonry(masonryOptions);
    $grid2 = $('#tab2-content').masonry(masonryOptions);
  });
});

var searchParams = new URLSearchParams(window.location.search);
var tagID = {"hassle_free" : "usecase1", 
            "government_sources" : "usecase2",
            "secure" : "usecase3",
            "mfa" : "usecase4",
            "high_assurance" : "usecase5",
            "no_more_meetups" : "usecase6"};

var tagText = {"hassle_free" : "Hassle-free form filling", 
            "government_sources" : "Data from government sources",
            "secure" : "Secure, paswordless login",
            "mfa" : "Multi-factor authentication",
            "high_assurance" : "High-assurance digital signatures",
            "no_more_meetups" : "No more meetups just to get signatures"};

var paramProductID = {"myinfo" : "product1", 
            "login" : "product2",
            "sign" : "product3"};

var paramProductText = {"myinfo" : "Myinfo", 
            "login" : "Login",
            "sign" : "Sign"};

if(searchParams.has('tag')){
  var tag = searchParams.get('tag');

  if(typeof tagID[tag] !== "undefined"){
    $('#dropdown-usecase-label').text(tagText[tag]);

    var cases = caseContainedInUseCase[tagID[tag]];
    displaySelectedCases(cases);
  }
}
if(searchParams.has('product')){
  var paramProduct = searchParams.get('product');

  if(typeof paramProductID[paramProduct] !== "undefined"){
    $('#dropdown-product-label').text(paramProductText[paramProduct]);

    var cases = caseContainedInProducts[paramProductID[paramProduct]];
    displaySelectedCases(cases);
  }
}