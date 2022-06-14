import CookieItem from "../Components/CookieItem";

function App() {
  const cookies = [
    {
      name: "cookie",
      price: 1,
      typeOfFood: "halavi",
      src: "https://bakingmischief.com/wp-content/uploads/2017/02/small-batch-chocolate-chip-cookies-image-square-2-500x500.jpg",
    },
    {
      name: "cookie1",
      price: 2,
      typeOfFood: "halavi",
      src: "https://bakingmischief.com/wp-content/uploads/2017/02/small-batch-chocolate-chip-cookies-image-square-2-500x500.jpg",
    },
    {
      name: "cookie2",
      price: 3,
      typeOfFood: "tivoni",
      src: "https://bakingmischief.com/wp-content/uploads/2017/02/small-batch-chocolate-chip-cookies-image-square-2-500x500.jpg",
    },
    {
      name: "cookie3",
      price: 4,
      typeOfFood: "halavi",
      src: "https://bakingmischief.com/wp-content/uploads/2017/02/small-batch-chocolate-chip-cookies-image-square-2-500x500.jpg",
    },
    {
      name: "cookie4",
      price: 5,
      typeOfFood: "halavi",
      src: "https://bakingmischief.com/wp-content/uploads/2017/02/small-batch-chocolate-chip-cookies-image-square-2-500x500.jpg",
    },
  ];

  //   function hendleChengeCount(symbol) {
  //     // switch (symbol) {
  //     //   case "-":
  //     //     if (countOfCookies > 1) {
  //     //       setCountOfCookies(--countOfCookies);
  //     //     } else {
  //     //       setCountOfCookies(1);
  //     //     }
  //     //     break;
  //     //   case "+":
  //     //     setCountOfCookies(++countOfCookies);
  //     //     break;
  //     //   default:
  //     //     console.log("bla");
  //     // }
  //   }

  return (
    <div className="mainPage">
      <div className="mainPage__cookiesGrid">
        {cookies.map((cookie, index) => {
          return <CookieItem cookie={cookie} />;
        })}
      </div>
    </div>
  );
}

export default App;
