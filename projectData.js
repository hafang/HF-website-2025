// Project Data Module
// This file contains all project information for the portfolio website
// Each project is organized with consistent structure for easy maintenance

const PROJECT_DATA = {
    'meta-dior': {
        title: 'Meta x Dior',
        subtitle: 'Spark AR Studio, JavaScript, GLSL',
        description: `<h3>The Atelier of Dreams</h3>
        <p>Dior wanted sparkle and shine for the holidays, so we collaborated with Meta to bring some elegant AR wonder to their holiday campaign: Dream in Dior.
        For full case study and credits, please see <a href="https://buck.co/work/meta-x-dior" target="_blank">here</a>.</p>
        
        <h3>Technical Development</h3>
        <p>As one of the main creative technologists, I worked on bringing Dior products to life through pushing the limits of Spark AR and mobile spatial technology. This includes combining complex procedural shaders, particle systems, target tracking and plane tracking all into the effects, all the while ensuring a smooth mobile experience for as many users out there.</p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/dior_thumb02.png',
                caption: 'Act I - Le Grand Salon experience'
            },
            {
                type: 'image',
                src: 'images/thumbnails/dior_thumb03.png',
                caption: 'Paris activation - L\'Espace Parfums experience'
            },
        ],
        sections: [
            {
                id: 'overview',
                title: 'Project Scope',
                content: `<p>The project consists of 4 site-specific experiences in Seoul and Paris, an at-home experience, and a point-of-sale experience across hundreds of locations adorned and transformed multiple environments through a blanket of stars, glittering artworks, and ornate visual feasts.</p>
        
        <h3>Technical Innovation</h3>
        <p>As the lead creative technologist, I worked on bringing Dior products to life through pushing the limits of Spark AR and spatial technology. This includes combining complex procedural shaders, particle systems, target tracking and plane tracking all into the effects, all the while ensuring a smooth mobile experience for as many users out there.</p>
        
        <h3>Key Features</h3>
        <ul>
            <li>Complex procedural shader systems</li>
            <li>Dynamic particle effects and animations</li>
            <li>Multi-platform target and plane tracking</li>
            <li>Optimized mobile performance</li>
                </ul>`,
                media: [

                ]
            },
            {
                id: 'paris',
                title: 'Paris',
                content: `<p>Pop-up "L'atelier des Reves" was a magical holiday pop-up in a historic mansion on Paris' beautiful Parc Monceau. Over several weeks, Dior completely redecorated the mansion, creating a workshop of dreams.</p>
                
                <p>Guests enjoyed two acts of bespoke AR, which — for maximum immersion — had been designed for, and calibrated to each room, Le Grand Salon and L'Espace Parfums.</p>
                
                <h3>Act I - Le Grand Salon</h3>
                <p>Act I in Le Grand Salon launched from an image target that the guest scanned on a freestanding stele. A trail of stardust leads the guest to pivot and observe the ceiling around the room's central chandelier, located above the lavishly decorated dining table. The room's ceiling was replaced with an endless starry dome of Pietro Ruffo's imagination. Guests explored the celestial subjects by tapping them, bringing them to life through animation.</p>
                
                <h3>Act II - L'Espace Parfums</h3>
                <p>In Act II, upstairs in the L'Espace Parfums, guests set themselves among the heavens while interacting with the shimmering, falling stars.</p>`,
                media: [

                    {
                        type: 'mp4',
                        src: 'videos/optimized/dior_act1_native.mp4',
                        caption: 'Act I - Le Grand Salon'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/dior_act2_native.mp4',
                        caption: 'Act II - L\'Espace Parfums'
                    }

                ]
            },
            {
                id: 'seoul',
                title: 'Seoul',
                content: `<p>The Seoul activation led shoppers on a dazzling journey configured to the store's layout. Act I of the experience begins in the Chandelier Room, where Pietro Ruffo's constellation artwork lights up and beams brightly above the J'Adore Chandelier.</p>
                
                <p>Act II, in the Dinner de la Colle Noir, is a second experience with sparkling, falling stardust that blankets users as they interact with the environment.</p>`,
                media: [
                    {
                        type: 'mp4',
                        src: 'videos/optimized/seoul_act1_native.mp4',
                        caption: 'Act I - Chandelier Room'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/seoul_act2_native.mp4',
                        caption: 'Act II - Dinner de la Colle Noir'
                    }
                ]
            },
            {
                id: 'constellations',
                title: 'Dior Constellations',
                content: `<p>Dior Constellations is an AR reimagining of Pietro Ruffo's intricate artwork available to interact with hundreds of Dior beauty point of sale locations. We were tasked with bringing the figures in the two-dimensional etched illustration to life through animated interactive constellations.</p>
                
                <h3>Performance Optimization</h3>
                <p>To keep the AR effects performant, we kept the animation loops for our seven figures short and slow. We used baked animations for more complex assets that required it, like the constellations. We programmed particle animations and texture transition animations in Spark directly to fit within our constraints.</p>
                
                <p>We compressed all textures to work within the data budget before bringing them into Spark. Since we used multiple 4k and 8k textures for the sky domes in the scene, we used a custom patch to string together various 1k textures.</p>`,
                media: [
                    {
                        type: 'image',
                        src: 'images/thumbnails/dior_thumb01.jpg',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/dior_constellations_bts_native.mp4',
                        caption: 'Dior Constellations BTS'
                    }
                ]
            },
            {
                id: 'stars',
                title: 'Dior Stars',
                content: `<p>Dior Stars is an effect available globally that immerses users in a night sky featuring figures from Pietro Ruffo's artwork. By interacting with the scene, users transform these constellations into the iconic Dior products Sauvage, J'Adore, or Miss Dior, while dispersing stars across the environment through touch gestures on their device.</p>
                
                <h3>Product Reveal Transitions</h3>
                <p>The defining feature of the Dior Stars is the product reveal/disappear transitions, which went through several rounds of experimentation and design to get just right. Our first attempt was a custom dissolve animation that gave us control over the extraneous details and visually matched how the filigrees (the ornate, intricate patterns) looked —but ultimately, it still felt too distracting as a transition.</p>
                
                <p>To synchronize with the client's vision, we opted for a simple fade-in/fade-out of each of the main elements: the product materials, the constellations, and the filigrees.</p>
                
                <h3>Glass Shader Innovation</h3>
                <p>We combined Fresnel effects with custom glass shaders using multiple layers of render passes to simulate glass in real-time rendering with reflection and refraction faithfully. This combination helped create a differing reflectance on the surface of each product depending on the angle from which the viewer stood.</p>`,
                media: [
                    {
                        type: 'mp4',
                        src: 'videos/optimized/dior_stars_native.mp4',
                        caption: 'Dior Stars'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/dior_starsBTS_native.mp4',
                        caption: 'Dior Stars BTS'
                    }
                ]
            }
        ],
        credits: 'Year: 2022<br>Client: Meta x Dior<br>Role: Lead Creative Technologist, AR Developer'
    },

    'meta-fendi': {
        title: 'Meta x Fendi',
        subtitle: 'Spark AR Studio, JavaScript, GLSL',
        description: `<h3>Campaign Concept</h3>
        <p>As the lead creative technologist, I helped craft two Meta Spark AR experiences paying homage to 
        Fendi’s Roman birthplace while celebrating the launch of their FW22 collection hero sneaker, the Fendi Faster. For full case study and credits, 
        please see <a href="https://buck.co/work/meta-x-fendi" target="_blank">here</a>.</p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/fendi_hero.png',
                caption: 'Fendi Faster AR Experience'
            }
        ],
        sections: [
            {
                id: 'masterpiece',
                title: 'Masterpiece',
                content: `Masterpiece by Fendi is an innovative AR effect geo-activated in Rome in front of the Palazzo della Civiltà Italiana, home of Fendi's headquarters. 
                This experience is a tribute to Fendi’s deep connection with Rome and the classical arts and invites people to try their hand at sculpture. Modern Michelangelos shape a virtual block of stone from which the Fendi Faster sneakers take shape: a new masterpiece. 
                To seamlessly blend our virtual materials with the actual headquarters, BUCK poured over reference images matching the color and texture of the onsite travertine and marble stone.
                </p>`,
                media: [
                    {
                        type: 'image',
                        src: 'images/thumbnails/fendi_sketch.png',
                        caption: 'Pencil Board'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/fendi_masterpiece_native.mp4',
                        caption: 'Fendi Masterpiece'
                    }
                ]
            },
            {
                id: 'faster',
                title: 'Faster',
                content: `Faster by Fendi is a scalable AR experience available for Stories and Reels on both Facebook and Instagram worldwide. 
                Meta Spark’s hand and planar tracking capabilities allow people to have an interactive experience where they dig for hidden treasure (the Faster shoe) right under their feet!
                </p>`,
                media: [
                    {
                        type: 'image',
                        src: 'images/thumbnails/fendi_faster_sketch.png',
                        caption: 'Pencil Board'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/fendi_faster_native.mp4',
                        caption: 'Fendi Faster'
                    }
                ]
            }
        ],
        credits: 'Creative Direction: Fendi<br>AR Development: Haolin Fang<br>Platform: Meta Spark AR<br>Year: 2023'
    },

    'ups-aapi': {
        title: 'UPS AAPI Month 2023',
        subtitle: 'Spark AR Studio, JavaScript, Cultural Design',
        description: `<h3>Campaign Overview</h3>
        <p>For 2023's AAPI Heritage Month, we teamed up with the Martin Agency to create a duo-camera AR effect for UPS. 
        The AR effect consists of both front camera (aka selfie mode) and back camera (aka world mode) effects. 
        The effects spotlight the artwork of Chinese-American artist, Stevie Shao, and brings her illustrations to life in AR 
        by adding in 2D and Spark animations. Users can access the QR code to the AR experience through a poster when they visit the UPS stores. 
        The QR will lead them to a micorsite that contains helpful information and link to the AR experience. And as a reward, users who unlock 
        the experience will receive a 5% off shipping coupon.</p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/ups-aapi/ups_proudlyUnstop.png',
                caption: 'UPS AAPI Heritage Month AR Experience'
            }
        ],
        sections: [
            {
                id: 'front-camera',
                title: 'Front-camera Experience',
                content: `
                <p>
                This effect features both a front-camera and back-camera experience. 
                
                For the front camera effect, we took inspiration from our very own Lunar New Year 2023 fortune effects and replaced the visuals with Stevie's fantastical 
                landscapes and animals. And instead of shuffling for a fortune, the effect shuffles and reveals an AAPI-owned small business at the end.
                </p>`,
                media: [
                    {
                        type: 'mp4',
                        src: 'videos/optimized/UPS_AAPI_front_native.mp4',
                        caption: 'Front-camera experience'
                    },
                    {
                        type: 'image',
                        src: 'images/ups-aapi/selfie_ref.png',
                        caption: ''
                    }
                ]
            },
            {
                id: 'back-camera',
                title: 'Back-camera Experience',
                content: `<p>
                For the back camera effect, we created a world-space and target tracked experience. The world scene spotlights Stevie's Ascending Tiger in a diorama-like approach in AR. 
                Once launched, the rear-facing camera effect would tell users to find the poster – at which point the poster would trigger a virtual version of the piece, which extends beyond the bounds of the frame to create a surreal landscape. 
                Stevie’s butterflies could animate off the wall surface and into the user’s real environment, the tiger could pull faces, bamboos and grasses could sway with the wind!
                </p>`,
                media: [
                    {
                        type: 'image',
                        src: 'images/ups-aapi/UPS_poster.png',
                        caption: 'Final poster for in-store activation'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/optimized/UPS_AAPI_back_native.mp4',
                        caption: 'Back-camera experience in action'
                    }
                ]
            },
            {
                id: 'highlight',
                title: 'Technical Highlight | Tiger Expressions Animation Randomizer',
                content: `<p>
                Perhaps the most complicated element in this world was the tiger, due to its multiple animations. When the scene first fades in, the tiger has an intro animation of it jumping into the landscape. After the intro, the tiger cycles through 5 different animated expressions randomly throughout the experience. While pure randomization in Spark isn't too much of a challenge, we actually needed a more refined and custom randomizer so that the tiger expressions never repeat consecutively AND all 5 are animated in a pre-determined random sequence. 
                <br><br> To do so, we ended up writing a pretty straighforward "smart" randomizer script. The script pre-shuffles an array of integer values 1-5 and continuously generates new shuffled arrays one after another. The script also makes sure that the first value of the new array is not the same as the last value of the old array - this ensures 100% no repeats. At the same time, the script sends the values out one by one to the patches, telling Spark exactly which tiger animation sequence to play. 
                <br><br> The following GIF shows the values logged out onto the console as an example of how the script is working:
                </p>`,
                media: [
                    {
                        type: 'gif',
                        src: 'images/ups-aapi/tiger_randomizer.gif',
                        caption: ''
                    },
                    {
                        type: 'gif',
                        src: 'images/ups-aapi/tiger_animRef.gif',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2023<br>Client: UPS x Martin Agency<br> Role: Lead Creative Technologist, AR Developer'
    },

    'buck-lny': {
        title: 'BUCK x LNY 2023',
        subtitle: 'Spark AR Studio, JavaScript',
        description: `<h3>An AR Lunar New Year Celebration</h3>
        <p>To celebrate the Year of the Water Rabbit, I teamed up with Buck's very own APAC ERG members to create 4 fun AR effects. Each effect had its own theme and was released throughout the month of February.
        <br><br> In each effect, a CTA will prompt the user to press record, which will then trigger the fortune cookie on the screen to break apart, revealing a fortune banner that will shuffle through various texts before landing on the final fortune.</p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/lny_thumb02.png',
                caption: 'BUCK Lunar New Year 2023 AR Experience'
            }
        ],
        sections: [
            {
                id: 'fortune-luck-love',
                title: 'Year of the Rabbit Fortunes',
                content: ``,
                media: [
                    {
                        type: 'mp4',
                        src: 'videos/lny/LNY23_AR_Week01_Wes.mp4',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'videos/lny/LNY23_AR_Week02_Ken.mp4',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'videos/lny/LNY23_AR_Week03_Soyeon.mp4',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'videos/lny/LNY23_AR_Week04_Vik.mp4',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2023<br>Client: BUCK<br>Role: Lead Creative Technologist, AR Developer'
    },

    'dream-stream': {
        title: 'Dream Stream',
        subtitle: 'Unity, Multiplayer VR',
        description: `<h3>Annual Holiday Party Gone Virtual</h3>
        <p>
        When the pandemic hit in 2020, our annual holiday party went virtual, giving us our first bite of the “VR party” apple. 
        <br><br>
        While the experience was an exciting dipping of our toes into the VR water, we had a yearning for an even bigger, better virtual holiday experience. 
        So we knew in 2021, we would have to go big with a truly immersive VR extravaganza—something that pushed ourselves and the medium into an exciting new place.
        <br><br>
        Enter the <a href="https://www.meta.com/en-gb/experiences/dream-stream/4350002915036657/" target="_blank">Dream Stream</a>.
        <br><br>
        For full case study and credits, please see <a href="https://buck.co/work/dream-stream" target="_blank">here</a>.
        </p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/dreamstream_thumb01.png',
                caption: 'Dream Stream VR Experience'
            }
        ],
        sections: [
            {
                id: 'concept',
                title: 'Protopian Dreams',
                content: `<p>The idea was to let go of reality and gently drift through a brain dreaming of Protopia—a place to proactively prototype hopeful futures based on our values of community and creativity. To help bring our Protopia to life, we sent out a questionnaire to staff that prompted them to think of dream-inspired themes, ideas, and moments.
                <br><br> 
                They came back with an embarrassment of riches in the form of surreal imagery, engaging interactions, and hilarious scenarios—everything from levitating creme brûlée to a tennis grudge match with Nicki Minaj that substituted T-bone steaks for rackets.</p>`,
                slideshow: true,
                media: [
                    {
                        type: 'image',
                        src: 'images/dreamstream/dreamstream06.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/dreamstream/dreamstream05.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/dreamstream/dreamstream03.jpg',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/dreamstream/dreamstream04.jpg',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/dreamstream/dreamstream07.jpeg',
                        caption: ''
                    }
                ]
            },
            {
                id: 'zones',
                title: 'Deep Dive into the Zones',
                content: `
                <p>The idea of creating multiple zones (or worlds) was hatched from a logistical concern. With 500 inner tubes on the river, we were worried about congestion and bottlenecking.

                <p>By breaking up the traffic into different explorable zones, we could provide a more enjoyable experience. In all, six zones made it into the finished experience: Theta Waves, Pawllywood, Cape Huggleton, The Lollipop, Gallery Bay, and BUCK FM.
                
                <h3>Theta Waves</h3>
                <p>Relaxing, calming, minimal, and a bit magic. This is your brain just before it slips into dreamworld.

                <h3>Pawllywood</h3>
                <p>An ode to the most loyal of slack channels, #pupperinos. This is where puppers and other four-legged friends go when they die...a heavenly dog park in the sky. Where dog meets dog spelled backwards.

                <h3>Cape Huggleton</h3>
                <p>Welcome to Friendship Land, where all creatures, great and small, can be themselves, and be loved for it. The vibe is mid-tempo acid jazz. Feel that brand new heavy.

                <h3>The Lollipop</h3>
                <p>Where childhood, creativity, and the inner mind meet. A colorful landscape of candy and drip castles laced with frosting and psychedelia.

                <h3>Gallery Bay</h3>
                <p>A awe-inspiring art tunnel wallpapered with BUCK’s best work from the year. From client work to personal illustrations, this is where we fanned our feathers. Off the main gallery was a crowd favorite, a small alcove that offered 3D air drawing.

                <h3>BUCK FM</h3>
                <p>A small grotto where the BUCK fam left wishes for the new year along with audio recordings. Follow the river, listen to the dreams.

                <p>Each zone had some low commitment activities like throwing beach balls or taking pictures for a scavenger hunt. We kept the controls for these simple and intuitive. 
                The beach balls had an addicting “Jedi force” mechanic that gave the user the feeling of telekinesis.</p>

                <p>Although conceptually different, all the zones needed to feel connected. This was achieved through the color palette and a general shape 
                language as well as a few general guiding principles: the worlds should be open sky with wide rivers and sparsely populated land in order to not 
                feel claustrophobic and give the whole experience a calming, meditative vibe.</p>`,
                media: [
                    {
                        type: 'gif',
                        src: 'images/dreamstream/DreamStream_Clip_01_v02.gif',
                        caption: ''
                    },
                    {
                        type: 'gif',
                        src: 'images/dreamstream/DreamStream_Clip_04_v02.gif',
                        caption: ''
                    },
                    {
                        type: 'gif',
                        src: 'images/dreamstream/DreamStream_Clip_02_v02.gif',
                        caption: ''
                    }
                ]
            },
            {
                id: 'highlight',
                title: 'Custom Caustics Wall Shader',
                content: `
                <p>As one of the creative technologists, I worked on creating custom water caustics shaders to bring in some extra magic to the visual experience.</p>
                <p>The custom shader blends the baked diffuse with a custom caustics texture, which gets animated using realtime distortion.</p>
                `,
                media: [
                    {
                        type: 'image',
                        src: 'images/dreamstream/caustics_unity.png',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'images/dreamstream/caustics_demo.mp4',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Concept & Development: Haolin Fang<br>Audio Design: Collaborative<br>Platform: Unity WebGL<br>Year: 2022'
    },

    'renderball': {
        title: 'Renderball - MSG Sphere Visualizer',
        subtitle: 'Unreal Engine, Real-time Rendering, Tooling, Software',
        description: `<h3>A Real-time Visualizer Tool</h3>
        <p>Renderball is a lightweight, user-friendly Unreal Engine application designed for quick previewing of imagery and video content on the MSG Sphere. Created to help Buck artists, directors and clients to efficiently visualize content from all perspectives without needing Unreal Engine expertise.</p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/renderball/RB_Main.png',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'problem',
                title: 'The Problem',
                content: `
                <p>Designing and animating on a sphere presents unique challenges. Given the size and 360-degree nature of the canvas, 
                it's important to efficiently visualize content from all viewing angles. Initially, we used an Unreal Engine project provided by MSG, 
                but this required a dedicated specialist to process and render previews—a time-consuming process that hindered rapid experimentation and feedback.</p>
                `,
                media: [
                ]
            },
            {
                id: 'solution',
                title: 'The Solution',
                content: `
                <p>Renderball is an Unreal Engine-based tool designed for quick previewing of imagery and video on the Sphere. 
                Our Creative Technology team developed this lightweight application, enabling designers, artists, directors, and 
                clients to easily preview their work from all perspectives without needing Unreal Engine installed.</p>
                `,
                media: [
                    {
                        type: 'image',
                        src: 'images/renderball/Renderball_HF.png',
                        caption: 'Some fun with the NDI streaming feature'
                    }
                ]
            },
            {
                id: 'features',
                title: 'Core Features',
                content: `
                <p>Renderball features a simple interface with intuitive controls for easy navigation and visualization.</p>
                <ul>
                    <li>Easy Media Import: Drop image sequences and videos (mp4, mov, jpg, png, exr)</li>
                    <li>Preset Camera Angles: Set camera to predefined angles based on popular social media drone postings</li>
                    <li>Dynamic Environment: Change time of day and lighting conditions</li>
                    <li>Content Control: Customize content playback (speed, rotation, brightness)</li>
                    <li>Export Capabilities: Export stills & video renders</li>
                    <li>NDI Connectivity: Direct integration with Photoshop, Nuke, After Effects, and more</li>
                    <li>Multiple Movement Modes: Fly, walk, and pivot camera controls</li>
                    <li>Real-time Preview: Instant feedback for rapid iteration</li>
                </ul>
                `,
                media: [
                    {
                        type: 'gif',
                        src: 'images/renderball/rb_interface.gif',
                        caption: ''
                    }
                ]
            },
            {
                id: 'conclusion',
                title: 'Renderball\'s Lasting Impact',
                content: `
                <p>Renderball has been a huge success, helping Buck artists, directors and clients to efficiently visualize content from all perspectives even to this day.
                It has greatly improved the process of visualizing content on the Sphere and has become a staple tool for the Buck MSG Sphere team.</p>
                `,
                media: [
                    {
                        type: 'image',
                        src: 'images/renderball/Renderball_Dawn.png',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2023-2024<br>Client: MSG, Buck<br>Role: Lead Creative Technologist, Unreal Engine Developer'
    },

    'meta-tiffany': {
        title: 'Meta x Tiffany & Co.',
        subtitle: 'Spark AR Studio, JavaScript',
        description: `<h3>The Landmark</h3>
        <p>
        A world-space, 3 DoF AR effect to celebrate Tiffany's flagship relaunch on Fifth Avenue in Midtown, Manhattan. Tiffany & Co. is one of the most luxurious jewelry design house and we wanted to reflect the magicalness and fanciness of their jewels in our effect.
        </p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/tiffany/several_animals_v01.png',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'userflow',
                title: 'The User Flow',
                content: `
                <p>
                User starts off on the back camera, which then triggers the animations to begin. A couple of bejeweled fish, along with a few other animals, animate in and lights up each floor of the main Tiffany landmark building. The roof of the landmark then lifts to reveal a giant spinning Tiffany diamond. The user is then encouraged to swipe across their screen to rotate the diamond some more. A series of animations will progress as the user looks around the scene and immerses themselves in this fantasy Tiffany intersection. At this point, the user can also switch to front camera for a selfie mode, where everything looks the same except placed farther back behind the user now. All animations in the scene will continue looping throughout the effect.
                </p>

                <p>
                Since the effect simulates a 3 DoF experience, the user can rotate their camera to view more of the scene. But the camera feed will start to fade in once user rotates past the thresholds set.
                </p>`,
                media: [
                    {
                        type: 'image',
                        src: 'images/tiffany/tiffanyAR_userflow.png',
                        caption: ''
                    }
                ]
            },
            {
                id: 'technical',
                title: 'Technical Highlights',
                content: `
                <p>
                Quick note: At the beginning, client was able to grant us an additional 3MB of file size to work with, making the file size limit 7MB instead of the usual 4MB! While this seemed super generous, it soon became apparent to us that it was still not enough to fit all the assets in the effect to match our original style ref. So we were able to push for a 10MB file size limit!
                </p>

                <h3>Tiffany Diamond's Kira Effect</h3>
                <p>
                Aside from the Landmark building, the other main character of the effect was the giant Tiffany Diamond. Especially with the large scale of the diamond, we had to make sure the diamond was extra shiny and dimensional. We first started with an old diamond matcap we had previously made for a Rihanna filter and tested with that. But the Tiffany diamond had a really unique yellow color and a much higher density composition, so we ended up creating a custom matcap - using Midjourney and Photoshop.
                </p>

                <p>
                To make the diamond even more magical, we added kira and bokeh effects as the diamond rotated. Caustics and pulsing glow were also layered on top to spotlight the diamond even more. The same kira shader was used for the Royal Fish assets later.
                </p>
                `,
                media: [

                    {
                        type: 'mp4',
                        src: 'images/tiffany/tiffany_diamond_demo.mp4',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'images/tiffany/tiffany_diamond.mp4',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/tiffany/tiffanyAR_matcap.png',
                        caption: ''
                    }
                ]
            },
            {
                id: 'animations',
                title: 'Animal Animations',
                content: `
                <p> If you open up the project, you'll notice that there were two different animation methods used for the bejeweled animals. </p>

                <h3> Bird & Royal Fish Animations</h3>
                <p>
                The bird and fish assets had fully baked animations, including their flight/swimming paths. Slight adjustments were made in Spark to change their transforms slightly and to offset their timing.
                </p>

                <h3> Tiger Animations</h3>
                <p>
                The jellyfish and seahorse assets had baked looping (in place) animations, but their transforms were all animated manually using Spark's keyframe patches. The keyframe workflow in Spark is still very nascent so I would definitely recommend avoiding it as much as possible. Although doable, the process was very tedious and not efficient at all. If we do ever need to use the keyframe patches in the future, I'd recommend saving it for really simple and linear animations and/or having CG bake out the complete animation and import it as a temporary visual aid for animating it in Spark.
                <br> <br>
                We decided to keyframe in Spark largely because we were tight on file size budget (this was before client gave us 10MB).
                </p>
                `,
                media: [
                    {
                        type: 'mp4',
                        src: 'images/tiffany/tiffany_fish.mp4',
                        caption: ''
                    },
                    {
                        type: 'mp4',
                        src: 'images/tiffany/tiffany_jellyfish.mp4',
                        caption: ''
                    }
                ]
            },
            {
                id: 'textures',
                title: 'Environment Textures & Final Demo',
                content: `
                <p>
                Aside from more simple surfaces like the ground, pavement and the street sign, pretty much everything in the scene is using a baked color and normal map. This was necessary to match our style refs completely. We also had to use baked shadow maps for the buildings since Spark isn't able to dynamically cast shadows yet.
                </p>
                `,
                media: [
                    {
                        type: 'mp4',
                        src: 'images/tiffany/tiffany_demo.mp4',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2023 <br> Client: Meta x Tiffany & Co.<br> Role: Lead Creative Technologist, AR Developer'
    },

    'roblox-phaserider': {
        title: 'Roblox Phaserider Demo',
        subtitle: 'Roblox Studio',
        description: `<h3>Experimenting with Roblox Studio</h3>
        <p>As an effort to explore Roblox Studio and revive some old assets from a previous Buck game, Phaserider, I created a demo of the world where users can openly explore in. Roblox studio was 
        a new tool for us to develop multiplayer experiences on and was a very accessible platform for others to join in on the fun.</p>
        
        <p>
        Explore the world of Phaserider in Roblox <a href="https://www.roblox.com/games/17002237661/Stomping-Grounds-Ep-2-Phase-Rider" target="_blank">here</a>!
        </p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/phaserider_thumb01.png',
                caption: 'Roblox Phaserider Demo'
            }
        ],
        sections: [
            {
                id: 'process',
                title: 'New Tool = New Worlds',
                content: `<p>
                As a creative technologist, I'm always looking for new tools to experiment with and push the boundaries of what's possible. 
                Fortunately, the technology industry is always evolving and new tools are being created all the time. When Roblox announced that they were
                releasing Roblox Studio, I knew I had to try it out. Many of us have Roblox already installed on our computers or knew someone who did, 
                so it was a no-brainer to create something with it and share it with everyone.
                </p>`,
                media: [
                    {
                        type: 'mp4',
                        src: 'videos/optimized/roblox_phaserider_fixed.mp4',
                        caption: ''
                    }
                ]
            },
            {
                id: 'gallery',
                title: 'Some Stills',
                content: `<p>Some breath-taking moments from the Phaserider world.</p>`,
                slideshow: true,
                media: [
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider01.png',
                        caption: 'Phaserider Development Screenshot 1'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider02.png',
                        caption: 'Phaserider Development Screenshot 2'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider03.png',
                        caption: 'Phaserider Development Screenshot 3'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider04.png',
                        caption: 'Phaserider Development Screenshot 4'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider05.png',
                        caption: 'Phaserider Development Screenshot 5'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider06.png',
                        caption: 'Phaserider Development Screenshot 6'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider07.png',
                        caption: 'Phaserider Development Screenshot 7'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider08.png',
                        caption: 'Phaserider Development Screenshot 8'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider09.png',
                        caption: 'Phaserider Development Screenshot 9'
                    },
                    {
                        type: 'image',
                        src: 'images/phaserider/phaserider10.png',
                        caption: 'Phaserider Development Screenshot 10'
                    }
                ]
            }
        ],
        credits: 'Year: 2024<br>Platform: Roblox, Roblox Studio<br>Role: Lead Creative Technologist'
    },

    'buck-altspace': {
        title: 'Holiday VR Party 2021',
        subtitle: 'Unity, AltspaceVR, Custom Shaders',
        description: `
        
        <h3>Better Late Than NeVR Party | Feb. 4th, 2021 | 3p - 4:50p</h3>
        <p>
        After nearly a year of seeing each other trapped in digital rectangles on countless video calls, we needed to kick off 2021 by doing something different. Something to reconnect us all.
        <br><br>
        Here was our idea:
        <br><br>
        Send 300 Oculus Quest VR headsets to all BUCK employees around the world. Then, organize a company-wide party in VR, complete with a live DJ, an art gallery, games, a keynote presentation, virtual cocktails, and fireworks. 
        <br><br>
        Oh, and build the world for that party from scratch.
        </p>
        `,
        heroImage: [
            {
                type: 'image',
                src: 'images/altspace/altspace_hero.png',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'innovation',
                title: 'Pandemic Innovation',
                content: `
                <p
                Virtual reality is surprisingly powerful stuff.
                <br><br>
                Even though you are consciously aware that you're in a virtual world, the reptile part of your brain isn't. This creates a sense of presence and explains why VR works so well for things that are hard to convey via chest-up 2D video chat.
                <br><br>
                VR also helps us regain things lost by not being in the office together:
                <br><br>
                - Watercooler moments of social connection
                <br><br>
                - Trust-building
                <br><br>
                - Work/life/home balance
                <br><br>
                - New creative opportunities
                </p>`,
                media: [
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_process.png',
                        caption: ''
                    }
                ]
            },
            {
                id: 'design',
                title: 'Design',
                content: `
                <p>
                We wanted the environment to feel positive, warm, and playful.
                </p>

                <p>
                In the early sketch phase, we discovered that we loved filling the virtual world with warm, all-encompassing, undulating gradients. We also did a lot of experimenting with soft forms and structures.
                </p>

                <p>
                Using saturated gradients as a sky-scape and a sculpture garden of playful shapes and iconic Buck characters, we focused on feelings of optimism and fun as we continued to explore.
                </p>
                `,
                slideshow: true,
                media: [
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_world01.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_world02.png',
                        caption: 'A'
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_world03.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_world04.png',
                        caption: ''
                    }
                ]
            },
            {
                id: 'gallery',
                title: 'Let\'s Party!',
                content: `
                Some shots from the party!
                `,
                slideshow: true,
                media: [
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_party_01.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_party_02.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_party_03.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_party_04.png',
                        caption: ''
                    },
                    {
                        type: 'image',
                        src: 'images/altspace/altspace_party_05.png',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2021<br>Platform: AltspaceVR, Unity<br>Role: Main Creative Technologist, Unity Developer'
    },

    'tokyo-olympics': {
        title: 'Tokyo Olympics 2020',
        subtitle: 'Spark AR Studio, JavaScript, Motion Graphics',
        description: `<h3>Do What I Do!</h3>
        <p>An Instagram AR experience that connects people to the 2020 Tokyo Olympics. Users match poses with the two Olympic mascots, Miraitowa and Someity!</p>`,
        heroImage: [
            {
                type: 'gif',
                src: 'images/tokyo2020/BikeLoop.gif',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'gameplay',
                title: 'AR Gameplay',
                content: `
                <p>
                What's better than an AR filter? An mini game and a face filter!
                </p>

                <p>
                To match the competitive spirit of the Olympics, we added a game element to this AR effect. This effect features a simon says like memory game sequence. 
                Players are instructed to follow a sequence of poses under a time limit. When the game ends, the player will be rewarded medal(s) and a final score result, 
                showing how many sequences they have completed correctly. There are a total of 10 pose sequences, the poses are randomized on launch. 
                Initially, we had also incorporated hand gestures, but removed them later because as of v105.1, hand tracking was not supported by IG effects. 
                Poses were a combination of 3 features: mouth open/close, head tilt left/right, left/right eye blink or both open. 
                Different audio and visual cues are triggered throughout the game.
                </p>`,
                media: [
                    {
                        type: 'mp4',
                        src: 'images/tokyo2020/IG_Olympics2021_AR.mp4',
                        caption: ''
                    }
                ]
            },
            {
                id: 'technical',
                title: 'Game State Engine System',
                content: `
                <p>
                As always, we push the limits of Spark AR to make the best experience possible. Meta Spark AR Studio is not a game engine, 
                so we had to come up with a custom game state engine system through scripts and patches. 
                With a tight deadline, we had to think outside the box and come up with a solution that would work within the constraints of Spark AR, 
                while still being mobile-friendly.
                </p>

                <p>
                The final effect was made up of a hybrid script + patch system:
                <br><br>
                The script is where the game logic and the different game states are setup. This includes the memory game logic, various global variables that have to be initialized and reset from the script and sent to the patches. The script also restarts the game properly and detects if the player has lost or won the game.
                <br><br>
                The patch editor is where all the visual and audio elements are setup. The mascots' animation controllers are all enabled and reset here, and the script tells the patches which animation the mascot needs to play. Another important job for the patches is to detect if the player has matched the pose. The script tells the pose-matching block which pose the player is currently working on, and determines which thresholds (head tilt angle, mouth open, etc.) the block should be detecting for.
                <br><br>
                This hybrid system allows for better organization and clearer division between the backend and frontend of the game. Especially since Spark AR isn't a game engine, it's important to utilize both scripts and patches to make life easier when developing.
                </p>`,
                media: [
                    {
                        type: 'gif',
                        src: 'images/tokyo2020/tokyo2020_lift.gif',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2020<br>Client: International Olympic Committee <br> Role: Lead Creative Technologist, AR Developer'
    },

    'meta-fitXR': {
        title: 'Meta x Quest II x FitXR',
        subtitle: 'Spark AR Studio, JavaScript, Body Tracking',
        description: `<h3>An AR + XR Crossover Experience</h3>
        <p>As a way to promote FitXR on the Quest II with Meta, 
        we created a special and unique Instagram AR experience that brings the FitXR experience to any user on their phone.</p>`,
        heroImage: [
            {
                type: 'image',
                src: 'images/fitXR/fitXR_stock.jpg',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'about',
                title: 'The Portal to FitXR',
                content: `
                <p>
                Symbolically and visually, this effect serves as a portal to the FitXR experience without the need of a Quest headset. 
                The user is guided through a series of animations and interactions to the FitXR experience, the entire experience lasts about 30 seconds.
                </p>

                <p>
                The AR experience starts with intro copy, legal disclaimer, a "Tap to Place" CTA and a plane-tracked ground grid visual. After the user taps and places the tracker, the grid will lock in place and an expanding dot to square transition will animate in. A guardian cage (also a gridded design) will emerge from the ground. The crosses at the front of that guardian cage will animate out to connect. All of these animations were done in Spark via SDF animations. This allowed us to save a lot of file space.
                </p>
                `,
                media: [
                    {
                        type: 'mp4',
                        src: 'images/fitXR/SueAR_Demo_Opt.mp4',
                        caption: ''
                    }
                ]
            },
            {
                id: 'bts',
                title: 'A Mock FitXR World for a Mobile-friendly Experience',
                content: `
                
                <h3>Onboarding Guardian Animations</h3>
                <p>
                In order to create a fully immersive FitXR world for the user to step into, we composited a mock FitXR world and brought it into Spark. To get as close to the FitXR lighting and vibe but also keep things under our 4MB limit, we baked all of the lighting, shadows and normals into textures on flat materials. With this setup, the user is able to walk around inside the portal world and really explore the space they're in.
                </p>

                <p>
                To make it even more believable, we also added a 3D animation of FitXR hands punching orbs and dynamic scoreboards to really make it look like the VR version.
                <br><br>
                For the punching animations, we actually created a quick hit detection engine in Spark via script/patches to trigger the bursting and glowing ring animations.
                </p>
                `,
                media: [
                    {
                        type: 'image',
                        src: 'images/fitXR/fitXR_ref.png',
                        caption: 'FitXR World Reference'
                    },
                    {
                        type: 'image',
                        src: 'images/fitXR/mockfitXR_spark.png',
                        caption: 'Simplified FitXR World in Spark AR Studio'
                    }
                ]
            }
        ],
        credits: 'Year: 2022 <br> Client: Meta x FitXR x Quest <br> Role: Lead Creative Technologist, AR Developer'
    },

    'spark-ar': {
        title: 'Various Spark AR Effects',
        subtitle: 'Spark AR Studio, JavaScript, GLSL',
        description: `<h3>Four Years Well Spent</h3>
        <p>
        After graduating in 2019, my career officially started at Buck as an Spark AR developer. 
        Thanks to Buck, I've been fortunate enough to work with a wide range of clients and partners in the past 4 years. And eventually got more and more used to seeing 
        my face on the screen the entire time!
        </p>
        
        <p>
        My goal has always remained the same: Push the limits of Spark AR and mobile spatial technology to create the best experience possible for people all around the world.
        </p>

        <p>
        Of course, that is easier said than done. While my knowledge and skillset can grown indefinitely, mobile spatial technology is 
        still a young and rapidly evolving field. Mobile experiences are constrained by the hardware and software of the device, and 
        there are many factors that can affect the performance of the experience. Creating an experience that is both technically impressive and aesthetically pleasing is a challenge, 
        but I'm glad I've been able to rise to the occasion.
        </p>
        `,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/meta_spark.png',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'work',
                title: 'Show and Tell',
                content: `
                <p>
                A collection of AR effects ❤️ made with Meta Spark AR Studio.
                </p>
                `,
                media: [
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_aapi.mp4',
                        caption: 'AAPI Heritage Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_fruitboops.mp4',
                        caption: 'Fruit Boops Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_fallblossom.mp4',
                        caption: 'Fall Blossom Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_nye2020.mp4',
                        caption: 'New Year 2020 Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_francine.mp4',
                        caption: 'Francine Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_frankenstein.mp4',
                        caption: 'Frankenstein Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_givehand.mp4',
                        caption: 'Give Hand Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_kaleidoscope.mp4',
                        caption: 'Kaleidoscope Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_timelapse.mp4',
                        caption: 'Timelapse Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_anchor.mp4',
                        caption: 'Anchor Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'videos/various/ar_klarna.mp4',
                        caption: 'Klarna AR Effect'
                    }
                ]
            }
        ],
        credits: 'Year: 2019-2024<br>Platform: Meta Spark AR Studio<br>Role: Lead Creative Technologist, AR Developer'
    },

    'yugalabs-takeoff': {
        title: 'Buck x Takeoff',
        subtitle: 'Animaze, Virtual Puppetry, Virtual Production',
        description: `
        <p>
        When Takeoff was getting ready to launch their app, they reached out to Buck to help them create a real-time brand avatar and create social films with it. As the lead Creative Technologist, I helped Buck and Takeoff create a real-time brand avatar and 6 different social films.
        </p>
        <p>
        Join Takeoff <a href="https://join.takeoff.app/" target="_blank">here</a>!
        </p>
        `,
        heroImage: [
            {
                type: 'image',
                src: 'images/thumbnails/takeoff_long.png',
                caption: ''
            }
        ],
        sections: [
            {
                id: 'real-time-puppet',
                title: 'New Softwares and a Real-time Puppet',
                content: `
                <p>
                To help the client post timely updates in the fast-moving crypto space, we developed a puppet toolkit designed for ease of use by a small team. 
                </p>

                <p>
                With the tight timeline we had, we could not afford to spend time developing a comprehensive real-time puppet system. Instead, after some thorough research and experimentation, we landed on Animaze. 
                Animaze is an AI-driven software that, despite some early rigging and animation challenges, offered an intuitive interface ideal for real-time performance.
                </p>
                
                <p>
                In addition to face-tracking for dialogue, Animaze includes triggerable animations to support more expressive, well-rounded performances. The puppeteer also has full control over camera placement to suit their scene.
                </p>

                <p>
                So by combining face-tracking, triggerable animations and camera placement, we were able to create a real-time puppet that could perform a variety of different scenes.
                </p>

                <p>
                Visit Takeoff's personal page <a href="https://www.tiktok.com/@takeofftheapp" target="_blank">TikTok</a> to see the social films in action.

                `
                ,
                media: [

                ]
            },
            {
                id: 'rigging',
                title: 'Rigging the Puppet',
                content: `
                <p>
                The rigging process was… tricky.
                </p>

                <p>
                Since Animaze was still a new software, we had to reverse-engineer Animaze’s own avatars to determine how their blendshapes and rigging worked together. We worked with Animaze's team to get some questions answered, 
                but ultimately had to figure it out ourselves.
                </p>

                <p>
                With perseverance and some late nights, we were able to use the Animaze Editor to import and customize the little guy to 
                our liking.
                </p>
                `
                ,
                media: [
                    {
                        type: 'mp4',
                        src: 'images/takeoff/takeoff_rigTest.mp4',
                        caption: 'Early Rig Test in Animaze Desktop'
                    }
                ]
            },
            {
                id: 'physics',
                title: 'Antenna Physics',
                content: `
                <p>
                To bring even more personality and natural movement to our character we added custom physics to the antenna on its head. We developed an inverted pendulum–based system to give the antenna a satisfying, life-like bounce.
                </p>

                <p>
                Animaze's physics engine is still at its early stages, but I was able to adapt and use a series of sphere colliders placed along the antenna, each with progressively varied spring settings. Colliders are stiffer near the base for stability, and looser toward the tip for more wiggle.
                </p>

                <p>
                The antenna naturally leans to one side. Because why not?
                </p>
                `,
                media: [
                    {
                        type: 'gif',
                        src: 'images/takeoff/takeoff_antenna.gif',
                        caption: 'Antenna Physics in Animaze Editor'
                    }
                ]
            },
            {
                id: 'live-performance',
                title: 'Live Performance with the Puppet',
                content: `
                <p>Animaze Desktop is where we added the final polish. Here’s the fun stuff.
                </p>

                <p>
                We could fine-tune the look with custom backgrounds, scene lighting, and camera angles. Most importantly, we could turn on the webcam and enable facial tracking to see the avatar come alive in real-time. 
                </p>

                <p>
                From there our performers would follow the script and puppeteer the character, and ultimately used OBS to capture the live performance.
                </p>

                `
                ,
                media: [
                    {
                        type: 'gif',
                        src: 'images/takeoff/takeoff_production.gif',
                        caption: ''
                    }
                ]
            },
            {
                id: 'social-films',
                title: 'Social Films',
                content: `
                <p>
                We created 15 social films to help the client launch their new crypto app.
                </p>

                <p>
                Of those, several reached hundreds of thousands of views on TikTok. A testament to the quality of the content and our hard work.
                I am always proud to offer technical solutions to best represent our clients' brand and push the limits of the latest technologies.
                </p>
                `
                ,
                media: [
                    {
                        type: 'image',
                        src: 'images/thumbnails/takeoff_tiktok.png',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2025<br>Client: Takeoff<br>Role: Lead Creative Technologist'
    },

    'snap-ar': {
        title: 'Snap AR Effects',
        subtitle: 'Lens Studio, JavaScript',
        description: `
        <p>
        While most of my projects are made in Meta Spark AR Studio, I've also explored other AR platforms like Snap Lens Studio.
        </p>
        `,
        heroImage: 
        {
            type: 'image',
            src: 'images/thumbnails/snap_ls.jpg',
            caption: 'Snap AR Effects'
        },
        sections: [
            {
                id: 'gallery',
                title: 'Snap AR Effects Gallery',
                content: `
                <p>
                3 AR effects created using Lens Studio, showcasing different creative approaches and technical implementations. From a functioning 
                feet detection effect to a Sailor Moon inspired effect, I've had a lot of fun working with Lens Studio.
                </p>
                `,
                media: [
                    {
                        type: 'mp4',
                        src: 'images/snap/snap_feetingFrenzy.MP4',
                        caption: 'Feeting Frenzy Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'images/snap/snap_sailormoon.mp4',
                        caption: 'Sailor Moon Effect'
                    },
                    {
                        type: 'mp4',
                        src: 'images/snap/snap_tracer.MP4',
                        caption: 'Tracer Effect'
                    }
                ]
            }
        ],
        credits: 'Year: 2019-2025<br>Platform: Snap Lens Studio<br>Role: Lead Creative Technologist, AR Developer'
    },

    'flat-journal': {
        title: 'Flat Journal',
        subtitle: 'Website, JavaScript',
        description: `
        <p>
        <a href="https://flatjournal.com/" target="_blank">FLAT</a> is a platform for theoretical and critical texts, interviews, reviews, projects, and experiments that engage with contemporary conversations surrounding emerging media in the arts. FLAT is open to submissions of writing, images, video, interactive works, and almost any possible form of web-based content from writers, artists, and thinkers around the world. Please see open calls for specific information about what themes and media we are accepting at this time. Contributors to FLAT include theorists, technologists, and artists from the UCLA community, the greater Los Angeles area, and beyond. FLAT was founded in 2018 and is designed, curated, and produced by faculty, graduate and undergraduate students, and alumnx from UCLA’s department of Design Media Arts.
        </p>

        <p>
        FLAT is made possible through the support of the UCLA Department of Design Media Arts and the UCLA Arts Conditional Studio.
        </p>
        `,
        heroImage: 
        {
            type: 'image',
            src: 'images/thumbnails/flat2025.png',
            caption: ''
        },
        sections: [
            {
                id: 'role',
                title: 'A Collaboration Between Students and Faculty',
                content: `
                <p>
                During my final year at UCLA, I collaborated with UCLA Design Media Arts faculty and students to design and develop a website for Flat Journal, 
                a platform for theoretical and critical texts, interviews, reviews, projects, and experiments that engage with contemporary conversations surrounding emerging media in the arts.
                As the lead UI/UX designer and web developer, I was responsible for designing the website's wireframes, 
                as well as an initial working prototype for the website.
                </p>

                <p>
                The website went through multiple iterations and revisions, with the final design being approved by my mentor and founding Editor, Chandler McWilliams.
                </p>
                `,
                media: [
                    {
                        type: 'gif',
                        src: 'images/thumbnails/final_site_00.gif',
                        caption: ''
                    }
                ]
            }
        ],
        credits: 'Year: 2019<br>Role: Lead UI/UX Designer, Web Developer, Creative Direction'
    }
};

// Helper functions for working with project data
const ProjectDataHelpers = {
    // Get a specific project by ID
    getProject(projectId) {
        return PROJECT_DATA[projectId] || null;
    },

    // Get all project IDs
    getAllProjectIds() {
        return Object.keys(PROJECT_DATA);
    },


    // Get projects with missing images (for maintenance)
    getProjectsWithMissingImages() {
        const missing = {};
        Object.entries(PROJECT_DATA).forEach(([id, project]) => {
            const hasHeroImage = !!project.heroImage;
            const hasSectionMedia = project.sections && project.sections.some(section => 
                section.media && section.media.length > 0
            );
            
            if (!hasHeroImage || !hasSectionMedia) {
                missing[id] = project;
            }
        });
        return missing;
    },

    // Validate project data structure
    validateProject(project) {
        const requiredFields = ['title', 'subtitle', 'description', 'credits'];
        const missingFields = requiredFields.filter(field => !project[field]);
        
        // Check if project uses new section structure or old structure
        const hasSections = !!project.sections;
        const hasOldStructure = !!project.extendedDescription;
        
        let structureValid = false;
        if (hasSections) {
            structureValid = Array.isArray(project.sections) && project.sections.length > 0;
        } else if (hasOldStructure) {
            structureValid = true; // Legacy support
        }
        
        return {
            isValid: missingFields.length === 0 && structureValid,
            missingFields: missingFields,
            hasHeroImage: !!project.heroImage,
            hasSections: hasSections,
            hasOldStructure: hasOldStructure,
            structureValid: structureValid,
            sectionCount: hasSections ? project.sections.length : 0,
            totalMediaItems: hasSections ? this.getTotalMediaCount(project) : 0
        };
    },

    // Get total media count across all sections
    getTotalMediaCount(project) {
        if (!project.sections) return 0;
        return project.sections.reduce((total, section) => {
            return total + (section.media ? section.media.length : 0);
        }, 0);
    },

    // Get all media from a project (across all sections)
    getAllProjectMedia(project) {
        if (!project.sections) return [];
        
        const allMedia = [];
        project.sections.forEach(section => {
            if (section.media) {
                section.media.forEach(mediaItem => {
                    allMedia.push({
                        ...mediaItem,
                        sectionId: section.id,
                        sectionTitle: section.title
                    });
                });
            }
        });
        return allMedia;
    },

    // Get media by type (image, gif, video)
    getMediaByType(project, type) {
        const allMedia = this.getAllProjectMedia(project);
        return allMedia.filter(media => media.type === type);
    },

    // Get a specific section by ID
    getSection(project, sectionId) {
        if (!project.sections) return null;
        return project.sections.find(section => section.id === sectionId) || null;
    },

    // Get all section IDs for a project
    getSectionIds(project) {
        if (!project.sections) return [];
        return project.sections.map(section => section.id);
    },

    // Get sections with media
    getSectionsWithMedia(project) {
        if (!project.sections) return [];
        return project.sections.filter(section => section.media && section.media.length > 0);
    },

    // Create a new section (for adding sections to projects)
    createSection(id, title, content, media = []) {
        return {
            id: id,
            title: title,
            content: content,
            media: media
        };
    },

    // Add media to a section
    addMediaToSection(project, sectionId, mediaItem) {
        if (!project.sections) return false;
        
        const section = project.sections.find(s => s.id === sectionId);
        if (section) {
            if (!section.media) section.media = [];
            section.media.push(mediaItem);
            return true;
        }
        return false;
    },

    // Get project statistics
    getProjectStats() {
        const projects = Object.values(PROJECT_DATA);
        const totalProjects = projects.length;
        const withHeroImages = projects.filter(p => p.heroImage).length;
        const withSections = projects.filter(p => p.sections && p.sections.length > 0).length;
        const withOldStructure = projects.filter(p => p.extendedDescription && !p.sections).length;
        
        const mediaTypes = { image: 0, gif: 0, video: 0, mp4: 0 };
        
        Object.entries(PROJECT_DATA).forEach(([id, project]) => {
            // Count media types
            const allMedia = this.getAllProjectMedia(project);
            allMedia.forEach(media => {
                if (mediaTypes.hasOwnProperty(media.type)) {
                    mediaTypes[media.type]++;
                }
            });
        });

        return {
            totalProjects,
            withHeroImages,
            withSections,
            withOldStructure,
            mediaTypes,
            completionRate: Math.round((withHeroImages / totalProjects) * 100),
            sectionAdoptionRate: Math.round((withSections / totalProjects) * 100)
        };
    }
}; 