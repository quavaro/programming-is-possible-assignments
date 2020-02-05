Homework 00: A Good Program

I often use the Google Docs, Google Sheets, and Google Slides for professional and academic purposes. I think that they are, for the most part, good programs in the sense that they work reasonably well, allow for a high level of collaboration, and create files in multiple non-proprietary formats. You can edit concurrently with members of your team or group, comment or suggest, manage access. The interface is clean and very easy to use, with a familiar feel and feature set that is basically a limited copy of some of the most popular productivity software in the market, with the addition of easy and powerful real-time collaborative tools. It allows you to download your file in multiple formats (.docx, .rtf, .pdf, .odt, .txt, .html, .epub in Google Docs, for instance), allowing for interoperability with other systems and software. The programs are actively maintained, with new features often sprouting up.

But the programs have their drawbacks as well. They generally require internet access, so you are trading some access and ownership of your files in exchange for the ability to collaborate. On the other hand, you don't lose your file in the classic scenario of a computer crashing before Microsoft Word auto-saves.

In the development sense, there is not much of a culture around them, because the code is closed off and proprietary. There are plenty of resources, blog posts, and videos provided by Google as well as third parties to help you use the software. Getting your data out of it programatically is another issues. The APIs for the services are relatively cagey and hard to use. Unlike some services I have used, where you just grab credentials and plug in, the Google Sheets API, for example requires you to install a large client library. If you are using PHP, you have to install the library with Composer and make sure that you have a recent version of PHP (I was working in this case on a legacy server that had PHP 5.3.14—so close). Then, you can't just use an API key because it will ask the client to log in and make sure that they have access to the sheet. So you have to create a service account instead and give it explicit edit access to your Google Sheet. At this point, I question whether I really need to use Google Sheets or whether there is a lighter solution.

And so, having done the readings, I can see some of the issues from Stevey’s Google Platforms Rant manifesting themselves in the Google productivity suite. They are quite clearly products first, with platform features tacked on. It could be my lack of expertise but it seems to me that Google lets outside code make requests of it grudgingly, after you prove your dedication to the endeavor by fetching this and that library and dependency manager and version and so on. It reminds me of a quote by Roland Barthes:

“A mandarin fell in love with a courtesan. 'I shall be yours,' she told him, 'when you have spent a hundred nights waiting for me, sitting on a stool, in my garden, beneath my window.' But on the ninety-ninth night, the mandarin stood up, put his stool under his arm, and went away.”

― Roland Barthes, A Lover's Discourse: Fragments