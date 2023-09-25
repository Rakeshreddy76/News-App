import React, { Component } from 'react'
import NewsItem from '../Components/NewsItem';

export default class News extends Component {
    articles = [
        {
            "status": "ok",
            "totalResults": 7347,
            "articles": [
            {
            "source": {
            "id": null,
            "name": "FRANCE 24 English"
            },
            "author": "FRANCE24",
            "title": "EU countries vote to weaken next car emissions norm",
            "description": "Led by France and Italy, the 27 nations voted for a less ambitious plan than the one put forward by the European Commission in November 2022, eyeing preservation of competitivity in an EU sector on which 14 million workers rely.\n\nThe European Automobile Manuf…",
            "url": "https://www.france24.com/en/live-news/20230925-eu-countries-vote-to-weaken-next-car-emissions-norm",
            "urlToImage": "https://s.france24.com/media/display/6281ee64-5bb9-11ee-9b36-005056bfb2b6/w:1280/p:16x9/705dbccb0dec29daffe8f80af33578cc85aa9153.jpg",
            "publishedAt": "2023-09-25T15:37:08Z",
            "content": "Brussels (AFP) EU member countries on Monday adopted a watered-down deal on curbing car emissions, after auto manufacturers complained stricter measures could undermine electric vehicle investments. … [+2964 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Claudia Assis",
            "title": ": Tesla’s stock on four-day losing streak, as EV maker looks to build India battery factory",
            "description": "The UAW strike against Ford, GM and Stellantis has failed to provide support for the electric-vehicle maker",
            "url": "https://www.marketwatch.com/story/teslas-stock-on-four-day-losing-streak-as-ev-maker-looks-to-build-india-battery-factory-314f4f14",
            "urlToImage": "https://images.mktw.net/im-856564/social",
            "publishedAt": "2023-09-25T15:23:31Z",
            "content": "Shares of Tesla Inc. headed lower on Monday, stretching their losing run to a fourth session, as support for stock from the United Auto Workers strike has failed to materialize and as the electric-ve… [+1708 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Freerepublic.com"
            },
            "author": "MSN",
            "title": "AOC shredded online after she gave bizarre reason for why she bought a Tesla rather than union-made car",
            "description": "Social media users slam AOC over bizarre explanation AOC's explanation left some social media users scratching their heads. Some criticized her for what they perceived as a weak excuse, while others questioned the relevance of the timing of her purchase. \"Tha…",
            "url": "https://freerepublic.com/focus/f-news/4184784/posts",
            "urlToImage": null,
            "publishedAt": "2023-09-25T15:22:13Z",
            "content": "Skip to comments.\r\nAOC shredded online after she gave bizarre reason for why she bought a Tesla rather than union-made carMSN ^\r\n | 9-25\r\n | Kunal Dey\r\nPosted on 09/25/2023 8:22:13 AM PDT by dennisw\r… [+1975 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Nissan says all new models launched in Europe will be fully electric",
            "description": "Japanese carmarker Nissan announced Monday that all new models it launches in Europe will be fully electric, as it reaffirmed its aim for solely electric vehicle sales on the continent by 2030. It said it was \"pressing ahead\" with the existing target just a w…",
            "url": "https://biztoc.com/x/af9f2930e98ff1b3",
            "urlToImage": "https://c.biztoc.com/p/af9f2930e98ff1b3/og.webp",
            "publishedAt": "2023-09-25T15:18:17Z",
            "content": "Japanese carmarker Nissan announced Monday that all new models it launches in Europe will be fully electric, as it reaffirmed its aim for solely electric vehicle sales on the continent by 2030.It sai… [+275 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "nypost.com",
            "title": "AOC questioned over non-union Tesla purchase as Detroit auto strikes hit 10-day mark",
            "description": "Alexandria Ocasio-Cortez was questioned for her decision to buy a Tesla rather than an electric vehicle from a brand that employs union workers as labor strikes against Detroit automakers entered their tenth day. The Democratic Socialist congresswoman, who ha…",
            "url": "https://biztoc.com/x/37cfce7ba6ac2af0",
            "urlToImage": "https://c.biztoc.com/p/37cfce7ba6ac2af0/og.webp",
            "publishedAt": "2023-09-25T15:02:13Z",
            "content": "Alexandria Ocasio-Cortez was questioned for her decision to buy a Tesla rather than an electric vehicle from a brand that employs union workers as labor strikes against Detroit automakers entered the… [+279 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "A16z.com"
            },
            "author": "ejanaskie",
            "title": "Where We Go From Here",
            "description": "This conversation is part of our AI Revolution series, which features some of the most impactful builders in the field of AI discussing and debating where we are, where we’re going, and the big open questions in AI. Find more content from our AI Revolution se…",
            "url": "http://a16z.com/where-we-go-from-here/",
            "urlToImage": "https://a16z.com/wp-content/uploads/2023/09/Banner-AIR-Mira-FB-Yoast.jpg",
            "publishedAt": "2023-09-25T15:00:40Z",
            "content": "This conversation is part of our AI Revolution series, which features some of the most impactful builders in the field of AI discussing and debating where we are, where were going, and the big open q… [+20899 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Steve Hanley",
            "title": "DOE Funds Nine Long-Duration Energy Storage Technologies",
            "description": "The DOE is making money available to promote long-duration energy storage solutions that can power the grid in the future.",
            "url": "https://cleantechnica.com/2023/09/25/doe-funds-nine-long-duration-energy-storage-technologies/",
            "urlToImage": "https://cleantechnica.com/files/2023/04/Energy-Dome-Bfunding-image.jpeg",
            "publishedAt": "2023-09-25T14:55:39Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nUtility-scale energy storage is a vital part of the clean energy revolution. There is a critical difference b… [+9547 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Electrek"
            },
            "author": "Peter Johnson",
            "title": "Nissan unveils new sporty urban EV concept as it goes all-electric in Europe",
            "description": "With plans to go 100% electric in Europe by 2030, Nissan is previewing its future lineup with a new sporty urban EV concept.\n more…\nThe post Nissan unveils new sporty urban EV concept as it goes all-electric in Europe appeared first on Electrek.",
            "url": "https://electrek.co/2023/09/25/nissan-new-sporty-urban-ev-concept-all-electric-future/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/09/Nissan-sporty-urban-EV.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-25T14:43:38Z",
            "content": "With plans to go 100% electric in Europe by 2030, Nissan is previewing its future lineup with a new sporty urban EV concept.\r\nNissan revealed Monday it will phase out ICE vehicle production with plan… [+2913 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Nissan says all new models launched in Europe will be fully electric",
            "description": "Japanese carmarker Nissan announced Monday that all new models it launches in Europe will be fully electric, as it reaffirmed its aim for solely electric vehicle sales on the continent by 2030. It said it was \"pressing ahead\" with the existing target just a w…",
            "url": "https://biztoc.com/x/2a414375b0ca3347",
            "urlToImage": "https://c.biztoc.com/p/2a414375b0ca3347/s.webp",
            "publishedAt": "2023-09-25T14:40:05Z",
            "content": "Japanese carmarker Nissan announced Monday that all new models it launches in Europe will be fully electric, as it reaffirmed its aim for solely electric vehicle sales on the continent by 2030.It sai… [+275 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Jalopnik"
            },
            "author": "Bradley Brownell",
            "title": "The Car Market Balloon Is Deflating",
            "description": "For the first time in several years, car prices are actually cooling, and dealers and manufacturers are once again offering cash incentives for new vehicle purchases. With the inflationary explosion we’ve seen in the last three years, it’s nice to have a slig…",
            "url": "https://jalopnik.com/the-car-market-balloon-is-deflating-1850870141",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/98e15bc8b95fd24c09b2251afb58f881.png",
            "publishedAt": "2023-09-25T14:36:38Z",
            "content": "For the first time in several years, car prices are actually cooling, and dealers and manufacturers are once again offering cash incentives for new vehicle purchases. With the inflationary explosion … [+2790 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Remeredzai Joseph Kuhudzai",
            "title": "Africa’s Electric Mobility Movement In Africa Is Starting To Show It Can Help Unlock Significant Employment Opportunities",
            "description": "We have seen a lot of progress in the electric mobility sector on the African continent over the past five or so years in quite a number of countries. A lot of the action is being driven by local startups that are designing, developing, and then in collaborat…",
            "url": "https://cleantechnica.com/2023/09/25/africas-electric-mobility-movement-in-africa-is-starting-to-show-it-can-help-unlock-significant-employment-opportunities/",
            "urlToImage": "https://cleantechnica.com/files/2023/09/Spiro-Charging-Centre-employee-attaches-battery.jpeg",
            "publishedAt": "2023-09-25T14:35:30Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWe have seen a lot of progress in the electric mobility sector on the African continent over the past five or… [+6713 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "GlobeNewswire"
            },
            "author": "Kings Research",
            "title": "Global Renewable Energy Storage Market to Record Substantial Growth at 22.12% CAGR, Accounting for USD 469.81 Billion by 2030, Europe Leads the Industry with Governmental Backings, States Kings Research",
            "description": "The global renewable energy storage market is estimated to exhibit strong growth through 2030 owing to increasing environmental awareness, rising government backing, and technological advancements. The global renewable energy storage market is estimated to ex…",
            "url": "https://www.globenewswire.com/news-release/2023/09/25/2748798/0/en/Global-Renewable-Energy-Storage-Market-to-Record-Substantial-Growth-at-22-12-CAGR-Accounting-for-USD-469-81-Billion-by-2030-Europe-Leads-the-Industry-with-Governmental-Backings-Sta.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/75fa66d6-4ceb-40db-801c-e27ae901ff08",
            "publishedAt": "2023-09-25T14:32:00Z",
            "content": "Dubai, UAE, Sept. 25, 2023 (GLOBE NEWSWIRE) -- According to the latest report by Kings Research, in 2022, the global Renewable Energy Storage Market\r\n accrued USD 77.75 billion and is anticipated to … [+8827 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "reuters.com",
            "title": "Nissan says all new models coming to Europe will be fully electric",
            "description": "The brand logo of Nissan Motor Corp. is displayed during a press preview of the company's new Ariya all-battery SUV, ahead of the world premiere, at Nissan Pavilion in Yokohama, south of Tokyo, Japan July 14, 2020. Picture taken July 14, 2020. REUTERS/Issei K…",
            "url": "https://biztoc.com/x/ee387aff63093294",
            "urlToImage": "https://c.biztoc.com/p/ee387aff63093294/og.webp",
            "publishedAt": "2023-09-25T14:30:16Z",
            "content": "The brand logo of Nissan Motor Corp. is displayed during a press preview of the company's new Ariya all-battery SUV, ahead of the world premiere, at Nissan Pavilion in Yokohama, south of Tokyo, Japan… [+303 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Nintendo Life"
            },
            "author": "Jim Norman",
            "title": "Temtem Welcomes Spooky Season In Latest Update, Here Are The Full Patch Notes",
            "description": "New Tem Types, Mythical creatures and more.The Pokémon-like creature-catcher, Temtem, has just welcomed a brand new season with its latest huge update.The new season, 'Endless Night', is about all things spooky and it will run a little longer than those that …",
            "url": "https://www.nintendolife.com/news/2023/09/temtem-welcomes-spooky-season-in-latest-update-here-are-the-full-patch-notes",
            "urlToImage": "https://images.nintendolife.com/450fc4af58796/1280x720.jpg",
            "publishedAt": "2023-09-25T14:30:00Z",
            "content": "Image: Crema\r\nThe Pokémon-like creature-catcher, Temtem, has just welcomed a brand new season with its latest huge update.\r\nThe new season, 'Endless Night', is about all things spooky and it will run… [+50525 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "zerohedge.com",
            "title": "AOC Wants To Sell Her Tesla For Union-Made EV",
            "description": "AOC Wants To Sell Her Tesla For Union-Made EV To remain relevant this week as President Biden heads to the picket line to support United Auto Workers, ultra-liberal New York Representative Alexandria Ocasio-Cortez told CBS's Face the Nation on Sunday that she…",
            "url": "https://biztoc.com/x/14aae09165ad87f4",
            "urlToImage": "https://c.biztoc.com/p/14aae09165ad87f4/s.webp",
            "publishedAt": "2023-09-25T14:28:07Z",
            "content": "AOC Wants To Sell Her Tesla For Union-Made EV\r\nTo remain relevant this week as President Biden heads to the picket line to support United Auto Workers, ultra-liberal New York Representative Alexandri… [+294 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "PCMag.com"
            },
            "author": "John Bogna, Emily Dreibelbis",
            "title": "EV 101: How Do Electric Cars Work?",
            "description": "Eyeing a more environmentally friendly alternative to your gas-powered car? Electric vehicles are growing in popularity; here's how they get you from point A to B.\nWith their smooth handling and fast acceleration, electric vehicles (EVs) are an appealing way …",
            "url": "https://me.pcmag.com/en/cars-auto/19480/ev-101-how-do-electric-cars-work",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_me/help/e/ev-101-how/ev-101-how-do-electric-cars-work_3ydu.1200.jpg",
            "publishedAt": "2023-09-25T14:26:23Z",
            "content": "With their smooth handling and fast acceleration, electric vehicles (EVs) are an appealing way to avoid high gas prices or mitigate the environmental impact of gas-powered vehicles. Their upfront cos… [+10218 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Jenni Reid",
            "title": "Nissan says all new models launched in Europe will be fully electric",
            "description": "The Japanese carmarker said all new models it launches in Europe will be fully electric, as it reaffirmed an aim for all-electric Europe sales by 2030.",
            "url": "https://www.cnbc.com/2023/09/25/nissan-says-all-new-models-launched-in-europe-will-be-fully-electric-.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107305872-1695647886434-gettyimages-1250810367-AA_06042023_1142208.jpeg?v=1695652360&w=1920&h=1080",
            "publishedAt": "2023-09-25T14:25:03Z",
            "content": "Japanese carmarker Nissan announced Monday that all new models it launches in Europe will be fully electric, as it reaffirmed its aim for solely electric vehicle sales on the continent by 2030.\r\nIt s… [+1257 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Marketscreener.com"
            },
            "author": "Reuters",
            "title": "Wall Street subdued on lingering concerns over elevated rates",
            "description": "(marketscreener.com) \n \n * Media firms up on tentative studio-writers deal\n \n * Nike, Foot Locker fall on brokerage downgrades\n \n * Indexes: Dow down 0.22%, S&P down 0.06%, Nasdaq flat\n \n \n Sept 25 -\n Major U.S. stock indexes were...https://www.marketscreener…",
            "url": "https://www.marketscreener.com/quote/index/S-P-500-4985/news/Wall-Street-subdued-on-lingering-concerns-over-elevated-rates-44915922/",
            "urlToImage": "https://img.zonebourse.com/reuters/2017-01/2017-01-18T140317Z_2_LYNXMPED0H0ZI_RTROPTP_2_USA-STOCKS.JPG",
            "publishedAt": "2023-09-25T14:17:35Z",
            "content": "(For a Reuters live blog on U.S., UK and European stock\r\nmarkets, click or type LIVE/ in a news window.)\r\n* Media firms up on tentative studio-writers deal\r\n* Nike, Foot Locker fall on brokerage down… [+3277 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "Ariel Zilber",
            "title": "AOC questioned over non-union Tesla purchase as Detroit auto strikes hit 10-day mark",
            "description": "The left-leaning Democratic Socialist, who famously clashed online with Tesla CEO Elon Musk, pledged last year to trade in her Tesla.",
            "url": "https://nypost.com/2023/09/25/aoc-questioned-over-tesla-purchase-as-uaw-strikes-near-third-week/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000043977407.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-09-25T14:12:02Z",
            "content": "Alexandria Ocasio-Cortez was questioned for her decision to buy a Tesla rather than an electric vehicle from a brand that employs union workers as labor strikes against Detroit automakers entered the… [+4723 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Raymond Tribdino",
            "title": "The Motocompacto: Honda Turns A Box Into A Fun, Electric Runabout",
            "description": "The Motocompacto Last week, Honda announced the availability, of the Motocompacto, successor to the Motocompo, but not in emissions.",
            "url": "https://cleantechnica.com/2023/09/25/the-motocompacto-honda-turns-a-box-into-a-fun-electric-runabout/",
            "urlToImage": "https://cleantechnica.com/files/2023/09/01-Honda-Motocompacto-.jpeg",
            "publishedAt": "2023-09-25T14:05:28Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWhen Honda made the Motocompo, a tiny, one-person scooter powered by two-stroke, 49 cc gasoline engine, it ha… [+5125 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Thefly.com"
            },
            "author": null,
            "title": "What You Missed This Week in EVs and Clean Energy",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3783565/TSLA;RIVN;GM;F;ENPH;NIO;PLUG;BE;BEP-What-You-Missed-This-Week-in-EVs-and-Clean-Energy",
            "urlToImage": "https://image.thefly.com/catalog/202012/img_969.jpg",
            "publishedAt": "2023-09-25T14:02:06Z",
            "content": "Institutional investors and professional traders rely on The Fly to keep up-to-the-second on breaking news in the electric vehicle and clean energy space, as well as which stocks in these sectors tha… [+3355 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Robb Report"
            },
            "author": "Jaclyn Trop",
            "title": "This Flying Car Just Wowed the Detroit Auto Show. It Could Be in the Skies by 2025.",
            "description": "Forget the Big Three or even the European automakers. The wild-looking, gull-wing Alef Model A attracted a mob of viewers at its first public debut.",
            "url": "https://robbreport.com/motors/marine/alef-model-a-flying-car-detroit-auto-show-1235002804/",
            "urlToImage": "https://robbreport.com/wp-content/uploads/2023/09/2-Alef-in-Transition-Flight.jpg?w=681&h=383&crop=1",
            "publishedAt": "2023-09-25T14:00:00Z",
            "content": "A flying car sketched on a Silicon Valley coffee shop napkin in 2015 made its public debut eight years later at the Detroit Auto Show, which concludes today.\r\nAlef Aeronautics, a California-based sta… [+4871 chars]"
            },
            {
            "source": {
            "id": "news24",
            "name": "News24"
            },
            "author": "fin24",
            "title": "News24 | As electric shift stalls, Volkswagen weighs up savings",
            "description": "Volkswagen's factory in the heart of the east German city of Dresden was conceived as a showcase for the auto giant's electric future but on a September afternoon the production line stands still.",
            "url": "https://www.news24.com/fin24/companies/as-electric-shift-stalls-volkswagen-weighs-up-savings-20230922",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3916/590f9f0ee5504880ac79bbb970646970.jpg",
            "publishedAt": "2023-09-25T13:54:28Z",
            "content": "Volkswagen's factory in the heart of the east German city of Dresden was conceived as a showcase for the auto giant's electric future but on a September afternoon the production line stands still.\r\nR… [+3553 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "One of Elon Musk's unusual Tesla projects makes big strides",
            "description": "In Elon Musk's effort to prove that Tesla (TSLA) - Get Free Report is more than just an electric-vehicle producer, the company's robotics division released a video updating its progress on Optimus robot. The project, which Musk thinks could garner demand in e…",
            "url": "https://biztoc.com/x/8676e7c158611871",
            "urlToImage": "https://c.biztoc.com/p/8676e7c158611871/s.webp",
            "publishedAt": "2023-09-25T13:46:26Z",
            "content": "In Elon Musk's effort to prove that Tesla (TSLA) - Get Free Report is more than just an electric-vehicle producer, the company's robotics division released a video updating its progress on Optimus ro… [+290 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk might just be the internet's worst boyfriend",
            "description": "Elon Musk doesn't appear to be an easy person to date, it's revealed in a new biography. • In the book, some of Musk's former partners detailed instances where they said he was emotionally volatile. • Musk's ex-girlfriend Grimes, the musician, said he can fly…",
            "url": "https://biztoc.com/x/9facdd4a8342b813",
            "urlToImage": "https://c.biztoc.com/p/9facdd4a8342b813/og.webp",
            "publishedAt": "2023-09-25T13:42:23Z",
            "content": "Elon Musk doesn't appear to be an easy person to date, it's revealed in a new biography.In the book, some of Musk's former partners detailed instances where they said he was emotionally volatile.Musk… [+299 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "teslarati.com",
            "title": "AOC says she’s trading in her Tesla Model 3 for a union-made EV",
            "description": "New York Congresswoman Alexandria Ocasio-Cortez said she’s trading in her Tesla for a union-built vehicle amidst ongoing strikes from the United Auto Workers (UAW) union against Ford, General Motors (GM) and Stellantis. Ocasio-Cortez, often referred to by her…",
            "url": "https://biztoc.com/x/283891846d41da29",
            "urlToImage": "https://c.biztoc.com/p/283891846d41da29/og.webp",
            "publishedAt": "2023-09-25T13:42:22Z",
            "content": "New York Congresswoman Alexandria Ocasio-Cortez said shes trading in her Tesla for a union-built vehicle amidst ongoing strikes from the United Auto Workers (UAW) union against Ford, General Motors (… [+311 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "Jennifer Sensiba",
            "title": "Unable To Scuttle Right To Repair, Automakers Seem To Be Targeting Ability To Repair",
            "description": "In the last few years, right to repair has been in the news and even in legislatures. The idea is that instead of having to ask a manufacturer for permission to repair or modify a product you already bought, you’d have a legal right to do so by default, inclu…",
            "url": "https://cleantechnica.com/2023/09/25/unable-to-scuttle-right-to-repair-automakers-seem-to-be-targeting-ability-to-repair/",
            "urlToImage": "http://cleantechnica.com/files/2023/09/Toyota-Factory-Press-Photo-2000x1000-1-800x400.png",
            "publishedAt": "2023-09-25T13:41:20Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIn the last few years, right to repair has been in the news and even in legislatures. The idea is that instea… [+7868 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "How Tesla Stock Can Weather a ‘Material Miss’ on Third-Quarter Deliveries",
            "description": "Tesla is due to report its third-quarter deliveries in a couple of days, and while Wall Street estimates of the number are coming down, they might not falling fast or far enough. Investors need to be ready...#tesla",
            "url": "https://biztoc.com/x/169ceef8c9f6be91",
            "urlToImage": "https://c.biztoc.com/p/169ceef8c9f6be91/s.webp",
            "publishedAt": "2023-09-25T13:36:07Z",
            "content": "Tesla is due to report its third-quarter deliveries in a couple of days, and while Wall Street estimates of the number are coming down, they might not falling fast or far enough. Investors need to be… [+55 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Marketscreener.com"
            },
            "author": null,
            "title": "Investors in denial",
            "description": "(marketscreener.com) Things arent great on stocks markets at the moment, with Wall Street coming off a third consecutive week of declines. After the recession that everyone talks about but never sees, investors are focusing on the Fed pivot that everyone tal…",
            "url": "https://www.marketscreener.com/news/latest/Investors-in-denial--44915586/",
            "urlToImage": "https://img.zonebourse.com/reuters/2023-08/2023-08-15T205705Z_1_LYNXMPEJ7E0T8_RTROPTP_3_USA-STOCKS.JPG",
            "publishedAt": "2023-09-25T13:33:44Z",
            "content": "Things aren't great on stocks markets at the moment, with Wall Street coming off a third consecutive week of declines. After the recession that everyone talks about but never sees, investors are focu… [+7040 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla (NASDAQ:TSLA), Google, and Microsoft Eyeing $5B Investment in Thailand - TipRanks.com - TipRanks",
            "description": "Tesla (NASDAQ:TSLA), Google, and Microsoft Eyeing $5B Investment in Thailand - TipRanks.comTipRanks Thailand courts Tesla, Google, and Microsoft for $5 billion investment | World Business Watch | WIONWION Tesla manufacturing facility in Thailand teased by Pri…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171891245",
            "urlToImage": null,
            "publishedAt": "2023-09-25T13:33:05Z",
            "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Marketscreener.com"
            },
            "author": "PRNewswire",
            "title": "Thinking about trading options or stock in Enterprise Products Partners, Apple, Tesla, Palantir Technologies, or Ford Motor?",
            "description": "(marketscreener.com) \n\nNEW YORK, Sept. 25, 2023 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for EPD, AAPL, TSLA, PLTR, and F.\n\n \n \n \n \n \n \n\n \nClick a link below then choose between in-depth options trade idea report or a stock score...…",
            "url": "https://www.marketscreener.com/quote/stock/PALANTIR-TECHNOLOGIES-INC-113108869/news/Thinking-about-trading-options-or-stock-in-Enterprise-Products-Partners-Apple-Tesla-Palantir-Tech-44915571/",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
            "publishedAt": "2023-09-25T13:32:07Z",
            "content": "NEW YORK, Sept. 25, 2023 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for EPD, AAPL, TSLA, PLTR, and F.\r\nClick a link below then choose between in-depth options trade idea repo… [+1571 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "scmp.com",
            "title": "‘Superior to Tesla’s Model S’: Huawei, Chery to launch first production car",
            "description": "A personalised news feed of stories that matter to you Get more with my NEWS ‘Superior to Tesla’s Model S’: Huawei and Chery Automobile EV venture Luxeed to launch first production model in November Luxeed, a marque developed by state-owned Chery Automobile a…",
            "url": "https://biztoc.com/x/f97b5bc08d809bd1",
            "urlToImage": "https://c.biztoc.com/p/f97b5bc08d809bd1/s.webp",
            "publishedAt": "2023-09-25T13:30:10Z",
            "content": "A personalised news feed of stories that matter to youGet more with my NEWSSuperior to Teslas Model S: Huawei and Chery Automobile EV venture Luxeed to launch first production model in NovemberLuxeed… [+281 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Reason"
            },
            "author": "Liz Wolfe",
            "title": "Win for Writers Guild, Loss for AI",
            "description": "A tentative deal has been struck between the WGA and entertainment companies, which would end the 146-day Hollywood writers strike.",
            "url": "https://reason.com/2023/09/25/win-for-writers-guild-loss-for-ai/",
            "urlToImage": "https://d2eehagpk5cl65.cloudfront.net/img/q60/uploads/2023/09/lrphotos142709-scaled.jpg",
            "publishedAt": "2023-09-25T13:27:26Z",
            "content": "Fran Drescher holds Hollywood hostage: On Sunday night, the Writers Guild of America (WGA) reached a tentative deal with studios and streaming platforms, likely ending the 146-day strike that has bro… [+7411 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "How Tesla Stock Can Weather a ‘Material Miss’ on Third-Quarter Deliveries",
            "description": "Tesla is due to report its third-quarter deliveries in a couple of days, and while Wall Street estimates of the number are coming down, they might not falling fast or far enough. Investors need to be ready...#tesla",
            "url": "https://biztoc.com/x/8b27be9ec7f024f6",
            "urlToImage": "https://c.biztoc.com/p/8b27be9ec7f024f6/s.webp",
            "publishedAt": "2023-09-25T13:14:44Z",
            "content": "Tesla is due to report its third-quarter deliveries in a couple of days, and while Wall Street estimates of the number are coming down, they might not falling fast or far enough. Investors need to be… [+55 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla Set To Extend 3-Day Losing Streak? What's Driving Shares Lower Premarket",
            "description": "Tesla, Inc. TSLA shares were falling before the opening bell on Monday following three consecutive sessions of losses, pushing the stock to its lowest closing level since Aug. 28. Concerns over potential shortfalls in third-quarter deliveries contribute to th…",
            "url": "https://biztoc.com/x/611153c040eb6cad",
            "urlToImage": "https://c.biztoc.com/p/611153c040eb6cad/s.webp",
            "publishedAt": "2023-09-25T13:14:08Z",
            "content": "Tesla, Inc. TSLA shares were falling before the opening bell on Monday following three consecutive sessions of losses, pushing the stock to its lowest closing level since Aug. 28.Concerns over potent… [+292 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Barron's"
            },
            "author": "Al Root",
            "title": "How Tesla Stock Can Weather a 'Material Miss' on Deliveries",
            "description": "Forecasts for deliveries in the third quarter are due in a few days. Expectations have been falling, but the number still might miss the Wall Street consensus.",
            "url": "https://www.barrons.com/articles/tesla-stock-q3-deliveries-outlook-7bfe1fae",
            "urlToImage": "https://images.barrons.com/im-754197/social",
            "publishedAt": "2023-09-25T13:11:06Z",
            "content": "Tesla\r\n is due to report its third-quarter deliveries in a couple of days, and while Wall Street estimates of the number are coming down, they might not falling fast or far enough. Investors need to … [+3050 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "tipranks.com",
            "title": "Tesla (NASDAQ:TSLA), Google, and Microsoft Eyeing $5B Investment in Thailand - TipRanks.com",
            "description": "A number of South Asian economies are attracting mega investments from global heavyweights. This includes Vietnamese carmaker VinFast’s (NASDAQ:VFS) recent bumper listing in the U.S. and multiple tech-heavy investments in India. Now, Thailand may be getting a…",
            "url": "https://biztoc.com/x/23dd172a2badcc4e",
            "urlToImage": "https://c.biztoc.com/p/23dd172a2badcc4e/og.webp",
            "publishedAt": "2023-09-25T13:10:37Z",
            "content": "A number of South Asian economies are attracting mega investments from global heavyweights. This includes Vietnamese carmaker VinFasts (NASDAQ:VFS) recent bumper listing in the U.S. and multiple tech… [+286 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "‘Where is the phone?’ Huawei keeps quiet about Mate 60 Pro but takes aim at Tesla",
            "description": "‘Where is the phone?’ Huawei keeps quiet about Mate 60 Pro but takes aim at Tesla Editor’s Note: Sign up for CNN’s Meanwhile in China newsletter which explores what you need to know about the country’s rise and how it impacts the world. Huawei has disappointe…",
            "url": "https://biztoc.com/x/a8b110054ca4c91e",
            "urlToImage": "https://c.biztoc.com/p/a8b110054ca4c91e/s.webp",
            "publishedAt": "2023-09-25T13:10:36Z",
            "content": "Where is the phone? Huawei keeps quiet about Mate 60 Pro but takes aim at TeslaEditors Note: Sign up for CNNs Meanwhile in China newsletter which explores what you need to know about the countrys ris… [+272 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Notebookcheck.net"
            },
            "author": "Daniel Zlatev",
            "title": "Cybertruck with underbody protection and round steering wheel hints at Tesla's first 48V low-voltage system",
            "description": "The extensive underside protection of Tesla's Cybertruck has been caught on camera along with a new steering wheel option. Instead of the unique elongated one, this Cybertruck was outfitted with a regular round steering wheel.",
            "url": "https://www.notebookcheck.net/Cybertruck-with-underbody-protection-and-round-steering-wheel-hints-at-Tesla-s-first-48V-low-voltage-system.755429.0.html",
            "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/cybertruck_underbody.jpg",
            "publishedAt": "2023-09-25T13:04:00Z",
            "content": "Tesla could outfit its first electric pickup truck with its first modern 48V low-voltage electric system and a Cybertruck filmed in the wild may have confirmed just that. Next to the steering wheel o… [+2065 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "Tesla's Self-Driving Software Has Quite a Personality. What Barron's Test Drives Reveal",
            "description": "Tesla’s highest-level autonomous driving software, called Full Self Driving or FSD, generates strong opinions. Tesla CEO Elon Musk believes it is the key to trillions in value creation. Detractors call it “vaporware” and dangerous. Barron’s had to ...#tesla #…",
            "url": "https://biztoc.com/x/3e8d59cd4e0f6c9c",
            "urlToImage": "https://c.biztoc.com/p/3e8d59cd4e0f6c9c/s.webp",
            "publishedAt": "2023-09-25T13:00:10Z",
            "content": "Teslas highest-level autonomous driving software, called Full Self Driving or FSD, generates strong opinions. Tesla CEO Elon Musk believes it is the key to trillions in value creation. Detractors cal… [+133 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "Every new Nissan model launched in Europe will be fully electric",
            "description": "Every new Nissan model launched in Europe will be fully electric",
            "url": "https://www.investing.com/news/stock-market-news/every-new-nissan-model-launched-in-europe-will-be-fully-electric-432SI-3181944",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEAA90M6_L.jpg",
            "publishedAt": "2023-09-25T12:54:09Z",
            "content": "Japans Nissan (OTC:NSANY) Motor (TYO:7201) announced Monday that all new models launched in Europe from this point on will be fully electric, with plans to sell only EVs on the continent by 2030.\r\n\"T… [+1314 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Luxurylaunches.com"
            },
            "author": "Sayan Chakravarty",
            "title": "A Lucid Air in a bespoke color will serve as the luxury shuttle for visitors at the Red Sea International Airport in Saudi Arabia",
            "description": "The beautiful-looking Lucid Air EV has been chosen as the official shuttle by the Red Sea International Airport...\nThe post A Lucid Air in a bespoke color will serve as the luxury shuttle for visitors at the Red Sea International Airport in Saudi Arabia appea…",
            "url": "https://luxurylaunches.com/transport/lucid-air-red-sea-airport-shuttle.php",
            "urlToImage": "https://luxurylaunches.com/wp-content/uploads/2023/09/red-sea-international-airport.jpg",
            "publishedAt": "2023-09-25T12:50:19Z",
            "content": "The beautiful-looking Lucid Air EV has been chosen as the official shuttle by the Red Sea International Airport (RSIA) in Saudi Arabia. The American luxury electric sedan is officially available only… [+1560 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "investors.com",
            "title": "Tesla Updates World On Its Humanoid Robot. Does The Market Care?",
            "description": "The EV giant released a video showing Optimus sorting objects and performing several yoga stretches. Tesla stock fell after tumbling last week. The post Tesla Updates World On Its Humanoid Robot. Does The Market Care? appeared first on Investor's Business Dai…",
            "url": "https://biztoc.com/x/4b4d9a9939d96163",
            "urlToImage": "https://c.biztoc.com/253/og.png",
            "publishedAt": "2023-09-25T12:44:14Z",
            "content": "The EV giant released a video showing Optimus sorting objects and performing several yoga stretches. Tesla stock fell after tumbling last week.The post Tesla Updates World On Its Humanoid Robot. Does… [+133 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "fool.com",
            "title": "Bad News for Tesla Stock Investors",
            "description": "In this week's video, I cover need-to-know news related to Tesla (TSLA -4.23%) during the week of Sept. 18. Today's video will focus on concerning results from a recent survey, Tesla's sales numbers in Europe and China, more encouraging news about the start o…",
            "url": "https://biztoc.com/x/2c5e1757381f5bdb",
            "urlToImage": "https://c.biztoc.com/p/2c5e1757381f5bdb/og.webp",
            "publishedAt": "2023-09-25T12:40:09Z",
            "content": "In this week's video, I cover need-to-know news related to Tesla (TSLA -4.23%) during the week of Sept. 18. Today's video will focus on concerning results from a recent survey, Tesla's sales numbers … [+221 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "edition.cnn.com",
            "title": "‘Where is the phone?’ Huawei keeps quiet about Mate 60 Pro but takes aim at Tesla",
            "description": "Editor’s Note: Sign up for CNN’s Meanwhile in China newsletter which explores what you need to know about the country’s rise and how it impacts the world. Huawei has disappointed legions of fans — and US officials — eager to know more about its Mate 60 Pro sm…",
            "url": "https://biztoc.com/x/75882a16bc3e0a08",
            "urlToImage": "https://c.biztoc.com/p/75882a16bc3e0a08/s.webp",
            "publishedAt": "2023-09-25T12:38:18Z",
            "content": "Editors Note: Sign up for CNNs Meanwhile in China newsletter which explores what you need to know about the countrys rise and how it impacts the world.Huawei has disappointed legions of fans and US o… [+281 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "investors.com",
            "title": "Futures Fall As 10-Year Treasury Jumps To New High",
            "description": "Dow Jones futures fell modestly Monday morning, along with S&P 500 futures and Nasdaq futures, as the ongoing stock market correction deepens. The 10-year Treasury yield spiked to new highs early Monday. Key inflation data takes the spotlight this week, with …",
            "url": "https://biztoc.com/x/baf07a88a3b38f2c",
            "urlToImage": "https://c.biztoc.com/p/baf07a88a3b38f2c/s.webp",
            "publishedAt": "2023-09-25T12:38:14Z",
            "content": "Dow Jones futures fell modestly Monday morning, along with S&amp;P 500 futures and Nasdaq futures, as the ongoing stock market correction deepens. The 10-year Treasury yield spiked to new highs early… [+286 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Finbold.com"
            },
            "author": "Vahid Karaahmetovic",
            "title": "2 Michael Burry stocks to hold forever",
            "description": "Michael Burry, the famed US investor, first shot to prominence for his uncanny ability to predict the 2008 subprime lending … Continued\nThe post 2 Michael Burry stocks to hold forever appeared first on Finbold.",
            "url": "https://finbold.com/2-michael-burry-stocks-to-hold-forever/",
            "urlToImage": "https://finbold.com/app/uploads/2023/09/2-Michael-Burry-stocks-to-hold-forever.jpg",
            "publishedAt": "2023-09-25T12:33:10Z",
            "content": "Michael Burry, the famed US investor, first shot to prominence for his uncanny ability to predict the 2008 subprime lending crisis. His audacious move to short the US mortgage market at the time earn… [+3011 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Michelle Toh, Carina Cheng",
            "title": "'Where is the phone?' Huawei keeps quiet about Mate 60 Pro but takes aim at Tesla",
            "description": "Huawei has disappointed legions of fans — and US officials — eager to know more about its Mate 60 Pro smartphone, which has quickly become a symbol of the tech rivalry between the United States and China since it went on sale last month.",
            "url": "https://www.cnn.com/2023/09/25/tech/huawei-mate-60-pro-product-launch/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230925144732-huawei-store-0922-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-25T12:30:21Z",
            "content": "Editors Note: Sign up for CNNs Meanwhile in China newsletter which explores what you need to know about the countrys rise and how it impacts the world.\r\nHuawei has disappointed legions of fans and US… [+4424 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "investors.com",
            "title": "These Are The 12 Stocks Driving The S&P 500 Higher In 2023",
            "description": "The S&P 500 is up 12.5% so far in 2023, even with the stock market in a correction. The Invesco S&P 500 Equal Weight ETF (RSP) is up just 1%. But several megacaps are driving the benchmark index this year, notably Nvidia (NVDA), Meta Platforms (META) and Tesl…",
            "url": "https://biztoc.com/x/bc7234d0434c02d3",
            "urlToImage": "https://c.biztoc.com/p/bc7234d0434c02d3/s.webp",
            "publishedAt": "2023-09-25T12:24:07Z",
            "content": "The S&amp;P 500 is up 12.5% so far in 2023, even with the stock market in a correction. The Invesco S&amp;P 500 Equal Weight ETF (RSP) is up just 1%. But several megacaps are driving the benchmark in… [+291 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "vanityfair.com",
            "title": "13 New Books to Read This Month",
            "description": "Three new books collect bounteous beauty, from pop art to the automotive. ‘The Atlas of Car Design’ by Jason Barlow, with Guy Bird and an introduction by Brett Berk This rich history traces more than a century of stylish autos, from the mass-produced 1901 Old…",
            "url": "https://biztoc.com/x/08daecf742726beb",
            "urlToImage": "https://c.biztoc.com/p/08daecf742726beb/s.webp",
            "publishedAt": "2023-09-25T12:14:33Z",
            "content": "Three new books collect bounteous beauty, from pop art to the automotive.The Atlas of Car Design by Jason Barlow, with Guy Bird and an introduction by Brett Berk This rich history traces more than a … [+299 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures Fall As Market Correction Worsens; 10-Year Treasury Spikes To New High",
            "description": "The stock market correction continues, with the major indexes set to open lower.",
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-correction-worsens-ten-year-treasury-spikes-to-new-high/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2017/02/stock-wallStreet-1-shutter.jpg",
            "publishedAt": "2023-09-25T12:12:08Z",
            "content": "Dow Jones futures fell modestly Monday morning, along with S&amp;P 500 futures and Nasdaq futures, as the ongoing stock market correction deepens. The 10-year Treasury yield spiked to new highs early… [+5842 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Danielle Chemtob, Forbes Staff, \n Danielle Chemtob, Forbes Staff\n https://www.forbes.com/sites/daniellechemtob/",
            "title": "Forbes Daily: Writers’ Strike Reaches Deal, Another Strike Expands",
            "description": "WGA ends picketing after tentative deal; Amazon's big AI investment; tech stocks' cruel summer; investing tips to beat inflation; exploring what's next for Fox; and more",
            "url": "https://www.forbes.com/sites/daniellechemtob/2023/09/25/forbes-daily-writers-strike-reaches-deal-another-strike-expands/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65116a43e4e25b465aa2db63/0x0.jpg?format=jpg&crop=1803,1014,x0,y92,safe&width=1200",
            "publishedAt": "2023-09-25T12:10:06Z",
            "content": "This is a published version of the Forbes Daily newsletter, you can sign-up to get Forbes Daily in your inbox here.\r\nGood morning,\r\nThe iPhone 15 officially made its debut Friday to long lines in cit… [+10865 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Electrek"
            },
            "author": "Fred Lambert",
            "title": "Tesla considering EV factory in Thailand, reports prime minister after meeting with Elon Musk",
            "description": "Tesla is reportedly considering building an electric vehicle factory in Thailand, according to Prime Minister Srettha Thavisin after meeting with Elon Musk.\n more…\nThe post Tesla considering EV factory in Thailand, reports prime minister after meeting with El…",
            "url": "https://electrek.co/2023/09/25/tesla-ev-factory-thailand-prime-minister-elon-musk/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/06/Tesla-factory-rendering.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-25T12:07:01Z",
            "content": "Tesla is reportedly considering building an electric vehicle factory in Thailand, according to Prime Minister Srettha Thavisin after meeting with Elon Musk.\r\nLast week, Tesla CEO Elon Musk met with T… [+1302 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Nissan says all new models coming to Europe will be fully electric",
            "description": "Nissan says all new models coming to Europe will be fully electric",
            "url": "https://www.investing.com/news/stock-market-news/nissan-says-all-new-models-coming-to-europe-will-be-fully-electric-3181887",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEAA90M6_L.jpg",
            "publishedAt": "2023-09-25T12:05:45Z",
            "content": "By Nick Carey\r\nLONDON (Reuters) - Nissan (OTC:NSANY) Motor Co said on Monday that as of now all new models it launches in Europe will be fully electric and it plans to sell only electric vehicles on … [+1177 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNA"
            },
            "author": null,
            "title": "Nissan says all new models coming to Europe will be fully electric",
            "description": "LONDON : Nissan Motor Co said on Monday that as of now all new models it launches in Europe will be fully electric and it plans to sell only electric vehicles on the continent by 2030.\"There is no turning back now,\" Nissan CEO Makoto Uchida said in a statemen…",
            "url": "https://www.channelnewsasia.com/business/nissan-says-all-new-models-coming-europe-will-be-fully-electric-3797161",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--FlfcimZU--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-09-25t120431z_1_lynxmpej8o0g2_rtroptp_3_nissan-suv.jpg?itok=hbZdYg2U",
            "publishedAt": "2023-09-25T12:04:31Z",
            "content": "LONDON : Nissan Motor Co said on Monday that as of now all new models it launches in Europe will be fully electric and it plans to sell only electric vehicles on the continent by 2030.\r\n\"There is no … [+1146 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "U.S. Department of Energy",
            "title": "15 Wind Power Projects Get $27 Million From US DOE Wind Energy Technologies Office",
            "description": "DOE Wind Energy Technologies Office Selects 15 Projects Totaling $27 Million to Address Key Deployment Challenges for Offshore, Land-Based, and Distributed Wind In December 2022, the U.S. Department of Energy’s (DOE) Wind Energy Technologies Office (WETO) rel…",
            "url": "https://cleantechnica.com/2023/09/25/15-wind-power-projects-get-27-million-from-us-doe-wind-energy-technologies-office/",
            "urlToImage": "https://cleantechnica.com/files/2023/04/Wind-turbines-energy-CleanTechnica-watermark.png",
            "publishedAt": "2023-09-25T12:03:20Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nDOE Wind Energy Technologies Office Selects 15 Projects Totaling $27 Million to Address Key Deployment Challe… [+15809 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla China Rival Following Musk's Playbook? Xpeng Drops LiDAR From Revamped P5 Sedan",
            "description": "Chinese EV manufacturer XPeng Inc XPEV has unveiled its 2024 P5 sedan, but it has opted to ditch a key technology. What Happened: The new P5 comes in two trims, the P5 500 Plus priced at 156,900 yuan and the P5 500 Pro priced at 174,900 yuan. While the car bo…",
            "url": "https://biztoc.com/x/4f2a646cc8e52715",
            "urlToImage": "https://c.biztoc.com/p/4f2a646cc8e52715/s.webp",
            "publishedAt": "2023-09-25T12:02:12Z",
            "content": "Chinese EV manufacturer XPeng Inc XPEV has unveiled its 2024 P5 sedan, but it has opted to ditch a key technology.What Happened: The new P5 comes in two trims, the P5 500 Plus priced at 156,900 yuan … [+269 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Brad Templeton, Senior Contributor, \n Brad Templeton, Senior Contributor\n https://www.forbes.com/sites/bradtempleton/",
            "title": "How Long Should A Robotaxi Last?",
            "description": "GM hopes for a million mile life from the Origin, but will it be obsolete before then?  Many factors go into figuring out the right lifetime in miles and years.",
            "url": "https://www.forbes.com/sites/bradtempleton/2023/09/25/how-long-should-a-robotaxi-last/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6510ff5abba8ce82bd13b91b/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-09-25T12:00:00Z",
            "content": "Cruise has suggested their Origin design might last a million miles, and see over 20 hours/day of ... [+] service\r\nCruise\r\nGeneral Motors Cruise unit has big plans for their custom-designed Origin ro… [+8793 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "Futures muted on lingering concerns over elevated rates",
            "description": "U.S. stock index futures were lackluster on Monday as concerns over interest rates staying higher for longer kept the 10-year Treasury yield buoyant, while investors awaited economic data and Federal Reserve policymakers' remarks throughout the week. The S&P …",
            "url": "https://biztoc.com/x/1dd6a25962977ad3",
            "urlToImage": "https://c.biztoc.com/p/1dd6a25962977ad3/s.webp",
            "publishedAt": "2023-09-25T11:56:08Z",
            "content": "U.S. stock index futures were lackluster on Monday as concerns over interest rates staying higher for longer kept the 10-year Treasury yield buoyant, while investors awaited economic data and Federal… [+296 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "These Are The 12 Stocks Driving The S&P 500 Higher In 2023",
            "description": "The index is up 12.5% so far in 2023, but an equal-weight ETF is up just 1%.",
            "url": "https://www.investors.com/news/sp-500-the-12-stocks-driving-the-index-higher-in-2023/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2018/07/stock-bull-charge-02-adobe.jpg",
            "publishedAt": "2023-09-25T11:45:14Z",
            "content": "The S&amp;P 500 is up 12.5% so far in 2023, even with the stock market in a correction. The Invesco S&amp;P 500 Equal Weight ETF (RSP) is up just 1%. But several megacaps are driving the benchmark in… [+7441 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "theinformation.com",
            "title": "Exclusive from The Electric: GM’s New CTO Says the Company Should Make Its Own Batteries",
            "description": "In 2003, General Motors killed the EV1, its first electric vehicle, and it has been branded a Luddite ever since. Gil Golan, who worked on the car as a young engineer, argues that the rap is unfair. Golan, named this month as GM’s chief technology officer and…",
            "url": "https://biztoc.com/x/2cd6e4140b886f58",
            "urlToImage": "https://c.biztoc.com/p/2cd6e4140b886f58/s.webp",
            "publishedAt": "2023-09-25T11:44:19Z",
            "content": "In 2003, General Motors killed the EV1, its first electric vehicle, and it has been branded a Luddite ever since. Gil Golan, who worked on the car as a young engineer, argues that the rap is unfair. … [+296 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
            "title": "Shock Crypto Leak Reveals Microsoft Could Be About To Blow Up The Price Of Bitcoin, Ethereum, XRP And BNB",
            "description": "A shock leak has revealed Microsoft could be about to cause bitcoin, ethereum, XRP, BNB and crypto price chaos...",
            "url": "https://www.forbes.com/sites/digital-assets/2023/09/25/shock-crypto-xbox-leak-reveals-microsoft-could-be-about-to-blow-up-the-price-of-bitcoin-ethereum-xrp-and-bnb/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/650ff49a4d64ab4881b1c2ff/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-09-25T11:38:08Z",
            "content": "BitcoinBTC\r\n and other major cryptocurrenciesincluding ethereum, XRPXRP\r\n and BNBBNB\r\nare trading sideways as the market braces for a fast-growing $17.7 trillion Wall Street earthquake.\r\nSubscribenow… [+3423 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Information"
            },
            "author": "Steve LeVine",
            "title": "Exclusive from The Electric: GM’s New CTO Says the Company Should Make Its Own Batteries",
            "description": "In 2003, General Motors killed the EV1, its first electric vehicle, and it has been branded a Luddite ever since. Gil Golan, who worked on the car as a young engineer, argues that the rap is unfair. Golan, named this month as GM’s chief technology officer and…",
            "url": "https://www.theinformation.com/articles/exclusive-from-the-electric-gms-new-cto-says-the-company-should-make-its-own-batteries",
            "urlToImage": "https://tii.imgix.net/production/articles/11326/564dee48-fd92-4c02-b490-f383b1fba2b5-oWsQma.jpg?fm=jpg&auto=compress&w=1200&frame=0",
            "publishedAt": "2023-09-25T11:30:22Z",
            "content": "In 2003, General Motors killed the EV1, its first electric vehicle, and it has been branded a Luddite ever since. Gil Golan, who worked on the car as a young engineer, argues that the rap is unfair. … [+2861 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Cody Willard",
            "title": "Revolution Investing: Semiconductor companies are in denial about this sea-change with their biggest customers",
            "description": "Makers of computers, smartphones and other products are designing semiconductor chips in-house.",
            "url": "https://www.marketwatch.com/story/semiconductor-companies-are-in-denial-about-this-sea-change-with-their-biggest-customers-ee905524",
            "urlToImage": "https://images.mktw.net/im-467432/social",
            "publishedAt": "2023-09-25T11:23:11Z",
            "content": "The world is experiencing a multi-trillion-dollar shift in the semiconductor industry. The semiconductor revolution (which I have discussed for years) has enabled much of the technological progress w… [+8627 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Cody Willard",
            "title": "Semiconductor companies are in denial about this sea-change with their biggest customers",
            "description": "Makers of computers, smartphones and other products are designing semiconductor chips in-house.",
            "url": "https://www.marketwatch.com/story/semiconductor-companies-are-in-denial-about-this-sea-change-with-their-biggest-customers-ee905524",
            "urlToImage": "https://images.mktw.net/im-467432/social",
            "publishedAt": "2023-09-25T11:18:00Z",
            "content": "The world is experiencing a multi-trillion-dollar shift in the semiconductor industry. The semiconductor revolution (which I have discussed for years) has enabled much of the technological progress w… [+8627 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CleanTechnica"
            },
            "author": "RMI",
            "title": "What A 20 Million Heat Pump Commitment Means For The US",
            "description": "A consortium of US states and territories just announced a commitment to deploy 20 million heat pumps by 2030. Here’s why that matters.",
            "url": "https://cleantechnica.com/2023/09/25/what-a-20-million-heat-pump-commitment-means-for-the-us/",
            "urlToImage": "https://cleantechnica.com/files/2023/09/hpt-2020-v-2030.png",
            "publishedAt": "2023-09-25T11:01:13Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nLast week, a consortium of US states and territories representing more than half of the US economy announced … [+7586 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hubspot.com"
            },
            "author": "ttaylor@hubspot.com (Tristen Taylor)",
            "title": "How the Internet Works: An Explanation Even Non-Techies Can Understand",
            "description": "The internet is a marvel of modern technology, connecting people and information across the globe. But have you ever wondered how it actually works?",
            "url": "https://blog.hubspot.com/marketing/how-the-internet-works#article",
            "urlToImage": "https://blog.hubspot.com/hubfs/how%20the%20internet%20works.png#keepProtocol",
            "publishedAt": "2023-09-25T11:00:00Z",
            "content": "The internet is a marvel of modern technology, connecting people and information across the globe. But have you ever wondered how it actually works?\r\nIn this blog post, well break it down into easy-t… [+6763 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Finbold.com"
            },
            "author": "Jordan Major",
            "title": "Where will Tesla stock be in 1 year?",
            "description": "The one-year trajectory of Tesla Inc.’s (NASDAQ: TSLA) stock is a subject of considerable intrigue among traders and market enthusiasts. As … Continued\nThe post Where will Tesla stock be in 1 year? appeared first on Finbold.",
            "url": "https://finbold.com/where-will-tesla-stock-be-in-1-year/",
            "urlToImage": "https://finbold.com/app/uploads/2023/09/Where-will-Tesla-stock-be-in-1-year.jpg",
            "publishedAt": "2023-09-25T10:58:12Z",
            "content": "The one-year trajectory of Tesla Inc.s (NASDAQ: TSLA) stock is a subject of considerable intrigue among traders and market enthusiasts. As of the current moment, Tesla’s stock has exhibited notable v… [+2709 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Barbara Kollmeyer",
            "title": "Nine in ten with student debt are worried they can’t meet expenses starting next week. Retailers, look out.",
            "description": "Jefferies did a survey on consumers facing student loan repayments. They found 90% are worried they won't meet expenses, and that means trouble for retailers like Nike, Urban Outfitters and Foot Locker.",
            "url": "https://www.marketwatch.com/story/nine-in-ten-with-student-debt-are-worried-they-cant-meet-expenses-starting-next-week-retailers-look-out-84c818e8",
            "urlToImage": "https://images.mktw.net/im-857272/social",
            "publishedAt": "2023-09-25T10:55:00Z",
            "content": "Stocks are set for a struggle after Fridays weak finish and a third straight weekly decline for the S&amp;P 500 \r\n SPX.\r\n No doubt, many are questioning the upside for stocks against headwinds such a… [+6667 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
            },
            {
            "source": {
            "id": null,
            "name": "International Business Times"
            },
            "author": "Marvie Basilan",
            "title": "Thailand Expects $5B Investment From Google, Microsoft, Tesla For Data Centers, EV Manufacturing Facility",
            "description": "Thailand's Prime Minister Srettha Thavisin was in New York last week to attend the UN General Assembly. He says he expects at least $5 billion in investments from three of the world's tech titans in the coming years.",
            "url": "https://www.ibtimes.com/thailand-expects-5b-investment-google-microsoft-tesla-data-centers-ev-manufacturing-facility-3712956",
            "urlToImage": "https://d.ibtimes.com/en/full/4481676/thailands-new-prime-minister-srettha-thavisin-pictured-large-screen-he-makes-speech-royal.jpg",
            "publishedAt": "2023-09-25T10:46:01Z",
            "content": "KEY POINTS\r\n<ul><li>Thailand's Prime Minister Srettha Thavisin discussed with Microsoft executives about the opportunities in cloud computing sector</li><li>It is not clear if each company will inves… [+3979 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNA"
            },
            "author": null,
            "title": "Sumitomo Metal to invest in Canada's Nano One to collaborate on battery material",
            "description": "TOKYO : Japan's Sumitomo Metal Mining said on Monday it will invest 16.9 million Canadian dollars ($12.5 million) in Canada's battery material company Nano One Materials to collaborate on manufacturing technology for the material.The move comes after Japan an…",
            "url": "https://www.channelnewsasia.com/business/sumitomo-metal-invest-canadas-nano-one-collaborate-battery-material-3796981",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--BYNV11Ue--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/one-cms/images/2021-06/business_1.png?itok=rGtz_C8Z",
            "publishedAt": "2023-09-25T10:32:10Z",
            "content": "TOKYO : Japan's Sumitomo Metal Mining said on Monday it will invest 16.9 million Canadian dollars ($12.5 million) in Canada's battery material company Nano One Materials to collaborate on manufacturi… [+965 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "A millennial who quit teaching to be a full-time Uber and Lyft driver has made $36,000 so far this year",
            "description": "Aaron Lavender. Aaron Lavender Aaron Lavender, 36, gave up teaching last year to work as a full-time Uber and Lyft driver. But he said ride-hailing is more profitable and sustainable as a part-time gig. He said the pay is inconsistent and that he worries abou…",
            "url": "https://biztoc.com/x/07914e65c31992be",
            "urlToImage": "https://c.biztoc.com/p/07914e65c31992be/s.webp",
            "publishedAt": "2023-09-25T10:32:09Z",
            "content": "Aaron Lavender.Aaron LavenderAaron Lavender, 36, gave up teaching last year to work as a full-time Uber and Lyft driver. But he said ride-hailing is more profitable and sustainable as a part-time gig… [+275 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "latimes.com",
            "title": "The race is on for more EV charging stations at stores, offices and apartments",
            "description": "Olivia Simon enjoys a drink while waiting for her Tesla to be charged at a Tesla Supercharger station inside the garage at the Haven apartment complex in Culver City. When city approval of a proposed $350 million skyscraper in downtown Los Angeles was on the …",
            "url": "https://biztoc.com/x/21a2f890cfb349ee",
            "urlToImage": "https://c.biztoc.com/p/21a2f890cfb349ee/s.webp",
            "publishedAt": "2023-09-25T10:24:07Z",
            "content": "Olivia Simon enjoys a drink while waiting for her Tesla to be charged at a Tesla Supercharger station inside the garage at the Haven apartment complex in Culver City.When city approval of a proposed … [+305 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Finbold.com"
            },
            "author": "Vahid Karaahmetovic",
            "title": "S&P 500 is up 13% in 2023; Which stocks are growth drivers?",
            "description": "After weathering a tumultuous 2022 marred by record-high inflation and a hawkish stance from Federal Reserve policymakers, the US stock … Continued\nThe post S&P 500 is up 13% in 2023; Which stocks are growth drivers? appeared first on Finbold.",
            "url": "https://finbold.com/s-which-stocks-are-growth-drivers/",
            "urlToImage": "https://finbold.com/app/uploads/2023/09/SP-500-is-up-13-in-2023-Which-stocks-are-growth-drivers.jpg",
            "publishedAt": "2023-09-25T10:20:54Z",
            "content": "After weathering a tumultuous 2022 marred by record-high inflation and a hawkish stance from Federal Reserve policymakers, the US stock market has undergone a remarkable turnaround in 2023. \r\nImprove… [+2633 chars]"
            },
            {
            "source": {
            "id": "fortune",
            "name": "Fortune"
            },
            "author": "Farah Elbahrawy, Bloomberg",
            "title": "Morgan Stanley strategist Mike Wilson says consumer stocks are set to tumble on student loan restart, high gas prices and a weak housing sector",
            "description": "The current faltering rally is in keeping with the view of Morgan Stanley economists that household spending probably can’t sustain the surprisingly strength of the first three quarters, the strategist said.",
            "url": "https://fortune.com/2023/09/25/morgan-stanley-strategist-mike-wilson-consumer-stocks-tumble-student-loan-restart-high-gas-prices-weak-housing-sector/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/09/GettyImages-837058516-1-e1695636790162.jpg?resize=1200,600",
            "publishedAt": "2023-09-25T10:15:14Z",
            "content": "Consumer stocks, one of the brightest corners of the market this year, are about to lose their shine as risks build for the sector, according to Morgan Stanleys Michael Wilson.The faltering rally is … [+1982 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "forbes.com",
            "title": "Will Tesla’s Booming Energy Storage Business Help Its Stock?",
            "description": "The renewable energy sector is poised to see demand surge in the coming years, driven by government incentives and urgency to combat climate change. The biggest tailwind for the green industry comes from the Inflation Reduction Act, which was signed into law …",
            "url": "https://biztoc.com/x/fd76d98890e3f884",
            "urlToImage": "https://c.biztoc.com/p/fd76d98890e3f884/s.webp",
            "publishedAt": "2023-09-25T10:04:06Z",
            "content": "The renewable energy sector is poised to see demand surge in the coming years, driven by government incentives and urgency to combat climate change. The biggest tailwind for the green industry comes … [+283 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Futures edge lower on persistent worries over higher rates",
            "description": "Futures edge lower on persistent worries over higher rates",
            "url": "https://www.investing.com/news/economy/futures-edge-lower-on-persistent-worries-over-higher-rates-3181682",
            "urlToImage": "https://i-invdn-com.investing.com/news/SP500StandardandPoors500Index_800x533_L_1657544297.jpg",
            "publishedAt": "2023-09-25T10:00:50Z",
            "content": "(Reuters) - U.S. stock index futures slipped on Monday on concerns over interest rates staying higher for longer, with investors awaiting economic data as well as remarks from Federal Reserve policym… [+2154 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Los Angeles Times"
            },
            "author": "Roger Vincent",
            "title": "The race is on for more EV charging stations at stores, offices and apartments",
            "description": "Commercial landlords and businesses are scrambling to adjust to the changing world of transportation with new EV charging stations. What's next: autonomous parking garages, vehicle-friendly lobbies, rooftop air taxi entrances?",
            "url": "https://www.latimes.com/california/story/2023-09-25/ev-charging-stations-businesses-landlords-race-to-install",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/2774918/2147483647/strip/true/crop/6720x3528+0+476/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F89%2F19%2F429b26134370ba5796caa7c77f39%2F1351046-me-0921-charging-station-scramble-gem-001.jpg",
            "publishedAt": "2023-09-25T10:00:36Z",
            "content": "When cityapproval of a proposed $350 million skyscraper in downtown Los Angeles was on the line, project manager Hamid Behdad knew he had to give in to the last-minute demand of a planning commission… [+11640 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Jacob Zinkula",
            "title": "A millennial who quit teaching to be a full-time Uber and Lyft driver has made $36,000 so far this year — but thinks it's better as a part-time gig",
            "description": "Aaron Lavender, 36, quit teaching to become a full-time Uber and Lyft driver. He said uncertain pay and job security make the job unsustainable.",
            "url": "https://www.businessinsider.com/teacher-quit-to-become-full-time-uber-lyft-driver-2023-9",
            "urlToImage": "https://i.insider.com/650cabf712dc4f001a17a2ba?width=1200&format=jpeg",
            "publishedAt": "2023-09-25T10:00:01Z",
            "content": "Aaron Lavender.Aaron Lavender\r\n<ul><li>Aaron Lavender, 36, gave up teaching last year to work as a full-time Uber and Lyft driver. </li><li>But he said ride-hailing is more profitable and sustainable… [+5231 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The New Yorker"
            },
            "author": "Laura Lane",
            "title": "The Weather App for the Well Connected (And Denny’s!)",
            "description": "The weather-heads at Tomorrow.io, which does bespoke forecasting for companies like the N.F.L. and Delta, were never worried about Hurricane Lee, Laura Lane writes.",
            "url": "https://www.newyorker.com/magazine/2023/10/02/the-weather-app-for-the-well-connected-and-dennys",
            "urlToImage": "https://media.newyorker.com/photos/650e0610f2302a11d71e94b3/16:9/w_1280,c_limit/231002_r43108illuweb-site.jpg",
            "publishedAt": "2023-09-25T10:00:00Z",
            "content": "On a recent Thursday, a hurricane was tracking toward the general vicinity of Boston. How dire was it? Headlines varied from Hurricane Lee to Peak in the Boston Area Around 6 A.M. Saturday (the Globe… [+4697 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "TweakTown"
            },
            "author": "Oliver Haslam",
            "title": "Elon Musk says he's upgrading to an iPhone 15, but which one?",
            "description": "The iPhone 15 and iPhone 15 Pro are both now here and X owner Elon Musk says that he's already planning on picking one of them up. Continue reading at TweakTown >",
            "url": "https://www.tweaktown.com/news/93439/elon-musk-says-hes-upgrading-to-an-iphone-15-but-which-one/index.html",
            "urlToImage": "https://static.tweaktown.com/news/9/3/93439_01_elon-musk-says-hes-upgrading-to-an-iphone-15-but-which-one_full.jpg",
            "publishedAt": "2023-09-25T09:58:13Z",
            "content": "Apple's iPhone 15 and iPhone 15 Pro models are now available to buy and people have been doing that since the September 22 launch last week. Those who got their preorders in quickly will already have… [+1305 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "aol.com",
            "title": "Elon Musk might be the internet's worst boyfriend. At least that's what it seems like in his new biography",
            "description": "None Elon Musk doesn't appear to be an easy person to date, it's revealed in a new biography. • None In the book, some of Musk's former partners detailed instances where they said he was emotionally volatile. • None Musk's ex-girlfriend Grimes, the musician, …",
            "url": "https://biztoc.com/x/7b35a4e8a6ab2f33",
            "urlToImage": "https://c.biztoc.com/p/7b35a4e8a6ab2f33/s.webp",
            "publishedAt": "2023-09-25T09:46:07Z",
            "content": "None Elon Musk doesn't appear to be an easy person to date, it's revealed in a new biography.None In the book, some of Musk's former partners detailed instances where they said he was emotionally vol… [+282 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk might be the internet's worst boyfriend. At least that's what it seems like in his new biography",
            "description": "Elon Musk can be a difficult person to be in a relationship with, Walter Isaacson's new biography on the billionaire reveals. Nathan Howard/Getty Images, Kurt Krieger/Corbis via Getty Images, David M. Benett/Dave Benett/Getty Images for Bulgari, and on Kopalo…",
            "url": "https://biztoc.com/x/552bf36272e4b532",
            "urlToImage": "https://c.biztoc.com/p/552bf36272e4b532/s.webp",
            "publishedAt": "2023-09-25T09:34:09Z",
            "content": "Elon Musk can be a difficult person to be in a relationship with, Walter Isaacson's new biography on the billionaire reveals.Nathan Howard/Getty Images, Kurt Krieger/Corbis via Getty Images, David M.… [+313 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk might be the internet's worst boyfriend. At least that's what it seems like in his new biography",
            "description": "Elon Musk can be a difficult person to be in a relationship with, Walter Isaacson's new biography on the billionaire reveals. Nathan Howard/Getty Images, Kurt Krieger/Corbis via Getty Images, David M. Benett/Dave Benett/Getty Images for Bulgari, and on Kopalo…",
            "url": "https://biztoc.com/x/552bf36272e4b532",
            "urlToImage": "https://c.biztoc.com/p/552bf36272e4b532/s.webp",
            "publishedAt": "2023-09-25T09:34:09Z",
            "content": "Elon Musk can be a difficult person to be in a relationship with, Walter Isaacson's new biography on the billionaire reveals.Nathan Howard/Getty Images, Kurt Krieger/Corbis via Getty Images, David M.… [+313 chars]"
            },
            {
            "source": {
            "id": "news24",
            "name": "News24"
            },
            "author": "Sean Neethling",
            "title": "News24 | OPINION | A bear in bull's clothing? Paying the price for AI in the US Tech",
            "description": "The real challenge for investors is separating fact from fiction in terms of the transformative potential of artificial intelligence and establishing what a fair price is to pay for uncertainty, writes Sean Neethling.",
            "url": "https://www.news24.com/fin24/opinion/opinion-a-bear-in-bulls-clothing-paying-the-price-for-ai-in-the-us-tech-20230925",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/4104/7411a9f84103459b88399dad7e16443b.jpg",
            "publishedAt": "2023-09-25T09:23:10Z",
            "content": "The real challenge for investors is separating fact from fiction in terms of the transformative potential of artificial intelligence and establishing what a fair price is to pay for uncertainty, writ… [+9880 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "National Observer"
            },
            "author": "Cloe Logan",
            "title": "A case for electric lobster boats",
            "description": "A new report by Oceans North found that around 70 per cent of Nova Scotia’s lobster boat fleet operates within 20 kilometres of shore, which makes existing battery-electric propulsion systems feasible for the vessels.",
            "url": "https://www.nationalobserver.com/2023/09/25/news/case-electric-lobster-boats",
            "urlToImage": "https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_social/public/img/2023/09/22/nick-hawkins-eastern-shore-nova-scotia-0729.jpg?itok=zQBmpDCb",
            "publishedAt": "2023-09-25T09:14:47Z",
            "content": "For a couple of months a year, Andrew Arbuckle fishes for lobster in the Northumberland Strait, an area in Atlantic Canada with shallow, warm water he describes as “pristine.”\r\nWhat’s not pristine ar… [+3936 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yahoo Entertainment"
            },
            "author": "Farah Elbahrawy",
            "title": "Morgan Stanley’s Wilson Sees Risks Rising for US Consumer Stocks",
            "description": "(Bloomberg) -- Consumer stocks, one of the brightest corners of the market this year, are about to lose their shine as risks build for the sector, according ...",
            "url": "https://finance.yahoo.com/news/morgan-stanley-wilson-sees-risks-091310272.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/15fe6af6604faa05c5e08835a4a9b37f",
            "publishedAt": "2023-09-25T09:13:10Z",
            "content": "(Bloomberg) -- Consumer stocks, one of the brightest corners of the market this year, are about to lose their shine as risks build for the sector, according to Morgan Stanleys Michael Wilson.\r\nMost R… [+2207 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Sean Tucker",
            "title": "Kelley Blue Book: California makes a big change to its electric-vehicle rebate program",
            "description": "California will end its popular rebate program that provides incentives to residents who buy electric vehicles. Here's what the state is doing instead.",
            "url": "https://www.marketwatch.com/story/california-makes-a-big-change-to-its-electric-vehicle-rebate-program-c409366e",
            "urlToImage": "https://images.mktw.net/im-856564/social",
            "publishedAt": "2023-09-25T09:08:38Z",
            "content": "California will end a popular rebate program that provides incentives to state residents who buy electric vehicles. In its place, the state will launch a new program focused on helping low- to middle… [+2790 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Sally French",
            "title": "What to do if you get ghosted by a vacation rental host",
            "description": "Ghosting is a challenge facing the ever-growing list of peer-to-peer travel platforms—and they don't all have the customer support needed to make you whole.",
            "url": "https://www.marketwatch.com/story/what-to-do-if-you-get-ghosted-by-a-vacation-rental-host-a0cf0e33",
            "urlToImage": "https://images.mktw.net/im-856663/social",
            "publishedAt": "2023-09-25T09:04:00Z",
            "content": "Lauren Gumport was en route to a vacation on the island of Chios, Greece, in July, where she was set to stay in an Airbnb \r\n ABNB,\r\n -0.41%\r\n for five nights with her best friend.But upon her arrival… [+6036 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Trefis Team, Contributor, \n Trefis Team, Contributor\n https://www.forbes.com/sites/greatspeculations/people/trefis/",
            "title": "Will Tesla’s Booming Energy Storage Business Help Its Stock?",
            "description": "The renewable energy sector is poised to see demand surge in the coming years, driven by government incentives and urgency to combat climate change.",
            "url": "https://www.forbes.com/sites/greatspeculations/2023/09/25/will-teslas-booming-energy-storage-business-help-its-stock/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/651101d128111c1ff5783e6c/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-09-25T09:00:00Z",
            "content": "FREMONT, CALIFORNIA - SEPTEMBER 18: In an aerial view, the exterior of the Tesla automotive company ... [+] manufacturing facility is seen on September 18, 2023 in Fremont, California. Israeli Prime … [+4274 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Grace Kay",
            "title": "Elon Musk might be the internet's worst boyfriend. At least that's what it seems like in his new biography.",
            "description": "What's it like to date the richest man in the world? It's not all glitz and glamour. A new biography of Elon Musk paints a somewhat sobering picture.",
            "url": "https://www.businessinsider.com/elon-musk-worst-boyfriend-grimes-amber-heard-new-biography-2023-9",
            "urlToImage": "https://i.insider.com/65046bb4956dba001ace577b?width=1200&format=jpeg",
            "publishedAt": "2023-09-25T08:58:01Z",
            "content": "Elon Musk can be a difficult person to be in a relationship with, Walter Isaacson's new biography on the billionaire reveals.Nathan Howard/Getty Images, Kurt Krieger/Corbis via Getty Images, David M.… [+6758 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Autoblog"
            },
            "author": "Insider",
            "title": "Elon Musk might be the internet's worst boyfriend",
            "description": "Filed under:\n Nissan,First Drives,Coupe,Performance\n Continue reading Elon Musk might be the internet's worst boyfriend\nElon Musk might be the internet's worst boyfriend originally appeared on Autoblog on Mon, 25 Sep 2023 04:58:00 EDT. Please see our terms fo…",
            "url": "https://www.autoblog.com/2023/09/25/elon-musk-might-be-the-internet-s-worst-boyfriend-new-biography/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://media.zenfs.com/en/insider_articles_922/242b6a0037713428d5f41ea56943a8cc",
            "publishedAt": "2023-09-25T08:58:00Z",
            "content": "Elon Musk can be a difficult person to be in a relationship with, Walter Isaacson's new biography on the billionaire reveals. \r\n Nathan Howard/Getty Images, Kurt Krieger/Corbis via Getty Images, Davi… [+6454 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Lindsay Kornick",
            "title": "AOC grilled on her non-union electric vehicle while supporting UAW strike",
            "description": "Rep. Alexandria Ocasio-Cortez, D-N.Y., agreed that she owns a non-union made vehicle despite supporting the UAW strike because it was purchased during the pandemic.",
            "url": "https://www.foxnews.com/media/aoc-grilled-non-union-electric-vehicle-while-supporting-uaw-strike",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/xxUAW-strike.jpeg",
            "publishedAt": "2023-09-25T08:00:39Z",
            "content": "Rep. Alexandria Ocasio-Cortez, D-N.Y., defended the use of her non-union made electric car while supporting the United Auto Workers (UAW) strike on Sunday.\r\nThe progressive \"Squad\" member appeared on… [+3037 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla Autopilot Head Echoes Musk's Rage Against LiDAR For Optimus, EVs In Favor Of Neural Networks: 'It Will Become So Obvious...'",
            "description": "Tesla Inc‘s TSLA humanoid bot Optimus, like the company’s electric cars, relies on neural networks and cameras, eschewing Light Detection and Ranging (LiDAR). The company’s executives, including the chief himself, reinforced this. What Happened: Tesla’s Direc…",
            "url": "https://biztoc.com/x/b7a7ced559398fd6",
            "urlToImage": "https://c.biztoc.com/p/b7a7ced559398fd6/s.webp",
            "publishedAt": "2023-09-25T08:00:08Z",
            "content": "Tesla Incs TSLA humanoid bot Optimus, like the companys electric cars, relies on neural networks and cameras, eschewing Light Detection and Ranging (LiDAR). The companys executives, including the chi… [+278 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Livemint"
            },
            "author": "Economist",
            "title": "Will the auto workers’ strike jeopardise Joe Biden’s manufacturing boom?",
            "description": "A report from the front line of Joe Biden’s industrial revival",
            "url": "https://www.livemint.com/industry/manufacturing/will-the-auto-workers-strike-jeopardise-joe-biden-s-manufacturing-boom-11695625101765.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/25/600x338/US-UAW-EXPANDS-ONGOING-STRIKE-AGAINST-BIG-THREE-AU_1695625621639_1695625621985.jpg",
            "publishedAt": "2023-09-25T07:12:30Z",
            "content": "Stanton, Tennessee, looks like a place from a bygone age. The town hall quaintly resembles a 1960s grocery store. Next door is a cannery, where townsfolk use communal stoves to make soups and peach p… [+11060 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Moneycontrol"
            },
            "author": "Reuters",
            "title": "UK#39;s fossil fuel car ban delay may only stall investment",
            "description": "UK Prime Minister Rishi Sunak, who is expected to face a tough election in 2024, said the five-year delay to 2035 was not political and was about &quot;doing what's right for the country&quot;.",
            "url": "https://www.moneycontrol.com/news/world/uks-fossil-fuel-car-ban-delay-may-only-stall-investment-11422801.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/04/Mongabay_Fossil-Fuel-770x433.jpg",
            "publishedAt": "2023-09-25T07:08:57Z",
            "content": "Britain's decision to delay a ban on new fossil fuel car sales may make little difference to the pace of a shift to electric vehicles (EVs), even though the news drew anger from automakers worried ab… [+3945 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "watcher.guru",
            "title": "Bitcoin Market to See Capital Influx of $300 Billion: Morgan Creek CEO",
            "description": "A few hours ago, Bitcoin dropped below the $26,000 threshold and created a low of around $25,987. However, many in the community believe that BTC’s “fair value” is much higher. According to Mark Yusko, founder and CEO of Morgan Creek Capital Management, the l…",
            "url": "https://biztoc.com/x/57c00b70fe2a8567",
            "urlToImage": "https://c.biztoc.com/p/57c00b70fe2a8567/s.webp",
            "publishedAt": "2023-09-25T07:00:10Z",
            "content": "A few hours ago, Bitcoin dropped below the $26,000 threshold and created a low of around $25,987. However, many in the community believe that BTCs fair value is much higher. According to Mark Yusko, … [+273 chars]"
            },
            {
            "source": {
            "id": "mashable",
            "name": "Mashable"
            },
            "author": "Waquar Haider",
            "title": "Switching to iPhone 15; Here's how to transfer data from Android to your new device",
            "description": "A comprehensive guide on the process of transferring data from Android to iPhone is provided below.",
            "url": "https://me.mashable.com/tech/32800/switching-to-iphone-15-heres-how-to-transfer-data-from-android-to-your-new-device",
            "urlToImage": "https://sm.mashable.com/mashable_me/seo/default/iphone-15-pro-max-news_3sdc.jpg",
            "publishedAt": "2023-09-25T06:45:04Z",
            "content": "The highly anticipated iPhone 15 series by Apple is now available for purchase. This new series was unveiled at Apple's prestigious Wonderlust event on September 22nd, featuring the iPhone 15, iPhone… [+2329 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNA"
            },
            "author": null,
            "title": "Analysis:UK's fossil fuel car ban delay may only stall investment",
            "description": "LONDON : Britain's decision to delay a ban on new fossil fuel car sales may make little difference to the pace of a shift to electric vehicles (EVs), even though the news drew anger from automakers worried about supply chains and investment uncertainty.UK Pri…",
            "url": "https://www.channelnewsasia.com/business/analysisuks-fossil-fuel-car-ban-delay-may-only-stall-investment-3796476",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--HNKsDiNt--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-09-25t062145z_4_lynxmpej8o056_rtroptp_3_britain-climate-autos-electric.jpg?itok=7KIDddyD",
            "publishedAt": "2023-09-25T06:23:41Z",
            "content": "LONDON : Britain's decision to delay a ban on new fossil fuel car sales may make little difference to the pace of a shift to electric vehicles (EVs), even though the news drew anger from automakers w… [+4081 chars]"
            }
            ]
            }
    ]

    constructor(){
        super();
        console.log("Hello I am a constructor")
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=fb82dc8811b147fe981f3e7bb772b68b&page=1&pageSize=20"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
    }

    handlePrevClicker= async() => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=fb82dc8811b147fe981f3e7bb772b68b&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page : this.state.page-1,
            articles:parsedData.articles
        })
    }

    handleNextClicker= async() => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=fb82dc8811b147fe981f3e7bb772b68b&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            page : this.state.page+1,
            articles:parsedData.articles
        })
    }
}

  render() {
    return (
      <div className='container my-3'>
        <h2>News - Top HeadLines</h2>
            <div className="row">
            {this.state.articles.map((ele) =>{
                return <div className="col-md-4" key={ele.url}>
                    <NewsItem title = {ele.title?ele.title:""} description = {ele.description?ele.description:""} imageUrl={ele.urlToImage} newsurl= {ele.url}/>
                </div>
            })}
            </div>

            <div className="container d-flex justify-content-between"> 
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClicker}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClicker}>Next &rarr;</button>
            </div>
      </div>
    )
  }
}