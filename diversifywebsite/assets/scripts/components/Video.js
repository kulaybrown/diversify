import $ from "jquery";

class Video {
  constructor(element) {
    this.$element = $(element);
    this.$video = this.$element.find("video");
    this.$actionPauseVideo = this.$element.find(".video__action-play-pause");
    this.addListeners();
  }

  addListeners() {
    this.$actionPauseVideo.on("click", this.toggleVideo.bind(this));
  }

  toggleVideo() {
    if (this.$video[0].paused) {
      this.$video[0].play();
    } else {
      this.$video[0].pause();
    }
    this.$actionPauseVideo.toggleClass("video__action-play-pause--pause");
  }
}

$(".section-textandimage-right-video").each(
  (index, element) => new Video(element)
);
