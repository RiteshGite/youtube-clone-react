const GOOGLE_API_KEY="AIzaSyBjm1-5szudXBxiFqkUYjvk2HwGMSU1t4g"

export const YOUTUBE_VIDEOS_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;
 

export const YOUTUBE_SEARCH_API=
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" + GOOGLE_API_KEY + "&q=";

export const LIVE_CHAT_COUNT = 25;