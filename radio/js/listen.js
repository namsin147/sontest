$(document).ready(function(){

  var player=$('audio')[0];
  var playerSrc=['audio/박효신-겨울소리.mp3',
                 'audio/딘-instagram.mp3',
                 'audio/문문-비행운.mp3',
                 'audio/멜로망스-선물.mp3',
                 'audio/twice-heartshaker.mp3',
                 'audio/펀치-밤이되니까.mp3',
                 'audio/나얼-기억의빈자리.mp3',
                 'audio/민서-좋아.mp3',
                 'audio/윤종신-좋니.mp3',
                 'audio/레드벨벳-피카부.mp3'];
  var playIndex=0;
  var playListLength=playerSrc.length;
  var maxim=$('.progress').width();
  var progressBar=$('.progress');
  var progress=$('.progress > div');
  // 볼륨초기값
  player.volume=0.2;
  // 프로그레스바
    progressBar.on('click',function(e){
    var mouseX=e.pageX-progressBar.offset().left;
    var newtime=mouseX*player.duration/maxim;

    player.currentTime=newtime;
    var totalTime=parseInt(player.duration);
    var nowTime=parseInt(newtime);
    $('#time').text(timer(nowTime)+' / '+timer(totalTime));
    progress.css('width',mouseX+'px');
  })

  $('#btn-play-pause, video').on('click',function(){
    if(player.paused){
      player.play();
      $('#btn-play-pause i').text('pause');
      // progressloop=setInterval(progressState,10);
    }else{
      player.pause();
      $('#btn-play-pause i').text('play_arrow');
      // clearInterval(progressloop);
    }
  })

  $('#btn-prev, #btn-next').on('click',function(){
    if($(this).attr('id')=='btn-next'){
      playIndex++;
      if(playIndex == playListLength) playIndex=0;
    }else{
      playIndex--;
      if(playIndex < 0) playIndex=playListLength-1;
    }
    $('source').attr('src',playerSrc[playIndex]);

    player.load();

    player.play();
    $('#btn-play-pause i').text('pause');
  })
  
  $('.btn-repeat').click(function(){
    
  })
  
})
