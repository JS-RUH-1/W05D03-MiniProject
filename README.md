# Youtube website  

You will be making a youtube clone using react and redux
You can find the documentation for youtube API [here](https://developers.google.com/youtube/v3/docs/videos/list)
* The home page should display the most popular videos from youtube api (https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=YOUR-KEY).
* There should be search bar to search and display videos from youtube api (https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=hello&key=YOUR_KEY).
* When clicking on video you should go to another component and display the video and some details about the video like (title, publishedAt, channelTitle, description).
* In the video details component there should be watch later button when clicking it it will add the video to state in a reducer (using redux).
* After clicking watch later it should redirect you to another page where the watched later videos will be displaed with delete button for each one.

## Bonus 
* Dark light theme using redux.
* Switch website between arabic and english based on choosen language. 
## To get key for Youtube API you can follow these resources:
* [1](https://blog.hubspot.com/website/how-to-get-youtube-api-key)
* [2](https://www.youtube.com/watch?v=pP4zvduVAqo)