<%-- Woking Example At hirepi.com/Archived/Testing/navigation/navbar--%>

$(".menu-button-1").click(function(){$(".menu-container2").fadeOut(10,function(){$(".menu-container3").fadeOut(10,function(){$(".menu-container1").toggle(10,function(){$(".tab1").addClass('tab-background');});});});});$(".menu-button-2").click(function(){$(".menu-container1").fadeOut(10,function(){$(".menu-container3").fadeOut(10,function(){$(".menu-container2").toggle(10,function(){$(".tab1").addClass('tab-background');});});});});$(".menu-button-3").click(function(){$(".menu-container1").fadeOut(10,function(){$(".menu-container2").fadeOut(10,function(){$(".menu-container3").toggle(10);});});});$(".menu-button-1").click(function(){$(".tab1-content").fadeIn(10,function(){$(".tab1").addClass('tab-background'),$('.tab3').removeClass('tab-background'),$('.tab2').removeClass('tab-background');});});$(".menu-button-1").click(function(){$(".tab2-content").fadeOut(10,function(){$(".tab3-content").fadeOut(10);});});$(".menu-button-2").click(function(){$(".tab2-content").fadeOut(10,function(){$(".tab3-content").fadeOut(10);});});$(".menu-button-2").click(function(){$(".tab1-content").fadeIn(10,function(){$(".tab1").addClass('tab-background'),$('.tab3').removeClass('tab-background'),$('.tab2').removeClass('tab-background');});});$(".tab2").click(function(){$(".tab1-content").fadeOut(10,function(){$(".tab3-content").fadeOut(10,function(){$(".tab2-content").fadeIn(100);});});});$('.tab2').on('click',function(){$(this).addClass('tab-background'),$('.tab3').removeClass('tab-background'),$('.tab1').removeClass('tab-background');});$(".tab3").click(function(){$(".tab1-content").fadeOut(1,function(){$(".tab2-content").fadeOut(1,function(){$(".tab3-content").fadeIn(100);});});});$('.tab3').on('click',function(){$(this).addClass('tab-background'),$('.tab2').removeClass('tab-background'),$('.tab1').removeClass('tab-background');});$(".tab1").click(function(){$(".tab2-content").fadeOut(10,function(){$(".tab3-content").fadeOut(10,function(){$(".tab1-content").fadeIn(100);});});});$('.tab1').on('click',function(){$(this).addClass('tab-background'),$('.tab2').removeClass('tab-background'),$('.tab3').removeClass('tab-background');});


<%--
UnMinified Version

$( ".menu-button-1" ).click(function() {  
$( ".menu-container2" ).fadeOut(10,function() { 
$( ".menu-container3" ).fadeOut(10,function() { 
$( ".menu-container1" ).toggle( 10,
function() {
  $(".tab1").addClass('tab-background');
});});});});

$( ".menu-button-2" ).click(function() {   
$( ".menu-container1" ).fadeOut(10,function() { 
$( ".menu-container3" ).fadeOut(10,function() { 
$( ".menu-container2" ).toggle( 10,
function() {
  $(".tab1").addClass('tab-background');
});});});});

$( ".menu-button-3" ).click(function() {   
$( ".menu-container1" ).fadeOut(10,function() { 
$( ".menu-container2" ).fadeOut(10,function() { 
$( ".menu-container3" ).toggle( 10);
});});});

$( ".menu-button-1" ).click(function() { 
$( ".tab1-content" ).fadeIn( 10, function() { 
$(".tab1").addClass('tab-background'),
    $('.tab3').removeClass('tab-background'),
    $('.tab2').removeClass('tab-background');
});});

$( ".menu-button-1" ).click(function() { 
$( ".tab2-content" ).fadeOut( 10, function() { 
$( ".tab3-content" ).fadeOut( 10);
});});

$( ".menu-button-2" ).click(function() { 
$( ".tab2-content" ).fadeOut( 10, function() { 
$( ".tab3-content" ).fadeOut( 10);
});});

$( ".menu-button-2" ).click(function() { 
$( ".tab1-content" ).fadeIn( 10, function() { 
$(".tab1").addClass('tab-background'),
    $('.tab3').removeClass('tab-background'),
    $('.tab2').removeClass('tab-background');
});});

$( ".tab2" ).click(function() {       
$( ".tab1-content" ).fadeOut(10,
function() {       
$( ".tab3-content" ).fadeOut(10,
function() {
$( ".tab2-content" ).fadeIn(100);
});});});

$('.tab2').on('click', function(){
    $(this).addClass('tab-background'),
    $('.tab3').removeClass('tab-background'),
    $('.tab1').removeClass('tab-background');
});

$( ".tab3" ).click(function() {       
$( ".tab1-content" ).fadeOut(1,
function() {       
$( ".tab2-content" ).fadeOut(1,
function() {
$( ".tab3-content" ).fadeIn(100);
});});});

$('.tab3').on('click', function(){
    $(this).addClass('tab-background'),
    $('.tab2').removeClass('tab-background'),
    $('.tab1').removeClass('tab-background');
});

$( ".tab1" ).click(function() {       
$( ".tab2-content" ).fadeOut(10,
function() {       
$( ".tab3-content" ).fadeOut(10,
function() {
$( ".tab1-content" ).fadeIn(100);
});});});

$('.tab1').on('click', function(){
    $(this).addClass('tab-background'),
    $('.tab2').removeClass('tab-background'),
    $('.tab3').removeClass('tab-background');
});


--%>
