import { Carousel } from 'react-carousel-minimal';

function Hero() {
 const data = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafKHTzfR_FAfRdD7rWhCiUzlktgmkYYb7IA&usqp=CAU",
    //   caption: "By order of"
    },
    {
      image: "https://www.sirri.com/media/magefan_blog/peaky_blinder_gang.jpg",
    //   caption: "Shelby Brothers"
    },
    {
      image: "https://i2-prod.corkbeo.ie/culture/whats-on-news/article16106787.ece/ALTERNATES/s615/0_Screen-Shot-2019-04-10-at-111819.png",
    //   caption: "Thomas Shelby"
    },
    {
      image: "https://i2-prod.mirror.co.uk/incoming/article11620542.ece/ALTERNATES/s615/SUNDAYPEOPLE-PROD-Peaky-Blinders-ed.jpg",
    //   caption: "Arthur Shelby"
    },
    {
      image: "https://www.nme.com/wp-content/uploads/2020/04/joe-cole-peaky-blinders.jpg",
    //   caption: "John Shelby"
    },
     {
      image: "https://images.indianexpress.com/2021/04/Helen-McCrory-1200.jpg",
    //   caption: "Polly Gray"
    },
    {
      image: "https://www.slashfilm.com/img/gallery/tom-hardy-took-an-unusual-approach-to-his-peaky-blinders-character/l-intro-1659464604.jpg",
    //   caption: "Alfie Solomons"
    },
    {
      image: "https://cdn.cnn.com/cnnnext/dam/assets/220203094451-01-cillian-murphy-empire-scli-intl-gbr-super-tease.jpg",
    //   caption: "Shelby Fahm"
    },
    {
      image: "https://www.tvguide.com/a/img/resize/b0843c64d4150058beaf4f9aaeb5ab86ef4a7360/catalog/provider/1/6/1-5523426249.jpg?auto=webp&fit=crop&height=675&width=1200",
    //   caption: "Ada Shelby"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
//   const slideNumberStyle = {
//     fontSize: '20px',
//     fontWeight: 'bold',
//   }
  return (
    <div className="App">
      {/* <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}> */}
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            // dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
    //   </div>
    // </div>
  );
}

export default Hero;