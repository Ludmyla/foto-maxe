$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */


$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	$('.js-our-speakers').slick({
	  dots: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  dotsClass: 'slider-dots',
	  responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
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
	
	/* components */

});

// mobile hidden register form

$('.js-slide-toggle').click(function() {
  $( ".js-mobile-slide" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

// mask
	$('input[name=phone]').inputmask("+7(999) 999-999");


// translate config

var dict = {
  'about_conferention': {
    ru: 'О конференции',
    en: 'About conferention',
    ua: 'Про конференцію',
    ku: 'Der barê konferansê',
    nd: 'Over de conferentie'
  },
  'schedule': {
    ru: 'Вакансии',
    en: 'Vacancy',
    ua: 'Вакансії',
    ku: 'Pîlan',
    nd: 'Dienstregeling'
  },
  'speakers': {
    ru: 'Работники',
    en: 'Workers',
    ua: 'Працівники',
    ku: 'Axaftvanan',
    nd: 'Workers'
  },
  'prices': {
    ru: 'Цены',
    en: 'Prices',
    ua: 'Ціни',
    ku: 'Bihayên',
    nd: 'Prijzen'
  },
  'registration': {
    ru: 'Регистрация',
    en: 'Registration',
    ua: 'Реєстрація',
    ku: 'Qeydkirinê',
    nd: 'Registratie'
  },
  'selected_language': {
    ru: 'Русский',
    en: 'English',
    ua: 'Українська',
    ku: 'Kurdî',
    nd: 'Holendî'
  },
  'russian': {
    ru: 'Русский',
    en: 'Russian',
    ua: 'Російська',
    ku: 'Rûsyayê',
    nd: 'Russisch'
  },
   'english': {
    ru: 'Английский',
    en: 'English',
    ua: 'Англійська',
    ku: 'Îngilîzî',
    nd: 'Engels'
  },
   'kurdish': {
    ru: 'Курдская',
    en: 'Kurdish',
    ua: 'Курдська',
    ku: 'Kurdî',
    nd: 'Koerdisch'
  },
   'nederlands': {
    ru: 'Нидерланды',
    en: 'Dutch',
    ua: 'Нідерланди',
    ku: 'Holendî',
    nd: 'Nederlands'
  },
   'ukrainian': {
    ru: 'Украинский',
    en: 'Ukrainian',
    ua: 'Українська',
    ku: 'Ukrainian',
    nd: 'Oekraïens'
  },
  'title_1': {
    ru: '«Поиск работы за рубежом - реальные вакансии»',
    en: '"Job Search Abroad - Real Jobs"',
    ua: '«Пошук роботи за кордоном - реальні вакансії»',
    ku: '"Karê Xerîb - Xebatên Rastî"',
    nd: '"Jobbsøking i utlandet - Real Jobs"'
  },
   'title_2': {
    ru: 'Зарегистрируйся и получи работу уже завтра',
    en: 'Register and get your job tomorrow',
    ua: 'Зареєструйся і отримай роботу вже завтра',
    ku: 'Daxwazin û sibê xwe bistînin',
    nd: 'Registrer deg og få jobben i morgen'
  },
  'to_register': {
  	ru: 'Зарегистрироваться',
    en: 'To register',
    ua: 'Зареєструватися',
    ku: 'Ji bo qeydkirinê',
    nd: 'Om te registreren'
  },
  'our_speakers': {
  	ru: 'Наши работники',
    en: 'Our workers',
    ua: 'Наші працівнки',
    ku: 'Axaftvanên me',
    nd: 'Onze sprekers'
  },
  'our_vacancy': {
    ru: 'Наши вакансии',
    en: 'Our vacancy',
    ua: 'Наші вакансії',
    ku: 'Xwerûya me',
    nd: 'Vår ledig stilling'
  }
} 
var translator = $('body').translate({lang: "ru", t: dict});

$( '.language' ).click(function() {
	translator.lang(this.id);
});