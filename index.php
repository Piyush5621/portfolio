<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - Piyush Kumar</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <style>
    /* Slide Text Animation */
    .slide-text {
      display: inline-block;
      opacity: 0;
      transform: translateY(30px);
      animation: slideUp 1s ease forwards;
    }

    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Text Rotator Animation */
    .text-rotate {
      position: relative;
      height: 3.5rem;
      overflow: hidden;
    }

    .text-rotate span {
      position: absolute;
      width: 100%;
      opacity: 0;
      transform: translateY(100%);
      animation: rotateText 6s linear infinite;
    }

    .text-rotate span:nth-child(1) {
      animation-delay: 0s;
    }

    .text-rotate span:nth-child(2) {
      animation-delay: 3s;
    }

    @keyframes rotateText {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }

      10%,
      40% {
        opacity: 1;
        transform: translateY(0);
      }

      50%,
      100% {
        opacity: 0;
        transform: translateY(-100%);
      }
    }

    /* Image Fade Rotation */
    .fade-img {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }

    .fade-img.active {
      opacity: 1;
    }
  </style>
</head>

<body class="bg-black text-white scroll-smooth min-h-screen">

  <!-- Header -->
  <header class="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
    <?php include "header.php"; ?>
  </header>

  <!-- Hero Section -->
  <section class="relative flex min-h-screen items-center justify-center px-6 md:px-20 pt-[6rem]">

    <!-- Left Side Social Links (Vertical) -->
    <div class="hidden md:flex flex-col fixed left-20 top-1/2 transform -translate-y-1/2 gap-6 text-2xl text-gray-400">
      <a href="https://github.com/yourusername" target="_blank"
        class="hover:text-yellow-500 transition-all"><i class="fab fa-github"></i></a>
      <a href="#" class="hover:text-yellow-500 transition-all"><i class="fab fa-facebook"></i></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank"
        class="hover:text-yellow-500 transition-all"><i class="fab fa-linkedin"></i></a>
      <a href="#" class="hover:text-yellow-500 transition-all"><i class="fab fa-instagram"></i></a>
      <a href="mailto:piyushkk0206@gmail.com" class="hover:text-yellow-500 transition-all"><i
          class="fas fa-envelope"></i></a>
    </div>

    <!-- Main Hero Content -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-8 w-full">

      <!-- Left Side: Rotating Image -->
      <div class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[590px] md:h-[590px] flex-shrink-0">
        <img src="images/Profile.jpg" alt="Profile 1"
          class="fade-img active rounded-2xl w-full h-full object-cover shadow-lg">
        <img src="images/Ppp.jpg" alt="Profile 2" class="fade-img rounded-2xl w-full h-full object-cover shadow-lg">
      </div>

      <!-- Right Side: Text & Buttons -->
      <div class="flex flex-col justify-center max-w-xl text-center md:text-left space-y-4 sm:space-y-6">

        <!-- Hello Animation -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold slide-text">Hello!,</h1>

        <!-- Rotating Text -->
        <div class="text-2xl sm:text-3xl md:text-4xl font-bold text-rotate">
          <span>I'm Piyush Kumar 👋</span>
          <span>I'm a Web Developer 💻</span>
        </div>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg md:text-2xl text-gray-300">CS Undergrad • Aspiring Full-Stack Developer</p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-4 justify-center md:justify-start">
          <a href="#projects"
            class="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-yellow-500 transition-all duration-300 text-center">
            View My Projects
          </a>
          <a href="#resume"
            class="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-yellow-500 transition-all duration-300 text-center">
            <i class="fas fa-file-alt"></i> Resume
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- Script for image rotation -->
  <script>
    const images = document.querySelectorAll(".fade-img");
    let index = 0;

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 5000);
  </script>

</body>

</html>
