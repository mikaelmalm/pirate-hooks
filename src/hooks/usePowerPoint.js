import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const KEYS = {
  DOWN: 40,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
};

const data = [
  {
    title: "Hooked on hooks",
    subTitle: "",
  },
  {
    title: "Disclamer",
    subTitle: "To keep my own back free from trouble",
  },
  {
    title: "What are hooks?",
    subTitle: "And why hoooks instead of classes?",
    items: [
      "Reuse stateful logic was hard",
      "Components often grew complex",
      "Classes in Javascript are confusing",
    ],
  },
  {
    title: "State management",
    subTitle: "",
    items: [
      "useState",
      "useReducer",
      "https://codesandbox.io/s/hooks-examples-6s661",
    ],
  },
  {
    title: "useEffect",
    subTitle: "Be effective with side effects",
    items: ["https://pirate.mikaelmalm.com/"],
  },
  {
    title: "The end",
    subTitle: "Questions?",
    items: [
      "https://reactjs.org/docs/hooks-state.html",
      "https://kentcdodds.com/",
    ],
  },
];

export const usePowerPoint = () => {
  const [slide, setSlide] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    parseInt(id) && setSlide({ ...data[id - 1], items: [] });
  }, [id]);

  useEffect(() => {
    const handleNext = () => {
      parseInt(id) !== data.length &&
        history.push(`/presentation/${parseInt(id) + 1}`);
    };

    const handlePrev = () => {
      parseInt(id) > 1 && history.push(`/presentation/${parseInt(id) - 1}`);
    };

    const addItem = () => {
      const itemsInView = data[id - 1].items;
      const slideItems = slide.items;

      if (itemsInView && slideItems && itemsInView.length > slideItems.length) {
        setSlide({
          ...slide,
          items: itemsInView.slice(0, slideItems.length + 1),
        });
      }
    };

    const removeItem = () => {
      const slideItems = slide && slide.items;

      slideItems &&
        slideItems.length > 0 &&
        setSlide((prevSlide) => ({
          ...prevSlide,
          items: prevSlide.items.slice(0, prevSlide.items.length - 1),
        }));
    };

    const handleKeyPress = (event) => {
      event.keyCode === KEYS.RIGHT && handleNext();
      event.keyCode === KEYS.LEFT && handlePrev();

      event.keyCode === KEYS.UP && removeItem();
      event.keyCode === KEYS.DOWN && addItem();
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [id, history, slide]);

  return slide ? slide : data[0];
};
