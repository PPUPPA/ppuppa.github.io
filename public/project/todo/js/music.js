const musicList = [
  {
    music: "가자, 이 새벽이 끝나는 곳으로.",
    cite: "이름에게, IU",
    link: "https://music.youtube.com/watch?v=JSOBF_WhqEM&feature=share",
  },
  {
    music: "어제의 일들은 잊어. 누구나 조금씩은 틀려.",
    cite: "비밀의 화원, 이상은",
    link: "https://music.youtube.com/watch?v=hz6N5T9RCgQ&feature=share",
  },
  {
    music: "바로 이 하루, 이 지금.",
    cite: "이지금, IU",
    link: "https://music.youtube.com/watch?v=8ykMyNHAdKk&feature=share",
  },
  {
    music: "덮고, 그 위에 다시 얹고, 또 다시.",
    cite: "잼잼, IU",
    link: "https://music.youtube.com/watch?v=KWjDSRdIFgc&feature=share",
  },
  {
    music: "결국 언젠간 제일 어려운 숙제를 해야지.",
    cite: "마침표, IU",
    link: "https://music.youtube.com/watch?v=g-ytapKNCMM&feature=share",
  },
  {
    music: "누구나 비밀은 있는 거야.",
    cite: "누구에게나 비밀은 있다, IU",
    link: "https://music.youtube.com/watch?v=lD5STtoEGG4&feature=share",
  },
  {
    music: "Largo, Adagio, 조급해 말아요. 느린 템포로.",
    cite: "입술 사이, IU",
    link: "https://music.youtube.com/watch?v=sBVca5KOpkM&feature=share",
  },
  {
    music: "내 운명을 고르자면 눈을 감고 걸어도 맞는 길을 고르지.",
    cite: "분홍신, IU",
    link: "https://music.youtube.com/watch?v=C-Mxyvv0IDY&feature=share",
  },
  {
    music: "웃어요 활짝, 예뻐요 찰칵.",
    cite: "HAVANA, IU",
    link: "https://music.youtube.com/watch?v=7VacG7ySMM4&feature=share",
  },
  {
    music: "햇살이 얼핏 달콤한 귤빛.",
    cite: "HAVANA, IU",
    link: "https://music.youtube.com/watch?v=7VacG7ySMM4&feature=share",
  },
  {
    music: "한때란다, 한때야.",
    cite: "우울시계, IU",
    link: "https://music.youtube.com/watch?v=uZf9Q_SOzvY&feature=share",
  },
  {
    music: "다만 꺼지지 않는 작은 불빛이 여기 반짝 살아있어요.",
    cite: "마음, IU",
    link: "https://music.youtube.com/watch?v=he2C4lx63M0&feature=share",
  },
  {
    music: "요즘 날씨가 정말 좋네요. 아니래도 사실 알 게 뭐야.",
    cite: "크레파스, IU",
    link: "https://music.youtube.com/watch?v=XNtUcZbYsew&feature=share",
  },
  {
    music: "왼손으로 그린 별 하나.",
    cite: "Celebrity, IU",
    link: "https://music.youtube.com/watch?v=ZThVobEtp_o&feature=share",
  },
  {
    music: "별생각 없이 가볍게.",
    cite: "돌림노래, IU",
    link: "https://music.youtube.com/watch?v=hiUPJaHjuUk&feature=share",
  },
  {
    music: "어디에도 없지만 어느 곳에나 있겠죠.",
    cite: "Epilogue, IU",
    link: "https://music.youtube.com/watch?v=uAyZZLL3faY&feature=share",
  },
  {
    music: "Queen, Nicely done. My bad you lose.",
    cite: "Coin, IU",
    link: "https://music.youtube.com/watch?v=dk22oBpplKA&feature=share",
  },
  {
    music: "또다시 헤매일지라도 돌아오는 길을 알아.",
    cite: "아이와 나의 바다, IU",
    link: "https://music.youtube.com/watch?v=TqIAndOnd74&feature=share",
  },
  {
    music: "무슨 소리 겁이 나기는, 재밌지 뭐.",
    cite: "Ah puh, IU",
    link: "https://music.youtube.com/watch?v=7n9D8ZeOQv0&feature=share",
  },
  {
    music: "다음에 다시 만날 때까지 부디 행운을 빌어. 지겹게 보자고.",
    cite: "Ah puh, IU",
    link: "https://music.youtube.com/watch?v=7n9D8ZeOQv0&feature=share",
  },
];

const musicLink = document.querySelector("#music .music-link");
const music = document.querySelector("#music .music-text");
const cite = document.querySelector("#music .music-cite");
const todaysMusic = musicList[Math.floor(Math.random() * musicList.length)];

musicLink.href = todaysMusic.link;
music.innerText = todaysMusic.music;
cite.innerText = todaysMusic.cite;