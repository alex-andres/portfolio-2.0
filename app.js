var template = `
< section id = "sectionPOS class="cd-section" >\n\
<div class="container">\n\
  <div class="flip">\n\
        <div class="card">\n\
          <div class="face front">\n\
            <img src="data/img/SLUG-front.jpg" id="projectsImg" alt="NAME projects Image" title="Click for more info">\n\
                </div>
        <div class="face back">\n\
              <div class="row back-content">\n\
                <div class="col-md-6 col-12">\n\

                  <a href="http://WEBSITE/" target="_blank"><img src="data/img/SLUG-back" class="mobileImg" alt="NAME projects Image" title="Click to view live projects"></a>\n\
                    </div>\n\
                  <div class="col-md-1"></div>\n\

                  <div class="col-md-5 col-12">\n\
                    <div class="description">\n\
                      <h3>NAME</h3>\n\
                      <p>\n\
                        BODYn\
                        </p>\n\
                      <p> Technologies: </p>\n\
                      <ul>\n\
                          <li>\n\
                            TECHNOLOGY
                          </li>\n\
                        </ul>\n\

                      <a href="GITHUB" target="_blank" class="pt-1">\n\
                        <img class="githubLink" src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png" alt="">\n\
                        </a>\n\
                      </div>\n\
                    </div>\n\
                  </div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
          <% if (index === 0){ %>\n\
            <a href="#section2" class="cd-scroll-down cd-img-replace">scroll down</a>\n\
        </section>`;
var content = '';
for (var i = 0; i < projects.length; i++) {
  var entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, projects[i].slug)
    .replace(/NAME/g, projects[i].name)
    .replace(/AUTHOR/g, projects[i].author)
    .replace(/TECHNOLOGY/g, projects[i].technology)
    .replace(/WEBSITE/g, projects[i].website)
    .replace(/GITHUB/g, projects[i].github);
  entry = entry.replace("<a href='http:///'></a>", '-');
  content += entry;
}
document.getElementById('content').innerHTML = content;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

var button = document.getElementById('notifications');
button.addEventListener('click', function(e) {
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      randomNotification();
    }
  });
});

function randomNotification() {
  var randomItem = Math.floor(Math.random() * projects.length);
  var notifTitle = projects[randomItem].name;
  var notifBody = 'Created by Alex Andres.';
  var notifImg = 'data/img/' + projects[randomItem].slug + '.jpg';
  var options = {
    body: notifBody,
    icon: notifImg
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
