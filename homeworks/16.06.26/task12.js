// 12. YouTube Kanal
// YouTubeChannel class yarating. #subscribers. subscribe(count),
// unsubscribe(count). static totalChannels.

class YoutubeChannel {
  #subscribers = 0;
  static totalChannels = 0;
  constructor() {
    ++YoutubeChannel.totalChannels;
  }

  subscribe(count) {
    this.#subscribers += count;
  }
  unsubscribe(count) {
    this.#subscribers -= count;
  }
}

const channel1 = new YoutubeChannel();
const channel2 = new YoutubeChannel();
const channel3 = new YoutubeChannel();

console.log(YoutubeChannel.totalChannels);
