import "slick-carousel";
import $ from "jquery";

class TextandImageSlider {
  constructor(element) {
    this.$element = $(element);
    this.$carouselTextandMedia = this.$element.find(".textandimage-slider");

    this.initCarousel();
  }

  initCarousel() {
    this.$carouselTextandMedia.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: this.$element.find(".slider-image-controls__next-button"),
      prevArrow: this.$element.find(".slider-image-controls__previous-button"),
    });
  }
}

$(".section-textandimage-left").each(
  (index, element) => new TextandImageSlider(element)
);
