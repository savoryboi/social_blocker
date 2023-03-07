const imgBank = ['https://media3.giphy.com/media/LXiaRdS0bHp5E1cOIH/giphy.gif?cid=ecf05e47j6mtjl63am393r3ax0lmobdyjl4z9tvsf8wazhuy&rid=giphy.gif&ct=g.gif', 'https://media3.giphy.com/media/l1J9COnlFRcnkIn8Q/giphy.webp?cid=ecf05e47g6p7ubdn04kut564eymnd2286gqkncdav2pu90cp&rid=giphy.webp&ct=g', 'https://media1.giphy.com/media/vX9WcCiWwUF7G/giphy.gif?cid=ecf05e47p72wa5t3ih53sfikoj2um44ywgmxhj3db6l7t3nh&rid=giphy.gif&ct=g', 'https://giphy.com/gifs/dollyparton-dolly-parton-fVEMVRX0AS4wVrOAUc', 'https://media3.giphy.com/media/SbN0WomN4S7Z7tpKOC/giphy.gif?cid=ecf05e47bxx4g23k2jilrrmtwtnikxudmxbbmjlyv7pb2ciw&rid=giphy.gif&ct=g'];

const pickImg = () => {
    let index = Math.floor(Math.random() * imgBank.length);
    console.log(index)
    return index;
};

const defineCss = () => {
    return `<style>
        img {
            width: 40%; 
            height: auto;
        }

        .content {
            display: flex;
            justify-content: center;
            margin: 20% auto;
        }

        </style>`
}

const defineHtml = () => {
    return `<div class="content">
        <img src="${imgBank[pickImg()]}" alt="back to work!!"></img>
    </div>`
}

const blockedUrls = ['twitter.com', 'www.facebook.com', 'www.youtube.com', 'www.instagram.com'];
const set = new Set(blockedUrls)


if(set.has(window.location.hostname)){
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHtml();
}


pickImg();