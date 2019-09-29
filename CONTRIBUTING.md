## Submit your Animoji

The [/src/store/listAnime.js](/src/store/listAnime.js) file contains all the Animojis in the json array.
To add your Animoji, follow the steps below:

* Fork & give star to animoji repository
* Think of the emojis that characterize your favorite anime, you can look for Emojis at [getemoji.com](https://getemoji.com/).
* Open [listAnime.js](/src/store/listAnime.js) in the [/src/store/](/src/store/) directory and use the template below to add animoji:
This is example : 

```
{
        animeEmoji:" 🏀 🏆 ⛹🏻‍♂️",
        animeName:"Kuroko's Basketball",
        animeYear:2012,
        animeLink:"https://myanimelist.net/anime/11771/Kuroko_no_Basket"
    }
```
* If the PR is based on issue please mention reference the issue 
* Submit a Pull Request with your Animoji.
* Dont forget to fill the template in [pull_request_template.md](.github/PULL_REQUEST_TEMPLATE/pull_request_template.md)
* Wait until approved and combined, updates will be published to [animoji.netlify.com](https://animoji.netlify.com/)