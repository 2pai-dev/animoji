## Submit your Animoji

The [/src/datasource](/src/datasource) directory contains all the Animojis in the json file.

To add your Animoji, follow the steps below:

* Fork & give star to animoji repository
* Think of the emojis that characterize your favorite anime, you can look for Emojis at [getemoji.com](https://getemoji.com/).
* Create new json file with the animeName for name of file json in [/src/datasource](/src/datasource) directory and use the template below to add animoji:
* The Maximum emojis is 8 and The Minimum emojis is 3, other than that your PR will be closed

This is example : 

[shigatsu-wa-kimi-no-uso.json](/src/datasource/shigatsu-wa-kimi-no-uso.json) in the [/src/datasource/](/src/datasource/) 
```
{
    "animeEmoji": "👦🏻 👩🏼 🎻 🎹 😭",
    "animeName": "Shigatsu wa kimi no uso",
    "animeYear": 2014,
    "animeLink": "https://myanimelist.net/anime/23273/Shigatsu_wa_Kimi_no_Uso"
}
```
* If the PR is based on issue please mention reference the issue 
* 1 Pull request for 1 anime
* Please check [/src/datasource](/src/datasource) and make sure that your PR is not duplicate
* Dont forget to fill the template in [pull_request_template.md](.github/PULL_REQUEST_TEMPLATE/pull_request_template.md)
* If you make pull request without template , your pull request will be ignored 
* Submit a Pull Request with your Animoji.
* Wait until approved and combined, updates will be published to [animoji.netlify.com](https://animoji.netlify.com/)
ok
