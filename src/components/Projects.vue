<template>
  <div class="projects container-fluid section">
    <h2 class="section-header">PROJECTS</h2>
    <div class="row section-width">
      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/portfolio.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">HS Portfolio</h5>
            <p class="card-text">A portfolio website.</p>
            <p class="card-text">
              Built using
              <span class="highlight">Vue.js</span>. Hosted on
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

      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/telebot.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Happy Dinner Bot</h5>
            <p class="card-text">A Telegram bot helping to organise dinners every day.</p>
            <p class="card-text">
              Built using
              <span class="highlight">Node.js</span> and
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

      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/fencing_scoreboard.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Fencing Scoreboard</h5>
            <p class="card-text">A scoreboard designed for fencing bouts.</p>
            <p class="card-text">
              Built using
              <span class="highlight">React Native</span> and
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

    <div class="row section-width">
      <div class="col-md-4">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/API.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Flask Mailer</h5>
            <p
              class="card-text"
            >A simple Flask application that receives POST requests to send emails to specified users.</p>
            <p class="card-text">
              Built using
              <span class="highlight">Flask</span>. Hosted on
              <span class="highlight">Heroku</span>.
            </p>
            <div>
              <a href="http://hs-flask-mailer.herokuapp.com/" target="_blank" class="card-link">Demo</a>
              <a
                href="https://github.com/huishun98/flask-mailer"
                target="_blank"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/projects.js"></script>

<style scoped src="../styles/projects.css"></style>
