import React from 'react';
import './style.css';

export default function App() {
  // const scrollTo = (el) => {
  //   const elLeft = el.offsetLeft + el.offsetWidth;
  //   const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

  //   // check if element not in view
  //   if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
  //     el.parentNode.scrollLeft = elLeft - elParentLeft;
  //   } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
  //     el.parentNode.scrollLeft = el.offsetLeft - el.parentNode.offsetLeft;
  //   }
  // }

  const scrollLeft = () => {
    const scrollerContainer = document.getElementById('parent');
    const scrollerContainerWidth = scrollerContainer?.offsetWidth;
    const scrollLeft = scrollerContainer?.scrollLeft;
    const childrenArray = scrollerContainer.children;
    debugger;
    const findElement = () => {
      for (let i = 0; i < childrenArray.length; i++) {
        const child = scrollerContainer.children[i];
        // const child = scrollerContainer.children[i].getAttribute('id');
        const elLeft = child.offsetLeft + child.offsetWidth;
        if (scrollerContainer.offsetLeft + scrollerContainerWidth + scrollLeft  < elLeft) {
          return child;
        }
      }
    };
    const elementToScroll = findElement();
    elementToScroll.style.backgroundColor = 'yellow';
    setTimeout(() => {
      elementToScroll.style.backgroundColor = 'white';
      scrollerContainer.scrollLeft =
        elementToScroll?.offsetLeft - scrollerContainer.offsetLeft;
    }, 1000);
  };
  // origninal
  // const scrollLeft = () => {
  //   const scrollerContainer = document.getElementById('parent');
  //   const scrollerContainerWidth = scrollerContainer?.offsetWidth;
  //   const scrollLeft = scrollerContainer?.scrollLeft;
  //   const childrenArray = scrollerContainer.children;
  //   debugger;
  //   const findElement = () => {
  //     for (let i = 0; i < childrenArray.length; i++) {
  //       const child = scrollerContainer.children[i];
  //       // const child = scrollerContainer.children[i].getAttribute('id');
  //       const elLeft = child.offsetLeft + child.offsetWidth;
  //       if (scrollLeft + scrollerContainerWidth < elLeft) {
  //         return child;
  //       }
  //     }
  //   };
  //   const elementToScroll = findElement();
  //   elementToScroll.style.backgroundColor = 'yellow';
  //   setTimeout(() => {
  //     elementToScroll.style.backgroundColor = 'white';
  //     scrollerContainer.scrollLeft =
  //       elementToScroll?.offsetLeft - scrollerContainer.offsetLeft;
  //   }, 1000);
  // };

  const scrollRight = () => {
    const scrollerContainer = document.getElementById('parent');
    const scrollerContainerWidth = scrollerContainer?.offsetWidth;
    const scrollLeft = scrollerContainer?.scrollLeft;
    let scrollPosition = scrollLeft + scrollerContainer.offsetLeft;
    const childrenArray = scrollerContainer.children;
    debugger;
    const findElement = () => {
      for (let i = childrenArray.length - 1; i >= 0; i--) {
        const child = scrollerContainer.children[i];
        const elOffsetLeft = child.offsetLeft;
        if (scrollPosition > elOffsetLeft) {
          return child;
        }
      }
    };
    const elementToScroll = findElement(); // element To Scroll to the Right end of sliding window
    const elementRightOffset =
      elementToScroll.offsetLeft + elementToScroll.offsetWidth;
    const scroll_elementRightOffset_diff = elementRightOffset - scrollPosition;
    scrollPosition =
      scrollPosition - scrollerContainerWidth + scroll_elementRightOffset_diff;
    elementToScroll.style.backgroundColor = 'yellow';
    setTimeout(() => {
      elementToScroll.style.backgroundColor = 'white';
      scrollerContainer.scrollLeft =
        scrollPosition - scrollerContainer.offsetLeft;
    }, 1000);
  };

  // setTimeout(() => {
  //   scrollTo(document.getElementById('child10'))
  // }, 3000)

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={scrollRight}>Prev</button>
      <button onClick={scrollLeft}>Next</button>
      <div className="scroll-container">
        <div className="parent" id="parent">
          {Array.from({ length: 20 }, (_, i) => {
            return (
              <div className="child" id={`child${i + 1}`} id={`child${i + 1}`}>
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
      scroll left{document?.getElementById('parent')?.scrollLeft}
    </div>
  );
}
