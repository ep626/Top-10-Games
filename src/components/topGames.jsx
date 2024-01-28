import React from "react";
import "../App.css";

const Games = () => {
  return (
    <div className = "wrapper">
    <Card
      img="https://upload.wikimedia.org/wikipedia/en/5/51/Borderlands_2_cover_art.png"
      title="Borderlands 2"
      genre="Role Playing Game"
      link = "https://2k.com/en-US/game/borderlands-2/"
    />
    <Card
      img="https://wiki.cemu.info/images/thumb/9/98/COD_BO2.JPEG/295px-COD_BO2.JPEG"
      title="Call Of Duty: Black Ops 2"
      genre="First Person Shooter"
      link = "https://www.gamestop.com/video-games/products/call-of-duty-black-ops-ii---xbox-360/953080.html?utm_source=google&utm_medium=feeds&utm_campaign=%24PLA_%24NB_MNFR_Preowned+Software_Activision_HighCP&utm_id=18779561028&gad_source=4&gclid=CjwKCAiA8NKtBhBtEiwAq5aX2Ox0CmwFk5HybJZDOiNXrPIUyC24kt3AgmMX-grTiG3fw09rsb7anBoCxvkQAvD_BwE&gclsrc=aw.ds"
    />
    <Card
      img="https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg"
      title="MineCraft"
      genre="Creative"
      link = "https://www.minecraft.net/en-us/"
    />
    <Card
      img="https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg"
      title="Overwatch"
      genre="First Person Shooter"
      link = "https://playoverwatch.com/en-us/"
    />
    <Card
      img="https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg"
      title="Apex Legends"
      genre="First Person Shooter"
      link = "https://www.ea.com/games/apex-legends"
    />
    <Card
      img="https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-eeed32ae8de826070bdad6ab622d0018"
      title="Rocket League"
      genre="Driving/Racing"
      link = "https://www.rocketleague.com/"
    />
    <Card
      img="https://www.whatspaper.com/wp-content/uploads/2022/04/hd-fortnite-wallpaper-whatspaper-8.jpg"
      title="Fortnite"
      genre="Third Person Shooter"
      link = "https://www.epicgames.com/fortnite/en-US/home"
    />
    <Card
      img="https://cdn.dekudeals.com/images/39c52595f9a6cfc29d26ea41e9e0ac6e1aa5d2c5/w500.jpg"
      title="Super Smash Bros. Ultimate"
      genre="Fighting"
      link = "https://www.smashbros.com/en_US/"
    />
    <Card
      img="https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg"
      title="Biosock: Infinite"
      genre="First Person Shooter"
      link = "https://www.2k.com/en-US/game/bioshock-infinite/"
    />
    <Card
      img="https://media.gamestop.com/i/gamestop/10065517/Wii-Sports---Nintendo-Wii?$pdp2x$"
      title="Wii Sports"
      genre="Sports"
      link = "https://www.gamestop.com/video-games/wii/products/wii-sports---nintendo-wii/10065517.html"
    />
    </div>
  );
};

function Card (props) {
  return(
    <div className = "Card">
      <div className = "cardImage-container">
        <img src = {props.img} className = "card__img"/>
      </div>
      <div className = "card__body">
        <h2 className = "card__title">{props.title}</h2>
        <p className = "card__genre">{props.genre}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className="card__btn">View Game</button>
        </a>
      </div>
    </div>
  )
}

export default Games;
