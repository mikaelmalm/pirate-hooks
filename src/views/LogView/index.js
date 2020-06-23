import React, { useEffect } from "react";
import "./index.scss";
import { Title, Nav } from "components";

const LogView = () => {
  useEffect(() => {
    // Check if someone tries to read all the content
    // They will have to walk the plank for that!
    const scrollWarning = () => {
      console.warn("SOMEONE IS TRYING TO SCROLL PAST US, ALL MEN ONBOARD");
    };

    document.addEventListener("scroll", scrollWarning);
  }, []);

  return (
    <div className="LogView">
      <Nav name="Captain" />
      <div className="content">
        <Title>Captains log</Title>
        <p>
          My love for the sea is like no other, drinking alcohol-free rum,
          dancing under the stars. What more could one ask for?
        </p>
        <p>
          I remember being a little pirate lad, my only friend was a parrot, and
          my knife. I made it though, with hard word and dedication, I finally
          am the captain of my own ship
        </p>

        <h3>Day IIV</h3>
        <p>
          I saw a bird flying over the ship with a spoon it had stolen from us,
          at start I was mad, but then i thought "hey, that bird is a pirate
          like us, taking what it wants" and I forgave him
        </p>
        <p>
          Forgivness is very powerful, on this ship, we are all really
          supporting of eachother
        </p>

        <h3>Day IV</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>

        <h3>Day V</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quos
          possimus quo dicta neque natus eligendi rem veniam provident ducimus
          delectus sint itaque architecto ratione illum officiis aut, est
          labore.
        </p>
        <h3>Final note</h3>

        <p>
          To be honest, there is no more treassures to be found in my life, my
          crew is the biggest treassure there is! I feel sad that I decive them
          to hunt treassure with me all over the world, but that is their world,
          just as they are my world
        </p>

        <p>Btw, if you are reading this, it is the plank for you!!!!</p>
      </div>
    </div>
  );
};

export default LogView;
