let songs = [
    {
        name: "HẾT THƯƠNG CẠN NHỚ",
        single: "Đức Phúc",
        image: "./assets/img/htcn.jpg",
        path: "./music/HẾT THƯƠNG CẠN NHỚ .mp3"
    },
    {
        name: "Bạn Đời",
        single: "KARIK - FT.GDUCKY",
        image: "./assets/img/bd.jpg",
        path: "./music/BẠN ĐỜI.mp3"
    },

    {
        name: "Lao Tâm Khổ Tứ",
        single: " Thanh Hưng",
        image: "./assets/img/ltkt.jfif",
        path: "./music/Lao Tâm Khổ Tứ .mp3"
    },
    {
        name: "Lớn Rồi còn Khoác nhè ",
        single: "Trúc Nhân",
        image: "./assets/img/lrckn.jfif",
        path: "./music/LỚN RỒI CÒN KHÓC NHÈ.mp3"
    },
    {
        name: "Thu Cuối",
        single: "Mr T x Yanbi x Hằng Bingboong",
        image: "./assets/img/tc.jpg",
        path: "./music/Thu Cuối.mp3"
    },
];

const audioElement = document.querySelector('#audio-player');
const ulElement = document.querySelector('.list-music');
const currentTime = document.querySelector('.current-time');
const musicTime = document.querySelector('.music-time');
const seekBar = document.querySelector('#seek-bar')
const volumeBar = document.querySelector('#volume-bar');
const btnBack = document.getElementsByTagName('button')[0];
const btnPlay = document.getElementsByTagName('button')[1];
const btnNext = document.getElementsByTagName('button')[2];

let currentSongIndex = 0;

function render(index) {
    document.querySelector('.title-play').textContent = songs[index].name;
    document.querySelector('#image-music').src = songs[index].image;
    document.querySelector('.single').textContent = songs[index].single;
}

function displayMusic() {
    render(currentSongIndex);
    songs.forEach((item, index) => {
        const liNew = document.createElement('li');
        liNew.innerHTML = `<b>${item.name}</b>`;
        liNew.addEventListener('click', () => {
            playSong(index);
            audioElement.play();
        });
        ulElement.appendChild(liNew);
    });
}

function playSong(index) {
    const allLi = document.querySelectorAll('.list-music li');
    allLi.forEach(li => li.classList.remove('active'));
    allLi[index].classList.add('active');
    currentSongIndex = index;
    audioElement.src = songs[index].path;
    render(index);

}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    return `${minutes}:${second < 10 ? '0' : ''}${second}`;
}
function autoNext() {
    audioElement.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(currentSongIndex);
        audioElement.play();
        updatePlayButton();
    });
}
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        currentTime.textContent = formatTime(audioElement.currentTime);
        musicTime.textContent = formatTime(audioElement.duration);
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        seekBar.value = progress;
    }
});


seekBar.addEventListener('input', () => {
    const duration = audioElement.duration;
    const seekTime = (seekBar.value / 100) * duration;
    audioElement.currentTime = seekTime;
});

volumeBar.addEventListener('input', function () {
    audioElement.volume = volumeBar.value / 100;
});

btnPlay.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        btnPlay.innerHTML = `<img src="./assets/pause.svg">`;

    } else {
        audioElement.pause();
        btnPlay.innerHTML = `<img src="./assets/play.svg">`;
    }
});

btnBack.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
    audioElement.play();
});

btnNext.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
    audioElement.play();

});

displayMusic();
playSong(currentSongIndex);
autoNext();


