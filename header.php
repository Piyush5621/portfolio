<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Navbar</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&display=swap" rel="stylesheet">
</head>

<body class="bg-black">

  <header class="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-sm text-white shadow-md z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      <!-- Logo / Name -->
       <div class="flex gap-2">
           <!-- <h1 class="text-xl  border-4 border-white rounded-full" style="font-family: 'Pacifico', cursive; letter-spacing: 1px; color: #f3f3f3;">
               P
           </h1> -->
            <h1 class="text-3xl font-semibold" style="font-family: 'Pacifico', cursive; letter-spacing: 1px; color: #f3f3f3;">
                Piyush
            </h1>
       </div>
      

      <!-- Hamburger Button for Mobile -->
      <div class="md:hidden">
        <button id="menu-btn" class="text-white focus:outline-none">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Navigation -->
      <nav id="menu" class="hidden md:flex flex-col md:flex-row md:items-center md:gap-6 text-lg md:text-xl font-sans">
        <?php $currentPage = basename($_SERVER['PHP_SELF']); ?>

        <a href="index.php"
          class="hover:text-gray-400 transition <?php echo $currentPage === 'index.php' ? 'text-gray-400 underline' : ''; ?>">Home</a>
        <a href="about.php"
          class="hover:text-gray-400 transition <?php echo $currentPage === 'about.php' ? 'text-gray-400 underline' : ''; ?>">About</a>
        <a href="services.php"
          class="hover:text-gray-400 transition <?php echo $currentPage === 'services.php' ? 'text-gray-400 underline' : ''; ?>">Services</a>
        <a href="skills.php"
          class="hover:text-gray-400 transition <?php echo $currentPage === 'skills.php' ? 'text-gray-400 underline' : ''; ?>">Skills</a>
        <a href="certifications.php"
          class="hover:text-gray-400 transition <?php echo $currentPage === 'certifications.php' ? 'text-gray-400 underline' : ''; ?>">Certifications</a>
        <a href="contact.php"
          class="hover:text-gray-400 transition <?php echo $currentPage === 'contact.php' ? 'text-gray-400 underline' : ''; ?>">Contact</a>

        <!-- Admin Login -->
        <a href="admin/login.html"
          class="ml-0 md:ml-2 mt-2 md:mt-0 px-4 py-2 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 shadow hover:opacity-90 transition <?php echo $currentPage === 'projects.php' ? 'ring-2 ring-gray-600' : ''; ?>">
          Admin Login
        </a>
      </nav>

    </div>
  </header>

  <script>
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  </script>

</body>

</html>
