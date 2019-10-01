## Submit your Animoji

The [/src/store/listAnime.js](/src/store/listAnime.js) file contains all the Animojis in the json array.

To add your Animoji, follow the steps below:

* Fork & give star to animoji repository
* Think of the emojis that characterize your favorite anime, you can look for Emojis at [getemoji.com](https://getemoji.com/).
* Open [listAnime.js](/src/store/listAnime.js) in the [/src/store/](/src/store/) directory and use the template below to add animoji:
* The Maximum emojis is 5 and The Minimum emojis is 3, other than that your PR will be closed

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
* 1 Pull request for 1 anime
* Please check [listAnime.js](/src/store/listAnime.js) and make sure that your PR is not duplicate
* Dont forget to fill the template in [pull_request_template.md](.github/PULL_REQUEST_TEMPLATE/pull_request_template.md)
* If you make pull request without template , your pull request will be ignored 
* Submit a Pull Request with your Animoji.
* Wait until approved and combined, updates will be published to [animoji.netlify.com](https://animoji.netlify.com/)
