import Image from "next/image";
import { relative } from "path";
import { useEffect, useRef, useState } from "react";

interface Props{
  length?: number;
  map?: any;
  protein?: boolean;
  weight?: number;
  text?: Text;
  time: number;
  items: any;
  titleBackgroundColor?: any;
  priceBackgroundColor?: any;
}

const Carousel = (props: Props) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const {time, items} = props;
  const interval = time; // Interval in milliseconds
  

  useEffect(() => {
    const animationDuration = interval; // Adjust the multiplier as per your preference

    const animationStyle = document.createElement('style');
    animationStyle.innerHTML = `
      @keyframes fade {
        0% {
          opacity: 0;
          transform: translateX(0);
        }
        15% {
          opacity: 1;
        }
        40% {
        }
        60% {
        }
        85% {
          opacity: 1;
        }
        92%{
          transform: translateX(0%)
        }
        100% {
          opacity: 0;
          transform: translateX(-100%)
        }
      }

      @keyframes imageMove {
        0%{transform: translateX(0) scale(0.8);}
        15%{transform: translateX(0) scale(1) rotate(-1.2deg);}
        40%{transform: scale(0.96) rotate(1.2deg);}
        60%{transform: scale(1.0) rotate(-0.5deg);}
        85%{transform: translateX(0%) scale(0.98) rotate(0.5deg);}
        100%{transform: translateX(-100%) scale(1) rotate(0);}
      }

      .productImages {
        animation: imageMove ${animationDuration}ms ease-in-out;
      }

      .item {
        animation: fade ${animationDuration}ms ease-in-out;
      }
    `;

    document.head.appendChild(animationStyle);

    const carouselInterval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => {
      clearInterval(carouselInterval);
      document.head.removeChild(animationStyle);
    };
  }, [items, interval]);

  return (
    <div className="container">
      {items.map((item: any, index: any) => (
        <div
          key={index}
          className={`item ${currentItemIndex === index ? "active" : "hidden"}`}
        >
          <div className="title-container">
            <h1 className="title" style={{background: item.titleBackgroundColor}}>{item.productName}</h1>
          </div>
          
          <Image src={`/images/${item.productPicture}`} alt="" width={500} height={500} className='productImages'/>
          <div className='variants'>
            {item.variants != null ? (
              item.variants.map((variant: any, variantIndex: number) => (
                <p key={variantIndex}>{variant}</p>
              ))) : "2"}
          </div>
          {item.salePrice != null ? (<div className="price" style={{background: item.titleBackgroundColor}}><div className="oldPrice">SALE!</div><div className="newPrice"><div className="replacedPrice" style={{position: "absolute", width: '100%'}}>{item.productPrice}€</div> {item.salePrice}€</div></div>
          ) : (
          <div className="onePrice" style={{background: item.titleBackgroundColor}}>{item.productPrice}€</div>)}
          {item.protein === true ? (item.salePrice != null ? (<div className="weightPrice"><div>{(10*item.salePrice/item.weight).toFixed(2)}€ /kg</div></div>) : (<div className="weightPrice"><div>{(10*item.productPrice/item.weight).toFixed(2)}€ /kg</div></div>)) : (<div className="weightPrice"><div>{item.text}</div></div>)}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
