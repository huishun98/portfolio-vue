<template>
  <div class="projects container-fluid section">
    <h2 class="section-header">PROJECTS</h2>
    <div class="section-body section-width">
      <div class="row section-width">
        <div class="col-md-4 card-wrapper">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" src="../assets/django_blog.png" />
            <div class="card-body">
              <h5 class="card-title">Customisable Personal Blog/Website Template</h5>
              <p class="card-text">
                UI, content management system and database are all fully customisable.
                <br />
                <br />Features include basic CRUD functionality, downloading and uploading of blog content for backup purposes as well as categorisation of posts.
              </p>
              <p class="card-text">
                Built using
                <span class="highlight">Django (Python)</span> and
                <span class="highlight">PostgreSQL</span>. Hosted on
                <span class="highlight">Amazon S3</span> and
                <span class="highlight">Heroku</span>.
              </p>
              <div>
                <a
                  href="https://hs-django-blog.herokuapp.com/"
                  target="_blank"
                  class="card-link"
                >Demo</a>
                <a
                  href="https://github.com/huishun98/django_blog"
                  target="_blank"
                  class="card-link"
                >Code</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-wrapper">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" src="../assets/huishun-cf.png" />
            <div class="card-body">
              <h5 class="card-title">HS Coding Factory</h5>
              <p
                class="card-text"
              >A WordPress theme and site for me to document and share my coding journey.</p>
              <p class="card-text">
                Built using
                <span class="highlight">PHP</span> and
                <span class="highlight">JavaScript</span>. Hosted on
                <span class="highlight">Heroku</span>.
              </p>
              <div>
                <a href="https://huishun-cf.herokuapp.com/" target="_blank" class="card-link">Demo</a>
                <a
                  href="https://github.com/huishun98/huishun-cf"
                  target="_blank"
                  class="card-link"
                >Code</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-wrapper">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" src="../assets/portfolio.gif" />
            <div class="card-body">
              <h5 class="card-title">HS Portfolio</h5>
              <p class="card-text">A portfolio website.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Vue.js (JavaScript)</span>.
                Hosted on
                <span class="highlight">Heroku</span>.
              </p>
              <div>
                <a href="https://hs-portfolio.herokuapp.com/" target="_blank" class="card-link">Demo</a>
                <a
                  href="https://github.com/huishun98/portfolio"
                  target="_blank"
                  class="card-link"
                >Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row section-width">
        <div class="col-md-4 card-wrapper">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" src="../assets/telebot.png" />
            <div class="card-body">
              <h5 class="card-title">Happy Dinner Bot</h5>
              <p class="card-text">A Telegram bot that helps to organise dinners every day.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Node.js (JavaScript)</span> and
                <span class="highlight">MongoDB</span>. Hosted on
                <span class="highlight">Heroku</span>.
              </p>
              <div>
                <a
                  href="https://web.telegram.org/#/im?p=@happy_dinner_bot"
                  target="_blank"
                  class="card-link"
                >Demo</a>
                <a
                  href="https://github.com/huishun98/happy-dinner-bot-public"
                  target="_blank"
                  class="card-link"
                >Code</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-wrapper">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" src="../assets/data_viz.png" />
            <div class="card-body">
              <h5 class="card-title">Data visualisation</h5>
              <p
                class="card-text"
              >Simple visualisations of Singapore's National Track and Field Championships A Division 100m and 200m results over the years.</p>
              <p class="card-text">
                Used
                <span class="highlight">Matplotlib (Python)</span>.
              </p>
              <div>
                <a
                  href="https://github.com/huishun98/tf-data-viz/blob/master/data_viz.ipynb"
                  target="_blank"
                  class="card-link"
                >Demo</a>
                <a
                  href="https://github.com/huishun98/tf-data-viz"
                  target="_blank"
                  class="card-link"
                >Code</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 card-wrapper">
          <div class="card text-white bg-dark mb-3">
            <img class="card-img-top" src="../assets/fencing_scoreboard.png" />
            <div class="card-body">
              <h5 class="card-title">Fencing Scoreboard</h5>
              <p class="card-text">A scoreboard designed for fencing bouts.</p>
              <p class="card-text">
                Built using
                <span class="highlight">React Native (JavaScript)</span> and
                <span class="highlight">Firebase</span>.
              </p>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.scoreboard.scoreboard"
                  target="_blank"
                  class="card-link"
                >Demo</a>
                <a href="#" class="card-link btn disabled">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/projects.js"></script>

<style scoped src="../styles/projects.css"></style>
