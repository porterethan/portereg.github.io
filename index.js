document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");
  const navButtons = document.querySelectorAll(".topnav button");

  const slider = document.getElementById("myRange");
  const np = document.getElementById("rangeValue");

  const scrollBtn = document.createElement("button");
  scrollBtn.id = "myBtn";
  scrollBtn.textContent = "Top";
  scrollBtn.title = "Go to top";
  scrollBtn.style.display = "none";
  document.body.appendChild(scrollBtn);

  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  function startTyping() {
    const text = "Typewriter effect";
    const typingElement = document.getElementById("typingText");
    let i = 0;
    if (!typingElement) return;
    typingElement.style.width = "0";
    typingElement.textContent = "";
    setTimeout(() => {
      typingElement.style.width = "auto";
      function typeWriter() {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        } else {
          setTimeout(() => {
            typingElement.textContent = "";
            typingElement.style.width = "0";
          }, 3000);
        }
      }
      typeWriter();
    }, 200);
  }

  let slideIndex = 0;
  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 2000);
  }

  function setActive(button) {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  }

  document.getElementById("home_btn").onclick = function () {
    setActive(this);
    mainContent.innerHTML = `
      <div class="left">
        <div class="image-box">
          <img src="ethan.png" alt="Ethan">
        </div>
        <div class="text-box">
          <h1>About Me</h1>
          <p>My name is Ethan Porter, I am 20 years old and attend the University of Indianapolis. My hobbies include playing/watching sports, playing chess, and hanging out with friends. I have recently picked up the hobby of bowling. I am very involved in my community and local church, as I weekly volunteer at our local food pantry every Monday (since 2013). Furthermore, I enjoy travelling. Recently I travelled on a missions trip to the Dominican Republic where I helped clean a nursing home, feed the poor, dispersed toys at a local school, and ultimately shared the gospel.</p>
        </div>
      </div>
    `;
    showSlides();
  };

  document.getElementById("project_btn").onclick = function () {
    setActive(this);
    mainContent.innerHTML = `
      <div class="text-box">
        <h1>Projects</h1>

        <h3>Slider Bar</h3>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
          <span id="rangeValue">50</span>
        </div>

        <h3>Progress Bar</h3>
        <div id="myProgress">
          <div id="myBar"></div>
        </div>

        <h3>Image Overlay</h3>
        <div class="container">
          <img id="overlayImage" src="mm.png" alt="Project Image" class="image">
          <div class="overlay">
            <div id="overlayText" class="text"></div>
          </div>
        </div>

        <h3>Typewriter Effect</h3>
        <div class="effect-demo">
          <div class="typing-text" id="typingText"></div>
          <button id="typingBtn" class="btn-primary">Start Typing</button>
        </div>
      </div>
    `;

    const slider = document.getElementById("myRange");
    const np = document.getElementById("rangeValue");
    const bar = document.getElementById("myBar");
    np.textContent = slider.value;

    slider.oninput = function () {
      np.textContent = this.value;
    };

    function animateBar() {
      let width = 0;
      function frame() {
        if (width >= 100) {
          width = 0;
        } else {
          width += 0.1;
        }
        bar.style.width = width + "%";
        requestAnimationFrame(frame);
      }
      frame();
    }
    animateBar();

    const projects = [
      {
        img: "mm.png",
        text: "Micromouse Competition: In 2026, I will compete with a team of engineers."
      },
      {
        img: "face_detection.png",
        text: "Face detection program used in my Big Data Mining course"
      },
      {
        img: "chess.png",
        text: "Created a chess game using Python Game libraries."
      }
    ];

    let current = 0;
    const overlayImage = document.getElementById("overlayImage");
    const overlayText = document.getElementById("overlayText");

    function cycleOverlay() {
      overlayImage.src = projects[current].img;
      overlayText.textContent = projects[current].text;
      current = (current + 1) % projects.length;
    }

    cycleOverlay();
    setInterval(cycleOverlay, 4000);

    document.getElementById("typingBtn").addEventListener("click", startTyping);
    startTyping();
  };

  document.getElementById("experience_btn").onclick = function () {
    setActive(this);
    mainContent.innerHTML = `
      <div class="text-box">
        <h1>Experience</h1>
        <h2>HARRIS AND FORD, LLC</h2>
        <p><em>50+ employee chemical distribution company — Indianapolis, Indiana</em></p>
        <p><strong>Information & Technology Intern</strong> | 2019 – May 2025</p>
        <ul>
          <li>Developed and administered a cybersecurity/phishing exam for 50 employees, followed by targeted training for those who did not pass, improving company-wide security awareness.</li>
          <li>Managed IT infrastructure and server room operations, including configuring desktops, laptops, switches, and wiring for seamless operations.</li>
        </ul>
        <p><strong>Research & Development Intern</strong></p>
        <ul>
          <li>Led the company’s transition from on-premises data to cloud-based solutions using Power BI and Azure, and trained employees on adoption.</li>
          <li>Designed and developed a website for an operations-focused company, establishing a professional online presence.</li>
        </ul>
        <h1>Technical Skills</h1>
        <p>C, C++, Python, Data Analytics, Linux, Spark, TensorFlow, GitHub, PowerBI, Docker</p>
        <h1>Languages</h1>
        <p>Conversational Proficiency in Spanish</p>
        <h1>Certifications & Trainings</h1>
        <ul>
          <li>CompTIA ITF+ Certification</li>
          <li>Machine Learning Specialization (Coursera)</li>
          <li>Learn Ethical Hacking from Scratch (Udemy, 2020)</li>
        </ul>
        <h1>Awards</h1>
        <ul>
          <li>R.B. Annis Engineering Full Tuition Scholarship (2022)</li>
          <li>Honor Roll (Fall 2022 – Spring 2025)</li>
          <li>Dean’s List</li>
        </ul>
        <h1>Relevant Classwork</h1>
        <ul>
          <li>Big Data Mining</li>
          <li>Natural Language Processing</li>
          <li>Database Systems (SQL & NoSQL)</li>
        </ul>
      </div>
    `;
  };

  np.textContent = slider.value;
  slider.oninput = function () {
    np.textContent = this.value;
  };
});
