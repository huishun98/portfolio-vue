<template>
  <div class="projects container-fluid section">
    <h2 class="section-header">PROJECTS</h2>
    <div class="section-body section-width">
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top object-top" src="../assets/songdedi.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">SongDedi</h5>
              <p
                class="card-text description"
              >A free song dedication service suitable for weddings, parties or any event.</p>
              <p
                class="card-text"
              >Anyone can contribute to your playlist. Your playlist will update in real time.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Vue.js (JavaScript)</span> and
                <span class="highlight">Flask (Python)</span>.
                Google authentication, data storage and media storage done using
                <span
                  class="highlight"
                >Firebase</span>.
                Hosted on
                <span class="highlight">Heroku</span>. Integrated with
                <span class="highlight">Google Analytics</span>.
              </p>
            </div>

            <div class="flex-col">
              <a
                href="https://songdedi-admin.herokuapp.com/"
                target="_blank"
                class="card-link"
              >Live Site</a>
              <a
                href="https://github.com/huishun98/songdedi-admin"
                target="_blank"
                class="card-link"
              >Code (Admin site)</a>
              <a
                href="https://github.com/huishun98/songdedi-requests"
                target="_blank"
                class="card-link"
              >Code (Request site)</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top object-top" src="../assets/narie.png" />
          <div class="card-body">
            <h5 class="card-title">Narie</h5>
            <p
              class="card-text description"
            >A beginner-friendly itinerary planner, perfectly customisable to suit your needs.</p>
            <p
              class="card-text"
            >Leading a team of three (and growing). Following Agile development practices.</p>
            <p class="card-text">
              Prototyped using
              <span class="highlight">Figma</span>.
              Built using
              <span class="highlight">Vue.js (JavaScript)</span> and
              <span class="highlight">Flask (Python)</span>.
              JWT authentication and data storage done using
              <span
                class="highlight"
              >Firebase</span>.
              Hosted on
              <span class="highlight">Heroku</span>. Integrated with
              <span class="highlight">Google Analytics</span>.
            </p>
            <div class="collapsed" :class="{'active': collapsed.narie}">
              <p class="card-text">
                <span>Used</span>
                <a
                  href="https://docs.mapbox.com/api/search/"
                  target="_blank"
                  class="highlight card-link"
                >Mapbox Geocoding API</a>
                <span>for search autocomplete,</span>
                <a
                  href="https://www.triposo.com/api/documentation/20200803/"
                  target="_blank"
                  class="highlight card-link"
                >Triposo API</a>
                <span>to suggest tours and places of interest, and</span>
                <a
                  href="https://developers.google.com/maps/documentation/directions/overview"
                  target="_blank"
                  class="highlight card-link"
                >Google Maps Directions API</a>
                <span>to calculate travelling time.</span>
              </p>
              <p class="card-text margin-bot">
                <span>Used</span>
                <a
                  href="https://scikit-learn.org/stable/index.html"
                  target="_blank"
                  class="highlight card-link"
                >scikit-learn (Python library)</a>
                <span>to conduct clustering and</span>
                <a
                  href="https://pypi.org/project/mlrose/"
                  target="_blank"
                  class="highlight card-link"
                >mlrose (Python package)</a>
                <span>to solve the travelling salesman problem to suggest an optimized itinerary.</span>
              </p>
            </div>

            <p class="card-text">Code is private.</p>
            <div class="margin-bot">
              <a href="javascript:void(0)" class="card-link" @click="toggle('narie')">
                <span v-if="collapsed.narie">Less</span>
                <span v-if="!collapsed.narie">More</span>
                info
              </a>
            </div>
            <div>
              <a href="https://narie.herokuapp.com/" target="_blank" class="card-link">Live Site</a>
              <a
                href="https://github.com/Project-Narie/narie_ui"
                target="_blank"
                class="card-link disabled"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/django_blog.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">Customisable Personal Blog/Website Template</h5>
              <p
                class="card-text description"
              >A template that gives content creators full control over the design of their site and content management system.</p>
              <p
                class="card-text"
              >Features include basic CRUD functionality, downloading and uploading of blog content for backup purposes as well as categorisation of posts.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Django (Python)</span> and
                <span class="highlight">vanilla JavaScript</span>. Data and media stored using
                <span class="highlight">PostgreSQL</span> and hosted on
                <span class="highlight">Amazon S3</span>. Application hosted on
                <span class="highlight">Heroku</span>.
              </p>
            </div>
            <div>
              <a href="https://hs-django-blog.herokuapp.com/" target="_blank" class="card-link">Demo</a>
              <a
                href="https://github.com/huishun98/django_blog"
                target="_blank"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/springer_books.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">Springer Books Navigator</h5>
              <p
                class="card-text description"
              >An easy and fast way to download free books offered by Springer.</p>
              <p class="cart-text">Acquired 186 users from 10 countries.</p>
              <p class="card-text">
                Data scraped using
                <span class="highlight">BeautifulSoup (Python)</span>. Website built using
                <span class="highlight">Vue.js (JavaScript)</span>. Hosted on
                <span class="highlight">Heroku</span>. Integrated with
                <span class="highlight">Google Analytics</span>.
              </p>
            </div>
            <div>
              <a
                href="https://springer-books-links.herokuapp.com/"
                target="_blank"
                class="card-link"
              >Live Site</a>
              <a
                href="https://github.com/huishun98/springer-books"
                target="_blank"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/cb_quiz.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">Circuit Breaker Personality Quiz</h5>
              <p
                class="card-text description"
              >A personality quiz about attitudes and feelings about the Circuit Breaker.</p>
              <p class="card-text">More than 400 responses were garnered within 24 hours of launch.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Vue.js (JavaScript)</span> and
                <span class="highlight">Flask (Python)</span>. Used
                <span class="highlight">Google Sheets API</span> to store results in Google Sheets. Hosted on
                <span class="highlight">Heroku</span>.
              </p>
            </div>
            <div>
              <a
                href="https://circuit-breaker-personality.herokuapp.com/"
                target="_blank"
                class="card-link"
              >Live Site</a>
              <a
                target="_blank"
                href="https://github.com/huishun98/trivia-quiz-client"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/huishun-cf.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">HS Coding Factory</h5>
              <p
                class="card-text description"
              >A WordPress theme and site for me to document and share my coding journey.</p>
              <p class="card-text">
                Built using
                <span class="highlight">PHP</span> and
                <span class="highlight">JavaScript</span>. Hosted on
                <span class="highlight">Heroku</span>.
              </p>
            </div>
            <div>
              <a
                href="https://huishun-cf.herokuapp.com/"
                target="_blank"
                class="card-link"
              >Live Site</a>
              <a
                href="https://github.com/huishun98/huishun-cf"
                target="_blank"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/data_viz.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">Data visualisation</h5>
              <p
                class="card-text description"
              >Visualisations of Singapore's National Track and Field Championships A Division 100m and 200m results over the years.</p>
              <p class="card-text">
                Used
                <span class="highlight">Matplotlib (Python)</span>.
              </p>
            </div>
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
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/telebot.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">Happy Dinner Bot</h5>
              <p
                class="card-text description"
              >A Telegram bot that helps to organise dinners every day.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Node.js (JavaScript)</span>. Data stored on
                <span class="highlight">AWS with MongoDB Atlas</span>. Hosted on
                <span class="highlight">Heroku</span>.
              </p>
            </div>
            <div>
              <a
                href="https://web.telegram.org/#/im?p=@happy_dinner_bot"
                target="_blank"
                class="card-link"
              >Live Site</a>
              <a
                href="https://github.com/huishun98/happy-dinner-bot-public"
                target="_blank"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="card text-white bg-dark mb-3">
          <img class="card-img-top" src="../assets/portfolio.png" />
          <div class="card-body">
            <div>
              <h5 class="card-title">HS Portfolio</h5>
              <p class="card-text description">A portfolio website.</p>
              <p class="card-text">
                Built using
                <span class="highlight">Vue.js (JavaScript)</span>.
                Hosted on
                <span class="highlight">Heroku</span>.
              </p>
            </div>
            <div>
              <a
                href="https://hs-portfolio.herokuapp.com/"
                target="_blank"
                class="card-link"
              >Live Site</a>
              <a
                href="https://github.com/huishun98/portfolio"
                target="_blank"
                class="card-link"
              >Code</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="card-wrapper">
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
              <a href="#" class="card-link disabled">Code</a>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script src="../js/projects.js"></script>

<style scoped src="../styles/projects.css"></style>
