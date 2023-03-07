const imgBank = ['https://media3.giphy.com/media/LXiaRdS0bHp5E1cOIH/giphy.gif?cid=ecf05e47j6mtjl63am393r3ax0lmobdyjl4z9tvsf8wazhuy&rid=giphy.gif&ct=g.gif', 'https://media3.giphy.com/media/l1J9COnlFRcnkIn8Q/giphy.webp?cid=ecf05e47g6p7ubdn04kut564eymnd2286gqkncdav2pu90cp&rid=giphy.webp&ct=g', 'https://media1.giphy.com/media/vX9WcCiWwUF7G/giphy.gif?cid=ecf05e47p72wa5t3ih53sfikoj2um44ywgmxhj3db6l7t3nh&rid=giphy.gif&ct=g', 'https://media.giphy.com/media/RGS48UYaQv4MW6SY1H/giphy.gif', 'https://media3.giphy.com/media/SbN0WomN4S7Z7tpKOC/giphy.gif?cid=ecf05e47bxx4g23k2jilrrmtwtnikxudmxbbmjlyv7pb2ciw&rid=giphy.gif&ct=g', 'https://media.giphy.com/media/hkAXIjfARXU3K/giphy.gif', 'https://media.giphy.com/media/4NcWXIu0VOgtNeynJ1/giphy.gif', 'https://media.giphy.com/media/xUPGcl3ijl0vAEyIDK/giphy.gif', 'https://media.giphy.com/media/nZJYTigoPVyefVSL1k/giphy.gif', 'https://media.giphy.com/media/rInIhIS9AYCrojSh3v/giphy.gif', 'https://media.giphy.com/media/TUQo7EfCWNi3UBxGxk/giphy.gif', 'https://media.giphy.com/media/l2YWF2KwMDc5JVurm/giphy.gif', 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif', 'https://media.giphy.com/media/FXLYq0PyRTZJe/giphy.gif', 'https://media.giphy.com/media/UoS3N8Hv1kyKF3IrEA/giphy.gif', 'https://media.giphy.com/media/S4BDGxHKIB6nW9PiyA/giphy.gif'];

const pickImg = () => {
    let index = Math.floor(Math.random() * imgBank.length);
    return index;
};

const defineCss = () => {
    return `<style>
        img {
            width: 40%; 
            height: auto;
            border-radius: 15px;
        }

        .content {
            display: flex;
            justify-content: center;
            margin: 5% auto;
        }

        </style>`
}

const defineHtml = () => {
    return `<div class="content">
        <img src="${imgBank[pickImg()]}" alt="back to work!!"></img>
    </div>`
}

const blockedUrls = ['twitter.com', 'www.facebook.com', 'www.youtube.com', 'www.instagram.com', 'www.pinterest.com', 'www.reddit.com', 'www.tiktok.com', 'www.netflix.com', 'www.hulu.com', 'www.disneyplus.com', 'play.hbomax.com'];
const set = new Set(blockedUrls)


if(set.has(window.location.hostname)){
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHtml();
}

pickImg();