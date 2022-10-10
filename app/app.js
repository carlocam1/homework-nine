
// var homeContent = ` <div class="home">
// <div class="hero">
//   <div class="hero-image picture">
//     <div class="callout">
//       <h1>Express yourself with more than just words</h1>
//     </div>
//   </div>
// </div>

// <div class="image-quote">
//   <div class="img-quote picture">
//     <img src="images/img-quote.jpg" alt="" />
//   </div>
//   <div class="txt-quote">
//     <p>
//       Music is more than Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Aut, dolorum neque ad doloremque eaque officia
//       harum. At fugit ratione adipisci esse dolor, unde tenetur error.
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
//       dolorum neque ad doloremque eaque officia harum. At fugit ratione
//       adipisci esse dolor, unde tenetur error.
//     </p>
//   </div>
// </div>

// <div class="four-images">
//   <a href="lessons.html">
//     <div class="container picture">
//       <img src="images/guitar.jpg" alt="" />
//       <div class="inner-text">
//         <h1>Guitar Lessons</h1>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>

//   <a href="lessons.html">
//     <div class="container picture">
//       <img src="images/piano.jpg" alt="" />
//       <div class="inner-text">
//         <h1>Piano Lessons</h1>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>

//   <a href="lessons.html">
//     <div class="container picture">
//       <img src="images/violin.jpg" alt="" />
//       <div class="inner-text">
//         <h1>Violin Lessons</h1>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>

//   <a href="lessons.html">
//     <div class="container picture">
//       <img src="images/drums.jpg" alt="" />
//       <div class="inner-text">
//         <h1>Drums Lessons</h1>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// </div>

// <div class="summer">
//   <div class="summer-image">
//     <img src="images/summer.png" alt="" />
//   </div>
//   <div class="text-quote">
//     <p>
//       Summer classes Lorem ipsum dolor sit amet consectetur adipisicing
//       elit. Mollitia iure a repellendus aspernatur suscipit error eum,
//       minus perferendis iusto dolores nostrum recusandae facere, et sed
//       impedit, voluptatum veritatis facilis nesciunt deserunt quasi
//       quas! Aperiam aspernatur perferendis eos rem neque minima.
//       Exercitationem recusandae ab, ea facere dolores sapiente neque
//       earum labore.
//     </p>
//   </div>
// </div>

// <div class="image-quote">
//   <div class="img-quote picture">
//     <img src="images/summer.jpg" alt="" />
//   </div>
//   <div class="txt-quote">
//     <p>
//       For more information than Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Aut, dolorum neque ad doloremque eaque officia
//       harum. At fugit ratione adipisci esse dolor, unde tenetur error.
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
//       dolorum neque ad doloremque eaque officia harum. At fugit ratione
//       adipisci esse dolor, unde tenetur error.
//     </p>
//   </div>
// </div>
// </div>`;



function initListeners (){
    $("nav a").click(function(e){
      let aID = e.currentTarget.id;
      let contentID = aID + "Content";
    //   console.log((contentID));  
    MODEL.updateView(contentID)
    
    });
}

$(document).ready(function(){
    initListeners();
    MODEL.updateView("homeContent");
});