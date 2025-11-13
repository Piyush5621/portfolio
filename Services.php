<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Services</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <!-- AOS (Animate On Scroll) -->
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
</head>

<body class="bg-black text-white">

    <header class="fixed w-full">
        <?php include "header.php"; ?>
    </header>

    <section class="py-12 pt-[6rem]">
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col mb-20">
                <span class="text-3xl font-bold mx-auto mb-2 border-b-2 border-yellow-500">My Services</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <!-- Service 1 -->
                <div data-aos="fade-up" data-aos-delay="100" class="bg-white/10 text-white shadow-md rounded-2xl p-6 text-center 
                 hover:shadow-yellow-500/50 hover:scale-105 hover:-translate-y-2
                 transition-all duration-300 ease-in-out">
                    <div class="text-yellow-500 text-5xl mb-4">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">UI/UX Design</h3>
                    <p class="text-gray-400 text-sm">Designing clean, responsive, and user-friendly interfaces with
                        modern UI/UX
                        principles.</p>
                </div>

                <!-- Service 2 -->
                <div data-aos="fade-up" data-aos-delay="200" class="bg-white/10 text-white shadow-md rounded-2xl p-6 text-center 
                 hover:shadow-green-500/50 hover:scale-105 hover:-translate-y-2
                 transition-all duration-300 ease-in-out">
                    <div class="text-green-500 text-5xl mb-4">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Web Development</h3>
                    <p class="text-gray-400 text-sm">Full-stack development using HTML, CSS, Tailwind, JavaScript, PHP,
                        and MySQL.
                    </p>
                </div>

                <!-- Service 3 -->
                <div data-aos="fade-up" data-aos-delay="300" class="bg-white/10 text-white shadow-md rounded-2xl p-6 text-center 
                 hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-2
                 transition-all duration-300 ease-in-out">
                    <div class="text-purple-500 text-5xl mb-4">
                        <i class="fas fa-database"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Database Management</h3>
                    <p class="text-gray-400 text-sm">Efficient data handling, secure storage, and optimized queries
                        using MySQL &
                        PHP.</p>
                </div>

                <!-- Service 4 -->
                <div data-aos="fade-up" data-aos-delay="400" class="bg-white/10 text-white shadow-md rounded-2xl p-6 text-center 
                 hover:shadow-red-500/50 hover:scale-105 hover:-translate-y-2
                 transition-all duration-300 ease-in-out">
                    <div class="text-red-500 text-5xl mb-4">
                        <i class="fas fa-bug"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Debugging & Optimization</h3>
                    <p class="text-gray-400 text-sm">Identifying bottlenecks, fixing issues, and ensuring smooth system
                        performance.</p>
                </div>

                <!-- Service 5 -->
                <div data-aos="fade-up" data-aos-delay="500" class="bg-white/10 text-white shadow-md rounded-2xl p-6 text-center 
                 hover:shadow-indigo-500/50 hover:scale-105 hover:-translate-y-2
                 transition-all duration-300 ease-in-out">
                    <div class="text-indigo-500 text-5xl mb-4">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Project Management</h3>
                    <p class="text-gray-400 text-sm">Planning, organizing, and collaborating effectively to deliver
                        projects on
                        time.</p>
                </div>

                <!-- Service 6 -->
                <div data-aos="fade-up" data-aos-delay="600" class="bg-white/10 text-white shadow-md rounded-2xl p-6 text-center 
                 hover:shadow-pink-500/50 hover:scale-105 hover:-translate-y-2
                 transition-all duration-300 ease-in-out">
                    <div class="text-pink-500 text-5xl mb-4">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Video Editing</h3>
                    <p class="text-gray-400 text-sm">Creative video editing with smooth transitions, effects, and
                        storytelling
                        impact.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- AOS Script -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1000,
            once: true
        });
    </script>

</body>

</html>