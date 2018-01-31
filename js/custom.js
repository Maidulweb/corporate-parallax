$('.parallax-header').parallax({imageSrc: 'img/corporate-slider2.jpg'});
$('.parallax-corporate').parallax({imageSrc: 'img/kolo.jpg'});
$('.parallax-testimonial').parallax({imageSrc: 'img/corporate-slider3.jpg'});
$('.parallax-news').parallax({imageSrc: 'img/4321.jpg'});
$('.parallax-client').parallax({imageSrc: 'img/corporate-slider1.jpg'});
/*menu fixed*/
/*window.onscroll = function() {myFunction()};

var corporate_sticky = document.getElementById("corporate_sticky");
var sticky = corporate_sticky.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    corporate_sticky.classList.add("sticky")
  } else {
    corporate_sticky.classList.remove("sticky");
  }
}*/

/*menu responsive*/
$('.menu_responsive').on('click', function(){
  $('.ok').toggleClass('open');
});

/*menu active*/

  $('.menu ul li').on('click',function(all){
  $('.menu ul li').removeClass('menu_current');
  $(this).addClass('menu_current');
});

/*typewritter effect*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


/*testimonial_slider*/


$('#carouselE').carousel({
 
  interval: 6000,
  pause: "null",
})


/*team slider*/
$('#carouselTeam').carousel({
 
  interval: 6000,
  pause: "null",
})
/*portfolio*/

$('.portfolio_button').click(function(){
  var value = $(this).attr('data-filter');
  if(value == 'all'){
    $('.portfolio_filter').show('1000');
  }else{
         $('.portfolio_filter').not("."+value).hide('1000');
         $('.portfolio_filter').filter("."+value).show('1000');
  }
});

/*portfolio active*/
  $('.portfolio ul li').on('click',function(all){
  $('.portfolio ul li').removeClass('portfolio_current');
  $(this).addClass('portfolio_current');
});

$('.timer').countTo();

