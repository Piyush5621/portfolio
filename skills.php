<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Skills</title>

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>

<body class="bg-black text-white">

<header class="relative h-20 bg-black shadow-md">
    <?php include "header.php"; ?>
</header>

<section class="py-10 px-6 max-w-6xl mx-auto">

    <!-- Heading -->
    <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-2">My Skills</h1>
        <p class="text-gray-400 text-lg">Technologies I use to design & build modern web experiences.</p>
    </div>

    <!-- SKILLS GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <!-- Skill Card Template -->
        <?php
        // SKILL DATA (you can later move to database)
        $skills = [
            ["icon" => "fa-html5", "title" => "HTML", "level" => 95, "color" => "orange-500"],
            ["icon" => "fa-css3-alt", "title" => "CSS", "level" => 90, "color" => "blue-500"],
            ["icon" => "fa-js", "title" => "JavaScript", "level" => 85, "color" => "yellow-400"],
            ["icon" => "fa-php", "title" => "PHP", "level" => 80, "color" => "purple-500"],
            ["icon" => "fa-database", "title" => "MySQL", "level" => 75, "color" => "teal-400"],
            ["icon" => "fa-leaf", "title" => "Tailwind CSS", "level" => 90, "color" => "cyan-400"],
            ["icon" => "fa-server", "title" => "Supabase", "level" => 70, "color" => "green-400"],
            ["icon" => "fa-code", "title" => "C / C++", "level" => 85, "color" => "red-400"],
            ["icon" => "fa-java", "title" => "Java", "level" => 75, "color" => "orange-600"],
            ["icon" => "fa-python", "title" => "Python", "level" => 70, "color" => "blue-300"],
        ];

        foreach ($skills as $s) {
        ?>
            <div class="p-6 bg-[#0f0f0f] rounded-xl border border-gray-800 
                        shadow-xl hover:shadow-<?php echo $s['color']; ?>/40
                        hover:border-<?php echo $s['color']; ?> transition-all duration-300">

                <!-- Icon -->
                <div class="text-<?php echo $s['color']; ?> text-5xl mb-4">
                    <i class="fa-brands <?php echo $s['icon']; ?>"></i>
                </div>

                <!-- Skill Title -->
                <h3 class="text-2xl font-semibold mb-3"><?php echo $s['title']; ?></h3>

                <!-- Progress Bar -->
                <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div class="h-full bg-<?php echo $s['color']; ?> rounded-full"
                         style="width: <?php echo $s['level']; ?>%;"></div>
                </div>

                <p class="text-gray-400 text-sm mt-2"><?php echo $s['level']; ?>% proficiency</p>
            </div>
        <?php } ?>
    </div>

</section>

</body>
</html>
