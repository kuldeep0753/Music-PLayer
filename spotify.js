let songIndex=0;
let audioElement=new Audio('assets/songs/1.mp3');
let myProgressBar = document.getElementById("myProgress");
let masterPlay =document.getElementById('masterPlay');
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"A",filePath:"assets/songs/1.mp3", coverPath:"assets/covers/1.jpg"},
    {songName:"B",filePath:"assets/songs/2.mp3", coverPath:"assets/covers/2.jpg"},
    {songName:"C",filePath:"assets/songs/3.mp3", coverPath:"assets/covers/3.jpg"},
    {songName:"D",filePath:"assets/songs/4.mp3", coverPath:"assets/covers/4.jpg"},
    {songName:"E",filePath:"assets/songs/5.mp3", coverPath:"assets/covers/5.jpg"},
    {songName:"F",filePath:"assets/songs/6.mp3", coverPath:"assets/covers/6.jpg"},
    {songName:"F",filePath:"assets/songs/7.mp3", coverPath:"assets/covers/6.jpg"},
    {songName:"F",filePath:"assets/songs/8.mp3", coverPath:"assets/covers/6.jpg"},
    {songName:"F",filePath:"assets/songs/9.mp3", coverPath:"assets/covers/6.jpg"},
    {songName:"F",filePath:"assets/songs/10.mp3", coverPath:"assets/covers/6.jpg"},

];

songItems.forEach((e,i)=>{
console.log(e,i);
e.getElementsByTagName('img')[0].src=songs[i].coverPath;
e.getElementsByClassName('song')[0].innerText=songs[i].songName;
});


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeUpdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`assets/songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;

    }
    else{
        songIndex+=1;
    }
    audioElement.src=`assets/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;

    }
    else{
        songIndex-=1;
    }
    audioElement.src=`assets/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
