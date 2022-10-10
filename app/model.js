var MODEL = (function () {
    var _homeContent = `<div class="home">
    <div class="hero">
      <div class="hero-image picture">
        <div class="callout">
          <h1>Express yourself with more than just words</h1>
        </div>
      </div>
    </div>

    <div class="image-quote">
      <div class="img-quote picture">
        <img src="images/img-quote.jpg" alt="" />
      </div>
      <div class="txt-quote">
        <p>
          Music is more than Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut, dolorum neque ad doloremque eaque officia
          harum. At fugit ratione adipisci esse dolor, unde tenetur error.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          dolorum neque ad doloremque eaque officia harum. At fugit ratione
          adipisci esse dolor, unde tenetur error.
        </p>
      </div>
    </div>

    <div class="four-images">
      <a href="#">
        <div class="container picture">
          <img src="images/guitar.jpg" alt="" />
          <div class="inner-text">
            <h1>Guitar Lessons</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="container picture">
          <img src="images/piano.jpg" alt="" />
          <div class="inner-text">
            <h1>Piano Lessons</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="container picture">
          <img src="images/violin.jpg" alt="" />
          <div class="inner-text">
            <h1>Violin Lessons</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="container picture">
          <img src="images/drums.jpg" alt="" />
          <div class="inner-text">
            <h1>Drums Lessons</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>
    </div>

    <div class="summer">
      <div class="summer-image">
        <img src="images/summer.png" alt="" />
      </div>
      <div class="text-quote">
        <p>
          Summer classes Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia iure a repellendus aspernatur suscipit error eum,
          minus perferendis iusto dolores nostrum recusandae facere, et sed
          impedit, voluptatum veritatis facilis nesciunt deserunt quasi
          quas! Aperiam aspernatur perferendis eos rem neque minima.
          Exercitationem recusandae ab, ea facere dolores sapiente neque
          earum labore.
        </p>
      </div>
    </div>

    <div class="image-quote">
      <div class="img-quote picture">
        <img src="images/summer.jpg" alt="" />
      </div>
      <div class="txt-quote">
        <p>
          For more information than Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aut, dolorum neque ad doloremque eaque officia
          harum. At fugit ratione adipisci esse dolor, unde tenetur error.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          dolorum neque ad doloremque eaque officia harum. At fugit ratione
          adipisci esse dolor, unde tenetur error.
        </p>
      </div>
    </div>
  </div>`;

    var _aboutContent = `<div class="about">
    <div class="hero">
      <div class="hero-image picture">
        <div class="callout">
          <h1>We love what we do</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tempore assumenda labore iure placeat debitis doloribus tempora
            possimus iusto rem doloremque fugit, quod, consequatur nisi qui
            quo exercitationem omnis illo dolorum!
          </p>
        </div>
      </div>
    </div>

    <div class="owners-about">
      <div class="about-header">
        <h1>Who we are</h1>
      </div>

      <div class="owner-container">
        <div class="left">
          <img src="images/owner1.jpg" alt="" />
        </div>
        <div class="right">
          <h1>Caitlin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            corrupti hic quis, molestias, accusantium recusandae
            exercitationem natus alias consequuntur, excepturi explicabo quo
            non aliquid eum est maiores. Reprehenderit assumenda dolor ut
            quo error, quibusdam quaerat harum modi illum sapiente dicta
            officia, accusamus quas voluptatum rem, provident quia libero
            aliquid temporibus.
          </p>
        </div>
      </div>

      <div class="owner-container">
        <div class="row">
          <div class="left">
            <img src="images/owner2.jpg" alt="" />
          </div>
          <div class="right">
            <h1>Karen</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              corrupti hic quis, molestias, accusantium recusandae
              exercitationem natus alias consequuntur, excepturi explicabo
              quo non aliquid eum est maiores. Reprehenderit assumenda dolor
              ut quo error, quibusdam quaerat harum modi illum sapiente
              dicta officia, accusamus quas voluptatum rem, provident quia
              libero aliquid temporibus.
            </p>
          </div>
        </div>
      </div>

      <div class="owner-container">
        <div class="left">
          <img src="images/owner3.jpg" alt="" />
        </div>
        <div class="right">
          <h1>Kayla</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            corrupti hic quis, molestias, accusantium recusandae
            exercitationem natus alias consequuntur, excepturi explicabo quo
            non aliquid eum est maiores. Reprehenderit assumenda dolor ut
            quo error, quibusdam quaerat harum modi illum sapiente dicta
            officia, accusamus quas voluptatum rem, provident quia libero
            aliquid temporibus.
          </p>
        </div>
      </div>

      <div class="last-comments">
        <h1>Since 1600....</h1>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          quisquam accusantium corporis itaque est sit maiores obcaecati
          ullam a vel provident, ipsum repudiandae temporibus neque labore
          quia. Eius illo ullam maiores unde! Consectetur unde voluptatibus
          quos et consequatur sequi eligendi, rerum temporibus deserunt
          quisquam illum itaque excepturi. Repellendus, quaerat modi.
        </h3>
      </div>
    </div>
    </div>`;

    var _lessonsContent = `<div class="lessons">
  <div class="hero">
    <div class="hero-image picture">
      <div class="callout">
        <h1>Lessons that mean more than words</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tempore assumenda labore iure placeat debitis doloribus tempora
          possimus iusto rem doloremque fugit, quod, consequatur nisi qui
          quo exercitationem omnis illo dolorum!
        </p>
      </div>
    </div>
  </div>

  <div class="lesson-contain">
    <div class="left">
      <img src="images/guitar.jpg" alt="" />
    </div>
    <div class="center">
      <h1>Guitar Lessons</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        eos sed nihil veniam ut excepturi architecto saepe obcaecati vel
        eum, beatae modi omnis eligendi dolore illum consectetur aperiam
        quod rem. In adipisci sit ratione ipsam nam, obcaecati magni
        consequuntur voluptatum beatae impedit velit vitae, deserunt quasi
        provident recusandae optio fugit!
      </p>
    </div>
    <div class="right">
      <img src="images/owner1.jpg" alt="" />
    </div>
  </div>
  <div class="lesson-contain">
    <div class="left">
      <img src="images/piano.jpg" alt="" />
    </div>
    <div class="center">
      <h1>Piano Lessons</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        eos sed nihil veniam ut excepturi architecto saepe obcaecati vel
        eum, beatae modi omnis eligendi dolore illum consectetur aperiam
        quod rem. In adipisci sit ratione ipsam nam, obcaecati magni
        consequuntur voluptatum beatae impedit velit vitae, deserunt quasi
        provident recusandae optio fugit!
      </p>
    </div>
    <div class="right">
      <img src="images/owner2.jpg" alt="" />
    </div>
  </div>
  <div class="lesson-contain">
    <div class="left">
      <img src="images/drums.jpg" alt="" />
    </div>
    <div class="center">
      <h1>Drums Lessons</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        eos sed nihil veniam ut excepturi architecto saepe obcaecati vel
        eum, beatae modi omnis eligendi dolore illum consectetur aperiam
        quod rem. In adipisci sit ratione ipsam nam, obcaecati magni
        consequuntur voluptatum beatae impedit velit vitae, deserunt quasi
        provident recusandae optio fugit!
      </p>
    </div>
    <div class="right">
      <img src="images/owner3.jpg" alt="" />
    </div>
  </div>
  <div class="lesson-contain">
    <div class="left">
      <img src="images/violin.jpg" alt="" />
    </div>
    <div class="center">
      <h1>Violin Lessons</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        eos sed nihil veniam ut excepturi architecto saepe obcaecati vel
        eum, beatae modi omnis eligendi dolore illum consectetur aperiam
        quod rem. In adipisci sit ratione ipsam nam, obcaecati magni
        consequuntur voluptatum beatae impedit velit vitae, deserunt quasi
        provident recusandae optio fugit!
      </p>
    </div>
    <div class="right">
      <img src="images/owner2.jpg" alt="" />
    </div>
  </div>

  <a href="#">
    <div class="inner-txt">Feel free to contact us</div>
  </a>
    </div>`;

    var _contactContent = `<div class="contact">
    <div class="hero">
      <div class="hero-image picture">
        <div class="callout">
          <h1>Keep in touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis vel sit ullam sint praesentium aperiam facilis pariatur
            explicabo aspernatur perspiciatis distinctio eum ducimus maxime,
            rerum veritatis culpa nesciunt quae quod harum illo laboriosam
            velit. Reprehenderit.
          </p>
        </div>
      </div>
    </div>

    <div class="four-images">
      <a href="#">
        <div class="container picture">
          <img src="images/guitar.jpg" alt="" />
          <div class="inner-text">
            <h1>South Bend IN</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="container picture">
          <img src="images/piano.jpg" alt="" />
          <div class="inner-text">
            <h1>Mishawaka IN</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="container picture">
          <img src="images/violin.jpg" alt="" />
          <div class="inner-text">
            <h1>Elkhart IN</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>

      <a href="#">
        <div class="container picture">
          <img src="images/drums.jpg" alt="" />
          <div class="inner-text">
            <h1>Granger IN</h1>
            <p>Learn More</p>
          </div>
        </div>
      </a>
    </div>

    <div class="form">
      <div class="contact-form">
        <div class="comments">
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <div class="input-form">
          <input type="text" name="Name" id="name" placeholder="Name" />
          <input
            type="text"
            name="Last Name"
            id="lastName"
            placeholder="Last Name"
          />
          <input type="text" name="Email" id="email" placeholder="Email" />
          <input
            type="text"
            name="Phone"
            id=""
            placeholder="Phone (optional)"
          />
        </div>
      </div>
      <div class="btn">Submit</div>
    </div>

    <div class="summer">
      <div class="summer-image">
        <img src="images/summer.png" alt="" />
      </div>
      <div class="text-quote">
        <h1>Do not forget about our summer classes</h1>
      </div>
    </div>
  </div>`;



    var _updateView = function(pageName) {
        console.log(pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    };

    return {
        updateView: _updateView,
    }
    
})();
